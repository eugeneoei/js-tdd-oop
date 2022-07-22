/**
 * TODO: mock/stub time. Implement `get_yesterdays_date()`. Write a test that will pass. Not just today, but whenever you run the test.
 */

const getYesterdaysDate = () => {
    return new Date().toLocaleDateString();
};

module.exports = getYesterdaysDate;

// const now = new Date(2021, 11, 21)

// const day = now.getDate()
// const month = now.getMonth()
// const year = now.getFullYear()
// const hours = now.getHours()
// const minutes = now.getMinutes()
// const seconds = now.getSeconds()

// console.log(Math.floor(Date.now()/1000))
// console.log('now >>', now)
// // console.log(-now.getTimezoneOffset()/60)
// console.log('toDateString >>', now.toDateString())
// console.log('toJSON >>', now.toJSON())
// console.log('toLocaleDateString >>', now.toLocaleDateString())
// console.log('toLocaleTimeString >>', now.toLocaleTimeString())
// console.log('toLocaleString >>', now.toLocaleString())
// console.log('day >>', day)
// console.log('month >>', month+1)
// console.log('year >>', year)
// console.log('hours >>', hours)
// console.log('minutes >>', minutes)
// console.log('seconds >>', seconds)

const meters = {
    METER0: "smart-meter-0",
    METER1: "smart-meter-1",
    METER2: "smart-meter-2",
    METER3: "smart-meter-3",
    METER4: "smart-meter-4",
};

const generateSingle = () => {
    const startTime = 1607686125; // Friday, 11 December 2020 11:28:45 GMT+00:00
    const hour = 3600;
    const readingsLength = Math.ceil(Math.random() * 2);

    return [...new Array(readingsLength)].map((reading, index) => ({
        time: startTime - index * hour,
        reading: Math.random() * 2,
    }));
};

const go = () => {
    const readings = {};

    for (const key in meters) {
        // if (meters.hasOwnProperty(key)) {
            readings[meters[key]] = generateSingle();
        // }
    }
    return readings;
};

console.log(go());
