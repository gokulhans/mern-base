const mongoose = require('mongoose')
import { MONGOURI } from '../keys'

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})
