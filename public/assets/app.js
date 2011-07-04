var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());(function(){var T=this,P=T._,X={},aa=Array.prototype,W=Object.prototype,ac=aa.slice,M=aa.unshift,K=W.toString,Y=W.hasOwnProperty,O=aa.forEach,N=aa.map,L=aa.reduce,H=aa.reduceRight,g=aa.filter,f=aa.every,d=aa.some,V=aa.indexOf,a=aa.lastIndexOf;W=Array.isArray;var h=Object.keys,U=Function.prototype.bind,ad=function(c){return new Z(c)};if(typeof module!=="undefined"&&module.exports){module.exports=ad;ad._=ad}else{T._=ad}ad.VERSION="1.1.5";var ab=ad.each=ad.forEach=function(i,c,l){if(i!=null){if(O&&i.forEach===O){i.forEach(c,l)}else{if(ad.isNumber(i.length)){for(var k=0,j=i.length;k<j;k++){if(c.call(l,i[k],k,i)===X){break}}}else{for(k in i){if(Y.call(i,k)){if(c.call(l,i[k],k,i)===X){break}}}}}}};ad.map=function(i,c,k){var j=[];if(i==null){return j}if(N&&i.map===N){return i.map(c,k)}ab(i,function(n,m,l){j[j.length]=c.call(k,n,m,l)});return j};ad.reduce=ad.foldl=ad.inject=function(i,c,l,k){var j=l!==void 0;if(i==null){i=[]}if(L&&i.reduce===L){if(k){c=ad.bind(c,k)}return j?i.reduce(c,l):i.reduce(c)}ab(i,function(o,n,m){if(!j&&n===0){l=o;j=true}else{l=c.call(k,l,o,n,m)}});if(!j){throw new TypeError("Reduce of empty array with no initial value")}return l};ad.reduceRight=ad.foldr=function(i,c,k,j){if(i==null){i=[]}if(H&&i.reduceRight===H){if(j){c=ad.bind(c,j)}return k!==void 0?i.reduceRight(c,k):i.reduceRight(c)}i=(ad.isArray(i)?i.slice():ad.toArray(i)).reverse();return ad.reduce(i,c,k,j)};ad.find=ad.detect=function(i,c,k){var j;S(i,function(n,m,l){if(c.call(k,n,m,l)){j=n;return true}});return j};ad.filter=ad.select=function(i,c,k){var j=[];if(i==null){return j}if(g&&i.filter===g){return i.filter(c,k)}ab(i,function(n,m,l){if(c.call(k,n,m,l)){j[j.length]=n}});return j};ad.reject=function(i,c,k){var j=[];if(i==null){return j}ab(i,function(n,m,l){c.call(k,n,m,l)||(j[j.length]=n)});return j};ad.every=ad.all=function(i,c,k){c=c||ad.identity;var j=true;if(i==null){return j}if(f&&i.every===f){return i.every(c,k)}ab(i,function(n,m,l){if(!(j=j&&c.call(k,n,m,l))){return X}});return j};var S=ad.some=ad.any=function(i,c,k){c=c||ad.identity;var j=false;if(i==null){return j}if(d&&i.some===d){return i.some(c,k)}ab(i,function(n,m,l){if(j=c.call(k,n,m,l)){return X}});return j};ad.include=ad.contains=function(i,c){var j=false;if(i==null){return j}if(V&&i.indexOf===V){return i.indexOf(c)!=-1}S(i,function(k){if(j=k===c){return true}});return j};ad.invoke=function(i,c){var j=ac.call(arguments,2);return ad.map(i,function(k){return(c?k[c]:k).apply(k,j)})};ad.pluck=function(i,c){return ad.map(i,function(j){return j[c]})};ad.max=function(i,c,k){if(!c&&ad.isArray(i)){return Math.max.apply(Math,i)}var j={computed:-Infinity};ab(i,function(n,m,l){m=c?c.call(k,n,m,l):n;m>=j.computed&&(j={value:n,computed:m})});return j.value};ad.min=function(i,c,k){if(!c&&ad.isArray(i)){return Math.min.apply(Math,i)}var j={computed:Infinity};ab(i,function(n,m,l){m=c?c.call(k,n,m,l):n;m<j.computed&&(j={value:n,computed:m})});return j.value};ad.sortBy=function(i,c,j){return ad.pluck(ad.map(i,function(m,l,k){return{value:m,criteria:c.call(j,m,l,k)}}).sort(function(n,m){var l=n.criteria,k=m.criteria;return l<k?-1:l>k?1:0}),"value")};ad.sortedIndex=function(i,c,m){m=m||ad.identity;for(var l=0,k=i.length;l<k;){var j=l+k>>1;m(i[j])<m(c)?l=j+1:k=j}return l};ad.toArray=function(c){if(!c){return[]}if(c.toArray){return c.toArray()}if(ad.isArray(c)){return c}if(ad.isArguments(c)){return ac.call(c)}return ad.values(c)};ad.size=function(c){return ad.toArray(c).length};ad.first=ad.head=function(i,c,j){return c!=null&&!j?ac.call(i,0,c):i[0]};ad.rest=ad.tail=function(i,c,j){return ac.call(i,c==null||j?1:c)};ad.last=function(c){return c[c.length-1]};ad.compact=function(c){return ad.filter(c,function(i){return !!i})};ad.flatten=function(c){return ad.reduce(c,function(i,j){if(ad.isArray(j)){return i.concat(ad.flatten(j))}i[i.length]=j;return i},[])};ad.without=function(i){var c=ac.call(arguments,1);return ad.filter(i,function(j){return !ad.include(c,j)})};ad.uniq=ad.unique=function(i,c){return ad.reduce(i,function(l,k,j){if(0==j||(c===true?ad.last(l)!=k:!ad.include(l,k))){l[l.length]=k}return l},[])};ad.intersect=function(i){var c=ac.call(arguments,1);return ad.filter(ad.uniq(i),function(j){return ad.every(c,function(k){return ad.indexOf(k,j)>=0})})};ad.zip=function(){for(var i=ac.call(arguments),c=ad.max(ad.pluck(i,"length")),k=Array(c),j=0;j<c;j++){k[j]=ad.pluck(i,""+j)}return k};ad.indexOf=function(i,c,k){if(i==null){return -1}var j;if(k){k=ad.sortedIndex(i,c);return i[k]===c?k:-1}if(V&&i.indexOf===V){return i.indexOf(c)}k=0;for(j=i.length;k<j;k++){if(i[k]===c){return k}}return -1};ad.lastIndexOf=function(i,c){if(i==null){return -1}if(a&&i.lastIndexOf===a){return i.lastIndexOf(c)}for(var j=i.length;j--;){if(i[j]===c){return j}}return -1};ad.range=function(i,c,m){if(arguments.length<=1){c=i||0;i=0}m=arguments[2]||1;for(var l=Math.max(Math.ceil((c-i)/m),0),k=0,j=Array(l);k<l;){j[k++]=i;i+=m}return j};ad.bind=function(i,c){if(U&&i.bind===U){return i.bind.apply(i,ac.call(arguments,1))}var j=ac.call(arguments,2);return function(){return i.apply(c,j.concat(ac.call(arguments)))}};ad.bindAll=function(i){var c=ac.call(arguments,1);if(c.length==0){c=ad.functions(i)}ab(c,function(j){i[j]=ad.bind(i[j],i)});return i};ad.memoize=function(i,c){var j={};c=c||ad.identity;return function(){var k=c.apply(this,arguments);return Y.call(j,k)?j[k]:j[k]=i.apply(this,arguments)}};ad.delay=function(i,c){var j=ac.call(arguments,2);return setTimeout(function(){return i.apply(i,j)},c)};ad.defer=function(c){return ad.delay.apply(ad,[c,1].concat(ac.call(arguments,1)))};var R=function(i,c,k){var j;return function(){var n=this,m=arguments,l=function(){j=null;i.apply(n,m)};k&&clearTimeout(j);if(k||!j){j=setTimeout(l,c)}}};ad.throttle=function(i,c){return R(i,c,false)};ad.debounce=function(i,c){return R(i,c,true)};ad.once=function(i){var c=false,j;return function(){if(c){return j}c=true;return j=i.apply(this,arguments)}};ad.wrap=function(i,c){return function(){var j=[i].concat(ac.call(arguments));return c.apply(this,j)}};ad.compose=function(){var c=ac.call(arguments);return function(){for(var i=ac.call(arguments),j=c.length-1;j>=0;j--){i=[c[j].apply(this,i)]}return i[0]}};ad.keys=h||function(i){if(i!==Object(i)){throw new TypeError("Invalid object")}var c=[],j;for(j in i){if(Y.call(i,j)){c[c.length]=j}}return c};ad.values=function(c){return ad.map(c,ad.identity)};ad.functions=ad.methods=function(c){return ad.filter(ad.keys(c),function(i){return ad.isFunction(c[i])}).sort()};ad.extend=function(c){ab(ac.call(arguments,1),function(i){for(var j in i){c[j]=i[j]}});return c};ad.defaults=function(c){ab(ac.call(arguments,1),function(i){for(var j in i){if(c[j]==null){c[j]=i[j]}}});return c};ad.clone=function(c){return ad.isArray(c)?c.slice():ad.extend({},c)};ad.tap=function(i,c){c(i);return i};ad.isEqual=function(i,c){if(i===c){return true}var l=typeof i;if(l!=typeof c){return false}if(i==c){return true}if(!i&&c||i&&!c){return false}if(i._chain){i=i._wrapped}if(c._chain){c=c._wrapped}if(i.isEqual){return i.isEqual(c)}if(ad.isDate(i)&&ad.isDate(c)){return i.getTime()===c.getTime()}if(ad.isNaN(i)&&ad.isNaN(c)){return false}if(ad.isRegExp(i)&&ad.isRegExp(c)){return i.source===c.source&&i.global===c.global&&i.ignoreCase===c.ignoreCase&&i.multiline===c.multiline}if(l!=="object"){return false}if(i.length&&i.length!==c.length){return false}l=ad.keys(i);var k=ad.keys(c);if(l.length!=k.length){return false}for(var j in i){if(!(j in c)||!ad.isEqual(i[j],c[j])){return false}}return true};ad.isEmpty=function(i){if(ad.isArray(i)||ad.isString(i)){return i.length===0}for(var c in i){if(Y.call(i,c)){return false}}return true};ad.isElement=function(c){return !!(c&&c.nodeType==1)};ad.isArray=W||function(c){return K.call(c)==="[object Array]"};ad.isArguments=function(c){return !!(c&&Y.call(c,"callee"))};ad.isFunction=function(c){return !!(c&&c.constructor&&c.call&&c.apply)};ad.isString=function(c){return !!(c===""||c&&c.charCodeAt&&c.substr)};ad.isNumber=function(c){return !!(c===0||c&&c.toExponential&&c.toFixed)};ad.isNaN=function(c){return c!==c};ad.isBoolean=function(c){return c===true||c===false};ad.isDate=function(c){return !!(c&&c.getTimezoneOffset&&c.setUTCFullYear)};ad.isRegExp=function(c){return !!(c&&c.test&&c.exec&&(c.ignoreCase||c.ignoreCase===false))};ad.isNull=function(c){return c===null};ad.isUndefined=function(c){return c===void 0};ad.noConflict=function(){T._=P;return this};ad.identity=function(c){return c};ad.times=function(i,c,k){for(var j=0;j<i;j++){c.call(k,j)}};ad.mixin=function(c){ab(ad.functions(c),function(i){e(i,ad[i]=c[i])})};var b=0;ad.uniqueId=function(i){var c=b++;return i?i+c:c};ad.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};ad.template=function(i,c){var j=ad.templateSettings;j="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+i.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(j.interpolate,function(l,k){return"',"+k.replace(/\\'/g,"'")+",'"}).replace(j.evaluate||null,function(l,k){return"');"+k.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";j=new Function("obj",j);return c?j(c):j};var Z=function(c){this._wrapped=c};ad.prototype=Z.prototype;var Q=function(i,c){return c?ad(i).chain():i},e=function(i,c){Z.prototype[i]=function(){var j=ac.call(arguments);M.call(j,this._wrapped);return Q(c.apply(ad,j),this._chain)}};ad.mixin(ad);ab(["pop","push","reverse","shift","sort","splice","unshift"],function(i){var c=aa[i];Z.prototype[i]=function(){c.apply(this._wrapped,arguments);return Q(this._wrapped,this._chain)}});ab(["concat","join","slice"],function(i){var c=aa[i];Z.prototype[i]=function(){return Q(c.apply(this._wrapped,arguments),this._chain)}});Z.prototype.chain=function(){this._chain=true;return this};Z.prototype.value=function(){return this._wrapped}})();(function(){var b;if(typeof exports!=="undefined"){b=exports}else{b=this.Backbone={}}b.VERSION="0.3.3";var t=this._;if(!t&&(typeof require!=="undefined")){t=require("underscore")._}var e=this.jQuery||this.Zepto;b.emulateHTTP=false;b.emulateJSON=false;b.Events={bind:function(v,x){var u=this._callbacks||(this._callbacks={});var w=this._callbacks[v]||(this._callbacks[v]=[]);w.push(x);return this},unbind:function(x,z){var w;if(!x){this._callbacks={}}else{if(w=this._callbacks){if(!z){w[x]=[]}else{var y=w[x];if(!y){return this}for(var v=0,u=y.length;v<u;v++){if(z===y[v]){y.splice(v,1);break}}}}}return this},trigger:function(x){var y,w,v,u;if(!(w=this._callbacks)){return this}if(w[x]){y=w[x].slice(0);for(v=0,u=y.length;v<u;v++){y[v].apply(this,Array.prototype.slice.call(arguments,1))}}if(w.all){y=w.all.slice(0);for(v=0,u=y.length;v<u;v++){y[v].apply(this,arguments)}}return this}};b.Model=function(u,v){var w;u||(u={});if(w=this.defaults){if(t.isFunction(w)){w=w()}u=t.extend({},w,u)}this.attributes={};this._escapedAttributes={};this.cid=t.uniqueId("c");this.set(u,{silent:true});this._changed=false;this._previousAttributes=t.clone(this.attributes);if(v&&v.collection){this.collection=v.collection}this.initialize(u,v)};t.extend(b.Model.prototype,b.Events,{_previousAttributes:null,_changed:false,idAttribute:"id",initialize:function(){},toJSON:function(){return t.clone(this.attributes)},get:function(u){return this.attributes[u]},escape:function(u){var v;if(v=this._escapedAttributes[u]){return v}var w=this.attributes[u];return this._escapedAttributes[u]=l(w==null?"":""+w)},has:function(u){return this.attributes[u]!=null},set:function(x,w){w||(w={});if(!x){return this}if(x.attributes){x=x.attributes}var v=this.attributes,y=this._escapedAttributes;if(!w.silent&&this.validate&&!this._performValidation(x,w)){return false}if(this.idAttribute in x){this.id=x[this.idAttribute]}for(var u in x){var z=x[u];if(!t.isEqual(v[u],z)){v[u]=z;delete y[u];this._changed=true;if(!w.silent){this.trigger("change:"+u,this,z,w)}}}if(!w.silent&&this._changed){this.change(w)}return this},unset:function(u,v){if(!(u in this.attributes)){return this}v||(v={});var x=this.attributes[u];var w={};w[u]=void 0;if(!v.silent&&this.validate&&!this._performValidation(w,v)){return false}delete this.attributes[u];delete this._escapedAttributes[u];if(u==this.idAttribute){delete this.id}this._changed=true;if(!v.silent){this.trigger("change:"+u,this,void 0,v);this.change(v)}return this},clear:function(v){v||(v={});var u=this.attributes;var w={};for(attr in u){w[attr]=void 0}if(!v.silent&&this.validate&&!this._performValidation(w,v)){return false}this.attributes={};this._escapedAttributes={};this._changed=true;if(!v.silent){for(attr in u){this.trigger("change:"+attr,this,void 0,v)}this.change(v)}return this},fetch:function(v){v||(v={});var u=this;var w=v.success;v.success=function(x){if(!u.set(u.parse(x),v)){return false}if(w){w(u,x)}};v.error=c(v.error,u,v);(this.sync||b.sync).call(this,"read",this,v);return this},save:function(w,v){v||(v={});if(w&&!this.set(w,v)){return false}var u=this;var x=v.success;v.success=function(z){if(!u.set(u.parse(z),v)){return false}if(x){x(u,z)}};v.error=c(v.error,u,v);var y=this.isNew()?"create":"update";(this.sync||b.sync).call(this,y,this,v);return this},destroy:function(v){v||(v={});var u=this;var w=v.success;v.success=function(x){u.trigger("destroy",u,u.collection,v);if(w){w(u,x)}};v.error=c(v.error,u,v);(this.sync||b.sync).call(this,"delete",this,v);return this},url:function(){var u=m(this.collection)||this.urlRoot||o();if(this.isNew()){return u}return u+(u.charAt(u.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(u){return u},clone:function(){return new this.constructor(this)},isNew:function(){return !this.id},change:function(u){this.trigger("change",this,u);this._previousAttributes=t.clone(this.attributes);this._changed=false},hasChanged:function(u){if(u){return this._previousAttributes[u]!=this.attributes[u]}return this._changed},changedAttributes:function(w){w||(w=this.attributes);var v=this._previousAttributes;var x=false;for(var u in w){if(!t.isEqual(v[u],w[u])){x=x||{};x[u]=w[u]}}return x},previous:function(u){if(!u||!this._previousAttributes){return null}return this._previousAttributes[u]},previousAttributes:function(){return t.clone(this._previousAttributes)},_performValidation:function(w,v){var u=this.validate(w);if(u){if(v.error){v.error(this,u)}else{this.trigger("error",this,u,v)}return false}return true}});b.Collection=function(v,u){u||(u={});if(u.comparator){this.comparator=u.comparator;delete u.comparator}t.bindAll(this,"_onModelEvent","_removeReference");this._reset();if(v){this.refresh(v,{silent:true})}this.initialize(v,u)};t.extend(b.Collection.prototype,b.Events,{model:b.Model,initialize:function(){},toJSON:function(){return this.map(function(u){return u.toJSON()})},add:function(x,v){if(t.isArray(x)){for(var w=0,u=x.length;w<u;w++){this._add(x[w],v)}}else{this._add(x,v)}return this},remove:function(x,v){if(t.isArray(x)){for(var w=0,u=x.length;w<u;w++){this._remove(x[w],v)}}else{this._remove(x,v)}return this},get:function(u){if(u==null){return null}return this._byId[u.id!=null?u.id:u]},getByCid:function(u){return u&&this._byCid[u.cid||u]},at:function(u){return this.models[u]},sort:function(u){u||(u={});if(!this.comparator){throw new Error("Cannot sort a set without a comparator")}this.models=this.sortBy(this.comparator);if(!u.silent){this.trigger("refresh",this,u)}return this},pluck:function(u){return t.map(this.models,function(v){return v.get(u)})},refresh:function(v,u){v||(v=[]);u||(u={});this.each(this._removeReference);this._reset();this.add(v,{silent:true});if(!u.silent){this.trigger("refresh",this,u)}return this},fetch:function(u){u||(u={});var w=this;var v=u.success;u.success=function(x){w[u.add?"add":"refresh"](w.parse(x),u);if(v){v(w,x)}};u.error=c(u.error,w,u);(this.sync||b.sync).call(this,"read",this,u);return this},create:function(w,v){var x=this;v||(v={});if(!(w instanceof b.Model)){var u=w;w=new this.model(null,{collection:x});if(!w.set(u)){return false}}else{w.collection=x}var y=v.success;v.success=function(z,A){x.add(z);if(y){y(z,A)}};return w.save(null,v)},parse:function(u){return u},chain:function(){return t(this.models).chain()},_reset:function(u){this.length=0;this.models=[];this._byId={};this._byCid={}},_add:function(w,v){v||(v={});if(!(w instanceof b.Model)){w=new this.model(w,{collection:this})}var x=this.getByCid(w);if(x){throw new Error(["Can't add the same model to a set twice",x.id])}this._byId[w.id]=w;this._byCid[w.cid]=w;if(!w.collection){w.collection=this}var u=this.comparator?this.sortedIndex(w,this.comparator):this.length;this.models.splice(u,0,w);w.bind("all",this._onModelEvent);this.length++;if(!v.silent){w.trigger("add",w,this,v)}return w},_remove:function(v,u){u||(u={});v=this.getByCid(v)||this.get(v);if(!v){return null}delete this._byId[v.id];delete this._byCid[v.cid];this.models.splice(this.indexOf(v),1);this.length--;if(!u.silent){v.trigger("remove",v,this,u)}this._removeReference(v);return v},_removeReference:function(u){if(this==u.collection){delete u.collection}u.unbind("all",this._onModelEvent)},_onModelEvent:function(w,v,x,u){if((w=="add"||w=="remove")&&x!=this){return}if(w=="destroy"){this._remove(v,u)}if(v&&w==="change:"+v.idAttribute){delete this._byId[v.previous(v.idAttribute)];this._byId[v.id]=v}this.trigger.apply(this,arguments)}});var r=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","invoke","max","min","sortBy","sortedIndex","toArray","size","first","rest","last","without","indexOf","lastIndexOf","isEmpty"];t.each(r,function(u){b.Collection.prototype[u]=function(){return t[u].apply(t,[this.models].concat(t.toArray(arguments)))}});b.Controller=function(u){u||(u={});if(u.routes){this.routes=u.routes}this._bindRoutes();this.initialize(u)};var g=/:([\w\d]+)/g;var s=/\*([\w\d]+)/g;var d=/[-[\]{}()+?.,\\^$|#\s]/g;t.extend(b.Controller.prototype,b.Events,{initialize:function(){},route:function(u,v,w){b.history||(b.history=new b.History);if(!t.isRegExp(u)){u=this._routeToRegExp(u)}b.history.route(u,t.bind(function(y){var x=this._extractParameters(u,y);w.apply(this,x);this.trigger.apply(this,["route:"+v].concat(x))},this))},saveLocation:function(u){b.history.saveLocation(u)},_bindRoutes:function(){if(!this.routes){return}var v=[];for(var w in this.routes){v.unshift([w,this.routes[w]])}for(var x=0,u=v.length;x<u;x++){this.route(v[x][0],v[x][1],this[v[x][1]])}},_routeToRegExp:function(u){u=u.replace(d,"\\$&").replace(g,"([^/]*)").replace(s,"(.*?)");return new RegExp("^"+u+"$")},_extractParameters:function(u,v){return u.exec(v).slice(1)}});b.History=function(){this.handlers=[];this.fragment=this.getFragment();t.bindAll(this,"checkUrl")};var k=/^#*/;var i=false;t.extend(b.History.prototype,{interval:50,getFragment:function(u){matches=(u||window.location).href.match(/^[^#]*#?(.*)$/);return matches.length>1?matches[1]:""},start:function(){if(i){throw new Error("Backbone.history has already been started")}var u=document.documentMode;var v=(e.browser.msie&&(!u||u<=7));if(v){this.iframe=e('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow}if("onhashchange" in window&&!v){e(window).bind("hashchange",this.checkUrl)}else{setInterval(this.checkUrl,this.interval)}i=true;return this.loadUrl()},route:function(u,v){this.handlers.unshift({route:u,callback:v})},checkUrl:function(){var u=this.getFragment();if(u==this.fragment||u==decodeURIComponent(this.fragment)){return false}if(this.iframe){window.location.hash=e("iframe:first").get(0).document.location.hash=u}this.loadUrl()},loadUrl:function(){var v=this.fragment=this.getFragment();var u=t.any(this.handlers,function(w){if(w.route.test(v)){w.callback(v);return true}});return u},saveLocation:function(u){u=(u||"").replace(k,"");window.location.hash=this.fragment=u;if(this.iframe&&(u!=this.getFragment(this.iframe.location))){this.iframe.document.open().close();this.iframe.location.hash=u}}});b.View=function(u){this.cid=t.uniqueId("view");this._configure(u||{});this._ensureElement();this.delegateEvents();this.initialize(u)};var j=function(u){return e(u,this.el)};var a=/^(\w+)\s*(.*)$/;var p=["model","collection","el","id","attributes","className","tagName"];t.extend(b.View.prototype,b.Events,{tagName:"div",$:j,initialize:function(){},render:function(){return this},remove:function(){e(this.el).remove();return this},make:function(v,u,x){var w=document.createElement(v);if(u){e(w).attr(u)}if(x){e(w).html(x)}return w},delegateEvents:function(z){if(!(z||(z=this.events))){return}e(this.el).unbind(".delegateEvents"+this.cid);for(var y in z){var w=z[y];var x=y.match(a);var v=x[1],u=x[2];var A=t.bind(this[w],this);v+=".delegateEvents"+this.cid;if(u===""){e(this.el).bind(v,A)}else{e(this.el).delegate(u,v,A)}}},_configure:function(w){if(this.options){w=t.extend({},this.options,w)}for(var x=0,v=p.length;x<v;x++){var u=p[x];if(w[u]){this[u]=w[u]}}this.options=w},_ensureElement:function(){if(!this.el){var u=this.attributes||{};if(this.id){u.id=this.id}if(this.className){u["class"]=this.className}this.el=this.make(this.tagName,u)}else{if(t.isString(this.el)){this.el=e(this.el).get(0)}}}});var q=function(u,v){var w=h(this,u,v);w.extend=q;return w};b.Model.extend=b.Collection.extend=b.Controller.extend=b.View.extend=q;var n={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};b.sync=function(y,v,u){var w=n[y];var x=t.extend({type:w,contentType:"application/json",dataType:"json",processData:false},u);if(!x.url){x.url=m(v)||o()}if(!x.data&&v&&(y=="create"||y=="update")){x.data=JSON.stringify(v.toJSON())}if(b.emulateJSON){x.contentType="application/x-www-form-urlencoded";x.processData=true;x.data=x.data?{model:x.data}:{}}if(b.emulateHTTP){if(w==="PUT"||w==="DELETE"){if(b.emulateJSON){x.data._method=w}x.type="POST";x.beforeSend=function(z){z.setRequestHeader("X-HTTP-Method-Override",w)}}}e.ajax(x)};var f=function(){};var h=function(v,u,w){var x;if(u&&u.hasOwnProperty("constructor")){x=u.constructor}else{x=function(){return v.apply(this,arguments)}}t.extend(x,v);f.prototype=v.prototype;x.prototype=new f();if(u){t.extend(x.prototype,u)}if(w){t.extend(x,w)}x.prototype.constructor=x;x.__super__=v.prototype;return x};var m=function(u){if(!(u&&u.url)){return null}return t.isFunction(u.url)?u.url():u.url};var o=function(){throw new Error("A 'url' property or function must be specified")};var c=function(w,v,u){return function(x){if(w){w(v,x,u)}else{v.trigger("error",v,x,u)}}};var l=function(u){return u.replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}}).call(this);var AppController=Backbone.Controller.extend({routes:{"!/":"root","":"root","!/volumes/:id":"volume","!/volumes/:id/:issue":"issue"},root:function(){},volume:function(a){},issue:function(b,a){$.getJSON("/volumes/"+b+"/"+a,function(d){var d=d.table;var c=JST.issue({issue:d});$("#body").html(c);$("#issue_info").hide();$("#issue_info").children().hide();$("body").css("background","url('"+d.image.super_url+"')");$("#issue_info").fadeIn("slow");$("#issue_info").children().each(function(e,f){$(f).delay(1000*(e+1)).fadeIn("slow")});$("#issue_description a").each(function(e,f){$(f).attr("href","http://comicvine.com"+$(f).attr("href"))})})}});$(document).ready(function(){new AppController();Backbone.history.start()});(function(){window.JST=window.JST||{};var a=function(c){var b=new Function("obj","var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+c.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/<%=([\s\S]+?)%>/g,function(d,e){return"',"+e.replace(/\\'/g,"'")+",'"}).replace(/<%([\s\S]+?)%>/g,function(d,e){return"');"+e.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');");return b};window.JST.issue=a('<div id="issue_info">\n	<ul class="lineal" id="volume_info">\n		<li id="volume_name"><%= issue.volume.name %></li>\n		<li id="issue_number"><%= issue.issue_number %></li>\n	</ul>\n	<h1 id="issue_name"><%= issue.name %></h1>\n	<img src="<%= issue.image.super_url %>" id="issue_cover" />\n	<div id="issue_description"><%= issue.description %></div>\n</div>')})();