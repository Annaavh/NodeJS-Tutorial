const buffer = new Buffer.from("Vishwas","utf-8");
//"Vishwas" anvan tareri codern e cuyc talis object i mej
//Buffer contians a raw binary data that is displayed as output

buffer.write("Code")
//output is "Codewas" because buffers have limited memory
//the 4 characters overwrite the 4 characters of wors Vishwas
buffer.write("Codevulation")
//output is 'Codevul' because it takes as much characters as in 'Vishwas'

console.log(buffer.toString())
console.log(buffer)
console.log(buffer.toJSON())