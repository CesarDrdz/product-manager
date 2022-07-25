const mongoose = require('mongoose');

const DB = 'productmanager';

mongoose
.connect('mongodb//localhost/${DB', {
    useNewParser: true,
    useUnifiedTopology: true,
})
.then(()=>
    console.log(`Established connection to datatebase: ${DB}`)
)
.catch((err) =>
console.log('Soemthing went terribly wrong when connecting to the database!!', err)
);