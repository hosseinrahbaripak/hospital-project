import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDrawerState } from "../reducer/mainSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState({
    users: false,
    categories: false,
    posts: false,
    home: false,
  });
  const handleClick = (e) => {
    console.log(e);
    switch (e.target.attributes.name.nodeValue) {
      case "users":
        setOpen({ users: true, categories: false, posts: false, home: false });
        dispatch(changeDrawerState(false));
        setHomeBtnColor(false);
        break;
      case "categories":
        setOpen({ users: false, categories: true, posts: false, home: false });
        dispatch(changeDrawerState(false));
        setHomeBtnColor(false);
        break;
      case "posts":
        setOpen({ users: false, Categories: false, posts: true, home: false });
        dispatch(changeDrawerState(false));
        setHomeBtnColor(false);
        break;
      case "home":
        setOpen({ users: false, Categories: false, posts: false, home: true });
        dispatch(changeDrawerState(false));
        setHomeBtnColor(true);
    }
  };
  return (
    <div
      className="w-100"
      style={{
        height: "calc(100vh - 60px)",
        backgroundColor: "#263544",
      }}
    >
      <ul class="nav nav-pills flex-column">
        <li
          class="nav-item nav-link text-light pointer my-2"
          onClick={handleClick}
        >
          <span
            name="home"
            style={open.home ? { color: "#fd7e14" } : { color: "#fff" }}
          >
            خانه
          </span>
        </li>
        <li class="nav-item nav-link text-light pointer mb-2">
          <div>
            <div className="d-flex justify-content-between w-100">
              <span
                name="categories"
                onClick={handleClick}
                style={
                  open.categories ? { color: "#fd7e14" } : { color: "#fff" }
                }
              >
                دسته ها
              </span>
              <i className="fa fa-angle-left"></i>
            </div>
            <ul
              className={
                !open.categories
                  ? "nav nav-pills flex-column height-0 overflow-hidden"
                  : "nav nav-pills flex-column "
              }
            >
              <li className="nav-item nav-link text-light">بیماران</li>
              <li className="nav-item nav-link text-light">پزشکان</li>
            </ul>
          </div>
        </li>
        <li class="nav-item nav-link text-light pointer mb-2">
          <div>
            <div className="d-flex justify-content-between w-100">
              <span
                name="posts"
                onClick={handleClick}
                style={open.posts ? { color: "#fd7e14" } : { color: "#fff" }}
              >
                نوشته ها
              </span>
              <i className="fa fa-angle-left"></i>
            </div>
            <ul
              className={
                !open.posts
                  ? "nav nav-pills flex-column height-0 overflow-hidden"
                  : "nav nav-pills flex-column "
              }
            >
              <li className="nav-item nav-link text-light">عنوان اول</li>
              <li className="nav-item nav-link text-light">عنوان دوم</li>
            </ul>
          </div>
        </li>
        <li class="nav-item nav-link text-light pointer mb-2">
          <div>
            <div className="d-flex justify-content-between w-100">
              <span
                onClick={handleClick}
                name="users"
                style={open.users ? { color: "#fd7e14" } : { color: "#fff" }}
              >
                کاربران
              </span>
              <i className="fa fa-angle-left"></i>
            </div>
            <ul
              className={
                !open.users
                  ? "nav nav-pills flex-column height-0 overflow-hidden"
                  : "nav nav-pills flex-column"
              }
            >
              <li className="nav-item nav-link text-light">کاربر ادمین </li>
              <li className="nav-item nav-link text-light">کاربر معمولی</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
