/**
 * Expense Form
 * 
 * Date
 * Instead of native Date(), Moment.js and React Date Picker are highly recommended.
 * @see https://momentjs.com/
 * @see https://github.com/airbnb/react-dates.
 */
import React from 'react';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component { 
  constructor(props) { 
    super(props);
    
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = (e) => { 
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    // Regex
    // For more info, check https://regex101.com/.
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => { 
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else { 
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() { 
    return (
      <div>
        { this.state.error && <p>{ this.state.error }</p> }
        <form onSubmit={this.onSubmit}>
          <label for="description">Description</label>
          <input
            id="description"
            type="text"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <label for="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            id={uuid()}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <label for="note">Add a note for your expense (optional)</label>
          <textarea
            id="note"
            value={this.state.note}
            onChange={this.onNoteChange}
          >  
          </textarea>
          <button>Add</button>
        </form>
      </div>
    );
  }
}