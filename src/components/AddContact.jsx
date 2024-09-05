/* eslint-disable react/prop-types */
import { useState } from "react";
import ContactsList from "./ContactsList";
import styles from "./AddContact.module.css";
import { v4 } from "uuid";

import Validation from "./validation";
import addContact from "../../public/add_person.svg";

function AddContact({ contacts, setContacts, editHandler }) {
  const [errors, setErrors] = useState({});
  const [contact, setContact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const eventHandler = () => {
    const validationErrors = Validation(
      contact.firstName,
      contact.lastName,
      contact.email,
      contact.phone
    );
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newContact = { ...contact, id: v4() };
      setContacts((contacts) => [...contacts, newContact]);
    }
  };

  return (
    <div className={styles.mainBody}>
      <div className={styles.header}>
        <img src={addContact} alt="new contact" />
        <h2>Add new Contact</h2>
      </div>

      <div className={styles.content}>
        <div>
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            value={contact.firstName}
            onChange={changeHandler}
          />
          {errors.firstName && (
            <p  >{errors.firstName}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            value={contact.lastName}
            onChange={changeHandler}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={contact.email}
            onChange={changeHandler}
          />
          {errors.email && <p  >{errors.email}</p>}
        </div>
        <div>
          <input
            type="number"
            placeholder="phone"
            name="phone"
            step="0.01"
            value={contact.phone}
            onChange={changeHandler}
          />
          {errors.phone && <p  >{errors.phone}</p>}
        </div>
        <button onClick={eventHandler}>Add Contact</button>
      </div>

      <ContactsList
        contacts={contacts}
        setContacts={setContacts}
        editHandler={editHandler}
      />
    </div>
  );
}

export default AddContact;
