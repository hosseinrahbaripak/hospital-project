import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import CreateNewSickness from "./CreateNewSickness";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Table from "./Table";
import SidebarDrawer from "./SideBarDrawer";
const AdminPanel = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.mainSlice.login);
  const addNewSicknessOpen = useSelector(
    (state) => state.mainSlice.addNewSicknessOpen
  );

  return (
    <>
      {login ? (
        <>
          <Navbar />
          <div className="d-flex">
            <div className="sidebar-width">
              <Sidebar />
            </div>
            <div className="table-width">
              <Table />
            </div>
            <SidebarDrawer />
          </div>
          {addNewSicknessOpen ? <CreateNewSickness /> : null}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
export default AdminPanel;
