
export const burger_menubar = () =>{
      const iconMenu = document.querySelector(".menu-header__icon");
      if(iconMenu){
            const bodyMenu = document.querySelector(".menu-header__body");
            iconMenu.addEventListener("click", function (a){
                  document.body.classList.toggle('_lock');
                  iconMenu.classList.toggle('_active');
                  bodyMenu.classList.toggle('_active');
            })
      };
}