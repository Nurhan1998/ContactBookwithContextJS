import React, { useContext, useState } from "react";
import { contactContext } from "../../contexts/ContactsContext";

const AddContact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  let { addContact } = useContext(contactContext);

  function handleClick() {
    let newObj = {
      name,
      surname,
      number,
    };
    addContact(newObj);
    setName("");
    setSurname("");
    setNumber("");
  }
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="surname"
      />
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        placeholder="number"
      />
      <button onClick={handleClick}>Add contact</button>
    </div>
  );
};

export default AddContact;
