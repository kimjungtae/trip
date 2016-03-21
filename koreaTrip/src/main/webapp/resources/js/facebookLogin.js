  

  //페이지 로드시 자동으로 호출할 함수
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  
  function loginCheck(snsUserId){
	  
  }
  

  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
       console.log('로그인 확인 ');
//       console.log(response.email);
        //console.log(response); // dump complete info
        var access_token = response.authResponse.accessToken; //get access token
        var user_id = response.authResponse.userID; //get FB UID
        facebookLogin();
       
        
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      // 페이스 북을 통해서 우리 사이트에 한번도 로그인 한적 없을경우
      // 페이스북을 통한 회원가입 창 유도
      // document.getElementById('status').innerHTML = 'Please log ' +
      //   'into this app.';
    
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      // 페이스북 로그인 되어 있지 않아 현재 상태 파악 불가
      // 페이스북 로그인 창 생성
//      FB.login(function(response) {
//
//          if (response.authResponse) {
//              console.log('로그인 되었습니다.');
//              //console.log(response); // dump complete info
//              access_token = response.authResponse.accessToken; //get access token
//              user_id = response.authResponse.userID; //get FB UID
//
//              FB.api('/me', function(response) {
//                  user_email = response.email; //get user email
//            // you can store this data into your database             
//              });
//
//          } else {
//              //user hit cancel button
//              console.log('User cancelled login or did not fully authorize.');
//
//          }
//      }, {
//          scope: 'public_profile,email,user_about_me'
//      });
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }


  
  
  

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '782182438593577',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use version 2.2
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };
  
function login(){
	
	FB.login(function(response) {
		if (response.authResponse) {
//          console.log('로그인 되었습니다.');
			//console.log(response); // dump complete info
			var pageAccessToken = response.authResponse.accessToken; //get access token
			var user_id = response.authResponse.userID; //get FB UID
			var user_email=null;
			
			FB.api('https://graph.facebook.com/v2.5/me?fields=id%2Cname%2Cemail&access_token='+pageAccessToken, 
					function(response) {
				console.log(response.email);
				userEmail = response.email; //get user email
				snsUserId = response.id;
				userName = response.name
				console.log(response);
				
				// you can store this data into your database             
			});
			facebookLogin();
//			location.href='/user/login?email='+userEmail+'&snsUserId='+snsUserId;
			
		} else {
			//user hit cancel button
			console.log('User cancelled login or did not fully authorize.');
			
		}
	}, {
		scope: 'public_profile,email,user_about_me'
	});
	
	
	
}
  


// $(document).ready(function() {
//   $.ajaxSetup({ cache: true });
//   $.getScript('//connect.facebook.net/ko_KR/sdk.js', function(){
//     FB.init({
//       appId: '{1098884940124016}',
//       cookie     : true,  // enable cookies to allow the server to access 
//                         // the session
//       xfbml      : true,  // parse social plugins on this page
//       version: 'v2.3' // or v2.0, v2.1, v2.2, v2.3
//     });     
//     // $('#loginbutton,#feedbutton').removeAttr('disabled');
//     // FB.getLoginStatus(function(response){
//     //   statusChangeCallback(response)
//     // });
//   });
// });


  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ko_KR/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  


