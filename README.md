# Kazzie App

Web App to Track your Goals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Font Awesome icons in Angular

### Installation

- Run the following commands to install the icons in your application
  `yarn add @fortawesome/fontawesome-svg-core`
  `yarn add @fortawesome/free-brands-svg-icons`
  `yarn add @fortawesome/free-regular-svg-icons`
  `yarn add @fortawesome/free-solid-svg-icons`
  `yarn add @fortawesome/angular-fontawesome`

#### Option One: Usage explicitly in components

- In `app.module.ts` file, import `FontAwesomeModule` from `@fortawesome` package
  `import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'`
- Add `FontAwesomeModule` to the imports array
  imports: [
  FontAwesomeModule
  ]
- To use in a component import the required icon from `@fortawesome/free-solid-svg-icons`

  `import { faPerson } from '@fortawesome/free-solid-svg-icons';`

- Declare a variable `userIcon = faPerson;`

- In your html file render the icon using the `fa-icon` selector

  `<fa-icon [icon]="userIcon"></fa-icon>`

#### Option Two: Icon Library Usage

- In `app.module.ts` file

`import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'`

- import the required icons from `@fortawesome/free-solid-svg-icons`

`import { faFaceLaughBeam as farBeam } from '@fortawesome/free-regular-svg-icons';`

`import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';`

- Add `FontAwesomeModule` to the imports array
  imports: [
  FontAwesomeModule
  ]

- In the `AppModule` class add a constructor and include the `library.addIcons()` function and include all your icons.

  export class AppModule {
  constructor(library: FaIconLibrary) {
  library.addIcons(faPerson, faBars);
  }
  }

- In your html file render the icon using the `fa-icon` selector

  `<fa-icon icon="bars"></fa-icon>`

  `<fa-icon icon="person"></fa-icon>`

- To specify which icon you want to render solid or regular

`<fa-icon [icon]="['far', 'bars']"></fa-icon>` for regular icons

`<fa-icon [icon]="['fas', 'person']"></fa-icon>` for solid icons

`<fa-icon [icon]="['fab', 'angular']"></fa-icon>` for brands icons

### Styling

#### Size

- from black and size increase
  `<fa-icon [icon]="['fab', 'angular']" size="lg" ></fa-icon>`

#### Color

- to red and size increase
  `<fa-icon [icon]="['fab', 'angular']" [styles]="{ stroke: 'red', color: 'red' }"></fa-icon>`

#### Animations

- Infinite Rotate
  `<fa-icon [icon]="['fab', 'angular']" [spin]="true" ></fa-icon>`
