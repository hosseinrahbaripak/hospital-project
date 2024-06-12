import { useSelector, useDispatch } from "react-redux";
import {
  addNewSicknessOpenOpened,
  addNewSicknessOpenClosed,
} from "../reducer/mainSlice";
const Table = () => {
  const patientsData = useSelector(state=>state.mainSlice.patients);
  const addNewSicknessOpen = useSelector(
    (state) => state.mainSlice.addNewSicknessOpen
  );

  const dispatch = useDispatch();
  return (
    <div className="custom-table w-100">
      <div className="container p-4">
        <button
          className="btn btn-info mb-3 btn-w text-light"
          onClick={() => {
            dispatch(addNewSicknessOpenOpened(true));
            console.log(addNewSicknessOpen);
          }}
        >
          اضافه کردن بیمار جدید
        </button>
        <div className="custom-table-setting py-3 ">
          <table className="table w-100">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">نام</th>
                <th scope="col">نام خانوادگی</th>
                <th scope="col">سن</th>
                <th scope="col">بیماری</th>
                <th scope="col">نام پزشک</th>
              </tr>
            </thead>
            <tbody>
              {patientsData.map((patient, index) => (
                <tr className="tr-hover pointer">
                  <th scope="row">{index + 1}</th>
                  <td>{patient.fname}</td>
                  <td>{patient.lname}</td>
                  <td>{patient.age}</td>
                  <td>{patient.sickness}</td>
                  <td>{patient.doctor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Table;
