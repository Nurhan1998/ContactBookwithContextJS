import React, { useContext, useEffect, useState } from "react";
import { contactContext } from "../../contexts/ContactsContext";

const EditTodo = (props) => {
  const { editContacts, handleClickSave } = useContext(contactContext);
  const [newEditItem, setNewEditItem] = useState(editContacts);
  useEffect(() => {
    setNewEditItem(editContacts);
  }, [editContacts]);
  function handleEditInp(e) {
    let newTask = {
      ...newEditItem,
      [e.target.name]: e.target.value,
    };
    setNewEditItem(newTask);
  }

  return (
    <div>
      {newEditItem ? (
        <>
          <input
            name={"name"}
            onChange={handleEditInp}
            type="text"
            value={newEditItem.name}
          />
          <input
            name={"surname"}
            onChange={handleEditInp}
            type="text"
            value={newEditItem.surname}
          />
          <input
            name={"number"}
            onChange={handleEditInp}
            type="text"
            value={newEditItem.number}
          />
          <button onClick={() => handleClickSave(newEditItem, props.history)}>
            Save
          </button>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default EditTodo;
