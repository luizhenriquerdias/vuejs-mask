### Features

- Just install and use. Doesn't require additional configurations.

- Works with input (html), v-text-field (Vuetify) and q-input (QuasarJS)

- Extremely lightweight

### Installation

```js
npm install vuejs-mask --save

import Vue from 'vue'
import mask from 'vuejs-mask'
Vue.use(mask)
```

### Usage

```html
<input v-model="model" v-mask="['(##) ####-####', '(##) #####-####']" />

-ou- 

<v-text-field v-model="model" v-mask="['(##) ####-####', '(##) #####-####']" />

```