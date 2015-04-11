jest.dontMock('../AppRoot.jsx');

import React from 'react/addons';
import AppRoot from '../AppRoot.jsx';
import Cart from '../Cart.jsx';

var TestUtils = React.addons.TestUtils;
var state = {
  cart: {
    title: 'My Cart',
    items: [
      {
        title: 'Item 1',
        price: 12
      },
      {
        title: 'Item 2',
        price: 21
      },
      {
        title: 'Item 3',
        price: 33
      }
    ]
  }
};

describe('AppRoot', () => {

  it('renders properly', () => {
    var appRoot = TestUtils.renderIntoDocument(
      <AppRoot state={state} />
    );

    var title = TestUtils.findRenderedDOMComponentWithTag(appRoot, 'h1');
    var carts = TestUtils.scryRenderedComponentsWithType(appRoot, Cart);

    expect(title.getDOMNode().textContent).toEqual('My React App');
    expect(carts.length).toBe(1);
    expect(carts[0].props).toEqual({
      cart: state.cart
    });
  });
});
