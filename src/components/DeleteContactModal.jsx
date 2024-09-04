/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import ContactItem from "./ContactItem";
import ContactTitle from "./ContactTitle";
import ConfirmDialog from "./ConfirmDialog";

import styles from "./Modal.module.css";
import deleteImg from "../../public/remove-person.svg";

const DeleteContactModal = ({ show, onClose, contacts, deleteHandler }) => {
  if (!show) {
    return null;
  }

  const [selectedItems, setSelectedItems] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const toggleSelect = (id) => {
    setSelectedItems((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((itemId) => itemId !== id)
        : [...prevIds, id]
    );
  };

  const deleteItems = () => {
    deleteHandler(selectedItems);
    setSelectedItems([]);
  };

  const acceptHandler = () => {
    setDialogOpen(true);
  };

  const confirmHandler = () => {
    setConfirmationResult(true);
    setDialogOpen(false);
    deleteItems();
  };

  const cancelHandler = () => {
    setConfirmationResult(false);
    setDialogOpen(false);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <img src={deleteImg} alt="contact" />
          <h2>Delete Contacts</h2>
        </div>

        <ContactTitle selected={true} />

        {contacts.map((contact) => (
          <ContactItem
            className={styles.mainContent}
            key={contact.id}
            data={contact}
            selected={true}
            selectedItems={selectedItems}
            toggleSelect={toggleSelect}
          />
        ))}

        <button className={styles.closeButtonDelete} onClick={acceptHandler}>
          Delete
        </button>
        <button className={styles.closeButtonClose} onClick={onClose}>
          Close
        </button>
        {isDialogOpen && (
          <ConfirmDialog
            message="Are you sure you want to delete this item?"
            onConfirm={confirmHandler}
            onCancel={cancelHandler}
          />
        )}
        {confirmationResult !== null && (
          <p className={styles.message}>
            {confirmationResult ? "Your Item's are Deleted" : " "}
          </p>
        )}
      </div>
    </div>
  );
};

export default DeleteContactModal;
