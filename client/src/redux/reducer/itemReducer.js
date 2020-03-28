
const itemsInitialState = {
    test: "Hello"
}

const itemsReducer = (state = itemsInitialState, action) => {
    switch (action.type) {
        case "testCase":
            state = {
                ...state,
                test: action.payload
            };
            break;
        default:
			return state;
    }
    return state;
};


export default itemsReducer;