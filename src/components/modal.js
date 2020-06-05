import React from "react";
import ReactDOM from "react-dom";
import "../style/modal.scss";

import { CSSTransition } from "react-transition-group";

const ModalOverlay = (props) => {
	const content = (
		<div>
			<div className={`${props.className}-modal`}>
				<header>{props.btn}</header>
				<div>{props.children}</div>
			</div>
		</div>
	);
	return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
	return (
		<React.Fragment>
			<CSSTransition
				in={props.show}
				mountOnEnter
				unmountOnExit
				appear
				timeout={300}
				classNames={`${props.className}-transition`}
			>
				<ModalOverlay {...props} />
			</CSSTransition>
		</React.Fragment>
	);
};

export default Modal;
