import React from 'react';
import ConstructorModal from "@/features/Constructor";
const TopGallery = () => {
    return (
        <div className="row gap-4 m-auto">
            <div className=" row leftPanelGallery1 ">
                <div className="col row">
                    <div className="col-3">
                        <p>отфильтровать по:</p>
                    </div>
                    <div className="col">
                        <select name="" id="" >
                            <option value="">date</option>
                            <option value="">likes</option>
                        </select>
                    </div>
                    <div className="col">
                        <select name="" id="" >
                            <option value="">date</option>
                            <option value="">likes</option>
                        </select>
                    </div>
                </div>
                <div className="col">
                    <input type="text" id="search" placeholder="serach"/>
                </div>
                <div className="col-1">
                    <ConstructorModal/>
                </div>
            </div>
        </div>
    );
};

export default TopGallery;