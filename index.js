// Write your code here!
async function fetchJSONPlaceholder() {
    try {
        const resonse = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resonse.json()
        displayPosts(data)
    } catch (error) {
        console.log(error)
    }
}

function displayPosts(postsArray) {
    const ulElement = document.getElementById('post-list')
    postsArray.forEach((post) => {
        const newLiTag = document.createElement('li')
        const newH1Tag = document.createElement('h1')
        newH1Tag.textContent = post.title;
        const newPTag = document.createElement('p')
        newPTag.textContent = post.body;
        newLiTag.append(newH1Tag, newPTag)
        ulElement.append(newLiTag)
    })
}

fetchJSONPlaceholder()