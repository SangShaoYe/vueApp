var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20180814_syb_cb_crawl*/window.__wcc_version__='v0.5vv_20180814_syb_cb_crawl';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cart$7a5e86ff'])
Z([3,'_view data-v-09d1f594 container'])
Z([[2,'=='],[[6],[[7],[3,'cartList']],[3,'length']],[1,0]])
Z([3,'_view data-v-09d1f594 view-empty'])
Z([3,'_image data-v-09d1f594'])
Z([3,'../../static/imgs/empty_cart.png'])
Z([3,'_text data-v-09d1f594 hint'])
Z([3,'购物车还是空的'])
Z([3,'handleProxy'])
Z([3,'_text data-v-09d1f594 btn'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'马上逛逛'])
Z([3,'_view data-v-09d1f594 body-container'])
Z(z[8])
Z([3,'_checkbox-group data-v-09d1f594'])
Z(z[10])
Z([1,'2'])
Z([3,'idx'])
Z([3,'cart'])
Z([[7],[3,'cartList']])
Z(z[18])
Z([3,'_view data-v-09d1f594 cart'])
Z([[7],[3,'idx']])
Z([[7],[3,'cart_show']])
Z([3,'_label data-v-09d1f594'])
Z([[6],[[7],[3,'cart']],[3,'checked']])
Z([3,'_checkbox data-v-09d1f594 cart-select'])
Z([3,'#D43030'])
Z([3,'s1'])
Z(z[26])
Z([3,'_image data-v-09d1f594 cart-image'])
Z([[6],[[7],[3,'cart']],[3,'image']])
Z([3,'_view data-v-09d1f594 cart-info'])
Z([3,'_view data-v-09d1f594 cart-title'])
Z([a,[[6],[[7],[3,'cart']],[3,'title']]])
Z([3,'_view data-v-09d1f594 cart-price'])
Z([a,[3,'￥'],[[6],[[7],[3,'cart']],[3,'price']]])
Z(z[8])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'0-']],[[7],[3,'idx']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[10])
Z([[2,'+'],[1,'1-'],[[7],[3,'idx']]])
Z([3,'cartcontrol$1321aa0c'])
Z([[2,'>'],[[6],[[7],[3,'cartList']],[3,'length']],[1,0]])
Z([3,'_view data-v-09d1f594 foot-container'])
Z(z[24])
Z(z[8])
Z([3,'_checkbox-group data-v-09d1f594 foot-label'])
Z(z[10])
Z([1,'3'])
Z(z[25])
Z([[7],[3,'all_checked']])
Z([3,'_checkbox data-v-09d1f594 check'])
Z(z[28])
Z(z[51])
Z([3,'_text data-v-09d1f594'])
Z([3,'全选'])
Z([3,'_view data-v-09d1f594 foot-info'])
Z([3,'_view data-v-09d1f594'])
Z([a,[3,'共计'],[[6],[[7],[3,'cartList']],[3,'length']],[3,'种'],[[7],[3,'foods_count']],[3,'件商品']])
Z([3,'_view data-v-09d1f594 foods_price'])
Z([a,z[37][1],[[7],[3,'foods_price']]])
Z([[2,'!'],[[7],[3,'cart_show']]])
Z(z[8])
Z([3,'_button data-v-09d1f594 foot-btn btn1'])
Z(z[10])
Z([1,'4'])
Z([3,'mini'])
Z([3,'warn'])
Z([3,'编辑'])
Z(z[24])
Z(z[8])
Z(z[64])
Z(z[10])
Z([1,'5'])
Z(z[67])
Z(z[68])
Z([3,'返回'])
Z(z[24])
Z(z[8])
Z(z[64])
Z(z[10])
Z([1,'6'])
Z(z[67])
Z(z[68])
Z([3,'删除'])
Z(z[62])
Z([3,'_button data-v-09d1f594 foot-btn'])
Z(z[67])
Z(z[68])
Z([3,'提交订单'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cartcontrol$1321aa0c'])
Z([3,'_div data-v-2fc337a2 cartcontrol'])
Z([[2,'>'],[[6],[[7],[3,'food']],[3,'count']],[1,1]])
Z([3,'handleProxy'])
Z([3,'_div data-v-2fc337a2 cart-decrease'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'_span data-v-2fc337a2 inner icon-remove_circle_outline'])
Z([[2,'>'],[[6],[[7],[3,'food']],[3,'count']],[1,0]])
Z([3,'_div data-v-2fc337a2 cart-count'])
Z([a,[[6],[[7],[3,'food']],[3,'count']]])
Z(z[3])
Z([3,'_div data-v-2fc337a2 cart-add'])
Z(z[5])
Z([1,'1'])
Z([3,'_span data-v-2fc337a2 icon-add_circle'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'classify$3eb11e7f'])
Z([3,'_view data-v-51935736 container'])
Z([3,'_view data-v-51935736 body-container'])
Z([3,'_view data-v-51935736'])
Z([a,[3,'分类 '],[[7],[3,'badgeCount']]])
Z([3,'_view data-v-51935736 icon-add_circle'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'home$3881165f'])
Z([3,'_view data-v-8d8cd6d4 container'])
Z([3,'_view data-v-8d8cd6d4 body-container'])
Z([3,'_view data-v-8d8cd6d4 banner-container'])
Z([[7],[3,'autoplay']])
Z([[7],[3,'circular']])
Z([3,'_swiper data-v-8d8cd6d4'])
Z([[7],[3,'duration']])
Z([[7],[3,'gcolor']])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'itemList']])
Z(z[12])
Z([3,'_swiper-item data-v-8d8cd6d4'])
Z([[7],[3,'item']])
Z([3,'_image data-v-8d8cd6d4 swiper-image'])
Z(z[16])
Z([3,'_view data-v-8d8cd6d4'])
Z([3,'handleProxy'])
Z([3,'_button data-v-8d8cd6d4'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'mini'])
Z([3,'primary'])
Z([3,'button'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'me$b0d59f02'])
Z([3,'_view data-v-24bd1976'])
Z([3,' 我的 '])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'message$15c46b62'])
Z([3,'_view data-v-2e61a318 container'])
Z([3,'_view data-v-2e61a318 body-container'])
Z([3,'index'])
Z([3,'list'])
Z([[7],[3,'msgList']])
Z(z[3])
Z([3,'_view data-v-2e61a318 lists'])
Z([[7],[3,'index']])
Z([3,'_view data-v-2e61a318 name'])
Z([a,[[6],[[7],[3,'list']],[3,'name']]])
Z([3,'_view data-v-2e61a318 date'])
Z([a,[[6],[[7],[3,'list']],[3,'date']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shopping_list$36caed1e'])
Z([3,'_view data-v-38a5ba62 container'])
Z([3,'_view data-v-38a5ba62 body-container'])
Z([3,' shopping_list '])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'cart$7a5e86ff'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'classify$3eb11e7f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'home$3881165f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'message$15c46b62'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'me$b0d59f02'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'shopping_list$36caed1e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/cart$7a5e86ff.wxml','cartcontrol$1321aa0c','./components/cartcontrol$1321aa0c.wxml','./components/classify$3eb11e7f.wxml','./components/home$3881165f.wxml','./components/me$b0d59f02.wxml','./components/message$15c46b62.wxml','./components/shopping_list$36caed1e.wxml','./components/slots.wxml','./pages/cart/cart.wxml','../../components/cart$7a5e86ff','./pages/classify/classify.wxml','../../components/classify$3eb11e7f','./pages/home/home.wxml','../../components/home$3881165f','./pages/home/message/message.wxml','../../../components/message$15c46b62','./pages/me/me.wxml','../../components/me$b0d59f02','./pages/shopping_list/shopping_list.wxml','../../components/shopping_list$36caed1e'];d_[x[0]]={}
d_[x[0]]["cart$7a5e86ff"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':cart$7a5e86ff'
r.wxVkey=b
gg.f=$gdc(f_["./components/cart$7a5e86ff.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
cs.push("./components/cart$7a5e86ff.wxml:view:3:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./components/cart$7a5e86ff.wxml:view:4:6")
cs.push("./components/cart$7a5e86ff.wxml:view:4:6")
var fE=_n('view')
_rz(z,fE,'class',3,e,s,gg)
cs.push("./components/cart$7a5e86ff.wxml:image:5:8")
var cF=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
cs.pop()
_(fE,cF)
cs.push("./components/cart$7a5e86ff.wxml:text:6:8")
var hG=_n('text')
_rz(z,hG,'class',6,e,s,gg)
var oH=_oz(z,7,e,s,gg)
_(hG,oH)
cs.pop()
_(fE,hG)
cs.push("./components/cart$7a5e86ff.wxml:text:7:8")
var cI=_mz(z,'text',['bindtap',8,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oJ=_oz(z,12,e,s,gg)
_(cI,oJ)
cs.pop()
_(fE,cI)
cs.pop()
_(xC,fE)
cs.pop()
}
cs.push("./components/cart$7a5e86ff.wxml:view:9:6")
var lK=_n('view')
_rz(z,lK,'class',13,e,s,gg)
cs.push("./components/cart$7a5e86ff.wxml:checkbox-group:10:8")
var aL=_mz(z,'checkbox-group',['bindchange',14,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var tM=_v()
_(aL,tM)
cs.push("./components/cart$7a5e86ff.wxml:view:11:10")
var eN=function(oP,bO,xQ,gg){
cs.push("./components/cart$7a5e86ff.wxml:view:11:10")
var fS=_mz(z,'view',['class',22,'key',1],[],oP,bO,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,24,oP,bO,gg)){cT.wxVkey=1
cs.push("./components/cart$7a5e86ff.wxml:label:12:12")
cs.push("./components/cart$7a5e86ff.wxml:label:12:12")
var hU=_n('label')
_rz(z,hU,'class',25,oP,bO,gg)
cs.push("./components/cart$7a5e86ff.wxml:checkbox:13:14")
var oV=_mz(z,'checkbox',['checked',26,'class',1,'color',2,'name',3,'value',4],[],oP,bO,gg)
cs.pop()
_(hU,oV)
cs.pop()
_(cT,hU)
cs.pop()
}
cs.push("./components/cart$7a5e86ff.wxml:image:15:12")
var cW=_mz(z,'image',['mode',-1,'class',31,'src',1],[],oP,bO,gg)
cs.pop()
_(fS,cW)
cs.push("./components/cart$7a5e86ff.wxml:view:16:12")
var oX=_n('view')
_rz(z,oX,'class',33,oP,bO,gg)
cs.push("./components/cart$7a5e86ff.wxml:view:17:14")
var lY=_n('view')
_rz(z,lY,'class',34,oP,bO,gg)
var aZ=_oz(z,35,oP,bO,gg)
_(lY,aZ)
cs.pop()
_(oX,lY)
cs.push("./components/cart$7a5e86ff.wxml:view:18:14")
var t1=_n('view')
_rz(z,t1,'class',36,oP,bO,gg)
var e2=_oz(z,37,oP,bO,gg)
_(t1,e2)
cs.pop()
_(oX,t1)
cs.pop()
_(fS,oX)
var b3=_v()
_(fS,b3)
cs.push("./components/cart$7a5e86ff.wxml:template:20:12")
var o4=_oz(z,42,oP,bO,gg)
var x5=_gd(x[0],o4,e_,d_)
if(x5){
var o6=_1z(z,39,oP,bO,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[0],20,141)
cs.pop()
cT.wxXCkey=1
cs.pop()
_(xQ,fS)
return xQ
}
tM.wxXCkey=2
_2z(z,20,eN,e,s,gg,tM,'cart','idx','idx')
cs.pop()
cs.pop()
_(lK,aL)
cs.pop()
_(oB,lK)
var oD=_v()
_(oB,oD)
if(_oz(z,43,e,s,gg)){oD.wxVkey=1
cs.push("./components/cart$7a5e86ff.wxml:view:24:6")
cs.push("./components/cart$7a5e86ff.wxml:view:24:6")
var f7=_n('view')
_rz(z,f7,'class',44,e,s,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,45,e,s,gg)){c8.wxVkey=1
cs.push("./components/cart$7a5e86ff.wxml:checkbox-group:25:8")
cs.push("./components/cart$7a5e86ff.wxml:checkbox-group:25:8")
var lCB=_mz(z,'checkbox-group',['bindchange',46,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/cart$7a5e86ff.wxml:label:26:10")
var aDB=_n('label')
_rz(z,aDB,'class',50,e,s,gg)
cs.push("./components/cart$7a5e86ff.wxml:checkbox:27:12")
var tEB=_mz(z,'checkbox',['checked',51,'class',1,'color',2,'value',3],[],e,s,gg)
cs.pop()
_(aDB,tEB)
cs.push("./components/cart$7a5e86ff.wxml:text:28:12")
var eFB=_n('text')
_rz(z,eFB,'class',55,e,s,gg)
var bGB=_oz(z,56,e,s,gg)
_(eFB,bGB)
cs.pop()
_(aDB,eFB)
cs.pop()
_(lCB,aDB)
cs.pop()
_(c8,lCB)
cs.pop()
}
cs.push("./components/cart$7a5e86ff.wxml:view:31:8")
var oHB=_n('view')
_rz(z,oHB,'class',57,e,s,gg)
cs.push("./components/cart$7a5e86ff.wxml:view:32:10")
var xIB=_n('view')
_rz(z,xIB,'class',58,e,s,gg)
var oJB=_oz(z,59,e,s,gg)
_(xIB,oJB)
cs.pop()
_(oHB,xIB)
cs.push("./components/cart$7a5e86ff.wxml:view:33:10")
var fKB=_n('view')
_rz(z,fKB,'class',60,e,s,gg)
var cLB=_oz(z,61,e,s,gg)
_(fKB,cLB)
cs.pop()
_(oHB,fKB)
cs.pop()
_(f7,oHB)
var h9=_v()
_(f7,h9)
if(_oz(z,62,e,s,gg)){h9.wxVkey=1
cs.push("./components/cart$7a5e86ff.wxml:button:35:8")
cs.push("./components/cart$7a5e86ff.wxml:button:35:8")
var hMB=_mz(z,'button',['bindtap',63,'class',1,'data-comkey',2,'data-eventid',3,'size',4,'type',5],[],e,s,gg)
var oNB=_oz(z,69,e,s,gg)
_(hMB,oNB)
cs.pop()
_(h9,hMB)
cs.pop()
}
var o0=_v()
_(f7,o0)
if(_oz(z,70,e,s,gg)){o0.wxVkey=1
cs.push("./components/cart$7a5e86ff.wxml:button:36:8")
cs.push("./components/cart$7a5e86ff.wxml:button:36:8")
var cOB=_mz(z,'button',['bindtap',71,'class',1,'data-comkey',2,'data-eventid',3,'size',4,'type',5],[],e,s,gg)
var oPB=_oz(z,77,e,s,gg)
_(cOB,oPB)
cs.pop()
_(o0,cOB)
cs.pop()
}
var cAB=_v()
_(f7,cAB)
if(_oz(z,78,e,s,gg)){cAB.wxVkey=1
cs.push("./components/cart$7a5e86ff.wxml:button:37:8")
cs.push("./components/cart$7a5e86ff.wxml:button:37:8")
var lQB=_mz(z,'button',['bindtap',79,'class',1,'data-comkey',2,'data-eventid',3,'size',4,'type',5],[],e,s,gg)
var aRB=_oz(z,85,e,s,gg)
_(lQB,aRB)
cs.pop()
_(cAB,lQB)
cs.pop()
}
var oBB=_v()
_(f7,oBB)
if(_oz(z,86,e,s,gg)){oBB.wxVkey=1
cs.push("./components/cart$7a5e86ff.wxml:button:38:8")
cs.push("./components/cart$7a5e86ff.wxml:button:38:8")
var tSB=_mz(z,'button',['class',87,'size',1,'type',2],[],e,s,gg)
var eTB=_oz(z,90,e,s,gg)
_(tSB,eTB)
cs.pop()
_(oBB,tSB)
cs.pop()
}
c8.wxXCkey=1
h9.wxXCkey=1
o0.wxXCkey=1
cAB.wxXCkey=1
oBB.wxXCkey=1
cs.pop()
_(oD,f7)
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["cartcontrol$1321aa0c"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':cartcontrol$1321aa0c'
r.wxVkey=b
gg.f=$gdc(f_["./components/cartcontrol$1321aa0c.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
cs.push("./components/cartcontrol$1321aa0c.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./components/cartcontrol$1321aa0c.wxml:view:3:6")
cs.push("./components/cartcontrol$1321aa0c.wxml:view:3:6")
var fE=_mz(z,'view',['bindtap',3,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/cartcontrol$1321aa0c.wxml:label:4:8")
var cF=_n('label')
_rz(z,cF,'class',7,e,s,gg)
cs.pop()
_(fE,cF)
cs.pop()
_(xC,fE)
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,8,e,s,gg)){oD.wxVkey=1
cs.push("./components/cartcontrol$1321aa0c.wxml:view:6:6")
cs.push("./components/cartcontrol$1321aa0c.wxml:view:6:6")
var hG=_n('view')
_rz(z,hG,'class',9,e,s,gg)
var oH=_oz(z,10,e,s,gg)
_(hG,oH)
cs.pop()
_(oD,hG)
cs.pop()
}
cs.push("./components/cartcontrol$1321aa0c.wxml:view:7:6")
var cI=_mz(z,'view',['bindtap',11,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/cartcontrol$1321aa0c.wxml:label:8:8")
var oJ=_n('label')
_rz(z,oJ,'class',15,e,s,gg)
cs.pop()
_(cI,oJ)
cs.pop()
_(oB,cI)
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["classify$3eb11e7f"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[3]+':classify$3eb11e7f'
r.wxVkey=b
gg.f=$gdc(f_["./components/classify$3eb11e7f.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
cs.push("./components/classify$3eb11e7f.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/classify$3eb11e7f.wxml:view:3:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./components/classify$3eb11e7f.wxml:view:4:8")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_oz(z,4,e,s,gg)
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./components/classify$3eb11e7f.wxml:view:5:8")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
cs.pop()
_(xC,cF)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
d_[x[4]]["home$3881165f"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':home$3881165f'
r.wxVkey=b
gg.f=$gdc(f_["./components/home$3881165f.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
cs.push("./components/home$3881165f.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/home$3881165f.wxml:view:3:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./components/home$3881165f.wxml:view:4:8")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.push("./components/home$3881165f.wxml:swiper:5:10")
var fE=_mz(z,'swiper',['autoplay',4,'circular',1,'class',2,'duration',3,'indicatorActiveColor',4,'indicatorDots',5,'interval',6],[],e,s,gg)
var cF=_v()
_(fE,cF)
cs.push("./components/home$3881165f.wxml:swiper-item:6:12")
var hG=function(cI,oH,oJ,gg){
cs.push("./components/home$3881165f.wxml:swiper-item:6:12")
var aL=_mz(z,'swiper-item',['class',15,'key',1],[],cI,oH,gg)
cs.push("./components/home$3881165f.wxml:image:7:14")
var tM=_mz(z,'image',['mode',-1,'class',17,'src',1],[],cI,oH,gg)
cs.pop()
_(aL,tM)
cs.pop()
_(oJ,aL)
return oJ
}
cF.wxXCkey=2
_2z(z,13,hG,e,s,gg,cF,'item','index','item')
cs.pop()
cs.pop()
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./components/home$3881165f.wxml:view:11:8")
var eN=_n('view')
_rz(z,eN,'class',19,e,s,gg)
cs.push("./components/home$3881165f.wxml:button:12:10")
var bO=_mz(z,'button',['bindtap',20,'class',1,'data-comkey',2,'data-eventid',3,'size',4,'type',5],[],e,s,gg)
var oP=_oz(z,26,e,s,gg)
_(bO,oP)
cs.pop()
_(eN,bO)
cs.pop()
_(xC,eN)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
d_[x[5]]["me$b0d59f02"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[5]+':me$b0d59f02'
r.wxVkey=b
gg.f=$gdc(f_["./components/me$b0d59f02.wxml"],"",1)
if(p_[b]){_wl(b,x[5]);return}
p_[b]=true
try{
cs.push("./components/me$b0d59f02.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_oz(z,2,e,s,gg)
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
d_[x[6]]["message$15c46b62"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[6]+':message$15c46b62'
r.wxVkey=b
gg.f=$gdc(f_["./components/message$15c46b62.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
cs.push("./components/message$15c46b62.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/message$15c46b62.wxml:view:3:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./components/message$15c46b62.wxml:view:4:8")
var fE=function(hG,cF,oH,gg){
cs.push("./components/message$15c46b62.wxml:view:4:8")
var oJ=_mz(z,'view',['class',7,'key',1],[],hG,cF,gg)
cs.push("./components/message$15c46b62.wxml:view:5:10")
var lK=_n('view')
_rz(z,lK,'class',9,hG,cF,gg)
var aL=_oz(z,10,hG,cF,gg)
_(lK,aL)
cs.pop()
_(oJ,lK)
cs.push("./components/message$15c46b62.wxml:view:6:10")
var tM=_n('view')
_rz(z,tM,'class',11,hG,cF,gg)
var eN=_oz(z,12,hG,cF,gg)
_(tM,eN)
cs.pop()
_(oJ,tM)
cs.pop()
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,5,fE,e,s,gg,oD,'list','index','index')
cs.pop()
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
d_[x[7]]["shopping_list$36caed1e"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[7]+':shopping_list$36caed1e'
r.wxVkey=b
gg.f=$gdc(f_["./components/shopping_list$36caed1e.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
cs.push("./components/shopping_list$36caed1e.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/shopping_list$36caed1e.wxml:view:3:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_oz(z,3,e,s,gg)
_(xC,oD)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oJ=e_[x[8]].i
_ai(oJ,x[1],e_,x[8],1,1)
oJ.pop()
return r
}
e_[x[8]]={f:m7,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[9]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aL=e_[x[9]].i
_ai(aL,x[10],e_,x[9],1,1)
var tM=_v()
_(r,tM)
cs.push("./pages/cart/cart.wxml:template:1:48")
var eN=_oz(z,1,e,s,gg)
var bO=_gd(x[9],eN,e_,d_)
if(bO){
var oP=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tM.wxXCkey=3
bO(oP,oP,tM,gg)
gg.f=cur_globalf
}
else _w(eN,x[9],1,60)
cs.pop()
aL.pop()
return r
}
e_[x[9]]={f:m8,j:[],i:[],ti:[x[10]],ic:[]}
d_[x[11]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oR=e_[x[11]].i
_ai(oR,x[12],e_,x[11],1,1)
var fS=_v()
_(r,fS)
cs.push("./pages/classify/classify.wxml:template:1:52")
var cT=_oz(z,1,e,s,gg)
var hU=_gd(x[11],cT,e_,d_)
if(hU){
var oV=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[11],1,64)
cs.pop()
oR.pop()
return r
}
e_[x[11]]={f:m9,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[13]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oX=e_[x[13]].i
_ai(oX,x[14],e_,x[13],1,1)
var lY=_v()
_(r,lY)
cs.push("./pages/home/home.wxml:template:1:48")
var aZ=_oz(z,1,e,s,gg)
var t1=_gd(x[13],aZ,e_,d_)
if(t1){
var e2=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lY.wxXCkey=3
t1(e2,e2,lY,gg)
gg.f=cur_globalf
}
else _w(aZ,x[13],1,60)
cs.pop()
oX.pop()
return r
}
e_[x[13]]={f:m10,j:[],i:[],ti:[x[14]],ic:[]}
d_[x[15]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var o4=e_[x[15]].i
_ai(o4,x[16],e_,x[15],1,1)
var x5=_v()
_(r,x5)
cs.push("./pages/home/message/message.wxml:template:1:54")
var o6=_oz(z,1,e,s,gg)
var f7=_gd(x[15],o6,e_,d_)
if(f7){
var c8=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[15],1,66)
cs.pop()
o4.pop()
return r
}
e_[x[15]]={f:m11,j:[],i:[],ti:[x[16]],ic:[]}
d_[x[17]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var o0=e_[x[17]].i
_ai(o0,x[18],e_,x[17],1,1)
var cAB=_v()
_(r,cAB)
cs.push("./pages/me/me.wxml:template:1:46")
var oBB=_oz(z,1,e,s,gg)
var lCB=_gd(x[17],oBB,e_,d_)
if(lCB){
var aDB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cAB.wxXCkey=3
lCB(aDB,aDB,cAB,gg)
gg.f=cur_globalf
}
else _w(oBB,x[17],1,58)
cs.pop()
o0.pop()
return r
}
e_[x[17]]={f:m12,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var eFB=e_[x[19]].i
_ai(eFB,x[20],e_,x[19],1,1)
var bGB=_v()
_(r,bGB)
cs.push("./pages/shopping_list/shopping_list.wxml:template:1:57")
var oHB=_oz(z,1,e,s,gg)
var xIB=_gd(x[19],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[19],1,69)
cs.pop()
eFB.pop()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[x[20]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
function checkDeviceWidth() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
function transformRPX(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["body { min-height: 100%; }\n.",[1],"header-container { display: flex; align-items: center; color: white; padding: ",[0,60]," ",[0,10]," ",[0,20],"; font-size: ",[0,28],"; position: fixed; width: 100%; height: ",[0,40],"; left: 0; top: 0; z-index: 999; }\n.",[1],"header-btns { width: ",[0,100],"; text-align: center; font-size: ",[0,24],"; display: flex; flex-direction: column; justify-content: center; }\n.",[1],"header-back { width: ",[0,40],"; height: ",[0,40],"; margin-left: ",[0,10],"; }\n.",[1],"header-title { width: 100%; line-height: ",[0,52],"; text-align: center; }\n.",[1],"header-container .",[1],"icon { color: white; padding: 0 ",[0,10],"; }\n.",[1],"header-search-wrapper { flex: 1; display: flex; align-items: center; background: white; border-radius: ",[0,30],"; }\n.",[1],"header-search-icon { width: ",[0,30],"; height: ",[0,30],"; margin: 0 ",[0,20],"; }\n.",[1],"header-search-content { width: 100%; }\n.",[1],"body-container { font-size: ",[0,28],"; }\n@font-face { font-family: \x27icomoon\x27; src: url(\x27https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.eot\x27); src: url(\x27https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.eot\x27) format(\x27embedded-opentype\x27),\n	url(\x27https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.ttf\x27) format(\x27truetype\x27),\n	url(\x27https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.woff\x27) format(\x27woff\x27),\n	url(\x27https://www.zgsj1.com/Public/fm_static/bg_img/icomoon_font/icomoon.svg\x27) format(\x27svg\x27); font-weight: normal; font-style: normal; }\n[class^\x3d\x22icon-\x22], [class*\x3d\x22 icon-\x22] { font-family: \x27icomoon\x27 !important; speak: none; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-add_circle:before { content: \x22\\E900\x22; }\n.",[1],"icon-arrow_lift:before { content: \x22\\E901\x22; }\n.",[1],"icon-check_circle:before { content: \x22\\E902\x22; }\n.",[1],"icon-close:before { content: \x22\\E903\x22; }\n.",[1],"icon-favorite:before { content: \x22\\E904\x22; }\n.",[1],"icon-keyboard_arrow_right:before { content: \x22\\E905\x22; }\n.",[1],"icon-remove_circle_outline:before { content: \x22\\E906\x22; }\n.",[1],"icon-shopping_cart:before { content: \x22\\E907\x22; }\n.",[1],"icon-thumb_down:before { content: \x22\\E908\x22; }\n.",[1],"icon-thumb_up:before { content: \x22\\E909\x22; }\n",],[".",[1],"cart { height: ",[0,150],"; display: flex; align-items: center; border-bottom: ",[0,1]," solid #8F8F94; padding: ",[0,30],"; position: relative; }\n.",[1],"cart .",[1],"cart-select { width: 15%; text-align: center; }\n.",[1],"cart .",[1],"cart-image { width: 20%; height: 100%; margin-right: ",[0,20],"; }\n.",[1],"cart .",[1],"cart-info { width: 40%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }\n.",[1],"cart .",[1],"cart-info .",[1],"cart-price { color: #D43030; }\n.",[1],"cart .",[1],"cartcontrol { position: absolute; right: ",[0,20],"; bottom: ",[0,20],"; }\n.",[1],"foot-container { width: 100%; padding: ",[0,20],"; box-sizing: border-box; position: fixed; left: 0; bottom: 0; background: #F8F8F8; display: flex; justify-content: space-between; align-items: center; }\n.",[1],"foot-container .",[1],"foot-label { flex: 1; font-size: ",[0,25],"; font-weight: 100; display: flex; align-items: center; }\n.",[1],"foot-container .",[1],"foot-label .",[1],"check { margin-right: ",[0,10],"; }\n.",[1],"foot-container .",[1],"foot-info { flex: 2; margin-left: ",[0,20],"; font-size: ",[0,20],"; }\n.",[1],"foot-container .",[1],"foot-info .",[1],"foods_price { color: #D43030; }\n.",[1],"foot-container .",[1],"btn1 { margin-right: ",[0,10],"; }\n.",[1],"view-empty { width: ",[0,750],"; height: ",[0,750],"; display: flex; flex-direction: column; align-items: center; justify-content: center; }\n.",[1],"view-empty wx-image { width: ",[0,200],"; height: ",[0,200],"; }\n.",[1],"hint { font-size: ",[0,32],"; color: #999999; }\n.",[1],"btn { font-size: ",[0,29],"; color: #fff; background: red; margin-top: ",[0,100],"; border-radius: ",[0,9],"; padding: ",[0,20]," ",[0,200]," ",[0,20]," ",[0,200],"; }\n.",[1],"cartcontrol.",[1],"data-v-2fc337a2 { display: flex; flex-direction: row; align-items: center; font-size: ",[0,48],"; color: #D43030; }\n.",[1],"cartcontrol .",[1],"cart-decrease.",[1],"data-v-2fc337a2 { flex: 1; padding: ",[0,12],"; }\n.",[1],"cartcontrol .",[1],"cart-count.",[1],"data-v-2fc337a2 { font-size: ",[0,40],"; margin: 0 ",[0,12],"; text-align: center; color: #93999f; }\n.",[1],"cartcontrol .",[1],"cart-add.",[1],"data-v-2fc337a2 { flex: 1; padding: ",[0,12],"; }\n",],[".",[1],"header-container { display: flex; align-items: center; color: white; padding: ",[0,60]," ",[0,10]," ",[0,20],"; font-size: ",[0,28],"; }\n.",[1],"search-wrapper { flex: 1; display: flex; align-items: center; background: white; border-radius: ",[0,30],"; }\n.",[1],"search-icon { width: ",[0,30],"; height: ",[0,30],"; margin: 0 ",[0,20],"; }\n.",[1],"search-content { width: 100%; }\n.",[1],"msg { width: ",[0,100],"; }\n",],[".",[1],"content { flex: 1; justify-content: center; align-items: center; }\n.",[1],"title { font-size: ",[0,36],"; color: #8f8f94; }\n.",[1],"city { width: ",[0,100],"; text-align: center; }\n.",[1],"swiper-image { width: 100%; height: 100%; }\n",],[".",[1],"lists { padding: ",[0,20]," ",[0,30],"; border-bottom: ",[0,2]," solid #cccccc; }\n.",[1],"date { text-align: right; font-size: ",[0,24],"; color: #aaaaaa; }\n",],[],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:68:1)",{path:"./app.wxss"})();

;var __pageFrameEndTime__ = Date.now();
