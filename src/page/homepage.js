import React, { Component } from "react";
import "../style/homepage.scss";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";
import ScrollList from "../components/scrollList";
import Modal from "../components/modal";

import TabBar from "../components/TabBar";
import PopList from "../components/popList";
import * as Parameters from "../Parameters/Parameters";

class Home extends Component {
	state = {
		showShop: false,
		showList: false,
	};

	shopHandler = () => {
		this.setState((prevState) => ({
			showShop: !prevState.showShop,
		}));
	};

	listHandler = () => {
		this.setState((prevState) => ({
			showList: !prevState.showList,
		}));
	};

	render() {
		return (
			<div className="container">
				<div className="header">
					<button className="shop-btn" onClick={this.shopHandler}>
						商城
					</button>
				</div>
				<Modal show={this.state.showShop} className="shop">
					<TabBar />
				</Modal>
				<div className="timeList">
					<div className="timeList-list">
						<ScrollList
							vertialParams={Parameters.vertialParams}
							data={Parameters.timeData}
						></ScrollList>
					</div>
				</div>
				<button className="body-btn">点击进入直播间</button>
				<div className="list-horizontal">
					<ul>
						<Swiper {...Parameters.params}>
							<li className="swiper-slide">S1战神</li>
							<li className="swiper-slide">S2战神</li>
							<li className="swiper-slide">S3战神</li>
							<li className="swiper-slide">S4战神</li>
							<li className="swiper-slide">S5战神</li>
							<li className="swiper-slide">S6战神</li>
							<li className="swiper-slide">S7战神</li>
							<li className="swiper-slide">S8战神</li>
							<li className="swiper-slide">S9战神</li>
							<li className="swiper-slide">S10战神</li>
						</Swiper>
					</ul>
				</div>
				<div className="footer">
					<button onClick={this.listHandler} className="footer-btn">
						人气榜
					</button>
					<button className="footer-btn">人气工会</button>
				</div>

				<Modal
					show={this.state.showList}
					className="list"
					btn={<button onClick={this.listHandler}>关闭</button>}
				>
					<div className="popList-list">
						<PopList />
					</div>
				</Modal>
			</div>
		);
	}
}

export default Home;
