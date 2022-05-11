window.addEventListener('load', function() {
    $(".project-container").click(function() {
        document.location = '/EditPost/' + $(this).data('id');
    });
});