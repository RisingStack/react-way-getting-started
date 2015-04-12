jest.dontMock('../Cart');

import React from 'react/addons';
import Cart from '../Cart';
import Item from '../Item';

var TestUtils = React.addons.TestUtils;
var cartProp = {
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
};

describe('Cart', () => {

  it('renders properly', () => {
    var cart = TestUtils.renderIntoDocument(
      <Cart cart={cartProp} />
    );

    var title = TestUtils.findRenderedDOMComponentWithTag(cart, 'h2');
    var items = TestUtils.scryRenderedComponentsWithType(cart, Item);

    expect(title.getDOMNode().textContent).toEqual('My Cart');
    expect(items.length).toBe(3);
    expect(items[0].props).toEqual({
      item: cartProp.items[0]
    });
  });
});
