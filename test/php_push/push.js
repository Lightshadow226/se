$(function()
{
    updateValues();
      
    $('#envoyer').click(function() {
        var storylocation = $('#storylocation').val();
        var lastchapterplayed = $('#lastchapterplayed').val();
        
        $.post('push.php', {
            'storylocation': storylocation,
            'lastchapterplayed': lastchapterplayed
        }, updateValues);
    });

    function updateValues()
    {
    //   $('#conversation').load('ac.htm');
    //   $('#message').val('');
        $('#storylocation').focus();
    }
      
    // setInterval(updateValues, 4000);
});