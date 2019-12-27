const fs= require('fs')
const chalk=require('chalk')
const addNote= (title,body)=>{
const notes=loadNotes()
const dupicateNotes= notes.filter((note)=>note.title===title)
const dupicateNote= notes.find((note)=>note.title===title)
if(!dupicateNote){
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

const loadNotes= ()=>{
    try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
}
catch(e){
    return []
}
}

const removeNote=(title)=>{
    const notes=loadNotes()
    const noteToKeep=notes.filter((note)=> note.title!==title)
    if(notes.length>noteToKeep.length){
        saveNotes(noteToKeep)
        console.log(chalk.green.inverse('Note removed successfully'))
    }
    else{
        console.log(chalk.red.inverse('No matching notes found'))
    }
    
    console.log()

}
const listNotes =()=>{
    console.log(chalk.blue.inverse('Here are your notes:'))
    const notes= loadNotes()
    notes.forEach(element => {console.log(element.title)
        
    });

}
const readNote=(title)=>{
    const notes=loadNotes()
    const noteRead=notes.find((note)=>note.title===title)
    if(noteRead){
        console.log(chalk.inverse(noteRead.body))
    }
    else{
        console.log(chalk.red.inverse('no note found with that title'))
    }
}
module.exports={
   
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote: readNote
}
