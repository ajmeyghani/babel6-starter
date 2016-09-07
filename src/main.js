const fn = () => { return 5; }

class Person {
  constructor() {
    this.name = 'al';
  }
  hello() {
    return 'hello';
  }
}

const n1 = [1,2,3];
const n2 = [4,5,6];

const all = [...n1, ...n2];

function fnx(...args) {
  args.reduce((res, n) => (res + n));
}
