import reqwest from 'reqwest';
import Store from './../Store';
import {GET_INFOS} from './ACTIONS_ENUM';

export function getInfo() {
  reqwest({
    url: '/info',
    success: (result) => {
      Store.dispatch({
        type: GET_INFOS,
        result: result,
      });
    },
  });
}
