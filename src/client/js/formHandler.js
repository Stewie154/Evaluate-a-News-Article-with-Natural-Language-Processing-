import {displayResults} from './displayResults'
const handleSubmit = async (event) => {
    let formText = document.getElementById('text').value
    event.preventDefault()
    return new Promise( (resolve, reject) => {
        fetch('http://localhost:3000/submit?' + new URLSearchParams({
            content: formText
        }))
        .then(res => res.json())
        .then(function(res) {
            displayResults(res)
            console.log(2)
            resolve()
        })
        .catch(reject)
    })
}


export { handleSubmit }
