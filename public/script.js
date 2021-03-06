var chronological = [
    // {
    //     name: "Word Guess Game",
    //     img: "images/sushi-1080x584.jpg",
    //     repo: "https://github.com/hirohtk/Word-guess-game",
    //     deployed: "https://hirohtk.github.io/Word-guess-game/",
    //     type: "FE"
    // },
    // {
    //     name: "RPG Game",
    //     img: "images/star_wars.gif",
    //     repo: "https://github.com/hirohtk/Star-wars-game",
    //     deployed: "https://hirohtk.github.io/Star-wars-game/",
    //     type: "FE"
    // },
    // {
    //     name: "Trivia Game",
    //     img: "images/trivia_game.gif",
    //     repo: "https://github.com/hirohtk/TriviaGame",
    //     deployed: "https://hirohtk.github.io/TriviaGame/",
    //     type: "FE"
    // },
    // {
    //     name: "LIRI Bot",
    //     img: "images/node_logo_black.png",
    //     repo: "https://github.com/hirohtk/liri-node-app",
    //     deployed: "CLI App - Undeployable",
    //     type: "BE"
    // },
    // {
    //     name: "Word Guess - CLI",
    //     img: "images/01-WordGuess-Cli.gif",
    //     repo: "https://github.com/hirohtk/word_guess_node",
    //     deployed: "CLI App - Undeployable",
    //     type: "BE"
    // },
    // {
    //     name: "Bamazon - CLI",
    //     img: "images/sql.png",
    //     repo: "https://github.com/hirohtk/bamazon_assignment",
    //     deployed: "CLI App - Undeployable",
    //     type: "BE"
    // },
    // {
    //     name: "FriendFinder",
    //     img: "images/expressjs.jpg",
    //     repo: "https://github.com/hirohtk/friend-finder",
    //     deployed: "https://stormy-ocean-54298.herokuapp.com/",
    //     type: "FS"
    // },
    {
        name: "Eat Da Burger",
        img: "images/burger.jpg",
        repo: "https://github.com/hirohtk/burger",
        deployed: "https://peaceful-badlands-20443.herokuapp.com/",
        type: "FS"
    },
    {
        name: "Project - Happy Hour",
        img: "images/CocktailMain.jpg",
        repo: "https://github.com/neverage84/Project_1",
        deployed: "https://neverage84.github.io/Project_1/",
        type: "FE"
    },
    {
        name: "Project - Spotifind Me!",
        img: "images/spotifindme.png",
        repo: "https://github.com/eawhite00/Project2",
        deployed: "https://immense-caverns-47364.herokuapp.com/",
        type: "FS"
    },
    {
        name: "News Scraper",
        img: "images/newspaper-760x506 (1).jpg",
        repo: "https://github.com/hirohtk/news_scraper_assignment",
        deployed: "https://glacial-crag-21152.herokuapp.com/",
        type: "FS"
    },
    {
        name: "React - Click Game",
        img: "images/majestic.png",
        repo: "https://github.com/hirohtk/react_click_game",
        deployed: "https://hirohtk.github.io/react_click_game/",
        type: "FE"
    },
    {
        name: "React - Books App",
        img: "images/books.jpg",
        repo: "https://github.com/hirohtk/google_books_react_mongoose",
        deployed: "https://thawing-cove-16195.herokuapp.com/",
        type: "FS"
    },
    {
        name: "Project - VolunTeam",
        img: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.gif",
        repo: "https://github.com/ajperkins92/Project-3",
        deployed: "https://quiet-hamlet-85082.herokuapp.com/",
        type: "FS"
    },
    {
        name: "Type Race",
        img: "images/how-to-disable-a-laptop-keyboard-1000x1000.jpg",
        repo: "https://github.com/hirohtk/react_hooks_typerace",
        deployed: "https://fast-tundra-10719.herokuapp.com/",
        type: "FS"
    },
    {
        name: "Friend Forecast",
        img: "images/weather2.png",
        repo: "https://github.com/hirohtk/weather",
        deployed: "https://immense-cove-75264.herokuapp.com/",
        type: "FS"
    },
]

// SORTING:  Can make new objects and push based on date created (need to add field), etc

