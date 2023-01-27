import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps
    this.render()
    this.addListeners()
  }
  render() {
    this.elem = createElement(`
  
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
    `)
    // Количество элементов span внутри элемента с классом slider__steps должно соответствовать количеству шагов из свойства steps объекта, переданного в момент создания слайдера.

    let sliderSteps = this.elem.querySelector(".slider__steps")
    let newSpan = `<span></span>`
    this.newSpan.classList.add("slider__step-active")
    this.sliderSteps.append(newSpan)
    while (sliderSteps.length <= this.steps) {
      this.sliderSteps.insertAdjacentHTML("beforeEnd", `<span></span>`)
  }
// или так
      // let sliderSteps = this.elem.querySelector(".slider__steps")
        
      //   let newSpan = `<span></span>`
      //   this.sliderSteps.append(newSpan)
      //   for (let i = 1; i = steps - 1; i++) {
      //       this.sliderSteps.insertAdjacentHTML("beforeEnd", `<span></span>`)
      //   }

  
  


  }
  addListeners() {
    this.elem.addEventListener('click', (event) => {
        //Записать новое значение внутрь элемента с классом slider__value. Визуально выделить шаг на слайдере, добавив класс slider__step-active элементу span
        // движение ползунка и получение значения сегмента в процентах
              let left = event.clientX - this.elem.getBoundingClientRect().left;
              let leftRelative = left / this.elem.offsetWidth;
              let segments = this.steps - 1;
              let approximateValue = leftRelative * segments; 
              let value = Math.round(approximateValue); 
              let valuePercents = value / segments * 100;
              let sliderValue = this.elem.querySelector("slider__value");
              this.sliderValue.textContent = value;
              this.sliderSteps[value].classList.add('slider__step-active');


              this.elem.dispatchEvent (new CustomEvent('slider-change', { 
                    detail: this.value,
                    bubbles: true
                }))
     
        
     //    поменять положение ползунка расширить закрашенную область в процентах
        let thumb = this.elem.querySelector('.slider__thumb');
        let progress = this.elem.querySelector('.slider__progress');

         thumb.style.left = `${this.valuePercents}%`;
         progress.style.width = `${this.valuePercents}%`;

        
       
     })

 }
 


}
