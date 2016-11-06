import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class DetailRow extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="card card-inverse text-xs-center">
        <button onClick={() => this.props.showItem(this.props.itemId)}>
          <img className="card-img-top" src={this.props.picture} alt="Card cap" />
        </button>
        <p className="card-text text-muted">
          {`${this.props.last}, ${this.props.first}`}
        </p>

        <button
          type="button"
          className="destroy"
          onClick={() => this.props.deleteItem(this.props.itemId)}
        ><i className="fa fa-remove" /></button>
      </div>
    );
  }
}
