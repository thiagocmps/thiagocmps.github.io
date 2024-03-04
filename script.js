document.getElementById("addNote").addEventListener("click", function() {
    const noteInput = document.getElementById('noteInput');
    const noteList = document.getElementById('noteList');

    if (noteInput.value.trim() !== '') {
        const newNote = document.createElement('li');
        newNote.textContent = noteInput.value;
        noteList.appendChild(newNote);
        noteInput.value = '';
    }

});
    