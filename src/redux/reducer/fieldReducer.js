
const fieldsInitialState = {
    inDineName: ["Rice","Milk","Chicken","Oats","Carrot","Cheese","Apple","Pasta","Fish","Banana"],
    inDineDate: [],
    outDineDate: [],
    inDineNameTimeStamp: [],
    outDineNameTimeStamp: [],
    currentDate: '',
    inDineUnit: [],
    outDineUnit: [],
    inDineQuantity: [],
    outDineQuantity: [],
    quantity: 1
}

const fieldsReducer = (state = fieldsInitialState, action) => {
    switch (action.type) {
        case "inDineItemDate":
            state = {
                ...state,
                inDineDate: state.inDineDate.concat(action.payload)
            };
            break;
        case "outDineItemDate":
            state = {
                ...state,
                outDineDate: state.outDineDate.concat(action.payload)
            };
            break;
        case "inDineTime":
            state = {
                ...state,
                inDineNameTimeStamp: state.inDineNameTimeStamp.concat(action.payload)
            };
            break;
        case "outDineTime":
            state = {
                ...state,
                outDineNameTimeStamp: state.outDineNameTimeStamp.concat(action.payload)
            };
            break;
        case "removeInDineTime":
            return {...state,
                // adImagePaths: state.adImagePaths.filter((_, index) => index != action.payload)
                inDineNameTimeStamp: [
                    ...state.inDineNameTimeStamp.slice(0, action.payload),
                    ...state.inDineNameTimeStamp.slice(action.payload + 1)
                  ]
            }
            break;
        case "removeInDineDate":
            return {...state,
                inDineDate: [
                    ...state.inDineDate.slice(0, action.payload),
                    ...state.inDineDate.slice(action.payload + 1)
                  ]
            }
            break;
        case "removeOutDineTime":
            return {...state,
                // adImagePaths: state.adImagePaths.filter((_, index) => index != action.payload)
                outDineNameTimeStamp: [
                    ...state.outDineNameTimeStamp.slice(0, action.payload),
                    ...state.outDineNameTimeStamp.slice(action.payload + 1)
                  ]
            }
            break;
        case "removeOutDineDate":
            return {...state,
                outDineDate: [
                    ...state.outDineDate.slice(0, action.payload),
                    ...state.outDineDate.slice(action.payload + 1)
                  ]
            }
            break;
        case "date":
            state = {
                ...state,
                currentDate: action.payload
            };
            break;
        case "inDineUnit":
            state = {
                ...state,
                inDineUnit: state.inDineUnit.concat(action.payload)
            };
            break;
        case "outDineUnit":
            state = {
                ...state,
                outDineUnit: state.outDineUnit.concat(action.payload)
            };
            break;
        case "removeInDineUnit":
            return {...state,
                // adImagePaths: state.adImagePaths.filter((_, index) => index != action.payload)
                inDineUnit: [
                    ...state.inDineUnit.slice(0, action.payload),
                    ...state.inDineUnit.slice(action.payload + 1)
                  ]
            }
            break;
        case "removeOutDineUnit":
            return {...state,
                // adImagePaths: state.adImagePaths.filter((_, index) => index != action.payload)
                outDineUnit: [
                    ...state.outDineUnit.slice(0, action.payload),
                    ...state.outDineUnit.slice(action.payload + 1)
                  ]
            }
            break;
        case "number":
            state = {
                ...state,
                quantity: action.payload
            };
            break;
        case "addInDineQuantity":
            state = {
                ...state,
                inDineQuantity: state.inDineQuantity.concat(action.payload)
            };
            break;
        case "addOutDineQuantity":
            state = {
                ...state,
                outDineQuantity: state.outDineQuantity.concat(action.payload)
            };
            break;
        case "removeInDineQuantity":
            return {...state,
                // adImagePaths: state.adImagePaths.filter((_, index) => index != action.payload)
                inDineQuantity: [
                    ...state.inDineQuantity.slice(0, action.payload),
                    ...state.inDineQuantity.slice(action.payload + 1)
                  ]
            }
            break;
        case "removeOutDineQuantity":
            return {...state,
                // adImagePaths: state.adImagePaths.filter((_, index) => index != action.payload)
                outDineQuantity: [
                    ...state.outDineQuantity.slice(0, action.payload),
                    ...state.outDineQuantity.slice(action.payload + 1)
                  ]
            }
            break;
        default:
			return state;
    }
    return state;
};


export default fieldsReducer;