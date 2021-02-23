import {displayResults} from '../client/js/displayResults'

describe('Properly displays data to the user', () => {
    test('Testing display results function', () => {
        //dummy data
        const data = {colour: 'red', place: 'Coventry', animal: 'dog'}
        expect(displayResults(data))
    })
})