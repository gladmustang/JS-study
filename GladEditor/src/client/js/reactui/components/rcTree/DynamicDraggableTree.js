import 'rc-tree/assets/index.css';
import React, {Component} from 'react';
var Radium = require('radium');
import Tree, { TreeNode } from 'rc-tree';
import Tooltip from 'rc-tooltip';
import '../../../../css/rcTreeBasic.css'
import '../../../../less/contextmenu.less'
// import { gData } from './rcTreeUtils'
import {animation, contains} from "./animateUtils"
import {generateTreeNodes, setLeaf, getNewTreeData} from "./dynamicUtils"


var menuListStyle =    {
    listStyle:"none",
    marginLeft: 0,
    paddingLeft: 0,
}


class DynamicDraggableTree extends Component {
    state = {
        treeData: [],
        autoExpandParent: true,
        expandedKeys: ['0-2'],
        selectedKeys:[]
    };

    componentDidMount() {
        this.getContainer();
        console.log(contains(ReactDOM.findDOMNode(this), this.cmContainer));
        setTimeout(() => {
            this.setState({
                treeData: [
                    { name: 'Document Root', key: '\\public\\documents' },
                    // { name: 'pNode 02', key: '0-1' },
                    // { name: 'pNode 03', key: '0-2', isLeaf: true },
                ]
            });
        }, 100);
    }
    componentWillUnmount() {
        this._removeContainer();
    }
    onLoadData = (treeNode) => {
        const treeData = [...this.state.treeData];
        var _this = this;
        return new Promise((resolve,reject) => {
            fetch("./documents/getChildNodes",{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({path: treeNode.props.eventKey})
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                if(data.code==0) {
                    // console.log(data);
                    getNewTreeData(treeData, treeNode.props.eventKey, data.childNodes, 100);
                    _this.setState({ treeData });
                    resolve();

                } else {
                    console.log(data.error);
                    reject();
                }

            }).catch(function(e) {
                console.log(e);
                console.log("Oops, error");
                reject();
            });
        });
    }

