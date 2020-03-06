(function(window) {
$("#progressbarTWInput").change(function(){
  $("#preview_progressbarTW_imgs").html(""); // 清除預覽
  readURL(this);
});
 readURL=function(input){
  const file = document.querySelector('#progressbarTWInput').files[0]
	URL.createObjectURL(file)
  if (input.files && input.files.length >= 0) {
    for(var i = 0; i < input.files.length; i ++){ 
      var reader = new FileReader();
      reader.onload = function (e) {
       var img = $("<img width='300' height='200' margin-right='50px'>")
        .attr('src', e.target.result)
        .on({
          'click': function() {     
            download(e.target.result,"download.jpg","image/jpg");
          }       
         })
        .hover(function(){
           $(this).css('cursor','grab') .width(400)
         }, function(){
           $(this).width(300)
        })    
         $("#preview_progressbarTW_imgs").append(img);
      }
      reader.readAsDataURL(input.files[i]);
    }
  }else{
     var noPictures = $("<p>目前沒有圖片</p>");
     $("#preview_progressbarTW_imgs").append(noPictures);
  }
}
})(window);