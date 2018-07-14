(function($) {
    $(function() {
        var $window = $(window),
            muted = false,
            $sectionHomeHeading = $('#section-home-heading');

        if (!Modernizr.touch) {

            /* Video background
             *******************************************/
            $('.video-bg').videobackground({
                videoSource: [
                    ['https://streamable.com/s/k8p5m/qhqoba', 'video/mp4']
                ],
                loop: true,
                resize: false,
                preload: true,
                autoplay: true,
                controls: false,
                loadedCallback: function() {
                    if (!muted) {
                        muted = true;
                        $(this).videobackground('mute');
                    }
                }
            });

            $('.video-bg').prop('muted', true);
        }

        /* Adjust position of programs images
         *******************************************/
        $window.on('resize.home', function() {
            var $images = $('.bg img'),
                offset = parseInt($('.bg').outerWidth() - $images.outerWidth()) / 2,
                left = Math.min(offset, 0);

            $images.css({
                'left': left
            })
        }).trigger('resize.home');
    });
})(jQuery);
