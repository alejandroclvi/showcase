import React from 'react';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import {search} from '../../redux/actions';

const MySearchBar = (props) => {
  return (
    <SearchBar
      placeholder={'search...'}
      autoCapitalize="none"
      autoCorrect={false}
      value={props.value}
      onChangeText={props.search}
    />
  );
};

const mapStateToProps = (state) => ({
  value: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  search: (text) => dispatch(search(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MySearchBar);
