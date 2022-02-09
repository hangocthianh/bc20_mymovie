import *as ActionType from "./constants"
const initialState = {
    listCheckedSeat: [],
};

const checkedSeatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CHECKED_SEAT:
            let listCheckedSeatUpdate = [...state.listCheckedSeat];
            let index = listCheckedSeatUpdate.findIndex(checkedSeat => checkedSeat.tenGhe === action.payload.tenGhe);
            if (index !== -1) {
                listCheckedSeatUpdate.splice(index, 1);
            } else {
                listCheckedSeatUpdate.push(action.payload)
            }
            state.listCheckedSeat = listCheckedSeatUpdate;
            return { ...state };

        default:
            return { ...state };
    }
};
export default checkedSeatReducer;