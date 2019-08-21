<!-- x=0 y=0 z=0 -->
# Press Craft {.display-2 .text-center}

---
[![npm](https://img.shields.io/npm/v/presscraft.svg)](https://www.npmjs.com/package/presscraft)

You can create impress.js presentations simply with a MarkDown document Dynamicly.  
**Noitic:This very markdown file is also a impress.js presentation**  
Presscraft will handle sync your MarkDown File.  
What is impress.js ? if you are wondering, you can check out this magic repository [impress.js](https://github.com/impress/impress.js), which is why Presscraft can work.  
Just simply press right arrow or space bar

------
<!-- x=0 y=2000 -->
## See ! It's very easy

Just type `-` six times in your markdown file wherever you want, then you can create a presentation step, and put this step location at the beginning of the step like `<!-- x=0 y=2000 -->`, this comment, which will be removed in browser, descrip this step location. For Example:
this markdow file you are reading.

------
<!-- x=2000 y=2000 rotate=90 -->
## Installation

---

- I suggest add presscraft to development dependencies
```bash
npm install presscraft --save-dev
```

- For global install

```bash
npm install -g presscraft
```

- In case you're using yarn

```bash
yarn add presscraft -D
```

------
<!-- x=2000 y=3000 rotate=180 -->

## Useage

- Install by `--save-dev`, you shoud add a script in your package.json, like example below:
```json
{
  ...
  "scripts": {
    "psc": "presscraft -p 3000 -f /path/to/file" // -p means port, -f means file you want to view
  },
  "devDependencies": {
    "presscraft": "^0.0.5"
  }
  ...
}
```

Then you can start presscraft with `npm run psc` or `yarn psc`, then the browser should run automaticly.

- For global installation, you can simply run `presscraft -p 3000 -f /path/to/file`
