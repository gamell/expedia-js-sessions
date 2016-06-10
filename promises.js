'use strict';

let counter = 0;

// promise function

let doSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        counter++;
        if(counter > 3) reject('Test error');
        resolve(counter);
    }, 2000);
  });
}

// serial

doSomething().then(doSomething).then(doSomething).then(
function(result){
  console.log('counter: '+result);
}).catch(function(reason){
  console.log('Error happened: '+reason);
});

// parallel

Promise.all(['Joan',doSomething(),doSomething()]).then(function(res){
  console.log(res);
}).catch(function(reason){
  console.log(`reason: ${reason}`);
});

// reduce example

console.log(
  [1,2,3,4].reduce(function(prev,curr){
    return prev+curr;
  })
);

// spread operator example

function printWords(...words) {
  console.log(...words);
};

printWords('I','hear','you');
