// ON THE TABLE

    * footer burger not showing content

    * community-info txt not aligned center??


    **********************************************************************************************************************

    BONUS TRACK

        
        * make calendar (look <Events />) (=> look library)
        
        * music player programmieren
        
        * reactive input felder   =>  a function listens the whole time
          placeholder             =>  Both depen on same property : reactive to a non-empty input field
    
        * { inhaber[fname] } {inhaber[lname] } not working

        * order in array not working

        * clean up code

            - delete unused files
            - delete unused imports
            - order in files


        Absolut BONUS LEVEL:

            * Map
            
            * Deployment on firebase => 
            
            * Bundler
            
            * Scss NOT CLONED! => c + v

            * BE with login (log as musician / other) / send events / 


***************************************************************************************************************************


// PROBLEMS

    { CSS }




// REFINE

    box-shadow as a scss variable
    go-to-top button
    single-article => button "more articles" and "next article"
    contact { .contact-option arrow => align}
    team images different mask ?
    wrap links around buttons (instead of buttons around links) and style accordingly
    load article
    better burger menu & footer burger menu
    events carousel
    event bg-img defined as style? or how?
    sort items in lists
    Write start-instructions in package-json not working for scss
    "next article" button should go to top
    reactive placeholder

    PRE: you need a BE
        * We need a system to pick max (3?) links / icons (the user can mark which options are the main links, and they'll store a "important" key with the value "true" in the links)

        * {"tw" : ["@handle", true]}

        * When you send your contact info, you get the option to log as musician / veranstalter, which brings you into the "musician" or "veranstalter" page, which again must take your info (from the previous contact form)

        
        * links between musicians / bands / events / veranstalter / venues (places) { it would be nice to provide the web the hability to match a musician, so the veranstalter can find them easy, in case this musician has a profile }  ==>> [ musicians + bands + veranstalter + venues must be linked by an id. Can you provide multiple id to a single element? => solution: write a function that evaluates => if(this I has a value [X, Y, Z]) { print this value into an p or li }. ] => for that you need a single page for every musician, band, other and concert


// UNUSED COMPONENTS - Beware

    Tag =>  for every day in the calendar (=> events)
    Search Bar
    BurgerMenu
    Body
    EventsNov
    EventsList


***************************************************************************************************
    
// TIMING

*************************************************************************************************************************************************


    Donnerstag 20.

        Presentation vorbereiten / üben

        - besser deffinierte Mission
        - bessere Materialien

// LOG IN KAPITEL

        // to publish an event you must to log in somehow (to login you must have a BE, etc)

        // How it's connected a Form with a POST request to db? (this changes how the component is written { props & co })

        // In case a musician already have a profile in the website, there's a link => if(musician.profile === true) => print link into an href (a)

        // When you send your contact info, you get the option to log as musician / veranstalter, which brings you into the "musician" or "veranstalter" page, which again must take your info (from the previous contact form)