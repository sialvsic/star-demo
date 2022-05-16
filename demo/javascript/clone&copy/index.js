const _ = require('lodash');

const state = {
  inputs: {
    name: 'input',
    incomes: [
      { type: 'salary', amount: 100, frequency: 'week' },
      { type: 'work', amount: 1000, frequency: 'week' },
    ],
  },
  output: {
    name: 'output',
  },
};

const user = { 'user': 'barney', 'age': 36, 'active': true };
_.find(user, 'age');

function clone(state, income) {

  // console.log(_.get(state, 'output'));
  // console.log(_.chain(state).get('inputs.incomes').push(income).value());
  console.log('********');

  return _.chain(state).cloneDeep().get('inputs.incomes').push(income).value();

  // return {
  //   ...state,
  //   inputs: {
  //     ...state.inputs,
  //     incomes: [...state.inputs.incomes, income],
  //   },
  // };
}

const income = { type: 'new income', amount: 200, frequency: 'week' };

const newState = clone(state, income);
// console.log(state);
console.log(newState);
console.log(newState === state);
// newState.output = '123';
// newState.inputs = '123';
// console.log(state);
// console.log(newState);
