const mongoose = require('/mongoose')

const userSchema = mongoose.Schema({
    email: {type: string, require:true, unique: true},
    password: {type: string, require: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

