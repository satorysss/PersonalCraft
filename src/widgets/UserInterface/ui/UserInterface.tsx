import React from 'react';
import {offerImages} from "@/shared/ui/images/images";
import ConstructorModal from "@/features/Constructor";

const UserInterface = () => {
    return (
        <div className="col text-light ">
            <div className="userSidebar rounded-start-5 p-5">
                <div className="row">
                    <div className="col position-relative">
                        <img src={offerImages.img3} alt="cardImage" width="100%"/>
                        <div className="colorClass-card sidebar-nameSpace rounded-4 p-2">
                            <div className="row text-center"><span>SATORY</span></div>
                        </div>
                    </div>
                    <div className=" col">
                        <div className="row colorClass-card p-3 gap-4 rounded-4">
                            <button className="getbutton3">CHANGE PASSWORD</button>
                            <button className="getbutton3">CHANGE LOGO</button>
                            <ConstructorModal/>
                        </div>
                        <div className="row">


                        </div>
                        <div className="row p-3 colorClass-card rounded-4 mt-2">
                            <span>кол-во лайков: 34</span>
                        </div>
                    </div>
                </div>

                <div className="row border border-info-subtle mt-4"></div>
                <div className="row mt-2">
                    <span>
                        <p>
                        кол-во генераций: 34
                        </p>
                    </span>
                    <span>
                        <p>
                            кол-во остаток: 34
                        </p>
                    </span>
                </div>
                <div className="row border border-info-subtle"></div>
            </div>
        </div>

    );
};

export default UserInterface;