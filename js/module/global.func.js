import {
    jsonData
} from "./all.data.js";

//阻止事件冒泡
function stopPropagation(e) {
    var ev = e || window.event;
    if (ev.stopPropagation) {
        ev.stopPropagation();
    } else if (window.event) {
        window.event.cancelBubble = true; //兼容IE，根本用不到，本来就没打算兼容IE
    }
}

//寻找选中设置项href值函数
function findSettingInfo(value) {
    let href = "";
    let settingData = jsonData.sideBar.content.find(item => item.value == "Setting").content;
    for (let item of settingData) {
        if (item.content !== "" && typeof item.content !== "string") {
            for (let inner of item.content) {
                if (inner.value == value) {
                    href = inner.href;
                    break;
                }
            }
        }
    }
    return href;
}

//返回随机颜色函数
function getRandomColor() {
    return '#' + Math.random().toString(16).slice(2, 8)
}

//删除标签函数，参数需要删除的标签名
function removeElement(element) {
    let ele = document.querySelector(element);
    if (ele !== null) {
        ele.parentNode.removeChild(ele);
    }
}

export {
    stopPropagation,
    findSettingInfo,
    getRandomColor,
    removeElement
}