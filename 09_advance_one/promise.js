console.log("promises");
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// .then and .catch are the concept bing derived from promises. Fetch() is a internal tool which we get from Promise. 
// Accessing file is a long process which doesn't executes as the speed of programs cause Kernal is involved in it. Cryptography also takes some time to be completed. All these functions in the world are solved using Asynchronorus programming. 
// There are two methods which can solve this problem, one is async await() and famously used method is promise().

//A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// typeof Promise is object. 
// Promise takes a callback and reduces callback hell.
// Promise can be handled using .then .catch or using async await. 