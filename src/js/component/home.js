import React, { useState, useEffect, Fragment } from "react";
import Header from "./Header";
import List from "./List";

//create your first component
export function Home() {
	const [item, setItem] = useState("");
	const [list, setList] = useState([]);

	useEffect(() => {
		console.log(list);
	}, []);

	return (
		<Fragment>
			<Header />
			<List item={item} setItem={setItem} list={list} setList={setList} />
		</Fragment>
	);
}
