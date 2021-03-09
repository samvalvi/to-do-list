import React from "react";
import PropTypes from "prop-types";

export function List({ list, deleteTask }) {
	return (
		<ul className="list-group">
			{list.map((task, index) => (
				<li className="list-group-item p-0" key={index}>
					{task}
					<button className="btn" id="delete">
						<i
							className="fas fa-times"
							onClick={() => deleteTask(index)}></i>
					</button>
				</li>
			))}
		</ul>
	);
}

List.propTypes = {
	list: PropTypes.array,
	deleteTask: PropTypes.func
};
