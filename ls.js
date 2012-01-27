
lsLoader = {
            
    downloadPrompt : function () {
        CommonUtils.showConfirmDialog("LittleShoot Required", 
            "You need the LittleShoot plugin to use this site. " +
            "Would you like to install it now?", 
            CommonUtils.downloadInstaller);
    },
        
    p2pUrl : function (url, name) {
        if (!name) {
            name = CommonUtils.extractUriPath(url);
        }
        
        var p2pUrl = Constants.DOWNLOAD_URL + name + "?uri=";
        p2pUrl += encodeURIComponent(url);
        
        //console.info("P2P URL: "+p2pUrl);
        return p2pUrl;
    },
    
    loadNpapi : function() {
        var mimetype = navigator.mimeTypes["application/x-littleshoot"];
        if (mimetype) {
            var plugin = mimetype.enabledPlugin;
            if (plugin) {
                if (!$.browser.msie) {
                    console.info("Found LittleShoot!!");
                    //$("#lsEmbed").html('<embed type="application/x-littleshoot" pluginspage="http://www.littleshoot.org"></embed>');
                    //CommonUtils.littleShootNpapiCallback(true, 0.90);
                    //lsLoader.fadeLoading();
                    return true;
                } else {
                    return false;
                }
            } 
            else {
                console.warn("Found MIME type but not plugin for application/x-littleshoot");
                return false;
            }
        }
        else {
            return false;
        }
    },
    
    hasLs : function() {
        
        if ($.browser.msie) {
            try { 
                var ax = new ActiveXObject('Mozilla.PluginHostCtrl.1');
                $("#littleShootEmbed").html(
                    '<OBJECT ID="littleshoot" CLASSID="CLSID:0CC00AEB-7E95-4a80-8C29-ED90939FC99F" CODEBASE="axlittleshoot.cab#version=0,9,0,0" width="1" height="1"><PARAM name="type" value="application/x-bittorrent"/></OBJECT>');
                CommonUtils.littleShootNpapiCallback(true, 0.90);
                lsLoader.fadeLoading();
                return true;
            } catch (e) {
                console.info("LittleShoot not installed.");
                return false;
            }
        } 
        else if (navigator.plugins && navigator.plugins.length) {
            if (!lsLoader.loadNpapi()) {
                // 'false' here is for reload -- whether or not to reload
                // existing embed tags on the page.
                navigator.plugins.refresh(false);
                return lsLoader.loadNpapi();
            }
            else {
                return true;
            }
        }
        else {
            // No, so tell them so
            console.info("No plugin for application/x-littleshoot");
            return false;
        }
    }
};

/**
 * Auto-loading can be manually disabled, typically when we're performing
 * the check elsewhere.
 */
jQuery().ready(function() {
	var torrentLink = $('a[title="Torrent File"]').attr('href');
	$('.toolbarLink').click(function(event) {
		if (lsLoader.hasLs()) {
			window.location.href = torrentLink + "?referer="+
				encodeURIComponent(window.location.href);
		} else {
			alert("Install LittleShoot?");
		}
		event.stopPropagation();
		event.preventDefault();
		return false;
	});
});
