import { encode } from "../utils.js"


export function setUpPage3Handlers() {
  document.getElementById("btn-get-all").onclick = getAllUsers
}

export function getAllUsers() {
  console.log("Called")
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const rows = data.map(u => `
    <tr>
      <td>${u.name} </td>
      <td>${encode(u.phone)} </td>
      <td>${encode(u.address.street)} </td>
      <td>${encode(u.address.city)} </td>
    </tr>
    `).join("\n")
      document.getElementById("tbl-body").innerHTML = rows;
    })
    .catch(err => console.error("UPPPPPS: " + err))
    .finally(e => console.log("Finally Done"))

}