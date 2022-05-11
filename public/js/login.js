window.addEventListener('load', function() {
    let button = document.getElementById('login-button');
    button.addEventListener('click', function() {
        jQuery.ajax({
            url: '/api/users/login',
            type: 'post',
            data: JSON.stringify({email: jQuery("#form-email").val(), password: jQuery("#form-password").val()}),
            dataType: 'json',
            contentType: 'application/json',
            success: function() {
                //login success send to my dashboard
                document.location = '/Dashboard';
            },
            error: function(xhr, status, error) {
                alert('Bad Email or Password!');
            }
        });
    });
});