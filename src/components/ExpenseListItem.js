import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
  <div>
    <h3><Link to={`/edit/${props.id}`}>{props.description}</Link></h3>
    <p>${props.amount} - {props.createdAt}</p>
  </div>
);

export default ExpenseListItem;