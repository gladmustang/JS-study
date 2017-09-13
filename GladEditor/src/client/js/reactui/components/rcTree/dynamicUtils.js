function generateTreeNodes(treeNode) {
    const arr = [];
    const key = treeNode.props.eventKey;
    for (let i = 0; i < 3; i++) {
        arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` });
    }
    return arr;
}

function setLeaf(treeData, curKey, level) {
    const loopLeaf = (data, lev) => {
        const l = lev - 1;
        data.forEach((item) => {
            if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
                    curKey.indexOf(item.key) !== 0) {
                return;
            }
            if (item.children) {
                loopLeaf(item.children, l);
            } else if (l < 1) {
                item.isLeaf = true;
            }
        });
    };
    loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child, level) {
    const loop = (data) => {
        if (level < 1 || curKey.length - 3 > level * 2) return;
        data.forEach((item) => {
            if (curKey.indexOf(item.key) === 0) {
                if (item.children) {
                    loop(item.children);
                } else {
                    item.children = child;
                }
            }
        });
    };
    loop(treeData);
    setLeaf(treeData, curKey, level);
}

export {generateTreeNodes, setLeaf, getNewTreeData};
