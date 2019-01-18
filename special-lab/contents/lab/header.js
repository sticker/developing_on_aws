<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(function() {
    $('a[href^="http"]:not([href*="' + location.hostname + '"])').attr('target', '_blank').attr('rel', 'noopener noreferrer');
})
</script>