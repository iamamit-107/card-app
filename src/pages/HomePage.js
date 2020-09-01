import React from "react";

// importing img
import img from "../assets/images/img1.jpg";

// importing button component
import Button from "../components/Button";

const HomePage = () => {
    return (
        <div id="home-page" className="my-5">
            <div className="container">
                <div className="row">
                    <div className="card mb-3">
                        <div className="row no-gutters d-flex align-items-center">
                            {/* img to show in small screen */}
                            <div className="col-lg-6 show">
                                <img
                                    src={img}
                                    className="card-img img-crop"
                                    alt="..."
                                />
                            </div>
                            {/* this is the card text section */}
                            <div className="col-lg-6 py-5">
                                <div className="card-body">
                                    <h1 className="mb-4">CAYCE POLLARD</h1>
                                    <h5 className="mb-5">MULTIVERSE ANALYST</h5>
                                    <p className="card-text mb-5">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipiscing elit. Duis dapibus rutrum
                                        facilisis. Class aptent taciti sociosqu
                                        ad litora torquent per nostra inceptos.
                                    </p>

                                    {/* Button resusable component */}
                                    <Button text="work" path="/work" />
                                    <Button text="about" path="/about" />
                                    <Button text="contact" path="/contact" />
                                </div>
                            </div>

                            {/* img to show in large screen */}
                            <div className="col-lg-6 hide">
                                <img
                                    src={img}
                                    className="card-img img-crop"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer section with icon */}
                <div className="row mt-5 icon-row">
                    <div className="clearfix w-100 align-items-center px-md-2 px-lg-0">
                        <div className="float-lg-left">
                            {/* all font awesome icons */}
                            <div className="links">
                                <a href="/">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="/">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="/">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="/">
                                    <i class="fab fa-unsplash"></i>
                                </a>
                                <a href="/">
                                    <i class="fas fa-mobile-alt"></i>
                                </a>
                                <a href="/">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                        <div className="float-lg-right">
                            <p>© Cayce Pollard. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
