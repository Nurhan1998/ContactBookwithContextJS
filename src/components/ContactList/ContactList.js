import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contactContext } from "../../contexts/ContactsContext";

const ContactList = () => {
  const {
    contacts,
    getContactsData,
    handleDelete,
    handleEditContacts,
  } = useContext(contactContext);

  let [data, setData] = useState(contacts);

  useEffect(() => {
    setData(contacts);
  }, [contacts]);

  useEffect(() => {
    getContactsData();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <ul key={item.id}>
          <li>имя:{item.name}</li>
          <li>фамилия:{item.surname}</li>
          <li>номер:{item.number}</li>
          <button onClick={() => handleDelete(item.id)}>delete</button>
          <Link to="/edit">
            <button onClick={() => handleEditContacts(item)}>Edit</button>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default ContactList;
