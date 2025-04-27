import React, { useState } from "react";
import "./UserProfile.css";

const initialProfile = {
  name: "Jessica Alba",
  username: "jennywilson",
  displayName: "Jenny Wilson",
  email: "jenny@gmail.com",
  address: "New York, USA",
  nickname: "Sky Angel",
  dob: "April 28, 1981",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with your image if needed
};

const EditableField = ({ label, value, onChange }) => {
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState(value);

  const handleSave = () => {
    setEditing(false);
    onChange(temp);
  };

  return (
    <div className="profile-row">
      <div className="profile-label">{label}</div>
      <div className="profile-value">
        {editing ? (
          <>
            <input
              className="profile-input"
              value={temp}
              onChange={e => setTemp(e.target.value)}
              autoFocus
            />
            <button className="profile-save-btn" onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            {value}
            <span className="profile-edit-icon" onClick={() => setEditing(true)}>
              ✎
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default function UserProfile() {
  const [profile, setProfile] = useState(initialProfile);

  const handleFieldChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="profile-container">
      <nav className="profile-navbar">
        <div className="nav-item">Dashboard</div>
        <div className="nav-item active">Edit Profile</div>
        <div className="nav-item">Edit Password</div>
        <div className="nav-item">User Logout</div>
      </nav>
      <div className="profile-card">
        <img className="profile-avatar" src={profile.avatar} alt="avatar" />
        <h2 className="profile-name">{profile.name}</h2>
        <div className="profile-username">
          @{profile.username}
          <span
            className="profile-edit-icon"
            onClick={() => {
              const newUsername = prompt("Edit username:", profile.username);
              if (newUsername) handleFieldChange("username", newUsername);
            }}
          >
            ✎
          </span>
        </div>
        <div className="profile-fields">
          <EditableField
            label="Username"
            value={profile.displayName}
            onChange={val => handleFieldChange("displayName", val)}
          />
          <EditableField
            label="Email"
            value={profile.email}
            onChange={val => handleFieldChange("email", val)}
          />
          <EditableField
            label="Address"
            value={profile.address}
            onChange={val => handleFieldChange("address", val)}
          />
          <EditableField
            label="Nickname"
            value={profile.nickname}
            onChange={val => handleFieldChange("nickname", val)}
          />
          <EditableField
            label="DOB"
            value={profile.dob}
            onChange={val => handleFieldChange("dob", val)}
          />
        </div>
      </div>
    </div>
  );
}