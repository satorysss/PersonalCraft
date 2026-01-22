import React from 'react';
import ConstructorModal from "@/features/Constructor";
const TopGallery = () => {
    return (
            <div className="row leftPanelGallery1 mt-4 ">
                <div className="col row">
                    <div className="col">
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
                    <div className="col">
                        <input type="text" id="search" placeholder="serach"/>
                    </div>
                    <div className="col">
                        <ConstructorModal/>
                    </div>
                </div>



            </div>
    );
};

export default TopGallery;