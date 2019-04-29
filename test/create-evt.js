/**
 * Created by Slab-MZ on 2019/4/28.
 */

/*
 * 给元素添加事件（用来触发键盘事件）
 */
const createKeyEvent = (el, evtType, keyCode ,key) => {
    var doc = el.ownerDocument,
        win = doc.defaultView || doc.parentWindow,
        evtObj;
    if(doc.createEvent){
        if(win.KeyEvent) {
            evtObj = doc.createEvent('KeyEvents');
            evtObj.initKeyEvent( evtType, true, true, win, false, false, false, false, keyCode, 0 );
        }
        else {
            evtObj = doc.createEvent('UIEvents');
            Object.defineProperty(evtObj, 'keyCode', {
                get : function() { return this.keyCodeVal; }
            });
            Object.defineProperty(evtObj, 'which', {
                get : function() { return this.keyCodeVal; }
            });
            evtObj.initUIEvent( evtType, true, true, win, 1 );
            evtObj.key = key;
            evtObj.keyCodeVal = keyCode;
            if (evtObj.keyCode !== keyCode) {
                console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");
            }
        }
        el.dispatchEvent(evtObj);
    }
    else if(doc.createEventObject){
        evtObj = doc.createEventObject();
        evtObj.keyCode = keyCode;
        el.fireEvent('on' + evtType, evtObj);
    }
};

/*
 * 给数组元素批量添加事件（用来触发键盘事件）
 */
const batchAddEvent = (list,evtype) => {
    list = list || [];evtype = evtype || 'keydown';
    if(!Array.isArray(list)) return false;
    for(let i=0,len=list.length;i<len;i++){
        list[i].obj.onclick = function () {
            createKeyEvent(this, evtype, list[i].keyCode , list[i].key);
        }
    }
};
