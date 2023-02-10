document.getElementById('resturantForm').addEventListener('submit', addResturant);

// initial array of events, reading from localStorage
const resturants = JSON.parse(localStorage.getItem('resturant')) || [];

function addResturants(e){
    e.preventDefault();

    // get type, name, date, and amount
    let type = document.getElementById('alphabet').value;
    let name = document.getElementById('country').value;
    let date = document.getElementById('date').value;
    let amount = document.getElementById('resturant').value;

    if(type != 'chooseOne' 
        && name.length > 0 
        && date != 0 
        && resturant > 0){
        const resturants = {
            alphabet, 
            country, 
            date,
            resturant, 
            id: resturants.length > 0 ? resturants[resturants.length - 1].id + 1 : 1,
        }

        resturants.push(resturants);
        // localStorage 
        localStorage.setItem('resturants', JSON.stringify(resturants));
    }

    document.getElementById('resturantForm').reset();
    showRestuarnt();
}

const showResturant = () => {

    const resturantTable = document.getElementById('resturantTable');

    resturantTable.innerHTML = '';

    for(let i = 0; i < resturants.length; i++){
        eventTable.innerHTML += `
            <tr>
                <td>${resturants[i].alphabet}</td>
                <td>${resturants[i].country}</td>
                <td>${resturants[i].date}</td>
                <td>$${resturants[i].resturant}</td>
                <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">
                    Delete</td>
            </tr>
        `;
    }
}

const deleteRestruant = (id) => {
    for(let i = 0; i < resturants.length; i++){
        if(resturants[i].id == id){
            resturants.splice(i, 1);
        }
    }

    // localStorage
    localStorage.setItem('resturants', JSON.stringify(resturants));
    showResturant();
}

showResturant();