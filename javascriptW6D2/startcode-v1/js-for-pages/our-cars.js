import { encode } from "../utils.js"

const SERVER_URL =  "http://localhost:8080/api/cars"

export function setUpOurCarsHandlers() {
  document.getElementById("t1-btn1").onclick = getAllCars
}

export function getAllCars() {
  console.log("Called")
  fetch(SERVER_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const rows = data.map(u => `
    <tr>
      <td>${encode(u.id)} </td>
      <td>${encode(u.brand)} </td>
      <td>${encode(u.model)} </td>
      <td>${encode(u.pricePrDay)} </td>
      
    </tr>
    `).join("\n")
      document.getElementById("car-rows").innerHTML = rows;
    })
    .catch(err => console.error("UPPPPPS: " + err))
    .finally(e => console.log("Finally Done"))

}