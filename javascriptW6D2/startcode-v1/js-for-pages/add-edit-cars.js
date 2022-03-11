import { encode } from "../utils.js"
import { makeOptions } from "../fetchUtils.js"

const SERVER_URL =  "http://localhost:8080/api/cars"

export function setupAddEditHandlers() {
  document.getElementById("btn-add-car").onclick = addCar
  document.getElementById("btn-get-all").onclick = adminCarList
}



function addCar(){

  console.log("Hey")
  const car ={}
    car.brand = document.getElementById("input-brand").value
    car.model = document.getElementById("input-model").value
    car.pricePrDay = document.getElementById("input-price-pr-day").value
    car.bestDiscount = document.getElementById("input-discount").value

    fetch(SERVER_URL,makeOptions("POST",car,true))
      .then(res => res.json())
      .then(newCar => console.log(newCar))
    }

    export function adminCarList(){
        console.log("Called")
        fetch(`${SERVER_URL}/admin`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            const rows = data.map(u => `
          <tr>
            <td>${encode(u.id)}</td>
            <td>${encode(u.brand)}</td>
            <td>${encode(u.model)}</td>
            <td>${encode(u.pricePrDay)}</td>
            <td>${encode(u.bestDiscount)}</td>
            <td>${encode(u.created)}</td>
            <td>${encode(u.updated)}</td>
          </tr>
          `).join("\n")
            document.getElementById("car-admin-rows").innerHTML = rows;
          })
          .catch(err => console.error("UPPPPPS: " + err))
          .finally(e => console.log("Finally Done"))
      
      }