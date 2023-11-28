import data from "../../data/index.json"

export default function MyPortfolio() {
    return (
        <section className="portfolio-section" id="MyPortfolio">
            <div className="portfolio-container-box">
                <div className="portfolio-container">
                    <p className="sub-title">Recent Work</p>
                    <h2 className="section-heading">My Portfolio</h2>
                </div>
            </div>
            <div className="portfolio-section-container">
                {data?.portfolio?.map((items,index) => (
                    <div key={index} className="portfolio-secton-card">
                        <div className="portfolio-section-img">
                            <img src={items.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio-section-card-content">
                            <div>
                                <h3 className="portfolio-section-title">{items.title}</h3>
                                <p className="text-md">{items.description}</p>
                            </div>
                            <p className="text-sm portfolio-link">{items.link}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}