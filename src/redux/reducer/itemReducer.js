
const itemsInitialState = {
    inDineName: ["Rice","Milk","Chicken","Oats","Carrot","Cheese","Apple","Pasta","Fish","Banana"],
    inDineFinalItem: [],
    inDineGroup: ["Grain","Milk","Meat","Grain","Veg","Milk","Veg","Grain","Meat","Veg"],
    selectedIndex: 0,
    isDropdownEnabled: false,
    inDiningList: [],
    inDineSelectedState: [],
    outDiningList: [],
    outDineSelectedState: [],
}

const itemsReducer = (state = itemsInitialState, action) => {
    switch (action.type) {
        case "inDineName":
            state = {
                ...state,
                inDineName: action.payload
            };
            break;
        case "index":
            state = {
                ...state,
                selectedIndex: action.payload
            };
            break;
        case "isDropdownEnabled":
            state = {
                ...state,
                isDropdownEnabled: action.payload
            };
            break;
        case "inDiningArray":
            state = {
                ...state,
                inDiningList: state.inDiningList.concat(action.payload)
            };
            break;
        case "removeInDineItem":
            return {...state,
                // adImagePaths: state.adImagePaths.filter((_, index) => index != action.payload)
                inDiningList: [
                    ...state.inDiningList.slice(0, action.payload),
                    ...state.inDiningList.slice(action.payload + 1)
                  ]
            }
            break;
        case "selectedArray":
            state = {
                ...state,
                inDineSelectedState: state.inDineSelectedState.concat(action.payload)
            };
            break;
        case "removeSelectedArray":
            return {...state,
                inDineSelectedState: [
                    ...state.inDineSelectedState.slice(0, action.payload),
                    ...state.inDineSelectedState.slice(action.payload + 1)
                  ]
            }
            break;
        case "modifySelectedArray":
            state = {
                ...state,
                inDineSelectedState: action.payload
            };
            break;
        case "outDiningArray":
            state = {
                ...state,
                outDiningList: state.outDiningList.concat(action.payload)
            };
            break;
        case "removeOutDineItem":
            return {...state,
                // adImagePaths: state.adImagePaths.filter((_, index) => index != action.payload)
                outDiningList: [
                    ...state.outDiningList.slice(0, action.payload),
                    ...state.outDiningList.slice(action.payload + 1)
                  ]
            }
            break;
        case "selectedOutdineArray":
            state = {
                ...state,
                outDineSelectedState: state.outDineSelectedState.concat(action.payload)
            };
            break;
        case "removeSelectedOutDineArray":
            return {...state,
                outDineSelectedState: [
                    ...state.outDineSelectedState.slice(0, action.payload),
                    ...state.outDineSelectedState.slice(action.payload + 1)
                  ]
            }
            break;
        case "modifySelectedOutDineArray":
            state = {
                ...state,
                outDineSelectedState: action.payload
            };
            break;
        default:
			return state;
    }
    return state;
};


export default itemsReducer;