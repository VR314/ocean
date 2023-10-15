import React from 'react';
const testpic = ("./favicon.ico");

console.log(testpic)

const profileData = {
  name: 'Welcome Vivek Chittepu!',
  picture: testpic,
  location: 'Seattle, WA',
  bio: 'Love to dance, hang out with my friends, and play football.',
};

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={profileData.picture} alt="Profile Picture" />
      </div>
      <div className="profile-info">
        <h1 style = {{fontSize: "xx-large"}}>{profileData.name}</h1>
        <p>Location: {profileData.location}</p>
        <p>Bio: {profileData.bio}</p>
        {/* Add more profile information here */}
      </div>
    </div>
  );
};

export default Profile;
