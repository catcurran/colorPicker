let color = ""
let scheme = ""


document.getElementById("color-form").addEventListener("submit", function(e){
    e.preventDefault()
    color = document.getElementById("color").value.substring(1)
    scheme = document.getElementById("scheme-type").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`)
    .then(res => res.json())
    .then(data => {
        const colorsArray = data.colors
        for (let i = 0; i < 5; i++){
            document.getElementById(`color${i+1}`).style.backgroundColor = colorsArray[i].hex.value
            document.getElementById(`hex${i+1}`).textContent = colorsArray[i].hex.value
        }
    })
    
})



