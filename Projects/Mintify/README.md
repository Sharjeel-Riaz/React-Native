# Mintify

Mintify, developed with precision using [React
Native](https://reactnative.dev/) with [Expo](https://expo.dev/) and adorned with sophisticated [Tailwind CSS](https://tailwindcss.com/) styling, introduces a secure NFT marketplace. Authenticated through esteemed platforms such as [Google](https://developers.google.com/) and [Meta](https://developers.facebook.com/), Mintify offers a minimalist UI for seamless minting and trading.

![Banner](https://raw.githubusercontent.com/Sharjeel-Riaz/React-Native/main/Projects/Mintify/assets/Mintify%20Banner.png)

## Features

- 🔄 Seamless NFT Minting
- 📈 Robust Marketplace Functionality
- 🔒 Secure Authentication with Google and Facebook
- 🎨 Elegant and Minimalist UI Design with Tailwind CSS
- ⚡ Smooth and Efficient Performance
- 🔄 Animation Enhancement with React Native
- 💬 Community Interaction and Social Integration

## Usage

This section explains on how you can create your own local environment for
[Mintify](https://github.com/Sharjeel-Riaz/Mintify).

- First of all, what you need to do is to go to the [documentation](https://reactnative.dev/docs/environment-setup) on react
  native to properly set up your development environment.
- I would prefer to follow through the proper installation of development
  environment through the react native cli method for faster integration.
- After setting up your development environment, you need to clone or fork the
  repository, whatever feels good to you.
- Now open the terminal at the directory where you have the project and run `npm
install` to download all the necessary dependencies.
- Now there are some specific environment variables that you might need to fill
  in order to run the project properly.
- Set up a google cloud account if you have'nt already and create a new project.
- Go to the dashboard of the project that you just created & open the `API &
Services` Category. Onwards select the `OAuth consent screen` and fill in the
  required information to setup your consent screen.
- Now select the `Credentials` category and create a new `OAuth client ID` by
  selecting the `Android` platform.
- You need to add the following:

```
Package name = com.mintify.mintify

SHA-1 certificate fingerprint = "Your fingerprint key without double quotes."
```

- Use the help of internet in order to find your SHA-1 certificate fingerprint
  native to your local development environment.
- Now you have the OAuth client ID for your android device. If you want to test
  it on iOS, you need to create a new OAuth client ID for iOS as well. Again use
  the internet to knock yourself out.
- The next thing you need is to create a facebook developers account for setting
  up its authentication. For
  that you can follow up from here:
  [Facebook](https://developers.facebook.com/)
- Create a new app and fill in the required information. Set its use case to `Other`. You can set its
  type to `Consumer` or whatever you like.
- From the dashboard, add a new product and select `Facebook Login`.
- Make sure that you properly fill up `Basic App Settings` with `Privacy Policy`
  URL & `Terms of Service URL`.
- Now go the settings of Facebook Login and ensure that everything besides
  `Force Web OAuth reauthentication` is turned on.
- Next, we need to provide a Valid OAuth Redirect URI. For that, you need to
  open the terminal and run `npx expo run:android` or `npx expo run:ios` to open
  the expo development environment.
- Copy the App ID from your dashboard at facebook developers and open up
  `app.json` file in the root directory of the project. Also make sure that your
  json file has a bundle identifier for ios devices and a package name for
  android ones. Add the following at the end of your file:

```
"scheme": ["Your slug name", "fb<Your App ID>"]
```

- Once you start your expo project, it will show you a URL similar to this one:

```
exp+mintify://expo-development-client/?url=http%3A%2F%2F192.168.0.14%3A8081
```

- Copy it and now edit it in the following way to make your Valid redirect URI:

```
https://<Your package name>/expo-development-client/?url=http%3A%2F%2F192.168.0.14%3A8081
```

- This is your redirect URI, you can copy it and paste it under the defined
  section and then click on `Save Changes`.
- Create a file named `.env` in the root directory of the project and add the following:

```
EXPO_PUBLIC_GOOGLE_CLIENT_ID = "Your OAuth Android Client ID key with double quotes"

EXPO_PUBLIC_FACEBOOK_CLIENT_ID = "Your OAuth Facebook App ID key with double quotes"
```

- Now run `npx expo run:android` to open the local environment.

- Pro tip: In order to ensure that your application is working; the above
  command builds a gradle configuration and if it does not for your case then
  there might be something wrong with you setting up your environment.

- Feel free to use it or make any necessary modifications `:D`

## Showcase

- Visit the live environment of Mintify Showcase at: [Mintify-Showcase](https://mintify-showcase.vercel.app/)
