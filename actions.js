// this function gets pictures from instagram and displays them on the webpage

   

var $ = jQuery

//ajax query to instagram data's
$.ajax({

      type: "GET",
      async: true,
      //instagram API to fetch  the profile details, replace the pro__googler with your insta username. 
      url: "https://www.instagram.com/pro__googler/?__a=1",
      dataType: 'json',
      success: function(data){

        var pictures = data.graphql.user.edge_owner_to_timeline_media.edges

     //creating bootstrap carousel and set profile pic as active element
        $('#carrusel').append($('<div class="carousel-item active "><img class="d-block w-100" src='  +data.graphql.user.profile_pic_url_hd + '></div>'));

     for ( i=0 ; i< pictures.length; i++){
       
     //creating bootstrap carousel and set instagram posts as carousel items

            $('#carrusel').append($('<div class="carousel-item "><img class="d-block w-100" src='  + pictures[i].node.display_url + '></div>'));
            $('.carousel').carousel();
 
        
    

    }

      //use should get the complete profile data's
      console.log(data.graphql.user)



      }


})