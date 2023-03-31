
# SFPOPOS: React Tutorial

A tutorial creating a React app of POPOS spaces in San Francisco which provided an introduction to fundamental React concepts.

## Screenshots
![main](https://tinypic.host/i/I1tqk.png)
![details](https://tinypic.host/i/IqMkJ.png)

## Features

- Components
- Routes from react-router-dom
- JSON data


## Run Locally

In your terminal, run:

cd alexareact
npm start

The react app will open automatically in a browser.


## Support

For support, email alexa.whitney@students.dominican.edu


## Wireframe

Please visit https://www.figma.com/file/5D1cTZormuYcgEHshWBEnf/SFPOPOS-Wireframe-Homework?node-id=0%3A1&t=gItJl4kY1Ya9SOo8-1


## Outline
- SFPOPOS
    - Home
        - Header
            - Page Title: SFPOPOS
            - Sub Title: San Francisco Privately Owned Public Open Spaces
        - Nav
            - NavLink: List
            - NavLink: About
        - Button 
            - RandomSpace: Show me a random space
        - Input
            - Search public spaces by title and address
            - Button: Submit
        - Content
            - Spaces Card
                -  Image (class "POPOSDetails-image")
                -  Title (class "POPOSDetails-title")
                -  Address (class "POPOSSpace-info")
                -  Hours (class "hours" or also under "POPOSSpace-info")
        - Footer: Alexa Whitney © 2023 alexa.whitney@students.dominican.edu (class "Footer")
    - About
        - Header
            - Page Title: SFPOPOS
            - Sub Title: San Francisco Privately Owned Public Open Spaces
        - Nav
            - NavLink: List
            - NavLink: About
        - Button 
            - RandomSpace: Show me a random space
        - Content
            - Page Title: About SFPOPOS
            - Paragraph: Description of site
            - Image: Image of one of the SFPOPOS spaces
        - Footer: Alexa Whitney © 2023 alexa.whitney@students.dominican.edu
    - Detail
        - Header
            - Page Title: SFPOPOS
            - Sub Title: San Francisco Privately Owned Public Open Spaces
        - Nav
            - NavLink: List
            - NavLink: About
        - Button 
            - RandomSpace: Show me a random space
        - Content
            - Page Title: Name of POPOS Site (class "POPOSdetails-title")
            - Paragraph: Description of site (class "POPOSdetails-desc")
            - Paragraph: Hours of Operation (class "POPOSdetails-hours")
            - Paragraph: Emojis of features (POPOSFeatureList component)
            - Paragraph: Latitude and Longitude coordinates (class "POPOSdetails-geo")
            - Image: Image of one of the SFPOPOS spaces (class "POPOSdetails-image")
        - Footer: Alexa Whitney © 2023 alexa.whitney@students.dominican.edu

## User Stories
### User Story 1: Solo-Traveler Phoebe

    As a solo traveler, Phoebe is always on the lookout for unique and lesser-known spots to explore in each city she visits. Phoebe wants to use the website to identify POPOS near her Airbnb in downtown San Francisco she can spend a day exploring those hidden gems.

    - Tasks:
        1. Phoebe should be able to navigate the website easily and find relevant information about POPOS.
        2. Phoebe should be able to locate POPOS near her Airbnb using an interactive map or be searching for nearby addresses.
        3. Phoebe should find detailed descriptions, photographs, and maybe even visitor reviews for each POPOS she selects.
        4. Phoebe should be able to create a customer itinerary or save a list of POPOS she wants to visit (MAYBE)

### User Story 2: Date Night for Bruno

    Bruno wants to plan a special date for his girlfriend, Paisley. He’s been living in San Francisco for a few years, but wants to surprise her with a unique experience of a day-date exploring several POPOS around the city. Bruno wants to choose POPOS with romantic views, artwork, or unique architectural features to make the date memorable (he may even propose!).

    - Tasks:
        1. Bruno should be able to filter POPOS based on specific attributes such as views, artwork, and architecture.
        2. Bruno should find detailed information, photographs, and visitor reviews for each POPOS to help him make informed decisions.
        3. Bruno should be able to create a customer itinerary or save a list of POPOS he wants to include in the list for the date (MAYBE)

### User Story 3: Martinez Family Picnic Day

    The Martinez family is planning a day trip to San Francisco with their two young children. They want to visit several family-friendly POPOS where they can relax, enjoy green spaces, and have a picnic lunch.

    - Tasks:
        1. The Martinez family should be able to filter POPOS based on family-friendly criteria such as green spaces, seating areas, and playgrounds.
        2. The Martinez family should find detailed information, photographs, and visitor reviews for each POPOS to help them choose the most suitable locations.
        3. The Martinez family should be able to create a custom itinerary or save a list of POPOS for their day out. 
        4. The Martinez family should find information on nearby family-friendly restaurants or cafes to visit during their trip (MAYBE)
