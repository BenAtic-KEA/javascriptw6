

document.getElementById("btn-get").onclick = getUser
document.getElementById("btn-get-all").onclick = getAllUsers

function getAllUsers(){
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=> res.json())
.then(data =>{
    const rows = data.map(u => `
    <tr>
        <td>${u.name}</td>
        <td>${u.phone}</td>
        <td>${u.address.street}</td>
        <td>${u.address.city}</td>
    </tr>`).join("\n")
    document.getElementById("tbl-body").innerHTML = rows;
})
}


function getUser(){
    const id = document.getElementById("input-id").value
    
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then(res=>{
        if(!res.ok){
            return Promise.reject("Error :" + res.status)
        }
        return res.json()})
    .then(data=> {
        document.getElementById("id-name").innerText = data.name
        document.getElementById("id-phone").innerText = data.phone
        document.getElementById("id-street").innerText = data.address.street
        document.getElementById("id-city").innerText = data.address.city
    })
    .catch(err => console.error("Ups : " + err))
    .finally(e => console.log("done"))
}



/*
const options = {

    method: "post",
    headers: {
    "Content-type" : "application/json",
    "Accept" : "application/json"
    },
    
    body : JSON.stringify(
    {
    name : "Erik"   
    }
    )
}
fetch("https://jsonplaceholder.typicode.com/users", options)
.then(res => res.json())
.then(data => console.log(data))

*/

/*

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>{
    res.json()})
.then(data=> console.log(data))

*/
