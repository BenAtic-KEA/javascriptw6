import { renderTemplate, setActive, showPage } from "./utils.js"
import { setupP2Handlers } from "./js-for-pages/our-cars.js"
import { setUpPage3Handlers, getAllUsers } from "./js-for-pages/add-edit-cars.js"



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
      setupP2Handlers()
      break
    }
    case "add-edit-cars": {
      setUpPage3Handlers()
      getAllUsers()
      break
    }
    case "sign-up": {
      setUpPage3Handlers()
      getAllUsers()
      break
    }
    case "my-details": {
      setUpPage3Handlers()
      getAllUsers()
      break
    }
    case "login": {
      setUpPage3Handlers()
      getAllUsers()
      break
    }
    case "logout": {
      setUpPage3Handlers()
      getAllUsers()
      break
    }
  }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("about") //Set the default page to render




