var defaultState = {
    htmlContent:"initial",
}
const editorPageReducer = (state= defaultState, action) => {
    switch (action.type) {
        case 'contentChange':
            return {
                htmlContent: action.htmlContent
            };
        default:
            return state;
    }

};
export default editorPageReducer;
