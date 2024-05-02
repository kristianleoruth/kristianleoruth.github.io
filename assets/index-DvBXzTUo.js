(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="163",Yc=0,lo=1,$c=2,zl=1,Kc=2,Jn=3,vi=0,ln=1,Qn=2,mi=0,or=1,co=2,uo=3,fo=4,Zc=5,Ii=100,Jc=101,Qc=102,eu=103,tu=104,nu=200,iu=201,ru=202,su=203,Da=204,Ia=205,au=206,ou=207,lu=208,cu=209,uu=210,fu=211,hu=212,du=213,pu=214,mu=0,gu=1,_u=2,Es=3,vu=4,xu=5,Mu=6,Su=7,ka=0,yu=1,Eu=2,gi=0,Tu=1,bu=2,Au=3,wu=4,Cu=5,Ru=6,Pu=7,Hl=300,ur=301,fr=302,Ua=303,Na=304,Ps=306,Fa=1e3,Ni=1001,Oa=1002,vn=1003,Lu=1004,$r=1005,An=1006,Ks=1007,Fi=1008,_i=1009,Du=1010,Iu=1011,Vl=1012,kl=1013,hr=1014,pi=1015,Ts=1016,Gl=1017,Wl=1018,Ir=1020,Uu=35902,Nu=1021,Fu=1022,zn=1023,Ou=1024,Bu=1025,lr=1026,Lr=1027,zu=1028,Xl=1029,Hu=1030,ql=1031,jl=1033,Zs=33776,Js=33777,Qs=33778,ea=33779,ho=35840,po=35841,mo=35842,go=35843,Yl=36196,_o=37492,vo=37496,xo=37808,Mo=37809,So=37810,yo=37811,Eo=37812,To=37813,bo=37814,Ao=37815,wo=37816,Co=37817,Ro=37818,Po=37819,Lo=37820,Do=37821,ta=36492,Io=36494,Uo=36495,Vu=36283,No=36284,Fo=36285,Oo=36286,ku=3200,Gu=3201,$l=0,Wu=1,di="",Fn="srgb",xi="srgb-linear",Ga="display-p3",Ls="display-p3-linear",bs="linear",Dt="srgb",As="rec709",ws="p3",Gi=7680,Bo=519,Xu=512,qu=513,ju=514,Kl=515,Yu=516,$u=517,Ku=518,Zu=519,zo=35044,Ho="300 es",ei=2e3,Cs=2001;class pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Ba=180/Math.PI;function Ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function Ju(i,e){return(i%e+e)%e}function ia(i,e,t){return(1-t)*i+t*e}function Tr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*s+e.x,this.y=a*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,s,a,c,f,d,m){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,f,d,m)}set(e,t,n,s,a,c,f,d,m){const g=this.elements;return g[0]=e,g[1]=s,g[2]=f,g[3]=t,g[4]=a,g[5]=d,g[6]=n,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],f=n[3],d=n[6],m=n[1],g=n[4],x=n[7],S=n[2],y=n[5],b=n[8],A=s[0],_=s[3],p=s[6],F=s[1],C=s[4],O=s[7],Z=s[2],H=s[5],l=s[8];return a[0]=c*A+f*F+d*Z,a[3]=c*_+f*C+d*H,a[6]=c*p+f*O+d*l,a[1]=m*A+g*F+x*Z,a[4]=m*_+g*C+x*H,a[7]=m*p+g*O+x*l,a[2]=S*A+y*F+b*Z,a[5]=S*_+y*C+b*H,a[8]=S*p+y*O+b*l,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],f=e[5],d=e[6],m=e[7],g=e[8];return t*c*g-t*f*m-n*a*g+n*f*d+s*a*m-s*c*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],f=e[5],d=e[6],m=e[7],g=e[8],x=g*c-f*m,S=f*d-g*a,y=m*a-c*d,b=t*x+n*S+s*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=x*A,e[1]=(s*m-g*n)*A,e[2]=(f*n-s*c)*A,e[3]=S*A,e[4]=(g*t-s*d)*A,e[5]=(s*a-f*t)*A,e[6]=y*A,e[7]=(n*d-m*t)*A,e[8]=(c*t-n*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,c,f){const d=Math.cos(a),m=Math.sin(a);return this.set(n*d,n*m,-n*(d*c+m*f)+c+e,-s*m,s*d,-s*(-m*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new lt;function Zl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qu(){const i=Dr("canvas");return i.style.display="block",i}const Vo={};function ef(i){i in Vo||(Vo[i]=!0,console.warn(i))}const ko=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Go=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Kr={[xi]:{transfer:bs,primaries:As,toReference:i=>i,fromReference:i=>i},[Fn]:{transfer:Dt,primaries:As,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ls]:{transfer:bs,primaries:ws,toReference:i=>i.applyMatrix3(Go),fromReference:i=>i.applyMatrix3(ko)},[Ga]:{transfer:Dt,primaries:ws,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Go),fromReference:i=>i.applyMatrix3(ko).convertLinearToSRGB()}},tf=new Set([xi,Ls]),wt={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Kr[e].toReference,s=Kr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Kr[i].primaries},getTransfer:function(i){return i===di?bs:Kr[i].transfer}};function cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wi;class nf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=Dr("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=cr(a[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rf=0;class Jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?a.push(aa(s[c].image)):a.push(aa(s[c]))}else a=aa(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;class nn extends pr{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=Ni,s=Ni,a=An,c=Fi,f=zn,d=_i,m=nn.DEFAULT_ANISOTROPY,g=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ur(),this.name="",this.source=new Jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=d,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Hl;nn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,n=0,s=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const d=e.elements,m=d[0],g=d[4],x=d[8],S=d[1],y=d[5],b=d[9],A=d[2],_=d[6],p=d[10];if(Math.abs(g-S)<.01&&Math.abs(x-A)<.01&&Math.abs(b-_)<.01){if(Math.abs(g+S)<.1&&Math.abs(x+A)<.1&&Math.abs(b+_)<.1&&Math.abs(m+y+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(m+1)/2,O=(y+1)/2,Z=(p+1)/2,H=(g+S)/4,l=(x+A)/4,te=(b+_)/4;return C>O&&C>Z?C<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(C),s=H/n,a=l/n):O>Z?O<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(O),n=H/s,a=te/s):Z<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(Z),n=l/a,s=te/a),this.set(n,s,a,t),this}let F=Math.sqrt((_-b)*(_-b)+(x-A)*(x-A)+(S-g)*(S-g));return Math.abs(F)<.001&&(F=1),this.x=(_-b)/F,this.y=(x-A)/F,this.z=(S-g)/F,this.w=Math.acos((m+y+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class af extends pr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const a=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends af{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ql extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class of extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,c,f){let d=n[s+0],m=n[s+1],g=n[s+2],x=n[s+3];const S=a[c+0],y=a[c+1],b=a[c+2],A=a[c+3];if(f===0){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(f===1){e[t+0]=S,e[t+1]=y,e[t+2]=b,e[t+3]=A;return}if(x!==A||d!==S||m!==y||g!==b){let _=1-f;const p=d*S+m*y+g*b+x*A,F=p>=0?1:-1,C=1-p*p;if(C>Number.EPSILON){const Z=Math.sqrt(C),H=Math.atan2(Z,p*F);_=Math.sin(_*H)/Z,f=Math.sin(f*H)/Z}const O=f*F;if(d=d*_+S*O,m=m*_+y*O,g=g*_+b*O,x=x*_+A*O,_===1-f){const Z=1/Math.sqrt(d*d+m*m+g*g+x*x);d*=Z,m*=Z,g*=Z,x*=Z}}e[t]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,n,s,a,c){const f=n[s],d=n[s+1],m=n[s+2],g=n[s+3],x=a[c],S=a[c+1],y=a[c+2],b=a[c+3];return e[t]=f*b+g*x+d*y-m*S,e[t+1]=d*b+g*S+m*x-f*y,e[t+2]=m*b+g*y+f*S-d*x,e[t+3]=g*b-f*x-d*S-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,c=e._order,f=Math.cos,d=Math.sin,m=f(n/2),g=f(s/2),x=f(a/2),S=d(n/2),y=d(s/2),b=d(a/2);switch(c){case"XYZ":this._x=S*g*x+m*y*b,this._y=m*y*x-S*g*b,this._z=m*g*b+S*y*x,this._w=m*g*x-S*y*b;break;case"YXZ":this._x=S*g*x+m*y*b,this._y=m*y*x-S*g*b,this._z=m*g*b-S*y*x,this._w=m*g*x+S*y*b;break;case"ZXY":this._x=S*g*x-m*y*b,this._y=m*y*x+S*g*b,this._z=m*g*b+S*y*x,this._w=m*g*x-S*y*b;break;case"ZYX":this._x=S*g*x-m*y*b,this._y=m*y*x+S*g*b,this._z=m*g*b-S*y*x,this._w=m*g*x+S*y*b;break;case"YZX":this._x=S*g*x+m*y*b,this._y=m*y*x+S*g*b,this._z=m*g*b-S*y*x,this._w=m*g*x-S*y*b;break;case"XZY":this._x=S*g*x-m*y*b,this._y=m*y*x-S*g*b,this._z=m*g*b+S*y*x,this._w=m*g*x+S*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],c=t[1],f=t[5],d=t[9],m=t[2],g=t[6],x=t[10],S=n+f+x;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-d)*y,this._y=(a-m)*y,this._z=(c-s)*y}else if(n>f&&n>x){const y=2*Math.sqrt(1+n-f-x);this._w=(g-d)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+m)/y}else if(f>x){const y=2*Math.sqrt(1+f-n-x);this._w=(a-m)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+x-n-f);this._w=(c-s)/y,this._x=(a+m)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,c=e._w,f=t._x,d=t._y,m=t._z,g=t._w;return this._x=n*g+c*f+s*m-a*d,this._y=s*g+c*d+a*f-n*m,this._z=a*g+c*m+n*d-s*f,this._w=c*g-n*f-s*d-a*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,c=this._w;let f=c*e._w+n*e._x+s*e._y+a*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const m=Math.sqrt(d),g=Math.atan2(m,f),x=Math.sin((1-t)*g)/m,S=Math.sin(t*g)/m;return this._w=c*x+this._w*S,this._x=n*x+this._x*S,this._y=s*x+this._y*S,this._z=a*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,c=e.y,f=e.z,d=e.w,m=2*(c*s-f*n),g=2*(f*t-a*s),x=2*(a*n-c*t);return this.x=t+d*m+c*x-f*g,this.y=n+d*g+f*m-a*x,this.z=s+d*x+a*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,c=t.x,f=t.y,d=t.z;return this.x=s*d-a*f,this.y=a*c-n*d,this.z=n*f-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new W,Wo=new Nr;class Fr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,En):En.fromBufferAttribute(a,c),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),Jr.subVectors(this.max,br),Xi.subVectors(e.a,br),qi.subVectors(e.b,br),ji.subVectors(e.c,br),oi.subVectors(qi,Xi),li.subVectors(ji,qi),bi.subVectors(Xi,ji);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-bi.z,bi.y,oi.z,0,-oi.x,li.z,0,-li.x,bi.z,0,-bi.x,-oi.y,oi.x,0,-li.y,li.x,0,-bi.y,bi.x,0];return!la(t,Xi,qi,ji,Jr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Xi,qi,ji,Jr))?!1:(Qr.crossVectors(oi,li),t=[Qr.x,Qr.y,Qr.z],la(t,Xi,qi,ji,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new W,new W,new W,new W,new W,new W,new W,new W],En=new W,Zr=new Fr,Xi=new W,qi=new W,ji=new W,oi=new W,li=new W,bi=new W,br=new W,Jr=new W,Qr=new W,Ai=new W;function la(i,e,t,n,s){for(let a=0,c=i.length-3;a<=c;a+=3){Ai.fromArray(i,a);const f=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),d=e.dot(Ai),m=t.dot(Ai),g=n.dot(Ai);if(Math.max(-Math.max(d,m,g),Math.min(d,m,g))>f)return!1}return!0}const lf=new Fr,Ar=new W,ca=new W;class Or{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lf.setFromPoints(e).getCenter(n);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(ca)),this.expandByPoint(Ar.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new W,ua=new W,es=new W,ci=new W,fa=new W,ts=new W,ha=new W;class Wa{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ua.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(ua);const a=e.distanceTo(t)*.5,c=-this.direction.dot(es),f=ci.dot(this.direction),d=-ci.dot(es),m=ci.lengthSq(),g=Math.abs(1-c*c);let x,S,y,b;if(g>0)if(x=c*d-f,S=c*f-d,b=a*g,x>=0)if(S>=-b)if(S<=b){const A=1/g;x*=A,S*=A,y=x*(x+c*S+2*f)+S*(c*x+S+2*d)+m}else S=a,x=Math.max(0,-(c*S+f)),y=-x*x+S*(S+2*d)+m;else S=-a,x=Math.max(0,-(c*S+f)),y=-x*x+S*(S+2*d)+m;else S<=-b?(x=Math.max(0,-(-c*a+f)),S=x>0?-a:Math.min(Math.max(-a,-d),a),y=-x*x+S*(S+2*d)+m):S<=b?(x=0,S=Math.min(Math.max(-a,-d),a),y=S*(S+2*d)+m):(x=Math.max(0,-(c*a+f)),S=x>0?a:Math.min(Math.max(-a,-d),a),y=-x*x+S*(S+2*d)+m);else S=c>0?-a:a,x=Math.max(0,-(c*S+f)),y=-x*x+S*(S+2*d)+m;return n&&n.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(ua).addScaledVector(es,S),y}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),f=n-c,d=n+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,c,f,d;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,S=this.origin;return m>=0?(n=(e.min.x-S.x)*m,s=(e.max.x-S.x)*m):(n=(e.max.x-S.x)*m,s=(e.min.x-S.x)*m),g>=0?(a=(e.min.y-S.y)*g,c=(e.max.y-S.y)*g):(a=(e.max.y-S.y)*g,c=(e.min.y-S.y)*g),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),x>=0?(f=(e.min.z-S.z)*x,d=(e.max.z-S.z)*x):(f=(e.max.z-S.z)*x,d=(e.min.z-S.z)*x),n>d||f>s)||((f>n||n!==n)&&(n=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,a){fa.subVectors(t,e),ts.subVectors(n,e),ha.crossVectors(fa,ts);let c=this.direction.dot(ha),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;ci.subVectors(this.origin,e);const d=f*this.direction.dot(ts.crossVectors(ci,ts));if(d<0)return null;const m=f*this.direction.dot(fa.cross(ci));if(m<0||d+m>c)return null;const g=-f*ci.dot(ha);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,s,a,c,f,d,m,g,x,S,y,b,A,_){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,f,d,m,g,x,S,y,b,A,_)}set(e,t,n,s,a,c,f,d,m,g,x,S,y,b,A,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=c,p[9]=f,p[13]=d,p[2]=m,p[6]=g,p[10]=x,p[14]=S,p[3]=y,p[7]=b,p[11]=A,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Yi.setFromMatrixColumn(e,0).length(),a=1/Yi.setFromMatrixColumn(e,1).length(),c=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,c=Math.cos(n),f=Math.sin(n),d=Math.cos(s),m=Math.sin(s),g=Math.cos(a),x=Math.sin(a);if(e.order==="XYZ"){const S=c*g,y=c*x,b=f*g,A=f*x;t[0]=d*g,t[4]=-d*x,t[8]=m,t[1]=y+b*m,t[5]=S-A*m,t[9]=-f*d,t[2]=A-S*m,t[6]=b+y*m,t[10]=c*d}else if(e.order==="YXZ"){const S=d*g,y=d*x,b=m*g,A=m*x;t[0]=S+A*f,t[4]=b*f-y,t[8]=c*m,t[1]=c*x,t[5]=c*g,t[9]=-f,t[2]=y*f-b,t[6]=A+S*f,t[10]=c*d}else if(e.order==="ZXY"){const S=d*g,y=d*x,b=m*g,A=m*x;t[0]=S-A*f,t[4]=-c*x,t[8]=b+y*f,t[1]=y+b*f,t[5]=c*g,t[9]=A-S*f,t[2]=-c*m,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const S=c*g,y=c*x,b=f*g,A=f*x;t[0]=d*g,t[4]=b*m-y,t[8]=S*m+A,t[1]=d*x,t[5]=A*m+S,t[9]=y*m-b,t[2]=-m,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const S=c*d,y=c*m,b=f*d,A=f*m;t[0]=d*g,t[4]=A-S*x,t[8]=b*x+y,t[1]=x,t[5]=c*g,t[9]=-f*g,t[2]=-m*g,t[6]=y*x+b,t[10]=S-A*x}else if(e.order==="XZY"){const S=c*d,y=c*m,b=f*d,A=f*m;t[0]=d*g,t[4]=-x,t[8]=m*g,t[1]=S*x+A,t[5]=c*g,t[9]=y*x-b,t[2]=b*x-y,t[6]=f*g,t[10]=A*x+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,uf)}lookAt(e,t,n){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ui.crossVectors(n,un),ui.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ui.crossVectors(n,un)),ui.normalize(),ns.crossVectors(un,ui),s[0]=ui.x,s[4]=ns.x,s[8]=un.x,s[1]=ui.y,s[5]=ns.y,s[9]=un.y,s[2]=ui.z,s[6]=ns.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],f=n[4],d=n[8],m=n[12],g=n[1],x=n[5],S=n[9],y=n[13],b=n[2],A=n[6],_=n[10],p=n[14],F=n[3],C=n[7],O=n[11],Z=n[15],H=s[0],l=s[4],te=s[8],P=s[12],w=s[1],Y=s[5],oe=s[9],z=s[13],ae=s[2],le=s[6],ve=s[10],pe=s[14],ne=s[3],ge=s[7],_e=s[11],Be=s[15];return a[0]=c*H+f*w+d*ae+m*ne,a[4]=c*l+f*Y+d*le+m*ge,a[8]=c*te+f*oe+d*ve+m*_e,a[12]=c*P+f*z+d*pe+m*Be,a[1]=g*H+x*w+S*ae+y*ne,a[5]=g*l+x*Y+S*le+y*ge,a[9]=g*te+x*oe+S*ve+y*_e,a[13]=g*P+x*z+S*pe+y*Be,a[2]=b*H+A*w+_*ae+p*ne,a[6]=b*l+A*Y+_*le+p*ge,a[10]=b*te+A*oe+_*ve+p*_e,a[14]=b*P+A*z+_*pe+p*Be,a[3]=F*H+C*w+O*ae+Z*ne,a[7]=F*l+C*Y+O*le+Z*ge,a[11]=F*te+C*oe+O*ve+Z*_e,a[15]=F*P+C*z+O*pe+Z*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],c=e[1],f=e[5],d=e[9],m=e[13],g=e[2],x=e[6],S=e[10],y=e[14],b=e[3],A=e[7],_=e[11],p=e[15];return b*(+a*d*x-s*m*x-a*f*S+n*m*S+s*f*y-n*d*y)+A*(+t*d*y-t*m*S+a*c*S-s*c*y+s*m*g-a*d*g)+_*(+t*m*x-t*f*y-a*c*x+n*c*y+a*f*g-n*m*g)+p*(-s*f*g-t*d*x+t*f*S+s*c*x-n*c*S+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],f=e[5],d=e[6],m=e[7],g=e[8],x=e[9],S=e[10],y=e[11],b=e[12],A=e[13],_=e[14],p=e[15],F=x*_*m-A*S*m+A*d*y-f*_*y-x*d*p+f*S*p,C=b*S*m-g*_*m-b*d*y+c*_*y+g*d*p-c*S*p,O=g*A*m-b*x*m+b*f*y-c*A*y-g*f*p+c*x*p,Z=b*x*d-g*A*d-b*f*S+c*A*S+g*f*_-c*x*_,H=t*F+n*C+s*O+a*Z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const l=1/H;return e[0]=F*l,e[1]=(A*S*a-x*_*a-A*s*y+n*_*y+x*s*p-n*S*p)*l,e[2]=(f*_*a-A*d*a+A*s*m-n*_*m-f*s*p+n*d*p)*l,e[3]=(x*d*a-f*S*a-x*s*m+n*S*m+f*s*y-n*d*y)*l,e[4]=C*l,e[5]=(g*_*a-b*S*a+b*s*y-t*_*y-g*s*p+t*S*p)*l,e[6]=(b*d*a-c*_*a-b*s*m+t*_*m+c*s*p-t*d*p)*l,e[7]=(c*S*a-g*d*a+g*s*m-t*S*m-c*s*y+t*d*y)*l,e[8]=O*l,e[9]=(b*x*a-g*A*a-b*n*y+t*A*y+g*n*p-t*x*p)*l,e[10]=(c*A*a-b*f*a+b*n*m-t*A*m-c*n*p+t*f*p)*l,e[11]=(g*f*a-c*x*a-g*n*m+t*x*m+c*n*y-t*f*y)*l,e[12]=Z*l,e[13]=(g*A*s-b*x*s+b*n*S-t*A*S-g*n*_+t*x*_)*l,e[14]=(b*f*s-c*A*s-b*n*d+t*A*d+c*n*_-t*f*_)*l,e[15]=(c*x*s-g*f*s+g*n*d-t*x*d-c*n*S+t*f*S)*l,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,c=e.x,f=e.y,d=e.z,m=a*c,g=a*f;return this.set(m*c+n,m*f-s*d,m*d+s*f,0,m*f+s*d,g*f+n,g*d-s*c,0,m*d-s*f,g*d+s*c,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,c){return this.set(1,n,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,c=t._y,f=t._z,d=t._w,m=a+a,g=c+c,x=f+f,S=a*m,y=a*g,b=a*x,A=c*g,_=c*x,p=f*x,F=d*m,C=d*g,O=d*x,Z=n.x,H=n.y,l=n.z;return s[0]=(1-(A+p))*Z,s[1]=(y+O)*Z,s[2]=(b-C)*Z,s[3]=0,s[4]=(y-O)*H,s[5]=(1-(S+p))*H,s[6]=(_+F)*H,s[7]=0,s[8]=(b+C)*l,s[9]=(_-F)*l,s[10]=(1-(S+A))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Yi.set(s[0],s[1],s[2]).length();const c=Yi.set(s[4],s[5],s[6]).length(),f=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);const m=1/a,g=1/c,x=1/f;return Tn.elements[0]*=m,Tn.elements[1]*=m,Tn.elements[2]*=m,Tn.elements[4]*=g,Tn.elements[5]*=g,Tn.elements[6]*=g,Tn.elements[8]*=x,Tn.elements[9]*=x,Tn.elements[10]*=x,t.setFromRotationMatrix(Tn),n.x=a,n.y=c,n.z=f,this}makePerspective(e,t,n,s,a,c,f=ei){const d=this.elements,m=2*a/(t-e),g=2*a/(n-s),x=(t+e)/(t-e),S=(n+s)/(n-s);let y,b;if(f===ei)y=-(c+a)/(c-a),b=-2*c*a/(c-a);else if(f===Cs)y=-c/(c-a),b=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=m,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=g,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,a,c,f=ei){const d=this.elements,m=1/(t-e),g=1/(n-s),x=1/(c-a),S=(t+e)*m,y=(n+s)*g;let b,A;if(f===ei)b=(c+a)*x,A=-2*x;else if(f===Cs)b=a*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*m,d[4]=0,d[8]=0,d[12]=-S,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=A,d[14]=-b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yi=new W,Tn=new Nt,cf=new W(0,0,0),uf=new W(1,1,1),ui=new W,ns=new W,un=new W,Xo=new Nt,qo=new Nr;class Vn{constructor(e=0,t=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],c=s[4],f=s[8],d=s[1],m=s[5],g=s[9],x=s[2],S=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-on(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,m)):(this._y=Math.atan2(-x,a),this._z=0);break;case"ZXY":this._x=Math.asin(on(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-on(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,a)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qo.setFromEuler(this),this.setFromQuaternion(qo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ff=0;const jo=new W,$i=new Nr,$n=new Nt,is=new W,wr=new W,hf=new W,df=new Nr,Yo=new W(1,0,0),$o=new W(0,1,0),Ko=new W(0,0,1),Zo={type:"added"},pf={type:"removed"},Ki={type:"childadded",child:null},da={type:"childremoved",child:null};class qt extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new W,t=new Vn,n=new Nr,s=new W(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new lt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Yo,e)}rotateY(e){return this.rotateOnAxis($o,e)}rotateZ(e){return this.rotateOnAxis(Ko,e)}translateOnAxis(e,t){return jo.copy(e).applyQuaternion(this.quaternion),this.position.add(jo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yo,e)}translateY(e){return this.translateOnAxis($o,e)}translateZ(e){return this.translateOnAxis(Ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?is.copy(e):is.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(wr,is,this.up):$n.lookAt(is,wr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),$i.setFromRotationMatrix($n),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zo),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zo),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++){const f=s[a];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let m=0,g=d.length;m<g;m++){const x=d[m];a(e.shapes,x)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,m=this.material.length;d<m;d++)f.push(a(e.materials,this.material[d]));s.material=f}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(a(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),m=c(e.textures),g=c(e.images),x=c(e.shapes),S=c(e.skeletons),y=c(e.animations),b=c(e.nodes);f.length>0&&(n.geometries=f),d.length>0&&(n.materials=d),m.length>0&&(n.textures=m),g.length>0&&(n.images=g),x.length>0&&(n.shapes=x),S.length>0&&(n.skeletons=S),y.length>0&&(n.animations=y),b.length>0&&(n.nodes=b)}return n.object=s,n;function c(f){const d=[];for(const m in f){const g=f[m];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}qt.DEFAULT_UP=new W(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new W,Kn=new W,pa=new W,Zn=new W,Zi=new W,Ji=new W,Jo=new W,ma=new W,ga=new W,_a=new W;class Bn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){bn.subVectors(s,t),Kn.subVectors(n,t),pa.subVectors(e,t);const c=bn.dot(bn),f=bn.dot(Kn),d=bn.dot(pa),m=Kn.dot(Kn),g=Kn.dot(pa),x=c*m-f*f;if(x===0)return a.set(0,0,0),null;const S=1/x,y=(m*d-f*g)*S,b=(c*g-f*d)*S;return a.set(1-y-b,b,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,a,c,f,d){return this.getBarycoord(e,t,n,s,Zn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Zn.x),d.addScaledVector(c,Zn.y),d.addScaledVector(f,Zn.z),d)}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),Kn.subVectors(e,t),bn.cross(Kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),bn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let c,f;Zi.subVectors(s,n),Ji.subVectors(a,n),ma.subVectors(e,n);const d=Zi.dot(ma),m=Ji.dot(ma);if(d<=0&&m<=0)return t.copy(n);ga.subVectors(e,s);const g=Zi.dot(ga),x=Ji.dot(ga);if(g>=0&&x<=g)return t.copy(s);const S=d*x-g*m;if(S<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(n).addScaledVector(Zi,c);_a.subVectors(e,a);const y=Zi.dot(_a),b=Ji.dot(_a);if(b>=0&&y<=b)return t.copy(a);const A=y*m-d*b;if(A<=0&&m>=0&&b<=0)return f=m/(m-b),t.copy(n).addScaledVector(Ji,f);const _=g*b-y*x;if(_<=0&&x-g>=0&&y-b>=0)return Jo.subVectors(a,s),f=(x-g)/(x-g+(y-b)),t.copy(s).addScaledVector(Jo,f);const p=1/(_+A+S);return c=A*p,f=S*p,t.copy(n).addScaledVector(Zi,c).addScaledVector(Ji,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},rs={h:0,s:0,l:0};function va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=wt.workingColorSpace){if(e=Ju(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=va(c,a,e+1/3),this.g=va(c,a,e),this.b=va(c,a,e-1/3)}return wt.toWorkingColorSpace(this,s),this}setStyle(e,t=Fn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const n=tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return wt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(on(Zt.r*255,0,255))*65536+Math.round(on(Zt.g*255,0,255))*256+Math.round(on(Zt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,a=Zt.b,c=Math.max(n,s,a),f=Math.min(n,s,a);let d,m;const g=(f+c)/2;if(f===c)d=0,m=0;else{const x=c-f;switch(m=g<=.5?x/(c+f):x/(2-c-f),c){case n:d=(s-a)/x+(s<a?6:0);break;case s:d=(a-n)/x+2;break;case a:d=(n-s)/x+4;break}d/=6}return e.h=d,e.s=m,e.l=g,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Fn){wt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(rs);const n=ia(fi.h,rs.h,t),s=ia(fi.s,rs.s,t),a=ia(fi.l,rs.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new _t;_t.NAMES=tc;let mf=0;class Bi extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=or,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ia,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const f in a){const d=a[f];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nc extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new W,ss=new ut;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ef("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),s=an(s,this.array),a=an(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zo&&(e.usage=this.usage),e}}class ic extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rc extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rn extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gf=0;const gn=new Nt,xa=new qt,Qi=new W,fn=new Fr,Cr=new Fr,Wt=new W;class xn extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zl(e)?rc:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new lt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];fn.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const f=t[a];Cr.setFromBufferAttribute(f),this.morphTargetsRelative?(Wt.addVectors(fn.min,Cr.min),fn.expandByPoint(Wt),Wt.addVectors(fn.max,Cr.max),fn.expandByPoint(Wt)):(fn.expandByPoint(Cr.min),fn.expandByPoint(Cr.max))}fn.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)Wt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let a=0,c=t.length;a<c;a++){const f=t[a],d=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)Wt.fromBufferAttribute(f,m),d&&(Qi.fromBufferAttribute(e,m),Wt.add(Qi)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let te=0;te<n.count;te++)f[te]=new W,d[te]=new W;const m=new W,g=new W,x=new W,S=new ut,y=new ut,b=new ut,A=new W,_=new W;function p(te,P,w){m.fromBufferAttribute(n,te),g.fromBufferAttribute(n,P),x.fromBufferAttribute(n,w),S.fromBufferAttribute(a,te),y.fromBufferAttribute(a,P),b.fromBufferAttribute(a,w),g.sub(m),x.sub(m),y.sub(S),b.sub(S);const Y=1/(y.x*b.y-b.x*y.y);isFinite(Y)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(Y),_.copy(x).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(Y),f[te].add(A),f[P].add(A),f[w].add(A),d[te].add(_),d[P].add(_),d[w].add(_))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let te=0,P=F.length;te<P;++te){const w=F[te],Y=w.start,oe=w.count;for(let z=Y,ae=Y+oe;z<ae;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const C=new W,O=new W,Z=new W,H=new W;function l(te){Z.fromBufferAttribute(s,te),H.copy(Z);const P=f[te];C.copy(P),C.sub(Z.multiplyScalar(Z.dot(P))).normalize(),O.crossVectors(H,P);const Y=O.dot(d[te])<0?-1:1;c.setXYZW(te,C.x,C.y,C.z,Y)}for(let te=0,P=F.length;te<P;++te){const w=F[te],Y=w.start,oe=w.count;for(let z=Y,ae=Y+oe;z<ae;z+=3)l(e.getX(z+0)),l(e.getX(z+1)),l(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let S=0,y=n.count;S<y;S++)n.setXYZ(S,0,0,0);const s=new W,a=new W,c=new W,f=new W,d=new W,m=new W,g=new W,x=new W;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),A=e.getX(S+1),_=e.getX(S+2);s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,_),g.subVectors(c,a),x.subVectors(s,a),g.cross(x),f.fromBufferAttribute(n,b),d.fromBufferAttribute(n,A),m.fromBufferAttribute(n,_),f.add(g),d.add(g),m.add(g),n.setXYZ(b,f.x,f.y,f.z),n.setXYZ(A,d.x,d.y,d.z),n.setXYZ(_,m.x,m.y,m.z)}else for(let S=0,y=t.count;S<y;S+=3)s.fromBufferAttribute(t,S+0),a.fromBufferAttribute(t,S+1),c.fromBufferAttribute(t,S+2),g.subVectors(c,a),x.subVectors(s,a),g.cross(x),n.setXYZ(S+0,g.x,g.y,g.z),n.setXYZ(S+1,g.x,g.y,g.z),n.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(f,d){const m=f.array,g=f.itemSize,x=f.normalized,S=new m.constructor(d.length*g);let y=0,b=0;for(let A=0,_=d.length;A<_;A++){f.isInterleavedBufferAttribute?y=d[A]*f.data.stride+f.offset:y=d[A]*g;for(let p=0;p<g;p++)S[b++]=m[y++]}return new Hn(S,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,s=this.attributes;for(const f in s){const d=s[f],m=e(d,n);t.setAttribute(f,m)}const a=this.morphAttributes;for(const f in a){const d=[],m=a[f];for(let g=0,x=m.length;g<x;g++){const S=m[g],y=e(S,n);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const m=c[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(e[m]=d[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const m=n[d];e.data.attributes[d]=m.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const m=this.morphAttributes[d],g=[];for(let x=0,S=m.length;x<S;x++){const y=m[x];g.push(y.toJSON(e.data))}g.length>0&&(s[d]=g,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const m in s){const g=s[m];this.setAttribute(m,g.clone(t))}const a=e.morphAttributes;for(const m in a){const g=[],x=a[m];for(let S=0,y=x.length;S<y;S++)g.push(x[S].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const x=c[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qo=new Nt,wi=new Wa,as=new Or,el=new W,er=new W,tr=new W,nr=new W,Ma=new W,os=new W,ls=new ut,cs=new ut,us=new ut,tl=new W,nl=new W,il=new W,fs=new W,hs=new W;class wn extends qt{constructor(e=new xn,t=new nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(a&&f){os.set(0,0,0);for(let d=0,m=a.length;d<m;d++){const g=f[d],x=a[d];g!==0&&(Ma.fromBufferAttribute(x,e),c?os.addScaledVector(Ma,g):os.addScaledVector(Ma.sub(t),g))}t.add(os)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(a),wi.copy(e.ray).recast(e.near),!(as.containsPoint(wi.origin)===!1&&(wi.intersectSphere(as,el)===null||wi.origin.distanceToSquared(el)>(e.far-e.near)**2))&&(Qo.copy(a).invert(),wi.copy(e.ray).applyMatrix4(Qo),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let s;const a=this.geometry,c=this.material,f=a.index,d=a.attributes.position,m=a.attributes.uv,g=a.attributes.uv1,x=a.attributes.normal,S=a.groups,y=a.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,A=S.length;b<A;b++){const _=S[b],p=c[_.materialIndex],F=Math.max(_.start,y.start),C=Math.min(f.count,Math.min(_.start+_.count,y.start+y.count));for(let O=F,Z=C;O<Z;O+=3){const H=f.getX(O),l=f.getX(O+1),te=f.getX(O+2);s=ds(this,p,e,n,m,g,x,H,l,te),s&&(s.faceIndex=Math.floor(O/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const b=Math.max(0,y.start),A=Math.min(f.count,y.start+y.count);for(let _=b,p=A;_<p;_+=3){const F=f.getX(_),C=f.getX(_+1),O=f.getX(_+2);s=ds(this,c,e,n,m,g,x,F,C,O),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let b=0,A=S.length;b<A;b++){const _=S[b],p=c[_.materialIndex],F=Math.max(_.start,y.start),C=Math.min(d.count,Math.min(_.start+_.count,y.start+y.count));for(let O=F,Z=C;O<Z;O+=3){const H=O,l=O+1,te=O+2;s=ds(this,p,e,n,m,g,x,H,l,te),s&&(s.faceIndex=Math.floor(O/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const b=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let _=b,p=A;_<p;_+=3){const F=_,C=_+1,O=_+2;s=ds(this,c,e,n,m,g,x,F,C,O),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function _f(i,e,t,n,s,a,c,f){let d;if(e.side===ln?d=n.intersectTriangle(c,a,s,!0,f):d=n.intersectTriangle(s,a,c,e.side===vi,f),d===null)return null;hs.copy(f),hs.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(hs);return m<t.near||m>t.far?null:{distance:m,point:hs.clone(),object:i}}function ds(i,e,t,n,s,a,c,f,d,m){i.getVertexPosition(f,er),i.getVertexPosition(d,tr),i.getVertexPosition(m,nr);const g=_f(i,e,t,n,er,tr,nr,fs);if(g){s&&(ls.fromBufferAttribute(s,f),cs.fromBufferAttribute(s,d),us.fromBufferAttribute(s,m),g.uv=Bn.getInterpolation(fs,er,tr,nr,ls,cs,us,new ut)),a&&(ls.fromBufferAttribute(a,f),cs.fromBufferAttribute(a,d),us.fromBufferAttribute(a,m),g.uv1=Bn.getInterpolation(fs,er,tr,nr,ls,cs,us,new ut)),c&&(tl.fromBufferAttribute(c,f),nl.fromBufferAttribute(c,d),il.fromBufferAttribute(c,m),g.normal=Bn.getInterpolation(fs,er,tr,nr,tl,nl,il,new W),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:d,c:m,normal:new W,materialIndex:0};Bn.getNormal(er,tr,nr,x.normal),g.face=x}return g}class Br extends xn{constructor(e=1,t=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const f=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],m=[],g=[],x=[];let S=0,y=0;b("z","y","x",-1,-1,n,t,e,c,a,0),b("z","y","x",1,-1,n,t,-e,c,a,1),b("x","z","y",1,1,e,n,t,s,c,2),b("x","z","y",1,-1,e,n,-t,s,c,3),b("x","y","z",1,-1,e,t,n,s,a,4),b("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(x,2));function b(A,_,p,F,C,O,Z,H,l,te,P){const w=O/l,Y=Z/te,oe=O/2,z=Z/2,ae=H/2,le=l+1,ve=te+1;let pe=0,ne=0;const ge=new W;for(let _e=0;_e<ve;_e++){const Be=_e*Y-z;for(let ct=0;ct<le;ct++){const yt=ct*w-oe;ge[A]=yt*F,ge[_]=Be*C,ge[p]=ae,m.push(ge.x,ge.y,ge.z),ge[A]=0,ge[_]=0,ge[p]=H>0?1:-1,g.push(ge.x,ge.y,ge.z),x.push(ct/l),x.push(1-_e/te),pe+=1}}for(let _e=0;_e<te;_e++)for(let Be=0;Be<l;Be++){const ct=S+Be+le*_e,yt=S+Be+le*(_e+1),re=S+(Be+1)+le*(_e+1),xe=S+(Be+1)+le*_e;d.push(ct,yt,xe),d.push(yt,re,xe),ne+=6}f.addGroup(y,ne,P),y+=ne,S+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=dr(i[t]);for(const s in n)e[s]=n[s]}return e}function vf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const xf={clone:dr,merge:tn};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ac extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new W,rl=new ut,sl=new ut;class _n extends ac{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,rl,sl),t.subVectors(sl,rl)}setViewOffset(e,t,n,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,m=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*n/m,s*=c.width/d,n*=c.height/m}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class yf extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(ir,rr,e,t);s.layers=this.layers,this.add(s);const a=new _n(ir,rr,e,t);a.layers=this.layers,this.add(a);const c=new _n(ir,rr,e,t);c.layers=this.layers,this.add(c);const f=new _n(ir,rr,e,t);f.layers=this.layers,this.add(f);const d=new _n(ir,rr,e,t);d.layers=this.layers,this.add(d);const m=new _n(ir,rr,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,c,f,d]=t;for(const m of t)this.remove(m);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,d,m,g]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,c),e.setRenderTarget(n,2,s),e.render(t,f),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,m),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,s),e.render(t,g),e.setRenderTarget(x,S,y),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class oc extends nn{constructor(e,t,n,s,a,c,f,d,m,g){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,n,s,a,c,f,d,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ef extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new oc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Br(5,5,5),a=new ti({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:mi});a.uniforms.tEquirect.value=t;const c=new wn(s,a),f=t.minFilter;return t.minFilter===Fi&&(t.minFilter=An),new yf(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(a)}}const Sa=new W,Tf=new W,bf=new lt;class Li{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Sa.subVectors(n,t).cross(Tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bf.getNormalMatrix(e),s=this.coplanarPoint(Sa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Or,ps=new W;class Xa{constructor(e=new Li,t=new Li,n=new Li,s=new Li,a=new Li,c=new Li){this.planes=[e,t,n,s,a,c]}set(e,t,n,s,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(n),f[3].copy(s),f[4].copy(a),f[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,s=e.elements,a=s[0],c=s[1],f=s[2],d=s[3],m=s[4],g=s[5],x=s[6],S=s[7],y=s[8],b=s[9],A=s[10],_=s[11],p=s[12],F=s[13],C=s[14],O=s[15];if(n[0].setComponents(d-a,S-m,_-y,O-p).normalize(),n[1].setComponents(d+a,S+m,_+y,O+p).normalize(),n[2].setComponents(d+c,S+g,_+b,O+F).normalize(),n[3].setComponents(d-c,S-g,_-b,O-F).normalize(),n[4].setComponents(d-f,S-x,_-A,O-C).normalize(),t===ei)n[5].setComponents(d+f,S+x,_+A,O+C).normalize();else if(t===Cs)n[5].setComponents(f,x,A,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ps.x=s.normal.x>0?e.max.x:e.min.x,ps.y=s.normal.y>0?e.max.y:e.min.y,ps.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let i=null,e=!1,t=null,n=null;function s(a,c){t(a,c),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Af(i){const e=new WeakMap;function t(f,d){const m=f.array,g=f.usage,x=m.byteLength,S=i.createBuffer();i.bindBuffer(d,S),i.bufferData(d,m,g),f.onUploadCallback();let y;if(m instanceof Float32Array)y=i.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=i.SHORT;else if(m instanceof Uint32Array)y=i.UNSIGNED_INT;else if(m instanceof Int32Array)y=i.INT;else if(m instanceof Int8Array)y=i.BYTE;else if(m instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function n(f,d,m){const g=d.array,x=d._updateRange,S=d.updateRanges;if(i.bindBuffer(m,f),x.count===-1&&S.length===0&&i.bufferSubData(m,0,g),S.length!==0){for(let y=0,b=S.length;y<b;y++){const A=S[y];i.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}x.count!==-1&&(i.bufferSubData(m,x.offset*g.BYTES_PER_ELEMENT,g,x.offset,x.count),x.count=-1),d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);if(m===void 0)e.set(f,t(f,d));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(m.buffer,f,d),m.version=f.version}}return{get:s,remove:a,update:c}}class Ds extends xn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,c=t/2,f=Math.floor(n),d=Math.floor(s),m=f+1,g=d+1,x=e/f,S=t/d,y=[],b=[],A=[],_=[];for(let p=0;p<g;p++){const F=p*S-c;for(let C=0;C<m;C++){const O=C*x-a;b.push(O,-F,0),A.push(0,0,1),_.push(C/f),_.push(1-p/d)}}for(let p=0;p<d;p++)for(let F=0;F<f;F++){const C=F+m*p,O=F+m*(p+1),Z=F+1+m*(p+1),H=F+1+m*p;y.push(C,O,H),y.push(O,Z,H)}this.setIndex(y),this.setAttribute("position",new rn(b,3)),this.setAttribute("normal",new rn(A,3)),this.setAttribute("uv",new rn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}var wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",rh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ph=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Th=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ah=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ih=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ud=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$d=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:wf,alphahash_pars_fragment:Cf,alphamap_fragment:Rf,alphamap_pars_fragment:Pf,alphatest_fragment:Lf,alphatest_pars_fragment:Df,aomap_fragment:If,aomap_pars_fragment:Uf,batching_pars_vertex:Nf,batching_vertex:Ff,begin_vertex:Of,beginnormal_vertex:Bf,bsdfs:zf,iridescence_fragment:Hf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:jf,color_pars_vertex:Yf,color_vertex:$f,common:Kf,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:Jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:eh,emissivemap_fragment:th,emissivemap_pars_fragment:nh,colorspace_fragment:ih,colorspace_pars_fragment:rh,envmap_fragment:sh,envmap_common_pars_fragment:ah,envmap_pars_fragment:oh,envmap_pars_vertex:lh,envmap_physical_pars_fragment:Mh,envmap_vertex:ch,fog_vertex:uh,fog_pars_vertex:fh,fog_fragment:hh,fog_pars_fragment:dh,gradientmap_pars_fragment:ph,lightmap_fragment:mh,lightmap_pars_fragment:gh,lights_lambert_fragment:_h,lights_lambert_pars_fragment:vh,lights_pars_begin:xh,lights_toon_fragment:Sh,lights_toon_pars_fragment:yh,lights_phong_fragment:Eh,lights_phong_pars_fragment:Th,lights_physical_fragment:bh,lights_physical_pars_fragment:Ah,lights_fragment_begin:wh,lights_fragment_maps:Ch,lights_fragment_end:Rh,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Lh,logdepthbuf_pars_vertex:Dh,logdepthbuf_vertex:Ih,map_fragment:Uh,map_pars_fragment:Nh,map_particle_fragment:Fh,map_particle_pars_fragment:Oh,metalnessmap_fragment:Bh,metalnessmap_pars_fragment:zh,morphinstance_vertex:Hh,morphcolor_vertex:Vh,morphnormal_vertex:kh,morphtarget_pars_vertex:Gh,morphtarget_vertex:Wh,normal_fragment_begin:Xh,normal_fragment_maps:qh,normal_pars_fragment:jh,normal_pars_vertex:Yh,normal_vertex:$h,normalmap_pars_fragment:Kh,clearcoat_normal_fragment_begin:Zh,clearcoat_normal_fragment_maps:Jh,clearcoat_pars_fragment:Qh,iridescence_pars_fragment:ed,opaque_fragment:td,packing:nd,premultiplied_alpha_fragment:id,project_vertex:rd,dithering_fragment:sd,dithering_pars_fragment:ad,roughnessmap_fragment:od,roughnessmap_pars_fragment:ld,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:ud,shadowmap_vertex:fd,shadowmask_pars_fragment:hd,skinbase_vertex:dd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:gd,specularmap_fragment:_d,specularmap_pars_fragment:vd,tonemapping_fragment:xd,tonemapping_pars_fragment:Md,transmission_fragment:Sd,transmission_pars_fragment:yd,uv_pars_fragment:Ed,uv_pars_vertex:Td,uv_vertex:bd,worldpos_vertex:Ad,background_vert:wd,background_frag:Cd,backgroundCube_vert:Rd,backgroundCube_frag:Pd,cube_vert:Ld,cube_frag:Dd,depth_vert:Id,depth_frag:Ud,distanceRGBA_vert:Nd,distanceRGBA_frag:Fd,equirect_vert:Od,equirect_frag:Bd,linedashed_vert:zd,linedashed_frag:Hd,meshbasic_vert:Vd,meshbasic_frag:kd,meshlambert_vert:Gd,meshlambert_frag:Wd,meshmatcap_vert:Xd,meshmatcap_frag:qd,meshnormal_vert:jd,meshnormal_frag:Yd,meshphong_vert:$d,meshphong_frag:Kd,meshphysical_vert:Zd,meshphysical_frag:Jd,meshtoon_vert:Qd,meshtoon_frag:ep,points_vert:tp,points_frag:np,shadow_vert:ip,shadow_frag:rp,sprite_vert:sp,sprite_frag:ap},be={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},On={basic:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new _t(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:tn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:tn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new _t(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:tn([be.points,be.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:tn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:tn([be.common,be.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:tn([be.sprite,be.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:tn([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:tn([be.lights,be.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};On.physical={uniforms:tn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const ms={r:0,b:0,g:0},Ri=new Vn,op=new Nt;function lp(i,e,t,n,s,a,c){const f=new _t(0);let d=a===!0?0:1,m,g,x=null,S=0,y=null;function b(_,p){let F=!1,C=p.isScene===!0?p.background:null;C&&C.isTexture&&(C=(p.backgroundBlurriness>0?t:e).get(C)),C===null?A(f,d):C&&C.isColor&&(A(C,1),F=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||F)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Ps)?(g===void 0&&(g=new wn(new Br(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:dr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(Z,H,l){this.matrixWorld.copyPosition(l.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),Ri.copy(p.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(op.makeRotationFromEuler(Ri)),g.material.toneMapped=wt.getTransfer(C.colorSpace)!==Dt,(x!==C||S!==C.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,x=C,S=C.version,y=i.toneMapping),g.layers.enableAll(),_.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new wn(new Ds(2,2),new ti({name:"BackgroundMaterial",uniforms:dr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,m.material.toneMapped=wt.getTransfer(C.colorSpace)!==Dt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||S!==C.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,x=C,S=C.version,y=i.toneMapping),m.layers.enableAll(),_.unshift(m,m.geometry,m.material,0,0,null))}function A(_,p){_.getRGB(ms,sc(i)),n.buffers.color.setClear(ms.r,ms.g,ms.b,p,c)}return{getClearColor:function(){return f},setClearColor:function(_,p=1){f.set(_),d=p,A(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(_){d=_,A(f,d)},render:b}}function cp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=S(null);let a=s,c=!1;function f(w,Y,oe,z,ae){let le=!1;const ve=x(z,oe,Y);a!==ve&&(a=ve,m(a.object)),le=y(w,z,oe,ae),le&&b(w,z,oe,ae),ae!==null&&e.update(ae,i.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,O(w,Y,oe,z),ae!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function d(){return i.createVertexArray()}function m(w){return i.bindVertexArray(w)}function g(w){return i.deleteVertexArray(w)}function x(w,Y,oe){const z=oe.wireframe===!0;let ae=n[w.id];ae===void 0&&(ae={},n[w.id]=ae);let le=ae[Y.id];le===void 0&&(le={},ae[Y.id]=le);let ve=le[z];return ve===void 0&&(ve=S(d()),le[z]=ve),ve}function S(w){const Y=[],oe=[],z=[];for(let ae=0;ae<t;ae++)Y[ae]=0,oe[ae]=0,z[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:oe,attributeDivisors:z,object:w,attributes:{},index:null}}function y(w,Y,oe,z){const ae=a.attributes,le=Y.attributes;let ve=0;const pe=oe.getAttributes();for(const ne in pe)if(pe[ne].location>=0){const _e=ae[ne];let Be=le[ne];if(Be===void 0&&(ne==="instanceMatrix"&&w.instanceMatrix&&(Be=w.instanceMatrix),ne==="instanceColor"&&w.instanceColor&&(Be=w.instanceColor)),_e===void 0||_e.attribute!==Be||Be&&_e.data!==Be.data)return!0;ve++}return a.attributesNum!==ve||a.index!==z}function b(w,Y,oe,z){const ae={},le=Y.attributes;let ve=0;const pe=oe.getAttributes();for(const ne in pe)if(pe[ne].location>=0){let _e=le[ne];_e===void 0&&(ne==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),ne==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor));const Be={};Be.attribute=_e,_e&&_e.data&&(Be.data=_e.data),ae[ne]=Be,ve++}a.attributes=ae,a.attributesNum=ve,a.index=z}function A(){const w=a.newAttributes;for(let Y=0,oe=w.length;Y<oe;Y++)w[Y]=0}function _(w){p(w,0)}function p(w,Y){const oe=a.newAttributes,z=a.enabledAttributes,ae=a.attributeDivisors;oe[w]=1,z[w]===0&&(i.enableVertexAttribArray(w),z[w]=1),ae[w]!==Y&&(i.vertexAttribDivisor(w,Y),ae[w]=Y)}function F(){const w=a.newAttributes,Y=a.enabledAttributes;for(let oe=0,z=Y.length;oe<z;oe++)Y[oe]!==w[oe]&&(i.disableVertexAttribArray(oe),Y[oe]=0)}function C(w,Y,oe,z,ae,le,ve){ve===!0?i.vertexAttribIPointer(w,Y,oe,ae,le):i.vertexAttribPointer(w,Y,oe,z,ae,le)}function O(w,Y,oe,z){A();const ae=z.attributes,le=oe.getAttributes(),ve=Y.defaultAttributeValues;for(const pe in le){const ne=le[pe];if(ne.location>=0){let ge=ae[pe];if(ge===void 0&&(pe==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),pe==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),ge!==void 0){const _e=ge.normalized,Be=ge.itemSize,ct=e.get(ge);if(ct===void 0)continue;const yt=ct.buffer,re=ct.type,xe=ct.bytesPerElement,Pe=re===i.INT||re===i.UNSIGNED_INT||ge.gpuType===kl;if(ge.isInterleavedBufferAttribute){const Ce=ge.data,it=Ce.stride,rt=ge.offset;if(Ce.isInstancedInterleavedBuffer){for(let Ke=0;Ke<ne.locationSize;Ke++)p(ne.location+Ke,Ce.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Ke=0;Ke<ne.locationSize;Ke++)_(ne.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Ke=0;Ke<ne.locationSize;Ke++)C(ne.location+Ke,Be/ne.locationSize,re,_e,it*xe,(rt+Be/ne.locationSize*Ke)*xe,Pe)}else{if(ge.isInstancedBufferAttribute){for(let Ce=0;Ce<ne.locationSize;Ce++)p(ne.location+Ce,ge.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ce=0;Ce<ne.locationSize;Ce++)_(ne.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Ce=0;Ce<ne.locationSize;Ce++)C(ne.location+Ce,Be/ne.locationSize,re,_e,Be*xe,Be/ne.locationSize*Ce*xe,Pe)}}else if(ve!==void 0){const _e=ve[pe];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(ne.location,_e);break;case 3:i.vertexAttrib3fv(ne.location,_e);break;case 4:i.vertexAttrib4fv(ne.location,_e);break;default:i.vertexAttrib1fv(ne.location,_e)}}}}F()}function Z(){te();for(const w in n){const Y=n[w];for(const oe in Y){const z=Y[oe];for(const ae in z)g(z[ae].object),delete z[ae];delete Y[oe]}delete n[w]}}function H(w){if(n[w.id]===void 0)return;const Y=n[w.id];for(const oe in Y){const z=Y[oe];for(const ae in z)g(z[ae].object),delete z[ae];delete Y[oe]}delete n[w.id]}function l(w){for(const Y in n){const oe=n[Y];if(oe[w.id]===void 0)continue;const z=oe[w.id];for(const ae in z)g(z[ae].object),delete z[ae];delete oe[w.id]}}function te(){P(),c=!0,a!==s&&(a=s,m(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:te,resetDefaultState:P,dispose:Z,releaseStatesOfGeometry:H,releaseStatesOfProgram:l,initAttributes:A,enableAttribute:_,disableUnusedAttributes:F}}function up(i,e,t){let n;function s(d){n=d}function a(d,m){i.drawArrays(n,d,m),t.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawArraysInstanced(n,d,m,g),t.update(m,n,g))}function f(d,m,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<g;S++)this.render(d[S],m[S]);else{x.multiDrawArraysWEBGL(n,d,0,m,0,g);let S=0;for(let y=0;y<g;y++)S+=m[y];t.update(S,n,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=f}function fp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=a(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),p=g>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:_,vertexTextures:p,maxSamples:F}}function hp(i){const e=this;let t=null,n=0,s=!1,a=!1;const c=new Li,f=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const y=x.length!==0||S||n!==0||s;return s=S,n=x.length,y},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(x,S){t=g(x,S,0)},this.setState=function(x,S,y){const b=x.clippingPlanes,A=x.clipIntersection,_=x.clipShadows,p=i.get(x);if(!s||b===null||b.length===0||a&&!_)a?g(null):m();else{const F=a?0:n,C=F*4;let O=p.clippingState||null;d.value=O,O=g(b,S,C,y);for(let Z=0;Z!==C;++Z)O[Z]=t[Z];p.clippingState=O,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function m(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(x,S,y,b){const A=x!==null?x.length:0;let _=null;if(A!==0){if(_=d.value,b!==!0||_===null){const p=y+A*4,F=S.matrixWorldInverse;f.getNormalMatrix(F),(_===null||_.length<p)&&(_=new Float32Array(p));for(let C=0,O=y;C!==A;++C,O+=4)c.copy(x[C]).applyMatrix4(F,f),c.normal.toArray(_,O),_[O+3]=c.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}function dp(i){let e=new WeakMap;function t(c,f){return f===Ua?c.mapping=ur:f===Na&&(c.mapping=fr),c}function n(c){if(c&&c.isTexture){const f=c.mapping;if(f===Ua||f===Na)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const m=new Ef(d.height);return m.fromEquirectangularTexture(i,c),e.set(c,m),c.addEventListener("dispose",s),t(m.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class cc extends ac{constructor(e=-1,t=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,c=n+e,f=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=m*this.view.offsetX,c=a+m*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ar=4,al=[.125,.215,.35,.446,.526,.582],Ui=20,ya=new cc,ol=new _t;let Ea=null,Ta=0,ba=0,Aa=!1;const Di=(1+Math.sqrt(5))/2,sr=1/Di,ll=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Di,sr),new W(0,Di,-sr),new W(sr,0,Di),new W(-sr,0,Di),new W(Di,sr,0),new W(-Di,sr,0)];class cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,Ta,ba),this._renderer.xr.enabled=Aa,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ts,format:zn,colorSpace:xi,depthBuffer:!1},s=ul(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pp(a)),this._blurMaterial=mp(a,e,t)}return s}_compileMaterial(e){const t=new wn(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,s){const f=new _n(90,1,t,n),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(ol),g.toneMapping=gi,g.autoClear=!1;const y=new nc({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),b=new wn(new Br,y);let A=!1;const _=e.background;_?_.isColor&&(y.color.copy(_),e.background=null,A=!0):(y.color.copy(ol),A=!0);for(let p=0;p<6;p++){const F=p%3;F===0?(f.up.set(0,d[p],0),f.lookAt(m[p],0,0)):F===1?(f.up.set(0,0,d[p]),f.lookAt(0,m[p],0)):(f.up.set(0,d[p],0),f.lookAt(0,0,m[p]));const C=this._cubeSize;gs(s,F*C,p>2?C:0,C,C),g.setRenderTarget(s),A&&g.render(b,f),g.render(e,f)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ur||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new wn(this._lodPlanes[0],a),f=a.uniforms;f.envMap.value=e;const d=this._cubeSize;gs(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=ll[(s-1)%ll.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",a),this._halfBlur(c,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,c,f){const d=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new wn(this._lodPlanes[s],m),S=m.uniforms,y=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Ui-1),A=a/b,_=isFinite(a)?1+Math.floor(g*A):Ui;_>Ui&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ui}`);const p=[];let F=0;for(let l=0;l<Ui;++l){const te=l/A,P=Math.exp(-te*te/2);p.push(P),l===0?F+=P:l<_&&(F+=2*P)}for(let l=0;l<p.length;l++)p[l]=p[l]/F;S.envMap.value=e.texture,S.samples.value=_,S.weights.value=p,S.latitudinal.value=c==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:C}=this;S.dTheta.value=b,S.mipInt.value=C-n;const O=this._sizeLods[s],Z=3*O*(s>C-ar?s-C+ar:0),H=4*(this._cubeSize-O);gs(t,Z,H,3*O,2*O),d.setRenderTarget(t),d.render(x,ya)}}function pp(i){const e=[],t=[],n=[];let s=i;const a=i-ar+1+al.length;for(let c=0;c<a;c++){const f=Math.pow(2,s);t.push(f);let d=1/f;c>i-ar?d=al[c-i+ar-1]:c===0&&(d=0),n.push(d);const m=1/(f-2),g=-m,x=1+m,S=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,b=6,A=3,_=2,p=1,F=new Float32Array(A*b*y),C=new Float32Array(_*b*y),O=new Float32Array(p*b*y);for(let H=0;H<y;H++){const l=H%3*2/3-1,te=H>2?0:-1,P=[l,te,0,l+2/3,te,0,l+2/3,te+1,0,l,te,0,l+2/3,te+1,0,l,te+1,0];F.set(P,A*b*H),C.set(S,_*b*H);const w=[H,H,H,H,H,H];O.set(w,p*b*H)}const Z=new xn;Z.setAttribute("position",new Hn(F,A)),Z.setAttribute("uv",new Hn(C,_)),Z.setAttribute("faceIndex",new Hn(O,p)),e.push(Z),s>ar&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ul(i,e,t){const n=new Oi(i,e,t);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mp(i,e,t){const n=new Float32Array(Ui),s=new W(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function fl(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function hl(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gp(i){let e=new WeakMap,t=null;function n(f){if(f&&f.isTexture){const d=f.mapping,m=d===Ua||d===Na,g=d===ur||d===fr;if(m||g){let x=e.get(f);const S=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new cl(i)),x=m?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const y=f.image;return m&&y&&y.height>0||g&&y&&s(y)?(t===null&&(t=new cl(i)),x=m?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",a),x.texture):null}}}return f}function s(f){let d=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&d++;return d===m}function a(f){const d=f.target;d.removeEventListener("dispose",a);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function _p(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vp(i,e,t,n){const s={},a=new WeakMap;function c(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const A=S.morphAttributes[b];for(let _=0,p=A.length;_<p;_++)e.remove(A[_])}S.removeEventListener("dispose",c),delete s[S.id];const y=a.get(S);y&&(e.remove(y),a.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(x,S){return s[S.id]===!0||(S.addEventListener("dispose",c),s[S.id]=!0,t.memory.geometries++),S}function d(x){const S=x.attributes;for(const b in S)e.update(S[b],i.ARRAY_BUFFER);const y=x.morphAttributes;for(const b in y){const A=y[b];for(let _=0,p=A.length;_<p;_++)e.update(A[_],i.ARRAY_BUFFER)}}function m(x){const S=[],y=x.index,b=x.attributes.position;let A=0;if(y!==null){const F=y.array;A=y.version;for(let C=0,O=F.length;C<O;C+=3){const Z=F[C+0],H=F[C+1],l=F[C+2];S.push(Z,H,H,l,l,Z)}}else if(b!==void 0){const F=b.array;A=b.version;for(let C=0,O=F.length/3-1;C<O;C+=3){const Z=C+0,H=C+1,l=C+2;S.push(Z,H,H,l,l,Z)}}else return;const _=new(Zl(S)?rc:ic)(S,1);_.version=A;const p=a.get(x);p&&e.remove(p),a.set(x,_)}function g(x){const S=a.get(x);if(S){const y=x.index;y!==null&&S.version<y.version&&m(x)}else m(x);return a.get(x)}return{get:f,update:d,getWireframeAttribute:g}}function xp(i,e,t){let n;function s(x){n=x}let a,c;function f(x){a=x.type,c=x.bytesPerElement}function d(x,S){i.drawElements(n,S,a,x*c),t.update(S,n,1)}function m(x,S,y){y!==0&&(i.drawElementsInstanced(n,S,a,x*c,y),t.update(S,n,y))}function g(x,S,y){if(y===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let A=0;A<y;A++)this.render(x[A]/c,S[A]);else{b.multiDrawElementsWEBGL(n,S,0,a,x,0,y);let A=0;for(let _=0;_<y;_++)A+=S[_];t.update(A,n,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=m,this.renderMultiDraw=g}function Mp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(a/3);break;case i.LINES:t.lines+=f*(a/2);break;case i.LINE_STRIP:t.lines+=f*(a-1);break;case i.LINE_LOOP:t.lines+=f*a;break;case i.POINTS:t.points+=f*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sp(i,e,t){const n=new WeakMap,s=new Xt;function a(c,f,d){const m=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let S=n.get(f);if(S===void 0||S.count!==x){let w=function(){te.dispose(),n.delete(f),f.removeEventListener("dispose",w)};var y=w;S!==void 0&&S.texture.dispose();const b=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,p=f.morphAttributes.position||[],F=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let O=0;b===!0&&(O=1),A===!0&&(O=2),_===!0&&(O=3);let Z=f.attributes.position.count*O,H=1;Z>e.maxTextureSize&&(H=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const l=new Float32Array(Z*H*4*x),te=new Ql(l,Z,H,x);te.type=pi,te.needsUpdate=!0;const P=O*4;for(let Y=0;Y<x;Y++){const oe=p[Y],z=F[Y],ae=C[Y],le=Z*H*4*Y;for(let ve=0;ve<oe.count;ve++){const pe=ve*P;b===!0&&(s.fromBufferAttribute(oe,ve),l[le+pe+0]=s.x,l[le+pe+1]=s.y,l[le+pe+2]=s.z,l[le+pe+3]=0),A===!0&&(s.fromBufferAttribute(z,ve),l[le+pe+4]=s.x,l[le+pe+5]=s.y,l[le+pe+6]=s.z,l[le+pe+7]=0),_===!0&&(s.fromBufferAttribute(ae,ve),l[le+pe+8]=s.x,l[le+pe+9]=s.y,l[le+pe+10]=s.z,l[le+pe+11]=ae.itemSize===4?s.w:1)}}S={count:x,texture:te,size:new ut(Z,H)},n.set(f,S),f.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let b=0;for(let _=0;_<m.length;_++)b+=m[_];const A=f.morphTargetsRelative?1:1-b;d.getUniforms().setValue(i,"morphTargetBaseInfluence",A),d.getUniforms().setValue(i,"morphTargetInfluences",m)}d.getUniforms().setValue(i,"morphTargetsTexture",S.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",S.size)}return{update:a}}function yp(i,e,t,n){let s=new WeakMap;function a(d){const m=n.render.frame,g=d.geometry,x=e.get(d,g);if(s.get(x)!==m&&(e.update(x),s.set(x,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==m&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,m))),d.isSkinnedMesh){const S=d.skeleton;s.get(S)!==m&&(S.update(),s.set(S,m))}return x}function c(){s=new WeakMap}function f(d){const m=d.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:a,dispose:c}}class uc extends nn{constructor(e,t,n,s,a,c,f,d,m,g){if(g=g!==void 0?g:lr,g!==lr&&g!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===lr&&(n=hr),n===void 0&&g===Lr&&(n=Ir),super(null,s,a,c,f,d,g,n,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:vn,this.minFilter=d!==void 0?d:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fc=new nn,hc=new uc(1,1);hc.compareFunction=Kl;const dc=new Ql,pc=new of,mc=new oc,dl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function mr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=dl[s];if(a===void 0&&(a=new Float32Array(s),dl[s]=a),e!==0){n.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(a,f)}return a}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Is(i,e){let t=pl[e];t===void 0&&(t=new Int32Array(e),pl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ep(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Vt(t,n))return;_l.set(n),i.uniformMatrix2fv(this.addr,!1,_l),kt(t,n)}}function Cp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Vt(t,n))return;gl.set(n),i.uniformMatrix3fv(this.addr,!1,gl),kt(t,n)}}function Rp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Vt(t,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),kt(t,n)}}function Pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function Up(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Bp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const a=this.type===i.SAMPLER_2D_SHADOW?hc:fc;t.setTexture2D(e||a,s)}function zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pc,s)}function Hp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||mc,s)}function Vp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dc,s)}function kp(i){switch(i){case 5126:return Ep;case 35664:return Tp;case 35665:return bp;case 35666:return Ap;case 35674:return wp;case 35675:return Cp;case 35676:return Rp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Ip;case 5125:return Up;case 36294:return Np;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Gp(i,e){i.uniform1fv(this.addr,e)}function Wp(i,e){const t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function Xp(i,e){const t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function qp(i,e){const t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function jp(i,e){const t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yp(i,e){const t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $p(i,e){const t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Kp(i,e){i.uniform1iv(this.addr,e)}function Zp(i,e){i.uniform2iv(this.addr,e)}function Jp(i,e){i.uniform3iv(this.addr,e)}function Qp(i,e){i.uniform4iv(this.addr,e)}function em(i,e){i.uniform1uiv(this.addr,e)}function tm(i,e){i.uniform2uiv(this.addr,e)}function nm(i,e){i.uniform3uiv(this.addr,e)}function im(i,e){i.uniform4uiv(this.addr,e)}function rm(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);Vt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||fc,a[c])}function sm(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);Vt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||pc,a[c])}function am(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);Vt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||mc,a[c])}function om(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);Vt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||dc,a[c])}function lm(i){switch(i){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return jp;case 35675:return Yp;case 35676:return $p;case 5124:case 35670:return Kp;case 35667:case 35671:return Zp;case 35668:case 35672:return Jp;case 35669:case 35673:return Qp;case 5125:return em;case 36294:return tm;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}class cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kp(t.type)}}class um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lm(t.type)}}class fm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const f=s[a];f.setValue(e,t[f.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function vl(i,e){i.seq.push(e),i.map[e.id]=e}function hm(i,e,t){const n=i.name,s=n.length;for(wa.lastIndex=0;;){const a=wa.exec(n),c=wa.lastIndex;let f=a[1];const d=a[2]==="]",m=a[3];if(d&&(f=f|0),m===void 0||m==="["&&c+2===s){vl(t,m===void 0?new cm(f,i,e):new um(f,i,e));break}else{let x=t.map[f];x===void 0&&(x=new fm(f),vl(t,x)),t=x}}}class Ss{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);hm(a,c,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,c=t.length;a!==c;++a){const f=t[a],d=n[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function xl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const dm=37297;let pm=0;function mm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const f=c+1;n.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return n.join(`
`)}function gm(i){const e=wt.getPrimaries(wt.workingColorSpace),t=wt.getPrimaries(i);let n;switch(e===t?n="":e===ws&&t===As?n="LinearDisplayP3ToLinearSRGB":e===As&&t===ws&&(n="LinearSRGBToLinearDisplayP3"),i){case xi:case Ls:return[n,"LinearTransferOETF"];case Fn:case Ga:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ml(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+mm(i.getShaderSource(e),c)}else return s}function _m(i,e){const t=gm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vm(i,e){let t;switch(e){case Tu:t="Linear";break;case bu:t="Reinhard";break;case Au:t="OptimizedCineon";break;case wu:t="ACESFilmic";break;case Ru:t="AgX";break;case Pu:t="Neutral";break;case Cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function Mm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),c=a.name;let f=1;a.type===i.FLOAT_MAT2&&(f=2),a.type===i.FLOAT_MAT3&&(f=3),a.type===i.FLOAT_MAT4&&(f=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function Rr(i){return i!==""}function Sl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(ym,Tm)}const Em=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Tm(i,e){let t=ot[e];if(t===void 0){const n=Em.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace(bm,Am)}function Am(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Tl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Cm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ur:case fr:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Pm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ka:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case Eu:e="ENVMAP_BLENDING_ADD";break}return e}function Lm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dm(i,e,t,n){const s=i.getContext(),a=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=wm(t),m=Cm(t),g=Rm(t),x=Pm(t),S=Lm(t),y=xm(t),b=Mm(a),A=s.createProgram();let _,p,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Rr).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(_=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?ot.tonemapping_pars_fragment:"",t.toneMapping!==gi?vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,_m("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),c=za(c),c=Sl(c,t),c=yl(c,t),f=za(f),f=Sl(f,t),f=yl(f,t),c=El(c),f=El(f),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const C=F+_+c,O=F+p+f,Z=xl(s,s.VERTEX_SHADER,C),H=xl(s,s.FRAGMENT_SHADER,O);s.attachShader(A,Z),s.attachShader(A,H),t.index0AttributeName!==void 0?s.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function l(Y){if(i.debug.checkShaderErrors){const oe=s.getProgramInfoLog(A).trim(),z=s.getShaderInfoLog(Z).trim(),ae=s.getShaderInfoLog(H).trim();let le=!0,ve=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,Z,H);else{const pe=Ml(s,Z,"vertex"),ne=Ml(s,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+oe+`
`+pe+`
`+ne)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(z===""||ae==="")&&(ve=!1);ve&&(Y.diagnostics={runnable:le,programLog:oe,vertexShader:{log:z,prefix:_},fragmentShader:{log:ae,prefix:p}})}s.deleteShader(Z),s.deleteShader(H),te=new Ss(s,A),P=Sm(s,A)}let te;this.getUniforms=function(){return te===void 0&&l(this),te};let P;this.getAttributes=function(){return P===void 0&&l(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(A,dm)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pm++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=Z,this.fragmentShader=H,this}let Im=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Nm(e),t.set(e,n)),n}}class Nm{constructor(e){this.id=Im++,this.code=e,this.usedTimes=0}}function Fm(i,e,t,n,s,a,c){const f=new ec,d=new Um,m=new Set,g=[],x=s.logarithmicDepthBuffer,S=s.vertexTextures;let y=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return m.add(P),P===0?"uv":`uv${P}`}function _(P,w,Y,oe,z){const ae=oe.fog,le=z.geometry,ve=P.isMeshStandardMaterial?oe.environment:null,pe=(P.isMeshStandardMaterial?t:e).get(P.envMap||ve),ne=pe&&pe.mapping===Ps?pe.image.height:null,ge=b[P.type];P.precision!==null&&(y=s.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const _e=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Be=_e!==void 0?_e.length:0;let ct=0;le.morphAttributes.position!==void 0&&(ct=1),le.morphAttributes.normal!==void 0&&(ct=2),le.morphAttributes.color!==void 0&&(ct=3);let yt,re,xe,Pe;if(ge){const St=On[ge];yt=St.vertexShader,re=St.fragmentShader}else yt=P.vertexShader,re=P.fragmentShader,d.update(P),xe=d.getVertexShaderID(P),Pe=d.getFragmentShaderID(P);const Ce=i.getRenderTarget(),it=z.isInstancedMesh===!0,rt=z.isBatchedMesh===!0,Ke=!!P.map,q=!!P.matcap,et=!!pe,Ge=!!P.aoMap,Ft=!!P.lightMap,je=!!P.bumpMap,Mt=!!P.normalMap,I=!!P.displacementMap,T=!!P.emissiveMap,ee=!!P.metalnessMap,ue=!!P.roughnessMap,he=P.anisotropy>0,fe=P.clearcoat>0,He=P.iridescence>0,me=P.sheen>0,ce=P.transmission>0,Le=he&&!!P.anisotropyMap,Ee=fe&&!!P.clearcoatMap,Re=fe&&!!P.clearcoatNormalMap,Ze=fe&&!!P.clearcoatRoughnessMap,De=He&&!!P.iridescenceMap,Ne=He&&!!P.iridescenceThicknessMap,st=me&&!!P.sheenColorMap,tt=me&&!!P.sheenRoughnessMap,ft=!!P.specularMap,ht=!!P.specularColorMap,Rt=!!P.specularIntensityMap,Fe=ce&&!!P.transmissionMap,U=ce&&!!P.thicknessMap,ye=!!P.gradientMap,Se=!!P.alphaMap,Ie=P.alphaTest>0,ze=!!P.alphaHash,Et=!!P.extensions;let Ct=gi;P.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const mt={shaderID:ge,shaderType:P.type,shaderName:P.name,vertexShader:yt,fragmentShader:re,defines:P.defines,customVertexShaderID:xe,customFragmentShaderID:Pe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:rt,instancing:it,instancingColor:it&&z.instanceColor!==null,instancingMorph:it&&z.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ce===null?i.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:xi,alphaToCoverage:!!P.alphaToCoverage,map:Ke,matcap:q,envMap:et,envMapMode:et&&pe.mapping,envMapCubeUVHeight:ne,aoMap:Ge,lightMap:Ft,bumpMap:je,normalMap:Mt,displacementMap:S&&I,emissiveMap:T,normalMapObjectSpace:Mt&&P.normalMapType===Wu,normalMapTangentSpace:Mt&&P.normalMapType===$l,metalnessMap:ee,roughnessMap:ue,anisotropy:he,anisotropyMap:Le,clearcoat:fe,clearcoatMap:Ee,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ze,iridescence:He,iridescenceMap:De,iridescenceThicknessMap:Ne,sheen:me,sheenColorMap:st,sheenRoughnessMap:tt,specularMap:ft,specularColorMap:ht,specularIntensityMap:Rt,transmission:ce,transmissionMap:Fe,thicknessMap:U,gradientMap:ye,opaque:P.transparent===!1&&P.blending===or&&P.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ie,alphaHash:ze,combine:P.combine,mapUv:Ke&&A(P.map.channel),aoMapUv:Ge&&A(P.aoMap.channel),lightMapUv:Ft&&A(P.lightMap.channel),bumpMapUv:je&&A(P.bumpMap.channel),normalMapUv:Mt&&A(P.normalMap.channel),displacementMapUv:I&&A(P.displacementMap.channel),emissiveMapUv:T&&A(P.emissiveMap.channel),metalnessMapUv:ee&&A(P.metalnessMap.channel),roughnessMapUv:ue&&A(P.roughnessMap.channel),anisotropyMapUv:Le&&A(P.anisotropyMap.channel),clearcoatMapUv:Ee&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:Re&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:st&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:tt&&A(P.sheenRoughnessMap.channel),specularMapUv:ft&&A(P.specularMap.channel),specularColorMapUv:ht&&A(P.specularColorMap.channel),specularIntensityMapUv:Rt&&A(P.specularIntensityMap.channel),transmissionMapUv:Fe&&A(P.transmissionMap.channel),thicknessMapUv:U&&A(P.thicknessMap.channel),alphaMapUv:Se&&A(P.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Mt||he),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!le.attributes.uv&&(Ke||Se),fog:!!ae,useFog:P.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:z.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:ct,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ke&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Qn,flipSided:P.side===ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Et&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Et&&P.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return mt.vertexUv1s=m.has(1),mt.vertexUv2s=m.has(2),mt.vertexUv3s=m.has(3),m.clear(),mt}function p(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const Y in P.defines)w.push(Y),w.push(P.defines[Y]);return P.isRawShaderMaterial===!1&&(F(w,P),C(w,P),w.push(i.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function F(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function C(P,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),P.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.skinning&&f.enable(4),w.morphTargets&&f.enable(5),w.morphNormals&&f.enable(6),w.morphColors&&f.enable(7),w.premultipliedAlpha&&f.enable(8),w.shadowMapEnabled&&f.enable(9),w.useLegacyLights&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.alphaToCoverage&&f.enable(20),P.push(f.mask)}function O(P){const w=b[P.type];let Y;if(w){const oe=On[w];Y=xf.clone(oe.uniforms)}else Y=P.uniforms;return Y}function Z(P,w){let Y;for(let oe=0,z=g.length;oe<z;oe++){const ae=g[oe];if(ae.cacheKey===w){Y=ae,++Y.usedTimes;break}}return Y===void 0&&(Y=new Dm(i,w,P,a),g.push(Y)),Y}function H(P){if(--P.usedTimes===0){const w=g.indexOf(P);g[w]=g[g.length-1],g.pop(),P.destroy()}}function l(P){d.remove(P)}function te(){d.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:O,acquireProgram:Z,releaseProgram:H,releaseShaderCache:l,programs:g,dispose:te}}function Om(){let i=new WeakMap;function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function t(a){i.delete(a)}function n(a,c,f){i.get(a)[c]=f}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Bm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Al(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function c(x,S,y,b,A,_){let p=i[e];return p===void 0?(p={id:x.id,object:x,geometry:S,material:y,groupOrder:b,renderOrder:x.renderOrder,z:A,group:_},i[e]=p):(p.id=x.id,p.object=x,p.geometry=S,p.material=y,p.groupOrder=b,p.renderOrder=x.renderOrder,p.z=A,p.group=_),e++,p}function f(x,S,y,b,A,_){const p=c(x,S,y,b,A,_);y.transmission>0?n.push(p):y.transparent===!0?s.push(p):t.push(p)}function d(x,S,y,b,A,_){const p=c(x,S,y,b,A,_);y.transmission>0?n.unshift(p):y.transparent===!0?s.unshift(p):t.unshift(p)}function m(x,S){t.length>1&&t.sort(x||Bm),n.length>1&&n.sort(S||bl),s.length>1&&s.sort(S||bl)}function g(){for(let x=e,S=i.length;x<S;x++){const y=i[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:f,unshift:d,finish:g,sort:m}}function zm(){let i=new WeakMap;function e(n,s){const a=i.get(n);let c;return a===void 0?(c=new Al,i.set(n,[c])):s>=a.length?(c=new Al,a.push(c)):c=a[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new _t};break;case"SpotLight":t={position:new W,direction:new W,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Vm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let km=0;function Gm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Wm(i){const e=new Hm,t=Vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)n.probe.push(new W);const s=new W,a=new Nt,c=new Nt;function f(m,g){let x=0,S=0,y=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let b=0,A=0,_=0,p=0,F=0,C=0,O=0,Z=0,H=0,l=0,te=0;m.sort(Gm);const P=g===!0?Math.PI:1;for(let Y=0,oe=m.length;Y<oe;Y++){const z=m[Y],ae=z.color,le=z.intensity,ve=z.distance,pe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)x+=ae.r*le*P,S+=ae.g*le*P,y+=ae.b*le*P;else if(z.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(z.sh.coefficients[ne],le);te++}else if(z.isDirectionalLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity*P),z.castShadow){const ge=z.shadow,_e=t.get(z);_e.shadowBias=ge.bias,_e.shadowNormalBias=ge.normalBias,_e.shadowRadius=ge.radius,_e.shadowMapSize=ge.mapSize,n.directionalShadow[b]=_e,n.directionalShadowMap[b]=pe,n.directionalShadowMatrix[b]=z.shadow.matrix,C++}n.directional[b]=ne,b++}else if(z.isSpotLight){const ne=e.get(z);ne.position.setFromMatrixPosition(z.matrixWorld),ne.color.copy(ae).multiplyScalar(le*P),ne.distance=ve,ne.coneCos=Math.cos(z.angle),ne.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ne.decay=z.decay,n.spot[_]=ne;const ge=z.shadow;if(z.map&&(n.spotLightMap[H]=z.map,H++,ge.updateMatrices(z),z.castShadow&&l++),n.spotLightMatrix[_]=ge.matrix,z.castShadow){const _e=t.get(z);_e.shadowBias=ge.bias,_e.shadowNormalBias=ge.normalBias,_e.shadowRadius=ge.radius,_e.shadowMapSize=ge.mapSize,n.spotShadow[_]=_e,n.spotShadowMap[_]=pe,Z++}_++}else if(z.isRectAreaLight){const ne=e.get(z);ne.color.copy(ae).multiplyScalar(le),ne.halfWidth.set(z.width*.5,0,0),ne.halfHeight.set(0,z.height*.5,0),n.rectArea[p]=ne,p++}else if(z.isPointLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity*P),ne.distance=z.distance,ne.decay=z.decay,z.castShadow){const ge=z.shadow,_e=t.get(z);_e.shadowBias=ge.bias,_e.shadowNormalBias=ge.normalBias,_e.shadowRadius=ge.radius,_e.shadowMapSize=ge.mapSize,_e.shadowCameraNear=ge.camera.near,_e.shadowCameraFar=ge.camera.far,n.pointShadow[A]=_e,n.pointShadowMap[A]=pe,n.pointShadowMatrix[A]=z.shadow.matrix,O++}n.point[A]=ne,A++}else if(z.isHemisphereLight){const ne=e.get(z);ne.skyColor.copy(z.color).multiplyScalar(le*P),ne.groundColor.copy(z.groundColor).multiplyScalar(le*P),n.hemi[F]=ne,F++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=x,n.ambient[1]=S,n.ambient[2]=y;const w=n.hash;(w.directionalLength!==b||w.pointLength!==A||w.spotLength!==_||w.rectAreaLength!==p||w.hemiLength!==F||w.numDirectionalShadows!==C||w.numPointShadows!==O||w.numSpotShadows!==Z||w.numSpotMaps!==H||w.numLightProbes!==te)&&(n.directional.length=b,n.spot.length=_,n.rectArea.length=p,n.point.length=A,n.hemi.length=F,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=O,n.pointShadowMap.length=O,n.spotShadow.length=Z,n.spotShadowMap.length=Z,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=O,n.spotLightMatrix.length=Z+H-l,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=l,n.numLightProbes=te,w.directionalLength=b,w.pointLength=A,w.spotLength=_,w.rectAreaLength=p,w.hemiLength=F,w.numDirectionalShadows=C,w.numPointShadows=O,w.numSpotShadows=Z,w.numSpotMaps=H,w.numLightProbes=te,n.version=km++)}function d(m,g){let x=0,S=0,y=0,b=0,A=0;const _=g.matrixWorldInverse;for(let p=0,F=m.length;p<F;p++){const C=m[p];if(C.isDirectionalLight){const O=n.directional[x];O.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(_),x++}else if(C.isSpotLight){const O=n.spot[y];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(_),O.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(_),y++}else if(C.isRectAreaLight){const O=n.rectArea[b];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(_),c.identity(),a.copy(C.matrixWorld),a.premultiply(_),c.extractRotation(a),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),O.halfWidth.applyMatrix4(c),O.halfHeight.applyMatrix4(c),b++}else if(C.isPointLight){const O=n.point[S];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(_),S++}else if(C.isHemisphereLight){const O=n.hemi[A];O.direction.setFromMatrixPosition(C.matrixWorld),O.direction.transformDirection(_),A++}}}return{setup:f,setupView:d,state:n}}function wl(i){const e=new Wm(i),t=[],n=[];function s(){t.length=0,n.length=0}function a(g){t.push(g)}function c(g){n.push(g)}function f(g){e.setup(t,g)}function d(g){e.setupView(t,g)}return{init:s,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:f,setupLightsView:d,pushLight:a,pushShadow:c}}function Xm(i){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let f;return c===void 0?(f=new wl(i),e.set(s,[f])):a>=c.length?(f=new wl(i),c.push(f)):f=c[a],f}function n(){e=new WeakMap}return{get:t,dispose:n}}class qm extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jm extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Km(i,e,t){let n=new Xa;const s=new ut,a=new ut,c=new Xt,f=new qm({depthPacking:Gu}),d=new jm,m={},g=t.maxTextureSize,x={[vi]:ln,[ln]:vi,[Qn]:Qn},S=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Ym,fragmentShader:$m}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new xn;b.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new wn(b,S),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let p=this.type;this.render=function(H,l,te){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||H.length===0)return;const P=i.getRenderTarget(),w=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),oe=i.state;oe.setBlending(mi),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const z=p!==Jn&&this.type===Jn,ae=p===Jn&&this.type!==Jn;for(let le=0,ve=H.length;le<ve;le++){const pe=H[le],ne=pe.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);const ge=ne.getFrameExtents();if(s.multiply(ge),a.copy(ne.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/ge.x),s.x=a.x*ge.x,ne.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/ge.y),s.y=a.y*ge.y,ne.mapSize.y=a.y)),ne.map===null||z===!0||ae===!0){const Be=this.type!==Jn?{minFilter:vn,magFilter:vn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new Oi(s.x,s.y,Be),ne.map.texture.name=pe.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const _e=ne.getViewportCount();for(let Be=0;Be<_e;Be++){const ct=ne.getViewport(Be);c.set(a.x*ct.x,a.y*ct.y,a.x*ct.z,a.y*ct.w),oe.viewport(c),ne.updateMatrices(pe,Be),n=ne.getFrustum(),O(l,te,ne.camera,pe,this.type)}ne.isPointLightShadow!==!0&&this.type===Jn&&F(ne,te),ne.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(P,w,Y)};function F(H,l){const te=e.update(A);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Oi(s.x,s.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,i.setRenderTarget(H.mapPass),i.clear(),i.renderBufferDirect(l,null,te,S,A,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,i.setRenderTarget(H.map),i.clear(),i.renderBufferDirect(l,null,te,y,A,null)}function C(H,l,te,P){let w=null;const Y=te.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(Y!==void 0)w=Y;else if(w=te.isPointLight===!0?d:f,i.localClippingEnabled&&l.clipShadows===!0&&Array.isArray(l.clippingPlanes)&&l.clippingPlanes.length!==0||l.displacementMap&&l.displacementScale!==0||l.alphaMap&&l.alphaTest>0||l.map&&l.alphaTest>0){const oe=w.uuid,z=l.uuid;let ae=m[oe];ae===void 0&&(ae={},m[oe]=ae);let le=ae[z];le===void 0&&(le=w.clone(),ae[z]=le,l.addEventListener("dispose",Z)),w=le}if(w.visible=l.visible,w.wireframe=l.wireframe,P===Jn?w.side=l.shadowSide!==null?l.shadowSide:l.side:w.side=l.shadowSide!==null?l.shadowSide:x[l.side],w.alphaMap=l.alphaMap,w.alphaTest=l.alphaTest,w.map=l.map,w.clipShadows=l.clipShadows,w.clippingPlanes=l.clippingPlanes,w.clipIntersection=l.clipIntersection,w.displacementMap=l.displacementMap,w.displacementScale=l.displacementScale,w.displacementBias=l.displacementBias,w.wireframeLinewidth=l.wireframeLinewidth,w.linewidth=l.linewidth,te.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const oe=i.properties.get(w);oe.light=te}return w}function O(H,l,te,P,w){if(H.visible===!1)return;if(H.layers.test(l.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Jn)&&(!H.frustumCulled||n.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,H.matrixWorld);const z=e.update(H),ae=H.material;if(Array.isArray(ae)){const le=z.groups;for(let ve=0,pe=le.length;ve<pe;ve++){const ne=le[ve],ge=ae[ne.materialIndex];if(ge&&ge.visible){const _e=C(H,ge,P,w);H.onBeforeShadow(i,H,l,te,z,_e,ne),i.renderBufferDirect(te,null,z,_e,H,ne),H.onAfterShadow(i,H,l,te,z,_e,ne)}}}else if(ae.visible){const le=C(H,ae,P,w);H.onBeforeShadow(i,H,l,te,z,le,null),i.renderBufferDirect(te,null,z,le,H,null),H.onAfterShadow(i,H,l,te,z,le,null)}}const oe=H.children;for(let z=0,ae=oe.length;z<ae;z++)O(oe[z],l,te,P,w)}function Z(H){H.target.removeEventListener("dispose",Z);for(const te in m){const P=m[te],w=H.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}function Zm(i){function e(){let U=!1;const ye=new Xt;let Se=null;const Ie=new Xt(0,0,0,0);return{setMask:function(ze){Se!==ze&&!U&&(i.colorMask(ze,ze,ze,ze),Se=ze)},setLocked:function(ze){U=ze},setClear:function(ze,Et,Ct,mt,St){St===!0&&(ze*=mt,Et*=mt,Ct*=mt),ye.set(ze,Et,Ct,mt),Ie.equals(ye)===!1&&(i.clearColor(ze,Et,Ct,mt),Ie.copy(ye))},reset:function(){U=!1,Se=null,Ie.set(-1,0,0,0)}}}function t(){let U=!1,ye=null,Se=null,Ie=null;return{setTest:function(ze){ze?Pe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(ze){ye!==ze&&!U&&(i.depthMask(ze),ye=ze)},setFunc:function(ze){if(Se!==ze){switch(ze){case mu:i.depthFunc(i.NEVER);break;case gu:i.depthFunc(i.ALWAYS);break;case _u:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case vu:i.depthFunc(i.EQUAL);break;case xu:i.depthFunc(i.GEQUAL);break;case Mu:i.depthFunc(i.GREATER);break;case Su:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=ze}},setLocked:function(ze){U=ze},setClear:function(ze){Ie!==ze&&(i.clearDepth(ze),Ie=ze)},reset:function(){U=!1,ye=null,Se=null,Ie=null}}}function n(){let U=!1,ye=null,Se=null,Ie=null,ze=null,Et=null,Ct=null,mt=null,St=null;return{setTest:function(Tt){U||(Tt?Pe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(Tt){ye!==Tt&&!U&&(i.stencilMask(Tt),ye=Tt)},setFunc:function(Tt,hn,cn){(Se!==Tt||Ie!==hn||ze!==cn)&&(i.stencilFunc(Tt,hn,cn),Se=Tt,Ie=hn,ze=cn)},setOp:function(Tt,hn,cn){(Et!==Tt||Ct!==hn||mt!==cn)&&(i.stencilOp(Tt,hn,cn),Et=Tt,Ct=hn,mt=cn)},setLocked:function(Tt){U=Tt},setClear:function(Tt){St!==Tt&&(i.clearStencil(Tt),St=Tt)},reset:function(){U=!1,ye=null,Se=null,Ie=null,ze=null,Et=null,Ct=null,mt=null,St=null}}}const s=new e,a=new t,c=new n,f=new WeakMap,d=new WeakMap;let m={},g={},x=new WeakMap,S=[],y=null,b=!1,A=null,_=null,p=null,F=null,C=null,O=null,Z=null,H=new _t(0,0,0),l=0,te=!1,P=null,w=null,Y=null,oe=null,z=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ve=0;const pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(pe)[1]),le=ve>=1):pe.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),le=ve>=2);let ne=null,ge={};const _e=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),ct=new Xt().fromArray(_e),yt=new Xt().fromArray(Be);function re(U,ye,Se,Ie){const ze=new Uint8Array(4),Et=i.createTexture();i.bindTexture(U,Et),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<Se;Ct++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(ye+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return Et}const xe={};xe[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),c.setClear(0),Pe(i.DEPTH_TEST),a.setFunc(Es),je(!1),Mt(lo),Pe(i.CULL_FACE),Ge(mi);function Pe(U){m[U]!==!0&&(i.enable(U),m[U]=!0)}function Ce(U){m[U]!==!1&&(i.disable(U),m[U]=!1)}function it(U,ye){return g[U]!==ye?(i.bindFramebuffer(U,ye),g[U]=ye,U===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=ye),U===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function rt(U,ye){let Se=S,Ie=!1;if(U){Se=x.get(ye),Se===void 0&&(Se=[],x.set(ye,Se));const ze=U.textures;if(Se.length!==ze.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Ct=ze.length;Et<Ct;Et++)Se[Et]=i.COLOR_ATTACHMENT0+Et;Se.length=ze.length,Ie=!0}}else Se[0]!==i.BACK&&(Se[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(Se)}function Ke(U){return y!==U?(i.useProgram(U),y=U,!0):!1}const q={[Ii]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[Qc]:i.FUNC_REVERSE_SUBTRACT};q[eu]=i.MIN,q[tu]=i.MAX;const et={[nu]:i.ZERO,[iu]:i.ONE,[ru]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[uu]:i.SRC_ALPHA_SATURATE,[lu]:i.DST_COLOR,[au]:i.DST_ALPHA,[su]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[cu]:i.ONE_MINUS_DST_COLOR,[ou]:i.ONE_MINUS_DST_ALPHA,[fu]:i.CONSTANT_COLOR,[hu]:i.ONE_MINUS_CONSTANT_COLOR,[du]:i.CONSTANT_ALPHA,[pu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(U,ye,Se,Ie,ze,Et,Ct,mt,St,Tt){if(U===mi){b===!0&&(Ce(i.BLEND),b=!1);return}if(b===!1&&(Pe(i.BLEND),b=!0),U!==Zc){if(U!==A||Tt!==te){if((_!==Ii||C!==Ii)&&(i.blendEquation(i.FUNC_ADD),_=Ii,C=Ii),Tt)switch(U){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.ONE,i.ONE);break;case uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,F=null,O=null,Z=null,H.set(0,0,0),l=0,A=U,te=Tt}return}ze=ze||ye,Et=Et||Se,Ct=Ct||Ie,(ye!==_||ze!==C)&&(i.blendEquationSeparate(q[ye],q[ze]),_=ye,C=ze),(Se!==p||Ie!==F||Et!==O||Ct!==Z)&&(i.blendFuncSeparate(et[Se],et[Ie],et[Et],et[Ct]),p=Se,F=Ie,O=Et,Z=Ct),(mt.equals(H)===!1||St!==l)&&(i.blendColor(mt.r,mt.g,mt.b,St),H.copy(mt),l=St),A=U,te=!1}function Ft(U,ye){U.side===Qn?Ce(i.CULL_FACE):Pe(i.CULL_FACE);let Se=U.side===ln;ye&&(Se=!Se),je(Se),U.blending===or&&U.transparent===!1?Ge(mi):Ge(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Ie=U.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),T(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(U){P!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),P=U)}function Mt(U){U!==Yc?(Pe(i.CULL_FACE),U!==w&&(U===lo?i.cullFace(i.BACK):U===$c?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),w=U}function I(U){U!==Y&&(le&&i.lineWidth(U),Y=U)}function T(U,ye,Se){U?(Pe(i.POLYGON_OFFSET_FILL),(oe!==ye||z!==Se)&&(i.polygonOffset(ye,Se),oe=ye,z=Se)):Ce(i.POLYGON_OFFSET_FILL)}function ee(U){U?Pe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function ue(U){U===void 0&&(U=i.TEXTURE0+ae-1),ne!==U&&(i.activeTexture(U),ne=U)}function he(U,ye,Se){Se===void 0&&(ne===null?Se=i.TEXTURE0+ae-1:Se=ne);let Ie=ge[Se];Ie===void 0&&(Ie={type:void 0,texture:void 0},ge[Se]=Ie),(Ie.type!==U||Ie.texture!==ye)&&(ne!==Se&&(i.activeTexture(Se),ne=Se),i.bindTexture(U,ye||xe[U]),Ie.type=U,Ie.texture=ye)}function fe(){const U=ge[ne];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function He(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(U){ct.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ct.copy(U))}function ft(U){yt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),yt.copy(U))}function ht(U,ye){let Se=d.get(ye);Se===void 0&&(Se=new WeakMap,d.set(ye,Se));let Ie=Se.get(U);Ie===void 0&&(Ie=i.getUniformBlockIndex(ye,U.name),Se.set(U,Ie))}function Rt(U,ye){const Ie=d.get(ye).get(U);f.get(ye)!==Ie&&(i.uniformBlockBinding(ye,Ie,U.__bindingPointIndex),f.set(ye,Ie))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ne=null,ge={},g={},x=new WeakMap,S=[],y=null,b=!1,A=null,_=null,p=null,F=null,C=null,O=null,Z=null,H=new _t(0,0,0),l=0,te=!1,P=null,w=null,Y=null,oe=null,z=null,ct.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),c.reset()}return{buffers:{color:s,depth:a,stencil:c},enable:Pe,disable:Ce,bindFramebuffer:it,drawBuffers:rt,useProgram:Ke,setBlending:Ge,setMaterial:Ft,setFlipSided:je,setCullFace:Mt,setLineWidth:I,setPolygonOffset:T,setScissorTest:ee,activeTexture:ue,bindTexture:he,unbindTexture:fe,compressedTexImage2D:He,compressedTexImage3D:me,texImage2D:Ne,texImage3D:st,updateUBOMapping:ht,uniformBlockBinding:Rt,texStorage2D:Ze,texStorage3D:De,texSubImage2D:ce,texSubImage3D:Le,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Re,scissor:tt,viewport:ft,reset:Fe}}function Jm(i,e,t,n,s,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ut,g=new WeakMap;let x;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,T){return y?new OffscreenCanvas(I,T):Dr("canvas")}function A(I,T,ee){let ue=1;const he=Mt(I);if((he.width>ee||he.height>ee)&&(ue=ee/Math.max(he.width,he.height)),ue<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const fe=Math.floor(ue*he.width),He=Math.floor(ue*he.height);x===void 0&&(x=b(fe,He));const me=T?b(fe,He):x;return me.width=fe,me.height=He,me.getContext("2d").drawImage(I,0,0,fe,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+fe+"x"+He+")."),me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),I;return I}function _(I){return I.generateMipmaps&&I.minFilter!==vn&&I.minFilter!==An}function p(I){i.generateMipmap(I)}function F(I,T,ee,ue,he=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=T;if(T===i.RED&&(ee===i.FLOAT&&(fe=i.R32F),ee===i.HALF_FLOAT&&(fe=i.R16F),ee===i.UNSIGNED_BYTE&&(fe=i.R8)),T===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(fe=i.R8UI),ee===i.UNSIGNED_SHORT&&(fe=i.R16UI),ee===i.UNSIGNED_INT&&(fe=i.R32UI),ee===i.BYTE&&(fe=i.R8I),ee===i.SHORT&&(fe=i.R16I),ee===i.INT&&(fe=i.R32I)),T===i.RG&&(ee===i.FLOAT&&(fe=i.RG32F),ee===i.HALF_FLOAT&&(fe=i.RG16F),ee===i.UNSIGNED_BYTE&&(fe=i.RG8)),T===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(fe=i.RG8UI),ee===i.UNSIGNED_SHORT&&(fe=i.RG16UI),ee===i.UNSIGNED_INT&&(fe=i.RG32UI),ee===i.BYTE&&(fe=i.RG8I),ee===i.SHORT&&(fe=i.RG16I),ee===i.INT&&(fe=i.RG32I)),T===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),T===i.RGBA){const He=he?bs:wt.getTransfer(ue);ee===i.FLOAT&&(fe=i.RGBA32F),ee===i.HALF_FLOAT&&(fe=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(fe=He===Dt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(I,T){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==An?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function O(I){const T=I.target;T.removeEventListener("dispose",O),H(T),T.isVideoTexture&&g.delete(T)}function Z(I){const T=I.target;T.removeEventListener("dispose",Z),te(T)}function H(I){const T=n.get(I);if(T.__webglInit===void 0)return;const ee=I.source,ue=S.get(ee);if(ue){const he=ue[T.__cacheKey];he.usedTimes--,he.usedTimes===0&&l(I),Object.keys(ue).length===0&&S.delete(ee)}n.remove(I)}function l(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const ee=I.source,ue=S.get(ee);delete ue[T.__cacheKey],c.memory.textures--}function te(I){const T=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(T.__webglFramebuffer[ue]))for(let he=0;he<T.__webglFramebuffer[ue].length;he++)i.deleteFramebuffer(T.__webglFramebuffer[ue][he]);else i.deleteFramebuffer(T.__webglFramebuffer[ue]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ue])}else{if(Array.isArray(T.__webglFramebuffer))for(let ue=0;ue<T.__webglFramebuffer.length;ue++)i.deleteFramebuffer(T.__webglFramebuffer[ue]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ue=0;ue<T.__webglColorRenderbuffer.length;ue++)T.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ue]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=I.textures;for(let ue=0,he=ee.length;ue<he;ue++){const fe=n.get(ee[ue]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),c.memory.textures--),n.remove(ee[ue])}n.remove(I)}let P=0;function w(){P=0}function Y(){const I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function oe(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function z(I,T){const ee=n.get(I);if(I.isVideoTexture&&Ft(I),I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){const ue=I.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(ee,I,T);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+T)}function ae(I,T){const ee=n.get(I);if(I.version>0&&ee.__version!==I.version){ct(ee,I,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+T)}function le(I,T){const ee=n.get(I);if(I.version>0&&ee.__version!==I.version){ct(ee,I,T);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+T)}function ve(I,T){const ee=n.get(I);if(I.version>0&&ee.__version!==I.version){yt(ee,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+T)}const pe={[Fa]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Oa]:i.MIRRORED_REPEAT},ne={[vn]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Ks]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},ge={[Xu]:i.NEVER,[Zu]:i.ALWAYS,[qu]:i.LESS,[Kl]:i.LEQUAL,[ju]:i.EQUAL,[Ku]:i.GEQUAL,[Yu]:i.GREATER,[$u]:i.NOTEQUAL};function _e(I,T){if(T.type===pi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===An||T.magFilter===Ks||T.magFilter===$r||T.magFilter===Fi||T.minFilter===An||T.minFilter===Ks||T.minFilter===$r||T.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,pe[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,pe[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,pe[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ne[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ne[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vn||T.minFilter!==$r&&T.minFilter!==Fi||T.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Be(I,T){let ee=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",O));const ue=T.source;let he=S.get(ue);he===void 0&&(he={},S.set(ue,he));const fe=oe(T);if(fe!==I.__cacheKey){he[fe]===void 0&&(he[fe]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),he[fe].usedTimes++;const He=he[I.__cacheKey];He!==void 0&&(he[I.__cacheKey].usedTimes--,He.usedTimes===0&&l(T)),I.__cacheKey=fe,I.__webglTexture=he[fe].texture}return ee}function ct(I,T,ee){let ue=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=i.TEXTURE_3D);const he=Be(I,T),fe=T.source;t.bindTexture(ue,I.__webglTexture,i.TEXTURE0+ee);const He=n.get(fe);if(fe.version!==He.__version||he===!0){t.activeTexture(i.TEXTURE0+ee);const me=wt.getPrimaries(wt.workingColorSpace),ce=T.colorSpace===di?null:wt.getPrimaries(T.colorSpace),Le=T.colorSpace===di||me===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Ee=A(T.image,!1,s.maxTextureSize);Ee=je(T,Ee);const Re=a.convert(T.format,T.colorSpace),Ze=a.convert(T.type);let De=F(T.internalFormat,Re,Ze,T.colorSpace,T.isVideoTexture);_e(ue,T);let Ne;const st=T.mipmaps,tt=T.isVideoTexture!==!0&&De!==Yl,ft=He.__version===void 0||he===!0,ht=fe.dataReady,Rt=C(T,Ee);if(T.isDepthTexture)De=i.DEPTH_COMPONENT16,T.type===pi?De=i.DEPTH_COMPONENT32F:T.type===hr?De=i.DEPTH_COMPONENT24:T.type===Ir&&(De=i.DEPTH24_STENCIL8),ft&&(tt?t.texStorage2D(i.TEXTURE_2D,1,De,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,De,Ee.width,Ee.height,0,Re,Ze,null));else if(T.isDataTexture)if(st.length>0){tt&&ft&&t.texStorage2D(i.TEXTURE_2D,Rt,De,st[0].width,st[0].height);for(let Fe=0,U=st.length;Fe<U;Fe++)Ne=st[Fe],tt?ht&&t.texSubImage2D(i.TEXTURE_2D,Fe,0,0,Ne.width,Ne.height,Re,Ze,Ne.data):t.texImage2D(i.TEXTURE_2D,Fe,De,Ne.width,Ne.height,0,Re,Ze,Ne.data);T.generateMipmaps=!1}else tt?(ft&&t.texStorage2D(i.TEXTURE_2D,Rt,De,Ee.width,Ee.height),ht&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Re,Ze,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,De,Ee.width,Ee.height,0,Re,Ze,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){tt&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,De,st[0].width,st[0].height,Ee.depth);for(let Fe=0,U=st.length;Fe<U;Fe++)Ne=st[Fe],T.format!==zn?Re!==null?tt?ht&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Fe,0,0,0,Ne.width,Ne.height,Ee.depth,Re,Ne.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Fe,De,Ne.width,Ne.height,Ee.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?ht&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Fe,0,0,0,Ne.width,Ne.height,Ee.depth,Re,Ze,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Fe,De,Ne.width,Ne.height,Ee.depth,0,Re,Ze,Ne.data)}else{tt&&ft&&t.texStorage2D(i.TEXTURE_2D,Rt,De,st[0].width,st[0].height);for(let Fe=0,U=st.length;Fe<U;Fe++)Ne=st[Fe],T.format!==zn?Re!==null?tt?ht&&t.compressedTexSubImage2D(i.TEXTURE_2D,Fe,0,0,Ne.width,Ne.height,Re,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,Fe,De,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?ht&&t.texSubImage2D(i.TEXTURE_2D,Fe,0,0,Ne.width,Ne.height,Re,Ze,Ne.data):t.texImage2D(i.TEXTURE_2D,Fe,De,Ne.width,Ne.height,0,Re,Ze,Ne.data)}else if(T.isDataArrayTexture)tt?(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,De,Ee.width,Ee.height,Ee.depth),ht&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,Ze,Ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,Ee.width,Ee.height,Ee.depth,0,Re,Ze,Ee.data);else if(T.isData3DTexture)tt?(ft&&t.texStorage3D(i.TEXTURE_3D,Rt,De,Ee.width,Ee.height,Ee.depth),ht&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,Ze,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,De,Ee.width,Ee.height,Ee.depth,0,Re,Ze,Ee.data);else if(T.isFramebufferTexture){if(ft)if(tt)t.texStorage2D(i.TEXTURE_2D,Rt,De,Ee.width,Ee.height);else{let Fe=Ee.width,U=Ee.height;for(let ye=0;ye<Rt;ye++)t.texImage2D(i.TEXTURE_2D,ye,De,Fe,U,0,Re,Ze,null),Fe>>=1,U>>=1}}else if(st.length>0){if(tt&&ft){const Fe=Mt(st[0]);t.texStorage2D(i.TEXTURE_2D,Rt,De,Fe.width,Fe.height)}for(let Fe=0,U=st.length;Fe<U;Fe++)Ne=st[Fe],tt?ht&&t.texSubImage2D(i.TEXTURE_2D,Fe,0,0,Re,Ze,Ne):t.texImage2D(i.TEXTURE_2D,Fe,De,Re,Ze,Ne);T.generateMipmaps=!1}else if(tt){if(ft){const Fe=Mt(Ee);t.texStorage2D(i.TEXTURE_2D,Rt,De,Fe.width,Fe.height)}ht&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Ze,Ee)}else t.texImage2D(i.TEXTURE_2D,0,De,Re,Ze,Ee);_(T)&&p(ue),He.__version=fe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function yt(I,T,ee){if(T.image.length!==6)return;const ue=Be(I,T),he=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+ee);const fe=n.get(he);if(he.version!==fe.__version||ue===!0){t.activeTexture(i.TEXTURE0+ee);const He=wt.getPrimaries(wt.workingColorSpace),me=T.colorSpace===di?null:wt.getPrimaries(T.colorSpace),ce=T.colorSpace===di||He===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Re=[];for(let U=0;U<6;U++)!Le&&!Ee?Re[U]=A(T.image[U],!0,s.maxCubemapSize):Re[U]=Ee?T.image[U].image:T.image[U],Re[U]=je(T,Re[U]);const Ze=Re[0],De=a.convert(T.format,T.colorSpace),Ne=a.convert(T.type),st=F(T.internalFormat,De,Ne,T.colorSpace),tt=T.isVideoTexture!==!0,ft=fe.__version===void 0||ue===!0,ht=he.dataReady;let Rt=C(T,Ze);_e(i.TEXTURE_CUBE_MAP,T);let Fe;if(Le){tt&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,st,Ze.width,Ze.height);for(let U=0;U<6;U++){Fe=Re[U].mipmaps;for(let ye=0;ye<Fe.length;ye++){const Se=Fe[ye];T.format!==zn?De!==null?tt?ht&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye,0,0,Se.width,Se.height,De,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye,st,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?ht&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye,0,0,Se.width,Se.height,De,Ne,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye,st,Se.width,Se.height,0,De,Ne,Se.data)}}}else{if(Fe=T.mipmaps,tt&&ft){Fe.length>0&&Rt++;const U=Mt(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,st,U.width,U.height)}for(let U=0;U<6;U++)if(Ee){tt?ht&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Re[U].width,Re[U].height,De,Ne,Re[U].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,st,Re[U].width,Re[U].height,0,De,Ne,Re[U].data);for(let ye=0;ye<Fe.length;ye++){const Ie=Fe[ye].image[U].image;tt?ht&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye+1,0,0,Ie.width,Ie.height,De,Ne,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye+1,st,Ie.width,Ie.height,0,De,Ne,Ie.data)}}else{tt?ht&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,De,Ne,Re[U]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,st,De,Ne,Re[U]);for(let ye=0;ye<Fe.length;ye++){const Se=Fe[ye];tt?ht&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye+1,0,0,De,Ne,Se.image[U]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye+1,st,De,Ne,Se.image[U])}}}_(T)&&p(i.TEXTURE_CUBE_MAP),fe.__version=he.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function re(I,T,ee,ue,he,fe){const He=a.convert(ee.format,ee.colorSpace),me=a.convert(ee.type),ce=F(ee.internalFormat,He,me,ee.colorSpace);if(!n.get(T).__hasExternalTextures){const Ee=Math.max(1,T.width>>fe),Re=Math.max(1,T.height>>fe);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,fe,ce,Ee,Re,T.depth,0,He,me,null):t.texImage2D(he,fe,ce,Ee,Re,0,He,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ge(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,he,n.get(ee).__webglTexture,0,et(T)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,he,n.get(ee).__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(I,T,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer&&!T.stencilBuffer){let ue=i.DEPTH_COMPONENT24;if(ee||Ge(T)){const he=T.depthTexture;he&&he.isDepthTexture&&(he.type===pi?ue=i.DEPTH_COMPONENT32F:he.type===hr&&(ue=i.DEPTH_COMPONENT24));const fe=et(T);Ge(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ue,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ue,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(T.depthBuffer&&T.stencilBuffer){const ue=et(T);ee&&Ge(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,T.width,T.height):Ge(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const ue=T.textures;for(let he=0;he<ue.length;he++){const fe=ue[he],He=a.convert(fe.format,fe.colorSpace),me=a.convert(fe.type),ce=F(fe.internalFormat,He,me,fe.colorSpace),Le=et(T);ee&&Ge(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ce,T.width,T.height):Ge(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const ue=n.get(T.depthTexture).__webglTexture,he=et(T);if(T.depthTexture.format===lr)Ge(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(T.depthTexture.format===Lr)Ge(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Ce(I){const T=n.get(I),ee=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Pe(T.__webglFramebuffer,I)}else if(ee){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]=i.createRenderbuffer(),xe(T.__webglDepthbuffer[ue],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),xe(T.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(I,T,ee){const ue=n.get(I);T!==void 0&&re(ue.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Ce(I)}function rt(I){const T=I.texture,ee=n.get(I),ue=n.get(T);I.addEventListener("dispose",Z);const he=I.textures,fe=I.isWebGLCubeRenderTarget===!0,He=he.length>1;if(He||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=T.version,c.memory.textures++),fe){ee.__webglFramebuffer=[];for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[me]=[];for(let ce=0;ce<T.mipmaps.length;ce++)ee.__webglFramebuffer[me][ce]=i.createFramebuffer()}else ee.__webglFramebuffer[me]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let me=0;me<T.mipmaps.length;me++)ee.__webglFramebuffer[me]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(He)for(let me=0,ce=he.length;me<ce;me++){const Le=n.get(he[me]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),c.memory.textures++)}if(I.samples>0&&Ge(I)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const ce=he[me];ee.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[me]);const Le=a.convert(ce.format,ce.colorSpace),Ee=a.convert(ce.type),Re=F(ce.internalFormat,Le,Ee,ce.colorSpace,I.isXRRenderTarget===!0),Ze=et(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Re,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,ee.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(ee.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),_e(i.TEXTURE_CUBE_MAP,T);for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)re(ee.__webglFramebuffer[me][ce],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ce);else re(ee.__webglFramebuffer[me],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);_(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let me=0,ce=he.length;me<ce;me++){const Le=he[me],Ee=n.get(Le);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),_e(i.TEXTURE_2D,Le),re(ee.__webglFramebuffer,I,Le,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),_(Le)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,ue.__webglTexture),_e(me,T),T.mipmaps&&T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)re(ee.__webglFramebuffer[ce],I,T,i.COLOR_ATTACHMENT0,me,ce);else re(ee.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,me,0);_(T)&&p(me),t.unbindTexture()}I.depthBuffer&&Ce(I)}function Ke(I){const T=I.textures;for(let ee=0,ue=T.length;ee<ue;ee++){const he=T[ee];if(_(he)){const fe=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,He=n.get(he).__webglTexture;t.bindTexture(fe,He),p(fe),t.unbindTexture()}}}function q(I){if(I.samples>0&&Ge(I)===!1){const T=I.textures,ee=I.width,ue=I.height;let he=i.COLOR_BUFFER_BIT;const fe=[],He=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(I),ce=T.length>1;if(ce)for(let Le=0;Le<T.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){fe.push(i.COLOR_ATTACHMENT0+Le),I.depthBuffer&&fe.push(He);const Ee=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ee===!1&&(I.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&me.__isTransmissionRenderTarget!==!0&&(he|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Le]),Ee===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[He]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[He])),ce){const Re=n.get(T[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,ee,ue,0,0,ee,ue,he,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Le=0;Le<T.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,me.__webglColorRenderbuffer[Le]);const Ee=n.get(T[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function et(I){return Math.min(s.maxSamples,I.samples)}function Ge(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ft(I){const T=c.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function je(I,T){const ee=I.colorSpace,ue=I.format,he=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ee!==xi&&ee!==di&&(wt.getTransfer(ee)===Dt?(ue!==zn||he!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),T}function Mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=Y,this.resetTextureUnits=w,this.setTexture2D=z,this.setTexture2DArray=ae,this.setTexture3D=le,this.setTextureCube=ve,this.rebindTextures=it,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ge}function Qm(i,e){function t(n,s=di){let a;const c=wt.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Du)return i.BYTE;if(n===Iu)return i.SHORT;if(n===Vl)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===hr)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===zn)return i.RGBA;if(n===Ou)return i.LUMINANCE;if(n===Bu)return i.LUMINANCE_ALPHA;if(n===lr)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===zu)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===Hu)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===Zs||n===Js||n===Qs||n===ea)if(c===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Zs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Zs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ho||n===po||n===mo||n===go)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ho)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===_o||n===vo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===_o)return c===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===vo)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xo||n===Mo||n===So||n===yo||n===Eo||n===To||n===bo||n===Ao||n===wo||n===Co||n===Ro||n===Po||n===Lo||n===Do)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===xo)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ao)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Po)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Do)return c===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ta||n===Io||n===Uo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ta)return c===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vu||n===No||n===Fo||n===Oo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ta)return a.COMPRESSED_RED_RGTC1_EXT;if(n===No)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class eg extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _s extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,c=null;const f=this._targetRay,d=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const A of e.hand.values()){const _=t.getJointPose(A,n),p=this._getHandJoint(m,A);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],S=g.position.distanceTo(x.position),y=.02,b=.005;m.inputState.pinching&&S>y+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=y-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=a!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _s;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new nn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new ti({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wn(new Ds(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class sg extends pr{constructor(e,t){super();const n=this;let s=null,a=1,c=null,f="local-floor",d=1,m=null,g=null,x=null,S=null,y=null,b=null;const A=new rg,_=t.getContextAttributes();let p=null,F=null;const C=[],O=[],Z=new ut;let H=null;const l=new _n;l.layers.enable(1),l.viewport=new Xt;const te=new _n;te.layers.enable(2),te.viewport=new Xt;const P=[l,te],w=new eg;w.layers.enable(1),w.layers.enable(2);let Y=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let xe=C[re];return xe===void 0&&(xe=new Ca,C[re]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(re){let xe=C[re];return xe===void 0&&(xe=new Ca,C[re]=xe),xe.getGripSpace()},this.getHand=function(re){let xe=C[re];return xe===void 0&&(xe=new Ca,C[re]=xe),xe.getHandSpace()};function z(re){const xe=O.indexOf(re.inputSource);if(xe===-1)return;const Pe=C[xe];Pe!==void 0&&(Pe.update(re.inputSource,re.frame,m||c),Pe.dispatchEvent({type:re.type,data:re.inputSource}))}function ae(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",le);for(let re=0;re<C.length;re++){const xe=O[re];xe!==null&&(O[re]=null,C[re].disconnect(xe))}Y=null,oe=null,A.reset(),e.setRenderTarget(p),y=null,S=null,x=null,s=null,F=null,yt.stop(),n.isPresenting=!1,e.setPixelRatio(H),e.setSize(Z.width,Z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){a=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",le),_.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(Z),s.renderState.layers===void 0){const xe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Oi(y.framebufferWidth,y.framebufferHeight,{format:zn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let xe=null,Pe=null,Ce=null;_.depth&&(Ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=_.stencil?Lr:lr,Pe=_.stencil?Ir:hr);const it={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};x=new XRWebGLBinding(s,t),S=x.createProjectionLayer(it),s.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),F=new Oi(S.textureWidth,S.textureHeight,{format:zn,type:_i,depthTexture:new uc(S.textureWidth,S.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const rt=e.properties.get(F);rt.__ignoreDepthValues=S.ignoreDepthValues}F.isXRRenderTarget=!0,this.setFoveation(d),m=null,c=await s.requestReferenceSpace(f),yt.setContext(s),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function le(re){for(let xe=0;xe<re.removed.length;xe++){const Pe=re.removed[xe],Ce=O.indexOf(Pe);Ce>=0&&(O[Ce]=null,C[Ce].disconnect(Pe))}for(let xe=0;xe<re.added.length;xe++){const Pe=re.added[xe];let Ce=O.indexOf(Pe);if(Ce===-1){for(let rt=0;rt<C.length;rt++)if(rt>=O.length){O.push(Pe),Ce=rt;break}else if(O[rt]===null){O[rt]=Pe,Ce=rt;break}if(Ce===-1)break}const it=C[Ce];it&&it.connect(Pe)}}const ve=new W,pe=new W;function ne(re,xe,Pe){ve.setFromMatrixPosition(xe.matrixWorld),pe.setFromMatrixPosition(Pe.matrixWorld);const Ce=ve.distanceTo(pe),it=xe.projectionMatrix.elements,rt=Pe.projectionMatrix.elements,Ke=it[14]/(it[10]-1),q=it[14]/(it[10]+1),et=(it[9]+1)/it[5],Ge=(it[9]-1)/it[5],Ft=(it[8]-1)/it[0],je=(rt[8]+1)/rt[0],Mt=Ke*Ft,I=Ke*je,T=Ce/(-Ft+je),ee=T*-Ft;xe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ee),re.translateZ(T),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const ue=Ke+T,he=q+T,fe=Mt-ee,He=I+(Ce-ee),me=et*q/he*ue,ce=Ge*q/he*ue;re.projectionMatrix.makePerspective(fe,He,me,ce,ue,he),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function ge(re,xe){xe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(xe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;A.texture!==null&&(re.near=A.depthNear,re.far=A.depthFar),w.near=te.near=l.near=re.near,w.far=te.far=l.far=re.far,(Y!==w.near||oe!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),Y=w.near,oe=w.far,l.near=Y,l.far=oe,te.near=Y,te.far=oe,l.updateProjectionMatrix(),te.updateProjectionMatrix(),re.updateProjectionMatrix());const xe=re.parent,Pe=w.cameras;ge(w,xe);for(let Ce=0;Ce<Pe.length;Ce++)ge(Pe[Ce],xe);Pe.length===2?ne(w,l,te):w.projectionMatrix.copy(l.projectionMatrix),_e(re,w,xe)};function _e(re,xe,Pe){Pe===null?re.matrix.copy(xe.matrixWorld):(re.matrix.copy(Pe.matrixWorld),re.matrix.invert(),re.matrix.multiply(xe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ba*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(S===null&&y===null))return d},this.setFoveation=function(re){d=re,S!==null&&(S.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return A.texture!==null};let Be=null;function ct(re,xe){if(g=xe.getViewerPose(m||c),b=xe,g!==null){const Pe=g.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let Ce=!1;Pe.length!==w.cameras.length&&(w.cameras.length=0,Ce=!0);for(let rt=0;rt<Pe.length;rt++){const Ke=Pe[rt];let q=null;if(y!==null)q=y.getViewport(Ke);else{const Ge=x.getViewSubImage(S,Ke);q=Ge.viewport,rt===0&&(e.setRenderTargetTextures(F,Ge.colorTexture,S.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(F))}let et=P[rt];et===void 0&&(et=new _n,et.layers.enable(rt),et.viewport=new Xt,P[rt]=et),et.matrix.fromArray(Ke.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Ke.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(q.x,q.y,q.width,q.height),rt===0&&(w.matrix.copy(et.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ce===!0&&w.cameras.push(et)}const it=s.enabledFeatures;if(it&&it.includes("depth-sensing")){const rt=x.getDepthInformation(Pe[0]);rt&&rt.isValid&&rt.texture&&A.init(e,rt,s.renderState)}}for(let Pe=0;Pe<C.length;Pe++){const Ce=O[Pe],it=C[Pe];Ce!==null&&it!==void 0&&it.update(Ce,xe,m||c)}A.render(e,w),Be&&Be(re,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),b=null}const yt=new lc;yt.setAnimationLoop(ct),this.setAnimationLoop=function(re){Be=re},this.dispose=function(){}}}const Pi=new Vn,ag=new Nt;function og(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,sc(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,F,C,O){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(_,p):p.isMeshToonMaterial?(a(_,p),x(_,p)):p.isMeshPhongMaterial?(a(_,p),g(_,p)):p.isMeshStandardMaterial?(a(_,p),S(_,p),p.isMeshPhysicalMaterial&&y(_,p,O)):p.isMeshMatcapMaterial?(a(_,p),b(_,p)):p.isMeshDepthMaterial?a(_,p):p.isMeshDistanceMaterial?(a(_,p),A(_,p)):p.isMeshNormalMaterial?a(_,p):p.isLineBasicMaterial?(c(_,p),p.isLineDashedMaterial&&f(_,p)):p.isPointsMaterial?d(_,p,F,C):p.isSpriteMaterial?m(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===ln&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===ln&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const F=e.get(p),C=F.envMap,O=F.envMapRotation;if(C&&(_.envMap.value=C,Pi.copy(O),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),_.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler(Pi)),_.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const Z=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*Z,t(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function f(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function d(_,p,F,C){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*F,_.scale.value=C*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function m(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function g(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function x(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function S(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function y(_,p,F){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&_.clearcoatNormalScale.value.negate())),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=F.texture,_.transmissionSamplerSize.value.set(F.width,F.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function b(_,p){p.matcap&&(_.matcap.value=p.matcap)}function A(_,p){const F=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(F.matrixWorld),_.nearDistance.value=F.shadow.camera.near,_.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lg(i,e,t,n){let s={},a={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(F,C){const O=C.program;n.uniformBlockBinding(F,O)}function m(F,C){let O=s[F.id];O===void 0&&(b(F),O=g(F),s[F.id]=O,F.addEventListener("dispose",_));const Z=C.program;n.updateUBOMapping(F,Z);const H=e.render.frame;a[F.id]!==H&&(S(F),a[F.id]=H)}function g(F){const C=x();F.__bindingPointIndex=C;const O=i.createBuffer(),Z=F.__size,H=F.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,Z,H),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,O),O}function x(){for(let F=0;F<f;F++)if(c.indexOf(F)===-1)return c.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const C=s[F.id],O=F.uniforms,Z=F.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let H=0,l=O.length;H<l;H++){const te=Array.isArray(O[H])?O[H]:[O[H]];for(let P=0,w=te.length;P<w;P++){const Y=te[P];if(y(Y,H,P,Z)===!0){const oe=Y.__offset,z=Array.isArray(Y.value)?Y.value:[Y.value];let ae=0;for(let le=0;le<z.length;le++){const ve=z[le],pe=A(ve);typeof ve=="number"||typeof ve=="boolean"?(Y.__data[0]=ve,i.bufferSubData(i.UNIFORM_BUFFER,oe+ae,Y.__data)):ve.isMatrix3?(Y.__data[0]=ve.elements[0],Y.__data[1]=ve.elements[1],Y.__data[2]=ve.elements[2],Y.__data[3]=0,Y.__data[4]=ve.elements[3],Y.__data[5]=ve.elements[4],Y.__data[6]=ve.elements[5],Y.__data[7]=0,Y.__data[8]=ve.elements[6],Y.__data[9]=ve.elements[7],Y.__data[10]=ve.elements[8],Y.__data[11]=0):(ve.toArray(Y.__data,ae),ae+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,oe,Y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(F,C,O,Z){const H=F.value,l=C+"_"+O;if(Z[l]===void 0)return typeof H=="number"||typeof H=="boolean"?Z[l]=H:Z[l]=H.clone(),!0;{const te=Z[l];if(typeof H=="number"||typeof H=="boolean"){if(te!==H)return Z[l]=H,!0}else if(te.equals(H)===!1)return te.copy(H),!0}return!1}function b(F){const C=F.uniforms;let O=0;const Z=16;for(let l=0,te=C.length;l<te;l++){const P=Array.isArray(C[l])?C[l]:[C[l]];for(let w=0,Y=P.length;w<Y;w++){const oe=P[w],z=Array.isArray(oe.value)?oe.value:[oe.value];for(let ae=0,le=z.length;ae<le;ae++){const ve=z[ae],pe=A(ve),ne=O%Z;ne!==0&&Z-ne<pe.boundary&&(O+=Z-ne),oe.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=O,O+=pe.storage}}}const H=O%Z;return H>0&&(O+=Z-H),F.__size=O,F.__cache={},this}function A(F){const C={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(C.boundary=4,C.storage=4):F.isVector2?(C.boundary=8,C.storage=8):F.isVector3||F.isColor?(C.boundary=16,C.storage=12):F.isVector4?(C.boundary=16,C.storage=16):F.isMatrix3?(C.boundary=48,C.storage=48):F.isMatrix4?(C.boundary=64,C.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),C}function _(F){const C=F.target;C.removeEventListener("dispose",_);const O=c.indexOf(C.__bindingPointIndex);c.splice(O,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete a[C.id]}function p(){for(const F in s)i.deleteBuffer(s[F]);c=[],s={},a={}}return{bind:d,update:m,dispose:p}}class cg{constructor(e={}){const{canvas:t=Qu(),context:n=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=c;const y=new Uint32Array(4),b=new Int32Array(4);let A=null,_=null;const p=[],F=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const C=this;let O=!1,Z=0,H=0,l=null,te=-1,P=null;const w=new Xt,Y=new Xt;let oe=null;const z=new _t(0);let ae=0,le=t.width,ve=t.height,pe=1,ne=null,ge=null;const _e=new Xt(0,0,le,ve),Be=new Xt(0,0,le,ve);let ct=!1;const yt=new Xa;let re=!1,xe=!1;const Pe=new Nt,Ce=new ut,it=new W,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return l===null?pe:1}let q=n;function et(R,k){const K=t.getContext(R,k);return K!==null?K:null}try{const R={alpha:!0,depth:s,stencil:a,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Va}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),q===null){const k="webgl2";if(q=et(k,R),q===null)throw et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ge,Ft,je,Mt,I,T,ee,ue,he,fe,He,me,ce,Le,Ee,Re,Ze,De,Ne,st,tt,ft,ht,Rt;function Fe(){Ge=new _p(q),Ge.init(),Ft=new fp(q,Ge,e),ft=new Qm(q,Ge),je=new Zm(q),Mt=new Mp(q),I=new Om,T=new Jm(q,Ge,je,I,Ft,ft,Mt),ee=new dp(C),ue=new gp(C),he=new Af(q),ht=new cp(q,he),fe=new vp(q,he,Mt,ht),He=new yp(q,fe,he,Mt),Ne=new Sp(q,Ft,T),Re=new hp(I),me=new Fm(C,ee,ue,Ge,Ft,ht,Re),ce=new og(C,I),Le=new zm,Ee=new Xm(Ge),De=new lp(C,ee,ue,je,He,S,d),Ze=new Km(C,He,Ft),Rt=new lg(q,Mt,Ft,je),st=new up(q,Ge,Mt),tt=new xp(q,Ge,Mt),Mt.programs=me.programs,C.capabilities=Ft,C.extensions=Ge,C.properties=I,C.renderLists=Le,C.shadowMap=Ze,C.state=je,C.info=Mt}Fe();const U=new sg(C,q);this.xr=U,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=Ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(le,ve,!1))},this.getSize=function(R){return R.set(le,ve)},this.setSize=function(R,k,K=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=R,ve=k,t.width=Math.floor(R*pe),t.height=Math.floor(k*pe),K===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(le*pe,ve*pe).floor()},this.setDrawingBufferSize=function(R,k,K){le=R,ve=k,pe=K,t.width=Math.floor(R*K),t.height=Math.floor(k*K),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(_e)},this.setViewport=function(R,k,K,J){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,k,K,J),je.viewport(w.copy(_e).multiplyScalar(pe).round())},this.getScissor=function(R){return R.copy(Be)},this.setScissor=function(R,k,K,J){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,k,K,J),je.scissor(Y.copy(Be).multiplyScalar(pe).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(R){je.setScissorTest(ct=R)},this.setOpaqueSort=function(R){ne=R},this.setTransparentSort=function(R){ge=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(R=!0,k=!0,K=!0){let J=0;if(R){let j=!1;if(l!==null){const Te=l.texture.format;j=Te===jl||Te===ql||Te===Xl}if(j){const Te=l.texture.type,Oe=Te===_i||Te===hr||Te===Vl||Te===Ir||Te===Gl||Te===Wl,We=De.getClearColor(),ke=De.getClearAlpha(),Je=We.r,Ye=We.g,Qe=We.b;Oe?(y[0]=Je,y[1]=Ye,y[2]=Qe,y[3]=ke,q.clearBufferuiv(q.COLOR,0,y)):(b[0]=Je,b[1]=Ye,b[2]=Qe,b[3]=ke,q.clearBufferiv(q.COLOR,0,b))}else J|=q.COLOR_BUFFER_BIT}k&&(J|=q.DEPTH_BUFFER_BIT),K&&(J|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Le.dispose(),Ee.dispose(),I.dispose(),ee.dispose(),ue.dispose(),He.dispose(),ht.dispose(),Rt.dispose(),me.dispose(),U.dispose(),U.removeEventListener("sessionstart",hn),U.removeEventListener("sessionend",cn),Cn.stop()};function ye(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=Mt.autoReset,k=Ze.enabled,K=Ze.autoUpdate,J=Ze.needsUpdate,j=Ze.type;Fe(),Mt.autoReset=R,Ze.enabled=k,Ze.autoUpdate=K,Ze.needsUpdate=J,Ze.type=j}function Ie(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ze(R){const k=R.target;k.removeEventListener("dispose",ze),Et(k)}function Et(R){Ct(R),I.remove(R)}function Ct(R){const k=I.get(R).programs;k!==void 0&&(k.forEach(function(K){me.releaseProgram(K)}),R.isShaderMaterial&&me.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,K,J,j,Te){k===null&&(k=rt);const Oe=j.isMesh&&j.matrixWorld.determinant()<0,We=Us(R,k,K,J,j);je.setMaterial(J,Oe);let ke=K.index,Je=1;if(J.wireframe===!0){if(ke=fe.getWireframeAttribute(K),ke===void 0)return;Je=2}const Ye=K.drawRange,Qe=K.attributes.position;let Ut=Ye.start*Je,Jt=(Ye.start+Ye.count)*Je;Te!==null&&(Ut=Math.max(Ut,Te.start*Je),Jt=Math.min(Jt,(Te.start+Te.count)*Je)),ke!==null?(Ut=Math.max(Ut,0),Jt=Math.min(Jt,ke.count)):Qe!=null&&(Ut=Math.max(Ut,0),Jt=Math.min(Jt,Qe.count));const Ot=Jt-Ut;if(Ot<0||Ot===1/0)return;ht.setup(j,J,We,K,ke);let Mn,Lt=st;if(ke!==null&&(Mn=he.get(ke),Lt=tt,Lt.setIndex(Mn)),j.isMesh)J.wireframe===!0?(je.setLineWidth(J.wireframeLinewidth*Ke()),Lt.setMode(q.LINES)):Lt.setMode(q.TRIANGLES);else if(j.isLine){let nt=J.linewidth;nt===void 0&&(nt=1),je.setLineWidth(nt*Ke()),j.isLineSegments?Lt.setMode(q.LINES):j.isLineLoop?Lt.setMode(q.LINE_LOOP):Lt.setMode(q.LINE_STRIP)}else j.isPoints?Lt.setMode(q.POINTS):j.isSprite&&Lt.setMode(q.TRIANGLES);if(j.isBatchedMesh)Lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Lt.renderInstances(Ut,Ot,j.count);else if(K.isInstancedBufferGeometry){const nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Hi=Math.min(K.instanceCount,nt);Lt.renderInstances(Ut,Ot,Hi)}else Lt.render(Ut,Ot)};function mt(R,k,K){R.transparent===!0&&R.side===Qn&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,zi(R,k,K),R.side=vi,R.needsUpdate=!0,zi(R,k,K),R.side=Qn):zi(R,k,K)}this.compile=function(R,k,K=null){K===null&&(K=R),_=Ee.get(K),_.init(),F.push(_),K.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==K&&R.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights(C._useLegacyLights);const J=new Set;return R.traverse(function(j){const Te=j.material;if(Te)if(Array.isArray(Te))for(let Oe=0;Oe<Te.length;Oe++){const We=Te[Oe];mt(We,K,j),J.add(We)}else mt(Te,K,j),J.add(Te)}),F.pop(),_=null,J},this.compileAsync=function(R,k,K=null){const J=this.compile(R,k,K);return new Promise(j=>{function Te(){if(J.forEach(function(Oe){I.get(Oe).currentProgram.isReady()&&J.delete(Oe)}),J.size===0){j(R);return}setTimeout(Te,10)}Ge.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let St=null;function Tt(R){St&&St(R)}function hn(){Cn.stop()}function cn(){Cn.start()}const Cn=new lc;Cn.setAnimationLoop(Tt),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(R){St=R,U.setAnimationLoop(R),R===null?Cn.stop():Cn.start()},U.addEventListener("sessionstart",hn),U.addEventListener("sessionend",cn),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(k),k=U.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,k,l),_=Ee.get(R,F.length),_.init(),F.push(_),Pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),yt.setFromProjectionMatrix(Pe),xe=this.localClippingEnabled,re=Re.init(this.clippingPlanes,xe),A=Le.get(R,p.length),A.init(),p.push(A),kn(R,k,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(ne,ge),this.info.render.frame++,re===!0&&Re.beginShadows();const K=_.state.shadowsArray;if(Ze.render(K,R,k),re===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1)&&De.render(A,R),_.setupLights(C._useLegacyLights),k.isArrayCamera){const J=k.cameras;for(let j=0,Te=J.length;j<Te;j++){const Oe=J[j];Gn(A,R,Oe,Oe.viewport)}}else Gn(A,R,k);l!==null&&(T.updateMultisampleRenderTarget(l),T.updateRenderTargetMipmap(l)),R.isScene===!0&&R.onAfterRender(C,R,k),ht.resetDefaultState(),te=-1,P=null,F.pop(),F.length>0?_=F[F.length-1]:_=null,p.pop(),p.length>0?A=p[p.length-1]:A=null};function kn(R,k,K,J){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||yt.intersectsSprite(R)){J&&it.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pe);const Oe=He.update(R),We=R.material;We.visible&&A.push(R,Oe,We,K,it.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||yt.intersectsObject(R))){const Oe=He.update(R),We=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),it.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),it.copy(Oe.boundingSphere.center)),it.applyMatrix4(R.matrixWorld).applyMatrix4(Pe)),Array.isArray(We)){const ke=Oe.groups;for(let Je=0,Ye=ke.length;Je<Ye;Je++){const Qe=ke[Je],Ut=We[Qe.materialIndex];Ut&&Ut.visible&&A.push(R,Oe,Ut,K,it.z,Qe)}}else We.visible&&A.push(R,Oe,We,K,it.z,null)}}const Te=R.children;for(let Oe=0,We=Te.length;Oe<We;Oe++)kn(Te[Oe],k,K,J)}function Gn(R,k,K,J){const j=R.opaque,Te=R.transmissive,Oe=R.transparent;_.setupLightsView(K),re===!0&&Re.setGlobalState(C.clippingPlanes,K),Te.length>0&&gr(j,Te,k,K),J&&je.viewport(w.copy(J)),j.length>0&&Wn(j,k,K),Te.length>0&&Wn(Te,k,K),Oe.length>0&&Wn(Oe,k,K),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function gr(R,k,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget===null){_.state.transmissionRenderTarget=new Oi(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Ts:_i,minFilter:Fi,samples:4,stencilBuffer:a});const Je=I.get(_.state.transmissionRenderTarget);Je.__isTransmissionRenderTarget=!0}const Te=_.state.transmissionRenderTarget;C.getDrawingBufferSize(Ce),Te.setSize(Ce.x,Ce.y);const Oe=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(z),ae=C.getClearAlpha(),ae<1&&C.setClearColor(16777215,.5),C.clear();const We=C.toneMapping;C.toneMapping=gi,Wn(R,K,J),T.updateMultisampleRenderTarget(Te),T.updateRenderTargetMipmap(Te);let ke=!1;for(let Je=0,Ye=k.length;Je<Ye;Je++){const Qe=k[Je],Ut=Qe.object,Jt=Qe.geometry,Ot=Qe.material,Mn=Qe.group;if(Ot.side===Qn&&Ut.layers.test(J.layers)){const Lt=Ot.side;Ot.side=ln,Ot.needsUpdate=!0,Hr(Ut,K,J,Jt,Ot,Mn),Ot.side=Lt,Ot.needsUpdate=!0,ke=!0}}ke===!0&&(T.updateMultisampleRenderTarget(Te),T.updateRenderTargetMipmap(Te)),C.setRenderTarget(Oe),C.setClearColor(z,ae),C.toneMapping=We}function Wn(R,k,K){const J=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Te=R.length;j<Te;j++){const Oe=R[j],We=Oe.object,ke=Oe.geometry,Je=J===null?Oe.material:J,Ye=Oe.group;We.layers.test(K.layers)&&Hr(We,k,K,ke,Je,Ye)}}function Hr(R,k,K,J,j,Te){R.onBeforeRender(C,k,K,J,j,Te),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,k,K,J,R,Te),j.transparent===!0&&j.side===Qn&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,C.renderBufferDirect(K,k,J,j,R,Te),j.side=vi,j.needsUpdate=!0,C.renderBufferDirect(K,k,J,j,R,Te),j.side=Qn):C.renderBufferDirect(K,k,J,j,R,Te),R.onAfterRender(C,k,K,J,j,Te)}function zi(R,k,K){k.isScene!==!0&&(k=rt);const J=I.get(R),j=_.state.lights,Te=_.state.shadowsArray,Oe=j.state.version,We=me.getParameters(R,j.state,Te,k,K),ke=me.getProgramCacheKey(We);let Je=J.programs;J.environment=R.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(R.isMeshStandardMaterial?ue:ee).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",ze),Je=new Map,J.programs=Je);let Ye=Je.get(ke);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===Oe)return _r(R,We),Ye}else We.uniforms=me.getUniforms(R),R.onBuild(K,We,C),R.onBeforeCompile(We,C),Ye=me.acquireProgram(We,ke),Je.set(ke,Ye),J.uniforms=We.uniforms;const Qe=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=Re.uniform),_r(R,We),J.needsLights=kr(R),J.lightsStateVersion=Oe,J.needsLights&&(Qe.ambientLightColor.value=j.state.ambient,Qe.lightProbe.value=j.state.probe,Qe.directionalLights.value=j.state.directional,Qe.directionalLightShadows.value=j.state.directionalShadow,Qe.spotLights.value=j.state.spot,Qe.spotLightShadows.value=j.state.spotShadow,Qe.rectAreaLights.value=j.state.rectArea,Qe.ltc_1.value=j.state.rectAreaLTC1,Qe.ltc_2.value=j.state.rectAreaLTC2,Qe.pointLights.value=j.state.point,Qe.pointLightShadows.value=j.state.pointShadow,Qe.hemisphereLights.value=j.state.hemi,Qe.directionalShadowMap.value=j.state.directionalShadowMap,Qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Qe.spotShadowMap.value=j.state.spotShadowMap,Qe.spotLightMatrix.value=j.state.spotLightMatrix,Qe.spotLightMap.value=j.state.spotLightMap,Qe.pointShadowMap.value=j.state.pointShadowMap,Qe.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function Vr(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Ss.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function _r(R,k){const K=I.get(R);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Us(R,k,K,J,j){k.isScene!==!0&&(k=rt),T.resetTextureUnits();const Te=k.fog,Oe=J.isMeshStandardMaterial?k.environment:null,We=l===null?C.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:xi,ke=(J.isMeshStandardMaterial?ue:ee).get(J.envMap||Oe),Je=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Qe=!!K.morphAttributes.position,Ut=!!K.morphAttributes.normal,Jt=!!K.morphAttributes.color;let Ot=gi;J.toneMapped&&(l===null||l.isXRRenderTarget===!0)&&(Ot=C.toneMapping);const Mn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Lt=Mn!==void 0?Mn.length:0,nt=I.get(J),Hi=_.state.lights;if(re===!0&&(xe===!0||R!==P)){const Qt=R===P&&J.id===te;Re.setState(J,R,Qt)}let At=!1;J.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Hi.state.version||nt.outputColorSpace!==We||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==ke||J.fog===!0&&nt.fog!==Te||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Re.numPlanes||nt.numIntersection!==Re.numIntersection)||nt.vertexAlphas!==Je||nt.vertexTangents!==Ye||nt.morphTargets!==Qe||nt.morphNormals!==Ut||nt.morphColors!==Jt||nt.toneMapping!==Ot||nt.morphTargetsCount!==Lt)&&(At=!0):(At=!0,nt.__version=J.version);let Rn=nt.currentProgram;At===!0&&(Rn=zi(J,k,j));let jt=!1,dn=!1,ni=!1;const Gt=Rn.getUniforms(),Pn=nt.uniforms;if(je.useProgram(Rn.program)&&(jt=!0,dn=!0,ni=!0),J.id!==te&&(te=J.id,dn=!0),jt||P!==R){Gt.setValue(q,"projectionMatrix",R.projectionMatrix),Gt.setValue(q,"viewMatrix",R.matrixWorldInverse);const Qt=Gt.map.cameraPosition;Qt!==void 0&&Qt.setValue(q,it.setFromMatrixPosition(R.matrixWorld)),Ft.logarithmicDepthBuffer&&Gt.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Gt.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),P!==R&&(P=R,dn=!0,ni=!0)}if(j.isSkinnedMesh){Gt.setOptional(q,j,"bindMatrix"),Gt.setOptional(q,j,"bindMatrixInverse");const Qt=j.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Gt.setValue(q,"boneTexture",Qt.boneTexture,T))}j.isBatchedMesh&&(Gt.setOptional(q,j,"batchingTexture"),Gt.setValue(q,"batchingTexture",j._matricesTexture,T));const Mi=K.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&Ne.update(j,K,Rn),(dn||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,Gt.setValue(q,"receiveShadow",j.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Pn.envMap.value=ke,Pn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(Pn.envMapIntensity.value=k.environmentIntensity),dn&&(Gt.setValue(q,"toneMappingExposure",C.toneMappingExposure),nt.needsLights&&Ns(Pn,ni),Te&&J.fog===!0&&ce.refreshFogUniforms(Pn,Te),ce.refreshMaterialUniforms(Pn,J,pe,ve,_.state.transmissionRenderTarget),Ss.upload(q,Vr(nt),Pn,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ss.upload(q,Vr(nt),Pn,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Gt.setValue(q,"center",j.center),Gt.setValue(q,"modelViewMatrix",j.modelViewMatrix),Gt.setValue(q,"normalMatrix",j.normalMatrix),Gt.setValue(q,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Qt=J.uniformsGroups;for(let ii=0,Gr=Qt.length;ii<Gr;ii++){const Wr=Qt[ii];Rt.update(Wr,Rn),Rt.bind(Wr,Rn)}}return Rn}function Ns(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function kr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(R,k,K){I.get(R.texture).__webglTexture=k,I.get(R.depthTexture).__webglTexture=K;const J=I.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const K=I.get(R);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,K=0){l=R,Z=k,H=K;let J=!0,j=null,Te=!1,Oe=!1;if(R){const ke=I.get(R);ke.__useDefaultFramebuffer!==void 0?(je.bindFramebuffer(q.FRAMEBUFFER,null),J=!1):ke.__webglFramebuffer===void 0?T.setupRenderTarget(R):ke.__hasExternalTextures&&T.rebindTextures(R,I.get(R.texture).__webglTexture,I.get(R.depthTexture).__webglTexture);const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Oe=!0);const Ye=I.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?j=Ye[k][K]:j=Ye[k],Te=!0):R.samples>0&&T.useMultisampledRTT(R)===!1?j=I.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?j=Ye[K]:j=Ye,w.copy(R.viewport),Y.copy(R.scissor),oe=R.scissorTest}else w.copy(_e).multiplyScalar(pe).floor(),Y.copy(Be).multiplyScalar(pe).floor(),oe=ct;if(je.bindFramebuffer(q.FRAMEBUFFER,j)&&J&&je.drawBuffers(R,j),je.viewport(w),je.scissor(Y),je.setScissorTest(oe),Te){const ke=I.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+k,ke.__webglTexture,K)}else if(Oe){const ke=I.get(R.texture),Je=k||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,ke.__webglTexture,K||0,Je)}te=-1},this.readRenderTargetPixels=function(R,k,K,J,j,Te,Oe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=I.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We){je.bindFramebuffer(q.FRAMEBUFFER,We);try{const ke=R.texture,Je=ke.format,Ye=ke.type;if(Je!==zn&&ft.convert(Je)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ye===Ts&&(Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float"));if(Ye!==_i&&ft.convert(Ye)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&Ye!==pi&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-J&&K>=0&&K<=R.height-j&&q.readPixels(k,K,J,j,ft.convert(Je),ft.convert(Ye),Te)}finally{const ke=l!==null?I.get(l).__webglFramebuffer:null;je.bindFramebuffer(q.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,k,K=0){const J=Math.pow(2,-K),j=Math.floor(k.image.width*J),Te=Math.floor(k.image.height*J);T.setTexture2D(k,0),q.copyTexSubImage2D(q.TEXTURE_2D,K,0,0,R.x,R.y,j,Te),je.unbindTexture()},this.copyTextureToTexture=function(R,k,K,J=0){const j=k.image.width,Te=k.image.height,Oe=ft.convert(K.format),We=ft.convert(K.type);T.setTexture2D(K,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,J,R.x,R.y,j,Te,Oe,We,k.image.data):k.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,J,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,Oe,k.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,J,R.x,R.y,Oe,We,k.image),J===0&&K.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),je.unbindTexture()},this.copyTextureToTexture3D=function(R,k,K,J,j=0){const Te=Math.round(R.max.x-R.min.x),Oe=Math.round(R.max.y-R.min.y),We=R.max.z-R.min.z+1,ke=ft.convert(J.format),Je=ft.convert(J.type);let Ye;if(J.isData3DTexture)T.setTexture3D(J,0),Ye=q.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)T.setTexture2DArray(J,0),Ye=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment);const Qe=q.getParameter(q.UNPACK_ROW_LENGTH),Ut=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Jt=q.getParameter(q.UNPACK_SKIP_PIXELS),Ot=q.getParameter(q.UNPACK_SKIP_ROWS),Mn=q.getParameter(q.UNPACK_SKIP_IMAGES),Lt=K.isCompressedTexture?K.mipmaps[j]:K.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Lt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Lt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,R.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,R.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?q.texSubImage3D(Ye,j,k.x,k.y,k.z,Te,Oe,We,ke,Je,Lt.data):J.isCompressedArrayTexture?q.compressedTexSubImage3D(Ye,j,k.x,k.y,k.z,Te,Oe,We,ke,Lt.data):q.texSubImage3D(Ye,j,k.x,k.y,k.z,Te,Oe,We,ke,Je,Lt),q.pixelStorei(q.UNPACK_ROW_LENGTH,Qe),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ut),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Jt),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ot),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Mn),j===0&&J.generateMipmaps&&q.generateMipmap(Ye),je.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){Z=0,H=0,l=null,je.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ga?"display-p3":"srgb",t.unpackColorSpace=wt.workingColorSpace===Ls?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ug extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gc extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cl=new W,Rl=new W,Pl=new Nt,Ra=new Wa,vs=new Or;class fg extends qt{constructor(e=new xn,t=new gc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Cl.fromBufferAttribute(t,s-1),Rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Cl.distanceTo(Rl);e.setAttribute("lineDistance",new rn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(s),vs.radius+=a,e.ray.intersectsSphere(vs)===!1)return;Pl.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(Pl);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,m=new W,g=new W,x=new W,S=new W,y=this.isLineSegments?2:1,b=n.index,_=n.attributes.position;if(b!==null){const p=Math.max(0,c.start),F=Math.min(b.count,c.start+c.count);for(let C=p,O=F-1;C<O;C+=y){const Z=b.getX(C),H=b.getX(C+1);if(m.fromBufferAttribute(_,Z),g.fromBufferAttribute(_,H),Ra.distanceSqToSegment(m,g,S,x)>d)continue;S.applyMatrix4(this.matrixWorld);const te=e.ray.origin.distanceTo(S);te<e.near||te>e.far||t.push({distance:te,point:x.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,c.start),F=Math.min(_.count,c.start+c.count);for(let C=p,O=F-1;C<O;C+=y){if(m.fromBufferAttribute(_,C),g.fromBufferAttribute(_,C+1),Ra.distanceSqToSegment(m,g,S,x)>d)continue;S.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(S);H<e.near||H>e.far||t.push({distance:H,point:x.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}const Ll=new W,Dl=new W;class hg extends fg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Ll.fromBufferAttribute(t,s),Dl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ll.distanceTo(Dl);e.setAttribute("lineDistance",new rn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _c extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Il=new Nt,Ha=new Wa,xs=new Or,Ms=new W;class dg extends qt{constructor(e=new xn,t=new _c){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(s),xs.radius+=a,e.ray.intersectsSphere(xs)===!1)return;Il.copy(s).invert(),Ha.copy(e.ray).applyMatrix4(Il);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,m=n.index,x=n.attributes.position;if(m!==null){const S=Math.max(0,c.start),y=Math.min(m.count,c.start+c.count);for(let b=S,A=y;b<A;b++){const _=m.getX(b);Ms.fromBufferAttribute(x,_),Ul(Ms,_,d,s,e,t,this)}}else{const S=Math.max(0,c.start),y=Math.min(x.count,c.start+c.count);for(let b=S,A=y;b<A;b++)Ms.fromBufferAttribute(x,b),Ul(Ms,b,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function Ul(i,e,t,n,s,a,c){const f=Ha.distanceSqToPoint(i);if(f<t){const d=new W;Ha.closestPointToPoint(i,d),d.applyMatrix4(n);const m=s.ray.origin.distanceTo(d);if(m<s.near||m>s.far)return;a.push({distance:m,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,object:c})}}class Rs extends xn{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(c+f,Math.PI);let m=0;const g=[],x=new W,S=new W,y=[],b=[],A=[],_=[];for(let p=0;p<=n;p++){const F=[],C=p/n;let O=0;p===0&&c===0?O=.5/t:p===n&&d===Math.PI&&(O=-.5/t);for(let Z=0;Z<=t;Z++){const H=Z/t;x.x=-e*Math.cos(s+H*a)*Math.sin(c+C*f),x.y=e*Math.cos(c+C*f),x.z=e*Math.sin(s+H*a)*Math.sin(c+C*f),b.push(x.x,x.y,x.z),S.copy(x).normalize(),A.push(S.x,S.y,S.z),_.push(H+O,1-C),F.push(m++)}g.push(F)}for(let p=0;p<n;p++)for(let F=0;F<t;F++){const C=g[p][F+1],O=g[p][F],Z=g[p+1][F],H=g[p+1][F+1];(p!==0||c>0)&&y.push(C,O,H),(p!==n-1||d<Math.PI)&&y.push(O,Z,H)}this.setIndex(y),this.setAttribute("position",new rn(b,3)),this.setAttribute("normal",new rn(A,3)),this.setAttribute("uv",new rn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pg extends Bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Nl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class mg{constructor(e,t,n){const s=this;let a=!1,c=0,f=0,d;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(g){f++,a===!1&&s.onStart!==void 0&&s.onStart(g,c,f),a=!0},this.itemEnd=function(g){c++,s.onProgress!==void 0&&s.onProgress(g,c,f),c===f&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,x){return m.push(g,x),this},this.removeHandler=function(g){const x=m.indexOf(g);return x!==-1&&m.splice(x,2),this},this.getHandler=function(g){for(let x=0,S=m.length;x<S;x+=2){const y=m[x],b=m[x+1];if(y.global&&(y.lastIndex=0),y.test(g))return b}return null}}}const gg=new mg;class ja{constructor(e){this.manager=e!==void 0?e:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ja.DEFAULT_MATERIAL_NAME="__DEFAULT";class _g extends ja{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Nl.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const f=Dr("img");function d(){g(),Nl.add(e,this),t&&t(this),a.manager.itemEnd(e)}function m(x){g(),s&&s(x),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){f.removeEventListener("load",d,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),a.manager.itemStart(e),f.src=e,f}}class vg extends ja{constructor(e){super(e)}load(e,t,n,s){const a=new nn,c=new _g(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){a.image=f,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class vc extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pa=new Nt,Fl=new W,Ol=new W;class xg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fl),Ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ol),t.updateMatrixWorld(),Pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mg extends xg{constructor(){super(new cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sg extends vc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Mg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yg extends vc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Eg extends hg{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new xn;s.setAttribute("position",new rn(t,3)),s.setAttribute("color",new rn(n,3));const a=new gc({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(e,t,n){const s=new _t,a=this.geometry.attributes.color.array;return s.set(e),s.toArray(a,0),s.toArray(a,3),s.set(t),s.toArray(a,6),s.toArray(a,9),s.set(n),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var xc={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Tg,function(e,t){var n=[],s=Object.getPrototypeOf,a=n.slice,c=n.flat?function(r){return n.flat.call(r)}:function(r){return n.concat.apply([],r)},f=n.push,d=n.indexOf,m={},g=m.toString,x=m.hasOwnProperty,S=x.toString,y=S.call(Object),b={},A=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},_=function(o){return o!=null&&o===o.window},p=e.document,F={type:!0,src:!0,nonce:!0,noModule:!0};function C(r,o,u){u=u||p;var h,v,M=u.createElement("script");if(M.text=r,o)for(h in F)v=o[h]||o.getAttribute&&o.getAttribute(h),v&&M.setAttribute(h,v);u.head.appendChild(M).parentNode.removeChild(M)}function O(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?m[g.call(r)]||"object":typeof r}var Z="3.7.1",H=/HTML$/i,l=function(r,o){return new l.fn.init(r,o)};l.fn=l.prototype={jquery:Z,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=l.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return l.each(this,r)},map:function(r){return this.pushStack(l.map(this,function(o,u){return r.call(o,u,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,u=+r+(r<0?o:0);return this.pushStack(u>=0&&u<o?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()},push:f,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var r,o,u,h,v,M,E=arguments[0]||{},N=1,D=arguments.length,V=!1;for(typeof E=="boolean"&&(V=E,E=arguments[N]||{},N++),typeof E!="object"&&!A(E)&&(E={}),N===D&&(E=this,N--);N<D;N++)if((r=arguments[N])!=null)for(o in r)h=r[o],!(o==="__proto__"||E===h)&&(V&&h&&(l.isPlainObject(h)||(v=Array.isArray(h)))?(u=E[o],v&&!Array.isArray(u)?M=[]:!v&&!l.isPlainObject(u)?M={}:M=u,v=!1,E[o]=l.extend(V,M,h)):h!==void 0&&(E[o]=h));return E},l.extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,u;return!r||g.call(r)!=="[object Object]"?!1:(o=s(r),o?(u=x.call(o,"constructor")&&o.constructor,typeof u=="function"&&S.call(u)===y):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,u){C(r,{nonce:o&&o.nonce},u)},each:function(r,o){var u,h=0;if(te(r))for(u=r.length;h<u&&o.call(r[h],h,r[h])!==!1;h++);else for(h in r)if(o.call(r[h],h,r[h])===!1)break;return r},text:function(r){var o,u="",h=0,v=r.nodeType;if(!v)for(;o=r[h++];)u+=l.text(o);return v===1||v===11?r.textContent:v===9?r.documentElement.textContent:v===3||v===4?r.nodeValue:u},makeArray:function(r,o){var u=o||[];return r!=null&&(te(Object(r))?l.merge(u,typeof r=="string"?[r]:r):f.call(u,r)),u},inArray:function(r,o,u){return o==null?-1:d.call(o,r,u)},isXMLDoc:function(r){var o=r&&r.namespaceURI,u=r&&(r.ownerDocument||r).documentElement;return!H.test(o||u&&u.nodeName||"HTML")},merge:function(r,o){for(var u=+o.length,h=0,v=r.length;h<u;h++)r[v++]=o[h];return r.length=v,r},grep:function(r,o,u){for(var h,v=[],M=0,E=r.length,N=!u;M<E;M++)h=!o(r[M],M),h!==N&&v.push(r[M]);return v},map:function(r,o,u){var h,v,M=0,E=[];if(te(r))for(h=r.length;M<h;M++)v=o(r[M],M,u),v!=null&&E.push(v);else for(M in r)v=o(r[M],M,u),v!=null&&E.push(v);return c(E)},guid:1,support:b}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){m["[object "+o+"]"]=o.toLowerCase()});function te(r){var o=!!r&&"length"in r&&r.length,u=O(r);return A(r)||_(r)?!1:u==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function P(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var w=n.pop,Y=n.sort,oe=n.splice,z="[\\x20\\t\\r\\n\\f]",ae=new RegExp("^"+z+"+|((?:^|[^\\\\])(?:\\\\.)*)"+z+"+$","g");l.contains=function(r,o){var u=o&&o.parentNode;return r===u||!!(u&&u.nodeType===1&&(r.contains?r.contains(u):r.compareDocumentPosition&&r.compareDocumentPosition(u)&16))};var le=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ve(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}l.escapeSelector=function(r){return(r+"").replace(le,ve)};var pe=p,ne=f;(function(){var r,o,u,h,v,M=ne,E,N,D,V,Q,se=l.expando,X=0,de=0,qe=Xr(),vt=Xr(),at=Xr(),Yt=Xr(),Ht=function(L,B){return L===B&&(v=!0),0},Ln="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Dn="(?:\\\\[\\da-fA-F]{1,6}"+z+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",gt="\\["+z+"*("+Dn+")(?:"+z+"*([*^$|!~]?=)"+z+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Dn+"))|)"+z+"*\\]",Ei=":("+Dn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+gt+")*)|.*)\\)|)",xt=new RegExp(z+"+","g"),Bt=new RegExp("^"+z+"*,"+z+"*"),Sr=new RegExp("^"+z+"*([>+~]|"+z+")"+z+"*"),Gs=new RegExp(z+"|>"),In=new RegExp(Ei),yr=new RegExp("^"+Dn+"$"),Un={ID:new RegExp("^#("+Dn+")"),CLASS:new RegExp("^\\.("+Dn+")"),TAG:new RegExp("^("+Dn+"|[*])"),ATTR:new RegExp("^"+gt),PSEUDO:new RegExp("^"+Ei),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+z+"*(even|odd|(([+-]|)(\\d*)n|)"+z+"*(?:([+-]|)"+z+"*(\\d+)|))"+z+"*\\)|)","i"),bool:new RegExp("^(?:"+Ln+")$","i"),needsContext:new RegExp("^"+z+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+z+"*((?:-\\d)?\\d*)"+z+"*\\)|)(?=[^-]|$)","i")},ri=/^(?:input|select|textarea|button)$/i,si=/^h\d$/i,pn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ws=/[+~]/,Xn=new RegExp("\\\\[\\da-fA-F]{1,6}"+z+"?|\\\\([^\\r\\n\\f])","g"),qn=function(L,B){var G="0x"+L.slice(1)-65536;return B||(G<0?String.fromCharCode(G+65536):String.fromCharCode(G>>10|55296,G&1023|56320))},Vc=function(){ai()},kc=jr(function(L){return L.disabled===!0&&P(L,"fieldset")},{dir:"parentNode",next:"legend"});function Gc(){try{return E.activeElement}catch{}}try{M.apply(n=a.call(pe.childNodes),pe.childNodes),n[pe.childNodes.length].nodeType}catch{M={apply:function(B,G){ne.apply(B,a.call(G))},call:function(B){ne.apply(B,a.call(arguments,1))}}}function bt(L,B,G,$){var ie,Me,Ae,Ue,we,dt,Xe,$e=B&&B.ownerDocument,pt=B?B.nodeType:9;if(G=G||[],typeof L!="string"||!L||pt!==1&&pt!==9&&pt!==11)return G;if(!$&&(ai(B),B=B||E,D)){if(pt!==11&&(we=pn.exec(L)))if(ie=we[1]){if(pt===9)if(Ae=B.getElementById(ie)){if(Ae.id===ie)return M.call(G,Ae),G}else return G;else if($e&&(Ae=$e.getElementById(ie))&&bt.contains(B,Ae)&&Ae.id===ie)return M.call(G,Ae),G}else{if(we[2])return M.apply(G,B.getElementsByTagName(L)),G;if((ie=we[3])&&B.getElementsByClassName)return M.apply(G,B.getElementsByClassName(ie)),G}if(!Yt[L+" "]&&(!V||!V.test(L))){if(Xe=L,$e=B,pt===1&&(Gs.test(L)||Sr.test(L))){for($e=Ws.test(L)&&Xs(B.parentNode)||B,($e!=B||!b.scope)&&((Ue=B.getAttribute("id"))?Ue=l.escapeSelector(Ue):B.setAttribute("id",Ue=se)),dt=Er(L),Me=dt.length;Me--;)dt[Me]=(Ue?"#"+Ue:":scope")+" "+qr(dt[Me]);Xe=dt.join(",")}try{return M.apply(G,$e.querySelectorAll(Xe)),G}catch{Yt(L,!0)}finally{Ue===se&&B.removeAttribute("id")}}}return oo(L.replace(ae,"$1"),B,G,$)}function Xr(){var L=[];function B(G,$){return L.push(G+" ")>o.cacheLength&&delete B[L.shift()],B[G+" "]=$}return B}function yn(L){return L[se]=!0,L}function Vi(L){var B=E.createElement("fieldset");try{return!!L(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function Wc(L){return function(B){return P(B,"input")&&B.type===L}}function Xc(L){return function(B){return(P(B,"input")||P(B,"button"))&&B.type===L}}function so(L){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===L:B.disabled===L:B.isDisabled===L||B.isDisabled!==!L&&kc(B)===L:B.disabled===L:"label"in B?B.disabled===L:!1}}function Ti(L){return yn(function(B){return B=+B,yn(function(G,$){for(var ie,Me=L([],G.length,B),Ae=Me.length;Ae--;)G[ie=Me[Ae]]&&(G[ie]=!($[ie]=G[ie]))})})}function Xs(L){return L&&typeof L.getElementsByTagName<"u"&&L}function ai(L){var B,G=L?L.ownerDocument||L:pe;return G==E||G.nodeType!==9||!G.documentElement||(E=G,N=E.documentElement,D=!l.isXMLDoc(E),Q=N.matches||N.webkitMatchesSelector||N.msMatchesSelector,N.msMatchesSelector&&pe!=E&&(B=E.defaultView)&&B.top!==B&&B.addEventListener("unload",Vc),b.getById=Vi(function($){return N.appendChild($).id=l.expando,!E.getElementsByName||!E.getElementsByName(l.expando).length}),b.disconnectedMatch=Vi(function($){return Q.call($,"*")}),b.scope=Vi(function(){return E.querySelectorAll(":scope")}),b.cssHas=Vi(function(){try{return E.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),b.getById?(o.filter.ID=function($){var ie=$.replace(Xn,qn);return function(Me){return Me.getAttribute("id")===ie}},o.find.ID=function($,ie){if(typeof ie.getElementById<"u"&&D){var Me=ie.getElementById($);return Me?[Me]:[]}}):(o.filter.ID=function($){var ie=$.replace(Xn,qn);return function(Me){var Ae=typeof Me.getAttributeNode<"u"&&Me.getAttributeNode("id");return Ae&&Ae.value===ie}},o.find.ID=function($,ie){if(typeof ie.getElementById<"u"&&D){var Me,Ae,Ue,we=ie.getElementById($);if(we){if(Me=we.getAttributeNode("id"),Me&&Me.value===$)return[we];for(Ue=ie.getElementsByName($),Ae=0;we=Ue[Ae++];)if(Me=we.getAttributeNode("id"),Me&&Me.value===$)return[we]}return[]}}),o.find.TAG=function($,ie){return typeof ie.getElementsByTagName<"u"?ie.getElementsByTagName($):ie.querySelectorAll($)},o.find.CLASS=function($,ie){if(typeof ie.getElementsByClassName<"u"&&D)return ie.getElementsByClassName($)},V=[],Vi(function($){var ie;N.appendChild($).innerHTML="<a id='"+se+"' href='' disabled='disabled'></a><select id='"+se+"-\r\\' disabled='disabled'><option selected=''></option></select>",$.querySelectorAll("[selected]").length||V.push("\\["+z+"*(?:value|"+Ln+")"),$.querySelectorAll("[id~="+se+"-]").length||V.push("~="),$.querySelectorAll("a#"+se+"+*").length||V.push(".#.+[+~]"),$.querySelectorAll(":checked").length||V.push(":checked"),ie=E.createElement("input"),ie.setAttribute("type","hidden"),$.appendChild(ie).setAttribute("name","D"),N.appendChild($).disabled=!0,$.querySelectorAll(":disabled").length!==2&&V.push(":enabled",":disabled"),ie=E.createElement("input"),ie.setAttribute("name",""),$.appendChild(ie),$.querySelectorAll("[name='']").length||V.push("\\["+z+"*name"+z+"*="+z+`*(?:''|"")`)}),b.cssHas||V.push(":has"),V=V.length&&new RegExp(V.join("|")),Ht=function($,ie){if($===ie)return v=!0,0;var Me=!$.compareDocumentPosition-!ie.compareDocumentPosition;return Me||(Me=($.ownerDocument||$)==(ie.ownerDocument||ie)?$.compareDocumentPosition(ie):1,Me&1||!b.sortDetached&&ie.compareDocumentPosition($)===Me?$===E||$.ownerDocument==pe&&bt.contains(pe,$)?-1:ie===E||ie.ownerDocument==pe&&bt.contains(pe,ie)?1:h?d.call(h,$)-d.call(h,ie):0:Me&4?-1:1)}),E}bt.matches=function(L,B){return bt(L,null,null,B)},bt.matchesSelector=function(L,B){if(ai(L),D&&!Yt[B+" "]&&(!V||!V.test(B)))try{var G=Q.call(L,B);if(G||b.disconnectedMatch||L.document&&L.document.nodeType!==11)return G}catch{Yt(B,!0)}return bt(B,E,null,[L]).length>0},bt.contains=function(L,B){return(L.ownerDocument||L)!=E&&ai(L),l.contains(L,B)},bt.attr=function(L,B){(L.ownerDocument||L)!=E&&ai(L);var G=o.attrHandle[B.toLowerCase()],$=G&&x.call(o.attrHandle,B.toLowerCase())?G(L,B,!D):void 0;return $!==void 0?$:L.getAttribute(B)},bt.error=function(L){throw new Error("Syntax error, unrecognized expression: "+L)},l.uniqueSort=function(L){var B,G=[],$=0,ie=0;if(v=!b.sortStable,h=!b.sortStable&&a.call(L,0),Y.call(L,Ht),v){for(;B=L[ie++];)B===L[ie]&&($=G.push(ie));for(;$--;)oe.call(L,G[$],1)}return h=null,L},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},o=l.expr={cacheLength:50,createPseudo:yn,match:Un,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(L){return L[1]=L[1].replace(Xn,qn),L[3]=(L[3]||L[4]||L[5]||"").replace(Xn,qn),L[2]==="~="&&(L[3]=" "+L[3]+" "),L.slice(0,4)},CHILD:function(L){return L[1]=L[1].toLowerCase(),L[1].slice(0,3)==="nth"?(L[3]||bt.error(L[0]),L[4]=+(L[4]?L[5]+(L[6]||1):2*(L[3]==="even"||L[3]==="odd")),L[5]=+(L[7]+L[8]||L[3]==="odd")):L[3]&&bt.error(L[0]),L},PSEUDO:function(L){var B,G=!L[6]&&L[2];return Un.CHILD.test(L[0])?null:(L[3]?L[2]=L[4]||L[5]||"":G&&In.test(G)&&(B=Er(G,!0))&&(B=G.indexOf(")",G.length-B)-G.length)&&(L[0]=L[0].slice(0,B),L[2]=G.slice(0,B)),L.slice(0,3))}},filter:{TAG:function(L){var B=L.replace(Xn,qn).toLowerCase();return L==="*"?function(){return!0}:function(G){return P(G,B)}},CLASS:function(L){var B=qe[L+" "];return B||(B=new RegExp("(^|"+z+")"+L+"("+z+"|$)"))&&qe(L,function(G){return B.test(typeof G.className=="string"&&G.className||typeof G.getAttribute<"u"&&G.getAttribute("class")||"")})},ATTR:function(L,B,G){return function($){var ie=bt.attr($,L);return ie==null?B==="!=":B?(ie+="",B==="="?ie===G:B==="!="?ie!==G:B==="^="?G&&ie.indexOf(G)===0:B==="*="?G&&ie.indexOf(G)>-1:B==="$="?G&&ie.slice(-G.length)===G:B==="~="?(" "+ie.replace(xt," ")+" ").indexOf(G)>-1:B==="|="?ie===G||ie.slice(0,G.length+1)===G+"-":!1):!0}},CHILD:function(L,B,G,$,ie){var Me=L.slice(0,3)!=="nth",Ae=L.slice(-4)!=="last",Ue=B==="of-type";return $===1&&ie===0?function(we){return!!we.parentNode}:function(we,dt,Xe){var $e,pt,Ve,Pt,sn,$t=Me!==Ae?"nextSibling":"previousSibling",mn=we.parentNode,Nn=Ue&&we.nodeName.toLowerCase(),ki=!Xe&&!Ue,en=!1;if(mn){if(Me){for(;$t;){for(Ve=we;Ve=Ve[$t];)if(Ue?P(Ve,Nn):Ve.nodeType===1)return!1;sn=$t=L==="only"&&!sn&&"nextSibling"}return!0}if(sn=[Ae?mn.firstChild:mn.lastChild],Ae&&ki){for(pt=mn[se]||(mn[se]={}),$e=pt[L]||[],Pt=$e[0]===X&&$e[1],en=Pt&&$e[2],Ve=Pt&&mn.childNodes[Pt];Ve=++Pt&&Ve&&Ve[$t]||(en=Pt=0)||sn.pop();)if(Ve.nodeType===1&&++en&&Ve===we){pt[L]=[X,Pt,en];break}}else if(ki&&(pt=we[se]||(we[se]={}),$e=pt[L]||[],Pt=$e[0]===X&&$e[1],en=Pt),en===!1)for(;(Ve=++Pt&&Ve&&Ve[$t]||(en=Pt=0)||sn.pop())&&!((Ue?P(Ve,Nn):Ve.nodeType===1)&&++en&&(ki&&(pt=Ve[se]||(Ve[se]={}),pt[L]=[X,en]),Ve===we)););return en-=ie,en===$||en%$===0&&en/$>=0}}},PSEUDO:function(L,B){var G,$=o.pseudos[L]||o.setFilters[L.toLowerCase()]||bt.error("unsupported pseudo: "+L);return $[se]?$(B):$.length>1?(G=[L,L,"",B],o.setFilters.hasOwnProperty(L.toLowerCase())?yn(function(ie,Me){for(var Ae,Ue=$(ie,B),we=Ue.length;we--;)Ae=d.call(ie,Ue[we]),ie[Ae]=!(Me[Ae]=Ue[we])}):function(ie){return $(ie,0,G)}):$}},pseudos:{not:yn(function(L){var B=[],G=[],$=$s(L.replace(ae,"$1"));return $[se]?yn(function(ie,Me,Ae,Ue){for(var we,dt=$(ie,null,Ue,[]),Xe=ie.length;Xe--;)(we=dt[Xe])&&(ie[Xe]=!(Me[Xe]=we))}):function(ie,Me,Ae){return B[0]=ie,$(B,null,Ae,G),B[0]=null,!G.pop()}}),has:yn(function(L){return function(B){return bt(L,B).length>0}}),contains:yn(function(L){return L=L.replace(Xn,qn),function(B){return(B.textContent||l.text(B)).indexOf(L)>-1}}),lang:yn(function(L){return yr.test(L||"")||bt.error("unsupported lang: "+L),L=L.replace(Xn,qn).toLowerCase(),function(B){var G;do if(G=D?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return G=G.toLowerCase(),G===L||G.indexOf(L+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(L){var B=e.location&&e.location.hash;return B&&B.slice(1)===L.id},root:function(L){return L===N},focus:function(L){return L===Gc()&&E.hasFocus()&&!!(L.type||L.href||~L.tabIndex)},enabled:so(!1),disabled:so(!0),checked:function(L){return P(L,"input")&&!!L.checked||P(L,"option")&&!!L.selected},selected:function(L){return L.parentNode&&L.parentNode.selectedIndex,L.selected===!0},empty:function(L){for(L=L.firstChild;L;L=L.nextSibling)if(L.nodeType<6)return!1;return!0},parent:function(L){return!o.pseudos.empty(L)},header:function(L){return si.test(L.nodeName)},input:function(L){return ri.test(L.nodeName)},button:function(L){return P(L,"input")&&L.type==="button"||P(L,"button")},text:function(L){var B;return P(L,"input")&&L.type==="text"&&((B=L.getAttribute("type"))==null||B.toLowerCase()==="text")},first:Ti(function(){return[0]}),last:Ti(function(L,B){return[B-1]}),eq:Ti(function(L,B,G){return[G<0?G+B:G]}),even:Ti(function(L,B){for(var G=0;G<B;G+=2)L.push(G);return L}),odd:Ti(function(L,B){for(var G=1;G<B;G+=2)L.push(G);return L}),lt:Ti(function(L,B,G){var $;for(G<0?$=G+B:G>B?$=B:$=G;--$>=0;)L.push($);return L}),gt:Ti(function(L,B,G){for(var $=G<0?G+B:G;++$<B;)L.push($);return L})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=Wc(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=Xc(r);function ao(){}ao.prototype=o.filters=o.pseudos,o.setFilters=new ao;function Er(L,B){var G,$,ie,Me,Ae,Ue,we,dt=vt[L+" "];if(dt)return B?0:dt.slice(0);for(Ae=L,Ue=[],we=o.preFilter;Ae;){(!G||($=Bt.exec(Ae)))&&($&&(Ae=Ae.slice($[0].length)||Ae),Ue.push(ie=[])),G=!1,($=Sr.exec(Ae))&&(G=$.shift(),ie.push({value:G,type:$[0].replace(ae," ")}),Ae=Ae.slice(G.length));for(Me in o.filter)($=Un[Me].exec(Ae))&&(!we[Me]||($=we[Me]($)))&&(G=$.shift(),ie.push({value:G,type:Me,matches:$}),Ae=Ae.slice(G.length));if(!G)break}return B?Ae.length:Ae?bt.error(L):vt(L,Ue).slice(0)}function qr(L){for(var B=0,G=L.length,$="";B<G;B++)$+=L[B].value;return $}function jr(L,B,G){var $=B.dir,ie=B.next,Me=ie||$,Ae=G&&Me==="parentNode",Ue=de++;return B.first?function(we,dt,Xe){for(;we=we[$];)if(we.nodeType===1||Ae)return L(we,dt,Xe);return!1}:function(we,dt,Xe){var $e,pt,Ve=[X,Ue];if(Xe){for(;we=we[$];)if((we.nodeType===1||Ae)&&L(we,dt,Xe))return!0}else for(;we=we[$];)if(we.nodeType===1||Ae)if(pt=we[se]||(we[se]={}),ie&&P(we,ie))we=we[$]||we;else{if(($e=pt[Me])&&$e[0]===X&&$e[1]===Ue)return Ve[2]=$e[2];if(pt[Me]=Ve,Ve[2]=L(we,dt,Xe))return!0}return!1}}function qs(L){return L.length>1?function(B,G,$){for(var ie=L.length;ie--;)if(!L[ie](B,G,$))return!1;return!0}:L[0]}function qc(L,B,G){for(var $=0,ie=B.length;$<ie;$++)bt(L,B[$],G);return G}function Yr(L,B,G,$,ie){for(var Me,Ae=[],Ue=0,we=L.length,dt=B!=null;Ue<we;Ue++)(Me=L[Ue])&&(!G||G(Me,$,ie))&&(Ae.push(Me),dt&&B.push(Ue));return Ae}function js(L,B,G,$,ie,Me){return $&&!$[se]&&($=js($)),ie&&!ie[se]&&(ie=js(ie,Me)),yn(function(Ae,Ue,we,dt){var Xe,$e,pt,Ve,Pt=[],sn=[],$t=Ue.length,mn=Ae||qc(B||"*",we.nodeType?[we]:we,[]),Nn=L&&(Ae||!B)?Yr(mn,Pt,L,we,dt):mn;if(G?(Ve=ie||(Ae?L:$t||$)?[]:Ue,G(Nn,Ve,we,dt)):Ve=Nn,$)for(Xe=Yr(Ve,sn),$(Xe,[],we,dt),$e=Xe.length;$e--;)(pt=Xe[$e])&&(Ve[sn[$e]]=!(Nn[sn[$e]]=pt));if(Ae){if(ie||L){if(ie){for(Xe=[],$e=Ve.length;$e--;)(pt=Ve[$e])&&Xe.push(Nn[$e]=pt);ie(null,Ve=[],Xe,dt)}for($e=Ve.length;$e--;)(pt=Ve[$e])&&(Xe=ie?d.call(Ae,pt):Pt[$e])>-1&&(Ae[Xe]=!(Ue[Xe]=pt))}}else Ve=Yr(Ve===Ue?Ve.splice($t,Ve.length):Ve),ie?ie(null,Ue,Ve,dt):M.apply(Ue,Ve)})}function Ys(L){for(var B,G,$,ie=L.length,Me=o.relative[L[0].type],Ae=Me||o.relative[" "],Ue=Me?1:0,we=jr(function($e){return $e===B},Ae,!0),dt=jr(function($e){return d.call(B,$e)>-1},Ae,!0),Xe=[function($e,pt,Ve){var Pt=!Me&&(Ve||pt!=u)||((B=pt).nodeType?we($e,pt,Ve):dt($e,pt,Ve));return B=null,Pt}];Ue<ie;Ue++)if(G=o.relative[L[Ue].type])Xe=[jr(qs(Xe),G)];else{if(G=o.filter[L[Ue].type].apply(null,L[Ue].matches),G[se]){for($=++Ue;$<ie&&!o.relative[L[$].type];$++);return js(Ue>1&&qs(Xe),Ue>1&&qr(L.slice(0,Ue-1).concat({value:L[Ue-2].type===" "?"*":""})).replace(ae,"$1"),G,Ue<$&&Ys(L.slice(Ue,$)),$<ie&&Ys(L=L.slice($)),$<ie&&qr(L))}Xe.push(G)}return qs(Xe)}function jc(L,B){var G=B.length>0,$=L.length>0,ie=function(Me,Ae,Ue,we,dt){var Xe,$e,pt,Ve=0,Pt="0",sn=Me&&[],$t=[],mn=u,Nn=Me||$&&o.find.TAG("*",dt),ki=X+=mn==null?1:Math.random()||.1,en=Nn.length;for(dt&&(u=Ae==E||Ae||dt);Pt!==en&&(Xe=Nn[Pt])!=null;Pt++){if($&&Xe){for($e=0,!Ae&&Xe.ownerDocument!=E&&(ai(Xe),Ue=!D);pt=L[$e++];)if(pt(Xe,Ae||E,Ue)){M.call(we,Xe);break}dt&&(X=ki)}G&&((Xe=!pt&&Xe)&&Ve--,Me&&sn.push(Xe))}if(Ve+=Pt,G&&Pt!==Ve){for($e=0;pt=B[$e++];)pt(sn,$t,Ae,Ue);if(Me){if(Ve>0)for(;Pt--;)sn[Pt]||$t[Pt]||($t[Pt]=w.call(we));$t=Yr($t)}M.apply(we,$t),dt&&!Me&&$t.length>0&&Ve+B.length>1&&l.uniqueSort(we)}return dt&&(X=ki,u=mn),sn};return G?yn(ie):ie}function $s(L,B){var G,$=[],ie=[],Me=at[L+" "];if(!Me){for(B||(B=Er(L)),G=B.length;G--;)Me=Ys(B[G]),Me[se]?$.push(Me):ie.push(Me);Me=at(L,jc(ie,$)),Me.selector=L}return Me}function oo(L,B,G,$){var ie,Me,Ae,Ue,we,dt=typeof L=="function"&&L,Xe=!$&&Er(L=dt.selector||L);if(G=G||[],Xe.length===1){if(Me=Xe[0]=Xe[0].slice(0),Me.length>2&&(Ae=Me[0]).type==="ID"&&B.nodeType===9&&D&&o.relative[Me[1].type]){if(B=(o.find.ID(Ae.matches[0].replace(Xn,qn),B)||[])[0],B)dt&&(B=B.parentNode);else return G;L=L.slice(Me.shift().value.length)}for(ie=Un.needsContext.test(L)?0:Me.length;ie--&&(Ae=Me[ie],!o.relative[Ue=Ae.type]);)if((we=o.find[Ue])&&($=we(Ae.matches[0].replace(Xn,qn),Ws.test(Me[0].type)&&Xs(B.parentNode)||B))){if(Me.splice(ie,1),L=$.length&&qr(Me),!L)return M.apply(G,$),G;break}}return(dt||$s(L,Xe))($,B,!D,G,!B||Ws.test(L)&&Xs(B.parentNode)||B),G}b.sortStable=se.split("").sort(Ht).join("")===se,ai(),b.sortDetached=Vi(function(L){return L.compareDocumentPosition(E.createElement("fieldset"))&1}),l.find=bt,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,bt.compile=$s,bt.select=oo,bt.setDocument=ai,bt.tokenize=Er,bt.escape=l.escapeSelector,bt.getText=l.text,bt.isXML=l.isXMLDoc,bt.selectors=l.expr,bt.support=l.support,bt.uniqueSort=l.uniqueSort})();var ge=function(r,o,u){for(var h=[],v=u!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(v&&l(r).is(u))break;h.push(r)}return h},_e=function(r,o){for(var u=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&u.push(r);return u},Be=l.expr.match.needsContext,ct=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function yt(r,o,u){return A(o)?l.grep(r,function(h,v){return!!o.call(h,v,h)!==u}):o.nodeType?l.grep(r,function(h){return h===o!==u}):typeof o!="string"?l.grep(r,function(h){return d.call(o,h)>-1!==u}):l.filter(o,r,u)}l.filter=function(r,o,u){var h=o[0];return u&&(r=":not("+r+")"),o.length===1&&h.nodeType===1?l.find.matchesSelector(h,r)?[h]:[]:l.find.matches(r,l.grep(o,function(v){return v.nodeType===1}))},l.fn.extend({find:function(r){var o,u,h=this.length,v=this;if(typeof r!="string")return this.pushStack(l(r).filter(function(){for(o=0;o<h;o++)if(l.contains(v[o],this))return!0}));for(u=this.pushStack([]),o=0;o<h;o++)l.find(r,v[o],u);return h>1?l.uniqueSort(u):u},filter:function(r){return this.pushStack(yt(this,r||[],!1))},not:function(r){return this.pushStack(yt(this,r||[],!0))},is:function(r){return!!yt(this,typeof r=="string"&&Be.test(r)?l(r):r||[],!1).length}});var re,xe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Pe=l.fn.init=function(r,o,u){var h,v;if(!r)return this;if(u=u||re,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?h=[null,r,null]:h=xe.exec(r),h&&(h[1]||!o))if(h[1]){if(o=o instanceof l?o[0]:o,l.merge(this,l.parseHTML(h[1],o&&o.nodeType?o.ownerDocument||o:p,!0)),ct.test(h[1])&&l.isPlainObject(o))for(h in o)A(this[h])?this[h](o[h]):this.attr(h,o[h]);return this}else return v=p.getElementById(h[2]),v&&(this[0]=v,this.length=1),this;else return!o||o.jquery?(o||u).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(A(r))return u.ready!==void 0?u.ready(r):r(l)}return l.makeArray(r,this)};Pe.prototype=l.fn,re=l(p);var Ce=/^(?:parents|prev(?:Until|All))/,it={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(r){var o=l(r,this),u=o.length;return this.filter(function(){for(var h=0;h<u;h++)if(l.contains(this,o[h]))return!0})},closest:function(r,o){var u,h=0,v=this.length,M=[],E=typeof r!="string"&&l(r);if(!Be.test(r)){for(;h<v;h++)for(u=this[h];u&&u!==o;u=u.parentNode)if(u.nodeType<11&&(E?E.index(u)>-1:u.nodeType===1&&l.find.matchesSelector(u,r))){M.push(u);break}}return this.pushStack(M.length>1?l.uniqueSort(M):M)},index:function(r){return r?typeof r=="string"?d.call(l(r),this[0]):d.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function rt(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}l.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return ge(r,"parentNode")},parentsUntil:function(r,o,u){return ge(r,"parentNode",u)},next:function(r){return rt(r,"nextSibling")},prev:function(r){return rt(r,"previousSibling")},nextAll:function(r){return ge(r,"nextSibling")},prevAll:function(r){return ge(r,"previousSibling")},nextUntil:function(r,o,u){return ge(r,"nextSibling",u)},prevUntil:function(r,o,u){return ge(r,"previousSibling",u)},siblings:function(r){return _e((r.parentNode||{}).firstChild,r)},children:function(r){return _e(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(P(r,"template")&&(r=r.content||r),l.merge([],r.childNodes))}},function(r,o){l.fn[r]=function(u,h){var v=l.map(this,o,u);return r.slice(-5)!=="Until"&&(h=u),h&&typeof h=="string"&&(v=l.filter(h,v)),this.length>1&&(it[r]||l.uniqueSort(v),Ce.test(r)&&v.reverse()),this.pushStack(v)}});var Ke=/[^\x20\t\r\n\f]+/g;function q(r){var o={};return l.each(r.match(Ke)||[],function(u,h){o[h]=!0}),o}l.Callbacks=function(r){r=typeof r=="string"?q(r):l.extend({},r);var o,u,h,v,M=[],E=[],N=-1,D=function(){for(v=v||r.once,h=o=!0;E.length;N=-1)for(u=E.shift();++N<M.length;)M[N].apply(u[0],u[1])===!1&&r.stopOnFalse&&(N=M.length,u=!1);r.memory||(u=!1),o=!1,v&&(u?M=[]:M="")},V={add:function(){return M&&(u&&!o&&(N=M.length-1,E.push(u)),function Q(se){l.each(se,function(X,de){A(de)?(!r.unique||!V.has(de))&&M.push(de):de&&de.length&&O(de)!=="string"&&Q(de)})}(arguments),u&&!o&&D()),this},remove:function(){return l.each(arguments,function(Q,se){for(var X;(X=l.inArray(se,M,X))>-1;)M.splice(X,1),X<=N&&N--}),this},has:function(Q){return Q?l.inArray(Q,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return v=E=[],M=u="",this},disabled:function(){return!M},lock:function(){return v=E=[],!u&&!o&&(M=u=""),this},locked:function(){return!!v},fireWith:function(Q,se){return v||(se=se||[],se=[Q,se.slice?se.slice():se],E.push(se),o||D()),this},fire:function(){return V.fireWith(this,arguments),this},fired:function(){return!!h}};return V};function et(r){return r}function Ge(r){throw r}function Ft(r,o,u,h){var v;try{r&&A(v=r.promise)?v.call(r).done(o).fail(u):r&&A(v=r.then)?v.call(r,o,u):o.apply(void 0,[r].slice(h))}catch(M){u.apply(void 0,[M])}}l.extend({Deferred:function(r){var o=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],u="pending",h={state:function(){return u},always:function(){return v.done(arguments).fail(arguments),this},catch:function(M){return h.then(null,M)},pipe:function(){var M=arguments;return l.Deferred(function(E){l.each(o,function(N,D){var V=A(M[D[4]])&&M[D[4]];v[D[1]](function(){var Q=V&&V.apply(this,arguments);Q&&A(Q.promise)?Q.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[D[0]+"With"](this,V?[Q]:arguments)})}),M=null}).promise()},then:function(M,E,N){var D=0;function V(Q,se,X,de){return function(){var qe=this,vt=arguments,at=function(){var Ht,Ln;if(!(Q<D)){if(Ht=X.apply(qe,vt),Ht===se.promise())throw new TypeError("Thenable self-resolution");Ln=Ht&&(typeof Ht=="object"||typeof Ht=="function")&&Ht.then,A(Ln)?de?Ln.call(Ht,V(D,se,et,de),V(D,se,Ge,de)):(D++,Ln.call(Ht,V(D,se,et,de),V(D,se,Ge,de),V(D,se,et,se.notifyWith))):(X!==et&&(qe=void 0,vt=[Ht]),(de||se.resolveWith)(qe,vt))}},Yt=de?at:function(){try{at()}catch(Ht){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(Ht,Yt.error),Q+1>=D&&(X!==Ge&&(qe=void 0,vt=[Ht]),se.rejectWith(qe,vt))}};Q?Yt():(l.Deferred.getErrorHook?Yt.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Yt.error=l.Deferred.getStackHook()),e.setTimeout(Yt))}}return l.Deferred(function(Q){o[0][3].add(V(0,Q,A(N)?N:et,Q.notifyWith)),o[1][3].add(V(0,Q,A(M)?M:et)),o[2][3].add(V(0,Q,A(E)?E:Ge))}).promise()},promise:function(M){return M!=null?l.extend(M,h):h}},v={};return l.each(o,function(M,E){var N=E[2],D=E[5];h[E[1]]=N.add,D&&N.add(function(){u=D},o[3-M][2].disable,o[3-M][3].disable,o[0][2].lock,o[0][3].lock),N.add(E[3].fire),v[E[0]]=function(){return v[E[0]+"With"](this===v?void 0:this,arguments),this},v[E[0]+"With"]=N.fireWith}),h.promise(v),r&&r.call(v,v),v},when:function(r){var o=arguments.length,u=o,h=Array(u),v=a.call(arguments),M=l.Deferred(),E=function(N){return function(D){h[N]=this,v[N]=arguments.length>1?a.call(arguments):D,--o||M.resolveWith(h,v)}};if(o<=1&&(Ft(r,M.done(E(u)).resolve,M.reject,!o),M.state()==="pending"||A(v[u]&&v[u].then)))return M.then();for(;u--;)Ft(v[u],E(u),M.reject);return M.promise()}});var je=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&je.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},l.readyException=function(r){e.setTimeout(function(){throw r})};var Mt=l.Deferred();l.fn.ready=function(r){return Mt.then(r).catch(function(o){l.readyException(o)}),this},l.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(r!==!0&&--l.readyWait>0)&&Mt.resolveWith(p,[l]))}}),l.ready.then=Mt.then;function I(){p.removeEventListener("DOMContentLoaded",I),e.removeEventListener("load",I),l.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?e.setTimeout(l.ready):(p.addEventListener("DOMContentLoaded",I),e.addEventListener("load",I));var T=function(r,o,u,h,v,M,E){var N=0,D=r.length,V=u==null;if(O(u)==="object"){v=!0;for(N in u)T(r,o,N,u[N],!0,M,E)}else if(h!==void 0&&(v=!0,A(h)||(E=!0),V&&(E?(o.call(r,h),o=null):(V=o,o=function(Q,se,X){return V.call(l(Q),X)})),o))for(;N<D;N++)o(r[N],u,E?h:h.call(r[N],N,o(r[N],u)));return v?r:V?o.call(r):D?o(r[0],u):M},ee=/^-ms-/,ue=/-([a-z])/g;function he(r,o){return o.toUpperCase()}function fe(r){return r.replace(ee,"ms-").replace(ue,he)}var He=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function me(){this.expando=l.expando+me.uid++}me.uid=1,me.prototype={cache:function(r){var o=r[this.expando];return o||(o={},He(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,u){var h,v=this.cache(r);if(typeof o=="string")v[fe(o)]=u;else for(h in o)v[fe(h)]=o[h];return v},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][fe(o)]},access:function(r,o,u){return o===void 0||o&&typeof o=="string"&&u===void 0?this.get(r,o):(this.set(r,o,u),u!==void 0?u:o)},remove:function(r,o){var u,h=r[this.expando];if(h!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(fe):(o=fe(o),o=o in h?[o]:o.match(Ke)||[]),u=o.length;u--;)delete h[o[u]];(o===void 0||l.isEmptyObject(h))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!l.isEmptyObject(o)}};var ce=new me,Le=new me,Ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Re=/[A-Z]/g;function Ze(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Ee.test(r)?JSON.parse(r):r}function De(r,o,u){var h;if(u===void 0&&r.nodeType===1)if(h="data-"+o.replace(Re,"-$&").toLowerCase(),u=r.getAttribute(h),typeof u=="string"){try{u=Ze(u)}catch{}Le.set(r,o,u)}else u=void 0;return u}l.extend({hasData:function(r){return Le.hasData(r)||ce.hasData(r)},data:function(r,o,u){return Le.access(r,o,u)},removeData:function(r,o){Le.remove(r,o)},_data:function(r,o,u){return ce.access(r,o,u)},_removeData:function(r,o){ce.remove(r,o)}}),l.fn.extend({data:function(r,o){var u,h,v,M=this[0],E=M&&M.attributes;if(r===void 0){if(this.length&&(v=Le.get(M),M.nodeType===1&&!ce.get(M,"hasDataAttrs"))){for(u=E.length;u--;)E[u]&&(h=E[u].name,h.indexOf("data-")===0&&(h=fe(h.slice(5)),De(M,h,v[h])));ce.set(M,"hasDataAttrs",!0)}return v}return typeof r=="object"?this.each(function(){Le.set(this,r)}):T(this,function(N){var D;if(M&&N===void 0)return D=Le.get(M,r),D!==void 0||(D=De(M,r),D!==void 0)?D:void 0;this.each(function(){Le.set(this,r,N)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){Le.remove(this,r)})}}),l.extend({queue:function(r,o,u){var h;if(r)return o=(o||"fx")+"queue",h=ce.get(r,o),u&&(!h||Array.isArray(u)?h=ce.access(r,o,l.makeArray(u)):h.push(u)),h||[]},dequeue:function(r,o){o=o||"fx";var u=l.queue(r,o),h=u.length,v=u.shift(),M=l._queueHooks(r,o),E=function(){l.dequeue(r,o)};v==="inprogress"&&(v=u.shift(),h--),v&&(o==="fx"&&u.unshift("inprogress"),delete M.stop,v.call(r,E,M)),!h&&M&&M.empty.fire()},_queueHooks:function(r,o){var u=o+"queueHooks";return ce.get(r,u)||ce.access(r,u,{empty:l.Callbacks("once memory").add(function(){ce.remove(r,[o+"queue",u])})})}}),l.fn.extend({queue:function(r,o){var u=2;return typeof r!="string"&&(o=r,r="fx",u--),arguments.length<u?l.queue(this[0],r):o===void 0?this:this.each(function(){var h=l.queue(this,r,o);l._queueHooks(this,r),r==="fx"&&h[0]!=="inprogress"&&l.dequeue(this,r)})},dequeue:function(r){return this.each(function(){l.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var u,h=1,v=l.Deferred(),M=this,E=this.length,N=function(){--h||v.resolveWith(M,[M])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";E--;)u=ce.get(M[E],r+"queueHooks"),u&&u.empty&&(h++,u.empty.add(N));return N(),v.promise(o)}});var Ne=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,st=new RegExp("^(?:([+-])=|)("+Ne+")([a-z%]*)$","i"),tt=["Top","Right","Bottom","Left"],ft=p.documentElement,ht=function(r){return l.contains(r.ownerDocument,r)},Rt={composed:!0};ft.getRootNode&&(ht=function(r){return l.contains(r.ownerDocument,r)||r.getRootNode(Rt)===r.ownerDocument});var Fe=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&ht(r)&&l.css(r,"display")==="none"};function U(r,o,u,h){var v,M,E=20,N=h?function(){return h.cur()}:function(){return l.css(r,o,"")},D=N(),V=u&&u[3]||(l.cssNumber[o]?"":"px"),Q=r.nodeType&&(l.cssNumber[o]||V!=="px"&&+D)&&st.exec(l.css(r,o));if(Q&&Q[3]!==V){for(D=D/2,V=V||Q[3],Q=+D||1;E--;)l.style(r,o,Q+V),(1-M)*(1-(M=N()/D||.5))<=0&&(E=0),Q=Q/M;Q=Q*2,l.style(r,o,Q+V),u=u||[]}return u&&(Q=+Q||+D||0,v=u[1]?Q+(u[1]+1)*u[2]:+u[2],h&&(h.unit=V,h.start=Q,h.end=v)),v}var ye={};function Se(r){var o,u=r.ownerDocument,h=r.nodeName,v=ye[h];return v||(o=u.body.appendChild(u.createElement(h)),v=l.css(o,"display"),o.parentNode.removeChild(o),v==="none"&&(v="block"),ye[h]=v,v)}function Ie(r,o){for(var u,h,v=[],M=0,E=r.length;M<E;M++)h=r[M],h.style&&(u=h.style.display,o?(u==="none"&&(v[M]=ce.get(h,"display")||null,v[M]||(h.style.display="")),h.style.display===""&&Fe(h)&&(v[M]=Se(h))):u!=="none"&&(v[M]="none",ce.set(h,"display",u)));for(M=0;M<E;M++)v[M]!=null&&(r[M].style.display=v[M]);return r}l.fn.extend({show:function(){return Ie(this,!0)},hide:function(){return Ie(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Fe(this)?l(this).show():l(this).hide()})}});var ze=/^(?:checkbox|radio)$/i,Et=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ct=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=p.createDocumentFragment(),o=r.appendChild(p.createElement("div")),u=p.createElement("input");u.setAttribute("type","radio"),u.setAttribute("checked","checked"),u.setAttribute("name","t"),o.appendChild(u),b.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",b.option=!!o.lastChild})();var mt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};mt.tbody=mt.tfoot=mt.colgroup=mt.caption=mt.thead,mt.th=mt.td,b.option||(mt.optgroup=mt.option=[1,"<select multiple='multiple'>","</select>"]);function St(r,o){var u;return typeof r.getElementsByTagName<"u"?u=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?u=r.querySelectorAll(o||"*"):u=[],o===void 0||o&&P(r,o)?l.merge([r],u):u}function Tt(r,o){for(var u=0,h=r.length;u<h;u++)ce.set(r[u],"globalEval",!o||ce.get(o[u],"globalEval"))}var hn=/<|&#?\w+;/;function cn(r,o,u,h,v){for(var M,E,N,D,V,Q,se=o.createDocumentFragment(),X=[],de=0,qe=r.length;de<qe;de++)if(M=r[de],M||M===0)if(O(M)==="object")l.merge(X,M.nodeType?[M]:M);else if(!hn.test(M))X.push(o.createTextNode(M));else{for(E=E||se.appendChild(o.createElement("div")),N=(Et.exec(M)||["",""])[1].toLowerCase(),D=mt[N]||mt._default,E.innerHTML=D[1]+l.htmlPrefilter(M)+D[2],Q=D[0];Q--;)E=E.lastChild;l.merge(X,E.childNodes),E=se.firstChild,E.textContent=""}for(se.textContent="",de=0;M=X[de++];){if(h&&l.inArray(M,h)>-1){v&&v.push(M);continue}if(V=ht(M),E=St(se.appendChild(M),"script"),V&&Tt(E),u)for(Q=0;M=E[Q++];)Ct.test(M.type||"")&&u.push(M)}return se}var Cn=/^([^.]*)(?:\.(.+)|)/;function kn(){return!0}function Gn(){return!1}function gr(r,o,u,h,v,M){var E,N;if(typeof o=="object"){typeof u!="string"&&(h=h||u,u=void 0);for(N in o)gr(r,N,u,h,o[N],M);return r}if(h==null&&v==null?(v=u,h=u=void 0):v==null&&(typeof u=="string"?(v=h,h=void 0):(v=h,h=u,u=void 0)),v===!1)v=Gn;else if(!v)return r;return M===1&&(E=v,v=function(D){return l().off(D),E.apply(this,arguments)},v.guid=E.guid||(E.guid=l.guid++)),r.each(function(){l.event.add(this,o,v,h,u)})}l.event={global:{},add:function(r,o,u,h,v){var M,E,N,D,V,Q,se,X,de,qe,vt,at=ce.get(r);if(He(r))for(u.handler&&(M=u,u=M.handler,v=M.selector),v&&l.find.matchesSelector(ft,v),u.guid||(u.guid=l.guid++),(D=at.events)||(D=at.events=Object.create(null)),(E=at.handle)||(E=at.handle=function(Yt){return typeof l<"u"&&l.event.triggered!==Yt.type?l.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(Ke)||[""],V=o.length;V--;)N=Cn.exec(o[V])||[],de=vt=N[1],qe=(N[2]||"").split(".").sort(),de&&(se=l.event.special[de]||{},de=(v?se.delegateType:se.bindType)||de,se=l.event.special[de]||{},Q=l.extend({type:de,origType:vt,data:h,handler:u,guid:u.guid,selector:v,needsContext:v&&l.expr.match.needsContext.test(v),namespace:qe.join(".")},M),(X=D[de])||(X=D[de]=[],X.delegateCount=0,(!se.setup||se.setup.call(r,h,qe,E)===!1)&&r.addEventListener&&r.addEventListener(de,E)),se.add&&(se.add.call(r,Q),Q.handler.guid||(Q.handler.guid=u.guid)),v?X.splice(X.delegateCount++,0,Q):X.push(Q),l.event.global[de]=!0)},remove:function(r,o,u,h,v){var M,E,N,D,V,Q,se,X,de,qe,vt,at=ce.hasData(r)&&ce.get(r);if(!(!at||!(D=at.events))){for(o=(o||"").match(Ke)||[""],V=o.length;V--;){if(N=Cn.exec(o[V])||[],de=vt=N[1],qe=(N[2]||"").split(".").sort(),!de){for(de in D)l.event.remove(r,de+o[V],u,h,!0);continue}for(se=l.event.special[de]||{},de=(h?se.delegateType:se.bindType)||de,X=D[de]||[],N=N[2]&&new RegExp("(^|\\.)"+qe.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=M=X.length;M--;)Q=X[M],(v||vt===Q.origType)&&(!u||u.guid===Q.guid)&&(!N||N.test(Q.namespace))&&(!h||h===Q.selector||h==="**"&&Q.selector)&&(X.splice(M,1),Q.selector&&X.delegateCount--,se.remove&&se.remove.call(r,Q));E&&!X.length&&((!se.teardown||se.teardown.call(r,qe,at.handle)===!1)&&l.removeEvent(r,de,at.handle),delete D[de])}l.isEmptyObject(D)&&ce.remove(r,"handle events")}},dispatch:function(r){var o,u,h,v,M,E,N=new Array(arguments.length),D=l.event.fix(r),V=(ce.get(this,"events")||Object.create(null))[D.type]||[],Q=l.event.special[D.type]||{};for(N[0]=D,o=1;o<arguments.length;o++)N[o]=arguments[o];if(D.delegateTarget=this,!(Q.preDispatch&&Q.preDispatch.call(this,D)===!1)){for(E=l.event.handlers.call(this,D,V),o=0;(v=E[o++])&&!D.isPropagationStopped();)for(D.currentTarget=v.elem,u=0;(M=v.handlers[u++])&&!D.isImmediatePropagationStopped();)(!D.rnamespace||M.namespace===!1||D.rnamespace.test(M.namespace))&&(D.handleObj=M,D.data=M.data,h=((l.event.special[M.origType]||{}).handle||M.handler).apply(v.elem,N),h!==void 0&&(D.result=h)===!1&&(D.preventDefault(),D.stopPropagation()));return Q.postDispatch&&Q.postDispatch.call(this,D),D.result}},handlers:function(r,o){var u,h,v,M,E,N=[],D=o.delegateCount,V=r.target;if(D&&V.nodeType&&!(r.type==="click"&&r.button>=1)){for(;V!==this;V=V.parentNode||this)if(V.nodeType===1&&!(r.type==="click"&&V.disabled===!0)){for(M=[],E={},u=0;u<D;u++)h=o[u],v=h.selector+" ",E[v]===void 0&&(E[v]=h.needsContext?l(v,this).index(V)>-1:l.find(v,this,null,[V]).length),E[v]&&M.push(h);M.length&&N.push({elem:V,handlers:M})}}return V=this,D<o.length&&N.push({elem:V,handlers:o.slice(D)}),N},addProp:function(r,o){Object.defineProperty(l.Event.prototype,r,{enumerable:!0,configurable:!0,get:A(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(u){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(r){return r[l.expando]?r:new l.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return ze.test(o.type)&&o.click&&P(o,"input")&&Wn(o,"click",!0),!1},trigger:function(r){var o=this||r;return ze.test(o.type)&&o.click&&P(o,"input")&&Wn(o,"click"),!0},_default:function(r){var o=r.target;return ze.test(o.type)&&o.click&&P(o,"input")&&ce.get(o,"click")||P(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function Wn(r,o,u){if(!u){ce.get(r,o)===void 0&&l.event.add(r,o,kn);return}ce.set(r,o,!1),l.event.add(r,o,{namespace:!1,handler:function(h){var v,M=ce.get(this,o);if(h.isTrigger&1&&this[o]){if(M)(l.event.special[o]||{}).delegateType&&h.stopPropagation();else if(M=a.call(arguments),ce.set(this,o,M),this[o](),v=ce.get(this,o),ce.set(this,o,!1),M!==v)return h.stopImmediatePropagation(),h.preventDefault(),v}else M&&(ce.set(this,o,l.event.trigger(M[0],M.slice(1),this)),h.stopPropagation(),h.isImmediatePropagationStopped=kn)}})}l.removeEvent=function(r,o,u){r.removeEventListener&&r.removeEventListener(o,u)},l.Event=function(r,o){if(!(this instanceof l.Event))return new l.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?kn:Gn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&l.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:Gn,isPropagationStopped:Gn,isImmediatePropagationStopped:Gn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=kn,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=kn,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=kn,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(r,o){function u(h){if(p.documentMode){var v=ce.get(this,"handle"),M=l.event.fix(h);M.type=h.type==="focusin"?"focus":"blur",M.isSimulated=!0,v(h),M.target===M.currentTarget&&v(M)}else l.event.simulate(o,h.target,l.event.fix(h))}l.event.special[r]={setup:function(){var h;if(Wn(this,r,!0),p.documentMode)h=ce.get(this,o),h||this.addEventListener(o,u),ce.set(this,o,(h||0)+1);else return!1},trigger:function(){return Wn(this,r),!0},teardown:function(){var h;if(p.documentMode)h=ce.get(this,o)-1,h?ce.set(this,o,h):(this.removeEventListener(o,u),ce.remove(this,o));else return!1},_default:function(h){return ce.get(h.target,r)},delegateType:o},l.event.special[o]={setup:function(){var h=this.ownerDocument||this.document||this,v=p.documentMode?this:h,M=ce.get(v,o);M||(p.documentMode?this.addEventListener(o,u):h.addEventListener(r,u,!0)),ce.set(v,o,(M||0)+1)},teardown:function(){var h=this.ownerDocument||this.document||this,v=p.documentMode?this:h,M=ce.get(v,o)-1;M?ce.set(v,o,M):(p.documentMode?this.removeEventListener(o,u):h.removeEventListener(r,u,!0),ce.remove(v,o))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){l.event.special[r]={delegateType:o,bindType:o,handle:function(u){var h,v=this,M=u.relatedTarget,E=u.handleObj;return(!M||M!==v&&!l.contains(v,M))&&(u.type=E.origType,h=E.handler.apply(this,arguments),u.type=o),h}}}),l.fn.extend({on:function(r,o,u,h){return gr(this,r,o,u,h)},one:function(r,o,u,h){return gr(this,r,o,u,h,1)},off:function(r,o,u){var h,v;if(r&&r.preventDefault&&r.handleObj)return h=r.handleObj,l(r.delegateTarget).off(h.namespace?h.origType+"."+h.namespace:h.origType,h.selector,h.handler),this;if(typeof r=="object"){for(v in r)this.off(v,o,r[v]);return this}return(o===!1||typeof o=="function")&&(u=o,o=void 0),u===!1&&(u=Gn),this.each(function(){l.event.remove(this,r,u,o)})}});var Hr=/<script|<style|<link/i,zi=/checked\s*(?:[^=]|=\s*.checked.)/i,Vr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function _r(r,o){return P(r,"table")&&P(o.nodeType!==11?o:o.firstChild,"tr")&&l(r).children("tbody")[0]||r}function Us(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function Ns(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function kr(r,o){var u,h,v,M,E,N,D;if(o.nodeType===1){if(ce.hasData(r)&&(M=ce.get(r),D=M.events,D)){ce.remove(o,"handle events");for(v in D)for(u=0,h=D[v].length;u<h;u++)l.event.add(o,v,D[v][u])}Le.hasData(r)&&(E=Le.access(r),N=l.extend({},E),Le.set(o,N))}}function R(r,o){var u=o.nodeName.toLowerCase();u==="input"&&ze.test(r.type)?o.checked=r.checked:(u==="input"||u==="textarea")&&(o.defaultValue=r.defaultValue)}function k(r,o,u,h){o=c(o);var v,M,E,N,D,V,Q=0,se=r.length,X=se-1,de=o[0],qe=A(de);if(qe||se>1&&typeof de=="string"&&!b.checkClone&&zi.test(de))return r.each(function(vt){var at=r.eq(vt);qe&&(o[0]=de.call(this,vt,at.html())),k(at,o,u,h)});if(se&&(v=cn(o,r[0].ownerDocument,!1,r,h),M=v.firstChild,v.childNodes.length===1&&(v=M),M||h)){for(E=l.map(St(v,"script"),Us),N=E.length;Q<se;Q++)D=v,Q!==X&&(D=l.clone(D,!0,!0),N&&l.merge(E,St(D,"script"))),u.call(r[Q],D,Q);if(N)for(V=E[E.length-1].ownerDocument,l.map(E,Ns),Q=0;Q<N;Q++)D=E[Q],Ct.test(D.type||"")&&!ce.access(D,"globalEval")&&l.contains(V,D)&&(D.src&&(D.type||"").toLowerCase()!=="module"?l._evalUrl&&!D.noModule&&l._evalUrl(D.src,{nonce:D.nonce||D.getAttribute("nonce")},V):C(D.textContent.replace(Vr,""),D,V))}return r}function K(r,o,u){for(var h,v=o?l.filter(o,r):r,M=0;(h=v[M])!=null;M++)!u&&h.nodeType===1&&l.cleanData(St(h)),h.parentNode&&(u&&ht(h)&&Tt(St(h,"script")),h.parentNode.removeChild(h));return r}l.extend({htmlPrefilter:function(r){return r},clone:function(r,o,u){var h,v,M,E,N=r.cloneNode(!0),D=ht(r);if(!b.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!l.isXMLDoc(r))for(E=St(N),M=St(r),h=0,v=M.length;h<v;h++)R(M[h],E[h]);if(o)if(u)for(M=M||St(r),E=E||St(N),h=0,v=M.length;h<v;h++)kr(M[h],E[h]);else kr(r,N);return E=St(N,"script"),E.length>0&&Tt(E,!D&&St(r,"script")),N},cleanData:function(r){for(var o,u,h,v=l.event.special,M=0;(u=r[M])!==void 0;M++)if(He(u)){if(o=u[ce.expando]){if(o.events)for(h in o.events)v[h]?l.event.remove(u,h):l.removeEvent(u,h,o.handle);u[ce.expando]=void 0}u[Le.expando]&&(u[Le.expando]=void 0)}}}),l.fn.extend({detach:function(r){return K(this,r,!0)},remove:function(r){return K(this,r)},text:function(r){return T(this,function(o){return o===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return k(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=_r(this,r);o.appendChild(r)}})},prepend:function(){return k(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=_r(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return k(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return k(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(l.cleanData(St(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return l.clone(this,r,o)})},html:function(r){return T(this,function(o){var u=this[0]||{},h=0,v=this.length;if(o===void 0&&u.nodeType===1)return u.innerHTML;if(typeof o=="string"&&!Hr.test(o)&&!mt[(Et.exec(o)||["",""])[1].toLowerCase()]){o=l.htmlPrefilter(o);try{for(;h<v;h++)u=this[h]||{},u.nodeType===1&&(l.cleanData(St(u,!1)),u.innerHTML=o);u=0}catch{}}u&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return k(this,arguments,function(o){var u=this.parentNode;l.inArray(this,r)<0&&(l.cleanData(St(this)),u&&u.replaceChild(o,this))},r)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){l.fn[r]=function(u){for(var h,v=[],M=l(u),E=M.length-1,N=0;N<=E;N++)h=N===E?this:this.clone(!0),l(M[N])[o](h),f.apply(v,h.get());return this.pushStack(v)}});var J=new RegExp("^("+Ne+")(?!px)[a-z%]+$","i"),j=/^--/,Te=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},Oe=function(r,o,u){var h,v,M={};for(v in o)M[v]=r.style[v],r.style[v]=o[v];h=u.call(r);for(v in o)r.style[v]=M[v];return h},We=new RegExp(tt.join("|"),"i");(function(){function r(){if(V){D.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",V.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ft.appendChild(D).appendChild(V);var Q=e.getComputedStyle(V);u=Q.top!=="1%",N=o(Q.marginLeft)===12,V.style.right="60%",M=o(Q.right)===36,h=o(Q.width)===36,V.style.position="absolute",v=o(V.offsetWidth/3)===12,ft.removeChild(D),V=null}}function o(Q){return Math.round(parseFloat(Q))}var u,h,v,M,E,N,D=p.createElement("div"),V=p.createElement("div");V.style&&(V.style.backgroundClip="content-box",V.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle=V.style.backgroundClip==="content-box",l.extend(b,{boxSizingReliable:function(){return r(),h},pixelBoxStyles:function(){return r(),M},pixelPosition:function(){return r(),u},reliableMarginLeft:function(){return r(),N},scrollboxSize:function(){return r(),v},reliableTrDimensions:function(){var Q,se,X,de;return E==null&&(Q=p.createElement("table"),se=p.createElement("tr"),X=p.createElement("div"),Q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",se.style.cssText="box-sizing:content-box;border:1px solid",se.style.height="1px",X.style.height="9px",X.style.display="block",ft.appendChild(Q).appendChild(se).appendChild(X),de=e.getComputedStyle(se),E=parseInt(de.height,10)+parseInt(de.borderTopWidth,10)+parseInt(de.borderBottomWidth,10)===se.offsetHeight,ft.removeChild(Q)),E}}))})();function ke(r,o,u){var h,v,M,E,N=j.test(o),D=r.style;return u=u||Te(r),u&&(E=u.getPropertyValue(o)||u[o],N&&E&&(E=E.replace(ae,"$1")||void 0),E===""&&!ht(r)&&(E=l.style(r,o)),!b.pixelBoxStyles()&&J.test(E)&&We.test(o)&&(h=D.width,v=D.minWidth,M=D.maxWidth,D.minWidth=D.maxWidth=D.width=E,E=u.width,D.width=h,D.minWidth=v,D.maxWidth=M)),E!==void 0?E+"":E}function Je(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var Ye=["Webkit","Moz","ms"],Qe=p.createElement("div").style,Ut={};function Jt(r){for(var o=r[0].toUpperCase()+r.slice(1),u=Ye.length;u--;)if(r=Ye[u]+o,r in Qe)return r}function Ot(r){var o=l.cssProps[r]||Ut[r];return o||(r in Qe?r:Ut[r]=Jt(r)||r)}var Mn=/^(none|table(?!-c[ea]).+)/,Lt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function Hi(r,o,u){var h=st.exec(o);return h?Math.max(0,h[2]-(u||0))+(h[3]||"px"):o}function At(r,o,u,h,v,M){var E=o==="width"?1:0,N=0,D=0,V=0;if(u===(h?"border":"content"))return 0;for(;E<4;E+=2)u==="margin"&&(V+=l.css(r,u+tt[E],!0,v)),h?(u==="content"&&(D-=l.css(r,"padding"+tt[E],!0,v)),u!=="margin"&&(D-=l.css(r,"border"+tt[E]+"Width",!0,v))):(D+=l.css(r,"padding"+tt[E],!0,v),u!=="padding"?D+=l.css(r,"border"+tt[E]+"Width",!0,v):N+=l.css(r,"border"+tt[E]+"Width",!0,v));return!h&&M>=0&&(D+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-M-D-N-.5))||0),D+V}function Rn(r,o,u){var h=Te(r),v=!b.boxSizingReliable()||u,M=v&&l.css(r,"boxSizing",!1,h)==="border-box",E=M,N=ke(r,o,h),D="offset"+o[0].toUpperCase()+o.slice(1);if(J.test(N)){if(!u)return N;N="auto"}return(!b.boxSizingReliable()&&M||!b.reliableTrDimensions()&&P(r,"tr")||N==="auto"||!parseFloat(N)&&l.css(r,"display",!1,h)==="inline")&&r.getClientRects().length&&(M=l.css(r,"boxSizing",!1,h)==="border-box",E=D in r,E&&(N=r[D])),N=parseFloat(N)||0,N+At(r,o,u||(M?"border":"content"),E,h,N)+"px"}l.extend({cssHooks:{opacity:{get:function(r,o){if(o){var u=ke(r,"opacity");return u===""?"1":u}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,u,h){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var v,M,E,N=fe(o),D=j.test(o),V=r.style;if(D||(o=Ot(N)),E=l.cssHooks[o]||l.cssHooks[N],u!==void 0){if(M=typeof u,M==="string"&&(v=st.exec(u))&&v[1]&&(u=U(r,o,v),M="number"),u==null||u!==u)return;M==="number"&&!D&&(u+=v&&v[3]||(l.cssNumber[N]?"":"px")),!b.clearCloneStyle&&u===""&&o.indexOf("background")===0&&(V[o]="inherit"),(!E||!("set"in E)||(u=E.set(r,u,h))!==void 0)&&(D?V.setProperty(o,u):V[o]=u)}else return E&&"get"in E&&(v=E.get(r,!1,h))!==void 0?v:V[o]}},css:function(r,o,u,h){var v,M,E,N=fe(o),D=j.test(o);return D||(o=Ot(N)),E=l.cssHooks[o]||l.cssHooks[N],E&&"get"in E&&(v=E.get(r,!0,u)),v===void 0&&(v=ke(r,o,h)),v==="normal"&&o in nt&&(v=nt[o]),u===""||u?(M=parseFloat(v),u===!0||isFinite(M)?M||0:v):v}}),l.each(["height","width"],function(r,o){l.cssHooks[o]={get:function(u,h,v){if(h)return Mn.test(l.css(u,"display"))&&(!u.getClientRects().length||!u.getBoundingClientRect().width)?Oe(u,Lt,function(){return Rn(u,o,v)}):Rn(u,o,v)},set:function(u,h,v){var M,E=Te(u),N=!b.scrollboxSize()&&E.position==="absolute",D=N||v,V=D&&l.css(u,"boxSizing",!1,E)==="border-box",Q=v?At(u,o,v,V,E):0;return V&&N&&(Q-=Math.ceil(u["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(E[o])-At(u,o,"border",!1,E)-.5)),Q&&(M=st.exec(h))&&(M[3]||"px")!=="px"&&(u.style[o]=h,h=l.css(u,o)),Hi(u,h,Q)}}}),l.cssHooks.marginLeft=Je(b.reliableMarginLeft,function(r,o){if(o)return(parseFloat(ke(r,"marginLeft"))||r.getBoundingClientRect().left-Oe(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(r,o){l.cssHooks[r+o]={expand:function(u){for(var h=0,v={},M=typeof u=="string"?u.split(" "):[u];h<4;h++)v[r+tt[h]+o]=M[h]||M[h-2]||M[0];return v}},r!=="margin"&&(l.cssHooks[r+o].set=Hi)}),l.fn.extend({css:function(r,o){return T(this,function(u,h,v){var M,E,N={},D=0;if(Array.isArray(h)){for(M=Te(u),E=h.length;D<E;D++)N[h[D]]=l.css(u,h[D],!1,M);return N}return v!==void 0?l.style(u,h,v):l.css(u,h)},r,o,arguments.length>1)}});function jt(r,o,u,h,v){return new jt.prototype.init(r,o,u,h,v)}l.Tween=jt,jt.prototype={constructor:jt,init:function(r,o,u,h,v,M){this.elem=r,this.prop=u,this.easing=v||l.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=h,this.unit=M||(l.cssNumber[u]?"":"px")},cur:function(){var r=jt.propHooks[this.prop];return r&&r.get?r.get(this):jt.propHooks._default.get(this)},run:function(r){var o,u=jt.propHooks[this.prop];return this.options.duration?this.pos=o=l.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):jt.propHooks._default.set(this),this}},jt.prototype.init.prototype=jt.prototype,jt.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=l.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){l.fx.step[r.prop]?l.fx.step[r.prop](r):r.elem.nodeType===1&&(l.cssHooks[r.prop]||r.elem.style[Ot(r.prop)]!=null)?l.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},jt.propHooks.scrollTop=jt.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},l.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},l.fx=jt.prototype.init,l.fx.step={};var dn,ni,Gt=/^(?:toggle|show|hide)$/,Pn=/queueHooks$/;function Mi(){ni&&(p.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Mi):e.setTimeout(Mi,l.fx.interval),l.fx.tick())}function Qt(){return e.setTimeout(function(){dn=void 0}),dn=Date.now()}function ii(r,o){var u,h=0,v={height:r};for(o=o?1:0;h<4;h+=2-o)u=tt[h],v["margin"+u]=v["padding"+u]=r;return o&&(v.opacity=v.width=r),v}function Gr(r,o,u){for(var h,v=(Sn.tweeners[o]||[]).concat(Sn.tweeners["*"]),M=0,E=v.length;M<E;M++)if(h=v[M].call(u,o,r))return h}function Wr(r,o,u){var h,v,M,E,N,D,V,Q,se="width"in o||"height"in o,X=this,de={},qe=r.style,vt=r.nodeType&&Fe(r),at=ce.get(r,"fxshow");u.queue||(E=l._queueHooks(r,"fx"),E.unqueued==null&&(E.unqueued=0,N=E.empty.fire,E.empty.fire=function(){E.unqueued||N()}),E.unqueued++,X.always(function(){X.always(function(){E.unqueued--,l.queue(r,"fx").length||E.empty.fire()})}));for(h in o)if(v=o[h],Gt.test(v)){if(delete o[h],M=M||v==="toggle",v===(vt?"hide":"show"))if(v==="show"&&at&&at[h]!==void 0)vt=!0;else continue;de[h]=at&&at[h]||l.style(r,h)}if(D=!l.isEmptyObject(o),!(!D&&l.isEmptyObject(de))){se&&r.nodeType===1&&(u.overflow=[qe.overflow,qe.overflowX,qe.overflowY],V=at&&at.display,V==null&&(V=ce.get(r,"display")),Q=l.css(r,"display"),Q==="none"&&(V?Q=V:(Ie([r],!0),V=r.style.display||V,Q=l.css(r,"display"),Ie([r]))),(Q==="inline"||Q==="inline-block"&&V!=null)&&l.css(r,"float")==="none"&&(D||(X.done(function(){qe.display=V}),V==null&&(Q=qe.display,V=Q==="none"?"":Q)),qe.display="inline-block")),u.overflow&&(qe.overflow="hidden",X.always(function(){qe.overflow=u.overflow[0],qe.overflowX=u.overflow[1],qe.overflowY=u.overflow[2]})),D=!1;for(h in de)D||(at?"hidden"in at&&(vt=at.hidden):at=ce.access(r,"fxshow",{display:V}),M&&(at.hidden=!vt),vt&&Ie([r],!0),X.done(function(){vt||Ie([r]),ce.remove(r,"fxshow");for(h in de)l.style(r,h,de[h])})),D=Gr(vt?at[h]:0,h,X),h in at||(at[h]=D.start,vt&&(D.end=D.start,D.start=0))}}function Sc(r,o){var u,h,v,M,E;for(u in r)if(h=fe(u),v=o[h],M=r[u],Array.isArray(M)&&(v=M[1],M=r[u]=M[0]),u!==h&&(r[h]=M,delete r[u]),E=l.cssHooks[h],E&&"expand"in E){M=E.expand(M),delete r[h];for(u in M)u in r||(r[u]=M[u],o[u]=v)}else o[h]=v}function Sn(r,o,u){var h,v,M=0,E=Sn.prefilters.length,N=l.Deferred().always(function(){delete D.elem}),D=function(){if(v)return!1;for(var se=dn||Qt(),X=Math.max(0,V.startTime+V.duration-se),de=X/V.duration||0,qe=1-de,vt=0,at=V.tweens.length;vt<at;vt++)V.tweens[vt].run(qe);return N.notifyWith(r,[V,qe,X]),qe<1&&at?X:(at||N.notifyWith(r,[V,1,0]),N.resolveWith(r,[V]),!1)},V=N.promise({elem:r,props:l.extend({},o),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},u),originalProperties:o,originalOptions:u,startTime:dn||Qt(),duration:u.duration,tweens:[],createTween:function(se,X){var de=l.Tween(r,V.opts,se,X,V.opts.specialEasing[se]||V.opts.easing);return V.tweens.push(de),de},stop:function(se){var X=0,de=se?V.tweens.length:0;if(v)return this;for(v=!0;X<de;X++)V.tweens[X].run(1);return se?(N.notifyWith(r,[V,1,0]),N.resolveWith(r,[V,se])):N.rejectWith(r,[V,se]),this}}),Q=V.props;for(Sc(Q,V.opts.specialEasing);M<E;M++)if(h=Sn.prefilters[M].call(V,r,Q,V.opts),h)return A(h.stop)&&(l._queueHooks(V.elem,V.opts.queue).stop=h.stop.bind(h)),h;return l.map(Q,Gr,V),A(V.opts.start)&&V.opts.start.call(r,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),l.fx.timer(l.extend(D,{elem:r,anim:V,queue:V.opts.queue})),V}l.Animation=l.extend(Sn,{tweeners:{"*":[function(r,o){var u=this.createTween(r,o);return U(u.elem,r,st.exec(o),u),u}]},tweener:function(r,o){A(r)?(o=r,r=["*"]):r=r.match(Ke);for(var u,h=0,v=r.length;h<v;h++)u=r[h],Sn.tweeners[u]=Sn.tweeners[u]||[],Sn.tweeners[u].unshift(o)},prefilters:[Wr],prefilter:function(r,o){o?Sn.prefilters.unshift(r):Sn.prefilters.push(r)}}),l.speed=function(r,o,u){var h=r&&typeof r=="object"?l.extend({},r):{complete:u||!u&&o||A(r)&&r,duration:r,easing:u&&o||o&&!A(o)&&o};return l.fx.off?h.duration=0:typeof h.duration!="number"&&(h.duration in l.fx.speeds?h.duration=l.fx.speeds[h.duration]:h.duration=l.fx.speeds._default),(h.queue==null||h.queue===!0)&&(h.queue="fx"),h.old=h.complete,h.complete=function(){A(h.old)&&h.old.call(this),h.queue&&l.dequeue(this,h.queue)},h},l.fn.extend({fadeTo:function(r,o,u,h){return this.filter(Fe).css("opacity",0).show().end().animate({opacity:o},r,u,h)},animate:function(r,o,u,h){var v=l.isEmptyObject(r),M=l.speed(o,u,h),E=function(){var N=Sn(this,l.extend({},r),M);(v||ce.get(this,"finish"))&&N.stop(!0)};return E.finish=E,v||M.queue===!1?this.each(E):this.queue(M.queue,E)},stop:function(r,o,u){var h=function(v){var M=v.stop;delete v.stop,M(u)};return typeof r!="string"&&(u=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var v=!0,M=r!=null&&r+"queueHooks",E=l.timers,N=ce.get(this);if(M)N[M]&&N[M].stop&&h(N[M]);else for(M in N)N[M]&&N[M].stop&&Pn.test(M)&&h(N[M]);for(M=E.length;M--;)E[M].elem===this&&(r==null||E[M].queue===r)&&(E[M].anim.stop(u),v=!1,E.splice(M,1));(v||!u)&&l.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,u=ce.get(this),h=u[r+"queue"],v=u[r+"queueHooks"],M=l.timers,E=h?h.length:0;for(u.finish=!0,l.queue(this,r,[]),v&&v.stop&&v.stop.call(this,!0),o=M.length;o--;)M[o].elem===this&&M[o].queue===r&&(M[o].anim.stop(!0),M.splice(o,1));for(o=0;o<E;o++)h[o]&&h[o].finish&&h[o].finish.call(this);delete u.finish})}}),l.each(["toggle","show","hide"],function(r,o){var u=l.fn[o];l.fn[o]=function(h,v,M){return h==null||typeof h=="boolean"?u.apply(this,arguments):this.animate(ii(o,!0),h,v,M)}}),l.each({slideDown:ii("show"),slideUp:ii("hide"),slideToggle:ii("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){l.fn[r]=function(u,h,v){return this.animate(o,u,h,v)}}),l.timers=[],l.fx.tick=function(){var r,o=0,u=l.timers;for(dn=Date.now();o<u.length;o++)r=u[o],!r()&&u[o]===r&&u.splice(o--,1);u.length||l.fx.stop(),dn=void 0},l.fx.timer=function(r){l.timers.push(r),l.fx.start()},l.fx.interval=13,l.fx.start=function(){ni||(ni=!0,Mi())},l.fx.stop=function(){ni=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(r,o){return r=l.fx&&l.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(u,h){var v=e.setTimeout(u,r);h.stop=function(){e.clearTimeout(v)}})},function(){var r=p.createElement("input"),o=p.createElement("select"),u=o.appendChild(p.createElement("option"));r.type="checkbox",b.checkOn=r.value!=="",b.optSelected=u.selected,r=p.createElement("input"),r.value="t",r.type="radio",b.radioValue=r.value==="t"}();var $a,vr=l.expr.attrHandle;l.fn.extend({attr:function(r,o){return T(this,l.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){l.removeAttr(this,r)})}}),l.extend({attr:function(r,o,u){var h,v,M=r.nodeType;if(!(M===3||M===8||M===2)){if(typeof r.getAttribute>"u")return l.prop(r,o,u);if((M!==1||!l.isXMLDoc(r))&&(v=l.attrHooks[o.toLowerCase()]||(l.expr.match.bool.test(o)?$a:void 0)),u!==void 0){if(u===null){l.removeAttr(r,o);return}return v&&"set"in v&&(h=v.set(r,u,o))!==void 0?h:(r.setAttribute(o,u+""),u)}return v&&"get"in v&&(h=v.get(r,o))!==null?h:(h=l.find.attr(r,o),h??void 0)}},attrHooks:{type:{set:function(r,o){if(!b.radioValue&&o==="radio"&&P(r,"input")){var u=r.value;return r.setAttribute("type",o),u&&(r.value=u),o}}}},removeAttr:function(r,o){var u,h=0,v=o&&o.match(Ke);if(v&&r.nodeType===1)for(;u=v[h++];)r.removeAttribute(u)}}),$a={set:function(r,o,u){return o===!1?l.removeAttr(r,u):r.setAttribute(u,u),u}},l.each(l.expr.match.bool.source.match(/\w+/g),function(r,o){var u=vr[o]||l.find.attr;vr[o]=function(h,v,M){var E,N,D=v.toLowerCase();return M||(N=vr[D],vr[D]=E,E=u(h,v,M)!=null?D:null,vr[D]=N),E}});var yc=/^(?:input|select|textarea|button)$/i,Ec=/^(?:a|area)$/i;l.fn.extend({prop:function(r,o){return T(this,l.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[l.propFix[r]||r]})}}),l.extend({prop:function(r,o,u){var h,v,M=r.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!l.isXMLDoc(r))&&(o=l.propFix[o]||o,v=l.propHooks[o]),u!==void 0?v&&"set"in v&&(h=v.set(r,u,o))!==void 0?h:r[o]=u:v&&"get"in v&&(h=v.get(r,o))!==null?h:r[o]},propHooks:{tabIndex:{get:function(r){var o=l.find.attr(r,"tabindex");return o?parseInt(o,10):yc.test(r.nodeName)||Ec.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),b.optSelected||(l.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Si(r){var o=r.match(Ke)||[];return o.join(" ")}function yi(r){return r.getAttribute&&r.getAttribute("class")||""}function Fs(r){return Array.isArray(r)?r:typeof r=="string"?r.match(Ke)||[]:[]}l.fn.extend({addClass:function(r){var o,u,h,v,M,E;return A(r)?this.each(function(N){l(this).addClass(r.call(this,N,yi(this)))}):(o=Fs(r),o.length?this.each(function(){if(h=yi(this),u=this.nodeType===1&&" "+Si(h)+" ",u){for(M=0;M<o.length;M++)v=o[M],u.indexOf(" "+v+" ")<0&&(u+=v+" ");E=Si(u),h!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(r){var o,u,h,v,M,E;return A(r)?this.each(function(N){l(this).removeClass(r.call(this,N,yi(this)))}):arguments.length?(o=Fs(r),o.length?this.each(function(){if(h=yi(this),u=this.nodeType===1&&" "+Si(h)+" ",u){for(M=0;M<o.length;M++)for(v=o[M];u.indexOf(" "+v+" ")>-1;)u=u.replace(" "+v+" "," ");E=Si(u),h!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(r,o){var u,h,v,M,E=typeof r,N=E==="string"||Array.isArray(r);return A(r)?this.each(function(D){l(this).toggleClass(r.call(this,D,yi(this),o),o)}):typeof o=="boolean"&&N?o?this.addClass(r):this.removeClass(r):(u=Fs(r),this.each(function(){if(N)for(M=l(this),v=0;v<u.length;v++)h=u[v],M.hasClass(h)?M.removeClass(h):M.addClass(h);else(r===void 0||E==="boolean")&&(h=yi(this),h&&ce.set(this,"__className__",h),this.setAttribute&&this.setAttribute("class",h||r===!1?"":ce.get(this,"__className__")||""))}))},hasClass:function(r){var o,u,h=0;for(o=" "+r+" ";u=this[h++];)if(u.nodeType===1&&(" "+Si(yi(u))+" ").indexOf(o)>-1)return!0;return!1}});var Tc=/\r/g;l.fn.extend({val:function(r){var o,u,h,v=this[0];return arguments.length?(h=A(r),this.each(function(M){var E;this.nodeType===1&&(h?E=r.call(this,M,l(this).val()):E=r,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=l.map(E,function(N){return N==null?"":N+""})),o=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,E,"value")===void 0)&&(this.value=E))})):v?(o=l.valHooks[v.type]||l.valHooks[v.nodeName.toLowerCase()],o&&"get"in o&&(u=o.get(v,"value"))!==void 0?u:(u=v.value,typeof u=="string"?u.replace(Tc,""):u??"")):void 0}}),l.extend({valHooks:{option:{get:function(r){var o=l.find.attr(r,"value");return o??Si(l.text(r))}},select:{get:function(r){var o,u,h,v=r.options,M=r.selectedIndex,E=r.type==="select-one",N=E?null:[],D=E?M+1:v.length;for(M<0?h=D:h=E?M:0;h<D;h++)if(u=v[h],(u.selected||h===M)&&!u.disabled&&(!u.parentNode.disabled||!P(u.parentNode,"optgroup"))){if(o=l(u).val(),E)return o;N.push(o)}return N},set:function(r,o){for(var u,h,v=r.options,M=l.makeArray(o),E=v.length;E--;)h=v[E],(h.selected=l.inArray(l.valHooks.option.get(h),M)>-1)&&(u=!0);return u||(r.selectedIndex=-1),M}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=l.inArray(l(r).val(),o)>-1}},b.checkOn||(l.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var xr=e.location,Ka={guid:Date.now()},Os=/\?/;l.parseXML=function(r){var o,u;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return u=o&&o.getElementsByTagName("parsererror")[0],(!o||u)&&l.error("Invalid XML: "+(u?l.map(u.childNodes,function(h){return h.textContent}).join(`
`):r)),o};var Za=/^(?:focusinfocus|focusoutblur)$/,Ja=function(r){r.stopPropagation()};l.extend(l.event,{trigger:function(r,o,u,h){var v,M,E,N,D,V,Q,se,X=[u||p],de=x.call(r,"type")?r.type:r,qe=x.call(r,"namespace")?r.namespace.split("."):[];if(M=se=E=u=u||p,!(u.nodeType===3||u.nodeType===8)&&!Za.test(de+l.event.triggered)&&(de.indexOf(".")>-1&&(qe=de.split("."),de=qe.shift(),qe.sort()),D=de.indexOf(":")<0&&"on"+de,r=r[l.expando]?r:new l.Event(de,typeof r=="object"&&r),r.isTrigger=h?2:3,r.namespace=qe.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+qe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=u),o=o==null?[r]:l.makeArray(o,[r]),Q=l.event.special[de]||{},!(!h&&Q.trigger&&Q.trigger.apply(u,o)===!1))){if(!h&&!Q.noBubble&&!_(u)){for(N=Q.delegateType||de,Za.test(N+de)||(M=M.parentNode);M;M=M.parentNode)X.push(M),E=M;E===(u.ownerDocument||p)&&X.push(E.defaultView||E.parentWindow||e)}for(v=0;(M=X[v++])&&!r.isPropagationStopped();)se=M,r.type=v>1?N:Q.bindType||de,V=(ce.get(M,"events")||Object.create(null))[r.type]&&ce.get(M,"handle"),V&&V.apply(M,o),V=D&&M[D],V&&V.apply&&He(M)&&(r.result=V.apply(M,o),r.result===!1&&r.preventDefault());return r.type=de,!h&&!r.isDefaultPrevented()&&(!Q._default||Q._default.apply(X.pop(),o)===!1)&&He(u)&&D&&A(u[de])&&!_(u)&&(E=u[D],E&&(u[D]=null),l.event.triggered=de,r.isPropagationStopped()&&se.addEventListener(de,Ja),u[de](),r.isPropagationStopped()&&se.removeEventListener(de,Ja),l.event.triggered=void 0,E&&(u[D]=E)),r.result}},simulate:function(r,o,u){var h=l.extend(new l.Event,u,{type:r,isSimulated:!0});l.event.trigger(h,null,o)}}),l.fn.extend({trigger:function(r,o){return this.each(function(){l.event.trigger(r,o,this)})},triggerHandler:function(r,o){var u=this[0];if(u)return l.event.trigger(r,o,u,!0)}});var bc=/\[\]$/,Qa=/\r?\n/g,Ac=/^(?:submit|button|image|reset|file)$/i,wc=/^(?:input|select|textarea|keygen)/i;function Bs(r,o,u,h){var v;if(Array.isArray(o))l.each(o,function(M,E){u||bc.test(r)?h(r,E):Bs(r+"["+(typeof E=="object"&&E!=null?M:"")+"]",E,u,h)});else if(!u&&O(o)==="object")for(v in o)Bs(r+"["+v+"]",o[v],u,h);else h(r,o)}l.param=function(r,o){var u,h=[],v=function(M,E){var N=A(E)?E():E;h[h.length]=encodeURIComponent(M)+"="+encodeURIComponent(N??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!l.isPlainObject(r))l.each(r,function(){v(this.name,this.value)});else for(u in r)Bs(u,r[u],o,v);return h.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=l.prop(this,"elements");return r?l.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!l(this).is(":disabled")&&wc.test(this.nodeName)&&!Ac.test(r)&&(this.checked||!ze.test(r))}).map(function(r,o){var u=l(this).val();return u==null?null:Array.isArray(u)?l.map(u,function(h){return{name:o.name,value:h.replace(Qa,`\r
`)}}):{name:o.name,value:u.replace(Qa,`\r
`)}}).get()}});var Cc=/%20/g,Rc=/#.*$/,Pc=/([?&])_=[^&]*/,Lc=/^(.*?):[ \t]*([^\r\n]*)$/mg,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ic=/^(?:GET|HEAD)$/,Uc=/^\/\//,eo={},zs={},to="*/".concat("*"),Hs=p.createElement("a");Hs.href=xr.href;function no(r){return function(o,u){typeof o!="string"&&(u=o,o="*");var h,v=0,M=o.toLowerCase().match(Ke)||[];if(A(u))for(;h=M[v++];)h[0]==="+"?(h=h.slice(1)||"*",(r[h]=r[h]||[]).unshift(u)):(r[h]=r[h]||[]).push(u)}}function io(r,o,u,h){var v={},M=r===zs;function E(N){var D;return v[N]=!0,l.each(r[N]||[],function(V,Q){var se=Q(o,u,h);if(typeof se=="string"&&!M&&!v[se])return o.dataTypes.unshift(se),E(se),!1;if(M)return!(D=se)}),D}return E(o.dataTypes[0])||!v["*"]&&E("*")}function Vs(r,o){var u,h,v=l.ajaxSettings.flatOptions||{};for(u in o)o[u]!==void 0&&((v[u]?r:h||(h={}))[u]=o[u]);return h&&l.extend(!0,r,h),r}function Nc(r,o,u){for(var h,v,M,E,N=r.contents,D=r.dataTypes;D[0]==="*";)D.shift(),h===void 0&&(h=r.mimeType||o.getResponseHeader("Content-Type"));if(h){for(v in N)if(N[v]&&N[v].test(h)){D.unshift(v);break}}if(D[0]in u)M=D[0];else{for(v in u){if(!D[0]||r.converters[v+" "+D[0]]){M=v;break}E||(E=v)}M=M||E}if(M)return M!==D[0]&&D.unshift(M),u[M]}function Fc(r,o,u,h){var v,M,E,N,D,V={},Q=r.dataTypes.slice();if(Q[1])for(E in r.converters)V[E.toLowerCase()]=r.converters[E];for(M=Q.shift();M;)if(r.responseFields[M]&&(u[r.responseFields[M]]=o),!D&&h&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),D=M,M=Q.shift(),M){if(M==="*")M=D;else if(D!=="*"&&D!==M){if(E=V[D+" "+M]||V["* "+M],!E){for(v in V)if(N=v.split(" "),N[1]===M&&(E=V[D+" "+N[0]]||V["* "+N[0]],E)){E===!0?E=V[v]:V[v]!==!0&&(M=N[0],Q.unshift(N[1]));break}}if(E!==!0)if(E&&r.throws)o=E(o);else try{o=E(o)}catch(se){return{state:"parsererror",error:E?se:"No conversion from "+D+" to "+M}}}}return{state:"success",data:o}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xr.href,type:"GET",isLocal:Dc.test(xr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":to,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?Vs(Vs(r,l.ajaxSettings),o):Vs(l.ajaxSettings,r)},ajaxPrefilter:no(eo),ajaxTransport:no(zs),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var u,h,v,M,E,N,D,V,Q,se,X=l.ajaxSetup({},o),de=X.context||X,qe=X.context&&(de.nodeType||de.jquery)?l(de):l.event,vt=l.Deferred(),at=l.Callbacks("once memory"),Yt=X.statusCode||{},Ht={},Ln={},Dn="canceled",gt={readyState:0,getResponseHeader:function(xt){var Bt;if(D){if(!M)for(M={};Bt=Lc.exec(v);)M[Bt[1].toLowerCase()+" "]=(M[Bt[1].toLowerCase()+" "]||[]).concat(Bt[2]);Bt=M[xt.toLowerCase()+" "]}return Bt==null?null:Bt.join(", ")},getAllResponseHeaders:function(){return D?v:null},setRequestHeader:function(xt,Bt){return D==null&&(xt=Ln[xt.toLowerCase()]=Ln[xt.toLowerCase()]||xt,Ht[xt]=Bt),this},overrideMimeType:function(xt){return D==null&&(X.mimeType=xt),this},statusCode:function(xt){var Bt;if(xt)if(D)gt.always(xt[gt.status]);else for(Bt in xt)Yt[Bt]=[Yt[Bt],xt[Bt]];return this},abort:function(xt){var Bt=xt||Dn;return u&&u.abort(Bt),Ei(0,Bt),this}};if(vt.promise(gt),X.url=((r||X.url||xr.href)+"").replace(Uc,xr.protocol+"//"),X.type=o.method||o.type||X.method||X.type,X.dataTypes=(X.dataType||"*").toLowerCase().match(Ke)||[""],X.crossDomain==null){N=p.createElement("a");try{N.href=X.url,N.href=N.href,X.crossDomain=Hs.protocol+"//"+Hs.host!=N.protocol+"//"+N.host}catch{X.crossDomain=!0}}if(X.data&&X.processData&&typeof X.data!="string"&&(X.data=l.param(X.data,X.traditional)),io(eo,X,o,gt),D)return gt;V=l.event&&X.global,V&&l.active++===0&&l.event.trigger("ajaxStart"),X.type=X.type.toUpperCase(),X.hasContent=!Ic.test(X.type),h=X.url.replace(Rc,""),X.hasContent?X.data&&X.processData&&(X.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(X.data=X.data.replace(Cc,"+")):(se=X.url.slice(h.length),X.data&&(X.processData||typeof X.data=="string")&&(h+=(Os.test(h)?"&":"?")+X.data,delete X.data),X.cache===!1&&(h=h.replace(Pc,"$1"),se=(Os.test(h)?"&":"?")+"_="+Ka.guid+++se),X.url=h+se),X.ifModified&&(l.lastModified[h]&&gt.setRequestHeader("If-Modified-Since",l.lastModified[h]),l.etag[h]&&gt.setRequestHeader("If-None-Match",l.etag[h])),(X.data&&X.hasContent&&X.contentType!==!1||o.contentType)&&gt.setRequestHeader("Content-Type",X.contentType),gt.setRequestHeader("Accept",X.dataTypes[0]&&X.accepts[X.dataTypes[0]]?X.accepts[X.dataTypes[0]]+(X.dataTypes[0]!=="*"?", "+to+"; q=0.01":""):X.accepts["*"]);for(Q in X.headers)gt.setRequestHeader(Q,X.headers[Q]);if(X.beforeSend&&(X.beforeSend.call(de,gt,X)===!1||D))return gt.abort();if(Dn="abort",at.add(X.complete),gt.done(X.success),gt.fail(X.error),u=io(zs,X,o,gt),!u)Ei(-1,"No Transport");else{if(gt.readyState=1,V&&qe.trigger("ajaxSend",[gt,X]),D)return gt;X.async&&X.timeout>0&&(E=e.setTimeout(function(){gt.abort("timeout")},X.timeout));try{D=!1,u.send(Ht,Ei)}catch(xt){if(D)throw xt;Ei(-1,xt)}}function Ei(xt,Bt,Sr,Gs){var In,yr,Un,ri,si,pn=Bt;D||(D=!0,E&&e.clearTimeout(E),u=void 0,v=Gs||"",gt.readyState=xt>0?4:0,In=xt>=200&&xt<300||xt===304,Sr&&(ri=Nc(X,gt,Sr)),!In&&l.inArray("script",X.dataTypes)>-1&&l.inArray("json",X.dataTypes)<0&&(X.converters["text script"]=function(){}),ri=Fc(X,ri,gt,In),In?(X.ifModified&&(si=gt.getResponseHeader("Last-Modified"),si&&(l.lastModified[h]=si),si=gt.getResponseHeader("etag"),si&&(l.etag[h]=si)),xt===204||X.type==="HEAD"?pn="nocontent":xt===304?pn="notmodified":(pn=ri.state,yr=ri.data,Un=ri.error,In=!Un)):(Un=pn,(xt||!pn)&&(pn="error",xt<0&&(xt=0))),gt.status=xt,gt.statusText=(Bt||pn)+"",In?vt.resolveWith(de,[yr,pn,gt]):vt.rejectWith(de,[gt,pn,Un]),gt.statusCode(Yt),Yt=void 0,V&&qe.trigger(In?"ajaxSuccess":"ajaxError",[gt,X,In?yr:Un]),at.fireWith(de,[gt,pn]),V&&(qe.trigger("ajaxComplete",[gt,X]),--l.active||l.event.trigger("ajaxStop")))}return gt},getJSON:function(r,o,u){return l.get(r,o,u,"json")},getScript:function(r,o){return l.get(r,void 0,o,"script")}}),l.each(["get","post"],function(r,o){l[o]=function(u,h,v,M){return A(h)&&(M=M||v,v=h,h=void 0),l.ajax(l.extend({url:u,type:o,dataType:M,data:h,success:v},l.isPlainObject(u)&&u))}}),l.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),l._evalUrl=function(r,o,u){return l.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(h){l.globalEval(h,o,u)}})},l.fn.extend({wrapAll:function(r){var o;return this[0]&&(A(r)&&(r=r.call(this[0])),o=l(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(r){return A(r)?this.each(function(o){l(this).wrapInner(r.call(this,o))}):this.each(function(){var o=l(this),u=o.contents();u.length?u.wrapAll(r):o.append(r)})},wrap:function(r){var o=A(r);return this.each(function(u){l(this).wrapAll(o?r.call(this,u):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(r){return!l.expr.pseudos.visible(r)},l.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Oc={0:200,1223:204},Mr=l.ajaxSettings.xhr();b.cors=!!Mr&&"withCredentials"in Mr,b.ajax=Mr=!!Mr,l.ajaxTransport(function(r){var o,u;if(b.cors||Mr&&!r.crossDomain)return{send:function(h,v){var M,E=r.xhr();if(E.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(M in r.xhrFields)E[M]=r.xhrFields[M];r.mimeType&&E.overrideMimeType&&E.overrideMimeType(r.mimeType),!r.crossDomain&&!h["X-Requested-With"]&&(h["X-Requested-With"]="XMLHttpRequest");for(M in h)E.setRequestHeader(M,h[M]);o=function(N){return function(){o&&(o=u=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,N==="abort"?E.abort():N==="error"?typeof E.status!="number"?v(0,"error"):v(E.status,E.statusText):v(Oc[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=o(),u=E.onerror=E.ontimeout=o("error"),E.onabort!==void 0?E.onabort=u:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){o&&u()})},o=o("abort");try{E.send(r.hasContent&&r.data||null)}catch(N){if(o)throw N}},abort:function(){o&&o()}}}),l.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return l.globalEval(r),r}}}),l.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),l.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,u;return{send:function(h,v){o=l("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",u=function(M){o.remove(),u=null,M&&v(M.type==="error"?404:200,M.type)}),p.head.appendChild(o[0])},abort:function(){u&&u()}}}});var ro=[],ks=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=ro.pop()||l.expando+"_"+Ka.guid++;return this[r]=!0,r}}),l.ajaxPrefilter("json jsonp",function(r,o,u){var h,v,M,E=r.jsonp!==!1&&(ks.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ks.test(r.data)&&"data");if(E||r.dataTypes[0]==="jsonp")return h=r.jsonpCallback=A(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,E?r[E]=r[E].replace(ks,"$1"+h):r.jsonp!==!1&&(r.url+=(Os.test(r.url)?"&":"?")+r.jsonp+"="+h),r.converters["script json"]=function(){return M||l.error(h+" was not called"),M[0]},r.dataTypes[0]="json",v=e[h],e[h]=function(){M=arguments},u.always(function(){v===void 0?l(e).removeProp(h):e[h]=v,r[h]&&(r.jsonpCallback=o.jsonpCallback,ro.push(h)),M&&A(v)&&v(M[0]),M=v=void 0}),"script"}),b.createHTMLDocument=function(){var r=p.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),l.parseHTML=function(r,o,u){if(typeof r!="string")return[];typeof o=="boolean"&&(u=o,o=!1);var h,v,M;return o||(b.createHTMLDocument?(o=p.implementation.createHTMLDocument(""),h=o.createElement("base"),h.href=p.location.href,o.head.appendChild(h)):o=p),v=ct.exec(r),M=!u&&[],v?[o.createElement(v[1])]:(v=cn([r],o,M),M&&M.length&&l(M).remove(),l.merge([],v.childNodes))},l.fn.load=function(r,o,u){var h,v,M,E=this,N=r.indexOf(" ");return N>-1&&(h=Si(r.slice(N)),r=r.slice(0,N)),A(o)?(u=o,o=void 0):o&&typeof o=="object"&&(v="POST"),E.length>0&&l.ajax({url:r,type:v||"GET",dataType:"html",data:o}).done(function(D){M=arguments,E.html(h?l("<div>").append(l.parseHTML(D)).find(h):D)}).always(u&&function(D,V){E.each(function(){u.apply(this,M||[D.responseText,V,D])})}),this},l.expr.pseudos.animated=function(r){return l.grep(l.timers,function(o){return r===o.elem}).length},l.offset={setOffset:function(r,o,u){var h,v,M,E,N,D,V,Q=l.css(r,"position"),se=l(r),X={};Q==="static"&&(r.style.position="relative"),N=se.offset(),M=l.css(r,"top"),D=l.css(r,"left"),V=(Q==="absolute"||Q==="fixed")&&(M+D).indexOf("auto")>-1,V?(h=se.position(),E=h.top,v=h.left):(E=parseFloat(M)||0,v=parseFloat(D)||0),A(o)&&(o=o.call(r,u,l.extend({},N))),o.top!=null&&(X.top=o.top-N.top+E),o.left!=null&&(X.left=o.left-N.left+v),"using"in o?o.using.call(r,X):se.css(X)}},l.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(v){l.offset.setOffset(this,r,v)});var o,u,h=this[0];if(h)return h.getClientRects().length?(o=h.getBoundingClientRect(),u=h.ownerDocument.defaultView,{top:o.top+u.pageYOffset,left:o.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,u,h=this[0],v={top:0,left:0};if(l.css(h,"position")==="fixed")o=h.getBoundingClientRect();else{for(o=this.offset(),u=h.ownerDocument,r=h.offsetParent||u.documentElement;r&&(r===u.body||r===u.documentElement)&&l.css(r,"position")==="static";)r=r.parentNode;r&&r!==h&&r.nodeType===1&&(v=l(r).offset(),v.top+=l.css(r,"borderTopWidth",!0),v.left+=l.css(r,"borderLeftWidth",!0))}return{top:o.top-v.top-l.css(h,"marginTop",!0),left:o.left-v.left-l.css(h,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&l.css(r,"position")==="static";)r=r.offsetParent;return r||ft})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var u=o==="pageYOffset";l.fn[r]=function(h){return T(this,function(v,M,E){var N;if(_(v)?N=v:v.nodeType===9&&(N=v.defaultView),E===void 0)return N?N[o]:v[M];N?N.scrollTo(u?N.pageXOffset:E,u?E:N.pageYOffset):v[M]=E},r,h,arguments.length)}}),l.each(["top","left"],function(r,o){l.cssHooks[o]=Je(b.pixelPosition,function(u,h){if(h)return h=ke(u,o),J.test(h)?l(u).position()[o]+"px":h})}),l.each({Height:"height",Width:"width"},function(r,o){l.each({padding:"inner"+r,content:o,"":"outer"+r},function(u,h){l.fn[h]=function(v,M){var E=arguments.length&&(u||typeof v!="boolean"),N=u||(v===!0||M===!0?"margin":"border");return T(this,function(D,V,Q){var se;return _(D)?h.indexOf("outer")===0?D["inner"+r]:D.document.documentElement["client"+r]:D.nodeType===9?(se=D.documentElement,Math.max(D.body["scroll"+r],se["scroll"+r],D.body["offset"+r],se["offset"+r],se["client"+r])):Q===void 0?l.css(D,V,N):l.style(D,V,Q,N)},o,E?v:void 0,E)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){l.fn[o]=function(u){return this.on(o,u)}}),l.fn.extend({bind:function(r,o,u){return this.on(r,null,o,u)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,u,h){return this.on(o,r,u,h)},undelegate:function(r,o,u){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",u)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){l.fn[o]=function(u,h){return arguments.length>0?this.on(o,null,u,h):this.trigger(o)}});var Bc=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(r,o){var u,h,v;if(typeof o=="string"&&(u=r[o],o=r,r=u),!!A(r))return h=a.call(arguments,2),v=function(){return r.apply(o||this,h.concat(a.call(arguments)))},v.guid=r.guid=r.guid||l.guid++,v},l.holdReady=function(r){r?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=P,l.isFunction=A,l.isWindow=_,l.camelCase=fe,l.type=O,l.now=Date.now,l.isNumeric=function(r){var o=l.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},l.trim=function(r){return r==null?"":(r+"").replace(Bc,"$1")};var zc=e.jQuery,Hc=e.$;return l.noConflict=function(r){return e.$===l&&(e.$=Hc),r&&e.jQuery===l&&(e.jQuery=zc),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(xc);var Ag=xc.exports;const zr=bg(Ag);function wg(i,e,t){let n=Math.cos(i)*Math.cos(e)*t,s=Math.sin(e)*t,a=Math.cos(e)*Math.sin(i)*t;return new W(n,s,a)}function Mc(i,e,t){return i>e?e:i<t?t:i}function Cg(i){return i>=2*Math.PI?i-2*Math.PI:i<=0?i+2*Math.PI:i}class Rg{constructor(e){this.window=e,this.FRAME_TIME=.1,this.prevRender=null}_InitEvents(){zr(window).on("resize",()=>{this.mainCamera.aspect=window.innerWidth/window.innerHeight,this.mainCamera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}_InitGame(){const e=document.querySelector("canvas.webgl");this.scene=new ug,this.scene.background=new _t(0),this.renderer=new cg({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.tloader=new vg,this.startTime=Date.now(),this.mainCamera=new _n(75,window.innerWidth/window.innerHeight,.1,1e3),this.scene.add(this.mainCamera),this.originToCam=new ut(0,0),this.frameDelta=.1,this.prevRender=Date.now()}_SetFrameTimes(){this.frameDelta=(Date.now()-this.prevRender)*.001,this.prevRender+=this.frameDelta}_Render(){this.renderer.render(this.scene,this.mainCamera)}Init(){this._InitGame(),this._InitEvents(),this.CustomStartupLogic()}CustomStartupLogic=()=>{};CustomRuntimeLogic=()=>{}}const Pg=i=>{i.CustomRuntimeLogic(),i._Render(),i._SetFrameTimes()},Lg=i=>{window.setInterval(Pg,i.FRAME_TIME,i)},Dg=20,Bl=.0025,Ig=1.05,Ug=.95;let It,ys,La;const Ng=`
varying vec3 fragNorm;
varying vec3 pos;
varying mat4 modelViewMat;
varying mat4 projMat;

uniform float atmradius;

void main() {
  modelViewMat = modelViewMatrix;
  projMat = projectionMatrix;
  pos = position;
  fragNorm = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(normalize(position) * atmradius, 1.0);
}
`,Fg=`
varying vec3 fragNorm;
varying vec3 pos;
varying mat4 modelViewMat;
varying mat4 projMat;

uniform float eradius;
uniform vec3 sunPos;
uniform vec3 epos;
uniform float atmradius;

float distNormalizer;
float camSunAngle;

#define PI 3.14159
// #define PI 180.0

float camSpaceDist(vec3 p1, vec3 p2) {
  vec2 p1cam = (modelViewMat * vec4(p1, 1.0)).xy;
  vec2 p2cam = (modelViewMat * vec4(p2, 1.0)).xy;
  return distance(p1cam, p2cam) / distNormalizer;
}

vec2 toCamSpace(vec3 v) {
  return (modelViewMat * vec4(v, 1.0)).xy;
}

vec3 lerp(vec3 base, vec3 final, float t) {
  t = clamp(t, 0.0, 1.0);
  vec3 difference = final - base;
  return base + (difference * t);
}

// Returns vector (dstToSphere, dstThroughSphere)
	// If ray origin is inside sphere, dstToSphere = 0
	// If ray misses sphere, dstToSphere = maxValue; dstThroughSphere = 0
vec2 raySphere(vec3 sphereCentre, float sphereRadius, vec3 rayOrigin, vec3 rayDir) {
  vec3 offset = rayOrigin - sphereCentre;
  float a = 1.0; // Set to dot(rayDir, rayDir) if rayDir might not be normalized
  float b = 2.0 * dot(offset, rayDir);
  float c = dot (offset, offset) - sphereRadius * sphereRadius;
  float d = b * b - 4.0 * a * c; // Discriminant from quadratic formula

  // Number of intersections: 0 when d < 0; 1 when d = 0; 2 when d > 0
  if (d > 0.0) {
    float s = sqrt(d);
    float dstToSphereNear = max(0.0, (-b - s) / (2.0 * a));
    float dstToSphereFar = (-b + s) / (2.0 * a);

    // Ignore intersections that occur behind the ray
    if (dstToSphereFar >= 0.0) {
      return vec2(dstToSphereNear, dstToSphereFar - dstToSphereNear);
    }
  }
  // Ray did not intersect sphere
  return vec2(100000000.0, 0.0);
}

float brightnessScale(float x) {
  return 0.2 * log(x - 0.25) + 1.0;
}

float bscale(float x) {
  float BSCALE = 0.5;
  // return 0.000015 * exp(10.0 * x) * BSCALE;
  return x*x*BSCALE;
}

float dtpa2(vec3 rayOrigin, vec3 rayDir) {
  float ATM_FACTOR = 1.0;
  float BRIGHT_SCALE = 1.5;
  vec2 atmInt = raySphere(epos, atmradius, rayOrigin, rayDir);
  vec3 closestPoint = rayOrigin + rayDir * (atmInt.x + (atmInt.y - atmInt.x) * 0.5);
  float dFromOrig = distance(closestPoint, epos) / atmradius;

  // float depth = exp(-dFromOrig);
  float dpr = dot(fragNorm, normalize(cameraPosition - pos));
  float lightDpr = brightnessScale((dot(fragNorm, normalize(sunPos - pos)) + 1.0) * BRIGHT_SCALE);
  
  if (dFromOrig <= 0.8435) {
    return bscale(dFromOrig * (atmradius / eradius)) * lightDpr * ATM_FACTOR;
  }

  return lightDpr * dpr * ATM_FACTOR;
}

float dtpa(vec3 rayOrigin, vec3 rayDir) {
  float ATM_FACTOR = 1.0;
  vec2 atmInt = raySphere(epos, atmradius, rayOrigin, rayDir);
  vec2 planetInt = raySphere(epos, eradius, rayOrigin, rayDir);

  float dist = 0.0;
  if (atmInt.x < 0.01) { // inside atmosphere
    dist = atmInt.y;
  }
  else {
    dist = atmInt.y - atmInt.x;
  }

  // float dprod = exp(-dot(fragNorm, normalize(sunPos - pos)));
  float camProd = dot(fragNorm, -rayDir);
  float dprod = max(dot(fragNorm, normalize(sunPos - pos)), 0.0);
  return dist / (atmradius * 2.0);
}

float brightnessScaler(float scale) {
  return scale;
}

vec3 calculateLight(vec3 rayOrigin, vec3 rayDir) {
  vec2 atmInt = raySphere(epos, atmradius, rayOrigin, rayDir);
  vec3 closeIntersection = rayOrigin + rayDir * atmInt.x;
  vec3 farIntersection = rayOrigin + rayDir * atmInt.y;
  vec3 closeSunDir = normalize(sunPos - closeIntersection);
  vec3 farSunDir = normalize(sunPos - farIntersection);

  float planetIntDist = 0.0;
  vec2 planetInt = raySphere(epos, eradius, rayOrigin, rayDir);

  if (planetInt.x > 0.001 && planetInt.x < 10000.0) {
    planetIntDist = planetInt.y - planetInt.x;
  }

  // float dp = dot(closeSunDir, -rayDir);
  // return vec3(-dp);
  if (atmInt.x < 0.01) return vec3(0.0);
  float intDist = exp(-(distance(closeIntersection, farIntersection) - planetIntDist) / (2.0 * atmradius));
  
  vec3 wavelengths = vec3(700.0, 530.0, 440.0);
  float SCATTER_STR = 0.5;

  float scatter_r = 400.0 / pow(wavelengths.x, 4.0) * SCATTER_STR;
  float scatter_g = 400.0 / pow(wavelengths.y, 4.0) * SCATTER_STR;
  float scatter_b = 400.0 / pow(wavelengths.z, 4.0) * SCATTER_STR;
  
  return vec3(intDist * scatter_r, intDist * scatter_g, intDist * scatter_b);
}

void main() {
  float alpha;

  vec4 baseColor = vec4(0.6, 0.83, 0.97, 1.0);
  vec4 finalColor = vec4(0.95, 0.51, 0.25, 1.0);
  vec4 color = baseColor;

  float EPSILON = 0.0001;
  vec3 dirToFrag = normalize(pos - cameraPosition);

  float light = dtpa2(cameraPosition, dirToFrag);

  color = vec4(baseColor.xyz*light, light);
  gl_FragColor = color;
}`;function Og(){const e=new Rs(10,100,100),t=new pg({color:1322068});ys=new wn(e,t),ys.position.set(0,0,0),It.scene.add(ys);const n=new Sg(68719476735,5);n.position.set(10,20,0),It.scene.add(n);const s=new _c({color:16777215}),a=new xn,c=[];for(let A=0;A<1e4;A++){let _=(Math.random()-.5)*6e3,p=(Math.random()-.5)*6e3,F=(Math.random()-.5)*6e3;new W(_,p,F).length()<=200||c.push(_,p,F)}a.setAttribute("position",new rn(c,3));const f=new dg(a,s);It.scene.add(f);const d=new yg(4294967295,.01);It.scene.add(d),new Eg(20).setColors(16562691,2733325,596958);const g=10*1,x=1.3,S=new Rs(g*x,64,64),y={eradius:{value:g},atmradius:{value:g*x},epos:{value:new W(0)},sunPos:{value:n.position}},b=new ti({uniforms:y,transparent:!0,vertexShader:Ng,fragmentShader:Fg});La=new wn(S,b),La.position.set(0,0,0),It.scene.add(La)}function Bg(){Gg(),kg()}function zg(){It=new Rg(window),It.CustomStartupLogic=Og,It.Init(),It.CustomRuntimeLogic=Bg,Lg(It)}function Hg(i){i>0?It.mainCamera.fov*=Ig:It.mainCamera.fov*=Ug,It.mainCamera.fov=Mc(It.mainCamera.fov,120,30),It.mainCamera.updateProjectionMatrix()}let Pr=null,Ya=!1;function Vg(i){if(!Ya)return;const e=new ut(i.clientX,i.clientY),t=new ut(e.x-Pr.x,e.y-Pr.y);It.originToCam.x+=Bl*t.x,It.originToCam.x=Cg(It.originToCam.x),It.originToCam.y+=Bl*t.y,It.originToCam.y=Mc(It.originToCam.y,1.5,-1.5),Pr.x=e.x,Pr.y=e.y}function kg(){let i=wg(It.originToCam.x,It.originToCam.y,Dg);It.mainCamera.position.set(i.x,i.y,i.z),It.mainCamera.lookAt(0,0,0)}function Gg(){ys.rotation.z+=.1}zr(document.body).on("mousedown",i=>{Ya=!0,Pr=new ut(i.clientX,i.clientY)});zr(document.body).on("mouseup",i=>{Ya=!1});zr(document.body).on("mousemove",i=>{Vg(i)});zr(window).on("mousewheel DOMMouseScroll scroll",i=>{Hg(i.originalEvent.wheelDelta)});zg();
