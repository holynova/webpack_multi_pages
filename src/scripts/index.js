import dayjs from 'dayjs';
import '../styles/common.scss';
import '../styles/index.scss'
;

const name = 'index';
console.log(name);
document.write(name + new Date().toLocaleDateString())
;
document.write(name + dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'));
