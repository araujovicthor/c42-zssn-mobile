# ZSSN (Zombie Survival Social Network) - App

## Problem Description
The world as we know it has fallen into an apocalyptic scenario. A laboratory-made virus is transforming human beings and animals into zombies, hungry for fresh flesh.
You, as a zombie resistance member (and the last survivor who knows how to code), was designated to develop a system to share resources between non-infected humans.

## Tasks
You will develop a mobile application that consumes a REST API which will store information about the survivors, as well as the resources they own.
In order to accomplish this, the system must fulfill the following use cases, sorted by importance to guarantee the survival of the group.

- Sign in as survivor
If it is first time the application is running and the user has not created a survivor profile you must force the user create a new one. To do that, you will need to provide: `name, age, gender, last location`. You will also need to identify some items that belongs to the user, like: water, food, medication and ammunition.
After the creation of your profile, store on device its identifier to avoid new registrations. Their belongings must be declared when they are first registered in the system. After that they can only change their inventory by means of trading with other survivors.

- Update your survivor location
Your survivor data must be up to date, so your app should update the location of your survivor. To do that, you need to use your unique identifier and pass down the new coordinates.


- List of contacts
The user can meet people and connect with them. This relation will provide you the ability to make trades and, if the person got infected, you can flag him/her.
To create a new connection you have to use the other user's identifier.

- Flag survivor as infected
In a chaotic situation like that, it's inevitable that a survivor may get contaminated by the virus. When this happens, we need to flag the survivor as infected.
An infected survivor cannot trade with others, cannot access/manipulate their inventory, nor be listed in the reports (infected people are kinda dead anyway, see the item on reports below).
A survivor is marked as infected when at least three other survivors report their contamination.
When a survivor is infected, their inventory items become inaccessible (they cannot trade with others).

- Trade items
Survivors can trade items among themselves, **but for it to happen they should be near from one another** (last location)

All trades must respect the price table below, where the value of an item is described in terms of points.

**Both sides of the trade should offer the same amount of points**. For example, 1 Water and 1 Medication (1 x 4 + 1 x 2) is worth 6 ammunition (6 x 1) or 2 Food items (2 x 3).
The trades themselves won't be stored by the API, but the items will be transferred from one survivor to the other.

| Item         | Points   |
|--------------|----------|
| 1 Water      | 4 points |
| 1 Food       | 3 points |
| 1 Medication | 2 points |
| 1 Ammunition | 1 point  |

## REST API

To communicate with the server you'll have available the endpoints documented in this swagger: http://zssn-backend-example.herokuapp.com/swagger-api/index.html

## Notes
- You can use your prefered language
  - Java or Kotlin for Android;
  - Swift or Obj-c for iOS;
- You can choose one multi-platform framework (React Native or Flutter);
- You can use any library or framework of your choice;
- You're not allowed to use WebView strategy (Cordova, Phonegap, Ionic, PWA and other webapps are also not allowed);
- You should send a README explaining how decisions were made;
- Use git and try to make small commits. After completing the test, push the code to a private repository (Bitbucket and Gitlab has free private repositories) and give us read permission;
- You can auto flag as infected, but remember, don't do SPAM, as a survivor you can report the same survivor just once.

# What will it be evaluated
1. Code modularization, encapsulation and general organization
2. The functionality and interface will also be evaluated
3. User Experience
4. Trade of items (Feature)
5. Testing

## Plus
1. Use the GPS location or Maps API to manage user locations;
2. Use a QRCode strategy to meet new people;

**Important**: For the evaluation keep this in mind: you don't need to complete every single feature listed in this test (consuming every single API in the documentation). For example, you can implement just the Survivor CRUD interface. But the less features you implement, the more you have to nail what you deliver. So, if you deliver just 1 feature, we expect it to be the most perfect implementation (structure, organization, testing, style, overall quality, fanciness, etc). The more feature you deliver, the less details you have to add. It's your choice.

HAVE FUN ;)
