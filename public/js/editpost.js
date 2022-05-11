window.addEventListener('load', function() {
    document.getElementById('form-button').addEventListener('click', function() {
        jQuery.ajax({
            url: '/api/projects/' + jQuery("#form-id").val(),
            type: 'put',
            data: JSON.stringify({ name: jQuery("#form-title").val(), description: jQuery("#form-content").val(), needed_funding: jQuery("#form-funding").val()}),
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

    document.getElementById('delete-button').addEventListener('click', function() {
        jQuery.ajax({
            url: '/api/projects/' + jQuery("#form-id").val(),
            type: 'delete',
            success: function() {
                //login success send to my dashboard
                document.location = '/Dashboard';
            },
            error: function(xhr, status, error) {
                alert('Error deleting Post! Contact Support');
            }
        });
    });
});