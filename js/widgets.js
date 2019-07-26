var releases = $(".lead");
var modelRelease = $("#model");

$(document).ready(function (){
    var origSize = $(modelRelease).css("fontSize");
    var origHeigh = $(modelRelease).css("height");
    var origMargin = $(modelRelease).css("marginBottom");

    console.log(origSize);
    console.log(origHeigh);

    $(releases).css({
        width: "auto"
    }); 

    releases.mouseenter(function (){
        $(this).css({
            fontSize: "30px",
            height: "70%"
        });

        var foundIndex = false;
        for(var i=0; i<releases.length; i++)
        {
            if(foundIndex == true)
            {
                $(releases[i]).css({
                    marginBottom: "20px"
                });
            }

            if(releases[i] == this)
            {
                foundIndex = true;
            }
        }
    });

    releases.mouseleave(function (){
        $(this).css({
            fontSize: origSize,
            height: origHeigh,
            marginBottom: origMargin
        });
    });

    $("#thanos").click(function(){
        console.log("You should have aimed for the head");
        theSnap();
    });
});

function theSnap()
{
    $('.unlucky').addClass("fade");
    $('.unlucky button').attr('onclick', '');
}
