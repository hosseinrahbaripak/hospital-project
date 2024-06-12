import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDrawerState, changeLoginState } from "../reducer/mainSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const drawerOpen = useSelector((state) => state.mainSlice.drawerOpen);
  const login = useSelector((state) => state.mainSlice.login);
  console.log(login)
  
  return (
    <div className="custom-shadow w-100 d-flex justify-content-between">
      <div
        className="d-flex justify-content-between align-items-center navbar-brand-width p-3 "
        style={{
          backgroundColor: "rgb(38, 53, 68)",
        }}
      >
        <div>
          <p className="m-0 text-light">پنل ادمین</p>
        </div>
        <div
          onClick={() => {
            dispatch(changeDrawerState(!drawerOpen));
          }}
        >
          <i
            style={{ color: "#fff" }}
            className={drawerOpen ? "fa fa-toggle-on" : "fa fa-toggle-off"}
          ></i>
        </div>
      </div>

      <div
        className="table-width-a p-3 d-flex justify-content-end"
      >
        <button
          className="d-flex justify-content-between btn btn-success align-items-center"
          onClick={() => {
            dispatch(changeLoginState(!login));
          }}
        >
          <p className="text-light my-0 ms-2">
            خروج از سامانه
          </p>
          <i className="fa fa-sign-out"></i>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
