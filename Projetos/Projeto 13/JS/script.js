// Elementos
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");
const searchInput = document.querySelector("#search-input");
const exportBtn = document.querySelector("#export-notes");
const mode = document.querySelector("#mode-icon");

// Funções
function addNote(){
    const notes = getNotes();

    const noteObject = {
        id: generateId(),
        content: noteInput.value,
        fixed: false,
        color: ""
    };

    const noteElement = createNote(noteObject.id, noteObject.content);
    notesContainer.appendChild(noteElement);

    notes.push(noteObject);

    saveNotes(notes);
    noteInput.value = "";
    noteInput.focus();
}

// Salvando na localStorage
function saveNotes(notes){
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Puxando as notas da Local Storage
function getNotes(){
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    const orderedNotes = notes.sort((a, b) => a.fixed > b.fixed ? -1 : 1); 

    return orderedNotes;
}

// Exibindo as notas
function showNotes(){
    cleanNotes();
    getNotes().forEach((note) => {
        const noteElement = createNote(note.id, note.content, note.fixed, note.color);
        notesContainer.appendChild(noteElement);
    })
}

// Limpando as notas
function cleanNotes(){
    notesContainer.replaceChildren([]);
}

function createNote(id, content, fixed, color){
    const element = document.createElement("div");
    element.classList.add("note");
    const textarea = document.createElement("textarea");
    textarea.value = content;
    textarea.placeholder = "Adicione algum texto...";
    element.appendChild(textarea);

    // Marcador com cores
    const colorSelector = document.createElement("select");
    colorSelector.classList.add("select-color");

    const firstOption = document.createElement("option");
    firstOption.selected = true;
    firstOption.innerText = "Sem cor";
    colorSelector.appendChild(firstOption);
    const yellow = document.createElement("option");
    yellow.value = "yellow";
    yellow.innerText = "Amarelo";
    colorSelector.appendChild(yellow);
    const blue = document.createElement("option");
    blue.value = "blue";
    blue.innerText = "Azul";
    colorSelector.appendChild(blue);
    const red = document.createElement("option");
    red.value = "red";
    red.innerText = "Vemelho";
    colorSelector.appendChild(red);
    const green = document.createElement("option");
    green.value = "green";
    green.innerText = "Verde";
    colorSelector.appendChild(green);
    element.appendChild(colorSelector);

    // Evento das cores
    colorSelector.addEventListener("change", (e) => {
        const colorValue = e.target.value;
        toggleColor(id, colorValue);
        console.log(element);
    })

    // Troca de classes das cores
    switch(color) {
        case "yellow":
            element.classList.add("yellow");
            yellow.selected = true;
            element.classList.remove("blue");
            element.classList.remove("red");
            element.classList.remove("green");
            break;
        case "blue":
            element.classList.add("blue");
            blue.selected = true;
            element.classList.remove("yellow");
            element.classList.remove("red");
            element.classList.remove("green");
            break;
        case "red":
            element.classList.add("red");
            red.selected = true;
            element.classList.remove("yellow");
            element.classList.remove("blue");
            element.classList.remove("green");
            break;
        case "green":
            element.classList.add("green");
            green.selected = true;
            element.classList.remove("yellow");
            element.classList.remove("blue");
            element.classList.remove("red");
            break;
        default:
            break;
    }

    const pinIcon = document.createElement("i");
    pinIcon.classList.add(...["bi", "bi-pin"]);
    element.appendChild(pinIcon);

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add(...["bi", "bi-x-lg"]);
    element.appendChild(deleteIcon);

    const duplicateIcon = document.createElement("i");
    duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"]);
    element.appendChild(duplicateIcon);

    if(fixed){
        element.classList.add("fixed");
    }

    // Evento de fixar
    element.querySelector(".bi-pin").addEventListener("click", () => {
        toggleFixNote(id);
    })

    // Evento de deletar
    element.querySelector(".bi-x-lg").addEventListener("click", () => {
        deleteNote(id, element);
    })

    // Evento de copiar
    element.querySelector(".bi-file-earmark-plus").addEventListener("click", () => {
        copyNote(id);
    })

    element.querySelector("textarea").addEventListener("keyup", (e) => {
        const noteContent = e.target.value;;

        updateNote(id, noteContent);
    })

    return element;
}

function toggleColor(id, color) {
    const notes = getNotes();

    const targetNotes = notes.filter((note) => note.id === id)[0];
    targetNotes.color = color;

    saveNotes(notes);
    showNotes()
}

// Função para atualizar as notas
function updateNote(id, newContent){
    const notes = getNotes();

    const targetNotes = notes.filter((note) => note.id === id)[0];
    targetNotes.content = newContent;

    saveNotes(notes);
}

// Função para deletar
function deleteNote(id, element){
    const notes = getNotes().filter((note) => note.id !== id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}

// Função para copiar
function copyNote(id){
    const notes = getNotes();

    const targetNotes = notes.filter((note) => note.id === id)[0];

    const noteObject = {
        id: generateId(),
        content: targetNotes.content,
        fixed: false,
        color: targetNotes.color
    }

    const noteElement = createNote(noteObject.id, noteObject.content, noteObject.fixed, noteObject.color,);
    notesContainer.appendChild(noteElement);

    notes.push(noteObject);
    saveNotes(notes);
}

// Função para fixar
function toggleFixNote(id){
    const notes = getNotes();

    const targetNotes = notes.filter((note) => note.id === id)[0];
    targetNotes.fixed = !targetNotes.fixed;

    saveNotes(notes);
    showNotes()
}

function generateId(){
    return Math.floor(Math.random() * 5000);
}

// Função de busca
function searchNotes(search){
    const searchResults = getNotes().filter((note) => {
        return note.content.includes(search)
    })

    if(search !== ""){
        cleanNotes();
        searchResults.forEach((note) => {
            const noteElement = createNote(note.id, note.content, note.fixed);
            notesContainer.appendChild(noteElement);
        })
        return;
    }

    cleanNotes();
    showNotes();
}

// Função para exportar as notas
function exportData(){
    const notes = getNotes();

    // separa o dado por , quebra linha por \n
    const csvString = [
        ["ID", "Conteúdo", "Fixado?"],
        ...notes.map((note) => [note.id, note.content, note.fixed]),
    ].map((e) => e.join(",")).join("\n");
    console.log(csvString);

    const element = document.createElement("a");

    element.href = "data:text/csv;charset=utf-8," + encodeURI(csvString);

    element.target = "blank";

    element.download = "notes.csv";

    element.click();
}

// Eventos
addNoteBtn.addEventListener("click", () => addNote());

searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;
    searchNotes(search);
})

noteInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        addNote();
    }
})

exportBtn.addEventListener("click", () => {
    exportData();
})

// Mudando o estilo do site
mode.addEventListener("click", () => {
    const body = document.body;
    if(mode.classList.contains("bi-lightbulb-off")){
        mode.classList.remove("bi-lightbulb-off");
        mode.classList.add("bi-lightbulb-fill");
        body.classList.add("light-on");
        body.classList.remove("light-off");

        return;
    }
    mode.classList.remove("bi-lightbulb-fill");
    mode.classList.add("bi-lightbulb-off");
    body.classList.add("light-off");
    body.classList.remove("light-on");

});

// Inicialização
showNotes();