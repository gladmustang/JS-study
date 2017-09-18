import 'rc-tree/assets/index.css';
import React, {Component} from 'react';
// var Radium = require('radium');
// import Style from 'style-it';
import Tree, { TreeNode } from 'rc-tree';
import Tooltip from 'rc-tooltip';
import '../../../../css/rcTreeBasic.css'
import '../../../../less/contextmenu.less'
// import { gData } from './rcTreeUtils'
import {animation, contains} from "./animateUtils"
import {generateTreeNodes, setLeaf, getNewTreeDataWithExactMatch} from "./dynamicUtils"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


// var menuListStyle =   {
//     listStyle:"none",
//     marginLeft: 0,
//     paddingLeft: 0,
//     paddingTop: 8
// }
//


class DynamicDraggableTree extends Component {
    state = {
        // treeData: [],
        autoExpandParent: true,
        expandedKeys: ['0-2'],
        // selectedKeys:[],
        renameOpen: false,
        inputValue: ''
    };

    componentDidMount() {
        this.getContainer();
        console.log(contains(ReactDOM.findDOMNode(this), this.cmContainer));
        // setTimeout(() => {
        //     this.setState({
        //         treeData: [
        //             { name: 'Document Root', key: '\\documents' },
        //             // { name: 'pNode 02', key: '0-1' },
        //             // { name: 'pNode 03', key: '0-2', isLeaf: true },
        //         ]
        //     });
        // }, 100);
    }
    componentWillUnmount() {
        this._removeContainer();
    }
    onLoadData = (treeNode) => {
        const treeData = [...this.props.treeData];
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
                    getNewTreeDataWithExactMatch(treeData, treeNode.props.eventKey, data.childNodes, 100);
                    // _this.setState({ treeData });
                    _this.props.updateTreeData(treeData);
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
        // this.setState({ selectedKeys });
        this.props.updateMultiStates({selectedKeys});
        const showContent = this.props.showContent;
        this.props.setCurrentItemName(info.node.props.title);
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
            const data = [...this.props.treeData];
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
            // this.setState({
            //     treeData: data,
            //     // selectedKeys:[dragObj.key]
            // });
            this.props.updateTreeData(data);
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
        // this.setState({ selectedKeys: [info.node.props.eventKey] });
        this.props.updateMultiStates({ selectedKeys: [info.node.props.eventKey] })
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
        const data = [...this.props.treeData];
        loop(data, parentKey, (item, index, arr) => {
            item.children.push(
                {name:"NewDoc.html", key: item.key + "\\NewDoc.html", isLeaf: true}
            );
        });
        // this.setState({
        //     treeData: data
        // });
        this.props.updateTreeData(data);

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
        const data = [...this.props.treeData];
        loop(data, parentKey, (item, index, arr) => {
            item.children.push(
                {name:"NewFolder", key: item.key + "\\NewFolder"}
            );
        });
        // this.setState({
        //     treeData: data
        // });
        this.props.updateTreeData(data);

    }
    renameTreeItem = (info)=> {
        this.setState({
            renameOpen: true,
            renameItem: info
        })

    }
    handleRenameDialogClose = ()=> {
        this.setState(
            {
                renameOpen: false
            }
        );
    }

    handleRenameDialogSubmit = (info)=> {
        const renameKey = info.node.props.eventKey;
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
        const data = [...this.props.treeData];
        loop(data, renameKey, (item, index, arr) => {
            item.name=this.state.inputValue;
        });
        this.setState({
            renameOpen: false
        });
        this.props.updateTreeData(data);
    }

    handleInputChange = (e)=> {
        this.setState(
            {
                inputValue: e.target.value
            }
        );
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
        const data = [...this.props.treeData];
        let deleteObj;
        loop(data, deleteKey, (item, index, arr) => {
            arr.splice(index, 1);
            deleteObj = item;
        });
        // this.setState({
        //     treeData: data
        // });
        this.props.updateTreeData(data);
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
                             <MuiThemeProvider>
                                 <Menu>
                                     <MenuItem primaryText="Rename" onClick={()=>{this.renameTreeItem(info)}}/>
                                     <MenuItem primaryText="Delete" onClick={()=>{this.deleteTreeItem(info)}}/>
                                 </Menu>
                             </MuiThemeProvider>
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
                            <MuiThemeProvider>
                              <Menu>
                                <MenuItem primaryText="Add a new document" onClick={()=>{this.addChildItem(info)}}/>
                                <MenuItem primaryText="Add a new folder" onClick={()=>{this.addChildFolder(info)}}/>
                                <MenuItem primaryText="Rename" onClick={()=>{this.renameTreeItem(info)}}/>
                                <MenuItem primaryText="Delete" onClick={()=>{this.deleteTreeItem(info)}}/>
                              </Menu>
                            </MuiThemeProvider>
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
        const treeNodes = loop(this.props.treeData);
        return (
            <div>
                <Tree className ="folderTree"
                    defaultExpandAll={false}
                    openAnimation={animation}
                    onRightClick={this.onRightClick}
                    onMouseLeave={this.onMouseLeave}
                    onSelect={this.onSelect}
                    selectedKeys={this.props.selectedKeys}
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
                <Dialog
                    title="Rename the file/folder"
                    actions={
                        [
                            <FlatButton
                                label="Cancel"
                                primary={true}
                                onClick={this.handleRenameDialogClose}
                            />,
                            <FlatButton
                                label="Submit"
                                primary={true}
                                onClick={(e)=> {this.handleRenameDialogSubmit(this.state.renameItem)}}
                            />,
                        ]
                    }
                    modal={true}
                    open={this.state.renameOpen}
                >
                    <TextField
                        floatingLabelText="Input New Name"
                        onChange={this.handleInputChange}
                        value={this.state.inputValue}
                    />
                </Dialog>
            </div>
        );
    }


}


export default (DynamicDraggableTree);
