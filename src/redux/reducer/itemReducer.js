
const itemsInitialState = {
    inDineName: ["Rice","Milk","Chicken","Oats","Carrot","Cheese","Apple","Pasta","Fish","Banana"],
    inDineFinalItem: [],
    inDineGroup: [2,0,3,2,1,0,1,2,3,1],
    selectedIndex: 0,
    isDropdownEnabled: false,
    inDiningList: [],
    inDineSelectedState: [],
    outDiningList: [],
    outDineSelectedState: [],
    milkGroup: [],
    vegGroup: [],
    grainGroup: [],
    meatGroup: [],
    isInfoScreenEnabled: false,
    isUnitDropdownEnabled: false,
    unitName: ["Piece","Cup","Gms","Bowl"],
    selectedUnitIndex: 0,
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
        case "milkGroup":
            state = {
                ...state,
                milkGroup: state.milkGroup.concat(action.payload)
            };
            break;
        case "vegGroup":
            state = {
                ...state,
                vegGroup: state.vegGroup.concat(action.payload)
            };
            break;
        case "grainGroup":
            state = {
                ...state,
                grainGroup: state.grainGroup.concat(action.payload)
            };
            break;
        case "meatGroup":
            state = {
                ...state,
                meatGroup: state.meatGroup.concat(action.payload)
            };
            break;
        case "milkGroupRemove":
            return {...state,
                milkGroup: [
                    ...state.milkGroup.slice(0, action.payload),
                    ...state.milkGroup.slice(action.payload + 1)
                  ]
            }
            break;
        case "vegGroupRemove":
            return {...state,
                vegGroup: [
                    ...state.vegGroup.slice(0, action.payload),
                    ...state.vegGroup.slice(action.payload + 1)
                  ]
            }
            break;
        case "grainGroupRemove":
            return {...state,
                grainGroup: [
                    ...state.grainGroup.slice(0, action.payload),
                    ...state.grainGroup.slice(action.payload + 1)
                  ]
            }
            break;
        case "meatGroupRemove":
            return {...state,
                meatGroup: [
                    ...state.meatGroup.slice(0, action.payload),
                    ...state.meatGroup.slice(action.payload + 1)
                  ]
            }
            break;
        case "info":
            state = {
                ...state,
                isInfoScreenEnabled: action.payload
            };
            break;
        case "unitDropdown":
            state = {
                ...state,
                isUnitDropdownEnabled: action.payload
            };
            break;
        case "unitIndex":
            state = {
                ...state,
                selectedUnitIndex: action.payload
            };
            break;
        default:
			return state;
    }
    return state;
};


export default itemsReducer;