//Check and make Registration for service Worker
if('serviceWorker' in navigator){
	navigator.serviceWorker.register('/sw.js').then(function() {
	console.log('serviceWorker Registration is work');
}).catch(function(){
	console.log('Registration is faild')
});
};
