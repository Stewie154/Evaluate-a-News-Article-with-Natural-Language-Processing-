import {displayResults} from './displayResults'
import {formTextValue} from './formTextValue'
const handleSubmit = async (event) => {
    let formText = formTextValue()
    event.preventDefault()
    return new Promise( (resolve, reject) => {
        fetch('http://localhost:3000/submit?' + new URLSearchParams({
            content: formText
        }))
        .then(res => res.json())
        .then(function(res) {
            displayResults(res)
            resolve()
        })
        .catch(reject)
    })
}


export { handleSubmit }