$(document).ready(function () {

    var portfolio = []

    let reverser = (arr) => {
        // array length is 14
        for (let i = arr.length; i > 0; i--) {
            // actual indeces of a 14 length array is 0-13, so pushing arr[14] is undefined.  must do i - 1
            portfolio.push(arr[i - 1]);
        }
        return;
    }

    reverser(chronological);

    var ScrollY;

    var screenSize;

    var time1;
    var time2;

    var circleHover = function () {
        $(".circleTech").mouseover(function () {
            $(this).addClass("scaleup");

            $(this).mouseleave(function () {
                $(this).removeClass("scaleup");
            });
        });
    }

    circleHover();

    $('.tooltipped').tooltip(
        {
            outDuration: 0,
            margin: 1
        }
    );

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    var technologiesRedirect = function () {
        $(".circleTech").on("click", function () {
            switch ($(this).attr("alt")) {
                case "React": openInNewTab("https://reactjs.org/")
                    break;
                case "Node": openInNewTab("https://nodejs.org/")
                    break;
                case "Express": openInNewTab("https://expressjs.com/")
                    break;
                case "JQuery": openInNewTab("https://jquery.com/")
                    break;
                case "MongoDB": openInNewTab("https://www.mongodb.com/")
                    break;
                case "MySQL": openInNewTab("https://www.mysql.com/")
                    break;
            }
        });
    }

    technologiesRedirect();

    var anim = function () {

        $(".thumbnail").mouseover(function () {

            // PROBLEM WAS THAT WHENEVER I MOUSE OVER A CHILD ELEMENT IT MOUSES OUT.  CHANGED TO MOUSELEAVE, THINGS SEEM GOOD!

            $(".thumbnail").removeClass("brighten");
            $(this).addClass("scaleup");
            $(this).attr("id", "immune");
            $(this).children().children("[name~='hideForMouseOver']").removeClass("hideForMouseOver");
            // $(this).attr("data-position", "top");
            // $(this).attr("data-tooltipped", "Click for more info!");
            fadeTrackerB();
            if (compareTime(time1, time2) === false) {
                $(".thumbnail:not(#immune)").addClass("fade");
                console.log("adding regular fade, greater than 1 second elapsed")
            }
            else {
                $(".thumbnail:not(#immune)").addClass("fade2");
                console.log("adding fade2, less than 1 second elapsed")
            }

            // ISSUE #1:  when moving over to next card too quickly, the "brighten" is still going
            //  but at the same time, the fade starts, and fade starts at brightness 100%
            // need a way to stop the brighten animation if this happens 
            // if the brighten animation is already going, start fade, but from a point between 100% and 80% rather than
            // always 100% 
            $(this).mouseleave(function () {
                if ($(".thumbnail").hasClass("brighten")) {
                    // if thumbnail is already brightening, don't do it again (don't repeat animation)
                }
                else {
                    $(".thumbnail:not(#immune)").addClass("brighten");
                }
                $(this).removeClass("scaleup");
                $(this).children().children("[name~='hideForMouseOver']").addClass("hideForMouseOver");
                $(this).attr("id", "");
                $(".thumbnail").removeClass("fade");
                $(".thumbnail").removeClass("fade2");

                fadeTrackerA();
            })
        })
    }
    // BLOCK THAT HANDLES ISSUE #1
    function fadeTrackerA() {
        //gets the time now
        time1 = new Date().getTime();
        return time1;
    }

    function fadeTrackerB() {
        time2 = new Date().getTime();
        return time2;
    }

    function compareTime(began, ended) {
        let difference = ended - began;
        console.log(`start ${began} ended ${ended} difference ${difference}`)
        if (difference <= 1000) {
            console.log("less than 1 second");
            return true;
        }
        else {
            console.log("greater than 1 second");
            return false;
        }
    }
    // BLOCK THAT HANDLES ISSUE #1

    // initial screensize
    if (window.innerWidth >= 901) {
        screenSize = "large";
    }
    else {
        screenSize = "small"
    }

    // forgot that this also is working for me when screen is resized after doing sort!
    function reRenderWindow() {
        if (window.innerWidth >= 901 && screenSize === "small") {
            screenSize = "large";
            $("#col1").empty();
            $("#col2").empty();
            $("#col3").empty();
            $(".collection").remove();
            console.log("going large")
            populate(portfolio);
        }
        else if (window.innerWidth <= 900 && screenSize === "large") {
            screenSize = "small";
            $("#col1").empty();
            $("#col2").empty();
            $("#col3").empty();
            $(".collection").remove();
            console.log("going small")
            populate(portfolio);
        }
    }

    window.onresize = () => reRenderWindow();

    $('.scrollspy').scrollSpy();

    $("#aboutBlock").addClass("flyInLeft");

    function populate(folio) {

        if (window.innerWidth >= 901) {
            function append() {
                cardImage.append(cardImageChild);
                cardContent.append(cardContentChild, clickForMore);
                outerDiv.append(cardImage, cardContent, cardReveal);
                cardReveal.append(cardRevealChild1, pTag);
            }

            for (let i = 0; i < folio.length; i++) {
                var outerDiv = $("<div class='card thumbnail'></div>");
                var cardImage = $("<div class='card-image waves-effect waves-block waves-light'></div>");
                var cardImageChild = $("<img class='activator' src='" + folio[i].img + "'>");
                var cardContent = $("<div class='card-content activator'></div>");
                var cardContentChild = $("<span class='card-title activator grey-text text-darken-4 smallerTitles'>" + folio[i].name + "</span>");
                var clickForMore = $("<p name='hideForMouseOver' class='hideForMouseOver activator'><i>Click for more info!</i><p>")
                var cardReveal = $("<div class='card-reveal'></div>");
                var cardRevealChild1 = $("<span class='card-title grey-text text-darken-4 smallerTitles'>" + "<b>" + folio[i].name + "</b>" + "<i class='material-icons right'>close</i></span>");
                var pTag;
                if (folio[i].deployed === "CLI App - Undeployable") {
                    pTag = $("<p>Github Repo: <a href=" + "'" + folio[i].repo + "'" + "target=_blank>Link</a><br>Deployed: CLI App - No Deployment</p>")
                }
                else {
                    pTag = $("<p>Github Repo: <a href=" + "'" + folio[i].repo + "'" + "target=_blank>Link</a><br>Deployed: <a href=" + "'" + folio[i].deployed + "'" + "target=_blank>Link</a></p>")
                }
                if (i % 3 === 0) {
                    $("#col1").append(outerDiv);
                    append();
                }

                if ((i - 1) % 3 === 0) {
                    $("#col2").append(outerDiv);
                    append();
                }

                if ((i - 2) % 3 === 0) {
                    $("#col3").append(outerDiv);
                    append();
                }
            }

            anim();
        }
        else if (window.innerWidth <= 900) {
            let ulTag = $("<ul class='collection'></ul>");
            for (let i = 0; i < folio.length; i++) {
                let pTag;
                if (folio[i].deployed === "CLI App - Undeployable") {
                    pTag = $("<p>Github Repo: <a href=" + "'" + folio[i].repo + "'" + "target=_blank>Link</a><br>Deployed: CLI App - No Deployment</p>")
                }
                else {
                    pTag = $("<p>Github Repo: <a href=" + "'" + folio[i].repo + "'" + "target=_blank>Link</a><br>Deployed: <a href=" + "'" + folio[i].deployed + "'" + "target=_blank>Link</a></p>")
                }
                let liTag = $("<li class='collection-item avatar'></li>");
                let imgTag = $("<img src='" + folio[i].img + "' alt='' class='circle'>")
                let spanTag = $("<span class='title'> <b>" + folio[i].name + "</b> </span>")
                liTag.append(imgTag, spanTag, pTag);
                ulTag.append(liTag)
            }
            $("#portfolioBlock").append(ulTag);
        }

    }

    populate(portfolio);

    // SORTING

    $("#sortButton").on("click", function () {
        $("#col1").empty();
        $("#col1").append("<h5 class='types'>Front End</h5>");
        $("#col2").empty();
        $("#col2").append("<h5 class='types'>Back End</h5>");
        $("#col3").empty();
        $("#col3").append("<h5 class='types'>Full Stack</h5>");

        $(this).css("visibility", "hidden");

        function sort(folio) {

            function append() {
                outerDiv.append(cardImage, cardContent, cardReveal);
                cardImage.append(cardImageChild);
                cardContent.append(cardContentChild);
                cardReveal.append(cardRevealChild1, pTag);
            }

            for (i = 0; i < folio.length; i++) {
                var outerDiv = $("<div class='card thumbnail'></div>");
                var cardImage = $("<div class='card-image waves-effect waves-block waves-light'></div>");
                var cardImageChild = $("<img class='activator' src='" + folio[i].img + "'>");
                var cardContent = $("<div class='card-content'></div>");
                var cardContentChild = $("<span class='card-title activator grey-text text-darken-4 smallerTitles'>" + folio[i].name + "</span>");
                var cardReveal = $("<div class='card-reveal'></div>");
                var cardRevealChild1 = $("<span class='card-title grey-text text-darken-4 smallerTitles'>" + folio[i].name + "<i class='material-icons right'>close</i></span>");
                var pTag;
                if (folio[i].deployed === "CLI App - Undeployable") {
                    pTag = $("<p>Github Repo: <a href=" + "'" + folio[i].repo + "'" + "target=_blank>Link</a><br>Deployed: CLI App - No Deployment</p>")
                }
                else {
                    pTag = $("<p>Github Repo: <a href=" + "'" + folio[i].repo + "'" + "target=_blank>Link</a><br>Deployed: <a href=" + "'" + folio[i].deployed + "'" + "target=_blank>Link</a></p>")
                }

                switch (folio[i].type) {
                    case "FE":
                        $("#col1").append(outerDiv);
                        append();
                        break;
                    case "BE":
                        $("#col2").append(outerDiv);
                        append();
                        break;
                    case "FS":
                        $("#col3").append(outerDiv);
                        append();
                        break;
                }
            }
        }

        sort(portfolio);

        // Repeating listener - sorter function above wipes out the existing listener
        anim();
    });

    // END SORTING

    $(document).scroll(function () {
        ScrollY = $(this).scrollTop();
        console.log(ScrollY);
        console.log(`window.innerWidth is ${window.innerWidth}`);
        // simulating media query for when blocks "fly in"
        if (window.innerWidth <= 600 && ScrollY > 500) {
            $("#portfolioBlock").addClass("flyInRight");
        }
        else if (window.innerWidth > 600 && ScrollY > 200) {
            $("#portfolioBlock").addClass("flyInRight");
        }
        // simulating media query for when blocks "fly in"
        if (window.innerWidth <= 600 && ScrollY > 1200) {
            $("#contactBlock").addClass("flyInLeft");
        }
        else if (window.innerWidth > 600 &&ScrollY > 1700) {
            $("#contactBlock").addClass("flyInLeft");
        }
    });

    commentBox();

    function commentBox() {
        $("#commentOpen").on("click", function () {
            var row1 = $("<div class='row not'></div>");
            var row2 = $("<div class='col s12 m5' id='commentThankYou'></div>");
            var row3 = $("<p id='commentInstructions'>Please click on what you want to comment on</p>")
            var row4 = $("<div class='input-field col s12 emptyForThankYou'></div>")
            var appendrow4a = $("<textarea id='textarea2' class='materialize-textarea' data-length='120'></textarea>")
            var appendrow4b = $("<label for='textarea2'>Comment</label>")
            var submitComment = $("<button class='btn waves-effect waves-light' id='commentSubmit' type='submit' name='action'>Submit</button>");
            $("#commentOpen").off("click");
            $(this).parent().append(row1);
            row1.append(row2);
            row2.append(row3);
            $(this).parent().attr("id", "commentBox");

            $('html,body').css('cursor', 'crosshair');

            function delay() {
                $(document).one("click", function () {
                    $('html,body').css('cursor', '');
                    var x = event.clientX;
                    var y = event.clientY;
                    console.log(x, y);
                    row3.empty();
                    row2.append(row4);
                    row2.append(submitComment);
                    row4.append(appendrow4a);
                    row4.append(appendrow4b);
                    $(document.elementFromPoint(1637, 425)).click();

                    $("#commentSubmit").on("click", function () {
                        var objForBackEnd = {
                            coordinates: "(" + x + "," + y + ")",
                            depth: ScrollY,
                            comment: $("#textarea2").val().trim(),
                        }
                        console.log(objForBackEnd.comment);
                        localStorage.setItem("coordinates", objForBackEnd.coordinates);
                        localStorage.setItem("scrollY", objForBackEnd.depth);
                        localStorage.setItem("comment", objForBackEnd.comment);
                        // ajax post to my API if hooking to db
                        // Can't I write an API that simply posts to my sql database?  Just make a website with a post route? 

                        $(".emptyForThankYou").empty();
                        $("#commentSubmit").remove();
                        $("#commentThankYou").append("<p style='position: fixed; margin: 0 auto;'>Thank you for your comment!</p>");

                        function removeCommentBox() {
                            $("#commentOpen").parent().attr("id", "");
                            $("#commentOpen").parent().children().not("#commentOpen").remove();
                        }
                        setTimeout(removeCommentBox, 3500);

                        // recursion:  had to put this entire thing in a function so that initial click handler could be run again/reset
                        commentBox();
                    }
                    )
                });
            }

            setTimeout(delay, 100);
            // doing this because the document onclick would fire as soon as the commentopen gets fired, cancelling the right position

        });
    }

    let openModal = function () {
        $("#modal").modal();
        $("#modal").modal("open");
    }

    $("#formSubmit").on("click", function () {
        event.preventDefault();
        let toBackEnd = {
            name: $("#name").val().trim(),
            email: $("#email").val().trim(),
            message: $("#message").val().trim()
        }

        console.log(toBackEnd);

        $.post("/api/message", toBackEnd, function (response, err) {
            if (response) {
                console.log(response);

                openModal();

                $("#name").val("");
                $("#email").val("");
                $("#message").val("");
            }
            else if (err) {
                throw (err);
            }
        });

    })

});