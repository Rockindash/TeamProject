
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
    milkGroupUnit: [],
    vegGroupUnit: [],
    grainGroupUnit: [],
    meatGroupUnit: [],
    milkGroupQuantity: [],
    vegGroupQuantity: [],
    grainGroupQuantity: [],
    meatGroupQuantity: [],
    milkSum: 0,
    vegSum: 0,
    grainSum: 0,
    meatSum: 0,
}

const itemsReducer = (state = itemsInitialState, action) => {
    switch (action.type) {
        case "syncDB":
            state = {
                ...state,
                inDiningList: action.payload[0].inDiningList,
                inDineSelectedState: action.payload[0].inDineSelectedState,
                outDiningList: action.payload[0].outDiningList,
                outDineSelectedState: action.payload[0].outDineSelectedState,
                vegGroup: action.payload[0].vegGroup,
                grainGroup: action.payload[0].grainGroup,
                meatGroup: action.payload[0].meatGroup,
                milkGroupUnit: action.payload[0].milkGroupUnit,
                grainGroupUnit: action.payload[0].grainGroupUnit,
                meatGroupUnit: action.payload[0].meatGroupUnit,
                milkGroupQuantity: action.payload[0].milkGroupQuantity,
                vegGroupQuantity: action.payload[0].vegGroupQuantity,
                grainGroupQuantity: action.payload[0].grainGroupQuantity,
                meatGroupQuantity: action.payload[0].meatGroupQuantity,
                milkSum: action.payload[0].milkSum,
                vegSum: action.payload[0].vegSum,
                grainSum: action.payload[0].grainSum,
                vegGroupUnit: action.payload[0].vegGroupUnit,
                meatSum: action.payload[0].meatSum
            }
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
        case "milkGroupUnitAdd":
            state = {
                ...state,
                milkGroupUnit: state.milkGroupUnit.concat(action.payload)
            };
            break;
        case "vegGroupUnitAdd":
            state = {
                ...state,
                vegGroupUnit: state.vegGroupUnit.concat(action.payload)
            };
            break;
        case "grainGroupUnitAdd":
            state = {
                ...state,
                grainGroupUnit: state.grainGroupUnit.concat(action.payload)
            };
            break;
        case "meatGroupUnitAdd":
            state = {
                ...state,
                meatGroupUnit: state.meatGroupUnit.concat(action.payload)
            };
            break;
        case "milkGroupUnitRemove":
            return {...state,
                milkGroupUnit: [
                    ...state.milkGroupUnit.slice(0, action.payload),
                    ...state.milkGroupUnit.slice(action.payload + 1)
                  ]
            }
            break;
        case "vegGroupUnitRemove":
            return {...state,
                vegGroupUnit: [
                    ...state.vegGroupUnit.slice(0, action.payload),
                    ...state.vegGroupUnit.slice(action.payload + 1)
                  ]
            }
            break;
        case "grainGroupUnitRemove":
            return {...state,
                grainGroupUnit: [
                    ...state.grainGroupUnit.slice(0, action.payload),
                    ...state.grainGroupUnit.slice(action.payload + 1)
                  ]
            }
            break;
        case "meatGroupUnitRemove":
            return {...state,
                meatGroupUnit: [
                    ...state.meatGroupUnit.slice(0, action.payload),
                    ...state.meatGroupUnit.slice(action.payload + 1)
                  ]
            }
            break;
        case "milkGroupQuantityAdd":
            state = {
                ...state,
                milkGroupQuantity: state.milkGroupQuantity.concat(action.payload)
            };
            break;
        case "vegGroupQuantityAdd":
            state = {
                ...state,
                vegGroupQuantity: state.vegGroupQuantity.concat(action.payload)
            };
            break;
        case "grainGroupQuantityAdd":
            state = {
                ...state,
                grainGroupQuantity: state.grainGroupQuantity.concat(action.payload)
            };
            break;
        case "meatGroupQuantityAdd":
            state = {
                ...state,
                meatGroupQuantity: state.meatGroupQuantity.concat(action.payload)
            };
            break;
        case "milkGroupQuantityRemove":
            return {...state,
                milkGroupQuantity: [
                    ...state.milkGroupQuantity.slice(0, action.payload),
                    ...state.milkGroupQuantity.slice(action.payload + 1)
                  ]
            }
            break;
        case "vegGroupQuantityRemove":
            return {...state,
                vegGroupQuantity: [
                    ...state.vegGroupQuantity.slice(0, action.payload),
                    ...state.vegGroupQuantity.slice(action.payload + 1)
                  ]
            }
            break;
        case "grainGroupQuantityRemove":
            return {...state,
                grainGroupQuantity: [
                    ...state.grainGroupQuantity.slice(0, action.payload),
                    ...state.grainGroupQuantity.slice(action.payload + 1)
                  ]
            }
            break;
        case "meatGroupQuantityRemove":
            return {...state,
                meatGroupQuantity: [
                    ...state.meatGroupQuantity.slice(0, action.payload),
                    ...state.meatGroupQuantity.slice(action.payload + 1)
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
        case "milkAmount":
            state = {
                ...state,
                milkSum: action.payload
            };
            break;
        case "vegAmount":
            state = {
                ...state,
                vegSum: action.payload
            };
            break;
        case "grainAmount":
            state = {
                ...state,
                grainSum: action.payload
            };
            break;
        case "meatAmount":
            state = {
                ...state,
                meatSum: action.payload
            };
            break;
        default:
			return state;
    }
    return state;
};


export default itemsReducer;