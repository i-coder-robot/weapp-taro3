import {LIST} from "../constants/home";

export const initialState = {
  status:null,
  response:null,
}

export default function my_reducer (state=initialState, action) {
  switch (action.type) {
    case LIST:
      let data = state.list.concat(action.payload.data)
      return {
        ...state,
        list: data
      }
    default:
      return state
  }
}
