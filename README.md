# VLK Football

## Getting started

### Setup the environment

Copy the file `.env.example` and rename the new file `.env.local`, from this file you can customize the environment variables.
For instance, if you need to run the `json-server` in a different port, you can set the `JSON_SERVER_PORT` to a different value, for example:

```
JSON_SERVER_PORT=3001
REACT_APP_API_URL=http://localhost:3001
```

### Run the application

You need to run two commands to use the application:

```bash
npm start
```

```bash
json-server --watch data/db.json --port 7000
```

## Testing

### `npm run test`

Launches the tests

### `npm run test:watch`

Launches the tests in watch mode

### `npm run test:coverage`

Launches the tests and show the current coverage

test
