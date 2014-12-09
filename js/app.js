"use strict";

$(document).ready(function() {
   var mapElem = document.getElementById('map');
   var center = {
      lat: 47.599150,
      lng: -122.320049
   };

   var map = new google.maps.Map(mapElem, {
      center: center,
      zoom: 14
   });

    var infoWindow = new google.maps.InfoWindow();

    var marker = new google.maps.Marker({
               position: {
                  lat: 47.599150,
                  lng: -122.320049
               },
               map: map
            });

    google.maps.event.addListener(marker, 'click', function() {
               map.panTo(this.getPosition());

               var html = '<p>' + 'Wing Wah Bistro' + '</p>' ;


               infoWindow.setContent(html);
               infoWindow.open(map, this);
            });
   
    
   $(document).on('click', 'a[href*=#]', function(event) {
          var target = $(this).attr('href');
          event.preventDefault();
          $('html, body').animate({
            scrollTop: $(target).offset().top
          }, 1000);
       });
   $(function () {
  $('[data-toggle="popover"]').popover()
})

  });



    function validateComment() {
      if ($('#commentBody').val().trim().length == "") {
          $('#commentBody').addClass("invalid");
          return false;
      } else {
          $('#commentBody').removeClass("invalid");
          $('#submit').popover('hide');
          return true;
      }
  }
 


  angular.module('MenuItem', [])
   .controller('MenuItemController', function($scope) {


      $scope.items = menu;
      $scope.sortCol = 'price';


      $scope.sortBy = function(sortCol) {
         $scope.sortCol = sortCol;
      };

      $scope.isSortedBy = function(colName) {
         return $scope.sortCol == colName;
      };

   });


