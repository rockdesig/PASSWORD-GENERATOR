
let str = `<tr>
<td>${}</td>
<td> ${}</td>
<td>${}</td>
<td>${}</td>
</tr>`



document.querySelector('.btn').addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("clivked")
    console.log(username.value, password.value)
})













const codegen = () =>{
    let numb = "0123456789ABCDEF"
    let cons = "#"
    for(let i = 0; i < 6; i++){
        cons = cons + numb [Math.floor(Math.random() * 16)]
       
    }
    return cons
};
const colorgen = () =>{
    document.body.style.backgroundColor = codegen();
}
const btn = document.querySelector('.btn')
btn.addEventListener("click", colorgen)