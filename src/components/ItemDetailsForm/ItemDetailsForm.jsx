import "./ItemDetailsForm.scss";
import InventoryItemErrorMessage from "../InventoryItemErrorMessage/InventoryItemErrorMessage";


function ItemDetailsForm({  
	categoryArray, 
	itemName, 
	desc, 
	category, 
	handleChangeItemName, 
	handleChangeDesc, 
	handleChangeCategory, 
	itemNameError,
	descError,
	categoryError, 
	submit  }) {

		
	return (
		<div className="details">
			<h2 className="details__title">Item Details</h2>

			<label htmlFor="name" className="details__label">
				Item Name
			</label>
			<input
				type="text"
				className="details__input"
				name="itemName"
				value={itemName}
				onChange={handleChangeItemName}
				placeholder="Item Name"
			/>
			{submit === true && itemNameError === true && <InventoryItemErrorMessage />}

			<label htmlFor="desc" className="details__label">
				Description
			</label>
			<textarea
				type="text"
				className="details__desc-input"
				name="desc"
				value={desc}
				onChange={ handleChangeDesc }
				placeholder="Please enter a brief item description..."
			/>
			{submit === true && descError === true && <InventoryItemErrorMessage />}


			<label htmlFor="" className="details__label">
				Category
			</label>
			<div className="details__select-wrap">
				<select
					className="details__select"
					name="category"
					id="details_select"
					onChange={ handleChangeCategory }
					value={category}
				>
					<option className="details__placeholder" value="" readOnly>
						Please select
					</option>
					{categoryArray.map((inventory) => (
						<option
							key={inventory}
							value={inventory}
						>
							{inventory}
						</option>
					))}
				</select>
			</div>
			{submit === true && categoryError === true && <InventoryItemErrorMessage />}
		</div>
	);
}

export default ItemDetailsForm;
