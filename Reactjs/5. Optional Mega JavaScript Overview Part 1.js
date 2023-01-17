let fooArray = [1, 2, 'foo', 'bar', true, false, { foo: 1, bar: 2 }];
fooArray = [foo, bar, goo];
console.log('fooArray');

const runLoop = (paramOne, paramTwo) => {
    for (let i = 0; i < 10; i++) {
        if (i == 5) {
            console.log('i, is 5 !!!');
        }
        console.log(i);
    }
    console.log(paramOne, paramTwo);
    paramTwo();
}
const logBam = () => { console.log('logBam') };
runLoop('zoo', 'logBam');