import {Navigation} from 'react-native-navigation';

// style const
// const NAV_STYLE = {
//   navBarBackgroundColor: '#3F3F40',
// };

// const LIGHT_BOX_STYLE = {
//   backgroundBlur: 'dark', // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
//   backgroundColor: '#1e90ff', // tint color for the background, you can specify alpha here (optional)
//   tapBackgroundToDismiss: false, // dismisses LightBox on background taps (optional)
// };

// nav global functions
export const dismissModal = (cId) => Navigation.dismissModal(cId);

export const showModal = (modal) =>
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: modal,
            // passProps: {
            //   text: 'stack with one child',
            // },
            options: {
              topBar: {
                title: {
                  text: 'ADD TODO',
                },
              },
            },
          },
        },
      ],
    },
  });

export const showLightBox = ({screen, meta}) => {
  console.log(screen, meta);
  Navigation.showOverlay({
    stack: {
      children: [
        {
          component: {
            name: screen,
            passProps: {
              meta,
            },
            options: {
              topBar: {
                title: {
                  text: 'LABELS',
                },
              },
            },
          },
        },
      ],
    },
  });
};

export const dismissLightBox = (cid) => {
  return Navigation.dismissOverlay(cid);
};
