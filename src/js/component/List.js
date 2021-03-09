import React from "react";
import PropTypes from "prop-types";

function List({ element, deleteTask }) {
	return (
		<li className="list-group-item p-0">
			{element.tasKname}
			<button className="btn" id="delete">
				<i
					className="fas fa-times"
					onClick={() => deleteTask(element.id)}></i>
			</button>
		</li>
	);
}

List.propTypes = {
	element: PropTypes.object,
	deleteTask: PropTypes.func
};

export default List;
