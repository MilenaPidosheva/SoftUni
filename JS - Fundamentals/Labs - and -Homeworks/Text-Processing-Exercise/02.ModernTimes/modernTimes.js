function modernTimes(str) {
    let arr = str.split(' ');

    arr.forEach(word => {
        if (word[0] == '#' && word.length > 1) {
            let isOnlyLetters = true;
            word = word.slice(1);
            for (let char of word) {
                let code = char.charCodeAt();
                if (code < 65 || code > 90 && code < 97 || code > 122) {
                    isOnlyLetters = false;
                    break;
                }
            }
            if (isOnlyLetters) {
                console.log(word);
            }
        }
    });
}

// function hashtag(str) {
//     let pattern = /#[A-Za-z]+/g;
//     let matches = str.match(pattern);
//     matches.forEach(match => {
//         console.log(match.substring(1));
//     });
// }
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')