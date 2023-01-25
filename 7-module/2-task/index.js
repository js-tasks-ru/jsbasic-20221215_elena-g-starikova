import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.open();
    this.setTitle();
    this.setBody();
    this.close()
}

open () {
    let elem = createElement(`
    
    <div class="modal">
    
      <div class="modal__overlay"></div>
  
      <div class="modal__inner">
        <div class="modal__header">
        
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
  
          <h3 class="modal__title">
           
          </h3>
        </div>
  
        <div class="modal__body">
       
        </div>
      </div>
  
    </div>
    `);
    
    elem.classList.add(".is-modal-open");
}
// я бы modalTitle в innerHtML добавила, но по описанию задачи похоже так:
setTitle (modalTitle) {
    let titleItem = document.querySelector(".modal__title");
    titleItem = modalTitle
}
setBody () { 
    let modalBody = document.querySelector(".modal__body");
    
    modalBody.innerHTML = `<b>тут содержится тело модального окна</b>`
    
}
close () {

    this.modal.addEventListener("click", (event) => {
        let button = event.target.closest(".modal__close")
        if (button) {
            document.body.classList.remove(".is-modal-open")
        }
    })
    this.modal.addEventListener("keydown", modalClose, [once]);

    function modalClose (event) {
        if (event.code === 'Escape') {
            document.body.classList.remove(".is-modal-open")
        }
    }

}
}



