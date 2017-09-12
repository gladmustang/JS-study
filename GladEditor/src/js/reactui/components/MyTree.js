import 'rc-tree/assets/index.css';
import React, {Component} from 'react';
import Tree, { TreeNode } from 'rc-tree';
import Tooltip from 'rc-tooltip';
import cssAnimation from 'css-animation';
import '../../../css/rcTreeBasic.css'

function animate(node, show, done) {
    let height = node.offsetHeight;
    return cssAnimation(node, 'collapse', {
        start() {
            if (!show) {
                node.style.height = `${node.offsetHeight}px`;
            } else {
                height = node.offsetHeight;
                node.style.height = 0;
            }
        },
        active() {
            node.style.height = `${show ? height : 0}px`;
        },
        end() {
            node.style.height = '';
            done();
        },
    });
}

const animation = {
    enter(node, done) {
        return animate(node, true, done);
    },
    leave(node, done) {
        return animate(node, false, done);
    },
    appear(node, done) {
        return animate(node, true, done);
    },
};

function contains(root, n) {
    let node = n;
    while (node) {
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

class MyTree extends Component {
    state = {
        selectedKeys: ['p1'],
    };
    componentDidMount() {
        this.getContainer();
        // console.log(ReactDOM.findDOMNode(this), this.cmContainer);
        console.log(contains(ReactDOM.findDOMNode(this), this.cmContainer));
    }
    componentWillUnmount() {
        if (this.cmContainer) {
            ReactDOM.unmountComponentAtNode(this.cmContainer);
            document.body.removeChild(this.cmContainer);
            this.cmContainer = null;
        }
    }
    onSelect = (selectedKeys) => {
        this.setState({ selectedKeys });
    }
    onRightClick = (info) => {
        console.log('right click', info);
        this.setState({ selectedKeys: [info.node.props.eventKey] });
        this.renderCm(info);
    }
    onMouseLeave = (info) => {
        if (this.toolTip) {
            ReactDOM.unmountComponentAtNode(this.cmContainer);
            this.toolTip = null;
        }

    }
    getContainer() {
        if (!this.cmContainer) {
            this.cmContainer = document.createElement('div');
            document.body.appendChild(this.cmContainer);
        }
        return this.cmContainer;
    }
    renderCm(info) {
        if (this.toolTip) {
            ReactDOM.unmountComponentAtNode(this.cmContainer);
            this.toolTip = null;
        }
        this.toolTip = (
            <Tooltip placement="bottomRight"
                     prefixCls="rc-tree-contextmenu"
                     trigger={['click']}
                     overlay={<span>tooltip</span>}
            >
                <ul>
                    <li>delete</li>
                    <li>add</li>
                </ul>
            </Tooltip>
        );

        const container = this.getContainer();
        Object.assign(this.cmContainer.style, {
            position: 'absolute',
            left: `${info.event.pageX}px`,
            top: `${info.event.pageY}px`,
        });

        ReactDOM.render(this.toolTip, container);
    }

    render(){
        return (
            <div>
                {/*<h2>Documents</h2>*/}
                <Tree className ="folderTree"
                    defaultExpandAll={false}
                    defaultExpandedKeys={['p1']}
                    openAnimation={animation}
                    onRightClick={this.onRightClick}
                    onMouseLeave={this.onMouseLeave}
                    onSelect={this.onSelect}
                    selectedKeys={this.state.selectedKeys}
                    showLine
                >
                    <TreeNode title="parent 1" key="p1">
                        <TreeNode key="p10" title="leaf"/>
                        <TreeNode title="parent 1-1" key="p11">
                            <TreeNode title="parent 2-1" key="p21">
                                <TreeNode title="leaf"/>
                                <TreeNode title="leaf"/>
                            </TreeNode>
                            <TreeNode key="p22" title="leaf"/>
                        </TreeNode>
                    </TreeNode>
                </Tree>
            </div>
        );
    }


}


export default MyTree;
