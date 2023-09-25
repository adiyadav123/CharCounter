var textarea = document.getElementById("text_input");
var words_counter = document.getElementById("words");
var char_counter = document.getElementById("characters");
var insta_limit = document.getElementById("insta_limit");
var twitter_limit = document.getElementById("twitter_limit");
var in_limit = 2200;
var x_limit = 280;

// character counter function
const count_char = (e) => {
    char_counter.innerText = e.target.value.length;
}

// instagram-limit function
const insta_limit_checker = (e) => {
    insta_limit.innerText = in_limit - e.target.value.length;
}

// twitter limit checker 
const twitter_limit_checker = (e) => {
    twitter_limit.innerText = x_limit - e.target.value.length;
}
// color changer 
const color_changer = (e) => {
    if(x_limit - e.target.value.length < 0){
        twitter_limit.style.color = "red";
    }else{
        twitter_limit.style.color = "black";
       
    }

    if(in_limit - e.target.value.length < 0){
        insta_limit.style.color = "red";
    }else{
        insta_limit.style.color = "black";
    }
}


// word counter 

const word_counter = (e) => {
    let str = e.target.value;
    let str_array = str.split(" ");
    words_counter.innerText = str_array.length;
}


textarea.addEventListener("input", function(e){
    count_char(e);
    insta_limit_checker(e);
    twitter_limit_checker(e);
    color_changer(e);
    word_counter(e);
})