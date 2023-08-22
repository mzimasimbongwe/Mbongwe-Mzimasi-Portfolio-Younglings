
const PortfolioSection = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <h2 className="page-section__title portfolio__title">
                Latest <span>Projects</span>
            </h2>
            <div className="portfolio__items">
                <div className="portfolio__item">
                    <div className="portfolio__image">
                        <img src="https://i.ibb.co/5kDbhz4/Mzamomtsha-Primary-School.png" alt="portfolio-image-01" />
                    </div>
                    <div className="portfolio__layer">
                        <h4 className="portfolio__sub-title">Mzamomtsha Primary School</h4>
                        <p className="portfolio__description">
                            To support Mzamomtsha Primary School in their mission to provide education to their community, I created a website for the school.
                        </p>
                        <a href="https://github.com/mzimasimbongwe/Mzamomtsha-Primary-School-Final-Website" className="portfolio__link">
                            <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__image">
                        <img src="https://i.ibb.co/b1vhxhg/Tax.png" alt="portfolio-image-02" />
                    </div>
                    <div className="portfolio__layer">
                        <h4 className="portfolio__sub-title">Basic Sars App</h4>
                        <p className="portfolio__description">
                            The Application or system calculator calculates the tax obligation for an individual given his/her annual income.
                        </p>
                        <a href="https://github.com/mzimasimbongwe?tab=repositories" className="portfolio__link">
                            <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                </div>
                {/* Repeat the structure for other portfolio items */}
                <div className="portfolio__item">
                    <div className="portfolio__image">
                        <img src="https://i.ibb.co/8Dfmnx2/Financial.png" alt="portfolio-image-03" />
                    </div>
                    <div className="portfolio__layer">
                        <h4 className="portfolio__sub-title">Financial Calculator</h4>
                        <p className="portfolio__description">
                            A small financial App that allows the user to access two different financial calculators: an investment calculator and a home loan repayment calculator.
                        </p>
                        <a href="https://github.com/mzimasimbongwe/Mzamomtsha-Primary-School-Final-Website" className="portfolio__link">
                            <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__image">
                        <img src="https://i.ibb.co/xMWrpvQ/first-site.png" alt="portfolio-image-04" />
                    </div>
                    <div className="portfolio__layer">
                        <h4 className="portfolio__sub-title">Personal First Portfolio</h4>
                        <p className="portfolio__description">
                            This website showcase my skills: 
                        </p>
                        <a href="https://mzimasi-portifolio.netlify.app/" className="portfolio__link">
                            <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__image">
                        <img src="https://i.ibb.co/5GmTsDm/chat-1.png" alt="portfolio-image-05" />
                    </div>
                    <div className="portfolio__layer">
                        <h4 className="portfolio__sub-title">Chat App</h4>
                        <p className="portfolio__description">
                            Chat Application that allows two users to chat on different computers.
                        </p>
                        <a href="https://github.com/mzimasimbongwe?tab=repositories" className="portfolio__link">
                            <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__image">
                        <img src="https://i.ibb.co/7XcFnzG/Banking-1.png"  alt="portfolio-image-06" />
                    </div>
                    <div className="portfolio__layer">
                        <h4 className="portfolio__sub-title">A Bank Application</h4>
                        <p className="portfolio__description">
                            A Bank application with 2 txt files:
                            <br />
                            Bank Data.txt to keep all your bank information e.g. money you have in your account
                            <br />
                            Transaction Log.txt to keep your transactions e.g. your withdrawals and deposits.
                        </p>
                        <a href="https://github.com/mzimasimbongwe/Banking-App" className="portfolio__link">
                            <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
