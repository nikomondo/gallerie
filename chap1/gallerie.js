var gDatas ={};
  
   $.getJSON("gallerie.json", init );
   
   function init (obj){
   gDatas = obj;
   createGallerie();    
   }
   function createGallerie() {
//    console.log(gDatas);
var gallerie = $('<div>')
gallerie.attr('id', 'gallerie')
var ruban = $('<div>') 
ruban.attr('id','ruban')
var ecran = $('<div>')
ecran.attr('id','ecran')
    gallerie.append(ruban)
    gallerie.append(ecran)
    $('body').append(gallerie)
    $.each(gDatas, function (index, val) {
        var img = $('<img>') 
         img.attr("src","../expos/" + val.file)
         img.attr("width","200")
         img.attr("height","133")
         ruban.append(img)
    });   
   } 
    
