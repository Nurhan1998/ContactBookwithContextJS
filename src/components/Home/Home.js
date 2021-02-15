import React from "react";
import { Link } from "react-router-dom";
import AddContact from "../AddContact/AddContact";
import ContactList from "../ContactList/ContactList";

const Home = () => {
  return (
    <div>
      <h1>Contact Book</h1>
      <Link to="/add">Add</Link>
      <br />
      <Link to="/list">Contact List</Link>
      <AddContact />
      <ContactList />
    </div>
  );
};

export default Home;
