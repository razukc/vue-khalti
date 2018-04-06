##### Introduction
VueJS component wrapper for [Khalti SDK](https://github.com/khalti/khalti-sdk-web)

##### Demo
[https://codesandbox.io/s/k574mxpl17](https://codesandbox.io/s/k574mxpl17)

##### Installation
You'll need to install the dependency

`npm install khalti-web --save`

Install component

`npm install vue-khalti --save`

##### Usage

```
<template>
	<div>
		<vue-khalti />
	</div>
</template>
```
```javascript

<script>
	import VueKhalti from 'vue-khalti'
	export default {
		components: { VueKhalti }
	}
</script>
```

##### Overwrite default config with your config

```javascript
<script>
	...
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
	...
</script>
```
```
<template>
	<div>
		<vue-khalti v-bind="khaltiConfig" />
	</div>
</template>
```




