export const addLabel = (text) => ({
  type: 'ADD_LABEL',
  text,
});

export const removeLabel = (id) => ({
  type: 'REMOVE_LABEL',
  id,
});

export const addLabels = (labels) => ({
  type: 'ADD_LABELS',
  labels,
});
