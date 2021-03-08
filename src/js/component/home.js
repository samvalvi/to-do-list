import React, { useState, useEffect, Fragment } from "react";
import Header from "./Header";
import List from "./List";

//create your first component
export function Home() {
	const [item, setItem] = useState("");
	const [list, setList] = useState([{ id: "", taskName: "" }]);

	useEffect(() => {
		console.log(list);
	}, []);

	return (
		<div className="container d-flex flex-column">
			<Header />
			<List item={item} setItem={setItem} list={list} setList={setList} />
		</div>
	);
}
