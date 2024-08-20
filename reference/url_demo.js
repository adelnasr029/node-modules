const url = require('url')

const myUrl = new URL('http://mywebsite.com:8000//hello.html?id=100&status=active')

// Serialized URL 
console.log(myUrl.href)
console.log(myUrl.toString())

//Host (root domain)
console.log(myUrl.host) //mywebsite.com:8000

//Hostname (doesn't get the port as Host does)
console.log(myUrl.hostname) //mywebsite.com

//Pathname
console.log(myUrl.pathname) //hello.html (actual file)

// Serialized query
console.log(myUrl.search)

//Params Object
console.log(myUrl.searchParams)

//Add params dynamically 
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

//Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}; ${value}`))