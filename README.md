# files.macro

![Travis (.org) branch](https://img.shields.io/travis/ridermansb/files.macro/master.svg?style=flat-square) ![npm](https://img.shields.io/npm/v/files.macro.svg?style=flat-square) [![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square)](https://github.com/kentcdodds/babel-plugin-macros) [![Greenkeeper badge](https://badges.greenkeeper.io/ridermansb/files.macro.svg?style=flat-square)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FRidermansb%2Ffiles.macro.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FRidermansb%2Ffiles.macro?ref=badge_shield)

> Get array with file names in build time

## Usage

Just call function passing directory parameter:

```js
import files from "files.macro";

const allImages = files("./assets/images");

// Will transpiled to

//    ↓ ↓ ↓ ↓ ↓ ↓

const allImages = [ 'avatar.png', 'catalog.png' ] 
```


## License

MIT

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FRidermansb%2Ffiles.macro.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FRidermansb%2Ffiles.macro?ref=badge_large)