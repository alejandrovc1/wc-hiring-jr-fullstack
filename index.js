/*
Jr Fullstack Developer Test - Webcat

Welcome to the Technical test for Jr Fullstack Developer

We hope that everything is fully clear and understandable.
However, if you have any questions, please send us an email
to support@webcat.app with the subject "Jr Fullstack Test Questions"
*/

import $t from './libs/test.js'

/*
1. Data manipulation:
  1. Transform the source data to the target data.
  2. Return the target data.

  Source data:
    You can inspect the source data at /libs/1-source-data.js
  Target Data:
    {
      balance: 1606400,
      income: 3900000,
      expenses: 2293600,
      byCategories: {
        Restaurants: -43600,
        Income: 3900000,
        Groceries: -250000,
        Rent: -2000000
      }
    }

  Hint: Use native array methods as well as
    Lodash(https://lodash.com/docs) modules.
*/
import _ from 'lodash'

const source = $t.source(1)

var balance = 0, income = 0, expenses = 0, Restaurants = 0, Income = 0, Groceries = 0, Rent = 0;

$t.answer(1, async () => {
  for (let i = 0; i < source.length; i++) {

    switch (source[i].category) {
      case 'Restaurants':
        if (source[i].type == 'expense') {
          expenses = expenses + source[i].amount;
          Restaurants = Restaurants - (source[i].amount);
        } else {
          income = income + source[i].amount;
          Restaurants = Restaurants + (source[i].amount);
        }
        break;

      case 'Income':
        if (source[i].type == 'expense') {
          expenses = expenses + source[i].amount;
          Income = Income - (source[i].amount);
        } else {
          income = income + source[i].amount;
          Income = Income + (source[i].amount);
        }
        break;

      case 'Groceries':
        if (source[i].type == 'expense') {
          expenses = expenses + source[i].amount;
          Groceries = Groceries - (source[i].amount);
        } else {
          income = income + source[i].amount;
          Groceries = Groceries + (source[i].amount);
        }
        break;

      case 'Rent':
        if (source[i].type == 'expense') {
          expenses = expenses + source[i].amount;
          Rent = Rent - (source[i].amount);

        } else {
          income = income + source[i].amount;
          Rent = Rent + (source[i].amount);
        }
        break;

      default:
        break;
    }
  }
  balance = income - expenses;
  const TargetData = {
    balance: balance,
    income: income,
    expenses: expenses,
    byCategories: {
      Restaurants: Restaurants,
      Income: Income,
      Groceries: Groceries,
      Rent: Rent
    }
  }
  return TargetData;
})

/*
2. Asynchronous programming: 
  1. First get the list of ids from the async function $source.getIds()
  2. Then, for every id call the async function $source.getText(id) to get its text
  3. Finally, return the list of resulting texts as an array.
    
*/
const $source = $t.source(2)
$t.answer(2, async () => {
  // Your code goes here:
  // 1. Get ids: $source.getIds()
  // 2. Get text for every id: $source.getText(id)
  // 3. Return array of texts
  const ids = $source.getIds();
  const texts = $source.getText(ids)
  const answer = $source.getAnswer(texts)
  return answer;
})