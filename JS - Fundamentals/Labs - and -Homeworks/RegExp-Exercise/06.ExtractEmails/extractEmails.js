function extractEmails(arr) {

    for (let line of arr) {
        let pattern = /\b(?<!\S)[a-z][a-z0-9\.\-_]+[a-z0-9]*@[a-z][a-z\-]+\.[a-z][a-z\.]+[a-z]?\b/g;
        let match = line.match(pattern);
        if (match) {
            console.log(match.join('\n'));
        }
    }
}
extractEmails(['Please contact us at: support@github.com.', 'end']);
extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'])
extractEmails(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'])