
const mainInitialState = {
    isItemsPageEnabled: true,
    isGroupPageEnabled: false,
    inDineEnabled: true,
    outDineEnabled: false,
    isFormEnabled: false,
    isPieChartEnabled: true,
    isGraphEnabled: false
}

const mainReducer = (state = mainInitialState, action) => {
    switch (action.type) {
        case "itemsList":
            state = {
                ...state,
                isItemsPageEnabled: action.payload
            };
            break;
        case "foodGroup":
            state = {
                ...state,
                isGroupPageEnabled: action.payload
            };
            break;
        case "inDine":
            state = {
                ...state,
                inDineEnabled: action.payload
            };
            break;
        case "outDine":
            state = {
                ...state,
                outDineEnabled: action.payload
            };
            break;
        case "form":
            state = {
                ...state,
                isFormEnabled: action.payload
            };
            break;
        case "pieChart":
            state = {
                ...state,
                isPieChartEnabled: action.payload
            };
            break;
        case "graph":
            state = {
                ...state,
                isGraphEnabled: action.payload
            };
            break;
        default:
			return state;
    }
    return state;
};


export default mainReducer;