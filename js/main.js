// ランダムに曲セレクト
function selectMusic(){
	//曲数
	var musicNum = musicListLv15.length;
	var musicIndex = Math.floor(Math.random() * musicNum);

	var musicInfo = musicListLv15[musicIndex][0] + " [" + musicListLv15[musicIndex][1] + "]"
	document.getElementById("musicInfo").innerHTML = musicInfo;
}
