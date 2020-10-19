import {
  showModal,
  dismissModal,
  showLightBox,
  dismissLightBox,
} from '../../utils/navHelper';
import {push} from '../actions';
import Screen from '../../constants/screens';

export const navigation = ({dispatch}) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case 'SHOW_MODAL':
      return showModal(action.screen);
    case 'DISMISS_MODAL':
      return dismissModal(action.componentId);
    case 'SHOW_LIGHT_BOX':
      return showLightBox({screen: action.screen, meta: action.meta});
    case 'DISMISS_LIGHT_BOX':
      return dismissLightBox(action.componentId);
    case 'SHOW_TODO':
      return dispatch(push(Screen.todo));
    default:
      break;
  }
};
