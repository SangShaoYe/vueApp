<template>
	<div class="cartcontrol">
      
		<div class="cart-decrease" v-if="food.count>1" @click="decreaseCart" >
		  <span class="inner icon-remove_circle_outline"></span>
		</div>
		<div class="cart-count" v-if="food.count>0">{{food.count}}</div>
		<div class="cart-add" @click="addCart">
			<span class="icon-add_circle"></span>
		</div>
    </div>
</template>

<script>
	export default {
		name: 'cartcontrol',
		  props: {
			food: {
			  type: Object
			}
		  },
		  methods: {
			addCart (event) {
			  console.log('addCart')
			  if (!this.food.count) {
				this.$set(this.food, 'count', 1)
				// this.food.count = 1
			  } else {
				this.food.count++
			  }
			  this.$emit('cart-add', event.target)
			},
			decreaseCart (event) {
			  console.log(this.food.count)
			  this.food.count--
			  this.$emit('cart-add', event.target)
			}
		  }
	}
</script>

<style lang="less" scoped>
// .cartcontrol{
//     font-size:0;
//     .cart-decrease{
//       display: inline-block;
//       padding: 6px;
//       line-height: 48px;
//       font-size: 48px;
//       color: rgb(0,160,220);
//     }
//     .cart-count{
//       display: inline-block;
//       vertical-align: top;
//       width: 24px;
//       padding: 0 12px;
//       line-height: 72px;
//       text-align: center;
//       font-size: 40px;
//       color: rgb(147,153,159);
//     }
//     .cart-add{
//       display: inline-block;
//       padding: 12px;
//       line-height: 48px;
//       font-size: 48px;
//       color: rgb(0,160,220);
//     }
//   }
  
  .cartcontrol{
      display: flex;
	  flex-direction: row;
	  align-items: center;
	  font-size: 48px;
	  color: #D43030;
      .cart-decrease{
        flex: 1;
        padding: 12px;
      }
      .cart-count{
		font-size: 40px;
        margin: 0 12px;
        text-align: center;
        color: rgb(147,153,159);
      }
      .cart-add{
        flex: 1;
        padding: 12px;
      }
    }
</style>
