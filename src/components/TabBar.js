import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import Card from "../components/Card";

const TabBar = () => {
	return (
		<React.Fragment>
			<h3 style={{ textAlign: "center" }}>商城</h3>
			<Tabs>
				<div>
					<TabList className="tab-container">
						<Tab className="tab-tabBar">称号</Tab>
						<Tab className="tab-tabBar">装饰</Tab>
						<Tab className="tab-tabBar">道具</Tab>
						<Tab className="tab-tabBar">礼物</Tab>
					</TabList>
				</div>

				<TabPanel
					style={{
						display: "flex",
						flexWrap: "wrap",

						justifyContent: "center",
						flexBasis: "1",
					}}
				>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>

					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
				</TabPanel>
				<TabPanel
					style={{
						display: "flex",
						flexWrap: "wrap",
						maxHeight: "40vh",
						justifyContent: "center",
						flexBasis: "1",
					}}
				>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
				</TabPanel>
				<TabPanel
					style={{
						display: "flex",
						flexWrap: "wrap",
						maxHeight: "40vh",
						justifyContent: "center",
						flexBasis: "1",
					}}
				>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
				</TabPanel>
				<TabPanel
					style={{
						display: "flex",
						flexWrap: "wrap",
						maxHeight: "40vh",
						justifyContent: "center",
						flexBasis: "1",
					}}
				>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
					<Card>
						<div className="card-item">灰烬王座【头像框】</div>
					</Card>
				</TabPanel>
			</Tabs>
		</React.Fragment>
	);
};

export default TabBar;
