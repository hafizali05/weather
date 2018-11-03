import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
  console.log("FETCH_WEATHER", FETCH_WEATHER);
  switch (action.type) {
    case FETCH_WEATHER:
      console.log("its fetch weather");
      const res = [action.payload.data, ...state];
      console.log(res);
      return res;
  }
  // return [action.payload.data, ...state];
  return state;
}
