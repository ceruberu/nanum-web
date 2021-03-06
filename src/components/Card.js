import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ExampleItem1 from '../images/exampleItem1.jpg';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link to="/item">
          <img className="card-thumbnail" alt="Item" src={ExampleItem1} />
        </Link>
        <div className="card-info">
          <div className="info">
            <span className="card-location">인천 계양구 계산4동</span>             
            <span className="card-receive">직접수령</span>
          </div>
          <Link className="info link-item card-title" to="/item">
            {this.props.item.title}
          </Link>
          <div className="info">
            <span className="card-tags">{this.props.item.fromNow}</span>
            <span className="card-tags">#거울</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
