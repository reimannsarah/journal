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
};

export function Entry (title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function() {
  const bodyArray = this.body.split(" ");
  return bodyArray.length;
};

Entry.prototype.countVowels = function() {
  let vowelCount = 0;
  const bodyArray = this.body.replace(/[^a-z]/gi, "").split("");
  for (let i = 0; i < bodyArray.length; i ++) {
    if (bodyArray[i].match(/[aeiou]/ig)) {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

Entry.prototype.countConsonants = function() {
  let consonantCount = 0;
  const bodyArray = this.body.replace(/[^a-z]/gi, "").split("");
  for (let i = 0; i < bodyArray.length; i ++) {
    if (bodyArray[i].match(/[aeiou]/ig)) {
      consonantCount += 0;
    }else {
      consonantCount +=1;
    }
  }
  return consonantCount;
};

Entry.prototype.getTeaser = function() {
  let firstEight = [];
  const bodyArray = this.body.split(" ");
  for (let i = 0; i < 8; i ++) {
    firstEight.push(bodyArray[i]);
  }
  return firstEight.join(" ").toString();
};