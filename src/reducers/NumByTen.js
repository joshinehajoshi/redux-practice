const initialState = 0;

const changeNumByTen = (state = initialState, action) => {
    switch (action.type) {
        case "Add Ten":
            return state + 10;
        case "Sub Ten":
            return state -10;
        default:
            return state
    }
}

export default changeNumByTen;