const mongoose = require('mongoose')

let vocherSchema = mongoose.Schema({
  
  name: {
    type: String,
    require: [true, 'Nama kategori harus diiisi']
  },

  status: {
      type: String,
      enum: ['Y', 'N'],
      default: 'Y'
  },

  thumbnial: {
      type: String,
  },

  category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
  },
  nominals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nominal'
  }],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = mongoose.model('Voucher', vocherSchema)