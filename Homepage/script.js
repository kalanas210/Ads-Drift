const sections = document.querySelectorAll('.reveal_feature');

sections.forEach((section) => {

   window.addEventListener("load",eventListener);
   window.addEventListener("scroll",eventListener);

   function eventListener(){
    let windowHeight = window.innerHeight;
    let sectionRectTop = section.getBoundingClientRect().top;

    if(sectionRectTop<windowHeight){
        section.classList.add("active");
    }
   }

   /* ------------------------------------------------------- Revealing Elements one by one on Scrolling   ----------------------------------------- */
   window.addEventListener("scroll" , () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal,index) => {
            if(section.classList.contains("active")){
                const delay = 500;

                setTimeout(() => {
                    reveal.classList.add("active");
                } , index * delay);
            }
        });
   }); 

   /* ------------------------------------------------------- Revealing Elements one by one on scroll revealing point   ----------------------------------------- */

  /* window.addEventListener("scroll" , () =>{
    let reveals = section.querySelectorAll(".reveal");

    reveals.forEach((reveal,index) => {
        let windowHeight = window.innerHeight;
        let revealRectTop = reveal.getBoundingClientRect().top;
        let revealpoint = -250;

        if(revealRectTop < windowHeight - revealpoint){
            const delay =  600;

            setTimeout(() => {
                reveal.classList.add("active");
            } , index * delay);
        }
    });
  }); */

/* ----------------------------------------------------------------------------------------------------- */

   window.addEventListener("load" , () => {
    let reveals = section.querySelectorAll(".reveal");

    reveals.forEach((reveal,index) => {
        let windowHeight = window.innerHeight;
        let revealRectTop = reveal.getBoundingClientRect().top;

        if(revealRectTop < windowHeight){
            const delay =  500;

            setTimeout(() => {
                reveal.classList.add("active");
            } , index * delay);
        }
    });
   });
});

