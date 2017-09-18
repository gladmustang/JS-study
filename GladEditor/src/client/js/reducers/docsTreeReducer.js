import { Map,List } from 'immutable';
const defaultState = Map({
    currentItemName:"",
    treeData: [
        { name: 'Document Root', key: '\\documents' }
    ],
    selectedKeys:[]
});
// var defaultState = {
//     currentItemName:"",
//     treeData: [
//         { name: 'Document Root', key: '\\documents' }
//     ],
//     selectedKeys:[]
// }
const docsTreeReducer = (state= defaultState, action) => {
    switch (action.type) {
        case 'setCurrentItemName':
            // var newState = {...state};
            // newState.currentItemName = action.currentItemName;
            // return newState;
            return state.set('currentItemName', action.currentItemName);
        case 'changeCurrentItemName':
            // var newState = {...state};
            // newState.currentItemName = action.currentItemName;
            // return newState;
            return state.set('currentItemName', action.currentItemName);
        case 'updateTreeData':
            // var newState = {...state};
            // newState.treeData = action.treeData;
            // return newState;
            return state.set('treeData', action.treeData);
        case 'updateMultiStates':
            var newState = state;
            for(var key in action.states) {
                var value = action.states[key];
                newState = state.set(key, value);
            }
            return newState;


        default:
            return state;
    }

};
export default docsTreeReducer;

