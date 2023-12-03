import React from "react";
import "../NewUser/Newuser.css";

function NewUser({ setshowModal }) {
   //  submit btn
   function submited() {
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
               <form>
                  <label>
                     <span>ImgUrl:</span>
                     <input type="url" required />
                  </label>
                  <label>
                     <span>Name:</span>
                     <input type="text" required />
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
