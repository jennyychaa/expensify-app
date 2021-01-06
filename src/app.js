/**
 * React-Redux
 * @see https://react-redux.js.org/.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/style.scss';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water bill', amount: 30000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 15000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 500000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// Provider
// Makes Redux store available to any nested components that have been wrapped in the connect() function.
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));