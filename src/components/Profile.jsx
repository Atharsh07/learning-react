import React from 'react';
import {useState} from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({
        name : "",
        age : ''
    })
    const handleSumbit = (e) => {
        const {name, value} = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

  return (
    <section>
        <h1>Profile Update</h1>
        <label>
            Name :
            <input type="text" name="name" onChange={handleSumbit} placeholder="Enter you name"/>
        </label>
        <label>
            Age :
            <input type="text" name="age" onChange={handleSumbit} placeholder="Enter you age"/>
        </label>
        <h2>Profile</h2>
        <p>Name : {profile.name}</p>
        <p>Age : {profile.age}</p>
    </section>
  );
};

export default Profile;
