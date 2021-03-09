import React, { useState, useEffect, Fragment } from "react";
import Header from "./Header";
import Body from "./Body";

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
	};

	return (
		<div className="container">
			<Header />

			<h6 className="w-50 mx-auto fw-light text-danger">
				{error !== "" ? error : null}
			</h6>

			<Body
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
