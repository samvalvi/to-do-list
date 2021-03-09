import React from "react";
import PropTypes from "prop-types";

function List({ element, deleteTask }) {
	return (
		<div className="task">
			<p>{element.tasKname}</p>
			<button className="btn">
				<i
					className="fas fa-times"
					onClick={() => deleteTask(element.id)}></i>
			</button>
		</div>
	);
}

List.propTypes = {
	element: PropTypes.object,
	deleteTask: PropTypes.func
};

export default List;
