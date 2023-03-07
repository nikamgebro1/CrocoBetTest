const userInfo = document.getElementById('user-info');
const userPostsButton = document.getElementById('user-posts-button');
const userId = new URLSearchParams(window.location.search).get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userInfoList = document.createElement('ul');
        userInfoList.innerHTML = `
      <li>Name: ${user.name}</li>
      <li>Username: ${user.username}</li>
      <li>Email: ${user.email}</li>
      <li>Phone: ${user.phone}</li>
      <li>Website: ${user.website}</li>
      <li>Company: ${user.company.name}</li>
      <li>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</li>
    `;
        userInfo.appendChild(userInfoList);

        userPostsButton.addEventListener('click', () => {
            window.location.href = `user_posts.html?userId=${userId}`;
        });
    });