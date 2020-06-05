import React from "react";
import "../style/homepage.scss";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";

const ScrollList = (props) => {
	return (
		<div>
			<ul>
				<Swiper {...props.vertialParams}>
					{props.data.map((d) => {
						return (
							<li className={`swiper-slid__${props.className}`} key={d.index}>
								{d.date}
								<div>{d.name}</div>
								<div>{d.popNo}</div>
							</li>
						);
					})}
				</Swiper>
			</ul>
		</div>
	);
};

export default ScrollList;
