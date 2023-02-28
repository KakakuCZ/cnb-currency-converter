# Awesome currency converter

It uses `https://www.cnb.cz` as a source.

### Application start

- `make all`
  - it runs application from zero including
    - installation
    - build
    - start server (production mode)
- `yarn start`
  - it runs application in dev mode

Express server was used mainly due to CORS policy problems from client to cnb.cz servers.
