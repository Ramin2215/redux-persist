
export const initialState = {
    count: 0,
    show: false,
    value: "",
    todos: []
};


export const reducer = (state, action) => {

    // action  {type:"inrement"}



    switch (action.type) {

        case "increment":
            return {
                ...state,
                count: state.count + 1
            }

        case "decrement":
            return {
                ...state,
                count: state.count - 1
            }

        case "show":
            return {
                ...state,
                show: !state.show

            }
        case "value":
            return {
                ...state,
                value: action.payload
            }

        case "todos":
            return {
                ...state,
                todos: [...state.todos, state.value]
            }

    }


}