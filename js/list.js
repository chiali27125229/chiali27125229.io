const serverURL = 'https://script.google.com/macros/s/AKfycbzMldZJyxzTfMlxVgaMgTHP0ZAxYty1LFIvfCEpZEGpSQp9QyATofVj2NoM8wccopZj/exec';

$(document).ready(function() {
		readFromServer();
 
	});	

function readFromServer(){   //載入資料用
	let parameter = {};
	parameter.method = 'read1';
	//(主機端的網址，要傳進去的物件，要處裡回傳的函式(收到傳入值data))
	$.post(serverURL, parameter, function(data){ //
		setTable(data);
		console.log(data);
	}).fail(function(data){ //fail(要處裡回傳的函式(傳入值data))
		alert('error');
	});
}

function setTable(sData){//組表格用?
	let node = $('#tr01').html();  //取得樣板內容 id
	for (let i=1;i<sData.length;i++){ //處裡表格的產生
		let content = node.replace('LIST_HERE', i); //用i取代LIST_HERE 內容
		content = content.replace('petName', sData[i][0]);//用第i筆資料中的3來取代
		content = content.replace('pet_food', sData[i][1]);
		content = content.replace('pet_potion', sData[i][2]);
		content = content.replace('pet_gift', sData[i][3]);
		$('tbody').append(content); //用append 將content加入表格的內容中?
	} 
}  