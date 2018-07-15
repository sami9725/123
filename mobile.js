//<![CDATA[
function ancMedia() {
  url = window.location.href,
  home = ancplayer.load.site, 
  server_i = [0];
    part = new Array; 
  sv = ancplayer.sv.list_sv.split(",");
  tensv = ancplayer.sv.ten_sv.split(",");
  width = ancplayer.load.width;
  height = ancplayer.load.height;
  player = ancplayer.load.player;
  proxy = ancplayer.load.proxy;
  skin = ancplayer.load.skin;
  imgload = ancplayer.load.imgload; 
  tmget = ancplayer.load.getlink; 
  auto = ancplayer.load.autoplay;
  eauto = ancplayer.load.embedplay;

	var $_  = function(x){return document.getElementById(x);}
    this.fu  = function (x, y, z) {
		if (y == null && z == null) {
			return document.getElementById(x).innerHTML;
		} else { if (y != null && z == null) 
		       { document.getElementById(x).innerHTML = y }
		  else { document.getElementById(x).style[z] = y }
		}
	};

	this.read = function () {
		b = this.fu("anc_data"),
		c = '<div id="b_data" style="display:none !important;">',
		d = '</div>',
		b = b.replace(/\<id\>/gi, c),
		b = b.replace(/\<\/id\>/gi, d);
		b = b.replace(/\[id\]/gi, c),
		b = b.replace(/\[\/id\]/gi, d),
		this.fu("anc_data", b);
		if(b.indexOf("anc*") != -1){
		b = this.fu("b_data");
		b = b.replace("anc*","");
		b = b.substring(0,b.length);
	    b = decodeanc(b);
		if(b.indexOf("|") <= 0) {b = ";" + b + "|" };
	}	else{b = this.fu("b_data"); if(b.indexOf("|") <= 0) {b = ";" + b + "|" };}
		return  b
	};
	
data = this.read();
  
l_spi = data.split("|").length; 
l_spk = function(x) {return data.split("|")[x].split(";").length;};
d_spi = function(x) {return data.split("|")[x];};
d_spk = function(x, y) {return data.split("|")[x].split(";")[y];};
pc = ["0","a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s"];

  svt = "";
  svx = 0;
  i= "";
  j= "";


  
this.Play = function() {

for(var s = 0;s < tensv.length ;s++) {var svr = tensv[s].split(".")[0];if(svr == ""){svr = home;}part[s] = '<li id="sev_'+s+'" class="sev">'+svr+' <li>' ;}

for (var i = 0; i < l_spi -1; i++) {
for (var j = 0; j < l_spk(i); j++) 

{ name = d_spk(i, 0); link = d_spk(i, j);
name = 2 == l_spk(i) ? d_spk(i, 0) : name == d_spk(i + 1, 0) || !Number(name) ? name + pc[j] : name + pc[j];
	
dd = d_spk(i, j);
for(var s = 0;s < sv.length; s++) {


if(link.indexOf(sv[s]) != -1) { 

if(sv[s]) {data_out = '<li class="ep"><a class="a_tap" id="ep_'+i+'" href="?xem='+s+'-'+i+'-'+j+'" title="'+name+' - '+home+'" >'+name+'</a></li>' 
cc = ''+sv[s].length+'';

}
	
part[s] += data_out } } } }

for(var s = 0;s < sv.length; s++) {
if(part[s].indexOf(home) != -1) {	
svt += '<ul id="server_'+svx+'" > '+part[s]+' <div class="clear"></div></ul>';		
server_i[s] = svx.toString();
svx++
aa = ''+sv[s].length+'';
}
bb = ''+sv[s].length+'';
}

getlinksv =  ''+sv[1].length+' '+aa+' '+bb+' '+cc+' '+dd+'';

svt = '<div id="list_tap"> '+svt+' <div class="clear"></div></div><div class="clear"></div>';


getlinksv1 = getlinksv.substring(32,35); // lay tu 32 den 35 <ul id="server_.....
getlinksv2 = getlinksv1.replace('"', ''); // Xóa ký tự "
laylinksv = getlinksv2.replace(' ', ''); // Xóa khoảng cách	
this.fu("anc_tp", svt);
this.getUrl()
};


this.getUrl = function() {
  String.prototype.GetPart = function(dcmm) {
    var vltn = new RegExp("(^|&)" + dcmm + "=([^&]*)(&|$)");
    var clgt = this.substr(this.indexOf("?") + 1).match(vltn);
    if (clgt != null) {
      return unescape(clgt[2]);
    }
    return null;
  };
  

	part_Url = url.GetPart("xem");
	if(part_Url == null) { part_Url = "0-0-1" } //"+laylinksv+"
    part_Url = part_Url.split("-");
    pserver = part_Url[0];
    pepisode = part_Url[1];
    pelink = part_Url[2];
	
    var bh = this.fu("server_0");
    var bj = this.fu("server_" + server_i[pserver]);
    this.fu("server_" + server_i[pserver], bh);
    this.fu("server_0", bj);
	document.getElementById("ep_" + pepisode).className = "tap_active";
	document.getElementById("sev_" + pserver).className = "sv_active";

	if (!d_spk(pepisode, pelink)) {window.location.href = url.split("?")[0];} 
	else {this.load(d_spk(pepisode, pelink));}
		
  };
  
this.load = function(x) {	
if(x.indexOf(sv[0]) != -1){x = x.replace(/\/watch\?v=/gi,"/embed/"); x = x.replace(/\feature\=player\_embedded/gi,"");x = x.replace(/\#sub=/gi,'?captions.file='); obj = DBOj(x)[1];}	// youtube
if(x.indexOf(sv[1]) != -1){x = x.replace(/anc\.you\/watch\?v=/gi,"http://youtube.com/embed/");x = x.replace(/\#sub=/gi,'?captions.file=');obj = DBOj(x)[1];}	 // youtube
if(x.indexOf(sv[2]) != -1){x = x.replace(/anc\.yl/gi,"http://www.youtube.com/p");obj = DBOj(x)[1];}  // Gdata youtube
if(x.indexOf(sv[3]) != -1){x = x.replace(/anc\.mp4\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[5];} //mp4
if(x.indexOf(sv[4]) != -1){x = x.replace(/anc\.flv\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[0];}  // FLV
if(x.indexOf(sv[5]) != -1){x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,'&captions.file=');obj = DBOj(x)[2];}  // Picasa
if(x.indexOf(sv[6]) != -1){x = x.replace(/anc\.ps/gi,"https://picasaweb.google.com"); x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[2];}  // Picasa 2
if(x.indexOf(sv[7]) != -1){x = x.replace(/anc\.tm/gi,"https://picasaweb.google.com"); x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[2];}  // Picasa 3
if(x.indexOf(sv[8]) != -1){v = x.match(/[\d\w]+/gi); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(v)[3]}    /*plus*/ 
if(x.indexOf(sv[9]) != -1){x = x.replace(/edit\?pli\=1/gi,"preview?pli=1");x = x.replace(/\#sub=/gi,'?captions.file='); obj = DBOj(x)[1];}  // Docs Google
if(x.indexOf(sv[10]) != -1){x = x.replace(/edit/gi,"preview"); obj = DBOj(x)[1];}  // Driver Google
if(x.indexOf(sv[11]) != -1){v = x.match(/[\d\w]+/gi); c = v.length - 2; obj = DBOj(v[c])[4];} // Zing
if(x.indexOf(sv[12]) != -1){v = x.match(/[\d\w]+/gi); c = v.length - 1; obj = DBOj(v[c])[4];} // Zing
if(x.indexOf(sv[13]) != -1){obj = DBOj(x)[5]}  // Zing mobile
if(x.indexOf(sv[14]) != -1){obj = DBOj(x)[5]}  // Zing PS
if(x.indexOf(sv[15]) != -1){v = x.match(/[\d\w]+/gi); c = v.length - 2; obj = DBOj(v[c])[6];} // nct
if(x.indexOf(sv[16]) != -1){x = x.replace(/\#sub=/gi,"?captions.file=");obj = DBOj(x)[1]} // dailymotion
if(x.indexOf(sv[17]) != -1){x = x.replace(/\/[\0-9]\//gi,"/");x = x.replace(/\/[\0-9][\0-9]\//gi,"/"); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[7]}   /*xvideos*/ 
if(x.indexOf(sv[18]) != -1){obj = DBOj(x)[5]}   /*Goo.gl*/ 
if(x.indexOf(sv[19]) != -1){x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[8]}   //Clipvn
if(x.indexOf(sv[20]) != -1){x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[9]}   //MEME.VN
if(x.indexOf(sv[21]) != -1) {x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&");x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[5];}  // googlevideo.com
// - Danh sach 2:	
for(var k = 22; k < sv.length; k++){if(x.indexOf(sv[k]) != -1){x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[0]};}
this.fu("anc_pl", obj)
}; 
 
  
var DBOj = function(x){
rut =  ''+getlinksv+'<video id="playerayer" class="video-js vjs-default-skin" width="'+width+'" height="'+height+'" poster="'+imgload+'" data-setup="{&quot;controls&quot;: true, &quot;autoplay&quot;: '+auto+', &quot;preload&quot;: &quot;auto&quot;}"><source src="';
qua = ''+getlinksv+'<div id="logoplayer"></div><';
	return obj = [
	// 0 - gk
	''+qua+'object id="flashplayer" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+width+'" height="'+height+'"><param name="movie" value="'+player+'" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="FlashVars" value="plugins=captions,'+proxy+'&proxy.link='+x+'&captions.fontsize=17&captions.color=#fff&&skin='+skin+'" /><embed id="playerayer" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" frameborder="0" width="'+width+'" height="'+height+'" src="'+player+'" flashvars="plugins=captions,timeslidertooltipplugin-2,'+proxy+'&amp;proxy.image='+imgload+'&amp;proxy.link='+x+'&captions.fontsize=17&captions.color=#fff&&amp;skin='+skin+'" /></object>',
	// 1 - youtube - Docs - Diver - Daily
	''+qua+'iframe src="'+x+'?autoplay='+eauto+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
	// 2 - picasa
	''+rut+''+tmget+'/pica.php?url='+x+'" type="video/mp4"/></video>',
	// 3 - plus
	''+rut+''+tmget+'/plus.php?pid='+x[10]+'oid='+x[12]+'" type="video/mp4"/></video>',
	// 4 - Zing web 
	''+rut+''+tmget+'/zing.php?link_id='+x+'" type="video/mp4"/></video>',
	// 5 - Zing html5 - Goo.gl
	''+rut+''+x+'"type="video/mp4"/></video>',
	// 6 - NCT
	''+rut+''+tmget+'/nct.php?link_id='+x+'" type="video/mp4"/></video>',
    // 7 - Xvideos	
	''+rut+''+tmget+'/xvd.php?url='+x+'" type="video/mp4"/></video>',
    // 8 - Clipvn	
	''+rut+''+tmget+'/clipvn.php?url='+x+'" type="video/mp4"/></video>',	
    // 9 - meme.vn	
	''+rut+''+tmget+'/meme.php?url='+x+'" type="video/mp4"/></video>'
	];	
}
}
var M = new ancMedia; M.Play();
//]]>