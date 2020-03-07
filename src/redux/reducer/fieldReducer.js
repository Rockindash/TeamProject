
const fieldsInitialState = {
    inDineNameTimeStamp: [],
    outDineNameTimeStamp: [],
    currentDate: ''
}

const fieldsReducer = (state = fieldsInitialState, action) => {
    switch (action.type) {
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
        case "removeOutDineTime":
            return {...state,
                // adImagePaths: state.adImagePaths.filter((_, index) => index != action.payload)
                outDineNameTimeStamp: [
                    ...state.outDineNameTimeStamp.slice(0, action.payload),
                    ...state.outDineNameTimeStamp.slice(action.payload + 1)
                  ]
            }
            break;
        case "date":
            state = {
                ...state,
                currentDate: action.payload
            };
            break;
        default:
			return state;
    }
    return state;
};


export default fieldsReducer;