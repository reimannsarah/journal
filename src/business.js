export function Journal() {
  this.entries = {};
  this.currentId = 0;
}

Journal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Journal.prototype.addEntry = function(entry) {
  entry.id = this.assignId();
  this.entries[entry.id] = entry;
}

export function Entry (title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function() {
  const bodyArray = this.body.split(" ");
  return bodyArray.length;
}