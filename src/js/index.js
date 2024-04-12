
const itens = document.querySelectorAll(".item");

itens.forEach(function(item){

    item.addEventListener("click", function (){
        const itemAtivoAtualmente = document.querySelector(".ativo");
        
        if(itemAtivoAtualmente){
            itemAtivoAtualmente.classList.remove("ativo");
        }
        
        item.classList.add("ativo");
    })
});

    
