import SCREENS from '../../utils/screens';
const initialState = {
  screen: SCREENS.home,
  navstack: [SCREENS.home],
  isPop: false,
  isReset: false,
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_SCREEN':
      return {
        isPop: false,
        isReset: false,
        screen: action.screen,
        navstack: state.navstack.concat([action.screen]),
      };
    case 'RESET_SCREEN':
      return {
        isPop: false,
        isReset: true,
        screen: action.screen,
        navstack: [action.screen],
      };
    case 'POP_SCREEN':
      return {
        isReset: false,
        isPop: true,
        screen: state.navstack[state.navstack.length - 2],
        navstack: state.navstack.slice(0, state.navstack.length - 1),
      };
    default:
      return state;
  }
};

export default navigation;
