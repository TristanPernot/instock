import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import arrowright from '../../assets/Icons/chevron_right-24px.svg'
import sort from '../../assets/Icons/sort-24px.svg'
import './WarehouseList.scss'
import deleteimg from '../../assets/Icons/delete_outline-24px.svg'
import editing from '../../assets/Icons/edit-24px.svg'
import DeleteModal from '../DeleteModal/DeleteModal';

function WarehouseList(){
    const api = process.env.REACT_APP_API_URL;
    const [warehouse, setWarehouse] = useState([]);
    const [deleteModalInfo, setDeleteModalInfo] = useState({});

    useEffect(() => {
        axios
          .get(`http://localhost:8080/warehouse`)
          .then((response) => {
            setWarehouse(response.data);
          })
          .catch((err) => console.log(err));
      }, []);

      function getWarehouseList() {
        axios
          .get(`${api}/warehouse`)
          .then((response) => {
            setWarehouse(response.data);
          })
    
          .catch((error) => {
            console.log(error);
          });
      }
      function deleteWarehouse(id) {
        axios
          .delete(`${api}/warehouse/${id}`)
          .then((response) => {
            getWarehouseList(id);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      function deleteButtonClick(warehouse) {
        const info = {
          id: warehouse.id,
          title: `Delete ${warehouse.name} warehouse?`,
          text: `Please confirm that you’d like to delete ${warehouse.name} from the list of warehouses. You won’t be able to undo this action.`,
        };
    
        setDeleteModalInfo(info);
      }
    
      function onDeleteModalCancel() {
        setDeleteModalInfo({});
      }
    
      function onDeleteModalConfirm(id) {
        deleteWarehouse(id);
        setDeleteModalInfo({});
      }
    return(
        <div className="container">
            <DeleteModal
            deleteModalInfo={deleteModalInfo}
            onCancel={onDeleteModalCancel}
            onConfirm={onDeleteModalConfirm}
          />
            <h1>Warehouse</h1>
            <form className='container__form'>
            <input
                  id="search"
                  type="text"
                  className='container__searchbox'
                  placeholder="Search..."
                  name="searchBar"
                />
                <Link className="container__btn" to={"/addWarehouse"}>
                  + Add New Warehouse
                </Link>
            </form>
            <ul className='container__headerlist'>
                <li className='container__li--header'>
                <div className='container__li--format'>
                    <span className='container__li--item'>
                        <h4>WAREHOUSE</h4> 
                        <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item '>
                        <h4>ADDRESS</h4> 
                        <img src={`${sort}`} alt="sort" />
                    </span>
                </div>
                <div className='container__li--format'>
                    <span className='container__li--item '>
                        <h4>CONTACT NAME</h4> 
                        <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item container__li--item-large'>
                        <h4>CONTACT INFO</h4> 
                        <img src={`${sort}`} alt="sort" />
                    </span>
                </div>
                    <span className='container__li--item'>
                        <h4>ACTIONS</h4> 
                    </span>
                </li>
            </ul>
            <ul className="container__list">
            {warehouse.map((warehouse) => {
                return (
                <li key={warehouse.id} className='container__li hoverdiv'>
                    <div className='container__li--format'>
                        <h4 className='container__li--mobile'>Warehouse</h4> 
                    
                        <span className='container__li--item'>
                        <Link
                            to={`/warehouse/${warehouse.id}`}
                          >
                            <div className="container__li--format">
                                <p className='container__li--special'>
                                    {warehouse.warehouse_name}
                                </p> 
                                <img src={`${arrowright}`} alt="arrow" />
                            </div>
                        </Link>
                        </span>
                        <h4 className='container__li--mobile'>Address</h4> 
                        <div className='container__li--item container__li--format'>
                            {warehouse.address}
                            {warehouse.city}{warehouse.country}
                        </div>
                    </div>
                    <div className="container__li--format">
                        <h4 className='container__li--mobile'>Contact Name</h4> 
                        <p className='container__li--item'>
                            {warehouse.contact_name}
                            </p>
                        <h4 className='container__li--mobile'>Contact information</h4> 
                        <div className='container__li--item container__li--item-large container__li--format' >
                            {warehouse.contact_phone}
                            {warehouse.contact_email}
                        </div>
                    </div>
                    <span className='container__li--img'>
                        <img src={`${deleteimg}`} alt="delete"  onClick={() => deleteButtonClick(warehouse)}/>
                        <Link to={`/warehouse/edit/${warehouse.id}`}>
                        <img src={`${editing}`} alt="edit" /> 
                        </Link>
                    </span>
                </li>
                );
            })}
            </ul>
        </div>

    )
}
export default WarehouseList;