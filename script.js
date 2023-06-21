const addBtn = document.getElementById('add');

addBtn.addEventListener('click', ()=> addNewNote());

function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('note')

    note.innerHTML = `
    <div class="note">
    <div class="tools">
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>

    <div class="hidden"></div>
    <textarea></textarea>
    `;

    // delete button
    const deleteBtn = note.querySelector('.delete')
    // delete function
    deleteBtn.addEventListener('click', ()=> {
        note.remove();
    })

    document.body.appendChild(note);
}    