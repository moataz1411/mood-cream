const moods={
    happy:{
        flavor:"Vanilla 🍦",
        color:"#fff3a6",
        quote:"Life is sweet when you're happy, sweety ❤️",
        emoji:"🍦"
    },
    sad:{
        flavor:"Dark Chocolate 🍫",
        color:"#cdb4db",
        quote:"It's okay, sweet things come later 😄",
        emoji:"🍫"
    },
    tired:{
    flavor:"Milk 🥛",
    color:"#dbeafe",
    quote:"Brooooo, Rest is part of success 😴",
    emoji:"🥛"
    },
    focused:{
    flavor:"Mint 🍃",
    color:"#b7f7d4",
    quote:"lock in, Stay sharp and keep going 🧠",
    emoji:"🍃"
    }
};
function setmood(mood) {
    document.body.style.background=moods[mood].color;
    document.getElementById("flavor").innerText=moods[mood].flavor;
    document.getElementById("quote").innerText=moods[mood].quote;
    document.getElementById("emoji").innerText=moods[mood].emoji;
}


