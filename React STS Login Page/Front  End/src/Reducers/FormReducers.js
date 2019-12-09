import { INSERT_POST,FETCH_POST,CHAGE_USER_DATA,SEND_USER_DATA,SHOW_SUCCESS} from '../Actions/Types.js';

const initialState = {
  items: {},
  item: {},
  user:'',
  success:'',
  
  
};

export default function(state = {initialState}, action) {
  console.log(state)
  console.log("in red")
  switch (action.type) {
  
    case FETCH_POST:
      return {
        ...state,
        items: action.payload
      };

    case INSERT_POST:
      return {
        ...state,
        item: action.payload
       
      };
      case CHAGE_USER_DATA:
      return{
        ...state,
        user:action.payload
      };
      case SEND_USER_DATA:
      return{
        ...state,
        name:action.payload
      }
      case SHOW_SUCCESS:
      return {
        ...state,
        success: action.payload
      };
// case GET_POST:
//       return {
//         ...state,
//         item: action.payload
//       };
    default:
      return state;
  }
}
