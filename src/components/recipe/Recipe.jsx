import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Recipe = (props) => {
  return (
    <div>
      <div>
        <div>
          <div className="col mb-4">
            <div className="card h-100">
              <img
                src={props.photoName}
                className="card-img-top img-fluid card-img-custom"
                alt={props.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <div className="card-content custom-card-content">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title">{props.name}</h5>
                      </div>
                      <div className="col-auto">
                        <button className="btn">
                          <box-icon name="heart"></box-icon>
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="card-text">{props.description}</p>
                </div>
                <div className="flex-grow-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
