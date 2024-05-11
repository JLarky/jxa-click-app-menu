Based on https://gist.github.com/bumaociyuan/a37c78cd5503f371b391 and [bun-self](https://www.npmjs.com/package/bun-self)

## Usage

Clone the repo

```bash
git clone https://github.com/JLarky/jxa-click-app-menu.git
cd jxa-click-app-menu
```

Run it as a regular script

```bash
./script.run.js
```

To make it do exactly what you want, edit `btnDebug` and app name in `script.run.js`

```js
// show About Finder popup
menuItemTestClick("Finder", ["Finder", "About Finder"]);
```
