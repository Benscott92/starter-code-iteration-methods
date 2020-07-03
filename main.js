// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// Append the katas to this element:
const main = document.querySelector('main')

// Kata 0: An example kata
// Filter the users array to show only the users with an eyeColor property of "green".

const greenEye = users.filter(item => item.eyeColor === 'green').map(item => item.name)
printKata('Kata 0', greenEye)

// Kata 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.

const activeUsers = users.filter(item => item.isActive === true).map(item => item.name)
printKata('Kata 1', activeUsers)

const userEmails = users.map(item => item.email)
printKata('Kata 2', userEmails)


// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".

let ovationCheck = users.some(item => item.company === 'OVATION')
printKata('Kata 3', ovationCheck)

// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38.

let over38 = users.find(item => item.age > 38)
printKata('Kata 4', over38.name)

let active38 = users.filter(item => item.isActive === true).find(item => item.age > 38)
printKata('Kata 5', active38)

// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.

let zencoBalance = users.filter(item => item.company === 'ZENCO').map(item => item.balance)
printKata('Kata 6', zencoBalance)

// Kata 7: Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.

let tagFilter = users.filter(item => item.tags.includes("fugiat")).map(item => item.age)
printKata('Kata 7', tagFilter)

