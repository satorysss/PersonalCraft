import React from 'react';
import ConstructorModal from "@/features/Constructor/ui/ConstructorModal";

const LeftPanelGallery = () => {
    return (
        <div className="row gap-4">
            <div className="col row leftPanelGallery1 ">
                <div className="col row">
                    <div className="col-7">
                        <p>отфильтровать по:</p>
                    </div>
                    <div className="col">
                        <select name="" id="">
                            <option value="">date</option>
                            <option value="">likes</option>
                        </select>
                    </div>
                </div>
                <div className="col">
                    <input type="text" className="gallery-modal-constructor" placeholder="serach"/>
                </div>
            </div>
            <div className="col leftPanelGallery1 text-center">
                <ConstructorModal/>
            </div>
        </div>
    );
};

export default LeftPanelGallery;