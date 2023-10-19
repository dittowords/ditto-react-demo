# DittoPay — React Demo App

DittoPay is a small React app that corresponds with the sample project in your workspace. With this sample app, you can set up our developer integrations[TODO: LINK DEV DOCS] to sync text edits in just a few minutes**.**

We also use the sample app to showcase how you can use Ditto’s developer integrations in a React environment for:

- Handling plurals
- Translation / localization with Variants
- Componentization
- Variable interpolation

![Screenshot of DittoPay]("https://raw.githubusercontent.com/dittowords/ditto-react-demo/4aad67af3997ffcce004b1e211d1c738c6bc3ca1/public/dittopay.png")

We showcase this functionality with multiple frameworks:

- On [master](https://github.com/dittowords/ditto-demo/tree/master), DittoPay is integrated with Ditto **using [ditto-react](https://github.com/dittowords/ditto-react).**
- On [react-i18next](https://github.com/dittowords/ditto-demo/tree/react-i18next), DittoPay is integrated with Ditto **using [react-i18next](https://react.i18next.com/).**

If you switch between the branches, make sure to re-run `npm install` to ensure your installed dependencies remain up-to-date.

## 1. Running the App 🛠

To run the sample app locally:

1. Clone this repository
2. `cd` into the repo and run `npm install`
3. `npm run dev`

## 2. Setting up the Ditto CLI 🤖

This repo is already set up with the string files and string IDs of the sample project in your workspace, as well as a [config for the CLI](https://github.com/dittowords/ditto-react-demo/blob/master/src/ditto/config.yml) to sync text from the DittoPay sample components for React.

This means all you have to do is install and authenticate to the CLI to have things be hooked up from end-to-end:

1. **Install the CLI:** In the root of the repository, run `npm install`. This will install all dependencies recorded in the [package.json](https://github.com/dittowords/ditto-react-demo/blob/master/package.json) file, where the latest version of the Ditto CLI is listed.

2. **To authenticate, run the CLI:**
   In this project, we’ve set up a simple [NPM script](https://docs.npmjs.com/cli/v10/using-npm/scripts) to enable using the Ditto CLI from any subdirectory, which you can view in the `scripts` property of the [package.json] (https://github.com/dittowords/ditto-react-demo/blob/master/package.json) file. You can always run the CLI directly using `npx` (see CLI docs[LINK]), but this setup reliable and is similar to one you might want in your own production environment.

   You’ll be prompted to provide your API key if it’s your first time running the CLI

Note: you can view the CLI config at `/src/config.yml`:

```jsx
sources:
  components:
    folders:
      - id: sample-components
        name: Sample Components
variants: true
format: flat
```

## 3. Syncing Edits ✍️

1. Make edits to DittoPay text in Ditto[TODO: Link Web-app]. You can make edits to the components connected in the DittoPay sample project itself, or to the sample components directly!
2. Pull in the latest edits via the Ditto CLI:

   `npm run sync`

## Feature Requests and Support

Is there another library/framework that you think we should create a demo for?

Is there a Ditto feature you want an example for in React?

Please let us know by opening an [issue](https://github.com/dittowords/ditto-react-demo/issues) or sending us an email!
