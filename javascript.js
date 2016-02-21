var accessToken = '179432880.1677ed0.4b80d0452ff44666a13c21148740f620';

$.ajax({
    url: 'https://api.instagram.com/p/4x_u2rLQYMT5I_DvpgXHw6145F69P-BO_cx4o0/?taken-by=puj.png',
    dataType: 'jsonp',
    type: 'GET',
    data: {client_id: accessToken},
    success: function(data){
        console.log(data);
        for(x in data.data){
          $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
        }
    },
    error: function(data){
        console.log(data);
    }
});
