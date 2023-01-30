const { default: mongoose } = require("mongoose")
const { Schema } = mongoose


const adminUserSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:String,
    addDate: {
        type:Date,
        default: Date.now()
    }
});

const adminUser = mongoose.model('AdminUser', adminUserSchema);

module.exports = {
    adminUser
}

