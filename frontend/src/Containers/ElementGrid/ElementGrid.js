import React, { Component } from "react";
import "./ElementGrid.css";

class ElementGrid extends Component {
	render() {
		return (
			<div className="container-full">
				<div className="search-container">
					<div className="filter-container">
						<div className="filter-toggle">
							<div className="filter-toggle-title">
								<i className="filter-icon"></i>
								<span className="filter-text">FILTER SEARCH</span>
							</div>
							<i className="dropdown-icon"></i>
						</div>

						<ul className="filter-list">
							<li className="filter-list-item ls">
								<div className="relative">
									<div>
										<div className="filter-item-title">BREED</div>
										<button className="filter-item-btn">
											<div className="filter-btn-text">Any</div>
											<i className="dropdown-icon-smooth"></i>
										</button>
									</div>
									<div>
										<ul className="filter-dropdown-list ls">
											<li className="filter-dropdown-item">
												<div className="filter-dropdown-inner">
													<div className="filter-dropdown-item-title">hola</div>
													<div className="right">
														<div className="item-count">(55)</div>
														<input
															className="checkbox-dropdown"
															type="checkbox"
														></input>
													</div>
												</div>
											</li>

											<li className="filter-dropdown-item">
												<div className="filter-dropdown-inner">
													<div className="filter-dropdown-item-title">hola</div>
													<div className="right">
														<div className="item-count">(55)</div>
														<input
															className="checkbox-dropdown"
															type="checkbox"
														></input>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</li>

							<li className="filter-list-item ls">
								<div className="relative">
									<div>
										<div className="filter-item-title">BREED</div>
										<button className="filter-item-btn">
											<div className="filter-btn-text">Any</div>
											<i className="dropdown-icon-smooth"></i>
										</button>
									</div>
									<div>
										<ul className="filter-dropdown-list ls">
											<li className="filter-dropdown-item">
												<div className="filter-dropdown-inner">
													<div className="filter-dropdown-item-title">hola</div>
													<div className="right">
														<div className="item-count">(55)</div>
														<input
															className="checkbox-dropdown"
															type="checkbox"
														></input>
													</div>
												</div>
											</li>

											<li className="filter-dropdown-item">
												<div className="filter-dropdown-inner">
													<div className="filter-dropdown-item-title">hola</div>
													<div className="right">
														<div className="item-count">(55)</div>
														<input
															className="checkbox-dropdown"
															type="checkbox"
														></input>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="results-container">
						<div className="grid">
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
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown{" "}
											</p>
											<a className="inherit">
												<div className="card-btn">View page</div>
											</a>
										</div>
									</div>
								</div>
							</div>

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
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown{" "}
											</p>
											<a className="inherit">
												<div className="card-btn">View page</div>
											</a>
										</div>
									</div>
								</div>
							</div>

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
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown{" "}
											</p>
											<a className="inherit">
												<div className="card-btn">View page</div>
											</a>
										</div>
									</div>
								</div>
							</div>

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
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown{" "}
											</p>
											<a className="inherit">
												<div className="card-btn">View page</div>
											</a>
										</div>
									</div>
								</div>
							</div>

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
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown{" "}
											</p>
											<a className="inherit">
												<div className="card-btn">View page</div>
											</a>
										</div>
									</div>
								</div>
							</div>

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
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown{" "}
											</p>
											<a className="inherit">
												<div className="card-btn">View page</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ElementGrid;
