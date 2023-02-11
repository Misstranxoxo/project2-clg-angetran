document.getElementById('venueForm').addEventListener('submit', addVenue);

// initial array of events, reading from localStorage
const venues = JSON.parse(localStorage.getItem('venues')) || [];

function addVenue(e){
    e.preventDefault();

    // get type, name, date, and amount
    let alphabet = document.getElementById('alphabet').value;
    let country = document.getElementById('country').value;
    let date = document.getElementById('date').value;
    let resturant = document.getElementById('resturant').value;

    if(alphabet != 'chooseOne' 
        && country.length > 0 
        && date != 0 
        && resturant.length > 0){
        const venue = {
            alphabet, 
            country, 
            date,
            resturant, 
            id: venues.length > 0 ? venues [venues.length - 1].id + 1 : 1,
        }

        venues.push(venue);
        // localStorage 
        localStorage.setItem('venues', JSON.stringify(venues));
    }

    document.getElementById('venueForm').reset();
    showVenues();
}

const showVenues = () => {

    const venueTable = document.getElementById('venueTable');

    venueTable.innerHTML = '';

    for(let i = 0; i < venues.length; i++){
        venueTable.innerHTML += `
            <tr>
                <td>${venues[i].alphabet}</td>
                <td>${venues[i].country}</td>
                <td>${venues[i].date}</td>
                <td>${venues[i].resturant}</td>
                <td><a class="deleteButton" onclick="deleteVenue(${venues[i].id})">
                    Delete</td>
            </tr>
        `;
    }
}

const deleteVenue = (id) => {
    for(let i = 0; i < venues.length; i++){
        if(venues[i].id == id){
            venues.splice(i, 1);
        }
    }

    // localStorage
    localStorage.setItem('venues', JSON.stringify(venues));
    showVenues();
}

showVenues();