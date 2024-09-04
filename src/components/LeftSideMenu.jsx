/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteContactModal from "./DeleteContactModal";
import FilterContactModule from "./FilterContactModule";

import styles from "./LeftSideMenu.module.css";

function LeftSideMenu({ contacts, setContacts, deleteHandler }) {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalFilter, setShowModalFilter] = useState(false);

  const toggleModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  const toggleModalFilter = () => {
    setShowModalFilter(!showModalFilter);
  };

  return (
    <div className={styles.leftsideMenu}>
      <div className={styles.avatar}>
        <div className={styles.icon}>
          <p>FB</p>
        </div>
        <p>Fereshteh</p>
      </div>
      <nav className={styles.menu}>
        <li className={styles.active}>All Contact</li>
        {/* <li>new Contact</li> */}
        <li onClick={toggleModalDelete}>
          Delete
        </li>
        <li onClick={toggleModalFilter}>
          Filter
        </li>
      </nav>
      <DeleteContactModal
        show={showModalDelete}
        onClose={toggleModalDelete}
        contacts={contacts}
        setContacts={setContacts}
        deleteHandler={deleteHandler}
      />
      <FilterContactModule
        show={showModalFilter}
        onClose={toggleModalFilter}
        contacts={contacts}
        setContacts={setContacts}
      />
    </div>
  );
}

export default LeftSideMenu;
