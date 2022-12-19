// $(document).ready(function () {
//     $('div.poem-stanza').addClass('highlight');
// });

window.onload = function () {
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        if (hasClass(divs[i], 'poem-stanza')
            && !hasClass(divs[i], 'highlight')) {
            divs[i].className += ' highlight';

        }
        function hasClass(elem, cls) {
            var reClass = new RegExp(' ' + cls + ' ');
            //The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
            return reClass.test(' ' + elem.className + ' ');
        }
    }
    };   

    $(document).ready(function() {
        console.log('hello');
        console.log(52);
        console.log($('div.poem-stanza'));
       });