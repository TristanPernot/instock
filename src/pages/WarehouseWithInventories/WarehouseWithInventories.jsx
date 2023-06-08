import "./WarehouseWithInventories.scss";
import BackIcon from "../../assets/Icons/arrow_back-24px.svg";
import EditIcon from "../../assets/Icons/edit-white-24px.svg";
import BlueEditIcon from "../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import MenuIcon from "../../assets/Icons/sort-24px.svg";
import FowardIcon from "../../assets/Icons/chevron_right-24px.svg";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
const WarehouseWithInventories = () => {
    const {id} = useParams();
    const [warehouse, setWarehouse] = useState({});
    const [inventories, setInventories] = useState([]);
    const [deleteModalInfo, setDeleteModalInfo] = useState({});

    const navigate = useNavigate();
    // Fetch info about the warehouse
    useEffect(()=> {
        axios.get(`http://localhost:8080/warehouse/${id}`)
            .then((response) => setWarehouse(response.data))
            .catch((error) => console.log(error))
    }, [])
    // Fetch all inventory for a given warehouse
    useEffect(() => {
        axios.get(`http://localhost:8080/inventory/forWarehouse/${id}`)
            .then((response) => setInventories(response.data))
            .catch((error) => console.log(error))
    }, [])
    // Get new inventory
    const getInventories = () => {
        axios.get(`http://localhost:8080/inventory/forWarehouse/${id}`)
            .then((response) => setInventories(response.data))
            .catch((error) => console.log(error))
    }
    // Delete Inventory
    const onDeleteModalCancel = () => {
        setDeleteModalInfo({});
    }
    const onDeleteModalConfirm = async () => {
        await deleteInventory(deleteModalInfo.id, id);
        setDeleteModalInfo({});
    }
    const deleteInventory = (id, warehouse_id) => {
        axios.delete(`http://localhost:8080/inventory/${id}`)
            .then((response) => {
                getInventories();
                navigate(`/warehouse/${warehouse_id}`);
            } )
            .catch((error) => console.log(error))
    }
    const deleteButton = (id, name) => {
        setDeleteModalInfo({
            id: id,
            title: `Delete ${name} inventory?`,
            text: `Please confirm that you’d like to delete ${name} from the list of inventory. You won’t be able to undo this action.`,
        })
    };
    return (
        <div className="warehouseInventories">
            {/* Header */}
            <DeleteModal
                deleteModalInfo={deleteModalInfo}
                onCancel={onDeleteModalCancel}
                onConfirm={onDeleteModalConfirm}
            />
            <div className="warehouseInventories__header">
                <div className="header__heading">
                    <img onClick={() => navigate("/")} src={BackIcon} alt="" className="header__btn" />
                    <p className="header__title">{warehouse?.warehouse_name}</p>
                </div>
                <Link to={`/editWarehouse/${id}`}>
                    <div className="item__edit-btn">
                        <img className="item__btn" src={EditIcon} alt="Edit Icon" />
                        <p className="item__edit-text">Edit</p>
                    </div>
                </Link>
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
                {/* Header */}
                <div className="inventories__header">
                    {/* One */}
                    <div className="inventory__left">
                        <div className="col w-50">
                            <p className="col__title-header">INVENTORY ITEM</p>
                            <img className="col__btn" src={MenuIcon} alt="Menu Icon"/>
                        </div>
                        <div className="col">
                            <p className="col__title-header">CATEGORY</p>
                            <img className="col__btn" src={MenuIcon} alt="Menu Icon"/>
                        </div>
                    </div>
                    {/* Two */}
                    <div className="inventory__right">
                        <div className="col w-50">
                            <p className="col__title-header">STATUS</p>
                            <img className="col__btn" src={MenuIcon} alt="Menu Icon"/>
                        </div>
                        <div className="col">
                            <p className="col__title-header">QTY</p>
                            <img className="col__btn" src={MenuIcon} alt="Menu Icon"/>
                        </div>
                    </div>
                    {/* Three */}
                    <div className="inventory__bottom">
                        <div className="col">
                            <p className="col__title-header">ACTION</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                {
                    inventories.map((inventory) => {
                        return (
                            
                                <div key={inventory.id} className="inventory__item">
                                {/* One */}
                                <div className="inventory__left">
                                    <div className="col w-50">
                                        <p className="col__title">INVENTORY ITEM</p>
                                        <Link  to={`/inventory/${inventory.id}`}>
                                            <div className="col__info col__inventory-name">
                                                <p>{inventory.item_name}</p>
                                                <img className="col__inventory-name__btn" src={FowardIcon} alt="Menu Icon"/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <p className="col__title">CATEGORY</p>
                                        <p className="col__info">{inventory.category}</p>
                                    </div>
                                </div>
                                {/* Two */}
                                <div className="inventory__right">
                                    <div className="col w-50">
                                        <p className="col__title">STATUS</p>
                                        <p className={inventory.quantity > 0 ? "col__info col__stock" : "col__info col__stock--red"}>{inventory.status}</p>
                                    </div>
                                    <div className="col">
                                        <p className="col__title">QTY</p>
                                        <p className="col__info">{inventory.quantity}</p>
                                    </div>
                                </div>
                                {/* Three */}
                                <div className="inventory__bottom">
                                    <button onClick={() => deleteButton(inventory.id, inventory.item_name)} className="inventory__btn">
                                        <img className="inventory__deleteBtn" src={DeleteIcon} alt="Delete Icon"/>
                                    </button>
                                    <Link to={`/editInventory/${inventory.id}`}>
                                        <button className="inventory__btn">
                                            <img src={BlueEditIcon} alt="Edit Icon"/>
                                        </button>
                                    </Link>
 
                                </div>
                            </div>
                        
                        )
                    })
                }
            </div>
        </div>
    )
}
export default WarehouseWithInventories;