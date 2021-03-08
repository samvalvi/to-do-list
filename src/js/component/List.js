import React from "react";
import PropTypes from "prop-types";

function List(props) {
	const addItemToList = () => {
		props.setList([...props.list, props.item]);
	};

	const handleChange = e => {
		e.prevent.Default();
		props.setItem(...props.list, e.target.value);
	};

	const deleteTask = e => {
		console.log("Deleting task");
	};

	return (
		<div className="shadow">
			<form>
				<input
					className="list-group-item w-100"
					type="text"
					placeholder="What needs to be done?"
					onChange={handleChange}
				/>
			</form>
			<li className="list-group-item">
				<div className="items float-end"></div>
				{props.list.map((element, i) => {
					<p key={i}>
						{element}
						<button className="btn" onClik={() => deleteTask}>
							<i className="fas fa-times"></i>
						</button>
					</p>;
				})}
			</li>
			<div className="footer m-1">
				<small className="">
					{props.list.length !== 0
						? `${props.list.length} task left`
						: "no tasks to do"}
				</small>
			</div>
		</div>
	);
}

List.propTypes = {
	item: PropTypes.string,
	setItem: PropTypes.func,
	list: PropTypes.array,
	setList: PropTypes.func
};

export default List;
