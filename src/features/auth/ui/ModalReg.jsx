import React, { useState } from "react";

export default function ModalReg() {
    const [modal, setModal] = useState('closed')

    const closedwindow = () =>{setModal('closed');
    }
    const opendwindow = () =>{setModal('open');
    }
    const regWindow = () =>{setModal('reg');
    }

  return (
      <div>
      <button className="getbutton" onClick={opendwindow}>Login</button>

      {modal  === 'open' && (

        <div onClick={closedwindow} className="header-modal-body">
            <div className="header-overlay-hide"></div>
          <div className="items-center header-modal-reg text-center" onClick={(e)=>e.stopPropagation()}>
            <h2>login</h2>
            <form className="list-group">
              <input type="text" id="username" name="username" required placeholder="Enter username" />
              <input type="password" id="password" name="password" required placeholder="Enter password" />
              <button className="mt-5" type="submit">Register</button>
            </form>
              <span className="col ">
                  <p>don't have acc?</p>
                  <h3 onClick={regWindow}>reg</h3>
              </span>
          </div>
        </div>
      )}
          {modal  === 'reg' && (
              <div onClick={closedwindow} className="header-modal-body">
                  <div className="header-overlay-hide"></div>
                  <div className="items-center header-modal-reg text-center" onClick={(e)=>e.stopPropagation()}>
                         <h2>Register</h2>
                      <form className="list-group">
                          <input type="text" id="username" name="username" required placeholder="Enter username" />
                          <input type="email" id="email" name="email" required placeholder="Enter email" />
                          <input type="password" id="password" name="password" required placeholder="Enter password" />
                          <button className="mt-5" type="submit">Register</button>
                      </form>
                          <span className="col ">
                              <p>you have acc?</p>
                              <h3 onClick={opendwindow}>auth</h3>
                          </span>
                  </div>
              </div>
          )}
      </div>
  );
}
