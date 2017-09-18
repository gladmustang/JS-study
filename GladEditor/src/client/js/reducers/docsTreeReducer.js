var defaultState = {
    currentItemName:"",
}
const docsTreeReducer = (state= defaultState, action) => {
    switch (action.type) {
        case 'setCurrentItemName':
            return {
                currentItemName: action.currentItemName
            };
        case 'changeCurrentItemName':
            return {
                currentItemName: action.currentItemName
            }
        default:
            return state;
    }

};
export default docsTreeReducer;

