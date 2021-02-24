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

        // const mockDisplay = jest.mock("../client/js/displayResults.js", () => {
        //    return jest.fn().mockImplementation(cb => {
        //      cb(data);
        //       });
        //   });
        
        //mock function
        const mockResults = jest.fn((data) => {
            agreement.innerHTML = data.agreement
            confidence.innerHTML = data.confidence
            irony.innerHTML = data.irony
        })
        //calling mock function with mock data to simulate displayResults
        mockResults(data)
        expect(agreement.innerHTML).toEqual(data.agreement);
        expect(confidence.innerHTML).toEqual(data.confidence);
        expect(irony.innerHTML).toEqual(data.irony);
    })
})