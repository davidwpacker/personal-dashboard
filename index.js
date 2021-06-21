fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then (data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})` // note to self: .urls.raw can be found when you search the json url
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })