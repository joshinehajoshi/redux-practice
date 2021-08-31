const initialState = 0;

const changeNumByFive = (state = initialState, action) => {
    switch (action.type) {
        case "Add Five":
            return state + 5;
        case "Sub Five":
            return state - 5;
        default:
            return state
    }
}

export default changeNumByFive;