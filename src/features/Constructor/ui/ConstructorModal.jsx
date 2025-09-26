import React, { useState } from "react";

export default function ModalReg({}) {
    const [modal, setModal] = useState('closed')

    const closedwindow = () =>{setModal('closed');
    }
    const opendwindow = () =>{setModal('open');
    }

    return (
        <div>
            <button className="getbutton" onClick={opendwindow}>Constructor</button>

            {modal  === 'open' && (

                <div onClick={closedwindow} className="header-modal-body">
                    <div className="header-overlay-hide"></div>
                    <div className="gallery-modal-constructor " onClick={(e)=>e.stopPropagation()}>
                        <h2>create interface image</h2>
                        <form className="list-group">
                            <input type="text" id="username" name="username" required placeholder="Enter prop" />
                            <div className="input-group">
                                <button><span>16:9</span></button>
                                <button><span>10:4</span></button>
                                <button><span>16:10</span></button>
                            </div>
                            <button className="mt-5" type="submit">create</button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}
