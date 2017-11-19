import { createStore } from 'redux';

function reducer(state, action) {

  if (!action) {
    return state;
  }
  
  switch (action.type) {
    case 'updateActivePersonId':

      return Object.assign({}, state, {
        activePersonId: action.payload.activePersonId
      })
      
    default:
      return state;
  }

}


const defaultState = {
  peopleData: [

  ],
  activePersonId: null
};

export const appStore = createStore(reducer, defaultState);



