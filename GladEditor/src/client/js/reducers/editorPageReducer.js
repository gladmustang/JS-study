import { Map } from 'immutable';
// var defaultState = {
//     htmlContent:"initial",
// }
const defaultState = Map({
    htmlContent:"initial",
});
const editorPageReducer = (state= defaultState, action) => {
    switch (action.type) {
        case 'contentChange':
            // return {
            //     htmlContent: action.htmlContent
            // };
            state.set('htmlContent', action.htmlContent);
        default:
            return state;
    }

};
export default editorPageReducer;
