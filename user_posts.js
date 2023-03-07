const userPosts = document.getElementById('user-posts');
const userId = new URLSearchParams(window.location.search).get('userId');

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts => {
        const postsList = document.createElement('ul');
        posts.forEach(post => {
            const postItem = document.createElement('li');
            postItem.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
            postsList.appendChild(postItem);
        });
        userPosts.appendChild(postsList);
    });
