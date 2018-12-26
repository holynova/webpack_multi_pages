import '../styles/common.scss';
import '../styles/b.scss'
;
import dayjs from 'dayjs';

const name = 'b';
console.log(name);
document.write(name + new Date().toLocaleDateString());
document.write(name + dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'));

