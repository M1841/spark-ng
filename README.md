# spark-ng

A passion project Spotify companion app that's meant to include features such as advanced shuffling, detailed statistics, personalized recommendations, trivia minigames and more. The project was just started and it's got a long way before becoming what it's meant to be, but I am determined to make it my next big thing, and I'll make sure to enjoy every step the process. As always, feedback, suggestions and any kind of thoughts related to the project are welcome in [Contact](#contact).

## Getting Started

### Setup

1. Clone the repository by running the following command in your terminal:

``

    git clone https://github.com/m1841/spark-ng.git
``

2. Sign up for a [Spotify Developer](https://developer.spotify.com) account
3. Create a new app from your [Dashboard](https://developer.spotify.com/dashboard/create)
4. Add `http://localhost:4200/` to the `Rediect URIs` field in you App's settings
5. Copy your `Client ID` from the app's settings and replace `[Your-Client-ID]` from inside `src/app/authorize.service.ts` and save the change

``

    ...
    const params = new HttpParams({
      fromObject: {
        client_id: '[Your-Client-ID]',
        response_type: 'token',
        redirect_uri: 'http://localhost:4200/',
        scope: 'user-read-private user-read-email playlist-modify-public playlist-modify-private'
      }
    });
    ...
``
6. Run `npm install` in a terminal inside the `spark-ng` directory to install all the [dependencies](#dependencies)

Those steps only need to be done for the first time. Next, to start the app run the command `ng serve` and open [http://localhost:4200/](http://localhost:4200/) in a browser.

## Contact

If you have any questions, suggestions or feedback about this project, feel free to get in touch with me. You can reach me at [mihaimuresan592003@gmail.com](mailto:mihaimuresan592003@gmail.com), **M1841#8691** on Discord, or connect with me on [LinkedIn](https://www.linkedin.com/in/m1841/). I would love to hear from you!

## Dependencies

- **@angular/animations**: Angular animation library
- **@angular/cli**: Command Line Interface for Angular
- **@angular/common**: Angular common module
- **@angular/compiler**: Angular compiler module
- **@angular/compiler-cli**: Angular compiler CLI
- **@angular/core**: Angular core module
- **@angular/devkit/build-angular**: Angular build tools for building and packaging Angular apps
- **@angular/forms**: Angular forms module
- **@angular/platform-browser**: Angular platform browser module
- **@angular/platform-browser-dynamic**: Angular platform browser dynamic module
- **@angular/router**: Angular router module
- **@types/jasmine**: TypeScript definitions for Jasmine testing framework
- **autoprefixer**: Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website
- **jasmine-core**: Jasmine testing framework core library
- **karma**: A test runner for JavaScript that runs on Node.js
- **karma-chrome-launcher**: A Karma plugin that launches the Chrome browser
- **karma-coverage**: A Karma plugin that generates code coverage reports
- **karma-jasmine**: A Karma plugin that enables Jasmine testing framework in Karma
- **karma-jasmine-html-reporter**: A Karma plugin that generates a HTML report of the test results
- **postcss**: A tool for transforming CSS with JavaScript plugins
- **rxjs**: Reactive Extensions for JavaScript
- **spotify-web-api-js**: Spotify Web API client for JavaScript
- **tailwindcss**: A utility-first CSS framework for rapidly building custom designs
- **tslib**: Runtime library for TypeScript helpers
- **typescript**: A superset of JavaScript that compiles to clean JavaScript output
- **zone.js**: Zone.js is a library for intercepting and keeping track of asynchronous operations in JavaScript applications
