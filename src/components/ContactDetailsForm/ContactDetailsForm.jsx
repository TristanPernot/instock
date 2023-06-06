import "./ContactDetailsForm.scss";
import ErrorStateForm from "../ErrorStateForm/ErrorStateForm";
import ErrorLogo from "../../assets/Icons/error-24px.svg";
function ContactDetailsForm({
  handleChangeContactName,
  handleChangePosition,
  handleChangePhoneNumber,
  handleChangeEmail,
  contactName,
  position,
  phoneNumber,
  email,
  submit,
  phoneError,
  emailError,
}) {
  return (
    <div className="contact-details">
      <h2 className="contact-details__heading">Contact Details</h2>

      <div className="contact-details__container">
        <div className="contact-details__warehouse">
          <label className="contact-details__label">Contact Name</label>
          <input
            value={contactName}
            className={
              submit === true && !contactName
                ? "contact-details__input--error"
                : "contact-details__input"
            }
            placeholder="Contact Name"
            name="contactName"
            onChange={handleChangeContactName}
          />
          {submit === true && !contactName === true && <ErrorStateForm />}
        </div>

        <div className="contact-details__warehouse">
          <label className="contact-details__label">Position</label>
          <input
            value={position}
            className={
              submit === true && !position
                ? "contact-details__input--error"
                : "contact-details__input"
            }
            placeholder="Position"
            name="position"
            onChange={handleChangePosition}
          />
          {submit === true && !position === true && <ErrorStateForm />}
        </div>

        <div className="contact-details__warehouse">
          <label className="contact-details__label">Phone Number</label>
          <input
            value={phoneNumber}
            className={
              submit === true && !phoneNumber
                ? "contact-details__input--error"
                : "contact-details__input"
            }
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={handleChangePhoneNumber}
          />
          {submit === true && !phoneNumber === true && (
            <div className="error-container">
              <img src={ErrorLogo} alt="Red error exclamation mark" />
              <p className="error-container__message">Please enter a valid phone number.</p>
            </div>
          )}

        </div>

        <div className="contact-details__warehouse">
          <label className="contact-details__label">Email</label>
          <input
            value={email}
            className={
              submit === true && !email
                ? "contact-details__input--error"
                : "contact-details__input"
            }
            placeholder="Email"
            name="email"
            onChange={handleChangeEmail}
          />
          {submit === true && !email === true && (
            <div className="error-container">
              <img src={ErrorLogo} alt="Red error exclamation mark" />
              <p className="error-container__message">Please enter a valid email. example@this1.that</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactDetailsForm;
