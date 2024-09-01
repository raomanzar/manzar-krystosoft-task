import { useState, useEffect } from "react";
import { AxiosGet } from "../../utils/helpers/api-methods";
import { BASE_URL } from "../../services/config";
import { Users_Type } from "../../services/users/users.type";
import { Link } from "react-router-dom";

const Question2 = () => {
  const [userList, setUserList] = useState<Users_Type | null>(null);

  const getAllUsers = async () => {
    try {
      const response = await AxiosGet<Users_Type>(BASE_URL, {});
      if (response) {
        setUserList(response);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {userList ? (
        <ol>
          {userList.map((user) => (
            <li key={user.id} style={{ textAlign: "left" }}>
              {user.name}
            </li>
          ))}
        </ol>
      ) : (
        <h3>Loading...</h3>
      )}
      <Link to="/">Go home</Link>
    </div>
  );
};

export default Question2;
