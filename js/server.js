var serverLink = $("a#server")

var username;

var starArray = document.querySelectorAll(".star");
var score;


$(document).ready(function () {
    Update();

    // $(starArray).mouseenter(hover);
    // $(starArray).mouseleave(stopHover);
    $(starArray).click(click);
});

function UploadToServer() {
    $(window).attr('location', "http://dreamlo.com/lb/DU5kMRMYlU2rj7y5ClaDgwEASKyhRSgU2hRV10WrZOiw/add/" + username + "/" + score);
}

function Update() {
    username = $('#name').val();
    setTimeout(Update, 100);
}

// function hover() {
//     foundIndex = false;
//     for (var i = 0; i < starArray.length; i++) {
//         if (!foundIndex) {
//             $(starArray[i]).removeClass('far');
//             $(starArray[i]).addClass('fas');

//             $(starArray[i]).css({
//                 color: "rgba(245, 245, 245, 0.5)"
//             });
//         } else {
//             starArray[i].classList.remove('fas');
//             starArray[i].classList.add('far');
//         }

//         if (starArray[i] == this) {
//             foundIndex = true;
//         }
//     }
// }

// function stopHover() {
//     foundIndex = false;
//     for (var i = 0; i < starArray.length; i++) {
//         if (starArray[i] == this) {
//             foundIndex = true;
//         }

//         if (foundIndex) {
//             $(starArray[i]).css({
//                 color: "rgba(245, 245, 245, 1)"
//             });
//             starArray[i].classList.remove('fas');
//             starArray[i].classList.add('far');
//         } else {
//             if (i + 1 > score) {
//                 $(starArray[i]).css({
//                     color: "rgba(245, 245, 245, 0.5)"
//                 });
//                 $(starArray[i]).removeClass('far');
//                 $(starArray[i]).addClass('fas');
//             }
//         }
//     }
// }

function click() {
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