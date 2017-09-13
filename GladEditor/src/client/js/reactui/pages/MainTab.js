import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ReactDraftEditorPageWrapper from './ReactDraftEditorPage'
import RichEditorPage from './RichEditorPage'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const MainTab = () => (
    <Tabs>
        {/*<Tab label="Home" >*/}
            {/*<div>*/}
                {/*This is editor home*/}
            {/*</div>*/}
        {/*</Tab>*/}
        <Tab label="Draft-Editor" >
            <ReactDraftEditorPageWrapper/>
        </Tab>
        <Tab
            label="Tab 3"
            // onActive={handleActive}
        >
            <RichEditorPage/>
        </Tab>
    </Tabs>
);

export default MainTab;
