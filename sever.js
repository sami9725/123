// AncPlayer.Com - Plugins hỗ trợ player video Blogspot và Wordpress
// Hiện Player có gắn ADS ở top hoặc bottom để duy trì VPS và Gkplugins
// Truy cập http://www.ancplayer.com để được hướng dẫn viết mã hóa link
// Để thêm Server thuộc hệ thống GKplguisn các bạn thêm link ở getsv và tên hiện thị ở namesv 
//var img_player = document.querySelectorAll('#anc_data img')[0].src

var ancplayer = {
load:{
'width'    : '100%',
'height'   : '420px',
'player'   : 'http://svvn.ancplayer.com/player.swf',
'proxy'    : 'http://svvn.ancplayer.com/gkplugins/proxy.swf',
'skin'     : '',	
'getlink' : '//svvn.cu.cc/get', // Link get Player Mobile: Picasa, Zing, NCT, Plus, Xvideos
'imgload' : 'http://www.videojs.com/img/poster.jpg', // Autoload image num 1 change: "+img_player+"
'autoplay' : 'true', // true or false
'embedplay' : '1', // 1 or 0 // 1 = autoplay
'site'     : 'Xem Phim Online HD'
},sv:{
'list_sv': 'youtube.com,anc.you,anc.yl,anc.mp4,anc.flv,picasaweb.google.com,anc.ps,anc.tm,plus.google.com,docs.google.com,drive.google.com,tv.zing.vn/video,tv.zing.vn/embed/video,tv.zing.vn/html5/video,tv.zing.vn/html5/movie,nhaccuatui.com,dailymotion.com,xvideos.com,goo.gl,clip.vn,meme.vn,googlevideo.com,zippyshare.com,videobam.com,fptplay.net,novamov.com,24video.net,movshare.net,veoh.com,blip.tv,sendspace.com,speedyshare.com,tunescoop.com,viddler.com,vimeo.com,vidxden.com,xhamster.com,truongxua.vn,photos.google.com',
'ten_sv': 'Youtube: ,VIP: ,Gdata: ,Sever Mp4: ,Sever Flv: ,Picasa: ,Picasa2:  ,Picasa3: ,Plus: ,Docs: ,Drive: ,Zing: ,Zing 2: ,Zing MB: ,Zing EP: ,NCT: ,Daily: ,Xvideos: ,Goo: ,Clip: ,Meme: ,Google: ,Zippy: ,Videobam: ,Fptplay: ,Novamov: ,24Video: ,Movshare: ,Veoh: ,Bliptv: ,Sendspace: ,Speedyshare: ,Tunescoop: ,Viddler: ,Vimeo: ,Vidxden: ,Xhamster: ,Truongxua:,photos.google.com: '
}}