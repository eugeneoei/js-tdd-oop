const solution = require('./solution')

test('Return numbers that are even divisible by 7 or sum of individual digit is 7', () => {

    const cases = [
        {
            range: [1, 20],
            expectedResult: [7, 14, 16]
        },
        {
            range: [1, 50],
            expectedResult: [7, 14, 16, 25, 28, 34, 42, 43]
        },
        {
            range: [20, 40],
            expectedResult: [25, 28, 34]
        },
        {
            range: [1, 1000],
            expectedResult: [
                7, 14, 16, 25, 28, 34, 42, 43, 52, 56, 61, 70,
                84, 98, 106, 112, 115, 124, 126, 133, 140, 142, 151, 154,
                160, 168, 182, 196, 205, 210, 214, 223, 224, 232, 238, 241,
                250, 252, 266, 280, 294, 304, 308, 313, 322, 331, 336, 340,
                350, 364, 378, 392, 403, 406, 412, 420, 421, 430, 434, 448,
                462, 476, 490, 502, 504, 511, 518, 520, 532, 546, 560, 574,
                588, 601, 602, 610, 616, 630, 644, 658, 672, 686, 700, 714,
                728, 742, 756, 770, 784, 798, 812, 826, 840, 854, 868, 882,
                896, 910, 924, 938, 952, 966, 980, 994
            ]
        }
    ]

    cases.forEach(element => {
        const answer = solution(element.range)

        expect(answer).toEqual(element.expectedResult)
    })

})