import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

function Shop() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
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
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  withdrawMoney(100000);
                }}
              >
                -
              </button>

              <button disabled type="button" className="btn btn-warning">

                <h5>Deposit / Withdrawl: {balance} Pkr</h5>

            

              


              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  depositMoney(100000);
                }}
              >
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
