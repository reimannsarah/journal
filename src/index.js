import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Journal, Entry } from './business.js';


export function handleEntryForm(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let journal = new Journal();
  let entry = new Entry(title, body);
  let div = document.getElementById("output");
  let pTitle = document.createElement("p");
  let pBody = document.createElement("p");
  let pWordCount = document.createElement("p");
  pTitle.innerText = entry.title;
  pBody.innerText = entry.body;  
  journal.addEntry(entry);
  pWordCount.innerText = entry.countWords();
  div.append(pTitle, pBody, pWordCount);
}

document.getElementById("submitEntry").addEventListener("click", handleEntryForm);
