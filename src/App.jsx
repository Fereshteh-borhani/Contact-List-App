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

  return (
    <div className={styles.container}>
      <LeftSideMenu
        contacts={contacts}
        setContacts={setContacts}
        deleteHandler={deleteItems}
      />

      <AddContact contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
