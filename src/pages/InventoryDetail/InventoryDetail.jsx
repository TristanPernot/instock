import React, {useEffect, useState} from 'react';
import "./InventoryDetail.scss";
import BackIcon from "../../assets/Icons/arrow_back-24px.svg";
import EditIcon from "../../assets/Icons/edit-white-24px.svg";
import axios from "axios";
import { useParams, useNavigate, Link} from 'react-router-dom';
const InventoryDetail = () => {
    const [item, setItem] = useState({})
    const [warehouseName, setWarehouseName] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8080/inventory/${id}`)
            .then((response) => setItem(response.data))
            .catch((error) => console.log(error))
    }, [])
    useEffect(() => {
        if (item.id) {
            axios.get(`http://localhost:8080/warehouse/${item.warehouse_id}`)
                .then((response) => setWarehouseName(response.data.warehouse_name))
                .catch((error) => console.log(error))
        }
    }, [item])
    return (
        <div className="item">
            {/* Header */}
            <div className="item__header">
                <div className="item__left">
                    <img onClick={() => navigate(-1)} src={BackIcon} alt="Back Icon" />
                    <div className="form__title">{item?.item_name}</div>
                </div>
                <Link to={`/editInventory/${item.id}`}>
                    <div className="item__edit-btn">
                        <img className="item__btn" src={EditIcon} alt="Edit Icon" />
                        <p className="item__edit-text">Edit</p>
                    </div>
                </Link>
                
                    
            </div>
            {/* Content */}
            <div className="item__content">
                {/* Container to wrap item description and category */}
                <div className="content__left">
                    <div className="content__box">
                        <p className="content__title">ITEM DESCRIPTION</p>
                        <p className="content__info">{item?.description}</p>
                    </div>
                    <div className="content__box">
                        <p className="content__title">CATEGORY</p>
                        <p className="content__info">{item?.category}</p>
                    </div>
                </div>
                {/* Container to wrap status, quantity, and warehouse */}
                <div className="content__right">
                    {/* Container to wrap status and quantity */}
                    <div className="content__wrapper2">
                        <div className="content__box">
                            <p className="content__title">STATUS</p>
                            <p className={item?.quantity > 0 ? "content__info content__stock" : "content__info content__stock--red"}>{item?.status}</p>
                        </div>
                        <div className="content__box">
                            <p className="content__title">QUANTITY</p>
                            <p className="content__info">{item?.quantity}</p>
                        </div>
                    </div>
                    <div className="content__box">
                        <p className="content__title">WAREHOUSE</p>
                        <p className="content__info">{warehouseName && warehouseName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryDetail
