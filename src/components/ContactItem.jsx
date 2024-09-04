/* eslint-disable react/prop-types */
import { useState } from "react";
import UpdateContactModal from "./UpdateContactModal";

import styles from "./ContactItem.module.css";

function ContactItem({
  data: { id, firstName, lastName, email, phone },
  selected,
  selectedItems,
  toggleSelect,
}) {
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const textClass = [styles.text, !selected && styles.textHover].join(" ");

  const toggleModalUpdate = () => {
    setShowModalUpdate(!showModalUpdate);
  };

  return (
    <ul className={textClass} key={id}>
      {selected && (
        <li className={styles.del}>
          <input
            className={styles.delCheckbox}
            type="checkbox"
            checked={selectedItems.includes(id)}
            onChange={() => toggleSelect(id)}
          />
          <div className={styles.delSwitch}></div>
        </li>
      )}
      <li>
        <span> {firstName} </span>
      </li>
      <li>
        <span> {lastName} </span>
      </li>
      <li>
        <span> {email} </span>
      </li>
      <li>
        <span> {phone} </span>
      </li>

      {!selected && (
        <li className={styles.edit} onClick={toggleModalUpdate}>
          Edit
        </li>
      )}

      <UpdateContactModal
        show={showModalUpdate}
        onClose={toggleModalUpdate}
        data={(firstName, lastName, email, phone)}
      />
    </ul>
  );
}

export default ContactItem;
