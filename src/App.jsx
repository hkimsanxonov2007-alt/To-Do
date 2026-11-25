import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const initialUsers = [
  { id: uuidv4(), userName: "Hojiakbarxon" },
  { id: uuidv4(), userName: "Abbos" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [userNames, setUserNames] = useState("");

  function addUser() {
    const newUser = {
      id: uuidv4(),
      userName: userNames,
    };

    setUsers([...users, newUser]);
    setUserNames("");
  }
  function changeInput(e) {
    setUserNames(e.target.value);
  }
  function deleteUser(id) {
    let deleteUserId = users.filter((user) => user.id !== id);
    setUsers(deleteUserId);
  }

  return (
    <div className="w-full h-screen bg-cyan-950 flex justify-center items-center">
      <div className="w-[35%] h-[90%] bg-cyan-700 rounded-2xl">
        <div className="w-full h-[12%] rounded-2xl flex justify-between p-2">
          <input
            value={userNames}
            onChange={(e) => changeInput(e)}
            className="w-[70%] h-full bg-gray-600 rounded-xl text-white px-2.5 font-medium text-[17px]"
            type="text"
            placeholder="So'z yozing"
          />
          <button
            onClick={addUser}
            className="w-[20%] rounded-xl cursor-pointer text-white text-[18px] font-bold active:bg-blue-800 h-full bg-blue-600"
          >
            ADD
          </button>
        </div>
        <div className="w-full h-[88%] rounded-2xl overflow-y-scroll p-2.5">
          <ul className="flex flex-col gap-2.5">
            {users.map((elem) => {
              return (
                <li
                  key={elem.id}
                  className="w-full h-12 bg-gray-600 rounded-xl flex justify-between items-center px-2 text-white font-bold"
                >
                  <span>{elem.userName}</span>
                  <button
                    onClick={() => deleteUser(elem.id)}
                    className="w-25 h-[75%] rounded-xl cursor-pointer active:bg-red-700 bg-red-500"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;
