import React from 'react/addons';
import Item from './Item';

/*
 * @class Cart
 * @extends React.Component
 */
class Cart extends React.Component {

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className="cart">
      <h2>{this.props.cart.title}</h2>
      <ul>
        {this.props.cart.items.map(function (item, key) {
          return <Item key={key} item={item} />;
        })}
      </ul>
    </div>;
  }
}

// Prop types validation
Cart.propTypes = {
  cart: React.PropTypes.object.isRequired,
};

export default Cart;
