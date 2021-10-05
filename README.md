# Dittobnb

Dittbnb is a small web app designed to serve as an example of how Ditto's developer tools can be integrated into a codebase.

![image](https://user-images.githubusercontent.com/13909354/112368768-aa98f280-8c98-11eb-934e-deba171bb5f0.png)

## Connecting the example app to your workspace

In just a few minutes, you can have a local instance of Dittobnb fully synced up with your own Ditto account.

### Initial setup

1. Clone the repository
2. Install dependencies `npm install`
3. Start the web app `npm start`

### Populating your component library

1. Sign in to your Ditto account
2. Navigate to [your component library](https://beta.dittowords.com/components/all)
3. Enable [Developer Mode](https://www.dittowords.com/docs/ditto-developer-mode) for your component library if it isn't enabled already
4. In the top-right corner, click **New Component** -> **Import from JSON**
5. Upload `src/ditto/base.json` (found in this repository) and follow the prompts to finalize the import
6. Repeat the import process with `src/ditto/spanish.json` (found in this repository); **when prompted for a variant name, make sure to name your variant "Spanish"**

You should now have a component library populated with components that have both base text and a variant.

### Authenticating with the Ditto CLI

1. Sign in to your Ditto account
2. Navigate to your [user settings page](https://beta.dittowords.com/account/user)
3. Generate an API key by clicking the blue **Create Key +** button in the bottom section
4. Copy the generated API key to your clipboard
5. In your terminal, navigate to the root of your cloned `ditto-demo` instance
6. Run `yarn sync`

If you didn't encounter any errors, your Ditto account and your Dittobnb project should now be connected.

### Making an example change

1. Sign in to your Ditto account
2. Navigate to your [component library](https://beta.dittowords.com/components/all)
3. In the search input near the top of the screen, search for the text "Travel the world with your family"
4. Select the component and, using the detail panel on the right side of the screen, change the text to "Go anywhere" and click **Save Edits**.
5. In your terminal, navigate to the root of your cloned `ditto-demo` instance
6. Run `yarn sync`

After the sync finishes, the running app should automatically reload to reflect the change made in Ditto!

## More Information

The companion Dittobnb Figma file can be found here: https://www.figma.com/community/file/956627227087012313

For more information on what Ditto offers for developers, go to https://developer.dittowords.com.
