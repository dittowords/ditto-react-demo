# Dittobnb

Dittbnb is a small web app designed to serve as an example of how Ditto's developer tools can be integrated into a codebase.

![image](https://user-images.githubusercontent.com/13909354/112368768-aa98f280-8c98-11eb-934e-deba171bb5f0.png)

## Flavors

Dittobnb currently comes in two different flavors on two different branches:

1. On [master](https://github.com/dittowords/ditto-demo/tree/master), Dittobnb is integrated with Ditto using [ditto-react](https://github.com/dittowords/ditto-react).
2. On [react-i18next](https://github.com/dittowords/ditto-demo/tree/react-i18next), Dittobnb is integrated with Ditto using [react-i18next](https://react.i18next.com/).

The instructions contained in the rest of this README will work independent of the client library used. If you switch between the branches, make sure to re-run `yarn install` to ensure your installed dependencies remain up-to-date.

Is there another library/framework that you think we should create a demo for? Let us know by [opening an issue](https://github.com/dittowords/ditto-demo/issues/new), or feel free to open a pull request!

## Connecting the example app to your workspace

In just a few minutes, you can have a local instance of Dittobnb fully synced up with your own Ditto account.

### 🛠 Initial setup

1. Clone the repository
2. Install dependencies `yarn install`
3. Start the web app `yarn start`

### 🗂 Populating your component library

1. Sign in to your Ditto account
2. Navigate to [your component library](https://beta.dittowords.com/components/all)
3. Enable [Developer Mode](https://www.dittowords.com/docs/ditto-developer-mode) for your component library if it isn't enabled already
4. In the top-right corner, click **New Component** -> **Import from JSON**
5. Upload [ditto-component-library\_\_base.json](src/ditto/ditto-component-library__base.json) and follow the prompts to finalize the import
6. Repeat the import process with [ditto-component-library\_\_spanish.json](src/ditto/ditto-component-library__spanish.json); **when prompted for a variant name, make sure to name your variant "Spanish"**

You should now have a component library populated with components that have both base text and a variant.

### 🔐 Authenticating with the Ditto CLI

1. Sign in to your Ditto account
2. Navigate to your [user settings page](https://beta.dittowords.com/account/user)
3. Generate an API key by clicking the blue **Create Key +** button in the bottom section
4. Copy the generated API key to your clipboard
5. In your terminal, navigate to the root of your cloned `ditto-demo` instance
6. Run `yarn sync`

If you didn't encounter any errors, your Ditto account and your Dittobnb project should now be connected.

### 🖋 Making an example edit

1. Sign in to your Ditto account
2. Navigate to your [component library](https://beta.dittowords.com/components/all)
3. In the search input near the top of the screen, search for the text "Travel the world with your family"
4. Select the component and, using the detail panel on the right side of the screen, change the text to "Go anywhere" and click **Save Edits**.
5. In your terminal, navigate to the root of your cloned `ditto-demo` instance
6. Run `yarn sync`

After the sync finishes, the running app should automatically reload to reflect the change made in Ditto!

### 🖼 Syncing edits from designs (optional)

To sync edits from design all the way to development, you can integrate your Ditto components with a design file. That way, you can also test out sample edits directly from your design file!

1. Duplicate our corresponding [Dittobnb Figma file](https://www.figma.com/community/file/956627227087012313)
2. Import the file as a new Ditto project via our [Figma plugin](https://www.figma.com/community/plugin/798826066406007173/%E2%9C%8D%EF%B8%8F-Ditto-%7C-collaborate-on-copy).
3. Connect your component library to your Ditto project. You can do this quickly via our [Component Suggestions](https://www.dittowords.com/blog/introducing-component-suggestions)!
4. Make an edit to text via our Figma plugin.
5. Just like syncing edits made directly in your component library, navigate to the root of your cloned `ditto-demo` instance and run `yarn sync` to pull in edits made in Ditto.

## More Information

For a high level walkthrough, check out our [Developer's Quick Guide to Integrating Ditto](https://www.dittowords.com/blog/a-developers-quick-guide-to-integrating-ditto).

The companion Dittobnb Figma file can be found here: https://www.figma.com/community/file/956627227087012313

For more information on what Ditto offers for developers, go to https://developer.dittowords.com.

For our general help guides, go to https://www.dittowords.com/docs/introduction.
