import { createContext, useReducer } from "react";
// 1. Create the context
export const CounterContext = createContext();

// 2. Define initial state
const initialState = {
    count: 0
};

// 3. reducer Function
function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

// 4. Provider Component
export function CounterProvider({ children }) {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
}