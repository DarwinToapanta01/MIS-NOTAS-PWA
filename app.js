// Lógica para añadir y mostrar notas 

function addNoteCard(title, text) {
    const container = document.getElementById('notes-container');
    const safeTitle = title ? title : 'Sin título';
    const cardHTML = `
    <div class="mdl-card mdl-shadow--2dp" style="width: 100%; margin-bottom: 16px; position: relative;">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">${safeTitle}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        ${text}
      </div>
      <div class="mdl-card__actions" style="text-align: right;">
        <button class="mdl-button mdl-js-button mdl-button--icon mdl-button--accent delete-btn" title="Eliminar nota">
          <i class="material-icons">delete</i>
        </button>
      </div>
    </div>
  `;
    container.insertAdjacentHTML('beforeend', cardHTML);

    // Agregar evento al botón eliminar
    const lastCard = container.lastElementChild;
    const deleteBtn = lastCard.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        lastCard.remove();  // Elimina la tarjeta
        showSnackbar('Nota eliminada correctamente');
    });
}


document.getElementById('save-note-btn').addEventListener('click', function (e) {
  e.preventDefault();
  const titleInput = document.getElementById('note-title');
  const textarea = document.getElementById('note-text');
  const title = titleInput.value.trim();
  const text = textarea.value.trim();
  if (text) {
    addNoteCard(title, text);
    //limpiar los campos para nueva nota
    textarea.value = '';
    textarea.parentElement.classList.remove('is-dirty');
    titleInput.value = '';
    titleInput.parentElement.classList.remove('is-dirty');
    showSnackbar('Nota guardada correctamente');
  } else {
    showSnackbar('Escribe una nota antes de guardar');
  }
});

function showSnackbar(message) {
    var snackbarContainer = document.querySelector('#snackbar');
    snackbarContainer.MaterialSnackbar.showSnackbar({ message: message });
}

// Registro del Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('service-worker.js');
    });
}
