window.addEventListener('load', function() {
    let button = document.getElementById('form-button');
    button.addEventListener('click', function() {
        jQuery.ajax({
            url: '/api/projects/',
            type: 'post',
            data: JSON.stringify({name: jQuery("#form-title").val(), description: jQuery("#form-content").val(), needed_funding: jQuery("#form-funding").val()}),
            dataType: 'json',
            contentType: 'application/json',
            success: function() {
                //login success send to my dashboard
                document.location = '/Dashboard';
            },
            error: function(xhr, status, error) {
                alert('Error create new Post! Contact Support');
            }
        });
    });
});