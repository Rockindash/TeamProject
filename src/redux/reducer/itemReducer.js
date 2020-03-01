
const itemsInitialState = {
    inDineName: ["Rice","Milk","Chicken","Oats","Carrot","Cheese","Apple","Pasta","Fish","Banana"],
    inDineSelectedState: [false,false,false,false,false,false,false,false,false,false],
    inDineGroup: ["Grain","Milk","Meat","Grain","Veg","Milk","Veg","Grain","Meat","Veg"],
    selectedIndex: 0,
    isDropdownEnabled: false,
    outDineName: "",
    inDiningList: [],
    outDiningList: [],
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
        case "outDineName":
            state = {
                ...state,
                outDineName: action.payload
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
        default:
			return state;
    }
    return state;
};


export default itemsReducer;