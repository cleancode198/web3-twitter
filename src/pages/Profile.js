import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import { defaultImgs } from "../defaultimgs";
import TweetInFeed from "../components/TweetInFeed";

const Profile = () => {
  

  return (
    <>
      <div className="pageIdentify">Profile</div>
      <img className="profileBanner" src={defaultImgs[1]} />
      <div className="pfpContainer">
        <img className="profilePFP" src={defaultImgs[0]}></img>
        <div className="profileName">Bob</div>
        <div className="profileWallet">0x42..314</div>
        <Link to="/settings">
            <div className="profileEdit">Edit profile</div>
        </Link>
        <div className="profileBio">
          Web3 Mage, just trying to make it!
        </div>
        <div className="profileTabs">
            <div className="profileTab">
            Your Tweets
            </div>
        </div>
      </div>
      <TweetInFeed profile={true}></TweetInFeed>
    </>
  );
};

export default Profile;

