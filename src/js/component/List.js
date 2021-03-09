import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

function List({ updateError, task, setTask, list, setList, addTask }) {
	const { id, taskName } = task;

	const handleChange = e => {
		setTask({ ...task, [e.target.name]: e.target.value });
	};

	const deleteTask = e => {
		console.log("Deleting task");
	};

	const submitHandler = e => {
		e.preventDefault();
		//validation
		if (taskName.trim() === "") {
			updateError("Your task is empty.");
			return false;
		}

		//Reset error
		updateError("");

		//Id
		task.id = nanoid();

		//Add task to list
		addTask(task);

		//Reset form
		setTask({
			taskName: ""
		});
	};

	return (
		<div className="w-75 mx-auto shadow">
			<form onSubmit={submitHandler}>
				<input
					className="list-group-item w-100"
					type="text"
					placeholder="What needs to be done?"
					name="taskName"
					value={taskName}
					onChange={handleChange}
				/>
			</form>
			<div className="list">
				<ul className="list-group">
					{list.map(element => {
						<li className="list-group-item">{element.taskName}</li>;
					})}
				</ul>
			</div>
			<div className="footer m-1">
				<small className="">
					{list.length !== 0
						? `${list.length} task left`
						: "no tasks to do"}
				</small>
			</div>
		</div>
	);
}

List.propTypes = {
	updateError: PropTypes.func,
	task: PropTypes.object,
	setTask: PropTypes.func,
	list: PropTypes.array,
	setList: PropTypes.func,
	addTask: PropTypes.func
};

export default List;
