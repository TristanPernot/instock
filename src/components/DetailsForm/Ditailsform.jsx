import "./Ditailsform.scss";
import ErrorStateForm from "../ErrorStateForm/ErrorStateForm";
function DitailsForm({
  handleChangeWarehouse,
  handleChangeStreetAddress,
  handleChangeCity,
  handleChangeCountry,
  submit,
  warehouse,
  streetAddress,
  city,
  country,
 
}) {
  return (
    <div className="edit-warehouse-details">
      <div className="edit-warehouse-details__container">
        <div className="edit-warehouse-details__warehouse">
          <h2 className="edit-warehouse-details__heading">Warehouse Details</h2>

          <label
            htmlFor="warehouseName"
            className="edit-warehouse-details__label"
          >
            Warehouse Name
          </label>
          <input
            value={warehouse}
            className={
              submit === true && !warehouse
                ? "edit-warehouse-details__input--error"
                : "edit-warehouse-details__input"
            }
            placeholder="Warehouse Name"
            type="text"
            name="warehouse"
            id="warehouse"
            onChange={handleChangeWarehouse}
          />
          {submit === true && !warehouse === true && <ErrorStateForm />}
        </div>

        <div className="edit-warehouse-details__warehouse">
          <label
            htmlFor="streetAddress"
            className="edit-warehouse-details__label"
          >
            Street Address
          </label>
          <input
            value={streetAddress}
            className={
              submit === true && !streetAddress
                ? "edit-warehouse-details__input--error"
                : "edit-warehouse-details__input"
            }
            placeholder="Street Address"
            type="text"
            name="streetAddress"
            id="streetAddress"
            onChange={handleChangeStreetAddress}
          />
          {submit === true && !streetAddress === true && <ErrorStateForm />}
        </div>

        <div className="edit-warehouse-details__warehouse">
          <label htmlFor="city" className="edit-warehouse-details__label">
            City
          </label>
          <input
            value={city}
            className={
              submit === true && !city
                ? "edit-warehouse-details__input--error"
                : "edit-warehouse-details__input"
            }
            placeholder="City"
            type="text"
            id="city"
            name="city"
            onChange={handleChangeCity}
          />
          {submit === true && !city === true && <ErrorStateForm />}
        </div>

        <div className="edit-warehouse-details__warehouse">
          <label htmlFor="country" className="edit-warehouse-details__label">
            Country
          </label>
          <input
            value={country}
            className={
              submit === true && !country
                ? "edit-warehouse-details__input--error"
                : "edit-warehouse-details__input"
            }
            placeholder="Country"
            type="text"
            id="country"
            name="country"
            onChange={handleChangeCountry}
          />
          {submit === true && !country === true && <ErrorStateForm />}
        </div>

      </div>
    </div>
  );
}


export default DitailsForm;





