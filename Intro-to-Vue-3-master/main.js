const app = Vue.createApp({
	data() {
		return {
			cart: [],
			premium: true,
		};
	},
	methods: {
		updateCart(id) {
			this.cart.push(id);
		},
		// my solution
		removeItem(id) {
			this.cart.pop(id);
		},
		// tutorial solution
		removeById(id) {
			const index = this.cart.indexOf(id);
			if (index > -1) {
				this.cart.splice(index, 1);
			}
		},
	},
});
