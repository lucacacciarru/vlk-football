# VLK Football

[![codecov](https://codecov.io/gh/lucacacciarru/vlk-football/branch/main/graph/badge.svg?token=932AEHVSYP)](https://codecov.io/gh/lucacacciarru/vlk-football)
[![Codecov](https://github.com/lucacacciarru/vlk-football/actions/workflows/codecov.yml/badge.svg)](https://github.com/morfeojs/morfeo/actions/workflows/codecov.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/github/license/lucacacciarru/vlk-football)](https://github.com/morfeojs/morfeo/blob/main/LICENSE)

---

## Getting started

### Setup the environment

Copy the file `.env.example` and rename the new file `.env.local`, from this file you can customize the environment variables.
For instance, if you need to run the `json-server` in a different port, you can set the `JSON_SERVER_PORT` to a different value, for example:

```
JSON_SERVER_PORT=3001
REACT_APP_API_URL=http://localhost:3001
```

### Run the application

To run the application, run the command:

```bash
npm run dev
```

## Testing

### `npm run test`

Launches the tests

### `npm run test:watch`

Launches the tests in watch mode

### `npm run test:coverage`

Launches the tests and show the current coverage
