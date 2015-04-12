jest.dontMock('../app');

var App = require('../app');
var state = {
  cart: {
    title: 'title',
    items: []
  }
};

describe('App', function () {
  it('renders to string', function () {
    var app = new App({ state: state });

    expect(typeof app.renderToString()).toBe('string');
 });
});
