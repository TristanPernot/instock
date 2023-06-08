import "./WarehouseWithInventories.scss";
import BackIcon from "../../assets/Icons/arrow_back-24px.svg";
import EditIcon from "../../assets/Icons/edit-white-24px.svg";
import BlueEditIcon from "../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
const WarehouseWithInventories = () => {
    const {id} = useParams();
    const [warehouse, setWarehouse] = useState({});

    // Fetch info about the warehouse
    useEffect(()=> {
        axios.get(`http://localhost:8080/warehouse/${id}`)
            .then((response) => setWarehouse(response.data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="warehouseInventories">
            {/* Header */}
            <div className="warehouseInventories__header">
                <div className="header__heading">
                    <img src={BackIcon} alt="" className="header__btn" />
                    <p className="header__title">{warehouse?.warehouse_name}</p>
                </div>
                <div className="item__edit-btn">
                    <img className="item__btn" src={EditIcon} alt="Edit Icon" />
                    <p className="item__edit-text">Edit</p>
                </div>
            </div>
            {/* Warehouse Detail */}
            {
                warehouse?.id && (
                    <div className="warehouse__content">
                        <div className="warehouse__left">
                            <p className="warehouse__title">WAREHOUSE ADDRESS</p>
                            <p className="warehouse__info">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                        </div>
                        <div className="warehouse__right">
                            <div className="warehouse__col">
                                <p className="warehouse__title">CONTACT NAME</p>
                                <p className="warehouse__info">{warehouse.contact_name}<br></br>{warehouse.contact_position}</p>
                            </div>
                            <div className="warehouse__col">
                                <p className="warehouse__title">CONTACT INFORMATION</p>
                                <p className="warehouse__info">{warehouse.contact_phone}<br></br>{warehouse.contact_email}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            {/* Inventories */}
            <div className="inventories__content">
                {/* Item */}
                <div className="inventory__item">
                    {/* One */}
                    <div className="inventory__left">
                        <div className="col col--50">
                            <div className="col__title">INVENTORY ITEM</div>
                            <div className="col__info">Television</div>
                        </div>
                        <div className="col">
                            <div className="col__title">CATEGORY</div>
                            <div className="col__info">Electronics</div>
                        </div>
                    </div>
                    {/* Two */}
                    <div className="inventory__right">
                        <div className="col col--30">
                            <div className="col__title">STATUS</div>
                            <div className="col__info">IN STOCK</div>
                        </div>
                        <div className="col col--30">
                            <div className="col__title">QTY</div>
                            <div className="col__info">500</div>
                        </div>
                        <div className="col col--30">
                            <div className="col__title">WAREHOUSE</div>
                            <div className="col__info">Manhattan</div>
                        </div>
                    </div>
                    {/* Three */}
                    <div className="inventory__bottom">
                        <button className="inventory__btn">
                            <img className="inventory__deleteBtn" src={DeleteIcon} alt="Delete Icon"/>
                        </button>
                        <button className="inventory__btn">
                            <img src={BlueEditIcon} alt="Edit Icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WarehouseWithInventories;