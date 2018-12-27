// import '../styles/common.scss';
import '../styles/a.scss';
// import $ from 'jquery';
import dayjs from 'dayjs';

const name = 'a';
console.log(name);
document.write(name + new Date().toLocaleDateString());
document.write(name + dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'));
