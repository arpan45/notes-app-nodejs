const chalk = require('chalk')
const yargs= require('yargs')


const notes=require('./notes.js')

yargs.command({
command:'add',
describe: 'add a note',
builder:{
    title:{
        describe:'Note Title',
        demandOption: true,
        type: 'string'
    },
    body:{
        describe:'Note Body',
        demandOption: true,
        type:'string'
    }
},
handler(argv){
    notes.addNote(argv.title,argv.body)
}
})
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe:'show notes',
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command:'read',
    describe:'Reading List',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()