import React from 'react';
import arrowright from '../../assets/Icons/chevron_right-24px.svg'
import sort from '../../assets/Icons/sort-24px.svg'
import './WarehouseList.scss'

function warehouseList() {

    return(
        <div className="container">
            <ul className='container__headerlist'>
                <li className='container__li'>
                <span className='container__li--item'>
                    <p>Test</p> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                    <span className='container__li--item'>
                    <p>Test</p> 
                    <img src={`${sort}`} alt="sort" />
                    </span>
                </li>
            </ul>
            <ul className="container__list">
                <li className='container__li'>
                    <p>Test</p>
                </li>
                <li className='container__li'>
                    <span className='container__li--item'>
                    <p className='container__li--special'>Test</p> 
                    <img src={`${arrowright}`} alt="arrow" />
                    </span>
                    <p className='container__li--item'>Second test</p>
                    <p className='container__li--item'>Third test</p>
                    <p className='container__li--item'>Fourth test</p>
                    <p className='container__li--item'>Fifth test</p>
                </li>
                <li className='container__li'>
                    <p>Test</p>
                </li>
            </ul>
        </div>

    )
}
export default warehouseList;