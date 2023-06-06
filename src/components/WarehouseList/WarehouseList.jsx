import React from 'react';
import arrowright from '../../assets/Icons/chevron_right-24px.svg'
import sort from '../../assets/Icons/sort-24px.svg'
import './WarehouseList.scss'
import deleteimg from '../../assets/Icons/delete_outline-24px.svg'
import editing from '../../assets/Icons/edit-24px.svg'

function warehouseList() {

    return(
        <div className="container">
            <ul className='container__headerlist'>
                <li className='container__li'>
                <span className='container__li--item'>
                    <p>WAREHOUSE</p> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item'>
                    <p>ADRESS</p> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item'>
                    <p>CONTACT NAME</p> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item'>
                    <p>CONTACT INFORMATION</p> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item'>
                    <p>ACTIONS</p> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                </li>
            </ul>
            <ul className="container__list">
                <li className='container__li'>
                    <p>Test</p>
                </li>
                <li className='container__li hoverdiv'>
                    <span className='container__li--item'>
                    <p className='container__li--special'>Test</p> 
                    <img src={`${arrowright}`} alt="arrow" />
                    </span>
                    <p className='container__li--item'>Second test</p>
                    <p className='container__li--item'>Third test</p>
                    <p className='container__li--item'>Fourth test</p>
                    <span className='container__li--img'>
                    <img src={`${deleteimg}`} alt="delete" />
                    <img src={`${editing}`} alt="edit" />
                    </span>
                </li>
                <li className='container__li'>
                    <p>Test</p>
                </li>
            </ul>
        </div>

    )
}
export default warehouseList;