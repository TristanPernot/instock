// import "./InventoryItemErrorMessage.scss"
import ErrorLogo from "../../assets/Icons/error-24px.svg";

function InventoryItemErrorMessage() {
  return (
    <div className="error-container">
      <img src={ErrorLogo} alt="Red error exclamation mark" />
      <p className="error-container__message">Required field.</p>
    </div>
  );
}

export default InventoryItemErrorMessage;
