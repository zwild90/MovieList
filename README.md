# Movie List Exension

Chrome Extension app that saves list of Movies and TV Shows a user wants to save and keep track of.

Uses the Rotten Tomatoes Api for data;

[Icons](https://react-icons.github.io/react-icons/icons?name=ai)

To clear list:
1. Right click page and inspect
2. Click on Application tab
3. Click on button, 'Clear site data' 

Features to Add:
- [ ] Filter (Ex: Genre, Watched/Unwatched/All, Movie/TV/All)
- [ ] Sort (Ex: Alphabetical, Date Added, Release Date)
- [ ] Search Section Collapsible (Add Search icon to input on left and thats the button to collapse section)
- [ ] Fix Popup Size 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Adding Chrome Extension

1. Clone repo `git clone <git-repo-url>`
2. Run `npm install`
3. Run `npm run compile`
4. Open Chrome Browser and go to the [Extensions](chrome://extensions/) Page
5. Click on 'Load unpacked' and select `build` folder