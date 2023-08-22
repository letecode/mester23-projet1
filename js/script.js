let form = document.getElementById('form')
let tbody = document.querySelector('table tbody')

let contacts = [];

form.addEventListener('submit', function(event){
    event.preventDefault()

    let data = new FormData(event.target)

    let user = {
        'name' : data.get('name'),
        'phone' : data.get('phone')
    };

    contacts.push(user);
    form.reset();
    afficher()
});


function afficher(){
    tbody.innerHTML = ''

    for(user of contacts) {
        let temp = `<tr>
            <td>${user.name}</td>
            <td>${user.phone}</td>
        </tr>`

        tbody.innerHTML = tbody.innerHTML + temp
    }
}