import React, { Component } from "react";
import "./CardItem.css";

class CardItem extends Component {
	render() {
		return (
			<div className="pd-sm">
				<div className="card box-shadow-3d">
					<div className="card-img"></div>
					<div className="card-body"></div>
					<div className="card-body-responsive">
						<div className="card-body-inner">
							<i className="card-icon"></i>
							<span className="card-name">Rex</span>
							<ul className="char ls inherit">
								<li className="inherit">
									<ul className="ls point inherit">
										<li className="card-item">Adult</li>
										<li className="card-item inherit">
											<div className="bullet">&bull;</div>
											Labrador Retriever
										</li>
									</ul>
								</li>
							</ul>
							<span className="card-country">Lousiana, USA</span>
							<p className="card-p">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown{" "}
							</p>
							<a className="inherit">
								<div className="card-btn">View page</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CardItem;
