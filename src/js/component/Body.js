import React from "react";
import List from "./List";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

function Body({ updateError, task, setTask, list, setList, addTask }) {
	const { id, taskName } = task;

	//Add the input value to task
	const handleChange = e => {
		setTask({ ...task, [e.target.name]: e.target.value });
	};

	//Delete the task
	const deleteTask = id => {
		const newTasks = list.filter(element => element.id !== id);
		setList(newTasks);
	};

	const submitHandler = e => {
		e.preventDefault();
		//validation
		if (taskName.trim() === "") {
			updateError("A task name is required");
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
		<div className="w-50 mx-auto shadow">
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

			<div className="bg-white">
				{list.map(element => (
					<List
						key={element.id}
						element={element}
						deleteTask={deleteTask}
					/>
				))}
			</div>

			<div className="footer m-1">
				<small className="text-break text-secondary">
					{list.length !== 0
						? `${list.length} task left`
						: "no tasks to do"}
				</small>
			</div>
		</div>
	);
}

Body.propTypes = {
	error: PropTypes.string,
	updateError: PropTypes.func,
	task: PropTypes.object,
	setTask: PropTypes.func,
	list: PropTypes.array,
	setList: PropTypes.func,
	addTask: PropTypes.func
};

export default Body;
