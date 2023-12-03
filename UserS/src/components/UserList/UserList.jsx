/* eslint-disable react/prop-types */
import "../UserList/UserList.css";

function UserList({ users, clicked }) {
   return (
      <div className="userList">
         <div className="userlist_container container">
            {users.map((e) => {
               return (
                  <div className="card" key={e.id}>
                     <div className="card_inner">
                        <img
                           src={e.img}
                           alt={e.name}
                           width={150}
                           height={150}
                        />
                        <h2>{e.name}</h2>
                        <button
                           onClick={() => {
                              clicked(e.id);
                           }}
                        >
                           Delete
                        </button>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default UserList;
