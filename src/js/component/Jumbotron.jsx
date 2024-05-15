import React from "react";

const Jumbotron = () => {
    return (
        <div style={{ backgroundColor: '#e9ecef' }} className="jumbotron m-3 p-3 mb-2 text-dark">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <a className="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">
                Call to action!
            </a>
        </div>
    );
};

export default Jumbotron;