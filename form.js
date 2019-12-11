
$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success') 
        { 
            alert("beskeden blev sendt!");
            document.forms["reused_form"].reset();
        }
        else { alert("error: din besked kunne ikke blive sendt. Send beskeden til haidar@haidar.dk via email."); }
    }

	$('#reused_form').submit(function(e)
    {
        e.preventDefault();
        $form = $(this);
        $.ajax({
            type: "POST",
            url: 'handler.php',
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: 'json' 
        });
    });	
});
