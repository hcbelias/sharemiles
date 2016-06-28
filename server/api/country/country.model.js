'use strict';

import mongoose from 'mongoose';

var CountrySchema = new mongoose.Schema({
  name: String,
  active: Boolean,
  states:{
    type: [{
      name: {
        type: String,
        required: 'State Name is required.'
      },
      abbreviation: {
        type: String,
      },
    }],
    default: []
  }
});

export default mongoose.model('Country', CountrySchema);
