export const displayResults = (data) => {
    //grab elements
    const agreement = document.getElementById('agreement');
    const confidence = document.getElementById('confidence');
    const irony = document.getElementById('irony');
    //display data
    agreement.innerHTML = data.agreement
    confidence.innerHTML = data.confidence
    irony.innerHTML = data.irony
}