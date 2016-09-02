//web标准色
(function() {
	var colorlist = [{
		name: "AliceBlue", val : ["爱丽丝蓝","#F0F8FF","240, 248, 255"]},{	name: "AntiqueWhite", val : ["古董白","#FAEBD7","250, 235, 215"]},{	name: "AquaMarine", val : ["碧　绿","#7FFFD4","127, 255, 212"]},{	name: "Azure", val : ["青白色","#F0FFFF","240, 255, 255"]},{	name: "Beige", val : ["米　色","#F5F5DC","245, 245, 220"]},{	name: "Bisque", val : ["陶坯黄","#FFE4C4","255, 228, 196"]},{	name: "Black", val : ["黑　色","#000000","0, 0, 0"]},{	name: "BlanchedAlmond", val : ["杏仁白","#FFEBCD","255, 235, 205"]},{	name: "Blue", val : ["蓝　色","#0000FF","0, 0, 255"]},{	name: "BlueViolet", val : ["蓝紫色","#8A2BE2","138, 43, 226"]},{	name: "Brown", val : ["褐　色","#A52A2A","165, 42, 42"]},{	name: "BurlyWood", val : ["硬木褐","#DEB887","222, 184, 135"]},{	name: "CadetBlue", val : ["军服蓝","#5F9EA0","95, 158, 160"]},{	name: "ChartReuse", val : ["查特酒绿","#7FFF00","127, 255, 0"]},{	name: "Chocolate", val : ["巧克力色","#D2691E","210, 105, 30"]},{	name: "Coral", val : ["珊瑚红","#FF7F50","255, 127, 80"]},{	name: "CornFlowerBlue", val : ["矢车菊蓝","#6495ED","100, 149, 237"]},{	name: "CornSilk", val : ["玉米穗黄","#FFF8DC","255, 248, 220"]},{	name: "Crimson", val : ["绯　红","#DC143C","220, 20, 60"]},{	name: "Cyan/Aqua", val : ["青　色","#00FFFF","0, 255, 255"]},{	name: "DarkBlue", val : ["深　蓝","#00008B","0, 0, 139"]},{	name: "DarkCyan", val : ["深　青","#008B8B","0, 139, 139"]},{	name: "DarkGoldenRod", val : ["深金菊黄","#B8860B","184, 134, 11"]},{	name: "DarkGray", val : ["暗　灰","#A9A9A9","169, 169, 169"]},{	name: "DarkGreen", val : ["深　绿","#006400","0, 100, 0"]},{	name: "DarkKhaki", val : ["深卡其色","#BDB76B","189, 183, 107"]},{	name: "DarkMagenta", val : ["深品红","#8B008B","139, 0, 139"]},{	name: "DarkOliveGreen", val : ["深橄榄绿","#556B2F","85, 107, 47"]},{	name: "DarkOrange", val : ["深　橙","#FF8C00","255, 140, 0"]},{	name: "DarkOrchid", val : ["深洋兰紫","9932CC","153, 50, 204"]},{	name: "DarkRed", val : ["深　红","#8B0000","139, 0, 0"]},{	name: "DarkSalmon", val : ["深鲑红","#E9967A","233, 150, 122"]},{	name: "DarkSeaGreen", val : ["深海藻绿","#8FBC8F","143, 188, 143"]},{	name: "DarkSlateBlue", val : ["深岩蓝","#83D8B","72, 61, 139"]},{	name: "DarkSlateGray", val : ["深岩灰","#F4F4F","47","79","79"]},{	name: "DarkTurquoise", val : ["深松石绿","#00CED1","0, 206, 209"]},{	name: "DarkViolet", val : ["深　紫","#9400d3","148, 0, 211"]},{	name: "DeepPink", val : ["深　粉","#FF1493","255, 20, 147"]},{	name: "DeepSkyBlue", val : ["深天蓝","#00BFFF","0, 191, 255"]},{	name: "DimGray", val : ["昏　灰","#696969","105, 105, 105"]},{	name: "DodgerBlue", val : ["湖　蓝","#1E90FF","30, 144, 255"]},{	name: "FireBrick", val : ["火砖红","#B22222","178, 34, 34"]},{	name: "FloralWhite", val : ["花卉白","#FFFAF0","255, 250, 240"]},{	name: "ForestGreen", val : ["森林绿","#228B22","34, 139, 34"]},{	name: "GainsBoro", val : ["庚氏灰","#DCDCDC","220, 220, 220"]},{	name: "GhostWhite", val : ["幽灵白","#F8F8FF","248, 248, 255"]},{	name: "Gold", val : ["金　色","#FFD700","255, 215, 0"]},{	name: "GoldenRod", val : ["金菊黄","#DAA520","218, 165, 32"]},{	name: "Gray", val : ["灰　色","#808080","128, 128, 128"]},{	name: "Green", val : ["调和绿","#008000","0, 128, 0"]},{	name: "GreenYellow", val : ["黄绿色","#ADFF2F","173, 255, 47"]},{	name: "HoneyDew", val : ["蜜瓜绿","#F0FFF0","240, 255, 240"]},{	name: "HotPink", val : ["艳　粉","#FF69B4","255, 105, 180"]},{	name: "IndianRed", val : ["印度红","#CD5C5C","205, 92, 92"]},{	name: "Indigo", val : ["靛　蓝","#4B0082","75, 0, 130"]},{	name: "Ivory", val : ["象牙白","#FFFFF0","255, 255, 240"]},{	name: "Khaki", val : ["卡其色","#F0E68C","240, 230, 140"]},{	name: "Lavender", val : ["薰衣草紫","#E6E6FA","230, 230, 250"]},{	name: "LavenderBlush", val : ["薰衣草红","#FFF0F5","255, 240, 245"]},{	name: "LawnGreen", val : ["草坪绿","#7CFC00","124, 252, 0"]},{	name: "LemonChiffon", val : ["柠檬绸黄","#FFFACD","255, 250, 205"]},{	name: "LightBlue", val : ["浅　蓝","#ADD8E6","173, 216, 230"]},{	name: "LightCoral", val : ["浅珊瑚红","#F08080","240, 128, 128"]},{	name: "LightCyan", val : ["浅　青","#E0FFFF","224, 255, 255"]},{	name: "LightGoldenRodYellow", val : ["浅金菊黄","#FAFAD2","250, 250, 210"]},{	name: "LightGray", val : ["亮　灰","#D3D3D3","211, 211, 211"]},{	name: "LightGreen", val : ["浅　绿","#90EE90","144, 238, 144"]},{	name: "LightPink", val : ["浅　粉","#FFB6C1","255, 182, 193"]},{	name: "LightSalmon", val : ["浅鲑红","#FFA07A","255, 160, 122"]},{	name: "LightSeaGreen", val : ["浅海藻绿","#20B2AA","32, 178, 170"]},{	name: "LightSkyBlue", val : ["浅天蓝","#87CEFA","135, 206, 250"]},{	name: "LightSlateGray", val : ["浅岩灰","#778899","119, 136, 153"]},{	name: "LightSteelBlue", val : ["浅钢青","#0C4DE","76, 196, 222"]},{	name: "LightYellow", val : ["浅　黄","#FFFFE0","255, 255, 224"]},{	name: "Lime", val : ["绿　色","#00FF00","0, 255, 0"]},{	name: "LimeGreen", val : ["青柠绿","#32CD32","50, 205, 50"]},{	name: "Linen", val : ["亚麻色","#FAF0E6","250, 240, 230"]},{	name: "Magenta/Fuchsia", val : ["洋　红","#FF00FF","255, 0, 255"]},{	name: "Maroon", val : ["栗　色","#800000","128, 0, 0"]},{	name: "MediumAquaMarine", val : ["中碧绿","#66CDAA","102, 205, 170"]},{	name: "MediumBlue", val : ["中　蓝","#0000CD","0, 0, 205"]},{	name: "MediumOrchid", val : ["中洋兰紫","#BA55D3","186, 85, 211"]},{	name: "MediumPurple", val : ["中　紫","#9370D8","147, 112, 219"]},{	name: "MediumSeaGreen", val : ["中海藻绿","#3CB371","60, 179, 113"]},{	name: "MediumSlateBlue", val : ["中岩蓝","#7B68EE","123, 104, 238"]},{	name: "MediumSpringGreen", val : ["中嫩绿","#00FA9A","0, 250, 154"]},{	name: "MediumTurquoise", val : ["中松石绿","#48D1CC","72, 209, 204"]},{	name: "MediumVioletRed", val : ["中紫红","#C71585","199, 21, 133"]},{	name: "MidNightBlue", val : ["午夜蓝","#191970","25, 25, 112"]},{	name: "MintCream", val : ["薄荷乳白","#F5FFFA","245, 255, 250"]},{	name: "MistyRose", val : ["雾玫瑰红","#FFE4E1","255, 228, 225"]},{	name: "Moccasin", val : ["鹿皮色","#FFE4B5","255, 228, 181"]},{	name: "NavajoWhite", val : ["土著白","#FFDEAD","255, 222, 173"]},{	name: "Navy", val : ["藏青","#000080","0, 0, 128"]},{	name: "OldLace", val : ["旧蕾丝白","#FDF5E6","253, 245, 230"]},{	name: "Olive", val : ["橄榄色","#808000","128, 128, 0"]},{	name: "OliveDrab", val : ["橄榄绿","#6B8E23","107, 142, 35"]},{	name: "Orange", val : ["橙　色","#FFA500","255, 165, 0"]},{	name: "OrangeRed", val : ["橘　红","#FF4500","255, 69, 0"]},{	name: "Orchid", val : ["洋兰紫","#DA70D6","218, 112, 214"]},{	name: "PaleGoldenRod", val : ["白金菊黄","#EEE8AA","238, 232, 170"]},{	name: "PaleGreen", val : ["白绿色","#98FB98","152, 251, 152"]},{	name: "PaleTurquoise", val : ["白松石绿","#AFEEEE","175, 238, 238"]},{	name: "PaleVioletRed", val : ["白紫红","#D87093","219, 112, 147"]},{	name: "PapayaWhip", val : ["番木瓜橙","#FFEFD5","255, 239, 213"]},{	name: "PeachPuff", val : ["粉扑桃色","#FFDAB9","255, 218, 185"]},{	name: "Peru", val : ["秘鲁红","#CD853F","205, 133, 63"]},{	name: "Pink", val : ["粉　色","#FFC0CB","255, 192, 203"]},{	name: "Plum", val : ["李　紫","#DDA0DD","221, 160, 221"]},{	name: "PowderBlue", val : ["粉末蓝","#B0E0E6","176, 224, 230"]},{	name: "Purple", val : ["紫　色","#800080","128, 0, 128"]},{	name: "Red", val : ["红　色","#FF0000","255, 0, 0"]},{	name: "RosyBrown", val : ["玫瑰褐","#BC8F8F","188, 143, 143"]},{	name: "RoyalBlue", val : ["品　蓝","#4169E1","65, 105, 225"]},{	name: "SaddleBrown", val : ["鞍　褐","#8B4513","139, 69, 19"]},{	name: "Salmon", val : ["鲑　红","#FA8072","250, 128, 114"]},{	name: "SandyBrown", val : ["沙　褐","#F4A460","244, 164, 96"]},{	name: "SeaGreen", val : ["海藻绿","#2E8B57","46, 139, 87"]},{	name: "SeaShell", val : ["贝壳白","#FFF5EE","255, 245, 238"]},{	name: "Sienna", val : ["土黄赭","#A0522D","160, 82, 45"]},{	name: "Silver", val : ["银　色","#C0C0C0","192, 192, 192"]},{	name: "SkyBlue", val : ["天　蓝","#87CEEB","135, 206, 235"]},{	name: "SlateBlue", val : ["岩　蓝","#6A5ACD","106, 90, 205"]},{	name: "SlateGray", val : ["岩　灰","#708090","112, 128, 144"]},{	name: "Snow", val : ["雪　白","#FFFAFA","255, 250, 250"]},{	name: "SpringGreen", val : ["春　绿","#00FF7F","0, 255, 127"]},{	name: "SteelBlue", val : ["钢　青","#4682B4","70, 130, 180"]},{	name: "Tan", val : ["日晒褐","#D2B48C","210, 180, 140"]},{	name: "Teal", val : ["鸭翅绿","#008080","0, 128, 128"]},{	name: "Thistle", val : ["蓟　紫","#D8BFD8","216, 191, 216"]},{	name: "Tomato", val : ["番茄红","#FF6347","255, 99, 71"]},{	name: "Turquoise", val : ["松石绿","#40E0D0","64, 224, 208"]},{	name: "Violet", val : ["紫罗兰色","#EE82EE","238, 130, 238"]},{	name: "Wheat", val : ["麦　色","#F5DEB3","245, 222, 179"]},{	name: "White", val : ["白　色","#FFFFFF","255, 255, 255"]},{	name: "WhiteSmoke", val : ["烟雾白","#F5F5F5","245, 245, 245"]},{	name: "Yellow", val : ["黄　色","#FFFF00","255, 255, 0"]},{	name: "YellowGreen", val : ["暗黄绿色","#9ACD32","154, 205, 50"]
	}];

	var c = "";
	for(var o in colorlist) {
		c += '<div class="g-6 g-s-4 g-m-3 g-l-2">'+
				'<span style="background-color:'+colorlist[o].name+'"></span>'+
				'<div class="color-name">'+colorlist[o].name+'</div>'+
				'<div class="color-txt">'+colorlist[o].val[0]+'</div>'+
				'<div class="color-txt"> HTML：'+colorlist[o].val[1]+'</div>'+
				'<div class="color-txt"> RGB：'+colorlist[o].val[2]+'</div>'+
			'</div>';
	}
	$("#webColor").append(c);
})();


