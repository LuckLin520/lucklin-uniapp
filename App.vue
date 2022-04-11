<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	
	
	
	if (typeof WeixinJSBridge == 'object' && typeof WeixinJSBridge.invoke == 'function') {
		handleFontSize()
	} else if (document){
		if (document.addEventListener) {
			document.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
		} else if (document.attachEvent) {
			document.attachEvent('WeixinJSBridgeReady', handleFontSize)
			document.attachEvent('onWeixinJSBridgeReady', handleFontSize)
		}
	}

	function handleFontSize() {
		// 设置网页字体为默认大小
		WeixinJSBridge.invoke('setFontSizeCallback', {
			'fontSize': 0
		})
		// 重写设置网页字体大小的事件
		WeixinJSBridge.on('menu:setfont', function() {
			WeixinJSBridge.invoke('setFontSizeCallback', {
				'fontSize': 0
			})
		})
	}
</script>

<style lang="scss">
	/* IOS禁止微信调整字体大小 */
	body {
		-webkit-text-size-adjust: 100% !important;
		text-size-adjust: 100% !important;
		-moz-text-size-adjust: 100% !important;
	}
</style>

