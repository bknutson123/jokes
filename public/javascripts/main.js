$(document).ready(function() {

    $('#generalprogrammingjokegenerator').click(function(event) {
        event.preventDefault();
        $.ajax({
            url: '/random_joke',
            type: 'GET',
            success: function(data) {
                console.log(data);
                var thisisstring = data.setup + "\n" + data.punchline;
                $('#punchline').html(thisisstring);
            },
            error: function() {
                $('div').html('Sorry, an error occurred with the api call');
            }
        });
    })
    $('#chucknorisjokegenerator').click(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/chucknoris_joke",
            type: "GET",
            success: function(data) {
                console.log(data);
                $('#punchline').html(data.value);
            },
            error: function() {
                $('div').html('Sorry, an error with the api call');
            }
        })
    })
    $('#dadjokegenerator').click(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/dad_joke",
            type: "GET",
            success: function(data) {
                console.log(data.attachments[0].text);
                $('#punchline').html(data.attachments[0].text);
            },
            error: function() {
                $('div').html('Sorry, an error with the api call');
            }
        })
    })
});