//web安全色
// (function() {
//     var aColor = ['00','33','66','99','CC','FF'];  
//     var iLen = aColor.length;  
//     var i = 0;  
//     var j = 0;  
//     var iWidth = 100;  
//     var iHeight = 18;  
//     var iScreenX = (document.documentElement.clientWidth-iWidth*iLen)/2;  
//     var iScreenY = (document.documentElement.clientHeight-iHeight*iLen*iLen)/2;  
      
//     for(var r = 0; r < iLen; r++)  
//     {  
//         for(var g = 0; g < iLen; g++)  
//         {  
//             for(var b = 0; b < iLen; b++)  
//             {  
//                 var oDiv = document.createElement('div');  
//                 oDiv.style.width = iWidth+'px';   
//                 oDiv.style.height = iHeight+'px';   
//                 oDiv.style.position = 'fixed';  
//                 oDiv.style.left = (Math.floor(i/iLen)-Math.floor(i/36)*iLen)*iWidth+iScreenX+'px';  
//                 oDiv.style.top = (Math.floor(i/36)*iLen+(i%iLen))*iHeight+iScreenY+'px';  
//                 oDiv.innerHTML = oDiv.style.backgroundColor = '#'+aColor[r].toString()+aColor[g].toString()+aColor[b].toString();  
//                 document.body.appendChild(oDiv);  
//                 i++;  
//             }  
//         };  
//     };  
// })();

