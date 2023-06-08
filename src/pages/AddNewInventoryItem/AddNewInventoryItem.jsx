import "./AddNewInventoryItem.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
// import DitailsForm from "../../components/DetailsForm/DitailsForm";
import Detailsform from "../../components/DetailsForm/Ditailsform";
import EditItemDetailsForm from "../../components/EditItemDetailsForm/EditItemDetailsForm";
import ItemAvailabilityForm from "../../components/ItemAvailabilityForm/ItemAvailabilityForm";
import ItemDetailsForm from "../../components/ItemDetailsForm/ItemDetailsForm";

function AddNewInventoryItem() {
  //bring in Api address for axios calls
  const api = process.env.REACT_APP_API_URL;
  const { v4 } = require("uuid");
  const navigate = useNavigate();

const [warehouses, setWarehouses] = useState([]);
const [inventories, setInventories] = useState([]);
const [itemName, setItemName] = useState("");
const [desc, setDesc] = useState("");
const [category, setCategory] = useState("");
const [status, setStatus] = useState("");
const [quantity, setQuantity] = useState("");
const [selectWarehouse, setSelectWarehouse] = useState("");
const [itemNameError, setItemNameError] = useState(false);
const [descError, setDescError] = useState(false);
const [selectWarehouseError, setSelectWarehouseError] = useState(false);
const [categoryError, setCategoryError] = useState(false);
const [statusError, setStatusError] = useState(false);
const [quantityError, setQuantityError] = useState(false);
const [submit, setSubmit] = useState(false);

  const handleChangeSelectWarehouse = (event) => {
    if (selectWarehouse !== "") setSelectWarehouseError(false);
    document.querySelector(".avail__warehouse").classList.remove("error");
    setSelectWarehouse(event.target.value);
  };

  const handleChangeItemName = (event) => {
    if (itemName !== "") setItemNameError(false);
    document.querySelector(".details__input").classList.remove("error");
    setItemName(event.target.value);
  };

  const handleChangeDesc = (event) => {
    if (desc !== "") setDescError(false);
    document.querySelector(".details__desc-input").classList.remove("error");
    setDesc(event.target.value);
  };

  const handleChangeCategory = (event) => {
    if (category !== "") setCategoryError(false);
    document.querySelector(".details__select").classList.remove("error");
    setCategory(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    if (quantity !== "") setQuantityError(false);
    document.querySelector(".avail__input").classList.remove("error");
    setQuantity(event.target.value);
  };

  const handleChangeStatus = (event) => {
	//create variables for checkbox radios
	const quantityWrapper = document.querySelector(".avail__quantity-wrap");
	const stockRadio = document.querySelectorAll(".avail__radio");
	//create true value if item in stock, false if out of stock
	let stockCheck = stockRadio[0].checked;
	//if item out of stock then set instock inputVluae and hide quantity field
	if (!stockCheck) {
		setQuantity('0')
	}
    setStatus(event.target.value);
  };

	//on load get warehouses and inventories
	useEffect(() => {
		getWarehouses();
		getInventories();
		//disable dependency request to avoid creating infinite loop
		// eslint-disable-next-line
	}, []);

  //api get call function to get warehouses
  function getWarehouses() {
    axios
      .get(`${api}/warehouses`)
      .then((data) => {
        if (data) {
          setWarehouses(data.data);
        }
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }

    //api get call function to get inventories ==move function up later
  function getInventories() {
    axios
      .get(`${api}/inventories`)
      .then((data) => {
        if (data) {
          setInventories(data.data);
        }
      })
      .catch((err) => {
        console.log("err: ", err);
        // navigate("/404");e.target.videoDesc.value
      });
  }

  //removeDup example modified from a respons 
  function removeDup(arr) {
    let result = [];
    arr.forEach((item) => {
      if (!result.includes(item.category)) result.push(item.category);
    });
    return result;
  }
  //categoryArray has all categories from inventories without duplicates
  const categoryArray = removeDup(inventories);

  //function to handle form submit
  function handleFormSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    if (itemName === "") {
      setItemNameError(true);
      document.querySelector(".details__input").classList.add("error");
      return alert("Please enter an item name");
    }

    // if (inputValues.desc === '') {
    if (desc === "") {
      setDescError(true);
      document.querySelector(".details__desc-input").classList.add("error");
      return alert("Please enter an item description");
    }
    // if (inputValues.category === '') {
    if (category === "") {
      setCategoryError(true);
      document.querySelector(".details__select").classList.add("error");
      return alert("Please select a category");
    }

    // if (isNaN(inputValues.quantity) || inputValues.quantity === '') {
    if (isNaN(quantity) || quantity === "") {
      setQuantityError(true);
      document.querySelector(".avail__input").classList.add("error");
      return alert("Please enter a number for quantity");
    }

				//Get warehouse id based off of warehosue name of inventory item selected
		function getWarehouseId(array) {
			return array.warehouse_name === selectWarehouse;
		}
		let warehouseId = warehouses.find(getWarehouseId);
		//set new id variable to be able to navigate to page after
		let newId = v4();

      axios
        .post(`${api}/inventories`, {
          id: newId,
          warehouse_id: selectWarehouse,
          item_name: itemName,
          description: desc,
          category: category,
          status: status,
          quantity: quantity,
        })
        .then((response) => {
          alert(`Your new inventory item ${itemName} has been added`);

          //reset form on successful submit
          e.target.reset();
          setSelectWarehouse("");
          setItemName("");
          setDesc("");
          setCategory("");
          setStatus("");
          setQuantity(0);
          navigate(`/inventory/${newId}`);
        })
        .catch((err) => {
          console.error(err);
        });
    }

  //function to handle form cancel
  function handleFormCancel(e) {
    e.preventDefault();
    document.querySelector("form").reset();
    setSelectWarehouse("");
    setItemName("");
    setDesc("");
    setCategory("");
    setStatus("");
    setQuantity(0);
    navigate(-1);
  }

  
	return (
		<section className="container">
			<div className="heading">
				<Link className="heading__link" to={".."} onClick={(e) => {
						e.preventDefault();
						navigate(-1);
					}}
				>
					<img src={ArrowBack} alt="ArrowBackButton" />
				</Link>
				<h1 className="heading__title">Add New Inventory Item</h1>
			</div>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form__component-container">
					<ItemDetailsForm
						categoryArray={categoryArray}
						handleChangeItemName={handleChangeItemName}
						itemName={itemName}
						itemNameError={itemNameError}
						handleChangeDesc={handleChangeDesc}
						desc={desc}
						descError={descError}
						handleChangeCategory={handleChangeCategory}
						category={category}
						categoryError={categoryError}
						submit={submit}
					/>
				</div>
				<div className="form__component-container">
					<ItemAvailabilityForm
						warehouses={warehouses}
						handleChangeStatus={handleChangeStatus}
						status={status}
						handleChangeQuantity={handleChangeQuantity}
						quantity={quantity}
						handleChangeSelectWarehouse={handleChangeSelectWarehouse}
						selectWarehouse={selectWarehouse}
						statusError={statusError}
						quantityError={quantityError}
						selectWarehouseError={selectWarehouseError}
						submit={submit}
					/>
				</div>
				<div className="form__button-wrapper">
					<div className="form__button-container">
						<button
							className="form__button form__button--1"
							to={".."}
							onClick={handleFormCancel}
						>
							Cancel
						</button>
						<button className="form__button form__button--2">+ Add Item</button>
					</div>
				</div>
			</form>
		</section>
	);
}

export default AddNewInventoryItem;
