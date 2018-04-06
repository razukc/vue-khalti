##### Introduction
VueJS component wrapper for [Khalti SDK](https://github.com/khalti/khalti-sdk-web)

##### Demo
[https://codesandbox.io/s/k574mxpl17](https://codesandbox.io/s/k574mxpl17)

##### Installation
1. You'll need to install the dependency

`npm install khalti-web --save`

2. Install component

`npm install vue-khalti --save`

##### Usage

```
<template>
	<div>
		<vue-khalti v-bind="khaltiConfig"></vue-khalti>
	</div>
</template>

<script>
	import VueKhalti from 'vue-khalti'
	export default {
		components: { VueKhalti }
	}
</script>
```