//颜色搭配
(function() {
	//创建搭配颜色
	var colorlist = [{ 
		title : "柔和、明亮、温柔 ", desc : "亮度高的色彩搭配在一起就会得到柔和、明亮、温和的感觉。为了避免刺眼，设计师一般会用低亮度的前景色调和，同时色彩在色环之间的距离也有助于避免沉闷。", color : [["#FFFFCC", "#CCFFFF", "#FFCCCC"], ["#FFCCCC", "#FFFF99", "#CCCCFF"], ["#FF9966", "#FF6666", "#FFCCCC"], ["#FFCC99", "#CCFF99", "#CCCCCC"], ["#FFCCCC", "#CCCCFF", "#CCFFCC"], ["#CCFFFF", "#CCCCCC", "#CCFF99"], ["#FFCCCC", "#FFFFFF", "#99CC99"], ["#99CCCC", "#FFCC99", "#FFCCCC"], ["#CCCCFF", "#FFCCCC", "#CCFFFF"], ["#FFCC99", "#FFFFCC", "#99CCCC"]] }, { title : "柔和、洁净、爽朗 ", desc : "对于柔和、清洁、爽朗的印象，色环中蓝到绿相邻的颜色应该是最适合的。并且亮度偏高。可以看到，几乎每个组合都有白色参与。当然在实际设计时，可以用蓝绿相反色相的高亮度有彩色代替白色。", color : [["#CCFF99", "#FFFFFF", "#99CCFF"], ["#99CCCC", "#FFFFFF", "#CCFF99"], ["#CCFFCC", "#FFFFFF", "#66CCCC"], ["#CCCCFF", "#FFFFFF", "#99CCCC"], ["#CCFFCC", "#99CCCC", "#FFFFCC"], ["#CCFFFF", "#FFFFFF", "#CCCCFF"], ["#CCFFFF", "#FFFFFF", "#99CCFF"], ["#66CCFF", "#FFFFFF", "#CCFFFF"], ["#6699CC", "#FFFFFF", "#99CCFF"], ["#CCCCFF", "#FFFFFF", "#99CCFF"]] }, { title : "可爱、快乐、有趣 ", desc : "可爱、快乐、有趣印象中的色彩搭配特点是，色相分布均匀，冷暖搭配，饱和度高，色彩分辨度高。", color : [["#66CCCC", "#CCFF66", "#FF99CC"], ["#FF9999", "#FFFFFF", "#FFCC99"], ["#FF6666", "#FFFF66", "#99CC66"], ["#666699", "#FFFFFF", "#FF9999"], ["#99CC33", "#FF9900", "#FFCC00"], ["#FF0033", "#FFFFFF", "#FF9966"], ["#FF9900", "#CCFF00", "#CC3399"], ["#99CC33", "#FFFFFF", "#FF6600"], ["#993366", "#CCCC33", "#666633"], ["#66CCCC", "#FFFFFF", "#666699"]] }, { title : "活泼、快乐、有趣 ", desc : "活泼、快乐、有趣相对前一种印象，色彩选择更加广泛，?最重要的变化是将纯白色用低饱和有彩色或者灰色取代。", color : [["#CC9999", "#FFFF99", "#666699"], ["#FF9900", "#FFFF00", "#0099CC"], ["#CCCC99", "#CC3399", "#99CC00"], ["#FF6666", "#FFFF00", "#3399CC"], ["#CC6600", "#999999", "#CCCC33"], ["#FF9933", "#FFFFCC", "#009933"], ["#0099CC", "#CCCCCC", "#FF6666"], ["#FF6600", "#FFFF66", "#009966"], ["#CC6633", "#FFCC99", "#CC6600"], ["#CC0066", "#009999", "#FFCC33"]] }, { title : "运动型、轻快 ", desc : "运动的色彩要强化激烈、刺激的感受，同时还要体现健康、快乐、阳光。因此饱和度较高、亮度偏低的色彩在这类印象中经常登场。", color : [["#FF6666", "#FFFF00", "#006699"], ["#FF9966", "#FFFFFF", "#0066CC"], ["#339933", "#FFCC33", "#336699"], ["#FF9900", "#FFFFCC", "#336699"], ["#CC6600", "#CCCC44", "#336699"], ["#99CC33", "#FFFFFF", "#0099CC"], ["#99CC33", "#FF6666", "#336699"], ["#336699", "#FFFFFF", "#99CCCC"], ["#FF0033", "#333399", "#CCCC00"], ["#33CC99", "#FFFF00", "#336699"]] }, { title : "轻快、华丽、动感 ", desc : "华丽的印象要求页面充斥有彩色，并且饱和度偏高，而亮度适当减弱则能强化这种印象。", color : [["#990066", "#FFCC00", "#CC0033"], ["#FFCC33", "#333399", "#FF0033"], ["#666699", "#FFFF00", "#FF0033"], ["#FF0033", "#006699", "#FFFF33"], ["#FFCC00", "#009999", "#CC3366"], ["#FF0033", "#CCCC00", "#006699"], ["#CCCC00", "#FF9933", "#663399"], ["#FF9933", "#FFFF00", "#336699"], ["#CC3333", "#FFCCCC", "#99CC00"], ["#003399", "#FFFF00", "#FF6600"]] }, { title : "狂野、充沛、动感 ", desc : "狂野的印象空间中少不了低亮度的色彩，甚至可以用适当的黑色搭配。其他有彩色的饱和度高，对比强烈。", color : [["#990066", "#FFFF00", "#003399"], ["#CC0033", "#000000", "#003399"], ["#003399", "#FFFF00", "#F00000"], ["#CC3333", "#CCCCCC", "#003366"], ["#CC0033", "#333333", "#CCCC00"], ["#000000", "#99CC00", "#CC0033"], ["#FF0033", "#333333", "#FF9900"], ["#990066", "#000000", "#009966"], ["#666666", "#FF6600", "#333333"], ["#993333", "#CCCC00", "#663366"]] }, { title : "华丽、花哨、女性化 ", desc : "女性化的页面中紫色和品红是主角、粉红、绿色也是常用色相。一般它们之间要进行高饱和的搭配。", color : [["#FFFF99", "#993399", "#FF99CC"], ["#FF6666", "#FFFFFF", "#339999"], ["#FF99CC", "#003399", "#CCFF00"], ["#66CC99", "#FFFFFF", "#CC6699"], ["#CC3399", "#FFCC99", "#FF6666"], ["#FFCCCC", "#FFFFFF", "#993366"], ["#CC6699", "#FFFF00", "#666699"], ["#CC6699", "#99CC66", "#663366"], ["#FF33CC", "#CCCC99", "#663366"], ["#CC3399", "#FFCC99", "#FF6666"]] }, { title : "回味、女性化、优雅 ", desc : "优雅的感觉很奇特，色彩的饱和度一般要降下来。一般以蓝、红之间的相邻，调节亮度和饱和度进行搭配。", color : [["#CCCCCC", "#CC99CC", "#CC3399"], ["#FFCCCC", "#FF99CC", "#CCCCFF"], ["#CC3399", "#9933CC", "#CC99CC"], ["#9999CC", "#FFFFCC", "#FFCCCC"], ["#663366", "#CCCCCC", "#CC99CC"], ["#FF9999", "#FFCCCC", "#FF99CC"], ["#996666", "#CC99CC", "#FFCCCC"], ["#CC9999", "#CCCCCC", "#FFCCCC"], ["#FF9999", "#996699", "#FFCCCC"], ["#996699", "#FFCCCC", "#CC99CC"]] }, { title : "高尚、自然、安稳 ", desc : "高尚一般要用低亮度的黄绿色，色彩亮度降下去，注意色彩的平衡，页面就会显得安稳。", color : [["#CCCC33", "#FFFF99", "#CC9933"], ["#CC9966", "#CCCC66", "#669999"], ["#FF9966", "#996600", "#CCCC00"], ["#CCCC66", "#660033", "#CC6600"], ["#CCCC00", "#666600", "#CCCCFF"], ["#CC9933", "#009999", "#FFCC33"], ["#999966", "#CCCC99", "#339999"], ["#99CC99", "#669933", "#336633"], ["#666633", "#993", "#CC9966"], ["#660000", "#CC9900", "#CCCC99"]] }, { title : "冷静、自然 ", desc : "绿色是冷静、自然印象的主角，但是绿色作为页面的主要色彩，容易陷入过于消极的感觉传达，因此应该特别重视图案的设计。", color : [["#FFFF99", "#99CC99", "#666600"], ["#996633", "#FFFF99", "#99CC66"], ["#006600", "#66CC66", "#CCFF99"], ["#666600", "#CCCC66", "#CCFFCC"], ["#669933", "#CCCC33", "#663300"], ["#666633", "#993", "#CC9966"], ["#003300", "#669933", "#CCCC99"], ["#006633", "#663300", "#CCCC66"], ["#666600", "#FFFFCC", "#999999"], ["#006633", "#333300", "#CCCC99"]] }, { title : "传统、高雅、优雅 ", desc : "传统的内容一般要降低色彩的饱和度，特别是棕色很适合。前面介绍紫色也是高雅和优雅印象的常用色相。", color : [["#993", "#FFFFCC", "#CC99CC"], ["#CC9966", "#666666", "#CC9999"], ["#CCCC99", "#333333", "#9966CC"], ["#CCCC99", "#666666", "#CC9999"], ["#996699", "#CCCC99", "#669999"], ["#CC9966", "#999999", "#666666"], ["#339966", "#CCCCCC", "#996699"], ["#663366", "#999999", "#CCCCFF"], ["#996699", "#9999CC", "#CCCCFF"], ["#CCCC99", "#999999", "#663300"]] }, { title : "传统、稳重、古典 ", desc : "传统、稳重、古典都是保守的印象，色彩的选择上应该尽量用低亮度的暖色，这种搭配符合成熟的审美。", color : [["#6699CC", "#663366", "#CCCC99"], ["#990033", "#CCFF66", "#FF9900"], ["#666699", "#660033", "#99CC99"], ["#663300", "#FF9933", "#FFFF66"], ["#990033", "#006633", "#CCCC00"], ["#660033", "#993", "#660099"], ["#993366", "#CCCC33", "#666633"], ["#996600", "#CCCC66", "#666600"], ["#009933", "#CC9900", "#666666"], ["#666633", "#CCCC33", "#CC3366"]] }, { title : "忠厚、稳重、有品位 ", desc : "亮度、饱和度偏低的色彩会给人忠厚、稳重的感觉。这样的搭配为了避免色彩过于保守，使页面僵化、消极，应当注重冷暖结合和明暗对比。", color : [["#FFFFCC", "#CC9933", "#336666"], ["#336666", "#996633", "#CCCC33"], ["#336633", "#990033", "#FFCC99"], ["#333366", "#669999", "#996600"], ["#993333", "#CC9966", "#003300"], ["#336633", "#CCCC99", "#333366"], ["#663300", "#993", "#333333"], ["#663366", "#666666", "#333366"], ["#999900", "#990033", "#CC99CC"], ["#333366", "#990033", "#CCCCCC"]] }, { title : "简单、洁净、进步 ", desc : "简单、洁净的色彩在色相上可以用蓝、绿表现，并大面积留白。而进步的印象可以多用蓝色，搭配低饱和甚至灰色。", color : [["#CCCCCC", "#FFFFFF", "#666699"], ["#CCFF66", "#FFFFFF", "#003366"], ["#99CCFF", "#FFFFFF", "#336699"], ["#CCCC33", "#FFFFFF", "#336699"], ["#0099FF", "#FFFFCC", "#666699"], ["#99CC33", "#CCCCCC", "#000000"], ["#CCCCCC", "#003366", "#99CCFF"], ["#0099CC", "#CCFF66", "#666666"], ["#3399CC", "#003366", "#CCCCCC"], ["#ABCDEF", "#ABCDEF", "#ABCDEF"]] }, { title : "简单、时尚、高雅 ", desc : "灰色是最为平衡的色彩，并且是塑料金属质感的主要色彩之一，因而要表达高雅、时尚，可以适当使用，甚至大面积使用。但是要注重图案和质感的构造。", color : [["#99CCFF", "#FFFF66", "#666666"], ["#336666", "#FFFFFF", "#999999"], ["#0099CC", "#FFFFFF", "#666666"], ["#999999", "#CCCCCC", "#336666"], ["#CCCCCC", "#999999", "#663366"], ["#666666", "#CCCCCC", "#6699CC"], ["#999999", "#FFFFFF", "#333366"], ["#669999", "#CCCCCC", "#666666"], ["#999999", "#CCCCCC", "#333333"], ["#ABCDEF", "#ABCDEF", "#ABCDEF"]] }, { title : "简单、进步、时尚 ", desc : "表现进步的色彩主要以蓝色为主，搭配灰色。而色彩的明度统一、色相相邻，在色彩上会显得简洁。", color : [["#333366", "#99CC33", "#336699"], ["#999999", "#003366", "#669999"], ["#003399", "#CCFF99", "#333333"], ["#993", "#336699", "#333333"], ["#666666", "#99CC33", "#003366"], ["#999999", "#336699", "#333333"], ["#3366CC", "#CCCC66", "#333300"], ["#6699CC", "#006699", "#000000"], ["#003366", "#CCCCCC", "#006699"], ["#000000", "#999999", "#003366"]]
	}]

	var a = "",t = "", v = "";
	for(var o in colorlist) {
		for (var i = 0; i < colorlist[o].color.length; i++) {
        	v += '<div class="g-m-4 g-l-3">'+
					'<div class="group">'+
						'<span style="background-color:'+colorlist[o].color[i][0]+'"></span>'+
                    	'<i>'+colorlist[o].color[i][0]+'</i>'+
					'</div>'+
					'<div class="group">'+
						'<span style="background-color:'+colorlist[o].color[i][1]+'"></span>'+
                    	'<i>'+colorlist[o].color[i][1]+'</i>'+
					'</div>'+
					'<div class="group">'+
						'<span style="background-color:'+colorlist[o].color[i][2]+'"></span>'+
                    	'<i>'+colorlist[o].color[i][2]+'</i>'+
					'</div>'+
				'</div>';
	    };

		t +=    '<h5>'+colorlist[o].title+'<small>'+colorlist[o].desc+'</small></h5>'+
				'<div class="g">'+
					v +
				'</div>';

	    v = "";
	}
	$("#dpColor").append(t);
})();