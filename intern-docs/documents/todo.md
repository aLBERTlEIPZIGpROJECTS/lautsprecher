// ON THE TABLE

// TASKS

    blob in header must have a different form (work with different border radius).

    Header-BG-Color must be different for every page. Als Prop weitergeben? Wie? Class-name (ein class nur für die Blob-BG Farbe als prop übergeben). Wie holt man diese Prop aus einem anderen Component?


// Back-End Herausforderungen

        // Back-End Data Structure deffinieren { festmachen } (weil sonst Probleme mit dem Front End gibt)

        // Link to concrete :id (articles)

        // links between musicians / bands / events / veranstalter / venues (places) { it would be nice to provide the web the hability to match a musician, so the veranstalter can find them easy, in case this musician has a profile }

            [ 
                musicians + bands + veranstalter + venues must be linked by an id. Can you provide multiple id to a single element? => solution: write a function that evaluates => if(this I has a value [X, Y, Z]) { print this value into an p or li }.
            ]

        // substitute "eventsNow" and "eventsToday" for "eventsList", when you know how to pass nested info

        // re-structure "article" + "history-articles" & "single-article" + "single-history-articles", so you ONLY HAVE ONE COMPONENT!!
        
        // to publish an event you must to log in somehow (to login you must have a BE, etc)

        // How it's connected a Form with a POST request to db? (this changes how the component is written { props & co })


// PROBLEMS



    Single Article / HistorySingleArticle / Impressum => Problem #1 : text-block in Single Article / HistorySingleArticle / Impressum zu breit

    Strange aboutus loading behaviour
    
    Send Event Contact/ Form / MusicianSignForm / NonMusicianFormSignForm => input / label / lock width / lock btn width
    

// QUESTIONS
    

    In case a musician already have a profile in the website, there's a link => if(musician.profile === true) => print link into an href (a)
    
    Are "tabs" in community a React Component?

    do calendar (look <Events />) (=> look library)

    ein Form - Component, oder 3 Components (ein für jede Variante)? => eventuell ein einziges Component haben, der ein map() durch die Eigenschaften macht


// Back-End Herausforderungen

        // Back-End Data Structure deffinieren { festmachen } (weil sonst Probleme mit dem Front End gibt)

        // Link to concrete :id (articles)

        // links between musicians / bands / events / veranstalter / venues (places) { it would be nice to provide the web the hability to match a musician, so the veranstalter can find them easy, in case this musician has a profile }

            [ 
                musicians + bands + veranstalter + venues must be linked by an id. Can you provide multiple id to a single element? => solution: write a function that evaluates => if(this I has a value [X, Y, Z]) { print this value into an p or li }.
            ]

        // substitute "eventsNow" and "eventsToday" for "eventsList", when you know how to pass nested info

        // re-structure "article" + "history-articles" & "single-article" + "single-history-articles", so you ONLY HAVE ONE COMPONENT!!
        
        // to publish an event you must to log in somehow (to login you must have a BE, etc)

        // How it's connected a Form with a POST request to db? (this changes how the component is written { props & co })


// UNUSED COMPONENTS - Beware

    Tag =>  for every day in the calendar (=> events)
    Search Bar
    BurgerMenu
    Body
    EventsNov


// TIMING

    Tag 4 - 5
D.  HTML (JSX) + SCSS
    
    Tag 6
E.  @media
    
    Tag 7
F.  @keyframes
    
    Tag 8 - 9
G.  testing
H.  correction

2.  BACKEND

    Tag 10
A.  JSON-Server => already a 1. version. We need a better version, see { Back-End Herausforderungen }

    Tag 11 - 12
B.  (if on extra time: learn { again } BE)

    Tag 13 - 14 
C.  testing

    Tag 15
3. PRESENTATION

- besser deffinierte Mission