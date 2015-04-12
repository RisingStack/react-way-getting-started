import React from 'react/addons';

/*
 * @class Item
 * @extends React.Component
 */
class Item extends React.Component {

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
    return <li className="item">{this.props.item.title} - ${this.props.item.price}</li>;
  }
}

// Prop types validation
Item.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default Item;
