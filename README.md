DEMO VIDEO:
https://www.youtube.com/watch?v=6eMjvtjyxAQ&list=PLHZYcg_jTrbRiLQb9VqVtPXBC-gpDFFjv  (QUICK DEMO)
https://www.youtube.com/watch?v=2OzV0zqbs6w&list=PLHZYcg_jTrbRiLQb9VqVtPXBC-gpDFFjv  (LONG DEMO)


DEMO PLAYLIST
https://www.youtube.com/playlist?list=PLHZYcg_jTrbRiLQb9VqVtPXBC-gpDFFjv


TIME STAMPS (QUICK DEMO):
Logging overnight sleep, viewing, editing-> 00:00
Logging sleepiness, viewing, editing -> 00:23
Evidence of backup -> 00:32


TIME STAMPS (LONG DEMO):
Logging overnight sleep, viewing, editing-> 00:03
Logging sleepiness, viewing, editing -> 01:02
Evidence of backup -> 01:50
Explantion of useful initial view -> 02:40

--Readme document for Johnathon Valles, vallesja@uci.edu, 88843608--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?
20/20
- 2/2 The ability to log overnight sleep
- 2/2 The ability to log sleepiness during the day
- 2/2 The ability to view these two categories of logged data
- 4/4 Either using a native device resource or backing up logged data
- 4/4 Following good principles of mobile design
- 4/4 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
30-40 hours.


3. What online resources did you consult when completing this assignment? (list specific URLs)
https://ionicframework.com/docs/components
https://ionicframework.com/docs/vue/lifecycle#ionic-framework-lifecycle-methods
https://ionicframework.com/docs/vue/storage
https://github.com/ionic-team/ionic-storage
https://www.youtube.com/watch?v=h_IhS8QQjUA
https://ionicframework.com/docs/theming/basics
https://javascript.info/
https://www.typescriptlang.org/
https://ionicframework.com/docs/angular/your-first-app
https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://angular.io/


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
Letsy Flores - overall design


5. Is there anything special we need to know in order to run your code?
Other than running npm install, nothing.



--Aim for no more than two sentences for each of the following questions.--



6. Did you design your app with a particular type of user in mind? If so, whom?
I envisioned college students using this application and structured the UI according to
how a college student may navigate/interact with the app.


7. Did you design your app specifically for iOS or Android, or both?
I designed my application for both platforms in order to maintain consistency. However,
the platform does perfom some custom stlying when the application is running.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
Users provide when they went to sleep, awoke, and optional notes.
I believe this an efficient and user-friendly way of logging the data.
Users are also able to delete and edit logs (CRUD operations).


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
Users provide their sleepiness value using a slider and the date using a datetime component.
I believe this an efficient and user-friendly way of logging the data.
Users are also able to delete and edit logs (CRUD operations).


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
Individual logs are displayed in cards within the Sleep and Sleepiness pages.
Sleepiness and Sleep statistics are displayed in the Home page.
Viewing data this ensures a user has a dedicated page for each type of data.


11. Which feature choose--using a native device resource, backing up logged data, or both?
Backing up logged data to local storage. (ionic storage)


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
N/A


13. If you backed up logged data, where does it back up to?
Ionic Storage uses IndexedDB and localstorage where available.


14. How does your app implement or follow principles of good mobile design?
Toasts -> used to inform a user of the result of a log CRUD operation (e.g., success, error).
Modals -> used to bring up a contained edit/update form for individual logs.
Edit/Delete/Cancel buttons -> allow a user undo any actions.
Useful initial view -> the home page displays a summary of the sleep scale, and also encourages the user to proceed to the sleep and sleepiness pages to begin logging.
Error prevention -> when creating logs, a log will not be created if there is a violation in the start and end constraints (informed with a red toast).
