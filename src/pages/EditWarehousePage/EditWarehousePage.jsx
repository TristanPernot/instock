import React from 'react'
import "./EditWarehousePage.scss";
import { useNavigate } from 'react-router-dom';
// Icon
import BackIcon from "../../assets/Icons/arrow_back-24px.svg";
const EditWarehousePage = () => {
    const navigate = useNavigate();
    return (
        <div className="form">
            <div className="form__header">
                <img onClick={()=>navigate(-1)} src={BackIcon} alt="Back Icon" />
                <div className="form__title">Edit Warehouse</div>
            </div>
            <div className="form__content">
                {/* Left Column in the form */}
                <div className="form__left">
                    {/* Warehouse Details Column */}
                    <h2 className="form__subtitle">Warehouse Details</h2>
                    <div className="form__control">
                        <label htmlFor="warehouse_name" className="form__label">Warehouse Name</label>
                        <input id="warehouse_name" type="text" className="form__input" />
                    </div>
                    <div className="form__control">
                        <label htmlFor="address" className="form__label">Street Adress</label>
                        <input id="address" type="text" className="form__input" />
                    </div>
                    <div className="form__control">
                        <label htmlFor="city" className="form__label">City</label>
                        <input id="city" type="text" className="form__input" />
                    </div>
                    <div className="form__control">
                        <label htmlFor="country" className="form__label">Country</label>
                        <input id="country" type="text" className="form__input" />
                    </div>
                </div>
                {/* Right Column */}
                <div className="form__right">
                    {/* Contact Details Column */}
                    <h2 className="form__subtitle">Contact Details</h2>
                    <div className="form__control">
                        <label htmlFor="contact_name" className="form__label">Contact Name</label>
                        <input id="contact_name" type="text" className="form__input" />
                    </div>
                    <div className="form__control">
                        <label htmlFor="position" className="form__label">Position</label>
                        <input id="position" type="text" className="form__input" />
                    </div>
                    <div className="form__control">
                        <label htmlFor="phone" className="form__label">Phone Number</label>
                        <input id="phone" type="text" className="form__input" />
                    </div>
                    <div className="form__control">
                        <label htmlFor="email" className="form__label">Email</label>
                        <input id="email" type="text" className="form__input" />
                    </div>
                </div>
            </div>
            <div className="form__buttons">
                <div className="form__btn form__cancel-btn">Cancel</div>
                <div className="form__btn form__save-btn">Save</div>
            </div>
        </div>
    )
}

export default EditWarehousePage