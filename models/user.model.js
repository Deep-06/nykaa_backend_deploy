const mongoose=require('mongoose');
const validator = require('validator');

//Schema
const userSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
      },
      avatar: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            // URL validation using validator library
            return validator.isURL(v, { protocols: ['http', 'https'], require_protocol: true });
          },
          message: props => `${props.value} is not a valid URL!`,
        },
      },
       email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (v) {
            // Email validation using validator library
            return validator.isEmail(v);
          },
          message: props => `${props.value} is not a valid email address!`,
        },
      },
      password: {
        type: String,
        required: true,
      }
      
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  versionKey: false,
}
  )


// created_at (timestamp, automatically set when the user is created)
// updated_at (timestamp, automatically updated when the user is updated)

//model

const UserModel=mongoose.model('user',userSchema)

module.exports={
    UserModel
}