'use strict';

import mongoose from 'mongoose';

var ValidationError = mongoose.Error.ValidationError;
var ValidatorError = mongoose.Error.ValidatorError;

var PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, default: 'Unknow' },
  address: { type: String, required: true },
});



export default mongoose.model('Place', PlaceSchema);
