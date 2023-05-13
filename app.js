function domen(dom) {
    return function comp(str) {
        return `${str}.${dom}`;
    }
}
let company = domen("com");
console.log(company("softclub"));//result softclub.com
console.log(company("google"));//result google.com