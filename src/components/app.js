import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import MenuItem from '../routes/menu-item';

import foodMenu from './food-menu';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      foodMenu,
    };
  }

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
        <div className="bg-overlay" />
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
          <MenuItem path="/menu/:name" />
				</Router>
			</div>
		);
	}
}
