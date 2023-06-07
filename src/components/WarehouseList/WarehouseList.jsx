import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import arrowright from '../../assets/Icons/chevron_right-24px.svg'
import sort from '../../assets/Icons/sort-24px.svg'
import './WarehouseList.scss'
import deleteimg from '../../assets/Icons/delete_outline-24px.svg'
import editing from '../../assets/Icons/edit-24px.svg'
function warehouseList() {
    const api = process.env.REACT_APP_API_URL;


    return(
        
        <div className="container">
            <h1>Warehouse</h1>
            <form className='container__form'>
            <input
                  id="search"
                  type="text"
                  className='container__searchbox'
                  placeholder="Search..."
                  name="searchBar"
                />
            </form>
            <ul className='container__headerlist'>
                <li className='container__li--header'>
                <span className='container__li--item'>
                    <h4>WAREHOUSE</h4> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item'>
                    <h4>ADRESS</h4> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item'>
                    <h4>CONTACT NAME</h4> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item'>
                    <h4>CONTACT INFORMATION</h4> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item'>
                    <h4>ACTIONS</h4> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                </li>
            </ul>
            <ul className="container__list">
                <li className='container__li hoverdiv'>
                    <div className='container__li--format'>
                        <h4 className='container__li--mobile'>Warehouse</h4> 
                        <span className='container__li--item'>
                            <p className='container__li--special'>Test</p> 
                            <img src={`${arrowright}`} alt="arrow" />
                        </span>
                        <h4 className='container__li--mobile'>Adress</h4> 
                        <p className='container__li--item'>Second test</p>
                    </div>
                    <div className="container__li--format">
                        <h4 className='container__li--mobile'>Contact Name</h4> 
                        <p className='container__li--item'>Third test</p>
                        <h4 className='container__li--mobile'>Contact information</h4> 
                        <p className='container__li--item'>Fourth test</p>
                    </div>
                    <span className='container__li--img'>
                        <img src={`${deleteimg}`} alt="delete" />
                        <img src={`${editing}`} alt="edit" />
                    </span>
                </li>
            </ul>
        </div>

    )
}
export default warehouseList;