const btn = document.getElementById('bored-button')

btn.addEventListener('click', ()=>{
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data =>{
        document.getElementById('idea').textContent = data.activity
        document.getElementById('title').textContent = "🦾 HappyBot🦿"
        document.body.classList.add('changed')
    })

}
)