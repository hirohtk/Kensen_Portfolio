var portfolio = [
    {
        name: "Word Guess Game",
        img: "images/sushi-1080x584.jpg",
        repo: "https://github.com/hirohtk/Word-guess-game",
        deployed: "https://hirohtk.github.io/Word-guess-game/",
        type: "FE"
    },
    {
        name: "RPG Game",
        img: "images/star_wars.gif",
        repo: "https://github.com/hirohtk/Star-wars-game",
        deployed: "https://hirohtk.github.io/Star-wars-game/",
        type: "FE"
    },
    {
        name: "Trivia Game",
        img: "images/trivia_game.gif",
        repo: "https://github.com/hirohtk/TriviaGame",
        deployed: "https://hirohtk.github.io/TriviaGame/",
        type: "FE"
    },
    {
        name: "LIRI Bot",
        img: "images/node_logo_black.png",
        repo: "https://github.com/hirohtk/liri-node-app",
        deployed: "CLI App - Undeployable",
        type: "BE"
    },
    {
        name: "Word Guess - CLI",
        img: "images/01-WordGuess-Cli.gif",
        repo: "https://github.com/hirohtk/word_guess_node",
        deployed: "CLI App - Undeployable",
        type: "BE"
    },
    {
        name: "Bamazon - CLI",
        img: "images/sql.png",
        repo: "https://github.com/hirohtk/bamazon_assignment",
        deployed: "CLI App - Undeployable",
        type: "BE"
    },
    {
        name: "FriendFinder",
        img: "images/expressjs.jpg",
        repo: "https://github.com/hirohtk/friend-finder",
        deployed: "https://stormy-ocean-54298.herokuapp.com/",
        type: "FS"
    },
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
]

// SORTING:  Can make new objects and push based on date created (need to add field), etc

