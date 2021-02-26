import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('should setup default filter value', () => {
    const state = filterReducers(undefined, {type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set by sort by amount', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set by sort by date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' }
    const state = filterReducers(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'this is my text';
    const action = { 
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filterReducers(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startdate filter', () => {
    const startDate = moment().startOf('month');
    const action = { 
        type: 'SET_START_DATE',
        startDate
    }
    const state = filterReducers(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set enddate filter', () => {
    const endDate = moment().endOf('month');
    const action = { 
        type: 'SET_END_DATE',
        endDate
    }
    const state = filterReducers(undefined, action);
    expect(state.endDate).toEqual(endDate);
});

