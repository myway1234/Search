import {
    selectEngine,
    searchInput,
    searchList
} from "./dom.constant.js";
import {
    jsonData
} from "./all.data.js";
//搜索事件
function goSearch() {
    let value = searchInput.value; //获取输入框的值
    let engineValue = selectEngine.children[0].alt; //获取选择的搜索引擎
    let searchHref = ''; //定义搜索链接变量
    jsonData.engine.forEach((item) => {
        if (item.value == engineValue) {
            searchHref = item.href;
        }
    })
    window.open(searchHref + value);//拼接搜索链接
}

//渲染搜索引擎备选项
function setEngine(engineValue) {
    selectEngine.innerHTML = `
        <img src='${engineValue.icon}' alt="${engineValue.value}">
        <span>${engineValue.name}</span><i class="fa fa-sort"></i>`;
    selectOption.style.display = "none";
    searchList.style.display = "none";
}
export {
    goSearch,
    setEngine
}