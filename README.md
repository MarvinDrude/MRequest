# MRequest
A lightweight libary for ajax without jQuery

Usage:
```JavaScript

var getJSON = MReq.getJSON;
var open = MReq.open;

getJSON({
    url: "test.php",
    success: function(data) {
        //Successfully got JSON obejct from backend
        console.log(data);

    },
    error: function() {
        console.log("Something went wrong");
    }
});

open({
    type: "POST",
    url: "test.php",
    data: "username=Marvin&password=sujuk",
    success: function(data) {
        console.log(data);
    },
    error: function() {
        console.log("Something went wrong");
    }
});

```
