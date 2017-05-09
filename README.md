
Advice App
Full Stack Project
By Maggie Casey

Link to back-end Repo: https://github.com/Maggicorp/advice_back_end
Link to font-end Repo: https://github.com/Maggicorp/front-end-full-stack
Link to deployed Project: https://maggicorp.github.io/front-end-full-stack/
Third party api's - https://quotesondesign.com/api-v4-0/
                  - https://randomuser.me/


What is does and how it works:

The advice app allows users to create a personalize advice library of advice they think is important for them to take, then allows them to record if they are taking this advice or not.  The app returns information about what percent of the time people are taking their own advice.  The user can write their own advice, or all advice that has already been written from the advice cloud.  Additionally, users can view data from a third party api called to get inspiration about new advice to write.  Once advice has been added to the personal advice libray users can edit or delete it. When a user deletes their advice, all times they voted to take or not take the advice is also deleted. When a user updates their advice their votes on the pre updated advice are still counted. There is also the optional to deleted all advice, which clears the advice library and the advice taken tracker.

The adivce app uses a rails api with three resource tables, user, advice, and take_advice.  User has the users' sign in information, and it has a has many relationship to both advice and take_advice.  Advice belongs to user and has a has many relationship to take_advice.  Advice contains an idea column with  strings of advice that the user can add, create, delete or edit.  take_advice belongs to both advice and user, and tracks if the users has chose to take the adivce by storing a 0 or 1 value, 0 for no and 1 for yes, in the yes_or_no column of the take-advice table.

I ran into many issues early on related to my heroku configuation to deploy the server, as well as issues with correctly inheriting from Open Controller to use the current_user method.  Another problem I had was trying to use the take from the take_advices table to determine which advice the users took the most and which the user took the least.  I was not able to figure out how to correcly retrieve that data.

I also had some issues with the third party api. The first third party api was only available as http and I needed it to work with https.  The second one was https secure but had less relevent and interesting advice and it more like random quotes that are focused on design.  The third party api I used for that is - https://quotesondesign.com/api-v4-0/.

I also used another third party api to help generate random user names.  I was inspire by my own difficulty in creating new user names and not wanting to give away personal information, so I appreciate having an api generate a new user name for me.  The api - https://randomuser.me/ - generates two random names from the united states, I was able to specify that parameter, and then I combined them as a string with the last name capitalized to make a user name.  I really like this api because it has useful customizable features.

User Stories:
1.) As a user I want it to be fun and easy to click through advice
2.) As a user I want it to be simple to add and subract advice
3.) As a user I want the sign in process to be easy.
4.) As a user I want the mobile version of the app to be readable

Wireframe:
http://imgur.com/a/0DX16
