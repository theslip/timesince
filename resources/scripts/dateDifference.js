app.dateDifference = function dateDifference(name, date1, date2) {
  this.name = name;
  this.date1 = date1;
  this.date2 = date2;
  this.time = this.addDifference(this.date1, this.date2, name);
};

app.dateDifference.prototype.addDifference = function addDifference(date1, date2, unitOfTime) {
  var difference = date1.diff(date2, unitOfTime) || undefined;
  date2.add(moment.duration(difference, unitOfTime));
  return difference;
};
