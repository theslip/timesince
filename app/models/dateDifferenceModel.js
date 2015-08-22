var moment = require('moment');
var _ = require('lodash');

var dateDifferenceModel = function dateDifferenceModel(name, date1, date2) {
  this.name = name;
  this.date1 = date1;
  this.date2 = date2;
  this.time = this.addDifference(this.date1, this.date2, this.name);
};

dateDifferenceModel.prototype.addDifference = function addDifference(date1, date2, unitOfTime) {
  var difference = date1.diff(date2, unitOfTime) || undefined;
  date2.add(moment.duration(difference, unitOfTime));
  return difference;
};

module.exports = dateDifferenceModel;
