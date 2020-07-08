import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
	render() {
		return (
			<div className="list-item-container box-shadow-3d">
				<div className="list-item-img">
					<img src={this.props.product.image} className="img-item"></img>
				</div>
				<div className="list-item-info">
					<div className="item-name">
						<h2 className="item-name-txt">{this.props.product.name}</h2>
					</div>
					<div className="item-price">
						<span className="price-tag-symbol">$</span>
						<span className="item-price-txt">{this.props.product.price}</span>
					</div>
					<div className="item-units">
						<span className="item-units-txt">
							{this.props.product.units} available units
						</span>
					</div>
					<div className="item-category">
						<span className="item-category-txt">
							{this.props.product.category} for {this.props.product.animaltype}s
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default ListItem;
