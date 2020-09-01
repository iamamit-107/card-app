import React from "react";

// importing Button component
import Button from "../components/Button";

const ContactPage = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9">
                    {/* bitton component */}
                    <Button path="/" text="back" arrow={true} />

                    {/* form box */}
                    <div className="card card-body px-3 px-md-5 mt-5">
                        <h3 className="mb-4 mt-5 pt-5">CONTACT</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praesent vestibulum risus sit amet lectus
                            condimentum, ac fermentum nibh ullamcorper magna.
                        </p>

                        {/* form section start*/}
                        <form action="">
                            {/* form group is used to group a label and input */}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea
                                    class="form-control"
                                    id="message"
                                    rows="10"
                                ></textarea>
                            </div>

                            <button className="btn btn-common" type="submit">
                                send message
                            </button>
                        </form>
                        {/* form section end*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
