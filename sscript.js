


   const pop =  document.getElementById('pop'); 
   const close = document.getElementById('close');

      
        close.addEventListener('click', (d)=>{
                 
                        document.querySelector('.cover').classList.add ('hide');
                        document.querySelector('.pop_upBox').classList.add ('hide');
                         });


        pop.addEventListener('click', (e)=>{
                      
                    
                        document.querySelector('.cover').classList.add ('block');
                        document.querySelector('.pop_upBox').classList.add ('block');
            });




