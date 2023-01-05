import React from "react";
import Form from "./Form";

const EditUser = () => {
  // should show the form prefilled with user details
  const userDetails = {
    name: "Rahul",
    age: "25",
  };
  return (
    <div>
      <h1>Edit user!</h1>
      <Form user={userDetails} />
    </div>
  );
};

export default EditUser;
