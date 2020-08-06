# Frontend Development Challenge

This is a technical challenge to test Frontend development-related skills. By building a working example
we can better understand your way of working, how you structure your code, thoughts, and take some
design decisions along the way.

## Landing page with basic reactivity

We provide the desktop version of a landing page of a hypotetic Tesla Model S website.
It includes a battery range calculator that should use some basic reactivity principles.

The design is in [Adobe XD][xd] format as it's [free for download][xd] and available
for both macOS and Windows. It's organized with artboards containing all required assets
to complete this challenge.

> If you have any trouble to open the layout, please send a message to `erick.wilder@sendcloud.com`
> and we'll try to help you and eventually provide an alternative.

Your challenge is to implement the provided design following the requirements below.

## Requirements

We want to see how far you can go given the following requirements:

### Functionals

- Implement a battery range calculator for two types of the Tesla Model S that
  displays the maximum distance covered by each type of car, based on the user
  choices for speed, temperature (with and without heating/cooling), and wheel size.
  It should have the following controls
  - A range of speeds from `70` to `140` km/h using steps of `10km`;
  - A range of temperatures from `-10º` to `40º` using steps of `10º`
  - A toggle for air conditioner/heating system. The temperature should affect how this component
    is displayed
  - A wheel size selection with `19"` and `21"`.
- Use the JSON files from the `data/` directory to build the calculator behavior

> Use the [reactivity example file](reactivity-example.html) for a visual representation of the calculator.

### Non-functionals

- The project MUST be written in HTML, JavaScript and CSS, _without using any other
  library or framework_
  - You can make use of a CSS pre/postprocessor and polyfills.
  - We provide a seed project using [Parcel bundler](https://parceljs.org/) but you can make use any module
    bundler or automation tools.
- Include a `README.md` file with instructions of how to run your final project.
- Make sure that the project is SEO-friendly by using proper HTML semantics.

#### Bonus points

- Make the design responsive; it's up to you to decide how the design should look
  like on smaller and very large screens.
- Optimize resources for content delivery
- Provide a usable version of the project whenever _JavaScript is disabled_.
- 🤩 Use animations to make the interactions with the UI more fluid.
- ♿️ Make your project fully responsive without sacrificing either usability _or_ accessibility
- 🐢 Keep an eye on performance and apply optimizations as much as you can.
- 🚀 Deploy it as a static website on [Netlify](http://netlify.com) or [Vercel](http://vercel.com)

> Note: Your project **MUST** be fully functional after following the instructions
> of your `README.md` file.

## Delivering the project

Publish the project on a _private_ Git repository using either GitHub or Gitlab.
Add the user `@erickwilder` as a collaborator for this repository so that we can easily get access to your project.

When ready to submit your project, send an email to `erick.wilder@sendcloud.com` notifying about the completion
of the challenge with the link of your VCS repository.

## Tips

- Microsoft provides [free Windows virtual machine][vms] images for both Internet
  Explorer and Edge.
- [BrowserStack][browserstack] offers a free trial that you can use to test on
  different platforms and browsers.
- You can export an asset from Adobe XD by selecting an object and using the `File > Export..`
  menu

[xd]: https://www.adobe.com/nl/products/xd.html
[browserstack]: https://www.browserstack.com/
[vms]: https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
