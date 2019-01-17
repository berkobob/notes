const fs = require("fs");
/**
 * Returns all the notes in the notes file or an empty array
 *
 * @returns An array of notes
 */
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
};

/**
 * Writes array of notes to disk
 *
 * @param {*} array of note objects
 */
var saveNotes = notes => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body,
    };
    var duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = title => {
    var notes = fetchNotes();
    var note = notes.filter(note => note.title === title);
    return note[0];
};

var deleteNote = title => {
    var notes = fetchNotes();
    var len = notes.length;
    notes = notes.filter(note => note.title != title);
    saveNotes(notes);
    return len > notes.length;
};

var logNote = note => {
    console.log("---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote,
    logNote,
};
