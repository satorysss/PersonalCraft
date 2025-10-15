import React from 'react';

const LeftPanelGallery = () => {
    return (
        <div className="col row leftPanelGallery1 ">
            <div className="col row">
                <div className="col">
                    <p>отфильтровать по:</p>
                </div>
                <div className="col">
                    <select name="" id="">
                        <option value="">date</option>
                        <option value="">likes</option>
                    </select>
                </div>
            </div>
            <div className="col"><input type="text" placeholder="serach"/></div>
        </div>
    );
};

export default LeftPanelGallery;