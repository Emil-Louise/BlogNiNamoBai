var reacted = false;
var like = false;
var heart = false;
var sad = false;
var angry = false;
var reacted1 = false;
var like1 = false;
var heart1 = false;
var sad1 = false;
var angry1 = false;
var reacted2 = false;
var like2 = false;
var heart2 = false;
var sad2 = false;
var angry2 = false;

function react(react) {
    switch (react.value) {
        case 'like':
            if (reacted == false && like == false || reacted == true && like == false) {
                document.getElementById('react').style.display = 'none';
                document.getElementById('reacted').style.display = 'block';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = true;
                heart = false;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'heart':
            if (reacted == false && heart == false || reacted == true && heart == false) {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'none';
                document.getElementById('reactedH').style.display = 'block';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = true;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'sad':
            if (reacted == false && sad == false || reacted == true && sad == false) {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'none';
                document.getElementById('reactedS').style.display = 'block';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = false;
                sad = true;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'angry':
            if (reacted == false && angry == false || reacted == true && angry == false) {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'none';
                document.getElementById('reactedA').style.display = 'block';
                like = false;
                heart = false;
                sad = false;
                angry = true;
                reacted = true;
            }
            else {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
    }
}

function react1(react) {
    switch (react.value) {
        case 'like':
            if (reacted1 == false && like1 == false || reacted1 == true && like1 == false) {
                document.getElementById('react1').style.display = 'none';
                document.getElementById('reacted1').style.display = 'block';
                document.getElementById('reactH1').style.display = 'block';
                document.getElementById('reactedH1').style.display = 'none';
                document.getElementById('reactS1').style.display = 'block';
                document.getElementById('reactedS1').style.display = 'none';
                document.getElementById('reactA1').style.display = 'block';
                document.getElementById('reactedA1').style.display = 'none';
                like1 = true;
                heart1 = false;
                sad1 = false;
                angry1 = false;
                reacted1 = true;
            }
            else {
                document.getElementById('react1').style.display = 'block';
                document.getElementById('reacted1').style.display = 'none';
                document.getElementById('reactH1').style.display = 'block';
                document.getElementById('reactedH1').style.display = 'none';
                document.getElementById('reactS1').style.display = 'block';
                document.getElementById('reactedS1').style.display = 'none';
                document.getElementById('reactA1').style.display = 'block';
                document.getElementById('reactedA1').style.display = 'none';
                like1 = false;
                heart1 = false;
                sad1 = false;
                angry1 = false;
                reacted1 = false;
            }
            break;
        case 'heart':
            if (reacted1 == false && heart1 == false || reacted1 == true && heart1 == false) {
                document.getElementById('react1').style.display = 'block';
                document.getElementById('reacted1').style.display = 'none';
                document.getElementById('reactH1').style.display = 'none';
                document.getElementById('reactedH1').style.display = 'block';
                document.getElementById('reactS1').style.display = 'block';
                document.getElementById('reactedS1').style.display = 'none';
                document.getElementById('reactA1').style.display = 'block';
                document.getElementById('reactedA1').style.display = 'none';
                like1 = false;
                heart1 = true;
                sad1 = false;
                angry1 = false;
                reacted1 = true;
            }
            else {
                document.getElementById('react1').style.display = 'block';
                document.getElementById('reacted1').style.display = 'none';
                document.getElementById('reactH1').style.display = 'block';
                document.getElementById('reactedH1').style.display = 'none';
                document.getElementById('reactS1').style.display = 'block';
                document.getElementById('reactedS1').style.display = 'none';
                document.getElementById('reactA1').style.display = 'block';
                document.getElementById('reactedA1').style.display = 'none';
                like1 = false;
                heart1 = false;
                sad1 = false;
                angry1 = false;
                reacted1 = false;
            }
            break;
        case 'sad':
            if (reacted1 == false && sad1 == false || reacted1 == true && sad1 == false) {
                document.getElementById('react1').style.display = 'block';
                document.getElementById('reacted1').style.display = 'none';
                document.getElementById('reactH1').style.display = 'block';
                document.getElementById('reactedH1').style.display = 'none';
                document.getElementById('reactS1').style.display = 'none';
                document.getElementById('reactedS1').style.display = 'block';
                document.getElementById('reactA1').style.display = 'block';
                document.getElementById('reactedA1').style.display = 'none';
                like1 = false;
                heart1 = false;
                sad1 = true;
                angry1 = false;
                reacted1 = true;
            }
            else {
                document.getElementById('react1').style.display = 'block';
                document.getElementById('reacted1').style.display = 'none';
                document.getElementById('reactH1').style.display = 'block';
                document.getElementById('reactedH1').style.display = 'none';
                document.getElementById('reactS1').style.display = 'block';
                document.getElementById('reactedS1').style.display = 'none';
                document.getElementById('reactA1').style.display = 'block';
                document.getElementById('reactedA1').style.display = 'none';
                like1 = false;
                heart1 = false;
                sad1 = false;
                angry1 = false;
                reacted1 = false;
            }
            break;
        case 'angry':
            if (reacted1 == false && angry1 == false || reacted1 == true && angry1 == false) {
                document.getElementById('react1').style.display = 'block';
                document.getElementById('reacted1').style.display = 'none';
                document.getElementById('reactH1').style.display = 'block';
                document.getElementById('reactedH1').style.display = 'none';
                document.getElementById('reactS1').style.display = 'block';
                document.getElementById('reactedS1').style.display = 'none';
                document.getElementById('reactA1').style.display = 'none';
                document.getElementById('reactedA1').style.display = 'block';
                like1 = false;
                heart1 = false;
                sad1 = false;
                angry1 = true;
                reacted1 = true;
            }
            else {
                document.getElementById('react1').style.display = 'block';
                document.getElementById('reacted1').style.display = 'none';
                document.getElementById('reactH1').style.display = 'block';
                document.getElementById('reactedH1').style.display = 'none';
                document.getElementById('reactS1').style.display = 'block';
                document.getElementById('reactedS1').style.display = 'none';
                document.getElementById('reactA1').style.display = 'block';
                document.getElementById('reactedA1').style.display = 'none';
                like1 = false;
                heart1 = false;
                sad1 = false;
                angry1 = false;
                reacted1 = false;
            }
            break;
    }
}

function react2(react) {
    switch (react.value) {
        case 'like':
            if (reacted2 == false && like2 == false || reacted2 == true && like2 == false) {
                document.getElementById('react2').style.display = 'none';
                document.getElementById('reacted2').style.display = 'block';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like2 = true;
                heart2 = false;
                sad2 = false;
                angry2 = false;
                reacted2 = true;
            }
            else {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like2 = false;
                heart2 = false;
                sad2 = false;
                angry2 = false;
                reacted2 = false;
            }
            break;
        case 'heart':
            if (reacted2 == false && heart2 == false || reacted2 == true && heart2 == false) {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'none';
                document.getElementById('reactedH2').style.display = 'block';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like2 = false;
                heart2 = true;
                sad2 = false;
                angry2 = false;
                reacted2 = true;
            }
            else {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like2 = false;
                heart2 = false;
                sad2 = false;
                angry2 = false;
                reacted2 = false;
            }
            break;
        case 'sad':
            if (reacted2 == false && sad2 == false || reacted2 == true && sad2 == false) {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'none';
                document.getElementById('reactedS2').style.display = 'block';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like2 = false;
                heart2 = false;
                sad2 = true;
                angry2 = false;
                reacted2 = true;
            }
            else {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like2 = false;
                heart2 = false;
                sad2 = false;
                angry2 = false;
                reacted2 = false;
            }
            break;
        case 'angry':
            if (reacted2 == false && angry2 == false || reacted2 == true && angry2 == false) {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'none';
                document.getElementById('reactedA2').style.display = 'block';
                like2 = false;
                heart2 = false;
                sad2 = false;
                angry2 = true;
                reacted2 = true;
            }
            else {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like2 = false;
                heart2 = false;
                sad2 = false;
                angry2 = false;
                reacted2 = false;
            }
            break;
    }
}