import {IS_LOADING_AUTH} from '../reducers/AuthReducer';

// export const verifyEmail = (data, navigation, setModalVisible) => {
//   return async dispatch => {
//     await dispatch({type: IS_LOADING_AUTH, payload: true});
//     try {
//       let base_url = `${base_Url}/verifyEmail.php`;
//       let checkEmail = new FormData();
//       checkEmail.append('email', data.email);
//       checkEmail.append('token', token);
//       const response = await fetch(base_url, {
//         method: 'post',
//         body: checkEmail,
//       });
//       const responseData = await response.json();
//       console.log(responseData);
//       if (responseData.status === true) {
//         setModalVisible(true);
//         await dispatch({type: Response_Status, payload: responseData});
//         await dispatch({type: OTP_SEND, payload: responseData.data.OTP});
//         setTimeout(() => {
//           navigation.navigate('otp', {data, type: 'registration'});
//           setModalVisible(false);
//         }, 1500);
//         await dispatch({type: IS_LOADING_AUTH, payload: false});

//         //
//       } else {
//         await dispatch({type: Response_Status, payload: responseData});
//         await dispatch({type: IS_LOADING_AUTH, payload: false});
//         setModalVisible(true);
//       }
//     } catch (error) {
//       console.log(error);
//       // await dispatch({type: IS_LOADING, payload: false});
//     }
//   };
// };
