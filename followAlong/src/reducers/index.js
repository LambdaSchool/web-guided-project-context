const familyReducer = (state, action) => {
    switch (action.type) {
        case "SET_ACTIVE_FAMILY":
            return {
                ...state,
                activeFamily: action.payload
            }
        default:
            return state;
    }
}

export default familyReducer;