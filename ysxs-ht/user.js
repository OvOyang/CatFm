var mongoose=require('mongoose')
var UserSchema = new mongoose.Schema({
    username: String,
    userpassword:String,
    userlike:Array
});

var User = mongoose.model("User", UserSchema);

var yyc = new User ({
    username:"yyc",
    userpassword:"yyc123",
    userlike:[]
})

// yyc.save()

module.exports = User;
