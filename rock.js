$(document).ready(function(){
   var i=0, j=0;
    $('.rock').on('click', function(){
        $('.player').empty();
        // var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRwNEac28TRVSE2WXe-bR9LbK6vUg5RWas6w&usqp=CAU",
        //       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VwZE1I6u9rLyfEdUd5T_UDNgq59uWpWXHw&usqp=CAU",
        //       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYpNcASf39pMSoYrBLCgq1pdC1GXZywoUcCA&usqp=CAU"];

        var images= [
            {
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRwNEac28TRVSE2WXe-bR9LbK6vUg5RWas6w&usqp=CAU",
            "name":"rock pic1"
             },
             {
                "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VwZE1I6u9rLyfEdUd5T_UDNgq59uWpWXHw&usqp=CAU",
                "name":"rock pic2",  
             },
             {
                 "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYpNcASf39pMSoYrBLCgq1pdC1GXZywoUcCA&usqp=CAU",
                 "name":"rock pic3"
             }       
    ]


        var weapon = images[Math.floor(Math.random()*3)];
        console.log(weapon.name); 

        var item = $(this).clone().css({
            'height':'215px',
           'width':'212px',
            'border-radius':'14px' 
        })
        
        var imageName = $(this).attr('class')
        console.log(imageName)
        item.appendTo('.player')

        $('.computer').empty();
       
        var img = $('<img>');
        img.attr('src', weapon.url).appendTo('.computer').css({
            'height':'215px',
           'width':'212px',
            'border-radius':'14px' 
        })

        if(imageName == weapon.name){
            $('.info').text("Its a draw")
        }
         if(imageName == "rock pic1" && weapon.name == "rock pic2"){
                $('.info').text("AI Won");
              
         }
         if(imageName == "rock pic1" && weapon.name == "rock pic3"){
             $('.info').text("You won")
            
         }
         if(imageName == "rock pic2" && weapon.name == "rock pic1"){
             $('.info').text("You won")
         }
         if(imageName == "rock pic2" && weapon.name == "rock pic3"){
             $('.info').text("AI won")
         }
         if(imageName =="rock pic3" && weapon.name == "rock pic1"){
             $('.info').text("AI won")
         }
         if(imageName =="rock pic3" && weapon.name == "rock pic2"){
             $('.info').text("You won")
         }
       

         if(imageName == "rock pic1" && weapon.name == "rock pic3" || imageName == "rock pic2" && weapon.name == "rock pic1" || imageName =="rock pic3" && weapon.name == "rock pic2" ){
             i++;
             $('.p1').text(i);
             if(i==3){
                 
             }
         }

         if(imageName == "rock pic1" && weapon.name == "rock pic2" || imageName == "rock pic2" && weapon.name == "rock pic3"|| imageName =="rock pic3" && weapon.name == "rock pic1"){
             j++;
             $('.p2').text(j);
            //  if(j==3){
            //      alert ("Oops!! You have lost the game")
            //  }
         }    
    })
   
})