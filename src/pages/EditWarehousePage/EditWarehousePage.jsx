import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./EditWarehousePage.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Icon
import BackIcon from "../../assets/Icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/Icons/error-24px.svg";

const EditWarehousePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });
  // To store any error message if there is any error
  const [errMsg, setErrMsg] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouse/${id}`)
      .then((response) => {
        const warehouseData = response.data;
        console.log(warehouseData);
        setFormData(warehouseData);
      })
      .catch((error) => {
        console.error("Error fetching warehouse data", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const {
      warehouse_name,
      address,
      city,
      country,
      contact_name,
      contact_phone,
      contact_position,
      contact_email,
    } = formData;
    if (!warehouse_name || !address || !city || !country || !contact_name || !contact_phone || !contact_position || !contact_email) {
      let errorMessage = {};
      if(!warehouse_name) errorMessage.warehouse_name = true;
      if(!address) errorMessage.address = true;
      if(!city) errorMessage.city = true;
      if(!country) errorMessage.country = true;
      if(!contact_name) errorMessage.contact_name = true;
      if(!contact_phone) errorMessage.contact_phone = true;
      if(!contact_position) errorMessage.contact_position = true;
      if(!contact_email) errorMessage.contact_email = true;
      setErrMsg(errorMessage);
      return;
    }
    axios
      .put(`http://localhost:8080/warehouse/${id}`, {
        warehouse_name,
        address,
        city,
        country,
        contact_name,
        contact_phone,
        contact_position,
        contact_email,
      })
      .then((response) => {
        alert(`Successfully edit the warehouse with id ${id}`)
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error updating warehouse", error);
      });
  };

  return (
    <div className="editForm">
      <div className="editForm__header">
          <img className="back__btn" onClick={() => navigate(-1)} src={BackIcon} alt="Back Icon" />
          <div className="editForm__title">Edit Warehouse</div>
      </div>
      <div className="editForm__content">
        <div className="editForm__left">
          <h2 className="editForm__subtitle">Warehouse Details</h2>
          <div className="editForm__control">
            <label htmlFor="warehouse_name" className="editForm__label">
              Warehouse Name
            </label>
            <input
              id="warehouse_name"
              type="text"
              className="editForm__input"
              name="warehouse_name"
              value={formData.warehouse_name}
              onChange={handleInputChange}
            />
            {errMsg.warehouse_name  &&  (
              <div className="editForm__error">
                <img className="editForm__errorbtn" src={ErrorIcon} alt="Error Icon" />
                <p className="editForm__errorMsg">This field is required</p>
              </div>
            )}
          </div>
          <div className="editForm__control">
            <label htmlFor="address" className="editForm__label">
              Street Adress
            </label>
            <input
              id="address"
              type="text"
              className="editForm__input"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            {errMsg.address  &&  (
              <div className="editForm__error">
                <img className="editForm__errorbtn" src={ErrorIcon} alt="Error Icon" />
                <p className="editForm__errorMsg">This field is required</p>
              </div>
            )}
          </div>
          <div className="editForm__control">
            <label htmlFor="city" className="editForm__label">
              City
            </label>
            <input
              id="city"
              type="text"
              className="editForm__input"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          {errMsg.city  &&  <p className="editForm__errorMsg">This field is required</p>}
          <div className="editForm__control">
            <label htmlFor="country" className="editForm__label">
              Country
            </label>
            <input
              id="country"
              type="text"
              className="editForm__input"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
            {errMsg.country  &&  (
              <div className="editForm__error">
                <img className="editForm__errorbtn" src={ErrorIcon} alt="Error Icon" />
                <p className="editForm__errorMsg">This field is required</p>
              </div>
            )}
          </div>
        </div>
        {/* Right Column */}
        <div className="editForm__right">
          {/* Contact Details Column */}
          <h2 className="editForm__subtitle">Contact Details</h2>
          <div className="editForm__control">
            <label htmlFor="contact_name" className="editForm__label">
              Contact Name
            </label>
            <input
              id="contact_name"
              type="text"
              className="editForm__input"
              name="contact_name"
              value={formData.contact_name}
              onChange={handleInputChange}
            />
            {errMsg.contact_name  &&  (
              <div className="editForm__error">
                <img className="editForm__errorbtn" src={ErrorIcon} alt="Error Icon" />
                <p className="editForm__errorMsg">This field is required</p>
              </div>
            )}
          </div>
          <div className="editForm__control">
            <label htmlFor="position" className="editForm__label">
              Position
            </label>
            <input
              id="contact_position"
              type="text"
              className="editForm__input"
              name="contact_position"
              value={formData.contact_position}
              onChange={handleInputChange}
            />
            {errMsg.contact_position  &&  (
              <div className="editForm__error">
                <img className="editForm__errorbtn" src={ErrorIcon} alt="Error Icon" />
                <p className="editForm__errorMsg">This field is required</p>
              </div>
            )}
          </div>
          <div className="editForm__control">
            <label htmlFor="phone" className="editForm__label">
              Phone Number
            </label>
            <input
              id="contact_phone"
              type="text"
              className="editForm__input"
              name="contact_phone"
              value={formData.contact_phone}
              onChange={handleInputChange}
            />
            {errMsg.contact_phone  &&  (
              <div className="editForm__error">
                <img className="editForm__errorbtn" src={ErrorIcon} alt="Error Icon" />
                <p className="editForm__errorMsg">This field is required</p>
              </div>
            )}
          </div>
          <div className="editForm__control">
            <label htmlFor="email" className="editForm__label">
              Email
            </label>
            <input
              id="contact_email"
              type="email"
              className="editForm__input"
              name="contact_email"
              value={formData.contact_email}
              onChange={handleInputChange}
            />
            {errMsg.contact_email  &&  (
              <div className="editForm__error">
                <img className="editForm__errorbtn" src={ErrorIcon} alt="Error Icon" />
                <p className="editForm__errorMsg">This field is required</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="editForm__buttons">
          <div onClick={()=>navigate(-1)} className="editForm__btn editForm__cancel-btn">Cancel</div>
        <div className="editForm__btn editForm__save-btn" onClick={handleSubmit}>
          Save
        </div>
      </div>
    </div>
  );
};

export default EditWarehousePage;
