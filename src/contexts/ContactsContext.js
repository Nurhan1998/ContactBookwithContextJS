import React, { useReducer } from "react";
import axios from "axios";

export const contactContext = React.createContext();

const INIT_STATE = {
  contacts: [],
  editContacts: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS_DATA":
      return { ...state, contacts: action.payload };
    case "EDIT_CONTACTS":
      return { ...state, editContacts: action.payload };
    default:
      return state;
  }
};
const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getContactsData = async () => {
    let { data } = await axios("http://localhost:8000/contacts");
    dispatch({
      type: "GET_CONTACTS_DATA",
      payload: data,
    });
  };

  const addContact = async (newContact) => {
    await axios.post("http://localhost:8000/contacts", newContact);

    getContactsData();
  };

  const handleDelete = async (id) => {
    axios
      .delete(`http://localhost:8000/contacts/${id}`)
      .then(() => getContactsData());
  };
  const handleEditContacts = async (item) => {
    let { data } = await axios(`http://localhost:8000/contacts/${item.id}`);
    dispatch({
      type: "EDIT_CONTACTS",
      payload: data,
    });
  };
  const handleClickSave = async (newContact, history) => {
    await axios.patch(
      `http://localhost:8000/contacts/${newContact.id}`,
      newContact
    );
    history.push("/");
  };

  return (
    <contactContext.Provider
      value={{
        editContacts: state.editContacts,
        contacts: state.contacts,
        handleEditContacts,
        addContact,
        getContactsData,
        handleDelete,
        handleClickSave,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};
export default ContactContextProvider;
