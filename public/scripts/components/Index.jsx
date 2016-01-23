import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

const Index = ({viewSystem, architecture}) => {
  return <h1>Welcome to your new {viewSystem} / {architecture} app ! </h1>;
};

Index.propTypes = {
  viewSystem: PropTypes.string,
  architecture: PropTypes.string,
};

function select(state) {
  return {
    viewSystem: state.result.viewSystem,
    architecture: state.result.architecture,
  }
}

export default connect(select)(Index);
