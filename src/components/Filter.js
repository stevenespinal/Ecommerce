import React, {Component} from 'react';

class Filter extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-4">
            {this.props.count} products found.
          </div>
          <div className="col-md-4">
            <label>
              Order by
              <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                <option value="">Select</option>
                <option value="lowest">Lowest to Highest</option>
                <option value="highest">Highest To Lowest</option>
              </select>
            </label>
          </div>
          <div className="col-md-4">
            <label>
              Filter
              <select className="form-control" value={this.props.size} onChange={this.props.handleSizeChange}>
                <option value="">ALL</option>
                <option value="X">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </label>
          </div>
        </div>
    );
  }
}

export default Filter;