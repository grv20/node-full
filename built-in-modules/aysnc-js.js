//JS is synchronous, blocking, single-threaded language
//Synchronous: I f we have two funcs which log msgs to the console, code executes top down, with only one line executing at any given time
//Blocking: No matter how long previos process takes, the subsequent processes wont kick off until the former is completed
//Single threaded: A thread is simply a process that your JS program can use to run a task
//Each thread can only do one task
//JS has just one thread called main thread for executing any code

//Async
//Web browsers and Node.js define functions and APIs that allows us to register functions
//that should not be executed synchronously, and should be invoked
//asynchronously when some kind of event occurs
//eg. setTimeOut, setInterval, addEventListner, callbacks, Promises, async-await
//node js is asynchronous, it has methods to do things asynchronously
