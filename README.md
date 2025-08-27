# DittoPay — React Demo App

DittoPay is a small React app that demonstrates how to use [Ditto](https://dittowords.com) for managing text and translations. The string files (generated via [Ditto's CLI](https://developer.dittowords.com/cli-reference/authentication)) are located in `src/ditto` and integrates with [react-i18next](https://react.i18next.com/), a popular internationalization framework for JavaScript.

![Screenshot of DittoPay](https://raw.githubusercontent.com/dittowords/ditto-react-demo/4aad67af3997ffcce004b1e211d1c738c6bc3ca1/public/dittopay.png)

### Next.js Compatibility

The hook examples in this demo work identically in Next.js applications. However, the initialization differs based on your Next.js version:

- **Next.js 13+ with App Router**: Use `react-i18next` directly (same as this demo)
- **Next.js with Pages Router**: Use [`next-i18next`](https://github.com/i18next/next-i18next) which requires additional setup with `serverSideTranslations` for SSR/SSG support

The `useTranslation` hook and all i18next features work the same way regardless of which approach you use.

## Running the App 🛠

To run the sample app locally:

1. Clone this repository
2. `cd` into the repo and run `npm install`
3. `npm run dev`

**Note:** This demo showcases the integration pattern between Ditto and react-i18next. To see it working with your own content, connect your Ditto workspace by updating the CLI configuration in `src/ditto/config.yml`.

## Using Ditto with react-i18next Hooks 🪝

### Basic Usage
```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('welcome_message')}</h1>;
}
```

### Variable Interpolation
```jsx
const { t } = useTranslation();
t('greeting', { name: userName }); // "Hello, {{name}}!"
```

### Language Switching
```jsx
const { i18n } = useTranslation();
i18n.changeLanguage('es'); // Switch to Spanish variant
```

## Feature Requests and Support

Is there another library/framework that you think we should create a demo for?

Is there a Ditto feature you want an example for in React?

Please let us know by opening an [issue](https://github.com/dittowords/ditto-react-demo/issues) or sending us an email!
