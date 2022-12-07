document.addEventListener("DOMContentLoaded", function() {
    describe('Test dealerShouldDraw function with input 10, 9', () => {
        it('Returns dealer must draw another card - true or false', () => {
            let inputData = [
                {val: 9, displayVal: '9', suit: 'hearts'},
                {val: 10, displayVal: '10', suit: 'hearts'}
            ]
            let result = dealerShouldDraw(inputData)
            expect(result).toBe(false)
        })
    })
    describe('Test dealerShouldDraw function with input Ace, 6', () => {
        it('Returns dealer must draw another card - true or false', () => {
            let inputData = [
                {val: 6, displayVal: '6', suit: 'hearts'},
                {val: 11, displayVal: 'Ace', suit: 'hearts'}
            ]
            let result = dealerShouldDraw(inputData)
            expect(result).toBe(true)
        })
    })
    describe('Test dealerShouldDraw function with input 10, Ace, 6', () => {
        it('Returns dealer must draw another card - true or false', () => {
            let inputData = [
                {val: 6, displayVal: '6', suit: 'hearts'},
                {val: 11, displayVal: 'Ace', suit: 'hearts'},
                {val: 10, displayVal: '10', suit: 'hearts'}
            ]
            let result = dealerShouldDraw(inputData)
            expect(result).toBe(false)
        })
    })
    describe('Test dealerShouldDraw function with input 2, 4, 2, 5', () => {
        it('Returns dealer must draw another card - true or false', () => {
            let inputData = [
                {val: 2, displayVal: '2', suit: 'hearts'},
                {val: 4, displayVal: '4', suit: 'hearts'},
                {val: 2, displayVal: '2', suit: 'spades'},
                {val: 5, displayVal: '5', suit: 'hearts'}
            ]
            let result = dealerShouldDraw(inputData)
            expect(result).toBe(true)
        })
    })
})