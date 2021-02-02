## Readme

Overall, I thought the project was pretty straight forward, and wasn’t too confused on what steps to take. 

Having redux installed, the store setup, and ducks’ pattern already in place helped save some time as well as the content provided. I did take a little longer trying to guess the margins and colors though.

Two packages were included in addition:


1. [react-hook-form](https://react-hook-form.com/)
2. [react-string-replace](https://github.com/iansinnott/react-string-replace#readme)

React hook form was included for validation checking, (future) could probably add better error messages to this. For now, I just have the “type” as the message, but in the future could match that to a better message.  

React string replace was included to handle replacing the bracketed strings with bold html tags. I didn’t want to dangerouslySetHTML and used this helper library to avoid that. In the future, could probably add better checks for these inputs as well (such as restricting characters). 

I also added a bit to the initial state; just some helper objects/strings to keep things a little cleaner