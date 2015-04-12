import React from 'react/addons';
import Debug from 'debug';

import AppRoot from './components/AppRoot';

var debug = Debug('myApp');

/*
 * @class App
 */
class App {

  /*
   * @constructs App
   * @param {Object} options
   */
  constructor(options) {
    debug('create app with options', options);

    this.state = options.state;
  }

  /*
   * @method render
   * @param {DOM} [element]
   * @returns {String|undefined}
   */
   render (element) {

    debug('render app with state', this.state);

    // would be in JSX: <AppRoot state={this.state} />
    var appRootElement = React.createElement(AppRoot, {
      state: this.state
    });

    // render to DOM
    if(element) {
      debug('render to DOM');
      React.render(appRootElement, element);
      return;
    }

    // render to string
    debug('render to string');
    return React.renderToString(appRootElement);
  }

  /*
   * @method render
   * @param {DOM} element
   */
   renderToDOM (element) {
    if(!element) {
      return debug(new Error('App.renderToDOM: element is required'));
    }

    this.render(element);
   }

  /*
   * @method renderToString
   * @returns {String}
   */
   renderToString () {
    return this.render();
  }
}

export default App;
