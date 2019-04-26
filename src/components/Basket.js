import React, { Component } from 'react';
import util from '../util'
export default class Basket extends Component {
  render() {
    const { cartItems } = this.props;

    return (
        <div className="alert alert-info">
          {cartItems.length === 0
              ? "Cart is empty" :
              <div>You have {cartItems.length} item(s) in your cart. <hr /></div>
          }
          {cartItems.length > 0 &&
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map(item => (
                  <li key={item.id}>
                    <b>{item.title}</b>
                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                            onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                    <br />
                    {item.count} X {util.formatCurrency(item.price)}
                  </li>))
              }
            </ul>

            <b>Total: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
            </b>
            <button onClick={() => alert('Todo: Implement checkout page.')} className="btn btn-primary" style={{marginLeft: '10px'}}>Checkout</button>
          </div>
          }
        </div>
    )
  }
}
