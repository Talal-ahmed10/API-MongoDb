const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {

    const queryObj = {...req.query};
const excludedFields = ['page', 'sort', 'limit', 'fields']

    console.log(req.query);
    const tours = await Tour.find(req.query)
      // .where('difficulty')
      // .equals('easy')
      // .where(duration)
      // .equals(5);

    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// async makes a function return a Promise
// await makes a function wait for a Promise
exports.createTours = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTours = async (req, res) => {
  try {
    const tours = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //this way the new updated document is the one that will me return
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tours, //placeholder
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.deleteTours = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fails',
      message: 'Unable to delete ',
    });
  }
};
