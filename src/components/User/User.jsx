import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { Userid } = useParams();
  return (
    <center className="bg-gray-600 text-white text-3xl p-4">
      {" "}
      User: {Userid}
    </center>
  );
}

export default User;
