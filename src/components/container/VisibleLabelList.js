import {connect} from 'react-redux';
import LabelList from '../presentational/LabelList';
import {setTodosVisibilityFilter} from '../../redux/actions/index';

const SHOW_ALL = 'SHOW_ALL';

const getVisibleLabels = (labels, filter, search, actives) => {
  if (search.trim()) {
    return labels.filter((label) =>
      label.text.toLowerCase().includes(search.toLowerCase()),
    );
  }
  if (filter === SHOW_ALL) {
    return labels.sort((label1, label2) => {
      if (actives.includes(label1.text) && !actives.includes(label2.text)) {
        return -1;
      } else if (
        !actives.includes(label1.text) &&
        actives.includes(label2.text)
      ) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

const mapStateToProps = (state) => ({
  labels: getVisibleLabels(
    state.labels,
    state.labelsVisibilityFilter,
    state.search,
    state.todosVisibilityFilter,
  ),
  actives: state.todosVisibilityFilter,
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  onLabelTap: (label) => dispatch(setTodosVisibilityFilter(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelList);
