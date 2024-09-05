import { useState } from "react";
import LeftSideMenu from "./components/LeftSideMenu";
import AddContact from "./components/AddContact";

import baseData from "./constants/mainData";
import styles from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState([]);

  if (contacts.length === 0) setContacts(...contacts, baseData);

  const deleteItems = (idsToDelete) => {
    setContacts((prevItems) =>
      prevItems.filter((item) => !idsToDelete.includes(item.id))
    );
  };

  const editHandler = (formData) => {
    console.log(formData);
    setContacts(
      contacts.map((contact) =>
        contact.id === formData.id ? formData : contact
      )
    );
  };

  return (
    <div className={styles.container}>
      <LeftSideMenu
        contacts={contacts}
        setContacts={setContacts}
        deleteHandler={deleteItems}
      />

      <AddContact
        contacts={contacts}
        setContacts={setContacts}
        editHandler={editHandler}
      />
    </div>
  );
}

export default App;
