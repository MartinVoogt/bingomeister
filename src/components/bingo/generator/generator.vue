<template>
	<div class="generator">
		<div class="number">{{ number }}</div>
		<div class="action">
			<button v-on:click="getNumber">Trek getal</button>
			<button v-on:click="reset">Nieuw spel</button>
		</div>
	</div>
</template>

<script>

const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);

const getNumbers = async () => {
	let numbers = Array.from({length:75},(v,k)=>k+1);
	let shuffled = [...numbers]; 
	await shuffled.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );
	return shuffled;
}

export default {
	name: "generator",
	data() {
		return {
			number: "",
			numbers: [],
			count: 0
		}
	},
	methods: {
		getNumber: function() {
			if(this.count != this.numbers.length)
			{			
				this.number = this.numbers[this.count];
				this.count++;
				this.$emit('click', this.number);
			}
		},
		reset () {
			let request = getNumbers(); 
			Object.assign(this.$data, this.$options.data());
			this.count = 0;
			
			request.then(data => {
				this.numbers = data;
			});

			this.$emit('resetList');
		},
	},
	mounted() {
		let request = getNumbers(); 

		request.then(data => {
			this.numbers = data;
		});
	}
}
</script>