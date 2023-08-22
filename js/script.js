let form = document.getElementById('form')
let tbody = document.querySelector('table tbody')

let contacts = [];

form.addEventListener('submit', function(event){
    event.preventDefault()

    let data = new FormData(event.target)

    let user = {
        'id' : contacts.length + 1,
        'name' : data.get('name'),
        'phone' : data.get('phone'),
    };

    contacts.push(user);
    form.reset();
    afficher()
});


function afficher(){
    tbody.innerHTML = ''

    for(let i=0;i < contacts.length;i++) {
        let temp = `<tr>
            <td>${contacts[i].name}</td>
            <td>${contacts[i].phone}</td>
            <td><button type="button" onclick="supprimer(${i})">Supprimer</button></td>
        </tr>`

        tbody.innerHTML = tbody.innerHTML + temp
    }
}

function supprimer(index) {
    contacts.splice(index, 1);

    afficher()
}