let bsnss = [
    {
        name: "ali-airlines",
        budget: 3500000,
        tax: 18,
        expenses: [
            1200000,
            500000,
            100000
        ]
    },
    {
        name: "jav-oil",
        budget: 1500000,
        tax: 12,
        expenses: [
            10000,
            500000,
            25000
        ]
    },
    {
        name: "munir-auto",
        budget: 10000000,
        tax: 24,
        expenses: [
            6000000,
            20000,
            60000
        ]
    },
    {
        name: "jago-kalyoshi",
        budget: 500000,
        tax: 8,
        expenses: [
            10000,
            8000,
            12000
        ]
    },
    {
        name: "jahonbek-nosfrush",
        budget: 1000000,
        tax: 0,
        expenses: [
            200000,
            15000,
            3000
        ]
    }
]

// найти компанию которая больше всех платит налог
// найти компанию которая меньше всех платит налог
// покзать сколько гос-во зарабатывает со всех компаний 
// найти успешные и не успешные 20000
let unsuccessfull = []
let successfull = []


let successfulls = bsnss.filter(elem => elem.budget > 20000)


let unsuccessfulls = bsnss.filter(elem => elem.budget < 20000)

console.log(successfulls);
console.log(unsuccessfulls);
console.log(successfull);
console.log(unsuccessfull);