import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
const ListItem = ({ user }) => (
  <div key={user.id} style={{ display: "block" }}>
    <h1>{user.username}</h1>
    <h2>{user.email}</h2>
  </div>
);
const Main = () => {
  const { currentUser, data } = useContext(UserContext);
  console.log(currentUser);
  return (
    <div
      style={{
        minHeight: 650,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.length > 0 &&
        data
          .filter((user) => user.username !== currentUser.username)
          .map((user) => <ListItem user={user} />)}
    </div>
  );
};

export default Main;
