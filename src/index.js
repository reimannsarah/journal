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
  let pVowels = document.createElement("p");
  let pConsonants = document.createElement("p");
  let pTeaser = document.createElement("p");
  pTitle.innerText = entry.title;
  pBody.innerText = entry.body;  
  journal.addEntry(entry);
  pWordCount.innerText = `Words: ${entry.countWords()}`;  
  pVowels.innerText = `Vowels: ${entry.countVowels()}`;
  pConsonants.innerText = `Consonants: ${entry.countConsonants()}`;
  pTeaser.innerText = `Teaser: ${entry.getTeaser()}`;
  div.append(pTitle, pBody, pWordCount, pVowels, pConsonants, pTeaser);
}

document.getElementById("submitEntry").addEventListener("click", handleEntryForm);
