/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import styles from "./Modal.module.css";
// import Styles from "./UpdateContactModal.module.css";
import Validation from "./validation";
import filterImg from "../../public/search-person.svg";

function UpdateContactModal({
  show,
  onClose,
  data: { firstName, lastName, email, phone },
  updateItem,
  selectedUpdateItem,
  setSelectedUpdateItem,
}) {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (selectedUpdateItem) {
      setFormData({
        firstName: selectedUpdateItem.firstName,
        lastName: selectedUpdateItem.lastName,
        email: selectedUpdateItem.email,
        phone: selectedUpdateItem.phone,
      });
    }
  }, [selectedUpdateItem]);

  const updateChangeHandler = (event) => {
     const { name, value } = event.target;
     setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const eventHandler = () => {

    const validationErrors = Validation(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phone
    );

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        if (setSelectedUpdateItem) {
          updateItem(selectedUpdateItem.id, formData);
          setSelectedUpdateItem(null);
        }
    }
  };

  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <img src={filterImg} alt="contact" />
          <h2>Filter Contacts</h2>
        </div>

        <div className={styles.content}>
          <div>
            <input
              type="text"
              placeholder="first name"
              name="firstName"
              value={firstName}
              onChange={updateChangeHandler}
            />
            {errors.firstName && (
              <p className={styles.alter}>{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="last name"
              name="lastName"
              value={lastName}
              onChange={updateChangeHandler}
            />
            {errors.lastName && (
              <p style={{ color: "red" }}>{errors.lastName}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={updateChangeHandler}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <input
              type="number"
              placeholder="phone"
              name="phone"
              step="0.01"
              value={phone}
              onChange={updateChangeHandler}
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          </div>
          <button onClick={eventHandler}>Update Contact</button>
        </div>

        <button className={styles.buttonFilter} onClick={onClose}>
          cancel
        </button>
      </div>
    </div>
  );
}

export default UpdateContactModal;
