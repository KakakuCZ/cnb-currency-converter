# Awesome currency converter

It uses `https://www.cnb.cz` as a source.

### Application start

- `make all`
  - It runs application from zero including
    - installation
    - build
    - start server (production mode)
- If you haven't installed `make` you have to type these commands:
  - `yarn` (installation)
  - `yarn build` (build production bundle)
  - `yarn prod` (start server)

### Developing
- `yarn dev` (start development server in watch mode)
- `yarn test` (run unit tests)

Express server was used mainly due to CORS policy problems from client to cnb.cz servers.
