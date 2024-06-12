import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
const SidebarDrawer = () => {
  const drawerOpen = useSelector((state) => state.mainSlice.drawerOpen);
  console.log(drawerOpen);
  return createPortal(
    <div className="position-absolute sidebar-drawer" style={{top:"70px",right:0 }}>{drawerOpen ?<Sidebar /> :null }</div>
    
    ,document.getElementById("sidebar-root")
  );
};
export default SidebarDrawer;
