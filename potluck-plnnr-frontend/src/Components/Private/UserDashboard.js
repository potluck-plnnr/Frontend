import React from "react";

import { useHistory } from "react-router-dom";

import List from "./PotluckListAll";
// import Attending from "./PotluckAttending";
// import Create from "./PotluckCreate";

let PotluckDashboard = () => {
  let history = useHistory();

const logOut = () => {
  localStorage.clear();
  history.push("/");
};

  return (
    <div>
      <List />
      {/* <Attending /> */}
      {/* <Create /> */}
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default PotluckDashboard;
