import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import click from "../src/components/assets/delSound.mp3";
import UserList from "./components/UserList/UserList";

import { v4 as uuidv4 } from "uuid";
import NewUser from "./components/NewUser/NewUser";

function App() {
   const [users, setUsers] = useState([
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
   ]);

   // midal toggle
   const [showModal, setshowModal] = useState(false);
   function toggle(p) {
      setshowModal(true);
   }

   function clicked(id) {
      new Audio(click).play();
      setUsers((event) => {
         return event.filter((e) => {
            return e.id !== id;
         });
      });
   }

   return (
      <div className="App">
         <Navbar usersLength={users.length} />
         <main>
            <div className="no_users">
               {users.length === 0 && <h2>No users</h2>}
            </div>
            <UserList users={users} clicked={clicked} />
         </main>
         {showModal && <NewUser setshowModal={setshowModal} />}
         <button onClick={toggle} className="create_user">
            Create
         </button>
      </div>
   );
}

export default App;
