<template>
	<div class="list">
		<ul>
			<li v-for="item in list">
				<div :data-latest="item.latest">
					{{ item.value }}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>


export default {
	name: "list",
	props: { 
		list : Array
	}
}
</script>