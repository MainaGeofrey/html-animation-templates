class App extends React.Component {
	constructor(props) {
		super(props);
		
		const currentYear = (new Date()).getFullYear();
		
		this.state = {
			currentYear
		};
	}
	
	render() {
		return (
			<div>				
				<div className="flex-align-center-justify-center-direction-column view-height p-all">
					<img className="foresight-logo m-bottom" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/312465/Foresight%20Logo-01.svg" />
					<div className="foresight-search-bar fill-space m-bottom">
						<input type="text" placeholder="Search the Pokémon Universe" />
						<i className="material-icons">search</i>
					</div>
					<div className="m-bottom">
						<button className="btn primary m-right">Search</button>
						<button className="btn dark-grey">Browse PokéNews</button>
					</div>
					<div className="text-center text-grey font-lighter">
						<div><small>&copy; Cole Waldrip, {this.state.currentYear}</small></div>
						<div><small>All rights reserved.</small></div>
					</div>
				</div>
				
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));