import React from "react";
import img from "../assets/images/img1.jpg";
import Button from "../components/Button";

const WorkPage = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="card mb-3">
                    <div className="row no-gutters d-flex align-items-center">
                        <div className="col-md-6">
                            <img src={img} className="card-img" alt="..." />
                        </div>

                        <div className="col-md-6 py-5">
                            <div className="card-body">
                                <h1 className="mb-5">Work</h1>

                                <p className="card-text mb-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipiscing elit. Duis dapibus rutrum
                                    facilisis. Class aptent taciti sociosqu ad
                                    litora per conubia nostra, per inceptos
                                    himenaeos. Etiam tristique libero eu nibh
                                    porttitor. Nullam venenatis erat id vehicula
                                    ultrices sed ultricies condimentum. Magna
                                    sed etiam consequat, et lorem adipiscing sed
                                    nulla. Vehicula ultrices dolor amet
                                    ultricies et condimentum. Magna sed etiam
                                    consequat, et lorem adipiscing sed dolor sit
                                    amet, consectetur amet do eiusmod tempor
                                    incididunt ipsum suspendisse ultrices
                                    gravida. Etiam tristique libero eu nibh
                                    porttitor amet fermentum. Nullam venenatis
                                    erat id vehicula ultrices.
                                </p>

                                <Button path="/" text="back" arrow={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkPage;
