import React, { useState, useEffect } from "react";
import Form from "./Form";

const membersList = [
  {member: "Joseph"},
  {member: "Hanes"},
  {member: "Audrey"}
];

const initialFormValues = {
  member: "",
};

export default function App() {
  const [members, setMembers] = useState(membersList); // careful what you initialize your state to

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };
  const submitForm = () => {
    let newMember = {
      member: formValues.member,
    };
    setMembers([...members, newMember])
    setFormValues(initialFormValues);
  };
  
  return (
    <div className="container">
      <h1>Members</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {members.map((item, idx) => {
        return (
          <div key={idx}>
            {item.member}
          </div>
        )
      })}
    </div>
  );
}
