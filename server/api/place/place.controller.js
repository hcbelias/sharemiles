/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/places              ->  index
 * POST    /api/places              ->  create
 * GET     /api/places/:id          ->  show
 * PUT     /api/places/:id          ->  update
 * DELETE  /api/places/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Place from './place.model';
import User from './../user/user.model';


function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    res.status(statusCode).json(err);
  }
}


function savePlaceIcon(place){
  switch (place.category) {
    case 'Home':
      place.icon = 'home';
      break;
    case 'Work':
      place.icon = 'work';
      break;
    case 'Store':
      place.icon = 'store';
      break;
    case 'University':
      place.icon = 'school';
      break;
    case 'Unknow':
    default:
      place.icon = 'help';
      break;
  }
}


function getLoggedUser(req){
  var userId = req.user._id;
  return User.findOne({ _id: userId }, '-salt -password');
}

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity && entity.places) {
      res.status(statusCode).json(entity.places);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


// Gets a list of Places
export function index(req, res) {
  return getLoggedUser(req).exec()
    .then(user => {
      if (!user) {
        return res.status(401).end();
      }
      res.status(200).json(user.places);
    })
    .catch(handleError(res));
}

// Gets a single Place from the DB
export function show(req, res) {
  return Place.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Place in the DB
export function create(req, res) {
  var userId = req.user._id;

  var place = new Place(req.body.place);
  var category = place.category.toLowerCase();
  if(category === 'university')
  {
    place.set('icon', 'school');
  }else{
    place.set('icon', place.category.toLowerCase());
  }

  return User.findOneAndUpdate({ _id: userId }, { $push: { places: place } }, { new: true })
    .then(function(user){
      console.log(user);
      res.json(user.places);
  })
  .catch(handleError(res));
}

// Updates an existing Place in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Place.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Place from the DB
export function destroy(req, res) {
  return Place.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
