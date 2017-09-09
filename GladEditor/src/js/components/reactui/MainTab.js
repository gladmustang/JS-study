import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import EditorPage from '../../pages/EditorPage'

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
        <Tab label="Home" >
            <div>
                This is editor home
            </div>
        </Tab>
        <Tab label="Editor" >
            <EditorPage/>
        </Tab>
        <Tab
            label="onActive"
            data-route="/home"
            onActive={handleActive}
        >
            <div>
                <h2 style={styles.headline}>Tab Three</h2>
                <p>
                    This is a third example tab.
                </p>
            </div>
        </Tab>
    </Tabs>
);

export default MainTab;
