/*
*   Created by Marvin Drude
*/

var MReq = { };

(function() {

    var getJSON = function(options) {

        open({
            "type": "GET",
            "url": options.url,
            "success": function(data) {

                options.success(JSON.parse(data));

            },
            "error": options.error,
            "data": options.data
        });



    }

    MReq.getJSON = getJSON;

    var open = function(options) {

        if(options.type == undefined) {
            console.log("Open only possible if type given.");
            return;
        }

        if(options.url == undefined) {
            console.log("Open only possible if url given.");
            return;
        }

        var req = new XMLHttpRequest();
        req.open(options.type, options.url, true);

        req.onload = function() {

            if(this.status >= 200 && this.status < 400) {

                if(options.success != undefined) {
                    options.success(this.response);
                }

            } else {

                if(options.error != undefined) {

                    options.error();

                }

            }

        }

        req.onerror = function() {

            if(options.error != undefined) {

                options.error();

            }

        }

        if(options.data != undefined) {
            req.send(options.data);
        } else {
            req.send();
        }

    }

    MReq.open = open;

})();
