// const getYesterdaysDate = require('./time')

// describe('getYesterdaysDate', () => {

//     beforeAll(() => {
//         const fakeDate = new Date(2021, 11, 21)
//         jest.useFakeTimers()
//         jest.setSystemTime(fakeDate)
//     })

//     afterAll(() => {
//         jest.useRealTimers()
//     })

//     it('should return yesterday\'s locale date string', () => {
//         const expectedLocaleDateString = '12/21/2021'

//         const yesterdaysDate = getYesterdaysDate()

//         expect(yesterdaysDate).toBe(expectedLocaleDateString);
//     });
// });