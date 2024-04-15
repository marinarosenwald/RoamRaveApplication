# RoamRave
Surbhi Gupta, Marina Rosenwald

Version 1
# Summary of Project
Our mobile app will transform travel and food experiences, catering to the 74% of consumers in the $9.5 trillion travel and tourism industry who want more individualized content (Vrountas, n.d.; WTTC, 2023). It seeks to increase user engagement by as much as 40% through cutting-edge technologies (McKinsey & Company, 2021). Upon arriving in a new city, travelers can open our app to discover top-rated eateries, cozy cafes, and local hotspots on our travel map. Tailored for young travelers, aged 20s to 30s, our app optimizes planning time and eliminates stress by providing well-vetted recommendations. Let the adventure begin!
# Project Analysis
## Value Proposition
This is a travel application for people in their 20s to 30s that will suggest well-vetted things to do in new cities. Research shows that Millennials and Gen Z, who make up a significant portion of travelers, use online resources to plan trips, with 87% searching for top-rated local activities (Source: World Tourism Organization, 2021).

Pain points include: 

Time-consuming Itinerary Planning: On average, travelers spend over 10 hours planning trips (Source: Expedia, 2022).

Inconsistency in the quality of recommendations: Very often, users will find recommendations of very low quality that do not meet their required or expected standards.

Overlooked Local Gems: Many unique local spots are overshadowed by more popular or commercialized locations.
## Primary Purpose
The primary purpose of our application is to make traveling more enjoyable and stress-free for young travelers by providing them with a variety of screened activities and eateries. 
## Target Audience
Our target demographic is travelers in their 20s to 30s. We want to target people who are adventurous and willing to try new things as we will give a variety of ideas on our application. We are targeting younger adults as there are already a lot of applications for travelers over 40 and those who travel in families such as Yelp and TripAdvisor. To reach our target audience we will utilize social media platforms where our target audience is most active such as TikTok and Instagram. 
## Success Criteria
Our success criteria is user satisfaction. We want people to enjoy traveling and have safe options to choose from when selecting activities/bars/restaurants. We will also rely on user feedback to maintain current suggestions, thus user interaction is crucial to the success of our product, and users’ willingness to interact with us is dependent on their satisfaction with our product. To measure user satisfaction we will have a feedback survey embedded in our application where users can rate their experience and give feedback. 
## Competitor Analysis
Yelp: Yelp offers a huge user base, and with business listings ranging from, Yelp has grown to be considered the leading resource for reviews and local business information. However, the major pitfall would lie in its responsiveness to provide users with tailored suggestions, hence making the UX overwhelming, considering the various options available to them. This often adopts a one-size-fits-all approach and does not usually appeal to the particular preferences and interests of the individual, more so among the youth and the technologically driven travelers who want to have much more distinct and personalized experiences.

TripAdvisor: TripAdvisor, on the other hand, is better off in the provision of good quality travel-related content, especially good and detailed reviews by users. The strength is in the detail of information available to the user in making decisions. This includes comprehensive user feedback that could be beneficial to the traveler in arriving at this decision. However, the platform that TripAdvisor and Booking.com use to offer their services targets a whole lot of potential consumers, among them families and older travelers. It doesn't apply any 'catchy' to be on trend with its target for youth or spontaneity market. Such a broader focus could, perhaps, dilute the relevance of such content for the younger user looking for quick, adventurous, and personalized travel experiences.

The two platforms are strong in their domains and hence do not offer a complete solution to the needs of the core audience at RoamRave: a youthful audience in their 20s to 30s who are inherently spontaneous travelers. Our app attempts to bridge this gap through tailored recommendations and a user design specifically aimed at targeting this demographic, hence providing a service that is ever more relevant and ever more engaging for the young, dynamic travelers of today.
## Monetization Model
We can monetize our application by allowing businesses to pay to be promoted on our application. For example, if an eatery in Seattle wants to show up on our suggested list, they can pay us a fee and we will insert them into our list with the tag “paid promotion”. 
## Initial Design
<img width="966" alt="Screenshot 2024-04-14 at 6 37 11 PM" src="https://github.com/marinarosenwald/RoamRaveApplication/assets/137995666/596e6dc1-0610-4168-ac78-9e058b7a9a19">

