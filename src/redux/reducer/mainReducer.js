
const mainInitialState = {
    isItemsPageEnabled: true,
    ifGroupPageEnabled: false

}

const mainReducer = (state = mainInitialState, action) => {
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


export default mainReducer;