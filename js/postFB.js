/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// APP ID: 1985947748355171

//APP SECRET : abe30c74873ad401bdcc8ab27fae7fa7

FB.init({
    appId            : '1985947748355171',
    autoLogAppEvents : true,
    status           : true,
    xfbml            : true
  });



FB.ui({
  method: 'feed',
  link: 'https://developers.facebook.com/docs/',
  caption: 'An example caption',
}, function(response){});