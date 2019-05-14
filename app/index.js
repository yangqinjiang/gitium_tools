const electron = require('electron');
var createSeed = require('gitium.seed.js');

// 获取控件
const btn_submit = document.getElementById("btn_submit");
const input_name = document.getElementById("input_name");
const input_pass = document.getElementById("input_pass");
const input_result = document.getElementById("input_result");
const error_tip = document.getElementById("error_tip");
// 登录按钮 点击事件
btn_submit.addEventListener('click', (e) => {
        // 获取输入文本
    var name = input_name.value;
    var pass = input_pass.value;
    input_result.value = '';
    if (name == "" || pass == "") {
        error_tip.innerHTML = '请输入账号或密码';
        return;
    }else{
        error_tip.innerHTML = '';
    }
    const { originalSeed, cyptoSeed } = createSeed(name, pass)
    console.log(originalSeed, cyptoSeed);
    input_result.value = cyptoSeed
    
});