/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import ContactItem from "./ContactItem";
import ContactTitle from "./ContactTitle";

import styles from "./Modal.module.css";
import filterImg from "../../public/search-person.svg";

const FilterContactModule = ({ show, onClose, contacts }) => {
  if (!show) {
    return null;
  }
  const [filterText, setFilterText] = useState("");

  const filterHandler = (e) => {
    setFilterText(e.target.value);
  };

  const filteredData = contacts.filter(
    (item) =>
      item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.email.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <img src={filterImg} alt="contact" />
          <h2>Filter Contacts</h2>
        </div>

        <div className={styles.filterBox}>
          <input
            type="text"
            value={filterText}
            onChange={filterHandler}
            placeholder="Search by NAME or EMAIL"
          />
        </div>

        <ContactTitle />

        {filteredData.map((contact) => (
          <ContactItem key={contact.id} data={contact} />
        ))}
        
        <button className={styles.buttonFilter} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
export default FilterContactModule;
