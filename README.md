# Robofriends

App that displays individual cards for a list of robots/customers, with their personal information attached such as e-mail or name. The app features a search bar that updates dynamically when the user types something in it.

![](https://github.com/Fly0w/robofriends/blob/main/Media/Robofriends%20preview-min.gif)

## History

This ReactJS app was made during the Zero-to-Mastery Web Developer course, in the "learning ReactJS" section. 


## Features

- List of robots fetched from an [API](https://jsonplaceholder.typicode.com/users)
- App state management
```javascript
    this.state = {
        robots: [],
        searchfield: ''
    }
```
- Dynamically updated search bar
- Component-integrated scrolling bar

## License

[MIT](https://choosealicense.com/licenses/mit/)
