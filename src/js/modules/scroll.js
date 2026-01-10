
export const scroll = () =>{
      window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const page = document.querySelector('.page');
            if(this.window.innerWidth > 1060){
                  if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                        page.classList.add('scrolled');
                  } else {
                        header.classList.remove('scrolled');
                        page.classList.remove('scrolled');
                  }
            }
      });
      const first_page_right__list = document.querySelector('.first-page-right__list');
      if (window.scrollY >= 0) {
            first_page_right__list.classList.add('_active');
      }
}
