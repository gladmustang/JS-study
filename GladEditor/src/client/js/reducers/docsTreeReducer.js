var defaultState = {
    currentItemName:"",
    treeData: [
        { name: 'Document Root', key: '\\documents' }
    ],
    selectedKeys:[]
}
const docsTreeReducer = (state= defaultState, action) => {
    switch (action.type) {
        case 'setCurrentItemName':
            // return {
            //     currentItemName: action.currentItemName,
            //     treeData: state.treeData
            // };
            var newState = {...state};
            newState.currentItemName = action.currentItemName;
            return newState;
        case 'changeCurrentItemName':
            // return {
            //     currentItemName: action.currentItemName,
            //     treeData: state.treeData
            // };
            var newState = {...state};
            newState.currentItemName = action.currentItemName;
            return newState;
        case 'updateTreeData':
            var newState = {...state};
            newState.treeData = action.treeData;
            return newState;

        default:
            return state;
    }

};
export default docsTreeReducer;

