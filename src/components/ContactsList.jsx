/* eslint-disable react/prop-types */
import ContactItem from "./ContactItem";
import ContactTitle from "./ContactTitle";

import styles from "./ContactsList.module.css";
import contactImg from "../../public/contact.svg";

function ContactsList({ contacts, editHandler }) {
  return (
    <>
      <div className={styles.header}>
        <img src={contactImg} alt="contact" />
        <h2>All Contacts</h2>
      </div>

      <ContactTitle />

      {contacts.map((data) => (
        <ContactItem
          key={data.id}
          data={data}
          showBatten={true}
          editHandler={editHandler}
        />
      ))}
    </>
  );
}

export default ContactsList;
