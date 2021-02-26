import expencesReducer from '../../reducers/expences';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expencesReducer(undefined,{type: '@@INIt'});
    expect(state).toEqual([]);
});

test('should remove expense by id ', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expencesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expencesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        amount: 29500,
        createdAt: 20000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expencesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expencesReducer(expenses, action);
    expect(state[1].amount).toEqual(amount);

});

test('should not edit an expense if not found', () => {
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expencesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

