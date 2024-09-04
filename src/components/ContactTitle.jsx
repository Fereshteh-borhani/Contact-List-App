import styles from "./ContactTitle.module.css";

function ContactTitle({ selected }) {
  return (
    <>
      <ul className={styles.title}>
        {selected && <li>Delete</li>}
        <li>
          <span> First Name </span>
        </li>
        <li>
          <span> Last Name </span>
        </li>
        <li>
          <span> Email </span>
        </li>
        <li>
          <span> Phone </span>
        </li>
      </ul>
    </>
  );
}

export default ContactTitle;
