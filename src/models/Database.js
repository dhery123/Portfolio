const {Schema, model} = require ('mongoose');
const bcrypt = require('bcryptjs')
const UserSchema = new Schema({
    Nombres:{
        type: String,
        required: true,
    },
    Apellidos:{
        type: String,
        required: true,
    }, 
    Correo:{
        type: String,
        required: true,
    },
    Pass:{
        type: String,
        required: true,
    },
    Cel:{
        type: Number,
        required: true,
    },
    Saludo:{
        type: String,
        
    },
    Progra:{
        type: String,
    }
},{
    timestamps: true
})
UserSchema.methods.encrypPass = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
};
UserSchema.methods.matchPass = async function (password)  {
    await bcrypt.compare(password, this.password);
}
model.exports = model('User', UserSchema)
