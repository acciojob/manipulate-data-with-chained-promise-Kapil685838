//your JS code here. If required.
const input = [1, 2, 3, 4];

function myPromise(arr) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let result = document.getElementById('output');
			setTimeout(() => {
				result.innerHTML = `${arr.filter(num => num % 2 != 0)}`;
			}, 1000);
			setTimeout(() => {
				result.innerHTML = `${arr.map(num => {
					if(num % 2 == 0){
						return num * 2;
					}
					return num;
				})}`;
			}, 2000);
		}, 3000);
	});
}
myPromise(input);