import { useState } from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "../search/search";
import Notifications from "../notifications/Notifications";
import Modal from "@mui/material/Modal";
import Create from "../Create/Create";

function Sidenav() {
  const [resNav, setResNav] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = useSelector((state) => state.data.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
    navigate("/");
  };
  const handleDropdown = () => {};
  const location = useLocation();
  const isactive = (id) => {
    if (location.pathname.includes(id)) {
      return "nav__active";
    }
  };

  const handleSearchShow = () => {
    setResNav((prev) => !prev);
    setShowSearch((prev) => !prev);
    if (showSearch === false) {
      setResNav(false);
    }
    setShowNotifications(false);
  };

  const handleNotificationShow = () => {
    setResNav((prev) => !prev);
    setShowNotifications((prev) => !prev);
    if (showNotifications === false) {
      setResNav(false);
    }
    setShowSearch(false);
  };

  return (
    <div className="sidebar">
      <div className={`${resNav ? "sidenav" : "res__sidenav"}`}>
        {resNav ? (
          <img
            className="sidenav__logo"
            src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
            alt="Instagram Logo"
          />
        ) : (
          <>
            <InstagramIcon fontSize="large" className="sidenav__logo" />
          </>
        )}

        <div className="sidenav__buttons">
          <button
            onClick={() => navigate("/")}
            className={`sidenav__button ${isactive("/home")}`}
          >
            <HomeIcon fontSize="inherit" />
            <span>Home</span>
          </button>
          <button
            onClick={handleSearchShow}
            className={`sidenav__button ${isactive("search")}`}
          >
            <SearchIcon fontSize="inherit" />
            <span>Search</span>
          </button>
          <button
            onClick={() => navigate("/explore")}
            className={`sidenav__button ${isactive("explore")}`}
          >
            <ExploreIcon fontSize="inherit" />
            <span>Explore</span>
          </button>
          <button
            onClick={() => navigate("/reels")}
            className={`sidenav__button ${isactive("reels")}`}
          >
            <SlideshowIcon fontSize="inherit" />
            <span>Reels</span>
          </button>
          <button className={`sidenav__button ${isactive("messages")}`}>
            <ChatIcon fontSize="inherit" />
            <span>Messages</span>
          </button>
          <button
            onClick={handleNotificationShow}
            className={`sidenav__button ${isactive("notify")}`}
          >
            <FavoriteBorderIcon fontSize="inherit" />
            <span>Notifications</span>
          </button>
          <button
            className={`sidenav__button ${isactive("create")}`}
            onClick={handleOpen}
          >
            <AddCircleOutlineIcon fontSize="inherit" />
            <span>Create</span>
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Create />
          </Modal>
          <button
            onClick={() => navigate("/profile")}
            className={`sidenav__button ${isactive("profile")}`}
          >
            <Avatar fontSize="inherit">
              {user.username ? user.username.charAt(0).toUpperCase() : "A"}
            </Avatar>
            <span>{user.username} </span>
          </button>
          <button onClick={handelLogout} className="logout__button">
            Logout
          </button>
          <button
            className="sidenav__button sidenav__more"
            onClick={handleDropdown}
          >
            <MenuIcon style={{ width: 35, height: 45 }} />
            <span className="sidenav__buttonText">More</span>
          </button>
        </div>
      </div>
      {showSearch ? (
        <Search setResNav={setResNav} setShowSearch={setShowSearch} />
      ) : (
        <></>
      )}
      {showNotifications ? (
        <Notifications
          setResNav={setResNav}
          setShowNotifications={setShowNotifications}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Sidenav;
