const phoneNumber = /^1[34578]\d{9}$/g
// 15901234567

const myPhone = '18940162728'
console.log(phoneNumber.test(myPhone))

const qqID = /^[1-9][0-9]{4,9}$/g
// 4321059323

const color = /#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
// #48D1CC
// #0AB

const email = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,6})$/g
// dan.lao-shi_666@bilibili.com

const url = /^((https?|ftp|file):\/\/)?([\da-z\.\-]+)\.([a-z\.]{2,6})([\/w\.\-]*)*\/?$/g
// https://www.bilibili.com/danlaoshi/666/

const DOM = /^<([a-z]+)([^>]+)*<?:>(.*)<\/\1>|\s+\/>$/gm
// <div class="dandan">danlaoshi</div>
// <div></div>
// <img />

const date = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/gm
// 2021-10-01
// 1984-02-30

const ipAddress = /^(([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\.){3}([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])$/gm
// 255.255.255.255
// 192.1.14.116
// 5.13.123.2

const identify = /^[1-9][0-9]{5}(18|19|([23][0-9]))[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9Xx]$/gm
// 12345619840101231x



