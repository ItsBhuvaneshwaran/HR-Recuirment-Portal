import React from "react";
import './profile.css'

const Profile = () => {
    return (
        <div>
            <div>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h1>Profile</h1>
                    </div>
                    <div className="sidebar-menu">
                        <p>Name : XXXXX</p><br/>
                        <p>Employee ID : XXXXX</p> <br/>
                        <p>Role : XXXXX</p> <br/>
                        <p>Location : XXXXX</p> <br/>
                        <p>Mobile No :  XXXXX</p> <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;