function greetHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello"), 2000;
    });
  });
}

function greetWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("World"), 1000;
    });
  });
}

async function sequentialStart() {
  const hello = await greetHello();
  console.log(hello);

  const world = await greetWorld();
  console.log(world);
}

sequentialStart();

//output can be viewed in console of any browser
