![Vercel](https://vercelbadge.vercel.app/api/kaanay03/coinicons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About
CoinIcons.net allows you to download fullsize png cryptocurrency icons, as well as integrate them in your applications using an API. This repository contains *only* the frontend ReactJS code that provides an interface to download the icons.
 
## API Docs
**Base URL:** `https://api.coinicons.net` 

**GET** `/icon/:crypto/:size`

#### Parameters
- `crypto`: The symbol of the cryptocurrency **(ex. BTC, xmr, Eth)**
- `size`: The size of the image **(32x32, 64x64, 128x128)**

#### Examples
- **GET** `/icon/btc/32x32`
- **GET** `/icon/EOS/128x128`
- **GET** `/icon/dash/64x64`

## Contribute
- To report a bug, suggest a feature, or ask a question: open an issue.
- We welcome public contributions for this repository:
  - Fork this repository and clone it locally
  - Create and change to a new branch. `git checkout -b myfeature`
  - Run `npm install` from the project folder and open/edit it in your preferred code editor
  - Open a pull request

# License
This project is released under the [MIT License](https://opensource.org/licenses/MIT).