import {createStore, combineReducers} from 'redux';

const increment = amount => ({
  type: 'INCREMENT',
  amount
});

const decrement = amount => ({
  type: 'DECREMENT',
  amount
});

const addUser = user => ({
  type: 'ADD_USER',
  user
});

const removeUser = userId => ({
  type: 'REMOVE_USER',
  userId
});

const counterReducer = function(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + action.amount;
    }
    case 'DECREMENT': {
      return state - action.amount;
    }
    default: {
      return state;
    }
  }
}

const usersReducer = function(state = [], action) {
  switch (action.type) {
    case 'ADD_USER': {
      return [...state, action.user]
    }
    case 'REMOVE_USER': {
      return state.filter(user => user.id !== action.userId)
    }
    default: {
      return state;
    }
  }
}

const reducers = combineReducers({
  counter: counterReducer,
  users: usersReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log('Store has changed');
  console.log(store.getState());
});

store.dispatch(increment(2));
store.dispatch(increment(4));
store.dispatch(increment(3));
store.dispatch(increment(1));
store.dispatch(increment(5));

store.dispatch(decrement(10));
store.dispatch(decrement(1));
store.dispatch(decrement(2));

store.dispatch(addUser({name: 'sasa', id: 1}));
store.dispatch(addUser({name: 'dan', id: 2}));
store.dispatch(addUser({name: 'kitze', id: 3}));
store.dispatch(removeUser(2));
