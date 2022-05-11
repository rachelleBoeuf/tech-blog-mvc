window.addEventListener('load', function() {
    jQuery.ajax({
        url: '/api/users/logout',
        type: 'post',
        success: function() {
            //login success send to my dashboard
            document.location = '/';
        },
        error: function(xhr, status, error) {
            alert('Logout failed... contact system administrator!');
        }
    });
});