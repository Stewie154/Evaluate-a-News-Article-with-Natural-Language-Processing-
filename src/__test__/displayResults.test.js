import {displayResults} from '../client/js/displayResults';

describe('Properly displays data to the user', () => {
    test('Testing display results function', () => {
        //mock data
        const data = {agreement: 'I agree', confidence: 'High', irony: 'Ironic'};

        //mock dom elements
        document.body.innerHTML = '<div id="agreement"></div> <div id="confidence"></div> <div id="irony"></div>'

        //grabbing elements
        const agreement = document.getElementById('agreement');
        const confidence = document.getElementById('confidence');
        const irony = document.getElementById('irony');

        //calling displayResults function to populate mock dom elements with mock data
        displayResults(data)
        expect(agreement.innerHTML).toEqual(data.agreement);
        expect(confidence.innerHTML).toEqual(data.confidence);
        expect(irony.innerHTML).toEqual(data.irony);
    })
})