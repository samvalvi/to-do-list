import React from "react";
import PropTypes from "prop-types";

function List({ list, task, key, deleteTask }) {
	return (
		<ul className="list-group">
			{list.map(element => (
				<li className="list-group-item p-0" key={element.id}>
					{console.log(element.tasKname)}
					<button className="btn" id="delete">
						<i
							className="fas fa-times"
							onClick={() => deleteTask(element.id)}></i>
					</button>
				</li>
			))}
		</ul>
	);
}

List.propTypes = {
	list: PropTypes.array,
	task: PropTypes.object,
	key: PropTypes.string,
	deleteTask: PropTypes.func
};

export default List;
