console.log('Welcome to tutorial 6');

html = "<h1>this is heading</>"+
        "<p>thi is My paragraph</>";

// console.conca
// html = html.concat('sujan','thapa');
console.log(html);
// console.log(html.toUpperCase());
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));

// console.log(html.charAt(4));
// console.log(html.endsWith('sujan'));
// console.log(html.includes('sujan'));
// console.log(html.substring(0,5));
// console.log(html.slice(0,10));
// console.log(html.split(' '));

// console.log(html.replace('this', 'it'));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1>This is "my" heading</h1>
            <p>Do you want ${fruit1} and ${fruit2}</p>`;
document.body.innerHTML = myHtml;

