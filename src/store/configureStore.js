import { createStore,combineReducers  } from "redux";
import expencesReducer from "../reducers/expences";
import filtersReducer from "../reducers/filters";

//store creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expencesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

   return store;
};
