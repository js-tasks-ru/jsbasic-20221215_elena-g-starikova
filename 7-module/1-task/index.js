import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor (categories) {
      this.categories = categories
      this.currentStepNumber = 0
      this.render()
      this.addListeners()
  }

  render () {
      // корневой элемент компонента имеет класс ribbon, содержащий элемент с классом ribbon__inner
      this.elem = createElement (`
     
      <div class="ribbon">
        
        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
    
        
        <nav class="ribbon__inner">
          
        </nav>
    
        
        <button class="ribbon__arrow ribbon__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
      `);
      // вёрстка ссылок на категорию с добавлением информации из объекта
      let links = this.categories.map(item => createElement (`
          <a href="#" class="ribbon__item" data-id="${categories.id}">${categories.name}</a>
      `)
      )
      this.sub('inner').append(...links);

  }

  addListeners () {
      //прокрутка по 350px при клике по кнопкам вперед, назад
      this.elem.addEventListener ('click', (event) => {
        if (event.target.closest('.ribbon__arrow_right')) {
          this.sub('inner').scrollTo(350, 0);
        }
        if (event.target.closest('.ribbon__arrow_left')) {
          this.sub('inner').scrollTo(-350, 0);
        }

        

       // скрыть кнопки переключения при крайних положениях меню  
       let scrollWidth = this.sub('inner').scrollWidth;
       let scrollLeft = this.sub('inner').scrollLeft;
       let clientWidth = this.sub('inner').clientWidth;
       
       let scrollRight = scrollWidth - scrollLeft - clientWidth;

        if(scrollLeft == 0) {
          this.sub("arrow_left").classList.toggle(visible);
        }

        if(scrollRight < 1) {
          this.sub("arrow_right").classList.toggle(visible);
        }

      })

        //выбор конкретной категории при клике на ссылку: отменить действие браузеа, удалить класс выбранный ранее & добавить пользовательское событие

        let selectedLink

        this.elem.addEventListener ('click', (event) => {
          let link = event.target.closest(".ribbon__item")

          if(link) {
            event.target.preventDefault();
            if (selectedLink) {
              selectedLink.classlist.remove("active");
            }
            selectedLink = link;
            selectedLink.classlist.add('active');

            let id = event.target.closest(`[data-id]`).dataset.id  
            this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
              detail: id,
              bubbles: true,
          }));
         }
       })
    
// сокращенная запись элемента
  sub(ref) {
      return this.elem.querySelector(`.ribbon__${ref}`);
    }

  }
}
