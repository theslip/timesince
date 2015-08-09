app.dateDifference = function dateDifference(name, date1, date2) {
  this.name = name;
  this.date1 = date1;
  this.date2 = date2;
  this.time = this.addDifference(this.date1, this.date2, name);
};

app.dateDifference.prototype.addDifference = function addDifference(date1, date2, unitOfTime) {
  var difference = date1.diff(date2, unitOfTime);
  date2.add(moment.duration(difference, unitOfTime));

  return difference;
};

app.dateDifference.prototype.getName = function getName() {
  return this.name;
};

app.dateDifference.prototype.getTime = function getName() {
  return this.time;
};
