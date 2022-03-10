import { renderTemplate, setActive, showPage } from "./utils.js"
import { setupAddEditHandlers, adminCarList } from "./js-for-pages/add-edit-cars.js"
import { setUpOurCarsHandlers, getAllCars } from "./js-for-pages/our-cars.js"
import { setupLoginHandlers, logout, updateLoginDependentComponents } from "./js-for-pages/login.js"



function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id;
  renderTemplate(id)  //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case "about": {
      break
    }
    case "our-cars": {
      getAllCars()
      setUpOurCarsHandlers()
      break
    }
    case "add-edit-cars": {
      adminCarList()
      setupAddEditHandlers()
      break
    }
    case "sign-up": {
      //sign up functions
      break
    }
    case "my-details": {
      //detail functions
      break
    }
    case "login": {
      setupLoginHandlers()
      break
    }
    case "logout": {
      logout()
      break
    }
  }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("about") //Set the default page to render

updateLoginDependentComponents()


