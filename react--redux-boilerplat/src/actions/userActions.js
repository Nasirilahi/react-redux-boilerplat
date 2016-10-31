import { USER_RECEIVE } from '../constants/actionsConstants';

export function sendName(value){
   return{
       type:USER_RECEIVE,
       value
   }
}