$(document).ready(function () {
    var ScrollY;

    function recursiveWindow() {
        if (window.innerWidth <= 600) {
            console.log(window.innerWidth);
        }
    }

    window.onresize = () => recursiveWindow();

    $('.scrollspy').scrollSpy();

    $("#aboutBlock").addClass("flyInLeft");

    function populate(folio) {

        function append() {
            outerDiv.append(cardImage);
            cardImage.append(cardImageChild);
            outerDiv.append(cardContent);
            cardContent.append(cardContentChild);
            outerDiv.append(cardReveal);
            cardReveal.append(cardRevealChild1);
            cardReveal.append(cardRevealChild2);
            cardReveal.append(cardRevealChild3);
        }

        for (i = 0; i < folio.length; i++) {
            var outerDiv = $("<div class='card thumbnail'></div>");
            var cardImage = $("<div class='card-image waves-effect waves-block waves-light'></div>");
            var cardImageChild = $("<img class='activator' src='" + folio[i].img + "'>");
            var cardContent = $("<div class='card-content'></div>");
            var cardContentChild = $("<span class='card-title activator grey-text text-darken-4'>" + folio[i].name + "</span>");
            var cardReveal = $("<div class='card-reveal'></div>");
            var cardRevealChild1 = $("<span class='card-title grey-text text-darken-4'>" + folio[i].name + "<i class='material-icons right'>close</i></span>");
            var cardRevealChild2 = $("<p>Github Repository: <a href=" + "'" + folio[i].repo + "'" + "target=_blank>" + folio[i].repo + "</a></p>");
            var cardRevealChild3 = $("<p>Deployed Application: <a href=" + "'" + folio[i].deployed + "'" + "target=_blank>" + folio[i].deployed + "</a></p>");

            if (i < 5 || i > 12 && i < 17) {
                $("#col1").append(outerDiv);
                append();
            }

            if (i > 4 && i < 10) {
                $("#col2").append(outerDiv);
                append();
            }

            if (i > 9 && i < 15) {
                $("#col3").append(outerDiv);
                append();
            }
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
                outerDiv.append(cardImage);
                cardImage.append(cardImageChild);
                outerDiv.append(cardContent);
                cardContent.append(cardContentChild);
                outerDiv.append(cardReveal);
                cardReveal.append(cardRevealChild1);
                cardReveal.append(cardRevealChild2);
                cardReveal.append(cardRevealChild3);
            }
    
            for (i = 0; i < folio.length; i++) {
                var outerDiv = $("<div class='card thumbnail'></div>");
                var cardImage = $("<div class='card-image waves-effect waves-block waves-light'></div>");
                var cardImageChild = $("<img class='activator' src='" + folio[i].img + "'>");
                var cardContent = $("<div class='card-content'></div>");
                var cardContentChild = $("<span class='card-title activator grey-text text-darken-4'>" + folio[i].name + "</span>");
                var cardReveal = $("<div class='card-reveal'></div>");
                var cardRevealChild1 = $("<span class='card-title grey-text text-darken-4'>" + folio[i].name + "<i class='material-icons right'>close</i></span>");
                var cardRevealChild2 = $("<p>Github Repository: <a href=" + "'" + folio[i].repo + "'" + ">" + folio[i].repo + "</a></p>");
                var cardRevealChild3 = $("<p>Deployed Application: <a href=" + "'" + folio[i].deployed + "'" + ">" + folio[i].deployed + "</a></p>");
    
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
            // $(".thumbnail").addClass("thumbnailFade");
            // setTimeout(function () {$(".thumbnail").removeClass("thumbnailFade")}, 100);
        }

        sort(portfolio);

        // Repeating listener - sorter function above wipes out the existing listener
        $(".thumbnail").mouseover(function () {
            $(".thumbnail").removeClass("brighten");
            $(this).addClass("enlarge");
            $(this).attr("id", "immune");
            $(".thumbnail:not(#immune)").addClass("fade");
    
            $(this).mouseleave(function () {
                //$(this).addClass("deflate");
                $(".thumbnail").addClass("brighten");
                $(this).removeClass("enlarge");
                // function deflate() {
                //     $(".deflate").removeClass("deflate")
                // }
                // setTimeout(deflate, 500);
                $(this).attr("id", "");
                $(".thumbnail").removeClass("fade");
            })
        })
    });

    // END SORTING

    $(document).scroll(function () {
        ScrollY = $(this).scrollTop();
        // simulating media query for when blocks "fly in"
        if (window.innerWidth <= 600 && ScrollY > 100) {
            $("#portfolioBlock").addClass("flyInRight");
        }
        else if (ScrollY > 200) {
            $("#portfolioBlock").addClass("flyInRight");
        }
        // simulating media query for when blocks "fly in"
        if (window.innerWidth <= 600 && ScrollY > 1000) {
            $("#contactBlock").addClass("flyInLeft");
        }
        else if (ScrollY > 1700) {
            $("#contactBlock").addClass("flyInLeft");
        }
    });

    // $(document).on("click", function() { 
    //     var x = event.clientX;
    //             var y = event.clientY;
    //             console.log(x, y);
    // })

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

    $(".thumbnail").mouseover(function () {

        // PROBLEM WAS THAT WHENEVER I MOUSE OVER A CHILD ELEMENT IT MOUSES OUT.  CHANGED TO MOUSELEAVE, THINGS SEEM GOOD!

        $(".thumbnail").removeClass("brighten");
        $(this).addClass("enlarge");
        $(this).attr("id", "immune");
        $(".thumbnail:not(#immune)").addClass("fade");

        $(this).mouseleave(function () {
            //$(this).addClass("deflate");
            $(".thumbnail").addClass("brighten");
            $(this).removeClass("enlarge");
            // function deflate() {
            //     $(".deflate").removeClass("deflate")
            // }
            // setTimeout(deflate, 500);
            $(this).attr("id", "");
            $(".thumbnail").removeClass("fade");
        })
    })

    let openModal = function () {
        $("#modal").modal();
        $("#modal").modal("open");
    }

    $("#formSubmit").on("click", function() {
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