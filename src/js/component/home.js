import React, { useState, useEffect, Fragment } from "react";
import Header from "./Header";
import List from "./List";

//create your first component
export function Home() {
	const [error, updateError] = useState("");
	const [task, setTask] = useState({ id: "", taskName: "" });
	const [list, setList] = useState([]);

	useEffect(() => {
		console.log(task);
	}, []);

	const addTask = details => {
		setList([...list, details]);
		console.log(details);
	};

	return (
		<div className="container d-flex flex-column">
			<Header />
			<h6 className="fw-light text-danger">
				{error !== "" ? error : null}
			</h6>
			<List
				updateError={updateError}
				task={task}
				setTask={setTask}
				list={list}
				setList={setList}
				addTask={addTask}
			/>
		</div>
	);
}
