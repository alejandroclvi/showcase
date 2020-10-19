// @flow
import React from 'react';
import {connect} from 'react-redux';
import {push, pop, resetTo} from '../redux/actions/index';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../redux/store';

const addNavigation = (Screen, screenName) => {
  class NavigationScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isVisible: true,
      };
    }
    componentDidMount() {
      const listener = {
        componentDidAppear: () => this.setState({isVisible: true}),
        componentDidDisappear: () => this.setState({isVisible: false}),
      };
      this.unsubscribe = Navigation.events().registerComponentListener(
        listener,
        this.props.componentId,
      );
    }
    componentWillUnmount() {
      // if the components is unmounting and props.isPop is false, we are probably
      // tapping the back button, which we can't connect to, so update the state accordingly
      if (!this.props.isPop) {
        this.props.pop();
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (nextState.isVisible) {
        if (nextProps.isPop) {
          Navigation.pop();
          return true;
        }
        // Otherwise, if next screen is different from current and not a modal or light box, push or reset
        if (nextProps.screen !== this.props.screen) {
          if (nextProps.isReset) {
            Navigation.resetTo({screen: nextProps.screen});
          } else {
            Navigation.push(this.props.componentId, {
              component: {
                name: nextProps.screen,
              },
            });
          }
          return true;
        }
      }
      return false;
    }
    render() {
      const {screen, navstack, isReset, isPop, ...props} = this.props;
      return <Screen {...props} />;
    }
  }

  const mapStateToProps = (state) => ({
    screen: state.navigation.screen,
    navstack: state.navigation.navstack,
    isReset: state.navigation.isReset,
    isPop: state.navigation.isPop,
  });

  // We do not call these directly from NavigationScreen; instead here we use Navigation.
  // These methods update the redux store and then NavigationScreen actually responds to that navigation request.
  // We wrap these in mapDispatchToProps for the purpose of passing these actions to the child component.

  // except for pushed screens, when they are unmounted, since we cannot listen to the back button being pressed
  const mapDispatchToProps = (dispatch) => ({
    push: (screen) => dispatch(push(screen)),
    resetTo: (screen) => dispatch(resetTo(screen)),
    pop: () => dispatch(pop()),
  });

  const ConnectedNavigationScreen = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(NavigationScreen);

  Navigation.registerComponentWithRedux(
    screenName,
    () => ConnectedNavigationScreen,
    Provider,
    store,
  );

  return ConnectedNavigationScreen;
};

export default addNavigation;
