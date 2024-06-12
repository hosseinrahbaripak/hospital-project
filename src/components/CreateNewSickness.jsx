import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { newSicknessSchema } from "../validation/addNewSickness";
import { addNewSicknessOpenClosed , addNewSickness} from "../reducer/mainSlice";
const CreateNewSickness = () => {
  const formik = useFormik({
    validationSchema: newSicknessSchema,
    initialValues: {
      fname: "",
      lname: "",
      age: "",
      sickness: "",
      doctor: "",
    },
    onSubmit: (values) => {
      dispatch(addNewSickness(values));
      dispatch(addNewSicknessOpenClosed(false));
    },
  });
  const dispatch = useDispatch();
  return createPortal(
    <div className="custom-modal d-flex justify-content-center align-items-center px-2">
      <div className="form-container px-4 py-2">
        <p>مشخصات بیمار را وارد کنید</p>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="mb-3">
            <input
              type="text"
              id="fname"
              name="fname"
              value={formik.values.fname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              placeholder="نام بیمار"
            />
            <span>
              {formik.touched.fname && formik.errors.fname ? (
                <div className="text-danger">{formik.errors.fname}</div>
              ) : null}
            </span>
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="lname"
              name="lname"
              value={formik.values.lname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              placeholder="نام خانوادگی بیمار"
            />
            <span>
              {formik.touched.lname && formik.errors.lname ? (
                <div className="text-danger">{formik.errors.lname}</div>
              ) : null}
            </span>
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="age"
              name="age"
              className="form-control"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="سن بیمار"
            />
            <span>
              {formik.touched.age && formik.errors.age ? (
                <div className="text-danger">{formik.errors.age}</div>
              ) : null}
            </span>
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="sickness"
              name="sickness"
              className="form-control"
              value={formik.values.sickness}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="بیماری"
            />
            <span>
              {formik.touched.sickness && formik.errors.sickness ? (
                <div className="text-danger">{formik.errors.sickness}</div>
              ) : null}
            </span>
          </div>

          <div className="mb-3">
            <select
              class="form-select"
              name="doctor"
              value={formik.values.doctor}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option selected>پزشک مربوطه را انتخاب کنید</option>
              <option value="علی رضا عظیمی">علی رضا عظیمی</option>
              <option value="علی مظاهری">علی مظاهری </option>
              <option value="سینا بختیاری">سینا بختیاری</option>
            </select>
            <span>
              {formik.touched.doctor && formik.errors.doctor ? (
                <div className="text-danger">{formik.errors.doctor}</div>
              ) : null}
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-success px-5"
              type="button"
              onClick={formik.handleSubmit}
            >
              تایید
            </button>
            <button
              className="btn btn-danger px-5"
              type="button"
              onClick={() => {
                dispatch(addNewSicknessOpenClosed(false));
              }}
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};
export default CreateNewSickness;
