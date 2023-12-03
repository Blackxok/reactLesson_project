import React from "react";
import "../NewUser/Newuser.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewUser({ setshowModal, setUsers }) {
   const [musers, setMusers] = useState({
      name: "",
      img: "",
      id: uuidv4(),
   });
   //  submit btn
   function submited(e) {
      e.preventDefault();
      setUsers((event) => {
         return [...event, musers];
      });
      setshowModal(false);
   }
   // overkat close
   function closeOverlay(p) {
      p.target.className === "overlay" && setshowModal(false);
   }

   return (
      <div className="modal_wrapper">
         <div onClick={closeOverlay} className="overlay">
            <div className="modal">
               <form onSubmit={submited}>
                  <label>
                     <span>ImgUrl:</span>
                     <input
                        onChange={(e) => {
                           setMusers((prev) => {
                              return { ...prev, img: e.target.value };
                           });
                        }}
                        type="url"
                        required
                     />
                  </label>
                  <label>
                     <span>Name:</span>
                     <input
                        onChange={(e) => {
                           setMusers((prev) => {
                              return { ...prev, name: e.target.value };
                           });
                        }}
                        type="text"
                        required
                     />
                  </label>
                  <div className="gender">
                     <label>
                        <span>Male:</span>
                        <input
                           type="radio"
                           required
                           name="gender"
                           value="male"
                        />
                     </label>
                     <label>
                        <span>Fmale:</span>
                        <input
                           type="radio"
                           required
                           name="gender"
                           value="fmale"
                        />
                     </label>
                  </div>
                  <button onClick={submited} className="modal-btn">
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default NewUser;
