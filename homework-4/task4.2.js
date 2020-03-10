
let mp3 = {
	canPlayMusic: true,
	hasCdDisc: false,
	musicFormat: 'mp3',
	size: 0,
	color:'',
	companyName:'',
	createMp3Player:function(canPlayMusic3, hasCdDisk, musicFormatt, sizze, colors, companyName){
		this.canPlayMusic = canPlayMusic3;
		this.hasCdDisc = hasCdDisk;
		this.musicFormat = musicFormatt;
		this.size = sizze;
		this.color = colors;
		this.companyName = companyName;


		return this;
	}
};

console.log(mp3);
console.log(mp3.createMp3Player(false, true, 'wac', 10, "red", "sony"));
console.log(mp3);



