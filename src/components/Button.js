import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, path, arrow }) => {
    return (
        <Link to={path ? `${path}` : ""} className="btn btn-common">
            {arrow ? <i class="fas fa-arrow-left mr-3"></i> : ""}
            {text}
        </Link>
    );
};

export default Button;
