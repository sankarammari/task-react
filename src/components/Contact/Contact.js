import React, { useState } from "react";
import add from "../../images/add.png";
import "./Contact.css";
import userData from "../../json/sampleData.json";
import AddContact from "../AddAndEditContact/AddAndEditContact.js";
import AllContacts from "./AllContactDetails.js";

function Contact() {
  const [contacts, setContacts] = useState(userData);
  const [isShowAddContact, setIsShowAddContact] = useState(false);
  const [pageName, setPageName] = useState("Add Contact");
  const [selectedContact, setSelectedContact] = useState(null); // To store the contact being edited
  const [search, setSearch] = useState("");

  // Filter contacts based on search
  const filteredContacts = contacts.filter((item) =>
    search.toLowerCase() === ""
      ? true
      : item.name.toLowerCase().includes(search)
  );

  // Function to handle the Edit button click
  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setPageName("Edit Contact");
    setIsShowAddContact(true);
  };

  return (
    <>
      <div className="contact">
        <button
          className="allContact"
          onClick={() => {
            setIsShowAddContact(true);
            setPageName("Add Contact");
            setSelectedContact(null); // Clear previous selection for new contact
          }}
        >
          Add Contact <img src={add} alt="" />
        </button>

        <input
          type="text"
          placeholder="Search Contact"
          className="searchContact"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="contactsList">
          {filteredContacts.map((item) => (
            <AllContacts
              key={item.id}
              id={item.id}
              name={item.name}
              phoneNumber={item.mobile}
              setPageName={setPageName}
              setIsShowAddContact={setIsShowAddContact}
              email={item.email}
              address={item.address}
              deleteContact={(id) =>
                setContacts(contacts.filter((contact) => contact.id !== id))
              }
              handleEdit={() => handleEdit(item)} // Pass handleEdit function
            />
          ))}
        </div>
      </div>

      {isShowAddContact && (
        <AddContact
          pageName={pageName}
          setIsShowAddContact={setIsShowAddContact}
          contacts={contacts}
          setContacts={setContacts}
          selectedContact={selectedContact} // Pass the contact being edited
        />
      )}
    </>
  );
}

export default Contact;
