import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import {changeLoginState} from "../reducer/mainSlice";
import { loginSchema } from "../validation/loginValidation";

const Login = () => {
  const login = useSelector((state)=>state.mainSlice.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPass, setShowpass] = useState(false);
  const userName = "Admin";
  const password = "1234";
  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values.userName === userName && values.password === password ) {
        dispatch(changeLoginState(true));
        navigate("/adminpanel");
      } 
    },
  });
  return (
    <div
      className="d-flex justify-content-center align-items-center w-100 "
      style={{ height: "100vh", backgroundColor: "#eee" }}
    >
      <div
        className="d-flex align-items-center flex-column p-4 custom-shadow"
        style={{
          height: "70vh",
          width: "400px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <p>ورود به حساب کاربری</p>
        <div className="w-100 mt-5">
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div className="mb-5">
              <div className="custom-border mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="نام کاربری"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span>
                    <i
                      className="fa fa-envelope-o"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </span>
                </div>
              </div>
              <span className="position-absolute">
                {formik.touched.userName && formik.errors.userName ? (
                  <div className="text-danger">{formik.errors.userName}</div>
                ) : null}
              </span>
            </div>

            <div className="mb-3">
              <div className="custom-border mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    className=""
                    type={showPass ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="رمز عبور"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span>
                    <i
                      className={showPass ? "fa fa-eye" : "fa fa-eye-slash"}
                      onClick={() => {
                        setShowpass(!showPass);
                      }}
                      style={{ fontSize: "25px" }}
                    ></i>
                  </span>
                </div>
              </div>
              <span className="position-absolute">
                {formik.touched.userName && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </span>
            </div>
            <div className="w-100">
              <button
                className="btn btn-info text-light w-100 mt-5"
                type="button"
                onClick={formik.handleSubmit}
              >
                ورود
              </button>

            </div>
          </form>
          <div className="d-flex justify-content-between mt-3">
            <p style={{color:"#aaa"}}>نام کاربری:{userName}</p>
            <p style={{color:"#aaa"}}>رمز عبور : {password}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
