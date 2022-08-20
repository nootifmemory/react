gapi.load("client", loadClient);

function loadClient() {
    gapi.client.setApiKey("AIzaSyBOd8BrYroRwuMNf9RTSCe8iHa3EQxIJGc");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() {
                execute();
            },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

function execute() {
    return gapi.client.youtube.search.list({
        "part": [
            "id",
            "snippet"
        ],
        "channelId": "UCZNTsLA6t6bRoj-5QRmqt_w",
        "maxResults": 3,
        "order": "date"
    }).then((response) => {
        var output = document.getElementsByClassName("md body")[0]
        let number = 1
        const { result } = response;
        result.items.forEach(item => {
            output.innerHTML += `         
                <div class="wrapper">
                <iframe id="vid${number}" width="100%" height="600" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <link rel="stylesheet" href="/youtube.css">
                </div>
                `;
            number++
        });
        /*Floating Code for Iframe Start*/
        if (jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"],iframe[src*="https://player.vimeo.com/"]').length > 0) {
            /*Wrap (all code inside div) all vedio code inside div*/
            jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').wrap("<div class='iframe-parent-class'></div>");
            /*main code of each (particular) vedio*/
            jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').each(function(index) {

                /*Floating js Start*/
                var windows = jQuery(window);
                var iframeWrap = jQuery(this).parent();
                var iframe = jQuery(this);
                var iframeHeight = iframe.outerHeight();
                var iframeElement = iframe.get(0);
                windows.on('scroll', function() {
                    var windowScrollTop = windows.scrollTop();
                    var iframeBottom = iframeHeight + iframeWrap.offset().top;
                    //alert(iframeBottom);

                    if ((windowScrollTop > iframeBottom - 150)) {
                        iframeWrap.height(iframeHeight);
                        iframe.addClass('stuck');
                        jQuery(".scrolldown").css({ "display": "none" });
                    } else {
                        iframeWrap.height('auto');
                        iframe.removeClass('stuck');
                    }
                });
                /*Floating js End*/
            });
        }
    });
}