    onSelect = (selectedKeys, info) => {
        this.setState({ selectedKeys });
        const showContent = this.props.showContent;
        if(info.node.props.isLeaf) {
            fetch("./documents/getDocument", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({docPath: selectedKeys})
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                if (data.code == 0) {
                    //show data in editor
                    showContent(data.content);
                } else {
                    console.log(data.error);
                }

            }).catch(function (e) {
                console.log(e);
                console.log("Oops, error");
            });
        }

    }

    onDragStart = (info)=> {
        console.log('start', info);
    }

    onDragEnter= (info)=> {
        console.log('enter', info);
        this.setState({
            expandedKeys: info.expandedKeys,
        });
    }
    onDrop = (info) => {
        console.log('drop', info);
        this.onLoadData(info.node).then(()=> {
            const dropKey = info.node.props.eventKey;
            const dragKey = info.dragNode.props.eventKey;
            // const dragNodesKeys = info.dragNodesKeys;
            const loop = (data, key, callback) => {
                data.forEach((item, index, arr) => {
                    if (item.key === key) {
                        return callback(item, index, arr);
                    }
                    if (item.children) {
                        return loop(item.children, key, callback);
                    }
                });
            };
            const data = [...this.state.treeData];
            let dragObj;
            loop(data, dragKey, (item, index, arr) => {
                arr.splice(index, 1);
                dragObj = item;
            });
            if (info.dropToGap) {
                let ar;
                let i;
                loop(data, dropKey, (item, index, arr) => {
                    ar = arr;
                    i = index;
                });
                ar.splice(i, 0, dragObj);
            } else {
                loop(data, dropKey, (item) => {
                    item.children = item.children || [];
                    // where to insert 示例添加到尾部，可以是随意位置
                    item.children.push(dragObj);
                });
            }
            this.setState({
                treeData: data,
                // selectedKeys:[dragObj.key]
            });
        });

    }

    onExpand = (expandedKeys) => {
        console.log('onExpand');
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }
    onRightClick = (info) => {
        console.log('right click', info);
        this.setState({ selectedKeys: [info.node.props.eventKey] });
        this.renderCm(info);
    }
    getContainer = () => {
        if (!this.cmContainer) {
            this.cmContainer = document.createElement('div');
            document.body.appendChild(this.cmContainer);
        }
        return this.cmContainer;
    }

    _removeContainer = () => {
        if(this.cmContainer) {
            ReactDOM.unmountComponentAtNode(this.cmContainer);
            this.toolTip = null;
            document.body.removeChild(this.cmContainer);
            this.cmContainer=null;
        }
    }

    addChildItem = (info) => {
        this._removeContainer();
        const parentKey = info.node.props.eventKey;
        const loop = (data, key, callback) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loop(item.children, key, callback);
                }
            });
        };
        const data = [...this.state.treeData];
        loop(data, parentKey, (item, index, arr) => {
            item.children.push(
                {name:"NewDoc.html", key: item.key + "\\NewDoc.html", isLeaf: true}
            );
        });
        this.setState({
            treeData: data
        });

    }

    addChildFolder = (info) => {
        this._removeContainer();
        const parentKey = info.node.props.eventKey;
        const loop = (data, key, callback) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loop(item.children, key, callback);
                }
            });
        };
        const data = [...this.state.treeData];
        loop(data, parentKey, (item, index, arr) => {
            item.children.push(
                {name:"NewFolder", key: item.key + "\\NewFolder"}
            );
        });
        this.setState({
            treeData: data
        });

    }

    deleteTreeItem = (info) => {
        this._removeContainer();
        const deleteKey = info.node.props.eventKey;
        // const dragNodesKeys = info.dragNodesKeys;
        const loop = (data, key, callback) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loop(item.children, key, callback);
                }
            });
        };
        const data = [...this.state.treeData];
        let deleteObj;
        loop(data, deleteKey, (item, index, arr) => {
            arr.splice(index, 1);
            deleteObj = item;
        });
        this.setState({
            treeData: data
        });
    }
    renderCm(info) {
        if (this.toolTip) {
            ReactDOM.unmountComponentAtNode(this.cmContainer);
            this.toolTip = null;
        }
        if(info.node.props.isLeaf) {
            this.toolTip = (
                <Tooltip placement="bottomLeft"
                         prefixCls="rc-tree-contextmenu"
                         trigger={['click']}
                         defaultVisible
                         overlay={
                             <ul style={menuListStyle}>
                                 <li onClick={()=>{this.deleteTreeItem(info)}}>delete</li>
                             </ul>
                         }
                >
                    <span></span>
                </Tooltip>
            );
        } else {
            this.toolTip = (
                <Tooltip placement="bottomLeft"
                         prefixCls="rc-tree-contextmenu"
                         trigger={['click']}
                         defaultVisible
                         overlay={
                             <ul style={menuListStyle}>
                                 <li  onClick={()=>{this.addChildItem(info)}}>Add a new document</li>
                                 <li  onClick={()=>{this.addChildFolder(info)}}>Add a new folder</li>
                                 <li  onClick={()=>{this.deleteTreeItem(info)}}>delete</li>
                             </ul>
                         }
                >
                    <span></span>
                </Tooltip>
            );
        }



        const container = this.getContainer();
        Object.assign(this.cmContainer.style, {
            position: 'absolute',
            left: `${info.event.pageX}px`,
            top: `${info.event.pageY}px`,
        });

        ReactDOM.render(this.toolTip, container);
    }



    render(){
        const loop = (data) => {
            return data.map((item) => {
                if (item.children) {
                    return <TreeNode title={item.name} key={item.key}>{loop(item.children)}</TreeNode>;
                }
                return (
                    <TreeNode title={item.name} key={item.key} isLeaf={item.isLeaf}
                    />
                );
            });
        };
        const treeNodes = loop(this.state.treeData);
        return (
            <div>
                <Tree className ="folderTree"
                    defaultExpandAll={false}
                    openAnimation={animation}
                    onRightClick={this.onRightClick}
                    onMouseLeave={this.onMouseLeave}
                    onSelect={this.onSelect}
                    selectedKeys={this.state.selectedKeys}
                    showLine
                    expandedKeys={this.state.expandedKeys}
                    onExpand={this.onExpand}
                    autoExpandParent={this.state.autoExpandParent}
                    draggable
                    onDragStart={this.onDragStart}
                    onDragEnter={this.onDragEnter}
                    onDrop={this.onDrop}
                    loadData={this.onLoadData}
                >
                    {treeNodes}
                </Tree>
            </div>
        );
    }


}


export default (DynamicDraggableTree);
