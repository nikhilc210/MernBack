const moongoes = require('mongoose'); 
const bcrypt = require('bcrypt');
const userSchema = new moongoes.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:10
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:10
    }, 
    username :{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type: String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    hash_pass:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    contact:{
        type:String
    },
    profilePicture:{
        type:String
    }

},{timestamps:true});
userSchema.virtual('password').set(function(password) {
    this.hash_pass = bcrypt.hashSync(password,10);
});
userSchema.virtual('fullname').get(function(){
    return `${this.firstname} ${this.lastname}`;
})
userSchema.methods = {
    authenticates: function(password){
        return bcrypt.compareSync(password, this.hash_pass);
    }
}

module.exports = moongoes.model('User',userSchema);