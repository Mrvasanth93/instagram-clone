import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ProfileSection.css";
import profileGalleryData from "../../constants/profileGallery";
import savedDatas from "../../constants/Saved";
import taggeddatas from "../../constants/Tagged";
import Gallery from "./Gallery";
const ProfileSection = () => {
  let [profileData, setProfileData] = useState(profileGalleryData);
  let [SavedData,setSavedData] = useState(savedDatas)
  let [taggeddata,settaggeddata] = useState(taggeddatas)
  const [open,setOpen] = useState(false)
  const user = useSelector((state) => state.data.user.user);
  const [show,setshow] = useState(profileData)
  return (
    <>
      <header className="profile-header">
        <div className="container">
          <div className="profile">
            <div  className="profile-image">
              <img
                src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                alt=""
              />
            </div>

            <div className="profile-user-settings">
            <div className="line-1">
                <h1 className="userName">{user.username}</h1>
                <div className="profile-btn">
                    <button>Edit Profile</button>
                    <button>View Archive</button>
                    <button>Ad Tools</button>
                </div>
              </div>
              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span className="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">206</span> following
                </li>
              </ul>
            </div>

            <div className="line-3">
                <p><b>{user.username}</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, id.</p>
                <p className="line-4">20 accounts reached in the last 30 days 
                  <span> View insights</span></p>
              </div>
          </div>
          <hr></hr>
          <div className="center">
                <div >< a onClick={()=>{setshow(profileData)}} className="btn">Post</a></div>
                <div >< a  onClick={()=>{setshow(SavedData)}} className="btn">Saved</a></div>
                <div >< a  onClick={()=>{setshow(taggeddata)}} className="btn">Tagged</a></div>
            </div>
          {/* <!-- End of profile section --> */}
        </div>
        {/* <!-- End of container --> */}
      </header>

      <main id="main">
        <Gallery profileData={show}/>
      </main>
      
    </>
  );
};

export default ProfileSection;
