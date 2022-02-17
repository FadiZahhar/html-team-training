### React.js

This page will quickly go over how to make use of the useEffect hook in React to retrieve data from an API.

## Hooks

### useEffect to fetch data

The component will be responsible for displaying an image of a git user and some data that is received from the API that we are fetching from. To do this, we'll need to:

1- Import useState and useEffect.

2- Create a Fetch data function to get data from an API using
async and await and put them into a new array by useState.

3- Create our useEffect function and invoke the Fetch data
function inside.

4- Map the fetched data array.

5- Display and style the data.
