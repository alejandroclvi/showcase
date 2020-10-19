export const showModal = (screen) => ({
  type: 'SHOW_MODAL',
  screen,
});

export const dismissModal = (componentId) => ({
  type: 'DISMISS_MODAL',
  componentId,
});

export const showLightBox = ({screen, meta}) => ({
  type: 'SHOW_LIGHT_BOX',
  screen,
  meta,
});

export const dismissLightBox = (componentId) => ({
  type: 'DISMISS_LIGHT_BOX',
  componentId,
});

export const push = (screen) => ({
  type: 'PUSH_SCREEN',
  screen,
});

export const pop = () => ({
  type: 'POP_SCREEN',
});

export const resetTo = (screen) => ({
  type: 'RESET_SCREEN',
  screen,
});

export const showTodo = (todo) => ({
  type: 'SHOW_TODO',
  todo,
});
