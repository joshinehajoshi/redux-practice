const initialState = 0;

const ChangeNumByOne = (state = initialState, action) => {
    switch(action.type) {
        case "Add One":
            return state + 1;
        case "Sub One":
            return state - 1;
        default:
            return state
    }
}

export default ChangeNumByOne;