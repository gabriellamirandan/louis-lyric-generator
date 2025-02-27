function displayLyric(response) {
    console.log(response)
    let nameInput = document.querySelector("#name")
    new Typewriter("#lyric", {
        strings: `${nameInput.value}, ${response.data.answer}`,
        autoStart: true,
        delay: 40,
        cursor: "",
    })
}

function generateLyric(event) {
    event.preventDefault();
    let nameInput = document.querySelector("#name")
    if (nameInput.value) {
        let apiKey = "3e46b86b8308faao2ct16f0ddbe04ffa"
        let prompt = `Please, show me a real lyric from one of Louis Tomlinson's songs`;
        let context = "Pretend you are a Louis Tomlinson fan, you love and know all of his musics. Your mission is to search for one of his lyrics as an inspirational quote for the day. Keep it short, two sentences maximum. You should not create lyrics, but search for a real lyric from one of Louis Tomlinson's songs. You don't have to explain the lyric, just show the lyric. Please make it in a format to be inserted in the <body> tag as a <p>. There's no need to put the lyrics into quotes. Sign it as Louis Tomlinson.";
        let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

        let lyricElement = document.querySelector("#lyric");
        lyricElement.classList.remove("hidden");
        console.log(context);
        console.log(prompt);
        axios.get(apiUrl).then(displayLyric);
    } else {
        alert("Please, write your name")
    }
}

let nameFormlement = document.querySelector("#name-form");
nameFormlement.addEventListener("submit", generateLyric);