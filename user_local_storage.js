//check to see if the key user exists
if(localStorage.getItem("user"))
    {
        //if true, welcome the user back to the site
        $("#name").text("Welcome back, " + localStorage.user + ", check out these deals we found for you.");
    }
    else
    {
        //otherwise, ask the user their name, store their name, and welcome them!
        let name = prompt("What is your name?");
        localStorage.setItem("user", name);
        $("#name").text("Welcome to TradeTrove, " + name + "!");
    }