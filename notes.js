const fs = require("fs");
const path = require("path")
const readlineSync = require("readline-sync");
const {v4:uuidv4}  = require("uuid");


const notesFilePath = path.join(__dirname,"notes.json")


function loadNotes(){
    if(!fs.existsSync(notesFilePath)){
        return []
    }
    try {
        const data =fs.readFileSync(notesFilePath,"utf-8");
        return JSON.parse(data)
    } catch (error) {
        console.log("Error loading notes: ",error) 
    }
}

function saveNotes(notes) {
    try {
        fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
    } catch (err) {
        console.error("Error saving notes:", err);
    }
}
