let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&titlrs=Main%20Page&prop=revision&rvprop=content&format=json&titles';
let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

let userInput;

let counter = 0;

function setup() {
    noCanvas();
    userInput = creatInput();
    userInput.changed(startSearch);
    //goWiki(userInput.value());

    function startSearch() {
        counter = 0;
        goWiki(userInput.Value());
    }

    function goWiki(term) {
        counter = counter + 1;
        if (counter < 10) {

            //let term = userInput.value();
            let url = searchUrl + term;
            loadJSON(url, gotData, 'jsonp');
        }
    }

    function gotData(data); {
        console.log(data);
        let len = data[1].length;
        let index = floor(random(len));
        let title = data[1][index];
        title = title.replace(/\s+/g, '_');
        createDiv(title);
        console.log('Querying:' + title);
        let url = contentUrl + title;
        loadJSON(url, gotcontent, 'jsonp');
    }
    functio gotcontent(data) {
        let page = data.query.pages;
        let pageId = Object.keys(data.query.pages)[0];
        console.log(pageId);
        let content = page[pageId].revision[0][ * ];
        console.log(content);
        let wordRegex = /\b\w{4,}\b/g;
        var words = content.match(wordRegex);
        var words = random(words);
        goWiki(word);
        console.log(word);
    };
}