// ON THE TABLE

 Samstag 15.
        useContext lernen / implementieren (AX-318)
                                            implement in "Community", so is passes info to tab tittle - style


        create CDN 0.1 with pictures (cdn)




// TASKS

    (AX-318)
            Header-BG-Color must be dicfferent for every page. Als Prop weitergeben? Wie? Class-name (ein class nur für die Blob-BG Farbe als prop übergeben). Wie holt man diese Prop aus einem anderen Component? => durch "use context"?

            Write start-instructions in package-json not working for scss

    music player programmieren

    Scss NOT CLONED! => c + v



// PROBLEMS

    { CSS }

    events text overflow 
    msg field overflow
            why is body in events overflowing?
            event bg-img defined as style? or how?

    css conflict between header and footer { on different sizes }

    @media for Burger

    { STRUCTURE }

    { inhaber[fname] } {inhaber[lname] } working partially

    restructure all-articles and history-articles, so it's a single component, with url as prop

    do calendar (look <Events />) (=> look library)

    nested routes for a single component?

    Intern Links in a website (Burger Menu)

    tabs not working properly ( only "other" )

    do calendar (look <Events />) (=> look library)

    footer - burger not showing content

    all history articles not showing up

    links in eventNow button and articlePreview Card, single-article

    // re-structure     "article" + "history-articles" =>  so you ONLY HAVE ONE COMPONENT!! => momentan lasse ich das beiseitig



// BACK-END Herausforderungen

        // Link to concrete :id (articles)
        
// LOG IN KAPITEL

        // links between musicians / bands / events / veranstalter / venues (places) { it would be nice to provide the web the hability to match a musician, so the veranstalter can find them easy, in case this musician has a profile }

            [ 
                musicians + bands + veranstalter + venues must be linked by an id. Can you provide multiple id to a single element? => solution: write a function that evaluates => if(this I has a value [X, Y, Z]) { print this value into an p or li }.
            ]

        
        // to publish an event you must to log in somehow (to login you must have a BE, etc)

        // How it's connected a Form with a POST request to db? (this changes how the component is written { props & co })

        // In case a musician already have a profile in the website, there's a link => if(musician.profile === true) => print link into an href (a)

        // When you send your contact info, you get the option to log as musician / veranstalter, which brings you into the "musician" or "veranstalter" page, which again must take your info (from the previous contact form)


// REFINE

    box-shadow as a scss variable
    go-to-top button
    landing page article-preview button width
    landing page community-previe button width (768)
    single-article => button "more articles" and "next article"
    contact { .contact-option arrow => align}
    team images different mask ?
    community / img addapt to info (or limit info)

    PRE: to have a BE
        We need a system to pick max (3?) links / icons (the user can mark which options are the main links, and they'll store a "important" key with the value "true" in the links)

        {"tw" : ["@handle", true]}

        When you send your contact info, you get the option to log as musician / veranstalter, which brings you into the "musician" or "veranstalter" page, which again must take your info (from the previous contact form)


// UNUSED COMPONENTS - Beware

    Tag =>  for every day in the calendar (=> events)
    Search Bar
    BurgerMenu
    Body
    EventsNov
    EventsList




***************************************************************************************************


// TIMING


    Samstag 15.
        useContext lernen / implementieren (AX-318)
                                            implement in "Community", so is passes info to tab tittle - style
        restructure all-articles and history-articles, so it's a single component, with url as prop
        Intern Links in a website
                    Burger Menu
                    Footer Burger Menu
                    Landing Page
                    About (social links)
                    articles and history articles (after BE)
                    community (social links + after BE => links between musicians & bands & veranstalter)
                    events (after BE => links between musicians & bands & veranstalter)

        Link to concrete :id (articles)
        create CDN 0.1 with pictures (cdn)




    Sonntag 16.
        music player programmieren
        animations (blob)
        animations : 
            send
            load article
            progressive input felder
            buttons
            placeholder
        
    Montag 17. 
        better burger menu & footer burger menu

    Dienstag 18.

        Absolut BONUS LEVEL:
            { inhaber[fname] } {inhaber[lname] } working partially
            Calendar
            Map
            Log - in Kapitel
            Scss NOT CLONED! :O
            (if on extra time: learn { again } BE)
            Deployment on firebase
            Bundler

    Mittwoch 19.

        "Freier Tag"

    Donnerstag 20.

        Presentation vorbereiten / üben

        - besser deffinierte Mission
        - bessere Materialien