
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
            navigator.plugins.refresh(false);
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
	
    
    // Dialog                       
    $('#dialog').dialog({
            autoOpen: false,
            width: 600,
            buttons: {
                    "Ok": function() { 
                            $(this).dialog("close"); 
                            openDownloads();
                    }, 
                    "Cancel": function() { 
                            $(this).dialog("close"); 
                    } 
            }
    });
    
    // Dialog Link
    $('#dialog_link').click(function(){
            $('#dialog').dialog('open');
            return false;
    });
    
    //hover states on the static widgets
    $('#dialog_link, ul#icons li').hover(
            function() { $(this).addClass('ui-state-hover'); }, 
            function() { $(this).removeClass('ui-state-hover'); }
    );
	
	function openDownloads() {
		var url = "downloads.html" +
			"?uri="+encodeURIComponent(torrentLink)+
			"&referer="+encodeURIComponent(window.navigator.url)+
			"&title="+encodeURIComponent(document.title)
		var downloadWin = window.open(url,document.title,'height=300,width=750');
		if (window.focus) {downloadWin.focus()}
		return false;
	}
	
	function getDownloadUrl() {
        var baseBaseUrl = "http://littleshoot.s3.amazonaws.com/LittleShoot-";
        //var baseUrl = baseBaseUrl + "0994";
        var baseUrl = baseBaseUrl + "0.9992";
        if(/Windows/.test(navigator.userAgent)) {
            //return "http://cloudfront.littleshoot.org/LittleShoot-0993.exe";
            return baseUrl + ".exe";
        }
        else if (/Mac/.test(navigator.userAgent)) {
            return baseUrl + ".dmg";
        }
        else {
            return baseUrl + ".tgz";
        }
    }

	var torrentLink = $('a[title="Torrent File"]').attr('href');
	$('.toolbarLink').click(function(event) {
		if (lsLoader.hasLs()) {
			//popitup("http://www.littleshoot.org/downloadsDemo?" +
			openDownloads();
		} else {
			var $dialog = $('<div></div>').
				html('You need LittleShoot to download this file. Would you like to install it now?')
				.dialog({
					//autoOpen: false,
					title: 'Install Torrent Downloader',
					modal: true,
					buttons: {
						"OK": function() {
							$( this ).dialog( "close" );
							window.location.href = getDownloadUrl();
						},
						Cancel: function() {
							$( this ).dialog( "close" );
						}
					}
				});

			//alert("LittleShoot not found...");
			// TODO: Call installer and scan for LittleShoot...
			
			// Continually check for an install.
			var intervalId = window.setInterval(function() {
				console.info("Checking...");
				if (lsLoader.hasLs()) {
					//alert("Found LittleShoot!!");
					window.clearInterval(intervalId);
					//$('#dialog').html("Great - your torrent downloader is installed! Would you like to start downloading<br><br>'"+document.title+"'<br><br> now?");
					//$('#dialog').dialog('open');
					
					var $dialog = $('<div></div>').html("Great - your torrent downloader is installed! Would you like to start downloading<br><br>'"+document.title+"'<br><br> now?")
					.dialog({
						//autoOpen: false,
						title: 'Download File?',
						modal: true,
						buttons: {
							"OK": function() {
								$( this ).dialog( "close" );
								openDownloads();
							},
							Cancel: function() {
								$( this ).dialog( "close" );
							}
						}
					});
					// We can only open a popup window here in conjunction
					// with a user click. So we notify the user LittleShoot
					// is installed and ask if they want to start downloading
					// their file.
					//var response = window.confirm("Great - your torrent downloader is installed! Would you like to start downloading "+document.title+" now?");
					//if (response == true) {
					//	openDownloads();
					//}
				}
			}, 2000);
		}
		event.stopPropagation();
		event.preventDefault();
		return false;
	});
});
