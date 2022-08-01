const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const arr = [1,2,3,4,5,6,7,8]
    test('length test', () => {
        expect(shuffleArray(arr).length).toBe(arr.length)
    })

    test('contains same items', () => {
        expect(shuffleArray(arr)).toEqual(expect.arrayContaining(arr))
    })
})