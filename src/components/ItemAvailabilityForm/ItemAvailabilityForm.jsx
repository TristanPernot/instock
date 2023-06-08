import "./ItemAvailabilityForm.scss";
import InventoryItemErrorMessage from "../InventoryItemErrorMessage/InventoryItemErrorMessage";

function ItemAvailabilityForm({ 
	warehouses, 
	status, 
	quantity, 
	selectWarehouse, 
	handleChangeStatus, 
	handleChangeQuantity, 
	handleChangeSelectWarehouse,
	statusError,
	quantityError,
	selectWarehouseError,
	submit }) {

	return (
		<div className="avail">
			<h2 className="avail__title">Item Availability</h2>

			<label htmlFor="name" className="avail__label">
				Status
			</label>
			<div className="avail__radio-container">

				<div className="avail__radio-set">
					<input
						className="avail__radio"
						type="radio"
						id="instock"
						name="status"
						value="In Stock"
						onChange={handleChangeStatus}
					/>

					<label className="avail__radio-label" htmlFor="instock">
						In stock
					</label>
				</div>
				<div className="avail__radio-set">
					<input
						className="avail__radio"
						type="radio"
						id="outofstock"
						name="status"
						value="Out of Stock"
						onChange={handleChangeStatus}
					/>
					<label
						className="avail__radio-label"
						htmlFor="outofstock"
					>
						Out of stock
					</label>
					{submit === true && statusError === true && <InventoryItemErrorMessage />}
				</div>

				
			</div>
		<div className={status === "In Stock" ? "" : "out-of-stock"}>
			<label htmlFor="quantity" className="avail__label">
				Quantity
			</label>
			<input
				type="text"
				className="avail__input"
				value={quantity}
				onChange={handleChangeQuantity}
				placeholder=""
				name="quantity"
			/>
		</div>
		{submit === true && quantityError === true && <InventoryItemErrorMessage />}

			<label htmlFor="" className="avail__label">
				Warehouse
			</label>
			<div className="avail__select-wrap">
				<select
					className="avail__warehouse"
					name="selectWarehouse"
					id="avail_warehouse"
					onChange={handleChangeSelectWarehouse}
					value={selectWarehouse}
				>
					<option value="" readOnly>
						Please select
					</option>
					{warehouses.map((warehouse) => (
						<option 
							key={warehouse.id} 
							value={warehouse.id}>
							{warehouse.warehouse_name}
						</option>
					))}
				</select>
			</div>
			{submit === true && selectWarehouseError === true && <InventoryItemErrorMessage />}
		</div>
	);
}

export default ItemAvailabilityForm;
