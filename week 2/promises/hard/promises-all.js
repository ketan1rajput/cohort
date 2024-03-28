function wait1(t) {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Promise 1 resolved after ${t} seconds`);
      }, t * 1000);
    });
    return p;
  }
  
  function wait2(t) {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Promise 2 resolved after ${t} seconds`);
      }, t * 1000);
    });
    return p;
  }
  
  function wait3(t) {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Promise 3 resolved after ${t} seconds`);
      }, t * 1000);
    });
    return p;
  }
  
  function calculateTime(t1, t2, t3) {
    const startTime = new Date().getTime();
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)])
      .then((results) => {
        const endTime = new Date().getTime();
        const totalTime = endTime - startTime;
        console.log(results);
        return `Total time taken: ${totalTime} ms`;
      });
  }
  
  calculateTime(1, 2, 3)
    .then(result => console.log(result))
    .catch(error => console.error(error));
  
  module.exports = calculateTime;