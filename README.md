# Tech Career Shifter Philippines Starter Project Template

๐ Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript โก๏ธ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, VSCode, Netlify, PostCSS, Tailwind CSS.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project.

### Features

Developer experience first:

- โก [Next.js](https://nextjs.org) for Static Site Generator
- ๐ฅ Type checking [TypeScript](https://www.typescriptlang.org)
- ๐ Integrate with [Tailwind CSS](https://tailwindcss.com)
- โ Strict Mode for TypeScript and React 18
- ๐ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- ๐ Code Formatter with [Prettier](https://prettier.io)
- ๐ฆ Husky for Git Hooks
- ๐ซ Lint-staged for running linters on Git staged files
- ๐ Lint git commit with Commitlint
- ๐ฆบ Unit Testing with Jest and React Testing Library
- ๐งช E2E Testing with Cypress
- ๐ก Absolute Imports using `@tcs` prefix
- ๐ VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- ๐ค SEO metadata, JSON-LD and Open Graph tags with Next SEO
- โ๏ธ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- ๐ฑ๏ธ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- ๐ฏ Maximize lighthouse score

Built-in feature from Next.js:

- โ Minify HTML & CSS
- ๐จ Live reload
- โ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- ๐ Production-ready

### Requirements

- Node.js 14+
- Yarn 2+

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/.../tcs-starter my-project-name
cd my-project-name
yarn install
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
โโโ README.md                       # README file
โโโ __mocks__                       # Mocks for testing
โโโ .github                         # GitHub folder
โโโ .husky                          # Husky configuration
โโโ .vscode                         # VSCode configuration
โโโ public                          # Public assets folder
โโโ src
โ   โโโ __tests__                   # All tests, including for Next JS pages
โ   โโโ layouts                     # Layouts components
โ   โโโ pages                       # Next JS Pages
โ   โโโ styles                      # Styles folder
โ   โโโ templates                   # Default template
โ   โโโ utils                       # Utility functions
โโโ tailwind.config.js              # Tailwind CSS configuration
โโโ tsconfig.json                   # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```shell
$ yarn build
$ yarn start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also remove unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
npm run build-prod
```


### Testing

All tests are hosted in the `__tests__` folder. The file name matches the target file to test with an added `.test` extension, i.e., `Meta.test.tsx` tests the `Meta.tsx` file, `about.test.tsx` tests the `about.tsx` file, etc.

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=...to-follow)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Windows.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

WTF Permissive License, Copyright ยฉ 2022

See [LICENSE](LICENSE) for more information.

---

Made with โฅ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

[![React SaaS Boilerplate](https://creativedesignsguru.com/assets/images/themes/next-js-saas-starter-kit.jpg)](https://nextlessjs.com)
