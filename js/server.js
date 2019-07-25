var serverLink = $("a#server")

var username;

var starArray = document.querySelectorAll(".star");
var score = 0;

var isClicked = false;
var isHovering = false;

$(document).ready(function () {
    Update();

    $(starArray).mouseenter(hover);
    $(starArray).mouseleave(stopHover);
    $(starArray).click(click);
    console.log(score);
});

function UploadToServer() {
    $(serverLink).attr('href', "http://dreamlo.com/lb/DU5kMRMYlU2rj7y5ClaDgwEASKyhRSgU2hRV10WrZOiw/add/" + username + "/" + score);
}

function Update() {
    username = $('#name').val();
    setTimeout(Update, 100);
}

function hover() {
    isHovering = true;
    foundIndex = false;
    for (var i = 0; i < starArray.length; i++) {
        if (!foundIndex) {
            $(starArray[i]).removeClass('far');
            $(starArray[i]).addClass('fas');

            $(starArray[i]).css({
                color: "rgba(245, 245, 245, 0.5)"
            });
        } else {
            starArray[i].classList.remove('fas');
            starArray[i].classList.add('far');
        }

        if (starArray[i] == this) {
            foundIndex = true;
        }
    }
}

function returnHover()
{
    if(!isHovering)
    {
        for(let i = 0; i < starArray.length; i++){
            let star = starArray[i];
            if(star === this){
                foundIndex = true;
            }
            $(star).css("color", "rgba(245, 245, 245, 1");
            //console.log(`The score is: ${score}`);
            $(star).removeClass("fas");
            $(star).addClass("far");
            if(i+1 <= score){
                $(star).removeClass("far");
                $(star).addClass("fas");
            }
        }
    }
}

function stopHover() {
    if (isClicked) {
        isClicked = false;
        return;
    }

    isHovering = false;
    setTimeout(returnHover, 250);

    
    // foundIndex = false;
    // for (var i = 0; i < starArray.length; i++) {
    //     if (starArray[i] == this) {
    //         foundIndex = true;
    //     }

        
    // }
    // if (foundIndex) {
    //     console.log(`Score stopHover: ${score}`);
    //     for (var j of starArray) {
    //         $(j).css({
    //             color: "rgba(245, 245, 245, 1)"
    //         });
    //         if(i + 1 > score)
    //         {
    //             j.classList.remove('fas');
    //             j.classList.add('far');
    //         }else{
    //             j.classList.remove('far');
    //             j.classList.add('fas');
    //         }
    //     }
    // }
    // // } else {
    // //     if (i + 1 <= score) {
    // //         $(starArray[i]).css({
    // //             color: "rgba(245, 245, 245, 0.5)"
    // //         });
    // //         $(starArray[i]).removeClass('far');
    // //         $(starArray[i]).addClass('fas');
    // //     }
    // // }

    // if (!foundIndex) {
    //     console.log("!foundIndex")
    //     for (var i = 0; i < starArray.length; i++) {
    //         $(starArray[i]).css({
    //             color: "rgba(245, 245, 245, 1)"
    //         });
    //         starArray[i].classList.remove('fas');
    //         starArray[i].classList.add('far');
    //     }
    // }
}

function click() {
    isClicked = true;

    foundIndex = false;
    for (var i = 0; i < starArray.length; i++) {
        if (!foundIndex) {
            $(starArray[i]).removeClass('far');
            $(starArray[i]).addClass('fas');

            $(starArray[i]).css({
                color: "rgba(245, 245, 245, 1)"
            });

        } else {
            starArray[i].classList.remove('fas');
            starArray[i].classList.add('far');
        }
        if (starArray[i] == this) {
            foundIndex = true;
            score = i + 1;
        }

    }
}