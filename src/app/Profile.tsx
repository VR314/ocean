import React from 'react';
import "./Profile.module.css"

const profileData = {
  name: 'John Doe',
  picture: '/path-to-your-profile-picture.jpg',
  location: 'New York, USA',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet...',
};

const Profile = () => {
  return (

    <div>
      <div>
        <img src={profileData.picture} alt={profileData.name} />
      </div>
      <div>
        <h1>{profileData.name}</h1>
        <p className="profile-container">Location: {profileData.location}</p>
        <p>Bio: {profileData.bio}</p>
        {/* Add more profile information here */}
      </div>
    </div>
  );
};

export default Profile;
