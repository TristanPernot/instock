import React from 'react';
import "./InventoryDetail.scss";
import BackIcon from "../../assets/Icons/arrow_back-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
const InventoryDetail = () => {
    return (
        <div className="item">
            {/* Header */}
            <div className="item__header">
                <div className="item__left">
                    <img src={BackIcon} alt="Back Icon" />
                    <div className="form__title">Television</div>
                </div>
                <div className="item__edit-btn">
                    <img className="item__btn" src={EditIcon} alt="Edit Icon" />
                    <p className="item__edit-text">Edit</p>
                </div>
                    
            </div>
            {/* Content */}
            <div className="item__content">
                {/* Container to wrap item description and category */}
                <div className="content__left">
                    <div className="content__box">
                        <p className="content__title">ITEM DESCRIPTION</p>
                        <p className="content__info">This 50", 4k, LED TV provides a crystal-clear picture and vivid colors</p>
                    </div>
                    <div className="content__box">
                        <p className="content__title">CATEGORY</p>
                        <p className="content__info">Electronics</p>
                    </div>
                </div>
                {/* Container to wrap status, quantity, and warehouse */}
                <div className="content__right">
                    {/* Container to wrap status and quantity */}
                    <div className="content__wrapper2">
                        <div className="content__box">
                            <p className="content__title">STATUS</p>
                            <p className="content__info content__stock">IN STOCK</p>
                        </div>
                        <div className="content__box">
                            <p className="content__title">QUANTITY</p>
                            <p className="content__info">500</p>
                        </div>
                    </div>
                    <div className="content__box">
                        <p className="content__title">WAREHOUSE</p>
                        <p className="content__info">Manhattan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryDetail
