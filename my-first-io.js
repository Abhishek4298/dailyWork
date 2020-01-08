
const str=fs.readFileSync(process.argv[2]);
const str2=str.toString().split('\n').length-1;
console.log(str2); 
