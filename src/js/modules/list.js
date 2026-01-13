
export const list = () =>{
      const item = document.querySelectorAll('.working-process-bottom-item');
      document.querySelectorAll('.button-working-process').forEach(element => {
            element.addEventListener('click', function() {
                  const listItem = this.closest('.working-process-bottom__item');
                  const index = Array.from(listItem.parentNode.children).indexOf(listItem);
                  
                  this.classList.toggle("_active")
                  item[index].classList.toggle("style-white")
                  item[index].classList.toggle("style-green")
            });
      });
}