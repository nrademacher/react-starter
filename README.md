## Webdev Starter 🚀 (WIP)

This is a light-weight boilerplate for getting started quickly with a new web development project.

The idea is to be able to dive right in on a project idea without having to spend any time/energy on setup and config, yet with all the essential
DX features, such as hot reloading and optimized production builds.

You're also not locked into any JavaScript framework (or using the language at all), but you can easily extend the boilerplate with commands like `yarn setup:react`.

**Disclaimer**: This is an early version and mostly catering to my own learning purposes for now.

### Getting Started

1. Run `yarn` to install dependencies, then `yarn start` to start the development server (`localhost:8080`).
2. Start coding by editing the starter files in the `src` folder.
3. When done, run `yarn build` to create a production build. (Don't forget to customize this README and the relevant fields in `package.json` for your project.)

### Advanced

#### Styling

The main rationale for 'soft-coding' in TailwindCSS is that, if you don't want to spend effort on setup and configurations, you probably don't want to have to create and manage style sheets, either. If you're using this boilerplate, you probably just want to build something that looks good quickly.

Tailwind comes with nice, sane defaults and lets you compose semantic class names so as to allow you to rapidly create aesthetic, responsive UIs. With some knowledge of how CSS works and reading the documentation, it makes for a very smooth, pleasant, and clutter-free way to handle styling.

That said, if you want to write custom CSS, you have several options, including:

* Write your custom styles in the `tailwind.source.css` to use alongside Tailwind. That also allows you to create custom Tailwind style components using `@apply`. See the documentation for details. Note that you will need to rebuild the Tailwind style sheet to see your styles by running `yarn build:tailwind`.
* Link your own style sheets(s) after Tailwind's generated `.tailwind.styles.css`.
* The nuclear option: You can get rid of Tailwind by running `yarn eject:tailwind`. This will:
   1. Uninstall Tailwind's files and dependencies.
   2. Create a `styles.css` file in the `src` folder, along with a very minimal CSS reset (`margin` and `padding` to `0`, `box-sizing: border-box`).
   3. Automatically insert it in `index.html` in place of `.tailwind.styles.css`.

### TODO

- [ ] Flesh out this README
- [ ] More and better scripts
- [ ] Create branch for `npm` users
- [ ] Add useful links/resources section
