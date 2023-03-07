const userButtons = document.getElementById('user-buttons');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const button = document.createElement('button');
            button.innerText = user.name;
            button.addEventListener('click', () => {
                window.location.href = `user.html?id=${user.id}`;
            });
            userButtons.appendChild(button);
        });
    });
