import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./EditWarehousePage.scss";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// Icon
import BackIcon from "../../assets/Icons/arrow_back-24px.svg";

const EditWarehousePage = () => {
    const { id } = useParams();

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

    useEffect(() => {
        axios
        .get(`http://localhost:8080/warehouses/${id}`)
        .then((response) => {
            const warehouseData = response.data;
            setFormData({
            warehouse_name: warehouseData.warehouse_name,
            address: warehouseData.address,
            city: warehouseData.city,
            country: warehouseData.country,
            contact_name: warehouseData.contact_name,
            contact_position: warehouseData.contact_position,
            contact_phone: warehouseData.contact_phone,
            contact_email: warehouseData.contact_email,
            });
        })
        .catch((error) => {
            console.error("Error fetching warehouse data", error);
        });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = () => {
        axios
        .put(`http://localhost:8080/warehouses/${id}`, formData)
        .then((response) => {
            console.log("Warehouse updated successfully", response.data);
        })
        .catch((error) => {
            console.error("Error updating warehouse", error);
        });
    };

    return (
        <div className="form">
        <div className="form__header">
            <Link to="/">
            <img src={BackIcon} alt="Back Icon" />
            </Link>
            <div className="form__title">Edit Warehouse</div>
        </div>
        <div className="form__content">
            <div className="form__left">
            <h2 className="form__subtitle">Warehouse Details</h2>
            <div className="form__control">
                <label htmlFor="warehouse_name" className="form__label">
                Warehouse Name
                </label>
                <input
                id="warehouse_name"
                type="text"
                className="form__input"
                name="warehouse_name"
                value={formData.warehouse_name}
                onChange={handleInputChange}
                />
            </div>
            <div className="form__control">
                <label htmlFor="address" className="form__label">
                Street Adress
                </label>
                <input
                id="address"
                type="text"
                className="form__input"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                />
            </div>
            <div className="form__control">
                <label htmlFor="city" className="form__label">
                City
                </label>
                <input
                id="city"
                type="text"
                className="form__input"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                />
            </div>
            <div className="form__control">
                <label htmlFor="country" className="form__label">
                Country
                </label>
                <input
                id="country"
                type="text"
                className="form__input"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                />
            </div>
            </div>
            {/* Right Column */}
            <div className="form__right">
            {/* Contact Details Column */}
            <h2 className="form__subtitle">Contact Details</h2>
            <div className="form__control">
                <label htmlFor="contact_name" className="form__label">
                Contact Name
                </label>
                <input
                id="contact_name"
                type="text"
                className="form__input"
                name="contact_name"
                value={formData.contact_name}
                onChange={handleInputChange}
                />
            </div>
            <div className="form__control">
                <label htmlFor="position" className="form__label">
                Position
                </label>
                <input
                id="contact_position"
                type="text"
                className="form__input"
                name="contact_position"
                value={formData.contact_position}
                onChange={handleInputChange}
                />
            </div>
            <div className="form__control">
                <label htmlFor="phone" className="form__label">
                Phone Number
                </label>
                <input
                id="contact_phone"
                type="text"
                className="form__input"
                name="contact_phone"
                value={formData.contact_phone}
                onChange={handleInputChange}
                />
            </div>
            <div className="form__control">
                <label htmlFor="email" className="form__label">
                Email
                </label>
                <input
                id="contact_email"
                type="email"
                className="form__input"
                name="contact_email"
                value={formData.contact_email}
                onChange={handleInputChange}
                />
            </div>
            </div>
        </div>
        <div className="form__buttons">
            <Link to="/warehouses" className="form__btn form__cancel-btn">
            <div className="form__btn form__cancel-btn">Cancel</div>
            </Link>
            <div className="form__btn form__save-btn" onClick={handleSubmit}>
            Save
            </div>
        </div>
        </div>
    );
};

export default EditWarehousePage;
