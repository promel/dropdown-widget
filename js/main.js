// import { qualification } from './qualification.js';
let qualifications = [];
//POST request with body equal on data in JSON format
const dropdown = document.getElementById('qualification');

function getqualifications() {
    fetch('/api.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            qualifications = data.map(q => Object.assign(new Qualification(), q))
            for (const qualification of qualifications) {
                const option = createOption(qualification);
                dropdown.add(option);
            }
        })
        //Then with the error genereted...
        .catch((error) => {
            console.error('Error:', error);
        });
}

function createOption(qualification) {
    const option = document.createElement("option");
    option.text = qualification.name;
    option.value = qualification.id;
    option.disabled = !qualification.active;
    return option;
}

function submit() {
    let response = document.getElementById("response");
    const qualification = document.getElementById('qualification').value;
    if (!qualification)
        response.innerHTML = "Please qualification";
    const payload = { qualification, qualifications };
    console.log(payload)
    fetch('/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then((response) => console.log(response.json()))
        .then((data) => {
            response.innerHTML = data;
        })
        //Then with the error genereted...
        .catch((error) => {
            console.error('Error:', error);
        });
}

class Qualification {
    construct(id, name, active) {
        id = id;
        name = name;
        active = active;
    }
}