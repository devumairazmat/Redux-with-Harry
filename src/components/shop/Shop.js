import React from "react";

function Shop() {
  return (
    <div>
      <div className="container text-center">
        <div className="row mt-4 mb-4">
          <div className="col"></div>
          <div className="col">
            <h4 className="text-center mt-4 mb-4">
              Buy Iphone 13 for 3 lac Rs/Pkr
            </h4>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-danger">
                -
              </button>

              <button disabled type="button" className="btn btn-warning">
                <h5>Deposit / Withdrawl</h5>

              

              </button>
              <button type="button" className="btn btn-success">
                +
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
