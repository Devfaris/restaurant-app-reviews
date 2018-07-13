//Check if service worker support in the browser & and make Registration
if('serviceWorker' in navigator){
navigator.serviceWorker.register('/sw.js').then(function() {
	console.log('serviceWorker Registration is work');
}).catch(function(){
	console.log('Registration is faild')
});
};
