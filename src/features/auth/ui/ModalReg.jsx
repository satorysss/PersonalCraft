import React, { useState } from "react";

export default function ModalReg() {
    const [modal, setModal] = useState('closed')

    const closeWindow = () =>{setModal('closed');
    }
    const opendWindow = () =>{setModal('open');
    }
    const regWindow = () =>{setModal('reg');
    }

  return (
      <div>
      <button className="getbutton" onClick={opendWindow}>Login</button>

      {modal  === 'open' && (

        <div onClick={closeWindow} className="header-modal-body">
            <div className="header-overlay-hide"></div>
          <div className="items-center header-modal-reg text-center" onClick={(e)=>e.stopPropagation()}>
            <h2>Login</h2>
            <form className="list-group gap-2 ">
              <input type="text" id="username" name="username" required placeholder="Enter username" />
              <input type="password" id="password" name="password" required placeholder="Enter password" />
                <div className="text-center">
                    <button className="mt-5 getbutton4" type="submit">Auth</button>
                </div>
            </form>
              <div className="row text-center mt-5">

                  <div className="col">
                      <p className='text-info-emphasis fw-bold'>don't have acc?</p>
                  </div>
                  <div className="col text-center">
                      <button className='getbutton3' onClick={regWindow}>register</button>
                  </div>
              </div>
          </div>
        </div>
      )}
          {modal  === 'reg' && (
              <div onClick={closeWindow} className="header-modal-body">
                  <div className="header-overlay-hide"></div>
                  <div className="items-center header-modal-reg text-center" onClick={(e)=>e.stopPropagation()}>
                         <h2>Registration</h2>
                      <form className="list-group">
                          <input type="text" id="username" name="username" required placeholder="Enter username" />
                          <input type="email" id="email" name="email" required placeholder="Enter email" />
                          <input type="password" id="password" name="password" required placeholder="Enter password" />
                          <div className="text-center">
                              <button className="mt-5 getbutton4" type="submit">Registration</button>
                          </div>
                      </form>
                      <div className="row text-center mt-5">

                          <div className="col">
                              <p className='text-info-emphasis fw-bold'>you have acc?</p>
                          </div>
                          <div className="col text-center">
                              <button className='getbutton3' onClick={opendWindow}>auth</button>
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </div>
  );
}
