import{S as k}from"./store.manager-BdJmXoF6.js";function j(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var g={exports:{}};g.exports;(function(l){var _=function(){var m=String.fromCharCode,x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",S={};function O(e,o){if(!S[e]){S[e]={};for(var c=0;c<e.length;c++)S[e][e.charAt(c)]=c}return S[e][o]}var w={compressToBase64:function(e){if(e==null)return"";var o=w._compress(e,6,function(c){return x.charAt(c)});switch(o.length%4){default:case 0:return o;case 1:return o+"===";case 2:return o+"==";case 3:return o+"="}},decompressFromBase64:function(e){return e==null?"":e==""?null:w._decompress(e.length,32,function(o){return O(x,e.charAt(o))})},compressToUTF16:function(e){return e==null?"":w._compress(e,15,function(o){return m(o+32)})+" "},decompressFromUTF16:function(e){return e==null?"":e==""?null:w._decompress(e.length,16384,function(o){return e.charCodeAt(o)-32})},compressToUint8Array:function(e){for(var o=w.compress(e),c=new Uint8Array(o.length*2),r=0,i=o.length;r<i;r++){var h=o.charCodeAt(r);c[r*2]=h>>>8,c[r*2+1]=h%256}return c},decompressFromUint8Array:function(e){if(e==null)return w.decompress(e);for(var o=new Array(e.length/2),c=0,r=o.length;c<r;c++)o[c]=e[c*2]*256+e[c*2+1];var i=[];return o.forEach(function(h){i.push(m(h))}),w.decompress(i.join(""))},compressToEncodedURIComponent:function(e){return e==null?"":w._compress(e,6,function(o){return M.charAt(o)})},decompressFromEncodedURIComponent:function(e){return e==null?"":e==""?null:(e=e.replace(/ /g,"+"),w._decompress(e.length,32,function(o){return O(M,e.charAt(o))}))},compress:function(e){return w._compress(e,16,function(o){return m(o)})},_compress:function(e,o,c){if(e==null)return"";var r,i,h={},A={},d="",y="",a="",v=2,p=3,f=2,u=[],n=0,s=0,t;for(t=0;t<e.length;t+=1)if(d=e.charAt(t),Object.prototype.hasOwnProperty.call(h,d)||(h[d]=p++,A[d]=!0),y=a+d,Object.prototype.hasOwnProperty.call(h,y))a=y;else{if(Object.prototype.hasOwnProperty.call(A,a)){if(a.charCodeAt(0)<256){for(r=0;r<f;r++)n=n<<1,s==o-1?(s=0,u.push(c(n)),n=0):s++;for(i=a.charCodeAt(0),r=0;r<8;r++)n=n<<1|i&1,s==o-1?(s=0,u.push(c(n)),n=0):s++,i=i>>1}else{for(i=1,r=0;r<f;r++)n=n<<1|i,s==o-1?(s=0,u.push(c(n)),n=0):s++,i=0;for(i=a.charCodeAt(0),r=0;r<16;r++)n=n<<1|i&1,s==o-1?(s=0,u.push(c(n)),n=0):s++,i=i>>1}v--,v==0&&(v=Math.pow(2,f),f++),delete A[a]}else for(i=h[a],r=0;r<f;r++)n=n<<1|i&1,s==o-1?(s=0,u.push(c(n)),n=0):s++,i=i>>1;v--,v==0&&(v=Math.pow(2,f),f++),h[y]=p++,a=String(d)}if(a!==""){if(Object.prototype.hasOwnProperty.call(A,a)){if(a.charCodeAt(0)<256){for(r=0;r<f;r++)n=n<<1,s==o-1?(s=0,u.push(c(n)),n=0):s++;for(i=a.charCodeAt(0),r=0;r<8;r++)n=n<<1|i&1,s==o-1?(s=0,u.push(c(n)),n=0):s++,i=i>>1}else{for(i=1,r=0;r<f;r++)n=n<<1|i,s==o-1?(s=0,u.push(c(n)),n=0):s++,i=0;for(i=a.charCodeAt(0),r=0;r<16;r++)n=n<<1|i&1,s==o-1?(s=0,u.push(c(n)),n=0):s++,i=i>>1}v--,v==0&&(v=Math.pow(2,f),f++),delete A[a]}else for(i=h[a],r=0;r<f;r++)n=n<<1|i&1,s==o-1?(s=0,u.push(c(n)),n=0):s++,i=i>>1;v--,v==0&&(v=Math.pow(2,f),f++)}for(i=2,r=0;r<f;r++)n=n<<1|i&1,s==o-1?(s=0,u.push(c(n)),n=0):s++,i=i>>1;for(;;)if(n=n<<1,s==o-1){u.push(c(n));break}else s++;return u.join("")},decompress:function(e){return e==null?"":e==""?null:w._decompress(e.length,32768,function(o){return e.charCodeAt(o)})},_decompress:function(e,o,c){var r=[],i=4,h=4,A=3,d="",y=[],a,v,p,f,u,n,s,t={val:c(0),position:o,index:1};for(a=0;a<3;a+=1)r[a]=a;for(p=0,u=Math.pow(2,2),n=1;n!=u;)f=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),p|=(f>0?1:0)*n,n<<=1;switch(p){case 0:for(p=0,u=Math.pow(2,8),n=1;n!=u;)f=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),p|=(f>0?1:0)*n,n<<=1;s=m(p);break;case 1:for(p=0,u=Math.pow(2,16),n=1;n!=u;)f=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),p|=(f>0?1:0)*n,n<<=1;s=m(p);break;case 2:return""}for(r[3]=s,v=s,y.push(s);;){if(t.index>e)return"";for(p=0,u=Math.pow(2,A),n=1;n!=u;)f=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),p|=(f>0?1:0)*n,n<<=1;switch(s=p){case 0:for(p=0,u=Math.pow(2,8),n=1;n!=u;)f=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),p|=(f>0?1:0)*n,n<<=1;r[h++]=m(p),s=h-1,i--;break;case 1:for(p=0,u=Math.pow(2,16),n=1;n!=u;)f=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=c(t.index++)),p|=(f>0?1:0)*n,n<<=1;r[h++]=m(p),s=h-1,i--;break;case 2:return y.join("")}if(i==0&&(i=Math.pow(2,A),A++),r[s])d=r[s];else if(s===h)d=v+v.charAt(0);else return null;y.push(d),r[h++]=v+d.charAt(0),i--,v=d,i==0&&(i=Math.pow(2,A),A++)}}};return w}();l!=null?l.exports=_:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return _})})(g);var E=g.exports;const T=j(E),U=[["coins","@a@"],["cars","@b@"]];function Z(l){l=B(l);let _=T.compressToUTF16(l);localStorage.setItem(k.get("API_NAME"),_)}function D(){let l=localStorage.getItem(k.get("API_NAME"));return l=T.decompressFromUTF16(l),l=z(l),JSON.parse(l)}const B=l=>(l=JSON.stringify(l),U.map(_=>{l=l.replaceAll(_[0],_[1])}),l),z=l=>(U.map(_=>{l=l.replaceAll(_[1],_[0])}),l);export{Z as c,D as u};
