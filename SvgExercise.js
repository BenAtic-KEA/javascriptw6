let basicFillColour;
let lastCountry

document.getElementById("svg2").onclick = evt => countryTarget(evt)


function countryTarget(evt){

    const country = evt.target;
    const countryCode = country.id;

    // hvis lastCountry ikke er null ressetter den colour
    if(lastCountry){
        lastCountry.style.fill = basicFillColour;
    }
    
    basicFillColour = country.style.fill;
    lastCountry = country;
    country.style.fill = "pink"
    


    if(countryCode == "svg2"){
        document.getElementById("country-info").innerHTML = "";
        return
    }

    fetch("https://countries.plaul.dk/api/countries/" + countryCode)
    .then(res => res.json())
    .then(info => {
    
        const countryInfoRows = `
        <p> Name: <span> ${info.name.common} </span> </p>
        <p> Official: <span> ${info.name.official} </span> </p>
        <p> Capital: <span> ${info.capital} </span> </p>
        <p> Calling codes: <span> ${info.name.common} </span> </p>
        `
        document.getElementById("country-info").innerHTML = countryInfoRows
        document.getElementById(countryCode).innerHTML = countryInfoRows

    }).catch(e => console.log(e))
}


//<p> Currencies: <span>${info.currencies.name} - ${info.currencies.symbol}</span> </p>
