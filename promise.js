const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Bringing Tacos");
  }, 5000);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Not Bringing Tacos");
  }, 5000);
});

onFulfillment = (result) => {
    console.log(result);
    console.log('Setting up the Dining Table');
}

onRejection = (error) => {
    console.log(error);
    console.log('Preparing the Pasta');
}

promise.then(onFulfillment)
promise1.catch(onRejection)

