/* eslint-disable react/prop-types */
import ContactItem from "./ContactItem";
import ContactTitle from "./ContactTitle";

import styles from "./ContactsList.module.css";
import contactImg from "../../public/contact.svg";

function ContactsList({ contacts }) {
  return (
    <>
      <div className={styles.header}>
        <img src={contactImg} alt="contact" />
        <h2>All Contacts</h2>
      </div>

      <ContactTitle />

      {contacts.map((contact) => (
        <ContactItem key={contact.id} data={contact} />
      ))}
    </>
  );
}

export default ContactsList;
