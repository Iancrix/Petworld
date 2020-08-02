import React, { Component } from "react";
import "./PetProfile.css";

import axios from "axios";
import { withRouter } from "react-router-dom";

class PetProfile extends Component {
	state = {
		pet: {
			rescue: {},
		},
	};

	getImage = () => {
		return { backgroundImage: `url(${this.state.pet.image})` };
	};

	componentDidMount() {
		console.log("hola");
		axios
			.get(
				`http://localhost:5000/petsRoute/${this.props.match.params.idAnimal}`
			)
			.then(res => {
				this.setState({
					pet: res.data,
				});
				console.log(res.data);
			})
			.catch(e => console.log(e));
	}

	render() {
		console.log(this.state.pet);
		return (
			<div className="profile">
				<div className="container-profile">
					<div className="flex">
						<div className="photo-profile">
							<div className="profile-img" style={this.getImage()}></div>
						</div>
						<div className="info-profile">
							<div className="name-profile">{this.state.pet.name}</div>
							<div className="description-profile">
								{this.state.pet.description}
							</div>
							<div className="perks-profile">
								<div className="perk">
									<div className="perk-pr">
										<span className="perk-txt">Amigable</span>
									</div>
								</div>
								<div className="perk">
									<div className="perk-pr">
										<span className="perk-txt">Jugueton</span>
									</div>
								</div>
								<div className="perk">
									<div className="perk-pr">
										<span className="perk-txt">Tierno</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="char-profile">
						<div className="char-title">PET DETAILS</div>
						<div className="char-container">
							<div className="char-left">
								<div className="chars-title">Characteristics</div>
								<ul className="char-ls">
									<div className="char-item">
										Age: &nbsp;
										<div className="char-value">{this.state.pet.age}</div>
									</div>
									<div className="char-item">
										Breed: &nbsp;
										<div className="char-value">{this.state.pet.breed}</div>
									</div>
									<div className="char-item">
										Genre: &nbsp;
										<div className="char-value">{this.state.pet.genre}</div>
									</div>
									<div className="char-item">
										Location: &nbsp;
										<div className="char-value">{this.state.pet.location}</div>
									</div>
								</ul>
							</div>
							<div className="char-right">
								<div className="chars-title">Rescue Details</div>
								<ul className="char-ls">
									<div className="char-item">
										Name: &nbsp;
										<div className="char-value">
											{this.state.pet.rescue.name}
										</div>
									</div>
									<div className="char-item">
										City: &nbsp;
										<div className="char-value">
											{this.state.pet.rescue.city}
										</div>
									</div>
									<div className="char-item">
										Email: &nbsp;
										<div className="char-value">
											{this.state.pet.rescue.email}
										</div>
									</div>
									<div className="char-item">
										Contact: &nbsp;
										<div className="char-value">
											{this.state.pet.rescue.contact}
										</div>
									</div>
								</ul>
							</div>
						</div>
					</div>
					<div className="btn-profile">
						<div className="btn-adoption">START ADOPTION PROCESS</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(PetProfile);
