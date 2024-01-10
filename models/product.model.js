const mongoose=require('mongoose');
const validator = require('validator');

//Schema
const productSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
      },
      picture: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            // Basic URL validation
            return validator.isURL(v, { protocols: ['http', 'https'], require_protocol: true });
          },
          message: (props) => `${props.value} is not a valid URL for picture!`,
        },
      },
      description: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
      },
      category: {
        type: String,
        enum: ['makeup', 'skincare', 'haircare'],
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  versionKey: false,
}
)



//model

const ProductModel=mongoose.model('product',productSchema)

module.exports={
    ProductModel
}