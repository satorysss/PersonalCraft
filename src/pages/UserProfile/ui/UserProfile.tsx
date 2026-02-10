import React from 'react';
import UserInterface from "@/widgets/UserInterface";
import UserSidebar from "@/widgets/UserSidebar";

const UserProfile = () => {
    return (
        <div className="p-4 mt-3">
            <div className="row gap-1 ">
                <UserInterface/>
                <UserSidebar/>
            </div>
        </div>


    );
};

export default UserProfile;