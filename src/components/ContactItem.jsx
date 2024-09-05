/* eslint-disable react/prop-types */
import { useState } from "react";
import UpdateContactModal from "./UpdateContactModal";

import styles from "./ContactItem.module.css";

function ContactItem({
  selected,
  selectedItems,
  toggleSelect,
  data,
  editHandler,
}) {
  const textClass = [styles.text, !selected && styles.textHover].join(" ");
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  const toggleModalUpdate = () => {
    setShowModalUpdate(!showModalUpdate);
  };

  return (
    <ul className={textClass} key={data.id}>
      {selected && (
        <li className={styles.del}>
          <input
            className={styles.delCheckbox}
            type="checkbox"
            checked={selectedItems.includes(data.id)}
            onChange={() => toggleSelect(data.id)}
          />
          <div className={styles.delSwitch}></div>
        </li>
      )}
      <li>
        <span> {data.firstName} </span>
      </li>
      <li>
        <span> {data.lastName} </span>
      </li>
      <li>
        <span> {data.email} </span>
      </li>
      <li>
        <span> {data.phone} </span>
      </li>

      {!selected && (
        <li className={styles.edit} onClick={toggleModalUpdate}>
          Edit
        </li>
      )}

      <UpdateContactModal
        show={showModalUpdate}
        onClose={toggleModalUpdate}
        data={data}
        editHandler={editHandler}
      />
    </ul>
  );
}

export default ContactItem;
