onmessage = function(event) {
	var work = 10000000;
	var array = new Array(work);
	var sum = 0;
	for(var i = 0; i < work; i++)
	{
		array[i] = i * i;
		sum += array[i];
	}
	self.postMessage(sum);
};