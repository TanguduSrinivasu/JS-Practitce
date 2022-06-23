/* function greet(name)
{
    console.log(`hello ${name}`)
}
//setTimeout(greet,3000,'Srinu')
// const id = setTimeout(greet,3000,'Srinu')
// clearTimeout(id)

//setInterval(greet,3000,'Srinu')
const id = setInterval(greet,3000,'Srinu')
clearInterval(id) */

/* setTimeout(function run()
{
    console.log('run')
    setTimeout(run,2000)
},2000) */


setInterval(function run()
{
    console.log('run')
},2000)