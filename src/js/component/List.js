import React from "react";
import Footer from "./Footer";
import PropTypes from "prop-types";

function List(props) {
	const addItemToList = () => {
		props.setList([...list, props.item]);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col mx-auto">
					<div className="list-group w-75 shadow">
						<form>
							<input
								type="text"
								className="list-group-item w-100"
								placeholder="What needs to be done?"
								onChange={e => props.setItem(e.target.value)}
							/>
						</form>
						<li className="list-group-item">
							<div className="items float-end"></div>
							<button className="btn delete">x</button>
						</li>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}

List.propTypes = {
	item: PropTypes.string,
	setItem: PropTypes.func,
	list: PropTypes.array,
	setList: PropTypes.func
};

export default List;
