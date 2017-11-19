import React from 'react';
import {connect} from 'react-redux';

class TopPanels extends React.Component {

  render() {
    const topPanelsClasses = "top-panels-view " + (this.props.activePersonId ? "has-active-person" : "no-active-person");

    return (
      <div className={topPanelsClasses}>

      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activePersonId: state.activePersonId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPanels)