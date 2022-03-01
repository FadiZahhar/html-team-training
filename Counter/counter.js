
let value = document.getElementById('value');
let increase = document.getElementById('increment');
let decrease = document.getElementById('decrement');
let reset = document.getElementById('reset');
let int = 0;

increase.addEventListener( 'click', function(){

      int += 1;
        value.innerHTML = int;
  
})

decrease.addEventListener('click', function(){

        int -= 1;
        value.innerHTML = int;
} )

reset.addEventListener('click', function(){
    
      int = 0 ;
      value.innerHTML = int;


      
})

