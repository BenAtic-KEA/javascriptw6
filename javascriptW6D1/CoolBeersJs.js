window.onload = listOfAllBeers

let beerList = [];

function listOfAllBeers(){
        fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(data => {
            let tempArray = []
            for(let i = 0; i < data.length; i++){
                beerList.push(data[i])
            }
        
            createBeerBody(beerList)
        })
        
}
function attachClickHandlers(){
    document.getElementById("tbl1").onclick = createBeerBody
}

function createBeerBody(list){

    const rows = list.map(b => `
        <tr>
        <td>${b.name}</td>
        <td>${b.tagline}</td>
        <td>${b.abv}</td>
        <td>${b.ibu}</td>
        </tr>`).join("\n")
        document.getElementById("tbl1").innerHTML = rows
    
}

document.getElementById("abv-btn").onclick = evt => {
    evt.preventDefault
    let abvInput = document.getElementById("filter-abv").value
    let filteredList = beerList.filter(e => e.abv > abvInput)
    createBeerBody(filteredList)
    attachClickHandlers()
}