$("nav a").click(function(event){
    event.preventDefault();
    var dest=0;
    if($(this.hash).offset().top > $(document).height()-$(window).height()){
      dest=$(document).height()-$(window).height();
    }else{
      dest=$(this.hash).offset().top;
    }
    $('html,body').animate({scrollTop:dest}, 1000,'swing');
  });



  function aviso(){

    alert("Ainda não vendemos pelo site, porem ligue para nós informando  os itens desejaveis para que possamos montar um orçamento, para você. Telefone : (+55) 11 99999-9980")
  }