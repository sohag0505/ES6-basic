document.getElementById('apply-bg').addEventListener('click', function() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'red';
    }
})

document.getElementById('center-third').addEventListener('click', function() {
    const thirdFd = document.getElementById('third-fd');
    thirdFd.style.textAlign = "center";
})

document.getElementById('add-fd').addEventListener('click', function() {
    const newFd = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add("friend")
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Sometimes new added</p>
    `
    newFd.appendChild(friend);
})