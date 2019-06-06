# This repository is not maintained any more!!!
Feel free to fork it

#### Introduction
VueJS component wrapper for [Khalti SDK](https://github.com/khalti/khalti-sdk-web)

#### Demo
[https://codesandbox.io/s/k574mxpl17](https://codesandbox.io/s/k574mxpl17)

#### Installation
##### Install dependency

`npm install khalti-web --save`

##### Install component

`npm install vue-khalti --save`

#### Usage

##### Browser
```javascript
<script src="dist/vue-khalti-min.js"></script>
<script src="path/to/vue.js"></script>
<script>
	Vue.use(VueKhalti)
</script>
```

##### Build

```javascript

<script>
	import VueKhalti from 'vue-khalti'
	export default {
		components: { VueKhalti }
	}
</script>
```
```
<template>
	<div>
		<vue-khalti />
	</div>
</template>
```
#### Overwrite default config with your config

```javascript
data () {
	return {
		khaltiConfig: {
			"publicKey": "YOUR_PUBLIC_KEY",
		    "productIdentity": "YOUR_PRODUCT_ID",
		    "productName": "YOUR_PRODUCT_NAME",
		    "productUrl": "YOUR_PRODUCT_URL",
		    "amount": 1000,
		    "eventHandler": {
		        onSuccess (payload) {
		            console.log(payload);
		        },
		        onError (error) {
		            console.log(error);
		        },
		        onClose () {
		            console.log('widget is closing');
		        }
		    }
		}
	}
}
```
```
<vue-khalti v-bind="khaltiConfig" />
```

#### Change apperance of the component
##### Wrap your code inside `<vue-khalti>`.
```
<vue-khalti ref="khaltiCheckout">
	<img
		src="https://d7vw40z4bofef.cloudfront.net/static/www/images/khaltilogo.png"
		@click="onKhaltiClick" />			
</vue-khalti>
```
##### Access the component via `$refs`. The default event handler is `onClick`. 

```javascript
methods: {
	onKhaltiClick () {
		const khaltiCheckout = this.$refs.khaltiCheckout
		khaltiCheckout.onClick()
	}
}
```
