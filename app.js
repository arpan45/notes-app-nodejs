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
handler: function(argv){
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
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe:'show notes',
    handler: function(){
        console.log('Here is the list')
    }
})
yargs.command({
    command:'read',
    describe:'Reading List',
    handler: function(){
        console.log('Reading the note')
    }
})
yargs.parse()