document.addEventListener("DOMContentLoaded", function() {
    describe('Test getTotalPoints function', () => {
        it('Returns total number of points won', () => {
            let inputData = 'wwdlw'
            let result = getTotalPoints(inputData)
            expect(result).toBe(10)
        })
    })
    describe('Test orderTeams function', () => {
        it('Logs each entry to the console as "Team name: points"', () => {
            let inputData1 = {name: 'Sounders', results: 'wwlwdd'}
            let inputData2 = {name: 'Galaxy', results: 'wllwwd'}
            let result = orderTeams(inputData1, inputData2)
            expect(result).toBe(`Sounders: 11\nGalaxy: 10`)
        })
    })
})