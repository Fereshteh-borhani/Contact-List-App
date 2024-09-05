/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";

import styles from "./Modal.module.css";
import Styles from "./UpdateContactModal.module.css";

import Validation from "./validation";
import filterImg from "../../public/search-person.svg";

function UpdateContactModal({ show, onClose, data, editHandler }) {
  if (!show) {
    return null;
  }
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
  });

  const updateChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const eventHandler = () => {
    console.log(formData);

    const validationErrors = Validation(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phone
    );
    setErrors(validationErrors);
    console.log(Object.keys(validationErrors).length);

    if (Object.keys(validationErrors).length === 0) {
      console.log(editHandler);
      editHandler(formData);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <img src={filterImg} alt="contact" />
          <h2>Filter Contacts</h2>
        </div>

        <div className={Styles.content}>
          <div>
            <input
              type="text"
              placeholder="first name"
              name="firstName"
              value={formData.firstName}
              onChange={updateChangeHandler}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="last name"
              name="lastName"
              value={formData.lastName}
              onChange={updateChangeHandler}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={updateChangeHandler}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <input
              type="number"
              placeholder="phone"
              name="phone"
              step="0.01"
              value={formData.phone}
              onChange={updateChangeHandler}
            />
            {errors.phone && <p>{errors.phone}</p>}
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
