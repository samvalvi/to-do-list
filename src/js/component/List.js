import React from "react";
import PropTypes from "prop-types";

function List({ element, deleteTask }) {
	return (
		<div className="task">
			<ul className="list-group">
				<li className="list-group-item p-0">
					{element.tasKname}
					<button className="btn">
						<i
							className="fas fa-times"
							onClick={() => deleteTask(element.id)}></i>
					</button>
				</li>
			</ul>
		</div>
	);
}

List.propTypes = {
	element: PropTypes.object,
	deleteTask: PropTypes.func
};

export default List;
