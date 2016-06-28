'use strict';

import mongoose from 'mongoose';

var PlaceSchema = new mongoose.Schema({
  name: String,
  category: String,
  address: String,
});

export default mongoose.model('Place', PlaceSchema);
