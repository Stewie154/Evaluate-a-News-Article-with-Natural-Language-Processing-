export const displayResults = (data) => {
    document.getElementById('agreement').innerHTML = data.agreement
    document.getElementById('confidence').innerHTML = data.confidence
    document.getElementById('irony').innerHTML = data.irony
}