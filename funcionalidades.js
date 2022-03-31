import ColorCode from "./random-color.js";
import {quotes} from './frases.js'


$(function(){
     function frases(){
            return quotes[Math.floor(Math.random() * (quotes.length-1))];
        };
    var frase = frases();
        document.documentElement.style.setProperty('--color-principal', ColorCode());
        $("#text").html('<i class="fas fa-quote-left"> ' + frase.quote);
        $("#author").html("- " + frase.author);
        $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet" + '?text="'+encodeURIComponent(frase.quote) + '" '+ encodeURIComponent(frase.author)+ ' &hashtags=quotes');
        $("#new-quote").click(function () { 
        
        $("html, #text, #author").animate({opacity:0.2},800,function(){
            frase=frases();
            document.documentElement.style.setProperty('--color-principal', ColorCode());
            $("#text").html('<i class="fas fa-quote-left"> ' + frase.quote);
            $("#author").html("- " + frase.author);
            $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet" + '?text="'+encodeURIComponent(frase.quote) + '" '+ encodeURIComponent(frase.author)+ ' &hashtags=quotes');
        });
        $("html, #text, #author").animate({opacity:1},1000);
        
        
    
        
        
    });

});

