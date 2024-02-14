export default function watchlocalStorage(){
    const signSetItem = localStorage.setItem
	localStorage.setItem = function (key, val) {
		let setEvent = new Event('setItemEvent')
		setEvent.key = key
		setEvent.newValue = val
		window.dispatchEvent(setEvent)
		// eslint-disable-next-line prefer-rest-params
		signSetItem.apply(this, arguments)
	}
}