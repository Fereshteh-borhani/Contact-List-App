import styles from "./ConfirmDialog.module.css";
const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
    return (
      <div className={styles.confirmDialogOverlay}>
        <div className={styles.confirmDialog}>
          <p>{message}</p>
          <button className={styles.closeButtonDelete} onClick={onConfirm}>
            Yes
          </button>
          <button className={styles.closeButtonClose} onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    );
};
export default ConfirmDialog;