<template>
    <div class="bingo">
		<generator @click="updateList" @resetList="resetList"/>
		<list v-bind:list="list"/>
    </div>
</template>

<script>


import generator from "./generator/generator.vue"; 
import list from "./list/list.vue"; 

const sortNumbers = (a, b) => ((a.value > b.value) ? 1 : -1)

const removeLatest = item => { 
	item.latest = false; 
	return item;
}; 

export default {
	components: {
		generator,
		list
	},
    data(){
        return { 
            list: [],
        } 
	},

	methods: {
		updateList: function(number) {	

			this.list = this.list.map(removeLatest);			
			this.list.push({
				value: number,
				latest: true
			});

			this.list.sort(sortNumbers);
		},

		resetList: function() {
			this.list = [];
		}
	},
}
</script>

<style lang="sass" scoped>

</style>