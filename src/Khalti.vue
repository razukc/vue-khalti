<template>
	<div>
		<slot>
			<button @click="onClick" type="button">Pay with Khalti</button>
		</slot>
	</div>
</template>

<script>
import KhaltiCheckout from "khalti-web"

	export default {
		name: 'Khalti',
		props: {
			publicKey: {
				type: String, 
				default: "test_public_key_4f14bc747d5746d98d9a325aea165e37"
			},
			productIdentity: { 
				type: null, 
				default: "1234567890"
			},
			productName: { 
				type: String, 
				default: "Dragon" 
			},
			productUrl: { 
				type: String, 
				default: "http://gameofthrones.com/buy/Dragons"
			},
			eventHandler: {
				type: Object,
				default: function () {
					return {
						onSuccess: function (payload) {
							console.log(payload)
						},
						onError: function (error) {
							console.log(error)
						},
						onClose: function () {
							console.log('widget is closing')
						}
					}
				}
			},
			merchant_name: { 
				type: String
			},
			merchant_extra: {
				type: null
			}
		},
		components: { KhaltiCheckout },
		methods: {
			onClick: function (payload) {
				let config = {
				    publicKey: this.publicKey,
				    productIdentity: this.productIdentity,
				    productName: this.productName,
				    productUrl: this.productUrl,
				    eventHandler: this.eventHandler
				}
				let checkout = new KhaltiCheckout(config);
			    checkout.show({ amount: payload.amount });
			}
		}
	}
</script>