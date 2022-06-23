function greet(name)
{
    console.log(`Hello ${name}`)
}

function greetSrinu(greetFn)
{
    const name = 'Srinu'
    greetFn(name)
}
greetSrinu(greet)