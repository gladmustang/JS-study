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
            return {
                currentItemName: action.currentItemName,
                treeData: state.treeData
            };
        case 'changeCurrentItemName':
            return {
                currentItemName: action.currentItemName,
                treeData: state.treeData
            };
        case 'updateTreeData':
            return {
                currentItemName: state.currentItemName,
                treeData: action.treeData
            }
        default:
            return state;
    }

};
export default docsTreeReducer;

