import { TREE_DATA } from "./actionTypes";



let treeData = [
    {id : 1, name: "Resource", type: "debit", code : 100, parent_code: null},
    {id : 2, name: "Resource1", type: "debit", code : 101, parent_code: 100},
    {id : 3, name: "Resource2", type: "debit", code : 102, parent_code: 100},
    {id : 4, name: "Resource3", type: "debit", code : 103, parent_code: 101},
    {id : 5, name: "Resource4", type: "debit", code : 200, parent_code: null},
    {id : 6, name: "Resource5", type: "debit", code : 201, parent_code: 200},
]

    treeData = treeData?.length ? treeData.map( (data) =>({
        ...data,
        key: data.id,
        children: treeData.filter((filt) => data.code === filt.parent_code).map(grandChild => {
            const haveGrandChildren = treeData.filter((filt) => grandChild.code === filt.parent_code);
            return {
                ...grandChild,
                key: grandChild.id,
                children: haveGrandChildren?.length ? haveGrandChildren : undefined
            };
        })
    })).filter((filt) => filt.parent_code === null) : []


export const dataReducer = (state = treeData, action) => {
    switch (action.type) {
        case TREE_DATA:
            return 
        default:
            return state;
    }
};
