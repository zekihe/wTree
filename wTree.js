/**
 * 
 * 
 */

class wTree {
    constructor(options) {
        const { 
            list, 
            id = 'id', 
            children = 'children',
            insertLevel = false,
        } = options;
        

        this._list = list;
        this._datas = this._clone(this._list);
        this._id = id;
        this._children = children;
        this._insertLevel = insertLevel;

        this.tree = [];
        this.tree = this._treeInsert(this._datas);
    }
    _treeInsert(_list, level = 0) {
        let _self = this;
        if (_list != null) {
            level += 1;
            for(let i = 0; i < _list.length; i++) {
                _self._insertLevel && (_list[i].level = level);
                let childrens = _list[i][this._children] || [];
                if(childrens.length) {
                    _self._treeInsert(childrens, level);
                }
            }
        }
        return _list;
    }

    _clone(data) {
        return JSON.parse(JSON.stringify(data));
    }
}