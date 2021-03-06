## Final Project - Food Truck App

## Overview & General Approach

MVP:
I'm building a simpler version of Yelp, but just for food trucks. The app will let people input a Zip Code or city (& state), which will return a list of food trucks (up to 20, per Yelp's API docs) and a google maps component with markers. Clicking on the markers will open a Google maps "InfoWindow", which will display the name of the food truck.

PostMVP:
Food truck lovers will be able to log in (user auth), and "favorite" food trucks, which will be displayed on a second list, similar to the first one. And each user's profile
page will have a list of their favorite food trucks, plus a Google Maps component that
will display the US map with markers for their favorites.

Initially, I had a similar idea but for beers. However, finding and getting an API key for a beer db was a challenge, so I moved on to food trucks. Next I spent 4+ hours trying to get data from Yelp's API so that I could see the pieces of information I could display.

The wifeframes were fun to create, which layed out the foundation of my app. Now I'm working on the different pieces - fetching data from Yelp with Zip Code, displaying that area and the food trucks on Google maps, and (user auth,db,) saving the favorites to a db.

## Modules / Technologies

React - this is a JS library for building user interfaces. It allows you to create highly reusable UI components that are on single page web apps, such as, tab bars, comment boxes, pop up modals, lists, sortable tables, etc.

React-router-dom - this package is a part of React Router and it's required for websites that will run in browsers.

Express - this is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

CORS - Cross-Origin Requests allows you to configure the web API's security. It has to do with allowing other domains to make requests against your web API. For example, if you had your web API on one server and your web app on another you could configure CORS in your Web API to allow your web app to make calls to your web API.

Yelp Fusion API - this API allows us to get local content and user reviews from millions of businesses across 32 countries.

Google Maps API/Platform - this API lets up display google maps on my app with most of it's rich functionalities.

bcrypt.js (post MVP) - this is a library that hashes passwords. It lets us store an encrypted password, not plain text, in our database by salting and hashing the password entered by the user.

JWT (post MVP) - JSON Web Token is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret or a public/private key pair using RSA.

#Milestone 1 User Stories
1 - As a food truck lover, I want to go to a website to see food trucks in a desired area.

2 - As a food cart lover, I want to input my zip code so I can see a list of food carts in that area.

3 - As a street meat lover, I want to see the cuisine of the food trucks so that I can pick what I want to eat.

5 - As a food truck lover, I want to see the address of the food trucks so that I know where they are located.

5 - As a food cart lover, I want to see the carts on a map so I have an idea of their locations.

##Milestone 2 User Stories
6 - As a street food lover, I want to add certain carts to my favorites list.

7 - As a food truck lover, I want to create a profile so that I can log in any time to see the list of food trucks I've favorited.

Wifeframes (use markdown-preview, "ctrl-shift-m")
![Login & Homepage](./Wireframes/P4-a.jpg)
![Favorites & Food Trucks pages](./Wireframes/P4-b.jpg)

##ERD
![ERD](./ERD.png)

## References:

Yelp Fusion API: https://www.yelp.com/developers/documentation/v3/business_search
Google Map API: https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
Google Map InfoWindow reference: https://github.com/tomchentw/react-google-maps/issues/753

> > > > > > > 31a1cfe58f5dc8ff3ec20bccd3720b4bac6ac12a
