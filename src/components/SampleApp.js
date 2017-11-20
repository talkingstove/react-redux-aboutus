import React from 'react';
import {connect} from 'react-redux';
import TopPanels from './TopPanels';
import BottomList from './BottomList';

class SampleApp extends React.Component {

  render() {

    return (
   
      <div className="sample-app-view">
        <TopPanels />
        <BottomList />
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleApp)