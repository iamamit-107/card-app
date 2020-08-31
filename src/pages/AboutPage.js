import React from "react";
import img from "../assets/images/img1.jpg";
import Button from "../components/Button";

const AboutPage = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="card mb-3">
                    <div className="row no-gutters d-flex align-items-center">
                        <div className="col-md-6 hide">
                            <img src={img} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-6 ">
                            <div className="card-body">
                                <h1 className="mb-5">About</h1>

                                <p className="card-text mb-5">
                                    Aenean ornare velit lacus, ac varius enim
                                    ullamcorper eu. Proin aliquam sed facilisis
                                    ante interdum congue. Integer mollis, nisl
                                    amet convallis, porttitor magna ullamcorper,
                                    amet mauris. Ut magna finibus nisi nec
                                    lacinia ipsum maximus ac varius enim lorem
                                    dolore.
                                </p>

                                <Button path="/" text="back" arrow={true} />
                            </div>
                        </div>
                        <div className="col-md-6 show">
                            <img src={img} className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
