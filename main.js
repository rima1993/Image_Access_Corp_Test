$(document).ready(function () {
    var imagesContainer = $('#show-data');
    var images = [];
    var json_api = "https://jsonplaceholder.typicode.com/photos";
    var randomNumber = Math.floor(Math.random() * 25);

    for (i = 0; i < randomNumber; i++) {
        var obj = '<div class="col-sm-12 col-md-6 col-lg-4" id = "iph'+(i+1)+'">'+
        '<div class="card mb-4"><img class="card-img-top" id ="image" src="Placeholder.png" alt="Color Changing Light Bulb"></div></div>';
        obj.id = 'imgPlaceHolder'+(i+1);
        imagesContainer.append(obj);
    }
 
    $.getJSON(json_api, function (data) {
        for (i = 0; i < randomNumber; i++) {
            console.log(data[i].url);
            var url = data[i].url;
             
            // images.unshift(b64);
            function readFile() {
  
                if (this.files && this.files[0]) {
                  
                  var FR= new FileReader();
                  
                  FR.addEventListener("load", function(e) {
                    document.getElementById("img").src       = e.target.result;
                    document.getElementById("b64").innerHTML = e.target.result;
                  }); 
                  
                  FR.readAsDataURL( this.files[0] );
                }
                
              }
              
              document.getElementById("inp").addEventListener("change", readFile);
        }

        for (i = 0; i < randomNumber; i++) {
            var imgPlaceHolderTemp = document.getElementById("iph"+(i+1));
            var imageViews = imgPlaceHolderTemp.getElementsByClassName("card-img-top");
            
            // imageViews[0].src = null;
            function capture_image(){ 
                alert("capture_image");
                var p = webcam.capture();
                webcam.save();           
                alert("capture complete "+p); //getting true here
            
            
                 var img = canvas.toDataURL("image");
                var item_image = img.replace(/^data:image\/(png|jpg);base64,/, "") ; 
                alert("item_image"+item_image);
            }
            
        }
    });
});
