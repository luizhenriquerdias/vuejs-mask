### Features

- É só instalar e usar. Não requer configurações extras.

- Funciona tanto para v-text-field (Vuetify) quanto input (html)

- Extremamente leve

### Instalação

```js
npm install vuejs-mask --save

import mask from 'vuejs-mask'
Vue.use(mask)
```

### Uso

```html
<input  v-model="telefone"  v-mask="['(##) ####-####', '(##) #####-####']" />

-ou- 

<v-text-field  v-model="telefone"  v-mask="['(##) ####-####', '(##) #####-####']" />

```