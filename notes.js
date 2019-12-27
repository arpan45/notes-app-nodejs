const fs= require('fs')
const chalk=require('chalk')
const getNotes= function(){
return "I am learning node JS"
}
const addNote= function(title,body){
const notes=loadNotes()
const dupicateNotes= notes.filter(function(note){
    return note.title===title
})
if(dupicateNotes.length===0){
    notes.push(
        {
            title: title,
            body: body
        }
    )
    saveNotes(notes)
    console.log(chalk.green.inverse('note saved!'))
}
else{
    console.log(chalk.red.inverse('Title is taken!'))
}

}

const saveNotes= function(notes){
const dataJSON= JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes= function(){
    try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
}
catch(e){
    return []
}
}

const removeNote=function(title){
    const notes=loadNotes()
    const noteToKeep=notes.filter(function(note){
        return note.title!==title
    })
    if(notes.length>noteToKeep.length){
        saveNotes(noteToKeep)
        console.log(chalk.green.inverse('Note removed successfully'))
    }
    else{
        console.log(chalk.red.inverse('No matching notes found'))
    }
    
    console.log()

}
module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
