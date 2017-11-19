import React from 'react';
import {connect} from 'react-redux';

class BottomList extends React.Component {

  render() {
    const peopleListItems = this.props.peopleData.map(function(person) {
      
      return (
           <li className="personThumbListItem">
              <img src={person.img} className="personThumb" />
           </li>
         )

     });

    return (
   
      <div className="bottom-list-view">
        <ul>
          {peopleListItems}
        </ul>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    peopleData: state.peopleData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateActivePersonId: (newPersonId) => dispatch({
      type : 'updateActivePersonId',
      payload: {
        updateActivePersonId: newPersonId
      }
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomList)