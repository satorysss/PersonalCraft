import React, { useState } from "react";
import RevealTwo from "@/shared/ui/RevealTwo";

export default function ModalReg({}) {
    const [modal, setModal] = useState('closed')
    const [formatThumb, setFormatThumb] = useState(null)
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
                    <div className="z">
                        <RevealTwo>
                            <div className="gallery-modal-constructor " onClick={(e)=>e.stopPropagation()}>
                                <h2>create interface image</h2>
                                <form className="list-group">
                                    <input type="text" id="username" name="username" required placeholder="Enter prop" />
                                    <div className="input-group">
                                        {["16:9", "10:4", "16:10"].map((format) => (
                                            <button
                                                key={format}
                                                type="button"
                                                onClick={() => setFormatThumb(format)}
                                                className={
                                                    formatThumb === format ? "format-btn active" : "format-btn"
                                                }
                                            >
                                                {format}
                                            </button>
                                        ))}
                                    </div>
                                    <button className="mt-5" type="submit">create</button>
                                </form>
                            </div>
                        </RevealTwo>
                    </div>


                </div>
            )}

        </div>
    );
}
