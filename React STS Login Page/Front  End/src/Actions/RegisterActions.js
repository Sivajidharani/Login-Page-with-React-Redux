import { INSERT_POST,FETCH_POST,CHAGE_USER_DATA,SEND_USER_DATA} from './Types.js';
import { Dispatch } from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import {push} from 'react-router-redux'




export function successMsg(isSucess) {
  console.log("in act")
  console.log(isSucess)
  return({
      type: 'SHOW_SUCCESS',
      payload: isSucess
  })
}

export const fetchPosts = () => dispatch => {
  console.log("in fetch post success")
  console.log('fetching');



 fetch('http://localhost:8091/Details')
    .then(res => res.json())
    //console.log(res)
    .then(posts =>
      dispatch({
        type: FETCH_POST,
        payload: posts
        
        
      })
      
    );


   
   
};

// export function sendName (userName) {
//   console.log("in name")
//   return({
//       type: SEND_USER_DATA,
//       payload: userName
//   })
// }






// export const createPost = formValues => dispatch => {
//   console.log('action called');
//   console.log(formValues)

//   fetch('http://localhost:8091/Register', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(formValues)

//   })
  
//     .then(res => res.json())
//     .then(formValues =>
//       dispatch({
//         type: INSERT_POST,
//         payload: formValues
//       })
//     );
// };
export function createPost (formValues) {
  console.log("in act")
  return({
      type: INSERT_POST,
      payload: formValues
  })
}

export function changeUserData (user) {
  console.log("in act")
  console.log(user)
  return({
      type: CHAGE_USER_DATA,
      payload: user
  })
}



export const sendName = userValue => dispatch =>  {

  console.log("inside new one")
  fetch('http://localhost:8091/login', {
    method: 'POST',
    data:{userValue},
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userValue)

  })
  .then(response =>{
   if(response.data){
    console.log(response.data)
    dispatch(push('/Success'));
   }else {
    console.log("response.data")
    console.log(response)
    console.log("unsuccess")
    dispatch(push('/Success'));
   }

})

}