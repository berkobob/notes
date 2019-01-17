const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const titleOptions = {
    describe: "Title of note",
    demand: true,
    alias: "t",
};
const bodyOptions = {
    describe: "The body of the note",
    demand: true,
    alias: "b",
};

const argv = yargs
    .command("add", "Add a new note", {
        title: titleOptions,
        body: bodyOptions,
    })
    .command("list", "List all notes")
    .command("read", "Read a note", {
        title: titleOptions,
    })
    .command("delete", "Remove a note", {
        title: titleOptions,
    })
    .help().argv;
command = argv._[0];

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note added:");
        notes.logNote(note);
    } else {
        console.log(
            `Error creating note title ${argv.title}. Probably a duplicate`,
        );
    }
} else if (command === "list") {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => {
        notes.logNote(note);
    });
} else if (command === "delete") {
    console.log(argv.title);
    var removed = notes.deleteNote(argv.title);
    var msg = removed
        ? `Note ${argv.title} was removed`
        : `Note ${argv.title} was not found`;
    console.log(msg);
} else if (command === "read") {
    note = notes.getNote(argv.title);
    if (note) {
        console.log("Note found:");
        notes.logNote(note);
    } else {
        console.log(`Note ${argv.title} not found`);
    }
} else {
    console.log("Command not recognised");
}

var a = notes.deleteNote("sec4");
