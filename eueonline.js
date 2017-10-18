$(document).ready(function(){
            //Let's first setup the redirect
        function redirect(){
            window.location.assign('http://www.myanimeindo.net');
        }
            //which things we got to check
        function check(){
            if($('#creditid').length === 0){
                    redirect();
                }
                else if($('#creditlink').length === 0){
                    redirect();
                }
                if($('credits').length === 0){
                    redirect();
                }
                else if($('#creditlink').length === 0){
                    redirect();
                }
                else if($("#creditlink").attr("href") !== "http://www.myanimeindo.net"){
                    redirect();
                }
                else if($('#creditlink').text() !== "MyAnimeIndo"){
                    redirect();
                } 
            }
        //execute the function on page load
        check();
        //excute the function at the intervals of 5 seconds.
        setInterval(function () {check()}, 5000);
        });