document.querySelector('#getOutput').addEventListener('click', getZodiac);


function getZodiac(){
    const date = getDate().split("-");
    let zodiac = selectZodiac(Number(date[2]), Number(date[1]));
    showZodiac(zodiac);
}

function selectZodiac(day, month){
    let message = '';
    let image = '';
    let sign = '';
    if((day >= 20 && month === 1) ||(day <= 18 && month === 2)){
        sign = "― Aquarius";
        message = "There is no me, there is only we.";
        image = "img/aqua.jpg"; 
    }else if((day >= 19 && month === 2) ||(day <= 20 && month === 3)){
        sign = "― Pisces";
        message = "live and let live";
        image = "img/pisces.jpg";
    }else if((day >= 21 && month === 3) ||(day <= 19 && month === 4)){
        sign = "― Aries";
        message = "When you know yourself, you're empowered. \
        When you accept yourself, you're invincible." 
        image = "img/aries.jpg";
    }else if((day >= 20 && month === 4) ||(day <= 20 && month === 5)){
        sign = "― Taurus";
        message = "Nothing worth having comes easy." 
        image = "img/taurus.jpg";
    }else if((day >= 21 && month === 5) ||(day <= 20 && month === 6)){
        sign = "― Gemini";
        message = "I manifest my reality."
        image = "img/gemini.jpg"; 
    }else if((day >= 21 && month === 6) ||(day <= 22 && month === 7)){
        sign = "― Cancer";
        message = "I feel, therefore I am." 
        image = "img/cancer.jpg";
    }else if((day >= 23 && month === 7) ||(day <= 22 && month === 8)){
        sign = "― Leo"
        message = "If you know the way, go the way and show \
        the way—you're a leader." 
        image = "img/leo.jpg";
    }else if((day >= 23 && month === 8) ||(day <= 22 && month === 9)){
        sign = "― Virgo";
        message = "My best can always be better.";
        image = "img/virgo.jpg";
    }else if((day >= 23 && month === 9) ||(day <= 22 && month === 10)){
        sign = "― Libra";
        message = "No person is an island."; 
        image = "img/libra.jpg";
    }else if((day >= 23 && month === 10) ||(day <= 21 && month === 11)){
        sign = "― Scorpio";
        message = "You never know what you are capable of until you try.";
        image = "img/scorpio.jpg"; 
    }else if((day >= 22 && month === 11) ||(day <= 21 && month === 12)){
        sign = "― Sagittarius";
        message = "Towering genius disdains a beaten path.";
        image = "img/sagi.jpg"; 
    }else if((day >= 22 && month === 12) ||(day <= 19 && month === 1)){
        sign = "― Capricon";
        message = "I can succeed at anything I put my mind to."; 
        image = "img/capri.jpg";
    }
    return {zodiacSign: sign, zodiacMessage: message, zodiacImage: image};
}

function getDate(){
    const date = document.querySelector('#birthdate-select').value;
    document.querySelector('#birthdate-select').value = '';
    return date
}

function showZodiac(zodiac){
    document.querySelector("#message").innerText = zodiac.zodiacMessage;
    document.querySelector("#sign").innerText = zodiac.zodiacSign;
    let element = document.querySelector(".img-responsive");
    element.style.display = "block";
    element.attributes.src.nodeValue = zodiac.zodiacImage;
}