<template>
	<div>
		<el-button @click="show = !show">
			<span>{{!show ? '显示' :'关闭'}}</span>
		</el-button>
		
		<transition name="fade" appear>
			<div v-show="show" class="apps">
				<ul style="width:500px;">
					<li>
						<el-input v-model='item' />
						<el-button @click='ADD_TOTAL(item)'>提交</el-button>
					</li>
					<li v-for="(item,index) in allTodos">
						{{item.idx}}-{{item.text}}-{{item.dateTime}}
					</li>
				</ul>
				hello vue2!!
				{{message}}
				<br/>
				<el-button @click="showmsg=!showmsg">click me <span v-if="showmsg">to close</span></el-button>
				<transition name="fade" appear>
					<span v-show="showmsg" class="appmsg">
						你真的点啊？~~🐶
					</span>
				</transition>
			</div>
		</transition>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { Button,Input,Alert } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Alert.name, Alert);
export default {
	data(){
		return {
			show:true,
			showmsg:false,
			message:'hello world!',
			item:''
		}
	},
	computed: mapGetters(['allTodos']),
	created () {
		this.$store.dispatch('ALL_TOTAL',[{
            idx:1,
            text:'first item',
            dateTime: new Date()
        }]);//初始化items
	},
	methods: {
		ADD_TOTAL:function(){
		console.log(this);
			this.$store.dispatch('ADD_TOTAL',this.item);
			this.item = "";
		}
	}
}
</script>
<style scoped>
.apps {
	font-size: 30px;
	position: relative;
	transition: all 1s;
	left:300px;
  	font-size: 20px;
}
.appmsg {
	font-size: 30px;
	position: relative;
	transition: all 1s;
	left:300px;
  	font-size: 20px;
}
/!**
 * 正在进入状态
 */
.fade-enter-active {
	color:#eee; 
}
/**
 * 初始状态
 */
.fade-enter{
  left:0px;
  font-size: 9px;
}
/**
 * 离开状态
 */
.fade-leave{
	font-size: 700
}
/**
 * 正在离开状态
 */
 .fade-leave-active{
 	left: 0;
	opacity: 0;
}
	
</style>