import * as ActionType from "./constants";
const actCheckedSeat =(seat)=>{
    return{
        type: ActionType.CHECKED_SEAT,
        payload: seat,
    }
}
export {actCheckedSeat}