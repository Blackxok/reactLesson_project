import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import click from "../src/components/assets/delSound.mp3";
import UserList from "./components/UserList/UserList";
import { v4 as uuidv4 } from "uuid";

function App() {
   const [users, setUsers] = useState([
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
      {
         name: "Qurbon",
         img: "https://picsum.photos/200/300?random=1",
         id: uuidv4(),
      },
   ]);

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
      </div>
   );
}

export default App;
