
# Random User App

In this exercise, you will build a react app that fetches a random user from an api and displays the user information in a user detail component.  The user detail component will have a button for toggling less/more views of the user data.

## Set up

- Make a new react app with `npx create-react-app rando-user`
- `cd` into the app directory and install `axios`
- Clear out the boilerplate and add a header to the app component with a nice title for our random user app

## Fetch a User

When the App component loads, make a request to `https://api.randomuser.me/` to fetch data about a random user. Store that user's information in state under the variable `currentUser`. Render some information about them on the page.

## Display Some User Data

- Add a `UserSummary` component.
- `UserSummary` should take a single prop, `userData`.  Import it and use it inside the App component.  Pass `currentUser` to `UserSummary` as a `userData` prop, i.e., `<UserSummary userData={currentUser} />`
- Inside the `UserSummary` component, if the `userData` prop is null, render a message saying "there is no user data"
- *else* if UserData is not null, render the user's name, and email

## More or Less

- Inside `UserSummary`, add a state variable `showMore` with an initial value of `false`
- Add a button to `UserSummary` that calls a method to toggle `showMore` to be true if is false and flip it to false if it is true.
- Adjust the component so that if `showMore` is true, then the user's name, email, street, city, state, and username are displayed.  If `showMore` is false, just show the name and email as before

### Bonus

- If `showMore` is true, display the user's medium picture as well.

- Add more to the `UserSummary` to display even more information about the user, or maybe track all the user's that have been fetched and display them in a UserList component
