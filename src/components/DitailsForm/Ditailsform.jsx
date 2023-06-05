import "./Ditailsform.scss";
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
    ErrorStateForm,
})
{
    return (
        <div className="warehouse-details">
          <div className="warehouse-details__container">
            <div className="warehouse-details__warehouse">
              <h2 className="warehouse-details__heading">Warehouse Details</h2>
    
              <label htmlFor="warehouseName" className="warehouse-details__label">
                Warehouse Name
              </label>
              <input
                value={warehouse}
                className={
                  submit === true && !warehouse
                    ? "warehouse-details__input--error"
                    : "warehouse-details__input"
                }
                placeholder="Warehouse Name"
                type="text"
                name="warehouse"
                id="warehouse"
                onChange={handleChangeWarehouse}
              />
              {submit === true && !warehouse === true && <ErrorStateForm />}
            </div>
    
            <div className="warehouse-details__warehouse">
              <label htmlFor="streetAddress" className="warehouse-details__label">
                Street Address
              </label>
              <input
                value={streetAddress}
                className={
                  submit === true && !warehouse
                    ? "warehouse-details__input--error"
                    : "warehouse-details__input"
                }
                placeholder="Street Adress"
                type="text"
                name="streetAddress"
                id="streetAddress"
                onChange={handleChangeStreetAddress}
              />
              {submit === true && !streetAddress === true && <ErrorStateForm />}
            </div>
    
            <div className="warehouse-details__warehouse">
              <label htmlFor="city" className="warehouse-details__label">
                City
              </label>
              <input
                value={city}
                className={
                  submit === true && !warehouse
                    ? "warehouse-details__input--error"
                    : "warehouse-details__input"
                }
                placeholder="City"
                type="text"
                id="city"
                name="city"
                onChange={handleChangeCity}
              />
              {submit === true && !city === true && <ErrorStateForm />}
            </div>
    
            <div className="warehouse-details__warehouse">
              <label htmlFor="country" className="warehouse-details__label">
                Country
              </label>
              <input
                value={country}
                className={
                  submit === true && !warehouse
                    ? "warehouse-details__input--error"
                    : "warehouse-details__input"
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