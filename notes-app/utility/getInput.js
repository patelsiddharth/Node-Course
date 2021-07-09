console.log("This will display command line arguments provided on running script")

// argv : argument vector
console.log("First 2 value of process.argv will be location of node executable and location of current js file and 3rd value will be command line argument");
console.log(process.argv);

console.log(process.argv[2]);