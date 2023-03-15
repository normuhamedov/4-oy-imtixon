function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
}

const url = 'https://jsonplaceholder.typicode.com/users';
console.log(url);


const tableBody = document.getElementById('tbody');
const form = document.getElementById('add-user-form');

fetch(url).then(response => response.json()).then(data => {
    data.map((user) => {
        console.log(user);
        const { id, name} = user;
        const row = document.createElement('tr');
        row.innerHTML = `
        
        <td>${name}</td>
        
        <td> <img class = "avatar_js" src = "./img/avatar.png" alt="${name}" width="53" height="53"/> </td>
        
        
        <td>
        <button class="delete-button" data-id="${id}" >Delete</button>
        </td>
        `
        
        tableBody.appendChild(row)
    })
}).catch(error => console.error(error.message));




form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('update-id').value;
    const name = document.getElementById('name').value;
    
    const avatar = document.getElementById('avatar').files[0];
    
    if (id) {
        updateUser(id, name,);
        form.reset();
        
    } else {
        
        const formData = {
            name: name,
            
        }
        
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(response => response.json()).then(data => {
            const row = document.createElement('tr');
            
            const reader = new FileReader();
            reader.readAsDataURL(avatar);
            
            reader.onload = () => {
                const avatarUrl = reader.result;
                
                row.innerHTML = `
                
                <td>${name}</td>
                
                <td>
                <img src = "${avatarUrl}" alt="${name}" />
                </td>
                
                <td>
                <button class="delete-button" data-id=${id} >Delete</button>
                </td>
                `
            }
            
            tableBody.appendChild(row);
            form.reset();
            
        }).catch(error => console.error(error.message));
    }
})


tableBody.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('edit-button')) {
        const id = e.target.dataset.id;
        const name = e.target.dataset.name;
        
        
        form.querySelector('#update-id').value = id;
        form.querySelector('#name').value = name;
        
        
        document.querySelector('#save-user-button').textContent = 'Update User';
        
    } else if (e.target.classList.contains('delete-button')) {
        const id = e.target.dataset.id;
        
        deleteUser(id).then(() => {
            const tableRow = e.target.closest("tr");
            tableRow.remove();
        }).catch((error) => {
            console.error(error);
        })
    }
    
})

async function deleteUser(id) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            return response.text();
        }
    } catch (error) {
        return console.error(error);
    }
}