<img width="979" alt="Screenshot 2024-04-14 at 6 37 34 PM" src="https://github.com/marinarosenwald/RoamRaveApplication/assets/137995666/2777d0ce-0e6a-47c6-a9a2-9a7486c65ae4">

<img width="979" alt="Screenshot 2024-04-14 at 6 38 02 PM" src="https://github.com/marinarosenwald/RoamRaveApplication/assets/137995666/a559fb4b-878f-4c8f-9f2e-8e65aa674162">
Limitations: within the scope of this class we will focus only on King County as we want to keep our suggestion data on the app to avoid expenses with cloud storage and access.  

## UI/UX Design
The Home Page needs to at least show a map of the area highlighted (it doesn’t need to be interactable, though, ideally it would be), a list of things to do that navigate to their corresponding To-do Page, and a navigation icon to navigate to the User Page. This page should give the user clear, well-vetted suggestions. The User Page needs to have a way for the user to edit the location, navigate to the Suggestion/Home Page, the Forms Page, the Favorites Page, and the Memories Page. The User Page should be a simple and easy way to navigate through the app. The To-do Page has to have a navigation icon to navigate to the User Page, show where the location is on a map, what category the location is in (i.e. a restaurant, hike, pub, etc.), a description of the location, and a way to favorite the location. This page should give the user a clear understanding of what the location is and they should be able to decide if they will enjoy it or not from the description. The Forms Page has to have a navigation icon to navigate to the User Page, a button to click that navigates the user to a google form where they can submit their own suggestions for things to do in their city, and a google form where they can submit their review of their experience on the app. This page allows for the users to submit suggestions and feedback about the application. The Favorites Page has to have a navigation icon to navigate to the User Page and a list of things to do that navigate to their corresponding To-do Page. This allows the user to bookmark spots they want to go to. The Memories Page has to have a navigation icon to navigate to the User Page, a list of things to do that navigate to their corresponding View Memory Page, and an icon that navigates to the Add Memory Page. The View Memory Page has to have a way to navigate back to the Memories Page, a memory title, display the user-uploaded photos (if applicable), and display the user-submitted summary (if applicable). The Add Memory Page has to have a way to navigate back to the Memories Page, a textbox for the user to input a memory title, a photos button/NavLink that will navigate the user to the Photo Page, and a textbox for the user to input a summary. The Photo Page has to have a way to navigate back to the Add Memory Page, a way to access the phone’s camera and a way to access the phone’s camera roll. The memory pages allow the user to look back on their experiences giving the user access to a digital travel journal in the app. 
## Technical Architecture
Languages: React Native with Node.js for server-side logic.

Database: Local storage initially. The app will use .json files to store information for the to-do lists and the user’s input for the memory pages. 

Storage: Most information will be stored in .json files within the application, photos will be stored locally on the phone’s camera roll. 

Web/cloud interactions: in order to save money we will not have web APIs, but we will link two forms on the Forms page of the application. These forms will be Google Forms and the users will be brought to their devices' internet browser to fill them out. One of the forms will allow the user to rate the application and give feedback allowing for us to measure success by evaluating the scores we receive. 
## Challenges and Open Questions
The first challenge we have is storage. We will be storing the majority of information on the application to avoid unnecessary expenses. The main issue that arises from this challenge is that it will be hard to update our suggestion lists and expand the locations available without updating the application. To fix this, we will have to implement web storage which we will do if the app proves to have traction outside of the class. Another challenge we foresee is using the phone’s camera and accessing the camera roll. We would like to allow the user the ability to use the camera and access the photos in-app, but there are uncertainties about doing this with ReactNative on iOS. Our proposed solution is to make the Photo Page in Swift which would alleviate the potential compatibility issues. The third challenge we foresee is saving the user’s input on the memory pages after they close the application. To address this we will have a data structure within the application’s backend that will be updated upon user input and will be saved on a .json file upon memory submission. 

One question we have to look more into is how we can lead the user to a link on an internet browser within the application. This will require some research and reading online tutorials to see the feasibility. 
