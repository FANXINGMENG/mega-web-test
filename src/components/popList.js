import React from "react";
import Card from "./Card";
import ScrollList from "../components/scrollList";
import "../style/popList.scss";
import * as Parameters from "../Parameters/Parameters";

const PopList = (props) => {
	return (
		<React.Fragment>
			<div className="popList">
				<div className="popList-header">
					<Card>
						<div>人气主播</div>
					</Card>
					<Card>
						<div>人气主播</div>
					</Card>
					<Card>
						<div>人气主播</div>
					</Card>
				</div>
				<div className="popList-list">
					<ScrollList
						vertialParams={Parameters.popVertialParams}
						data={Parameters.popData}
					></ScrollList>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PopList;
