code live on twitch 

client.on('ready', function(){
    var ms = 40000 ;
    var setGame = ['Captain','-help'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
j = 1;
       }
        if( i == (setGame.length)-1 ){
            j = -1;
      }
       i = i+j;
        client.user.setGame(setGame[i],http://www.youtube.com);
}, ms);

});
       client.login("التوكن")
