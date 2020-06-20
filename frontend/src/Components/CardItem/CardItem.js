import React, { Component } from "react";
import "./CardItem.css";

class CardItem extends Component {
	getImage = () => {
		return {
			backgroundImage: `url(${this.props.pet.image})`,
		};
	};

	render() {
		return (
			<div className="pd-sm">
				<div className="card box-shadow-3d">
					<div className="card-img" style={this.getImage()}></div>
					<div className="card-body"></div>
					<div className="card-body-responsive">
						<div className="card-body-inner">
							<i className="card-icon"></i>
							<span className="card-name">{this.props.pet.name}</span>
							<ul className="char ls inherit">
								<li className="inherit">
									<ul className="ls point inherit">
										<li className="card-item">{this.props.pet.age}</li>
										<li className="card-item inherit">
											<div className="bullet">&bull;</div>
											{this.props.pet.breed}
										</li>
									</ul>
								</li>
							</ul>
							<span className="card-country">
								{this.props.pet.location}, {this.props.pet.country}
							</span>
							<p className="card-p">{this.props.pet.description} </p>
							<a className="inherit" href="/">
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
