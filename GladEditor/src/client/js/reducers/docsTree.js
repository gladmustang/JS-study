var defaultState = {
    currentItemName:"",
}
const docsTree = (state= defaultState, action) => {
    switch (action.type) {
        case 'setCurrentItemName':
            return {
                currentItemName: action.currentItemName
            };
        default:
            return state;
    }

};
export default docsTree;

