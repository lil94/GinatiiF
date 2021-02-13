(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"ginati_atlas_1", frames: [[0,0,2160,1106],[3689,1379,256,373],[1353,1561,120,220],[4034,59,27,55],[1908,1561,74,74],[1901,1256,65,67],[0,1422,1995,137],[3924,1017,79,51],[3845,0,187,356],[3360,1379,327,374],[1982,1108,150,220],[3005,775,340,257],[1260,1108,323,187],[3845,589,243,212],[650,1561,180,220],[3845,358,239,229],[1260,1297,181,108],[3845,803,241,212],[2162,0,1238,773],[386,1561,262,169],[1901,1330,86,81],[984,1561,212,144],[4034,0,52,57],[3005,1082,1058,295],[1585,1256,314,161],[984,1707,102,102],[1997,1330,150,220],[0,1108,1258,312],[190,1561,194,231],[1088,1707,102,81],[1744,1716,102,81],[1198,1561,153,192],[1475,1561,115,220],[1997,1552,150,220],[3947,1379,130,220],[832,1561,150,220],[3005,1379,353,360],[1744,1561,162,153],[1592,1561,150,166],[2585,775,418,1080],[2162,775,421,1080],[3402,0,441,1080],[3947,1601,99,117],[0,1561,188,257],[1585,1108,395,146],[1443,1297,105,114],[3845,1017,77,62]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.background = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44copy = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49copy = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap55 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap55copy = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap56 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap56_1 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap56copy = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmapnati = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.dog = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Dolphin = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssets = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssetscopy = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiAssetscopy2 = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.golda = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.netanyahu = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.purpleButton = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.ribon = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.tcloud = function() {
	this.initialize(ss["ginati_atlas_1"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.entering = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tcloud();
	this.instance.setTransform(894.85,-333.45,0.3179,0.3196,-14.9984);

	this.instance_1 = new lib.tcloud();
	this.instance_1.setTransform(861,-321,0.4247,0.5016);

	this.instance_2 = new lib.tcloud();
	this.instance_2.setTransform(826,-287,0.6585,0.7516);

	this.instance_3 = new lib.flash0aiAssetscopy();
	this.instance_3.setTransform(890,-404,0.4933,0.4966);

	this.text = new cjs.Text(",הי\n.אני נתי והגעתם.ן לגינה שלי – גינתי\n.עזרו לי להשקות את הזרעים ולשתול אותם בגינה\n\n:בחרו את נושא המשחק והצטרפו", "normal 400 29px 'Rubik'");
	this.text.textAlign = "right";
	this.text.lineHeight = 36;
	this.text.lineWidth = 581;
	this.text.parent = this;
	this.text.setTransform(776,-339.55);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_4 = new lib.Bitmap43();
	this.instance_4.setTransform(177,-379,0.5213,0.4164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.entering, new cjs.Rectangle(177,-404,920.7,536.3), null);


(lib.vanG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap55copy();
	this.instance.setTransform(0,0,0.4058,0.393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vanG, new cjs.Rectangle(0,0,78.7,90.8), null);


(lib.leonardoDV = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap56copy();
	this.instance.setTransform(0,0,0.554,0.5183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leonardoDV, new cjs.Rectangle(0,0,84.8,99.5), null);


(lib.golda_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.golda();
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.golda_1, new cjs.Rectangle(-1,-1,99,117), null);


(lib.bibi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.netanyahu();
	this.instance.setTransform(0,0,0.4501,0.4041);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bibi, new cjs.Rectangle(0,0,84.6,103.9), null);


(lib.snunit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap42();
	this.instance.setTransform(0,0,0.4979,0.4953);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snunit, new cjs.Rectangle(0,0,120,105), null);


(lib.red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ribon();
	this.instance.setTransform(0,0,1.0836,0.8904);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(0,0,113.8,101.5), null);


(lib.nahlieli = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap40();
	this.instance.setTransform(0,0,0.5021,0.4585);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nahlieli, new cjs.Rectangle(0,0,120,105), null);


(lib.duhifat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap39();
	this.instance.setTransform(0,0,0.4938,0.4953);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.duhifat, new cjs.Rectangle(0,0,120,105), null);


(lib.dolphin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Dolphin();
	this.instance.setTransform(0,0,0.506,0.5301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dolphin, new cjs.Rectangle(0,0,75.9,88), null);


(lib.dog_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dog();
	this.instance.setTransform(0,0,0.8272,0.7647);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dog_1, new cjs.Rectangle(0,0,134,117), null);


(lib.seed_box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap22();
	this.instance.setTransform(0,0,0.5582,0.5134);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AgTALQgKgDgEgEQgCgEACgDQAGgEAKgDIARgCIAAAAIAQABIAFACQAGABAHAFQACADgCAEQgGAFgLACQgJACgIAAQgKAAgJgCg");
	this.shape.setTransform(177.1625,22.8691);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AgCANQgQAAgKgGIgEgDQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgDQADgEAHgBQAXgIAYAIIAHAEQAEADgCADIgBACIgEADQgLAGgQAAIgEAAg");
	this.shape_1.setTransform(177.0225,23.0127);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("ACzAtQgPgBgZgIQhDgUgpgJQgjgGgxgEIiIgQQgTgCgJgFQgFgDAAgDQgBgDAGgEQANgHAgACQBpAJA4AIQBYAMBGATIBFAVQAHADAAAEQAAAFgGADQgMAGgRAAIgJgBg");
	this.shape_2.setTransform(141.5229,14.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("ABFAUQgTAAgjgHQgkgHgSAAIgcAAQgRgBgLgEQgJgCABgGQAAgEAGgDQAIgEAMgBIAWAAQArAAAJABIBJAMQARADAJADQAJACgBAGQAAAEgGADQgKAFgOAAIgFAAg");
	this.shape_3.setTransform(126.7749,12.1321);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// glow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AgDAfQgIgDgDgFIgBgHIgBgOQAAgDgBgCQgCgDgJgBQgKgBgIgEQgHgEAAgEQAAgDAEgEQAEgCAJgCQAVgEAcAEIAPAEQAHADAFAFQAJAGACAFIACAIIABAQIAAAHQgDAGgJACQgLADgMAAQgLAAgLgDg");
	this.shape_4.setTransform(93.375,0.7809);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("AAqBAQgQgCgHgJIgEgHIgGgIQgggmgagXQgOgOgMgEIgIgDQgFgCAAgFQABgDAEgDQAEgDALgCQAjgFAXANQAIAEAEAFQAWASAjAlIAKALQAOARAEAHIACAGQgBAEgFADQgFAEgNACIgLABIgMgBg");
	this.shape_5.setTransform(100.025,4.8699);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AAnA7QgRgCgGgFIgKgMQgGgMgUgUQgdgdgZgQQgHgGAAgEQABgEAGgCQAQgIAWADQALABAHADIAPAKQAWARATAUQARAPAKAMIAOATQADAEAAAEQAAAFgIADQgLAFgOAAIgKgBg");
	this.shape_6.setTransform(99.3984,5.0188);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("AjoA3QgGgDAAgDQAAgDAEgDQAWgUA5gXIAkgOIAvgNQBMgUAngGQBIgLBfAFQAQAAAIAFQAFAEAAAFQAAAGgLACQgQADgWAAIgngBQhAAAhmAaQgdAHgWAGIgnAPQgaAJgOAJQgUAOgLAFQgNAGgOAAQgPAAgOgHg");
	this.shape_7.setTransform(30.4271,15.9474);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF99").s().p("AgEAtQgRgBgJgFQgEgBgBgEIgBgGIACg0IACgGIACgFQADgDAEgBIAKgDQATgEATAFIAIAEQAEADAAAEIgBAFQgCAIAAAMIgCAVIABASQAAADgHADQgKAFgQAAIgEAAg");
	this.shape_8.setTransform(0.7583,29.2479);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFF99").ss(3.5,1,1).p("AgLAEQABgCABgBQAGgEAGAAQAFAAAEAD");
	this.shape_9.setTransform(6.1375,169.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFDA4").s().p("AgJABQAGgEAGAAQAFAAAEADIAAAAIgDAAQgLAAgJAEIACgDg");
	this.shape_10.setTransform(6.1375,169.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFDA4").s().p("AAAAAIAAgBIABABIAAACIgBgCg");
	this.shape_11.setTransform(-35.3875,156.6375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFDA4").s().p("AgNAmQgNgFgHgLQgHgLABgNQABgOAJgJQAHgIALgEQALgDAJACQANAEAJAKQAIALABANQAAAMgIALQgIAMgMADQgGACgGAAQgGAAgHgCg");
	this.shape_12.setTransform(179.6202,164.842);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFDA4").s().p("AgNAmQgNgFgHgLQgHgLABgNQABgOAJgJQAHgIALgEQALgDAJACQANAEAJAKQAIALABANQAAAMgIALQgIAMgMADQgGACgGAAQgGAAgHgCg");
	this.shape_13.setTransform(179.3202,166.942);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFDA4").s().p("AgNAmQgNgFgHgLQgHgLABgNQABgOAJgJQAHgIALgEQALgDAJACQANAEAJAKQAIALABANQAAAMgIALQgIAMgMADQgGACgGAAQgGAAgHgCg");
	this.shape_14.setTransform(177.8202,164.542);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFDA4").s().p("AgJAsIgEgCIgDgCIgJgHQgHgHgFgKQgLgXAJgSQAGgMANgFQAMgFAMADQAMACAKAKQAKAIAEANIACAGIABAEIABAFQAAAHgCAGQgDAQgNAIQgIAGgLAAQgIAAgIgDg");
	this.shape_15.setTransform(1.9069,164.0438);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFF99").ss(7,1,1).p("AqBBYQgUgDgSgDQhAgLgtgMQgTgFgPgGQgQgFgMgGQgkgRAAgUQAAgCABgEQACgGAGgGQABgBABgBQAHgHAMgGQAagOAxgNQAIgCAJgDIABAAQAxgLBGgLQAJgBAJgCQAFAAAFgBQCCgSCdgJQCZgJCwAAQD7AADIARQBdAJBSALQEEAmAAA0QAAA1kEAmQjIAckHAHQhPAChUAAQgYAAgZAAIg6gBQiDgCh0gHQiUgKh8gRQgGgBgFgB");
	this.shape_16.setTransform(89.8873,174.8559,1.0161,1.5025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFDA4").s().p("ABKAMQg8gXhBACQg3AAgxARQgcgPgigKQgggIgogEIgJgBQgdgCg2gBIgJAAQCZgJCxAAQD6AADJARIhMAGQhFAHguAQQgoAPgcAYQgYgSgigNg");
	this.shape_17.setTransform(96.0475,162.0844,1.0161,1.5025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFF99").ss(7,1,1).p("AOBrDIAAVLAuAqHIAAVL");
	this.shape_18.setTransform(90.25,96.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFDA4").s().p("AtwCnQgWgCgJgVQgJgTAMgTQAJgMAUgLQAYgMAWgJQAhgMBDgSIBLgXQAtgOAfgGIBFgPQARgDAjgDIAbgFIAKAAIA6ABQAZAAAOgBIAMAAIAggBQANgBAKgDIAcgCIAPAAQAGgJAKgJQANgMAKgHIAGgEIANgPQAUgUAOgJQALgIAggNQAdgLASgDQAXgEAdAEQAyAGAdAUQANAJAOAQQAoApAPAmIAPgDQAfgEAoACIBGAHIBKALIAJACIARgCQAJADARACIA3AKQAhAGAWAAIAOAAQAGADAIABIAQABQAQABAbAGQBCAOA3AOIABAAIAgAJQATAFAjAQIAUAIQALAEAHAGQAIAIADALQADAJgCAIIgBAFQgEALgJAIQgIAHgMACQgPABgYgKIgZgLQgLAKgQABQgPACgTgGQgTgFgOgGIgegPQgLgEgRgEIgegGQgVgEhJgUIgagHIgTACQgXAHgMACQgUAEgPgGQgKgFgGgHIgDACQgKAGgaALIgSAIQgKAEgJgBQgLAAgKgGQgJgHgFgKQgEgKABgLQABgGACgFIgggEQgsgFgdAIIgZAIQgOAEgKgCQgRgCgJgNIgGgHQgFgHgFgOIgJgVQgEgIgJgKIgQgRQgKgJgEgDQgFgDgJgDQgcgIgLAAQgXgBgcAOQgfASgQAIIgOAGIgCAFQgFATgFAIQgJARgUACQgLACgJgEIgIAGQgIAFgOACIgYAAQgPgBgZACIgoABQgsgCgVAAQgYABgmAGQhDAKghAHIjaA+QgyAOgbAOIgYAMQgLAFgJAAIgFAAg");
	this.shape_19.setTransform(88.4261,13.1775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-3.5,219,201.1);


(lib.natiP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.flash0aiAssets();
	this.instance.setTransform(-85,-23,0.4063,0.3927);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.natiP, new cjs.Rectangle(-85,-23,169.9,424.2), null);


(lib.mashov = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text(",כמעט\nננסה שוב בהמשך", "normal 400 38px 'Rubik'", "#CC0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 319;
	this.text.parent = this;
	this.text.setTransform(143.05,-167.85);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.659)").s().p("A2QGlIAAtKMAshAAAIAANKg");
	this.shape.setTransform(143.05,-120.9);

	this.instance = new lib.Bitmap37();
	this.instance.setTransform(-24,-182);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mashov, new cjs.Rectangle(-24,-182,340,257), null);


(lib.mashov_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("!תשובה נכונה", "normal 400 47px 'Rubik'", "#00CC66");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 271;
	this.text.parent = this;
	this.text.setTransform(143.8,-151);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.659)").s().p("A1UE4IAApvMAqpAAAIAAJvg");
	this.shape.setTransform(141,-123.9);

	this.instance = new lib.Bitmap38();
	this.instance.setTransform(-17,-171);

	this.instance_1 = new lib.Bitmap37();
	this.instance_1.setTransform(-22,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mashov_1, new cjs.Rectangle(-22,-176,340,257), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF9D4D").s().p("ApZBxQhmgsGCiHQGDiHE7CYQCeBLBRBnQmTh6lpAxQhxAPhfAeIhJAcIgxABQhaAAgpgRg");
	this.shape.setTransform(-7.4149,40.3675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF9D4D").s().p("AnnCoQjJhOAAhtQAAhqDJg+QC/g6EoAAQEqAAC+A6QDKA+AABqQAABtjKBOQjLBOkdAAQkcAAjLhOg");
	this.shape_1.setTransform(-6.05,45.9294,1,0.7566);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF743C").s().p("AAABqIgPADIAAgFIjkgfQAWg/Ahg2QAPgYANgKQAOgLAcgGQB2gaB2AaQAcAGAPALQAMAJAPAZQAhA1AXBAIjkAfIAAAFg");
	this.shape_2.setTransform(-2.3599,26.333,1.2451,1.1637);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-75,13.7,137.9,50.89999999999999), null);


(lib.hook = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap56_1();
	this.instance.setTransform(30,6,0.4411,0.8445);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hook, new cjs.Rectangle(30,6,45,68.4), null);


(lib.hole = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(0,0,0.6329,0.4902);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hole, new cjs.Rectangle(0,0,50,25), null);


(lib.garden = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B7710").s().p("Ag+gPQgCgCABgEQABgBAAAAQABgBAAAAQABAAAAAAQABAAABABQAyAkBFABQADAAAAAFQABAEgEAAQhHgCg0glg");
	this.shape.setTransform(-176.5682,132.4513,1.6162,1.0959);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B7710").s().p("AA4AgQgogLgTgJQgggOgWgWQgDgDADgDQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAABQAWAVAfANQASAJAnALQAEABgBAEQgBABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgBAAg");
	this.shape_1.setTransform(-222.4704,125.4263,1.6162,1.0959);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B7710").s().p("Ag2AAQgDgBABgEQAAgEAEAAQAkAKBGAAQADAAAAAFQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAQhGAAgmgKg");
	this.shape_2.setTransform(-258.4697,132.132,1.6162,1.0959);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5B7710").s().p("AA/ASQgzgbhMAAQgEAAAAgEQAAgEADAAQBQABA0AaQADACgCAEQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_3.setTransform(-282.0705,112.8997,1.6162,1.0959);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5B7710").s().p("AAlApQgkgzgqgYQgDgCABgDQACgEADABQAsAZAlA2QACADgDACIgCABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_4.setTransform(-239.508,99.7593,1.6162,1.0959);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5B7710").s().p("AAdA7Qgqg3gVg6QgBgDADgCQADgBACAEQATA4AqA0QACADgCAEIgCABIgDgBg");
	this.shape_5.setTransform(-200.2213,105.3014,1.6162,1.0959);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B7710").s().p("AAaBHQgOg0grhVQgCgDADgDQABgBAAAAQABAAABAAQAAAAABABQAAAAABABQArBVAPA3QABAEgDABIgCAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_6.setTransform(-242.8363,24.9242,1.6162,1.0959);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B7710").s().p("AAeBHQgIgWgagvQgYgqgIgcQgBgDADgCQADgBABAEQAIAcAYAqQAbAuAIAWQABAEgDABIgBABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_7.setTransform(-242.8121,2.9695,1.6162,1.0959);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5B7710").s().p("AAWA2QgQgsghg7QgCgEADgCQADgCACADQAjBBAOApQABADgDACIgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_8.setTransform(-210.0881,52.4254,1.6162,1.0959);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5B7710").s().p("AAbA3QgrhAgPgqQgCgDAEgCQADgBABAEQAKAaAPAcIAgAyQACADgCACIgDABQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_9.setTransform(-180.9369,99.4823,1.6162,1.0959);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5B7710").s().p("AAnAqQgTgNgWgYIgogoQgCgDACgDQABAAAAgBQABAAAAAAQABAAAAAAQABAAABABIAlAoQAYAWASAOQADACgBAEQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgCgBg");
	this.shape_10.setTransform(-119.4357,129.1118,1.6162,1.0959);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5B7710").s().p("AAkA9QgMgcgXghIgog2QgDgDADgDQAAgBABgBQAAAAABAAQABAAAAAAQABABAAABIApA4QAXAgAMAcQACAEgDACIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_11.setTransform(-145.31,101.9006,1.6162,1.0959);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5B7710").s().p("AAUA3IgWg1QgPgggIgVQgBgEADgBQAEgBABADQAHAVAOAgIAXAzQABAEgDACIgCABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_12.setTransform(-113.6376,92.7661,1.6162,1.0959);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5B7710").s().p("AAKA/IgOg9QgJgkgDgaQAAgEADAAQADAAABAEQADAaAIAiIAPA8QABAEgEABIgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_13.setTransform(-152.1912,32.5873,1.6162,1.0959);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5B7710").s().p("AAIAmQgFgMgFgYIgMgkQgBgDADgCQABAAABAAQABAAAAAAQABAAAAABQABAAAAABIAKAlQAHAXAEAMQACADgDACIgCAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_14.setTransform(-169.2913,46.3283,1.6162,1.0959);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5B7710").s().p("AgBAuQgDgBAAgEQAFgpgFgoQAAgEADgBQACAAABAEQAGAogGAsQAAAAgBABQAAABAAAAQgBAAAAABQAAAAAAAAIgBAAg");
	this.shape_15.setTransform(-173.0386,-6.2077,1.6162,1.0959);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5B7710").s().p("AAPBGQgEgfgLgnIgUhDQgBgEADgBQAAgBABAAQABAAAAAAQABABAAAAQABABAAABIAVBFQALAnAEAfQAAAEgDABQgEAAAAgEg");
	this.shape_16.setTransform(-131.0875,42.0572,1.6162,1.0959);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5B7710").s().p("AAIA5QgRhJgFgnQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAEAAAAAEQAEAcASBRQABAEgEABIgBABQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_17.setTransform(-87.1393,64.3504,1.6162,1.0959);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5B7710").s().p("AgCBSQgDgBAAgEQAFgxAAgcQAAgpgFgiQAAgEADgCQABAAAAAAQABAAAAAAQAAAAAAABQABABAAABQAFAjAAArQgBAcgEAzQAAABgBABQAAAAAAABQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape_18.setTransform(-80.5282,13.0298,1.6162,1.0959);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5B7710").s().p("AAPBIQgNgdgIgoQgGgWgIgxQgBgDADgCQABAAABAAQABAAAAAAQABABAAAAQAAABAAABQAJAyAFAUQAIAnANAcQABAEgCACIgCABQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_19.setTransform(-47.4753,115.3583,1.6162,1.0959);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5B7710").s().p("AgUAvQgBgDACgDQAQgNAIgZQAGgRAEgeQABgEADAAQADABgBAEQgDAggIATQgJAagQAOIgCABQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_20.setTransform(-3.0696,119.3267,1.6162,1.0959);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5B7710").s().p("AgEAzQgDgBAAgEQAIgxAAgrQAAgEAEAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABQgBAsgHAzQAAABgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_21.setTransform(34.784,71.3769,1.6162,1.0959);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5B7710").s().p("AgEBEQgDgBAAgEQAIhLAAgzQAAgEAEAAQADgBAAAEQAAA1gIBMQgBABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgBAAg");
	this.shape_22.setTransform(-15.4386,73.2125,1.6162,1.0959);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5B7710").s().p("AgIBJQgEAAABgEIAJhFIAIhGQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABABQAEABgBADIgJBFIgIBGQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_23.setTransform(-42.3836,41.4243,1.6162,1.0959);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5B7710").s().p("AAKA7QAAgzgag/QgBgEADgCQABAAAAgBQABAAAAAAQABAAAAABQABAAAAABQAaBCABA1QAAAEgEAAQgDAAAAgEg");
	this.shape_24.setTransform(-24.8883,2.3268,1.6162,1.0959);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5B7710").s().p("AgZBBQgDgCABgEQAOgtAjhMQAAgBABgBQAAAAABgBQAAAAABAAQABABAAAAQADACgBAEQgiBKgPAvQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAIgCgBg");
	this.shape_25.setTransform(58.4468,110.7896,1.6162,1.0959);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5B7710").s().p("AgJA8QgDgBABgEQAKgvAHhAQAAgBAAAAQAAgBABgBQAAAAABAAQABAAAAAAQAEABgBAEQgIBFgJAqQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgCAAg");
	this.shape_26.setTransform(63.1533,44.1914,1.6162,1.0959);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5B7710").s().p("AgkA0QgBgDACgDQAngpAag4QACgEADACQADACgCADQgaA5gpAsIgCABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_27.setTransform(144.3466,124.2224,1.6162,1.0959);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5B7710").s().p("AgxAmQgCgDADgCQA7gkAjgkQAAAAABAAQAAgBABAAQABABAAAAQABABAAAAQACAEgDACQgiAjg7AlIgCABQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_28.setTransform(180.6726,109.8168,1.6162,1.0959);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5B7710").s().p("AgkBmQgDgCABgDQAYhWAvhtQAAgBABgBQAAAAABgBQABAAAAAAQABABABAAQADACgCAEQgvBsgYBVQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAg");
	this.shape_29.setTransform(103.1773,98.2437,1.6162,1.0959);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5B7710").s().p("AgrA3QgBgEACgCQA8gmAThAQABgDADAAQAEABgBAEQgUBEg+AnIgCABQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_30.setTransform(115.572,100.6926,1.6162,1.0959);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5B7710").s().p("AgkA5QgDgCABgEQASgyA2g5QABAAABAAQAAgBABAAQAAABABAAQAAABAAAAQACAEgCACQg0A3gSAxQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgCgBg");
	this.shape_31.setTransform(149.0256,45.1023,1.6162,1.0959);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5B7710").s().p("AgSBdQgDgCABgEQAbhXAIhZQAAgBAAgBQABgBAAAAQAAgBABAAQABAAAAABQAEABgBAEQgHBXgcBbQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAIgCgBg");
	this.shape_32.setTransform(36.2292,10.6285,1.6162,1.0959);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5B7710").s().p("AgVBUQgFgGAEgGQAgg0ABhhQAAgIAHgBQAHAAAAAIQgBBogkA5QgCAEgCAAQgCAAgDgDg");
	this.shape_33.setTransform(68.9902,-55.3203,1.6162,1.0959);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#70A11E").s().p("Agph2QBGDAANAtQgshIgnilg");
	this.shape_34.setTransform(-175.1945,82.4099,1.6162,1.0959);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#70A11E").s().p("A5+KdQADk+AShLQAoifDLCTQBnBLBkBwQhtjWhTjgQikm9BxheQBxhdC/GkQBgDRBNDwQgpjmgMjgQgYnBCNgXQCNgYC+IPQBfEGBCEMQgejvgBjxQgDnjCSgIQBugFAqDjQAcCbgGD0QAUkoArjCQBAkfBqATQBiARAhE/QAXDigLFcQAin1BMlEQBwngC3ASQDsAYgTMKQgGDsgeEvIgaECQAAACAbhnQAkiNAthpQCZlkDvBGQDcBAjOGmQh2D0jaEjIgKAOIAIgLQCVi+CMhxQDsi/BmCFQByCVi7DzQheB5h1BcMguzAAXQgFjqACjig");
	this.shape_35.setTransform(-38.2818,19.2521,1.6162,1.0959);

	this.instance = new lib.Bitmap18();
	this.instance.setTransform(0,57,1,0.6077);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.garden, new cjs.Rectangle(-307.1,-104.4,2302.1,247.5), null);


(lib.drops = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4472C4").s().p("Ag7gvQBCg/BYAKQAZADAGANQAMAZgkAaQgZAShAAbQhLAigUALQgsAYgCAVQAEhYBBg9g");
	this.shape.setTransform(84.5523,38.3338,1.6818,1.5607);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4472C4").s().p("AiOAXQAmg/AugiQArgfBFgWQBSgaAnASQASAIADAPQAEASgQAbQgHAMgUAbQgYAeg0AUQgaAKg/APQh9Aeg/BCQAXhDAfg1g");
	this.shape_1.setTransform(51.1803,87.3114,1.6818,1.5607);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4472C4").s().p("Ag3hNQgGgpAJgXQAGgQANgKQAPgLAPACQAfADARAuQAaBJgXBZQgFAKgGAWQgFAWgFALIgmBOIgsj/g");
	this.shape_2.setTransform(11.7656,3.836,1.6818,1.5607);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4472C4").s().p("Ahvi1QBLhtBYguQBAggA5AIQAgAFAYATQAaAUAIAbQAKAmgfA2QgnBJhQBKQgXAVh9BkQhKA8g7BJQg+BPghBQQg0kPDCkRg");
	this.shape_3.setTransform(45.1322,35.745);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4472C4").s().p("AgRCPQgEgRgQgyQgYhMgPhQQgHgpADgZQADgnAagQQAlgWAfAgQATASAZAwQAeA7gMBUQgMBOgnA9QgCADgVAYQgQATgCAIQAFgegJgmg");
	this.shape_4.setTransform(-13.2111,49.7135,1.6818,1.5607);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drops, new cjs.Rectangle(-27,-23.9,133.2,133.6), null);


(lib.board = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.659)").s().p("EgyugJ6MBk6gAoIAjVEMhlJAABg");
	this.shape.setTransform(316.8,-67.45);

	this.instance = new lib.Bitmap55();
	this.instance.setTransform(-70.9,-182.75,0.6225,0.7313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.board, new cjs.Rectangle(-70.9,-182.7,783.1,228.2), null);


(lib.wFade = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.42)").s().p("EhqBA5DMAAAhyFMDUDAAAMAAAByFg");
	this.shape.setTransform(-253.7798,122.375,1.115,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wFade, new cjs.Rectangle(-1010.3,-242.7,1513.1,730.2), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AV/OqIADgKIADgKIAAAIIgDAPIgDgDgAKjOCIADgBIAGgBIgBAAIgFAEIgCACIgCAIQgCAHgEADIgCAHQgCAGgBABIgBABgAkfIFIACAAIgBACIgBgCgArOFLIAFACIgDACgAqWDdIAGgQIABgDIAGAEQgFAGgFAKgAz2uIIADAFIgBAAQgCACgCABgA2FuLIABAAIAAAAgAyxusIAGAKIAHASIgCAAIgLgcg");
	this.shape.setTransform(141.35,94.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,282.7,188.3), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("ALBTRIACABQgBAFgCAEIABgKgAMLSXIAJAAIgBADIgIgDgALYQcIAQgpQAGgTAFgWIgBgOQgEgkAEgSQADgQALgTIAAgBQACgsgFhqQgBgoACgWQABgPADgOIACgbIAKgWIAagyQAJgQAIAGQAFCwAQCkQADAXgEAOQgBAIgJARIgTAkIgBAqIgGAvIgCAJgAU2QWIhNAAIgBgEQgIglAFg1IAJhTQgHgvgDghQgEg0AGgoIgBgNQgCgRgJABIAjhHQAFgLAIgGQAHgFAGABQAJgLAGAEQgHATgCAZIAEA4QAGA5gCAiIAAAFIAHA5IAMBXQAHA2AGBIIABACIAGAJIgWAAgAAiNCIAKgPIADAAIAqhAIgBAAIAPgWQAKgOACgIIABgIIAfguQACgDAAgDIAGgJIACgCQAygkAKglQADgLABgXQACgYACgLQAFgRAOgaQASgfAFgLIADAAIAMgZQAIgOAFgFQAMgIAJAFQgIAJgEAKIABgBQADgFACgCQAEgDAEACQAGgDAGADQgPAbgRAnQgBADAAAEQACAfgDAPQgDAOgNAZQgnBNgYAjIgXAgIhBB6IgkA/QgegNgdgQgACWLeIAAAAIAAgBgAgEMsIADgEIgBADIAAACIgCgBgAgVMhIACAAIAAAAIgCAAgAA9LyIAEgGIAAAFIAAABgAA+LqIAEgGIgBAHgAA5K/IAIgFIgEAFgAs8KmIAAABIgNAAIANgBgArlKcIAEADIgNAHgArIKNIAGABIgJAFIADgGgApFJNIgFAAQAPgCAJgCIABgBIgHAFgAolIKIADgFIAAAFgAneHJIAugqQAzgvAUgeIAWgmQANgXAKgNQAbgfA7gXQBQgfARgKQAZgPAvgoQAqgfAjACQgIAKgMAgQgMAdgMAKQgHAHgNAFIgWAIQgWAKgmAgQgmAhgVAKQgQAHgtAOQgnAMgUAOQgTANgTAcIgiAwQgcApgsAsIgGAGQgMgTgHgWgAycBrIADAHIgQAFQAFgIAIgEgAwQA9IAAAAIAAAAIAAAAgAsggxQAAgaAFgSQACgIAHgPIAmgNQChg4BVgNQAvgGASgIQAngRAvhDQAzhJAigSQgUAvgkA0QgWAfgvA6QgaAfgLALQgWAWgWAKQgTALgzAJQh7AViHAvIAAgMgA0uoIIABAAIAAABIgBgBgAy6oLIAEgIIAAAIIgFAAIABAAgAxwoeIAHgKIAAAKIgHAAIAAAAgAubpMIAAhCIAEgFIE5g8QBUgRAogMIBKgXQArgLAgABQgEAggUAaQgUAagcAJQgIADgMABIgUAEIgcAJIgcALQggALhFANIlAA8IgBgMgA1LpHIAGgBIgEAHIgCgGgAyBpnIACABIAAAEIgCAAgAttyDQACgJAAgSIAAgpQA7AABFgFQDfgPA5ABQgPBCgyAoIgBgEQgDgFgLgBQhHgCiZAMQhEAGg1ACQAMgQADgLg");
	this.shape.setTransform(135.5875,124.2807);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,271.2,248.6), null);


(lib.Symbol2copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AuIMLQl3lDAAnIQAAnHF3lDQF3lDIRAAQISAAF3FDQF3FDAAHHQAAHIl3FDQl3FDoSAAQoRAAl3lDg");
	this.shape.setTransform(128,110.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(0,0,256,220.4), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E003F","#500341","#FF01A5"],[0,0.012,1],0.1,-361.1,0.1,361.2).s().p("EhlvA4cMAAAhw3MDLfAAAMAAABw3g");
	this.shape.setTransform(651.2,361.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(0,0,1302.4,722.4), null);


(lib.Symbol1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4472C4").s().p("Ag7gvQBCg/BYAKQAZADAGANQAMAZgkAaQgZAShAAbQhLAigUALQgsAYgCAVQAEhYBBg9g");
	this.shape.setTransform(11.0357,35.503,0.8465,0.7777,0,179.8336,-179.8337);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4472C4").s().p("AiOAXQAmg/AugiQArgfBFgWQBSgaAnASQASAIADAPQAEASgQAbQgHAMgUAbQgYAeg0AUQgaAKg/APQh9Aeg/BCQAXhDAfg1g");
	this.shape_1.setTransform(27.7623,11.148,0.8465,0.7777,0,179.8336,-179.8337);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4472C4").s().p("Ag3hNQgGgpAJgXQAGgQANgKQAPgLAPACQAfADARAuQAaBJgXBZQgFAKgGAWQgFAWgFALIgmBOIgsj/g");
	this.shape_2.setTransform(47.722,52.7984,0.8465,0.7777,0,179.8336,-179.8337);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4472C4").s().p("Ahvi1QBLhtBYguQBAggA5AIQAgAFAYATQAaAUAIAbQAKAmgfA2QgnBJhQBKQgXAVh9BkQhKA8g7BJQg+BPghBQQg0kPDCkRg");
	this.shape_3.setTransform(30.886,36.8264,0.5033,0.4982,0,179.835,-179.835);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4472C4").s().p("AgRCPQgEgRgQgyQgYhMgPhQQgHgpADgZQADgnAagQQAlgWAfAgQATASAZAwQAeA7gMBUQgMBOgnA9QgCADgVAYQgQATgCAIQAFgegJgmg");
	this.shape_4.setTransform(60.2029,29.9759,0.8465,0.7777,0,179.8336,-179.8337);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0.2,0.1,67,66.5), null);


(lib.Symbol1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEA7QgEgEAGgCQAMgEAFgHIAMgPQAFgGAMgKQAnggARgQIAPgPIAJgKQAGgFAEAUQADATgFAOQgLAZgaAaQgKALgPAEQgQADgJAEQgNAFgPAAQgQAAgFgFg");
	this.shape.setTransform(7.0801,6.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,0,14.2,12.9), null);


(lib.Shadow_mazlef = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#175E5E").s().p("Ap3OQQAzh1BUiUICbkCQDElGBBjSQA6i7AAjJQAAjGg3i/QCDAMBRAWQBUAYAGAcIAAAAIGWZEQljBxlcAhQiPANiMAAQiMAAiIgNg");
	this.shape.setTransform(63.15,92.5375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shadow_mazlef, new cjs.Rectangle(0,0,126.3,185.1), null);


(lib.puddle_gelem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap49();
	this.instance.setTransform(0,0,1,0.8882);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.puddle_gelem, new cjs.Rectangle(0,0,314,143), null);


(lib.Symbol1copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.flash0aiAssetscopy2();
	this.instance.setTransform(0,0,0.4335,0.3946);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1copy3, new cjs.Rectangle(0,0,191.2,426.2), null);


(lib.Symbol1copy2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.flash0aiAssetscopy();
	this.instance.setTransform(0,0,0.3948,0.3933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2_1, new cjs.Rectangle(0,0,166.2,424.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7A180").s().p("AjlAGQAAgBASgCIAxgDQBRgFBRAAQBUgCBPAEIAxADIASACIgSAAIgyAAIiigBIihAEIgyABIgLABQgHAAAAgBg");
	this.shape.setTransform(39.1687,1.4759,0.9996,0.9996,2.5678);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAh/IAOAAQAJB/gXB8IgPAEQAYh9gJiCg");
	this.shape_1.setTransform(67.229,15.9674,0.9999,0.9999,2.568);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2D1B5").s().p("Ah7CYQhKgFg4gXQg+gagjg6Qgng/AZg4QAdhBB0gHQBAgDB0AHQC5gEC6AKIAgAAQAVB0gWB4QiaAnjFAPQgzAEgoAAIgsgBg");
	this.shape_2.setTransform(37.254,16.1582,0.9999,0.9999,2.568);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8927C").s().p("ABZBvIgTgGQgLgEgGgFQgTgOgMgFQgTgIgRAEQhDARgXADQg0AHgogPIAkiqQBagXBDgDQBVgFBDAZQANAFAFALQAGAMgTgBQgpgDgcgHQgNgDgSAAIgfAAQAtAOAXAJQAmAPAaARQA/AqggALQgFACgFgCIgKgFIgwgbQgWgKgYgIIgXgFQgOgDgIgDQAmARAhAaIAaAVQAQAOAAAMQAAAWgzgeIgWgPIgXgPQgFgDgIgCIgOgDQAkAUARAWIATAXQAKAPABAMQAAABABABQAAAAAAABQAAAAgBABQAAAAAAAAQgCADgDAAIgGgCg");
	this.shape_3.setTransform(84.4712,16.0445,0.9999,0.9999,2.568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,104,31.2), null);


(lib.Path_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#955D5E").s().p("AmAIAQhWgMg1gwQgngjgPgyQgPgyANgxQAKgnA6hWQA0hMADgyQADgdgOg2QgOg6AAgbQAAg/Avg/QAkgwBEg1QAzgpAUgUQAkglAJgmILgCSQAxAsAMBCQAMBDgeA4QguBUh+AvQglANhHAUQhLAVghAMQg6AUggAZQgoAegSAuQgJAYgSBOQgNBCgUAiQgxBViQAgQg5ANg0AAQgaAAgZgDg");
	this.shape.setTransform(58.6426,51.5083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,117.3,103), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD4723").s().p("AhABAIiIgFQhbgEgygGQhNgLg6gYIDthGQFsglFgBdQgGAUgnAKQhsAciKAHQgsACg7AAQhBAAhSgDg");
	this.shape.setTransform(47.675,6.705);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,95.4,13.4), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB527F").s().p("Ag9B2IA6jrIBBDrg");
	this.shape.setTransform(6.225,11.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,12.5,23.6), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6C96").s().p("Ag9A/QgRgbABggQABguAoggQAnggA3ACQAIAAANACQgaCHhCBJQgegQgSgbg");
	this.shape.setTransform(7.8973,10.5942);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0.1,0.1,15.700000000000001,21.099999999999998), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6C96").s().p("AgTBNQgxhMgUhnQAVgGAUgBQA2gBAoAgQAoAgACAuQABAlgYAeQgXAegmANQgLgOgNgTg");
	this.shape.setTransform(8.877,10.9716);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,17.8,22), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A287").s().p("AB9ItQhVgDg/gsQg2glgmg9QgphBAAg6QAAhFAdhJQAbhCAvg9QAlgwAQgkQAUgzgLguQgJgpg1gdQgWgMhJgZQg8gUgdgcQgngmAAhSQgBhXAygbQAYgNAvANQAmAKAdASQBDAoA1BmIApBTQAZAxAXAfQAPAVAiArQAaAmACAgQACAdgPAhQgLAVgYAkICAHlQg/AlhNAAIgMgBg");
	this.shape.setTransform(27.774,55.7607);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0.1,0,55.4,111.5), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(0,0,0.8333,0.8182);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,100,180), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(0,0,0.6,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Bitmap10();
	this.instance_1.setTransform(33.65,0,0.75,0.5909,14.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10_1, new cjs.Rectangle(0,0,120.6,148.9), null);


(lib.Symbol9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Bitmap9();
	this.instance_1.setTransform(0,0,0.6,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9_1, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(0,0,0.6923,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8_1, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(33.65,0,0.6,0.5909,14.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7_1, new cjs.Rectangle(0,0,120.6,148.9), null);


(lib.Symbol6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(33.65,0,0.7826,0.5909,14.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6_1, new cjs.Rectangle(0,0,120.6,148.9), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(0,0,0.6,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(0,0,0.5,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4_1, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(33.65,0,0.6,0.5909,14.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,0,120.6,148.9), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(0,0,0.4813,0.3652);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,0,0.3516,0.3485);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1_2, new cjs.Rectangle(0,0,90,130), null);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Bitmap8();
	this.instance_1.setTransform(0,0,0.6923,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8_2, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Bitmap7();
	this.instance_1.setTransform(0,0,0.6,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7_2, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.setTransform(0,0,0.7826,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6_2, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol5copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(0,0,0.6,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5copy, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7A180").s().p("AjlAGQAAgBASgCIAxgDQBRgFBRAAQBUgCBPAEIAxADIASACIgSAAIgyAAIiigBIihAEIgyABIgLABQgHAAAAgBg");
	this.shape.setTransform(152.2709,182.734,0.9997,0.9997,2.5677);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAh/IAOAAQAJB/gXB8IgPAEQAYh9gJiCg");
	this.shape_1.setTransform(180.329,197.2174,0.9999,0.9999,2.568);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2D1B5").s().p("Ah7CYQhKgFg4gXQg+gagjg6Qgng/AZg4QAdhBB0gHQBAgDB0AHQC5gEC6AKIAgAAQAVB0gWB4QiaAnjFAPQgzAEgoAAIgsgBg");
	this.shape_2.setTransform(150.354,197.4082,0.9999,0.9999,2.568);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8927C").s().p("ABZBvIgTgGQgLgEgGgFQgTgOgMgFQgTgIgRAEQhDARgXADQg0AHgogPIAkiqQBagXBDgDQBVgFBDAZQANAFAFALQAGAMgTgBQgpgDgcgHQgNgDgSAAIgfAAQAtAOAXAJQAmAPAaARQA/AqggALQgFACgFgCIgKgFIgwgbQgWgKgYgIIgXgFQgOgDgIgDQAmARAhAaIAaAVQAQAOAAAMQAAAWgzgeIgWgPIgXgPQgFgDgIgCIgOgDQAkAUARAWIATAXQAKAPABAMQAAABABABQAAAAAAABQAAAAgBABQAAAAAAAAQgCADgDAAIgGgCg");
	this.shape_3.setTransform(197.5712,197.2945,0.9999,0.9999,2.568);

	this.instance_1 = new lib.Bitmapnati();
	this.instance_1.setTransform(-7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5_1, new cjs.Rectangle(-7,0,353,360), null);


(lib.Symbol4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(0,0,0.5,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4_2, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol3copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(0,0,0.6,0.5909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("ALBTRIACABQgBAFgCAEIABgKgAMLSXIAJAAIgBADIgIgDgALYQcIAQgpQAGgTAFgWIgBgOQgEgkAEgSQADgQALgTIAAgBQACgsgFhqQgBgoACgWQABgPADgOIACgbIAKgWIAagyQAJgQAIAGQAFCwAQCkQADAXgEAOQgBAIgJARIgTAkIgBAqIgGAvIgCAJgAU2QWIhNAAIgBgEQgIglAFg1IAJhTQgHgvgDghQgEg0AGgoIgBgNQgCgRgJABIAjhHQAFgLAIgGQAHgFAGABQAJgLAGAEQgHATgCAZIAEA4QAGA5gCAiIAAAFIAHA5IAMBXQAHA2AGBIIABACIAGAJIgWAAgAAiNCIAKgPIADAAIAqhAIgBAAIAPgWQAKgOACgIIABgIIAfguQACgDAAgDIAGgJIACgCQAygkAKglQADgLABgXQACgYACgLQAFgRAOgaQASgfAFgLIADAAIAMgZQAIgOAFgFQAMgIAJAFQgIAJgEAKIABgBQADgFACgCQAEgDAEACQAGgDAGADQgPAbgRAnQgBADAAAEQACAfgDAPQgDAOgNAZQgnBNgYAjIgXAgIhBB6IgkA/QgegNgdgQgACWLeIAAAAIAAgBgAgEMsIADgEIgBADIAAACIgCgBgAgVMhIACAAIAAAAIgCAAgAA9LyIAEgGIAAAFIAAABgAA+LqIAEgGIgBAHgAA5K/IAIgFIgEAFgAs8KmIAAABIgNAAIANgBgArlKcIAEADIgNAHgArIKNIAGABIgJAFIADgGgApFJNIgFAAQAPgCAJgCIABgBIgHAFgAolIKIADgFIAAAFgAneHJIAugqQAzgvAUgeIAWgmQANgXAKgNQAbgfA7gXQBQgfARgKQAZgPAvgoQAqgfAjACQgIAKgMAgQgMAdgMAKQgHAHgNAFIgWAIQgWAKgmAgQgmAhgVAKQgQAHgtAOQgnAMgUAOQgTANgTAcIgiAwQgcApgsAsIgGAGQgMgTgHgWgAycBrIADAHIgQAFQAFgIAIgEgAwQA9IAAAAIAAAAIAAAAgAsggxQAAgaAFgSQACgIAHgPIAmgNQChg4BVgNQAvgGASgIQAngRAvhDQAzhJAigSQgUAvgkA0QgWAfgvA6QgaAfgLALQgWAWgWAKQgTALgzAJQh7AViHAvIAAgMgA0uoIIABAAIAAABIgBgBgAy6oLIAEgIIAAAIIgFAAIABAAgAxwoeIAHgKIAAAKIgHAAIAAAAgAubpMIAAhCIAEgFIE5g8QBUgRAogMIBKgXQArgLAgABQgEAggUAaQgUAagcAJQgIADgMABIgUAEIgcAJIgcALQggALhFANIlAA8IgBgMgA1LpHIAGgBIgEAHIgCgGgAyBpnIACABIAAAEIgCAAgAttyDQACgJAAgSIAAgpQA7AABFgFQDfgPA5ABQgPBCgyAoIgBgEQgDgFgLgBQhHgCiZAMQhEAGg1ACQAMgQADgLg");
	this.shape_1.setTransform(135.5875,124.2807);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3_2, new cjs.Rectangle(0,0,271.2,248.6), null);


(lib.Symbol2copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(0,0,0.4813,0.3652);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2copy2, new cjs.Rectangle(0,0,90,130), null);


(lib.Symbol2copy_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AuIMLQl3lDAAnIQAAnHF3lDQF3lDIRAAQISAAF3FDQF3FDAAHHQAAHIl3FDQl3FDoSAAQoRAAl3lDg");
	this.shape_1.setTransform(128,110.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2copy_1, new cjs.Rectangle(0,0,256,220.4), null);


(lib.Symbol1copy2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4E003F","#500341","#FF01A5"],[0,0.012,1],0.1,-361.1,0.1,361.2).s().p("EhlvA4cMAAAhw3MDLfAAAMAAABw3g");
	this.shape_1.setTransform(651.2,361.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2_2, new cjs.Rectangle(0,0,1302.4,722.4), null);


(lib.Symbol1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(0,0,0.3515,0.3485);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1_3, new cjs.Rectangle(0,0,90,130), null);


(lib.Shadow_mazlef_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#175E5E").s().p("Ap3OQQAzh1BUiUICbkCQDElGBBjSQA6i7AAjJQAAjGg3i/QCDAMBRAWQBUAYAGAcIAAAAIGWZEQljBxlcAhQiPANiMAAQiMAAiIgNg");
	this.shape_1.setTransform(63.15,92.5375);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shadow_mazlef_1, new cjs.Rectangle(0,0,126.3,185.1), null);


(lib.hook_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Bitmap56();
	this.instance_1.setTransform(30,6,0.4411,0.8445);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hook_1, new cjs.Rectangle(30,6,45,68.4), null);


(lib.timer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(-5.5,-3.3,0.6534,0.6552);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.51)").s().p("Al+FzQiYl4CYmFQF3h9GHB9QCXFyiXGLQjDBXi/AAQjAAAi8hXg");
	this.shape.setTransform(15.9997,20.3756,0.6536,0.6554);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timer, new cjs.Rectangle(-14,-9.6,60,60), null);


(lib.sound = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-4.45,-2.7,0.6535,0.6552);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.51)").s().p("Al+FzQiYl4CYmFQF3h9GHB9QCWFyiWGLQjDBXi/AAQjAAAi8hXg");
	this.shape.setTransform(17.1186,22.1225,0.6536,0.6554);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sound, new cjs.Rectangle(-12.9,-7.9,60,60), null);


(lib.replayGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("שחקו שוב", "normal 400 25px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 176;
	this.text.parent = this;
	this.text.setTransform(84.0149,5.8,1.1425,1);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.purpleButton();
	this.instance.setTransform(1,-11,0.4034,0.452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-11,205.9,101.4);


(lib.pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(4.1,12.7,0.6533,0.6554);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.51)").s().p("Al+FzQiYl4CYmFQF3h9GHB9QCXFyiXGLQjDBXi/AAQjAAAi8hXg");
	this.shape.setTransform(12.889,29.7017,0.6535,0.6555);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-0.3,60,60);


(lib.nextQues = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("שאלה הבאה", "normal 400 25px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 176;
	this.text.parent = this;
	this.text.setTransform(84.0149,6.8,1.1425,1);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.purpleButton();
	this.instance.setTransform(-13,-11,0.4742,0.452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-11,205.9,102.4);


(lib.nextq = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("כניסה", "normal 400 40px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 185;
	this.text.parent = this;
	this.text.setTransform(115.95,-104.2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.purpleButton();
	this.instance.setTransform(-4,-132,0.593,0.6952);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-132,234.3,101.5);


(lib.mGlass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap44copy();
	this.instance.setTransform(5,5,0.5314,0.5487);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBHQgKgKgGgLQgNgXAAgbQAAgpAdgdIAFgEQAbgZAmAAQAmAAAdAZIADAEQAeAdAAApQAAAbgNAXQgHALgKAKQgdAdgpAAQgpAAgdgdg");
	this.shape.setTransform(19.15,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,45.7,44.5);


(lib.exit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap47();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AidCdQglgmgQguQgMgiAAgnQAAhbBBhBIAJgIQA/g6BVAAQBcAABBBCQBCBBgBBbQABBchCBBQhBBChcAAQhbAAhChCg");
	this.shape.setTransform(22.25,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,57);


(lib.endGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("סיום משחק", "normal 400 25px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 176;
	this.text.parent = this;
	this.text.setTransform(84.0149,5.8,1.1425,1);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.purpleButton();
	this.instance.setTransform(1,-11,0.4034,0.452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-11,205.9,101.4);


(lib.check = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("בדיקה", "26px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 69;
	this.text.parent = this;
	this.text.setTransform(60.5,29.4,0.757,0.8141,0,-8.307,-8.3661);

	this.instance = new lib.Bitmap41();
	this.instance.setTransform(0.55,14.5,0.6105,0.6216,0,-4.985,-4.8982);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,5.1,115.9,76.30000000000001);


(lib.backToGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("חזרה למשחק", "normal 400 25px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 176;
	this.text.parent = this;
	this.text.setTransform(3.5149,-15.8,1.1425,1);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.purpleButton();
	this.instance.setTransform(-97,-33,0.4945,0.452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.4,-33,205.9,101.8);


(lib.undefined = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.text = new cjs.Text("בחר", "bold 17px 'Verdana'", "#660000");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(50.1,5.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3300").s().p("AoWCgIAAk/IQtAAIAAE/g");
	this.shape_4.setTransform(52.5,17.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.undefined, new cjs.Rectangle(-1,1.1,107,32), null);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.timesUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.nextQues = new lib.nextQues();
	this.nextQues.name = "nextQues";
	this.nextQues.setTransform(286,-125.15);
	new cjs.ButtonHelper(this.nextQues, 0, 1, 1);

	this.text = new cjs.Text("00:00", "normal 400 30px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(378,-391.85,0.4573,0.5327);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance = new lib.timer();
	this.instance.setTransform(378.6,-379.85,1.2769,1.2863,0,0,0,16.1,20.3);

	this.instance_1 = new lib.Symbol1copy3();
	this.instance_1.setTransform(627.15,-178.9,0.8189,0.8259,0,0,0,95.8,212.8);

	this.text_1 = new cjs.Text("!חבל, נגמר הזמן\n.ננסה שוב בהמשך\n\nבואו נמשיך לשאלה הבאה", "normal 400 30px 'Rubik'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 38;
	this.text_1.lineWidth = 683;
	this.text_1.parent = this;
	this.text_1.setTransform(378.5,-307.95);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.instance_2 = new lib.Bitmap43();
	this.instance_2.setTransform(0,-469,0.6161,0.6481);

	this.instance_3 = new lib.wFade();
	this.instance_3.setTransform(355.15,-211.85,1,1,0,0,0,-269.6,108.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.text_1},{t:this.instance_1},{t:this.instance},{t:this.text},{t:this.nextQues}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timesUp, new cjs.Rectangle(-385.6,-562.9,1513.1999999999998,730.0999999999999), null);


(lib.stopGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.backToGame = new lib.backToGame();
	this.backToGame.name = "backToGame";
	this.backToGame.setTransform(367.5,-115.85);
	new cjs.ButtonHelper(this.backToGame, 0, 1, 1);

	this.instance = new lib.natiP();
	this.instance.setTransform(634.5,-195.5,1,1,0,0,0,1.1,213.7);

	this.instance_1 = new lib.Bitmap49copy();
	this.instance_1.setTransform(336,-416,0.7637,0.7323);

	this.text = new cjs.Text(".חשוב לפעמים לקחת הפסקה\n\n,כשתחזרו נמשיך לעבוד\n.בינתיים אהינה מקצת צל ומים צוננים ", "normal 400 27px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 683;
	this.text.parent = this;
	this.text.setTransform(378.5,-307.1);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_2 = new lib.Bitmap43();
	this.instance_2.setTransform(0,-469,0.6161,0.6481);

	this.instance_3 = new lib.wFade();
	this.instance_3.setTransform(386.55,-219.65,1,1,0,0,0,-269.6,108.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.text},{t:this.instance_1},{t:this.instance},{t:this.backToGame}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stopGame, new cjs.Rectangle(-354.2,-570.7,1513.2,730.1), null);


(lib.odot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.exit();
	this.instance.setTransform(63.05,-404.1,1,0.886,0,0,0,26,28.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "17px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 207;
	this.text.parent = this;
	this.text.setTransform(379.3,-33.1);

	this.instance_1 = new lib.Bitmap45();
	this.instance_1.setTransform(316,-116,0.5939,0.5833);

	this.text_1 = new cjs.Text("אפיון ופיתוח: אורטל נאמן, עדי סמואל ולילית גורליק\n\n:אופיין ופותח במסגרת פרוייקט בקורסים\n1סביבות לימוד אינטראקטיביות 1, פיתוח אינטראקציה ואנימציה \n\nתשפ\"א", "27px 'Rubik'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 695;
	this.text_1.parent = this;
	this.text_1.setTransform(384.6,-328.75);

	this.instance_2 = new lib.Bitmap44();
	this.instance_2.setTransform(60,-81,0.5155,0.4839);

	this.instance_3 = new lib.logo();
	this.instance_3.setTransform(444.15,-387.95,0.5917,0.7251,0,0,0,-6.1,29.4);

	this.text_2 = new cjs.Text("אודות", "42px 'Rubik'", "#A65A02");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 55;
	this.text_2.lineWidth = 100;
	this.text_2.parent = this;
	this.text_2.setTransform(342.2,-409.35);

	this.instance_4 = new lib.Bitmap43();
	this.instance_4.setTransform(0,-469,0.6161,0.6481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.text_2},{t:this.instance_3},{t:this.instance_2},{t:this.text_1},{t:this.instance_1},{t:this.text},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.odot, new cjs.Rectangle(0,-469,762.7,501), null);


(lib.kredit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap48();
	this.instance.setTransform(60,-160,0.6005,0.5925);

	this.instance_1 = new lib.exit();
	this.instance_1.setTransform(37.05,-429.35,1,0.886);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.text = new cjs.Text("נתי, המזלף, הפרחים בגינה, כוסות המים של נתי ורקע המשחק \nלקוחים מאתר Freepik.com", "27px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 683;
	this.text.parent = this;
	this.text.setTransform(378.5,-297.2);

	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(482.8,-390.65,0.5917,0.7251,0,0,0,-6.1,29.4);

	this.text_1 = new cjs.Text("גינתיקרדיט", "42px 'Rubik'", "#A65A02");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 55;
	this.text_1.lineWidth = 196;
	this.text_1.parent = this;
	this.text_1.setTransform(341.85,-409.35);

	this.instance_3 = new lib.Bitmap43();
	this.instance_3.setTransform(0,-469,0.6161,0.6481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.text_1},{t:this.instance_2},{t:this.text},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kredit, new cjs.Rectangle(0,-469,762.7,501), null);


(lib.endW = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_81 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(81).call(this.frame_81).wait(1));

	// flower10
	this.instance = new lib.Symbol10_1();
	this.instance.setTransform(818.5,-205.85,1,1,0,0,0,60.3,74.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).wait(1).to({x:804.65,y:-130.8},0).wait(1).to({x:790.85,y:-55.75},0).wait(1).to({x:777,y:19.3},0).wait(1).to({x:763.2,y:94.3},0).wait(1).to({x:749.35,y:169.35},0).wait(1).to({x:735.55,y:244.4},0).wait(1).to({x:721.7,y:319.45},0).wait(1).to({x:707.9,y:394.5},0).wait(2));

	// flower9
	this.instance_1 = new lib.Symbol9_1();
	this.instance_1.setTransform(818.5,-205.85,1,1,0,0,0,45,65);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).wait(1).to({x:790.7,y:-118},0).wait(1).to({x:762.9,y:-30.15},0).wait(1).to({x:735.1,y:57.7},0).wait(1).to({x:707.35,y:145.45},0).wait(1).to({x:679.55,y:233.3},0).wait(1).to({x:651.75,y:321.15},0).wait(1).to({x:624,y:409},0).wait(11));

	// flower8
	this.instance_2 = new lib.Symbol8_1();
	this.instance_2.setTransform(647.7,-263.95,1,1,0,0,0,45,65);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).wait(1).to({x:629.45,y:-168.5},0).wait(1).to({x:611.2,y:-73.1},0).wait(1).to({x:592.95,y:22.35},0).wait(1).to({x:574.7,y:117.7},0).wait(1).to({x:556.45,y:213.15},0).wait(1).to({x:538.2,y:308.55},0).wait(1).to({x:520,y:404},0).wait(19));

	// flower7
	this.instance_3 = new lib.Symbol7_1();
	this.instance_3.setTransform(534.8,-322.55,1,1,0,0,0,60.3,74.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).wait(1).to({x:516.8,y:-220.35},0).wait(1).to({x:498.85,y:-118.2},0).wait(1).to({x:480.9,y:-16.05},0).wait(1).to({x:462.9,y:86.05},0).wait(1).to({x:444.95,y:188.2},0).wait(1).to({x:427,y:290.35},0).wait(1).to({x:409.05,y:392.55},0).wait(27));

	// flower6
	this.instance_4 = new lib.Symbol6_1();
	this.instance_4.setTransform(452.55,-273.65,1,1,0,0,0,60.3,74.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).wait(1).to({x:431.75,y:-177.65},0).wait(1).to({x:411,y:-81.65},0).wait(1).to({x:390.25,y:14.3},0).wait(1).to({x:369.45,y:110.25},0).wait(1).to({x:348.7,y:206.2},0).wait(1).to({x:327.95,y:302.2},0).wait(1).to({x:307.2,y:398.2},0).wait(35));

	// flower5
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(266.05,-268.75,1,1,0,0,0,45,65);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(32).to({_off:false},0).wait(1).to({x:258.15,y:-172.2},0).wait(1).to({x:250.3,y:-75.65},0).wait(1).to({x:242.45,y:20.9},0).wait(1).to({x:234.55,y:117.35},0).wait(1).to({x:226.7,y:213.9},0).wait(1).to({x:218.85,y:310.45},0).wait(1).to({x:211,y:407},0).wait(43));

	// flower4
	this.instance_6 = new lib.Symbol4_1();
	this.instance_6.setTransform(87.5,-265.85,1,1,0,0,0,45,65);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).wait(1).to({x:91.4,y:-169.85},0).wait(1).to({x:95.35,y:-73.85},0).wait(1).to({x:99.25,y:22.1},0).wait(1).to({x:103.2,y:118.05},0).wait(1).to({x:107.1,y:214},0).wait(1).to({x:111.05,y:310},0).wait(1).to({x:115,y:406},0).wait(51));

	// flower3
	this.instance_7 = new lib.Symbol3_1();
	this.instance_7.setTransform(-40.7,-274.5,1,1,0,0,0,60.3,74.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).wait(1).to({x:-33.65,y:-177.95},0).wait(1).to({x:-26.65,y:-81.4},0).wait(1).to({x:-19.65,y:15.15},0).wait(1).to({x:-12.6,y:111.65},0).wait(1).to({x:-5.6,y:208.2},0).wait(1).to({x:1.4,y:304.75},0).wait(1).to({x:8.4,y:401.3},0).wait(59));

	// flower2
	this.instance_8 = new lib.Symbol2();
	this.instance_8.setTransform(-259.05,-265.95,1,1,0,0,0,45,65);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).wait(1).to({x:-235.45,y:-170.5},0).wait(1).to({x:-211.85,y:-75.1},0).wait(1).to({x:-188.3,y:20.35},0).wait(1).to({x:-164.7,y:115.7},0).wait(1).to({x:-141.15,y:211.15},0).wait(1).to({x:-117.55,y:306.55},0).wait(1).to({x:-94,y:402},0).wait(67));

	// flower1
	this.instance_9 = new lib.Symbol1_2();
	this.instance_9.setTransform(-518.9,-124.4,1,1,0,0,0,45,65);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(1).to({x:-462.25,y:-36},0).wait(1).to({x:-405.6,y:52.4},0).wait(1).to({x:-348.95,y:140.8},0).wait(1).to({x:-292.3,y:229.2},0).wait(1).to({x:-235.65,y:317.6},0).wait(1).to({x:-179,y:406},0).wait(75));

	// holes
	this.instance_10 = new lib.hole();
	this.instance_10.setTransform(416.95,458.7,1,1,0,0,0,25,12.5);

	this.instance_11 = new lib.hole();
	this.instance_11.setTransform(516.55,458.7,1,1,0,0,0,25,12.5);

	this.instance_12 = new lib.hole();
	this.instance_12.setTransform(616.15,458.7,1,1,0,0,0,25,12.5);

	this.instance_13 = new lib.hole();
	this.instance_13.setTransform(18.55,458.7,1,1,0,0,0,25,12.5);

	this.instance_14 = new lib.hole();
	this.instance_14.setTransform(118.15,458.7,1,1,0,0,0,25,12.5);

	this.instance_15 = new lib.hole();
	this.instance_15.setTransform(217.75,458.7,1,1,0,0,0,25,12.5);

	this.instance_16 = new lib.hole();
	this.instance_16.setTransform(317.35,458.7,1,1,0,0,0,25,12.5);

	this.instance_17 = new lib.hole();
	this.instance_17.setTransform(715.9,458.7,1,1,0,0,0,25,12.5);

	this.instance_18 = new lib.hole();
	this.instance_18.setTransform(-81.05,458.7,1,1,0,0,0,25,12.5);

	this.instance_19 = new lib.hole();
	this.instance_19.setTransform(-180.65,458.7,1,1,0,0,0,25,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},1).wait(81));

	// Layer_1
	this.endGame = new lib.endGame();
	this.endGame.name = "endGame";
	this.endGame.setTransform(15,231.2);
	new cjs.ButtonHelper(this.endGame, 0, 1, 1);

	this.replayGame = new lib.replayGame();
	this.replayGame.name = "replayGame";
	this.replayGame.setTransform(232.25,231.2);
	new cjs.ButtonHelper(this.replayGame, 0, 1, 1);

	this.text = new cjs.Text("!כל הכבוד\nעזרנו לנתי לטפח את הגינה\n                       \n    :מספר הטעויות\n          :הציון שלך הוא", "normal 400 28px 'Rubik'");
	this.text.textAlign = "right";
	this.text.lineHeight = 35;
	this.text.lineWidth = 363;
	this.text.parent = this;
	this.text.setTransform(430.4827,12.6,1.229,1.1678);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_20 = new lib.Bitmap43();
	this.instance_20.setTransform(-37,-24,0.4017,0.4153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.text},{t:this.replayGame},{t:this.endGame}]}).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-563.9,-396.9,1442.6999999999998,872.7);


(lib.sadNati = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// mashov
	this.instance = new lib.mashov();
	this.instance.setTransform(103.35,-46.1,0.5941,0.6342,0,0,0,146,-53.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1));

	// nati
	this.instance_1 = new lib.flash0aiAssetscopy2();
	this.instance_1.setTransform(-86,2,0.4335,0.3946);

	this.instance_2 = new lib.Symbol1copy3();
	this.instance_2.setTransform(-66.55,315,1,1,25.7631,0,0,95.5,212.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:95.6,regY:213.1,rotation:25.5201,x:-48.5,y:286.55},0).wait(1).to({rotation:25.2766,x:-30.5,y:257.85},0).wait(1).to({rotation:25.0331,x:-12.5,y:229.25},0).wait(1).to({rotation:31.0077,x:-12.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.2,-127.3,449.6,676);


(lib.puddle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.instance = new lib.puddle_gelem();
	this.instance.setTransform(22.4,83.05,0.2675,0.2587,0,0,0,155.2,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:157,scaleX:0.2937,scaleY:0.2917,rotation:2.1817,x:19.65,y:82.5},0).wait(1).to({scaleX:0.3198,scaleY:0.3246,rotation:4.3635,x:16.4,y:82},0).wait(1).to({scaleX:0.3459,scaleY:0.3575,rotation:6.5452,x:13.15,y:81.5},0).wait(1).to({scaleX:0.3721,scaleY:0.3904,rotation:8.727,x:9.85,y:80.95},0).wait(1).to({scaleX:0.3982,scaleY:0.4233,rotation:5.5394,x:6.65,y:80.45},0).wait(1).to({scaleX:0.4244,scaleY:0.4563,rotation:2.3518,x:3.3,y:79.85},0).wait(1).to({scaleX:0.4505,scaleY:0.4892,rotation:-0.8359,x:0.05,y:79.2},0).wait(1).to({scaleX:0.4766,scaleY:0.5221,rotation:-4.0235,x:-3.2,y:78.65},0).wait(1).to({scaleX:0.5028,scaleY:0.555,rotation:-7.2111,x:-6.45,y:78.05},0).wait(1).to({scaleX:0.5289,scaleY:0.5879,rotation:-5.7689,x:-9.8,y:77.5},0).wait(1).to({scaleX:0.555,scaleY:0.6209,rotation:-4.3266,x:-13,y:77},0).wait(1).to({scaleX:0.5812,scaleY:0.6538,rotation:-2.8844,x:-16.25,y:76.5},0).wait(1).to({scaleX:0.6073,scaleY:0.6867,rotation:-1.4422,x:-19.55,y:76},0).wait(1).to({scaleX:0.6335,scaleY:0.7196,rotation:0,x:-22.8,y:75.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.2,24.1,199.60000000000002,103.80000000000001);


(lib.plant1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(5).call(this.frame_24).wait(5).call(this.frame_29).wait(5).call(this.frame_34).wait(5).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(1));

	// plant10
	this.instance = new lib.Symbol10();
	this.instance.setTransform(48.35,135.9,1,0.2177,0,0,0,60,169.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).wait(1).to({regX:50,regY:90,scaleX:0.9375,scaleY:0.311,rotation:3.7495,x:35.15,y:101.25},0).wait(1).to({scaleX:0.875,scaleY:0.4043,rotation:7.4991,x:33.05,y:84.25},0).wait(1).to({scaleX:0.8125,scaleY:0.4976,rotation:11.2486,x:31.8,y:67.45},0).wait(1).to({scaleX:0.75,scaleY:0.5909,rotation:14.9981,x:31.55,y:51.3},0).wait(1));

	// plant 9
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(73.55,129.85,1,0.3777,0,0,0,74.8,109.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(1).to({regX:45,regY:65,scaleY:0.5333,x:44.15,y:96.6},0).wait(1).to({scaleY:0.6889,x:44.5,y:80.35},0).wait(1).to({scaleY:0.8444,x:44.9,y:64},0).wait(1).to({scaleY:1,x:45.25,y:47.75},0).to({_off:true},1).wait(5));

	// plant8
	this.instance_2 = new lib.Symbol8_2();
	this.instance_2.setTransform(64.45,141.95,1,0.2536,0,0,0,65,108.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).wait(1).to({regX:45,regY:65,scaleY:0.4402,x:44.6,y:114.7},0).wait(1).to({scaleY:0.6268,x:44.75,y:98.6},0).wait(1).to({scaleY:0.8134,x:44.9,y:82.45},0).wait(1).to({scaleY:1,x:45,y:66.35},0).to({_off:true},1).wait(10));

	// plant7
	this.instance_3 = new lib.Symbol7_2();
	this.instance_3.setTransform(74.5,135.9,1,0.2891,0,0,0,75,109.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).wait(1).to({regX:45,regY:65,scaleY:0.4668,rotation:3.7497,x:39.4,y:105.7},0).wait(1).to({scaleY:0.6446,rotation:7.4995,x:35.5,y:88.6},0).wait(1).to({scaleY:0.8223,rotation:11.2492,x:32.7,y:71.8},0).wait(1).to({scaleY:1,rotation:14.9989,x:31,y:55.45},0).to({_off:true},1).wait(15));

	// plant6
	this.instance_4 = new lib.Symbol6_2();
	this.instance_4.setTransform(57.5,188.2,1,0.2891,0,0,0,57.5,109.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(1).to({regX:45,regY:65,scaleY:0.4668,rotation:3.7497,x:41.05,y:145.4},0).wait(1).to({scaleY:0.6446,rotation:7.4995,x:38.2,y:115.7},0).wait(1).to({scaleY:0.8223,rotation:11.2492,x:36.3,y:86.25},0).wait(1).to({scaleY:1,rotation:14.9989,x:35.55,y:57.3},0).to({_off:true},1).wait(20));

	// plant5
	this.instance_5 = new lib.Symbol5copy();
	this.instance_5.setTransform(74.85,132.15,1,0.2182,0,0,0,75,109.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).wait(1).to({regX:45,regY:65,scaleY:0.4136,x:41.8,y:102.15},0).wait(1).to({scaleY:0.6091,x:38.7,y:81.9},0).wait(1).to({scaleY:0.8045,x:35.6,y:61.65},0).wait(1).to({scaleY:1,x:32.5,y:41.5},0).to({_off:true},1).wait(25));

	// plant4
	this.instance_6 = new lib.Symbol4_2();
	this.instance_6.setTransform(89.5,139.9,1,0.2713,0,0,0,90,109.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).wait(1).to({regX:45,regY:65,scaleY:0.4535,x:44.65,y:112.15},0).wait(1).to({scaleY:0.6357,x:44.75,y:96.55},0).wait(1).to({scaleY:0.8178,x:44.9,y:80.95},0).wait(1).to({scaleY:1,x:45,y:65.35},0).to({_off:true},1).wait(30));

	// plant3
	this.instance_7 = new lib.Symbol3copy();
	this.instance_7.setTransform(74.35,147.45,1,0.3068,0,0,0,75,110);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(1).to({regX:45,regY:65,scaleY:0.4978,rotation:3.7497,x:37.75,y:112.25},0).wait(1).to({scaleY:0.6889,rotation:7.4995,x:32.3,y:91},0).wait(1).to({scaleY:0.8799,rotation:11.2492,x:28.15,y:70.1},0).wait(1).to({scaleY:1.0709,rotation:14.9989,x:25.15,y:49.65},0).to({_off:true},1).wait(35));

	// plant2
	this.instance_8 = new lib.Symbol2copy2();
	this.instance_8.setTransform(75,130,1,0.2331,0,0,0,75,129.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).wait(1).to({regX:45,regY:65,scaleY:0.4248,x:41.05,y:98.5},0).wait(1).to({scaleY:0.6165,x:37.1,y:82.15},0).wait(1).to({scaleY:0.8083,x:33.15,y:65.85},0).wait(1).to({scaleY:1,x:29.2,y:49.55},0).to({_off:true},1).wait(40));

	// plant1
	this.instance_9 = new lib.Symbol1_3();
	this.instance_9.setTransform(85.2,146.75,1,0.3685,0,0,0,90,129.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:45,regY:65,scaleY:0.5263,x:41.4,y:108.4},0).wait(1).to({scaleY:0.6842,x:42.6,y:94},0).wait(1).to({scaleY:0.8421,x:43.8,y:79.65},0).wait(1).to({scaleY:1,x:45,y:65.25},0).to({_off:true},1).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-29.2,132.1,223.29999999999998);


(lib.nati = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// mashov
	this.instance = new lib.mashov_1();
	this.instance.setTransform(98.8,-44.7,0.5941,0.6342,0,0,0,148.1,-47.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1));

	// nati
	this.instance_1 = new lib.flash0aiAssetscopy();
	this.instance_1.setTransform(-88,16,0.4092,0.3933);

	this.instance_2 = new lib.Symbol1copy2_1();
	this.instance_2.setTransform(-89.8,312.4,1.0434,1,28.0557,0,0,82.6,211.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:83.1,regY:212.4,scaleX:1.0398,rotation:26.9835,x:-65.65,y:285.3},0).wait(1).to({scaleX:1.0361,rotation:25.9113,x:-41.65,y:257.25},0).wait(1).to({scaleX:1.0325,rotation:24.839,x:-17.65,y:229.3},0).wait(1).to({scaleX:1.0283,rotation:29.0781,x:-17.75,y:226.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.1,-126.1,465.90000000000003,667.6);


(lib.Symbol5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7A180").s().p("AjeA0IBAgVQBKgVBSgTQBZgVBFgMIAxgIQASgCAAABIgSAEIgwALQhXAShGARQhTAShKAUIgvAMIgRAEIgBgBg");
	this.shape_4.setTransform(208.0883,98.6637,1.3088,1.0134,0,-33.1093,168.2021);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Agxh1IAOgEQAaB8A7B3IgQAAQg4hzgbh8g");
	this.shape_5.setTransform(249.4286,108.3473,1.3092,1.0136,0,-33.1112,168.2021);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2D1B5").s().p("AkzC/Qg2htgMh2IAfgIQCqg0C8gqQASgEA+gSQA5gSAjgGQBygVAuA4QAnAwgUBHQgSBAg0AnQgwAkhGAWQg0AQhQANQi6AfijAAIgFAAg");
	this.shape_6.setTransform(210.3816,109.9568,1.3092,1.0136,0,-33.1112,168.2021);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9A287").s().p("AhPB9IgCgEQgCgMAGgQIAMgbQAJgXAegfIgNAHQgHADgEAEIgSAUIgRAUQgpApgGgVQgDgLALgSIATgaQAYgfAggcQgKAJgeANQgVANgSAPQgMAKgbAbQgKALgIgBQgVgCANgZQAIgOAQgSQAUgWAggXQAUgPAogYIgeAIQgRAEgMAGQgXANgpANQgSAGACgOQACgMAMgIQA5goBVgQQBBgMBcAAIBSCdQgiAXg0AGQgbADhCgBQgSAAgPAMQgKAIgPATQgFAGgKAGIgQALQgEADgDAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_7.setTransform(271.5743,107.6731,1.3092,1.0136,0,-33.1112,168.2021);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B7A180").s().p("AjlAGQAAgBASgCIAxgDQBRgFBRAAQBUgCBPAEIAxADIASACIgSAAIgyAAIiigBIihAEIgyABIgLABQgHAAAAgBg");
	this.shape_8.setTransform(143.3716,175.7866,0.9997,0.9997,2.5676);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAh/IAOAAQAJB/gXB8IgPAEQAYh9gJiCg");
	this.shape_9.setTransform(171.429,190.2674,0.9999,0.9999,2.568);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2D1B5").s().p("Ah7CYQhKgFg4gXQg+gagjg6Qgng/AZg4QAdhBB0gHQBAgDB0AHQC5gEC6AKIAgAAQAVB0gWB4QiaAnjFAPQgzAEgoAAIgsgBg");
	this.shape_10.setTransform(141.454,190.4582,0.9999,0.9999,2.568);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8927C").s().p("ABZBvIgTgGQgLgEgGgFQgTgOgMgFQgTgIgRAEQhDARgXADQg0AHgogPIAkiqQBagXBDgDQBVgFBDAZQANAFAFALQAGAMgTgBQgpgDgcgHQgNgDgSAAIgfAAQAtAOAXAJQAmAPAaARQA/AqggALQgFACgFgCIgKgFIgwgbQgWgKgYgIIgXgFQgOgDgIgDQAmARAhAaIAaAVQAQAOAAAMQAAAWgzgeIgWgPIgXgPQgFgDgIgCIgOgDQAkAUARAWIATAXQAKAPABAMQAAABABABQAAAAAAABQAAAAgBABQAAAAAAAAQgCADgDAAIgGgCg");
	this.shape_11.setTransform(188.6712,190.3445,0.9999,0.9999,2.568);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#955D5E").s().p("ADfHWQgsgVgTgHQgmgNg6AHQhAALgfACQhKAEhEggQhEghgng5QhQh3BVi2QAJgTAcgyQAZgsALgbQAdhGgDhUQgChUgfhFIhOgwQBPghByA4QBAAfAUApQAMAcAIBOQAEAqAFBWQAHBLATAzQASAxA4A5IBfBhQAyA6AjBTQAvBwg5AaQgMAGgPAAQgSAAgVgIg");
	this.shape_12.setTransform(127.0766,64.8385,0.9999,0.9999,-42.4304);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EF9D4D").s().p("ArACDQh4gzHFicQHFieFyCxQBzA3BeBRQAuApAYAeQnYiOmnA5QjUAch2A5Ig3ABQhrAAgwgUg");
	this.shape_13.setTransform(47.5931,52.4379,0.9999,0.9999,-42.4304);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#955D5E").s().p("ABrDEQgWgQgQgbQgRgigKgPQgRgbgWgMQgOgIgZgEIgrgHQgqgJgjgcQgigagQgmQgQgmAFgqQAGgqAZghIEKAlQBGA1AlBPQAmBPgHBUQgDAggNAXQgQAcgbAFIgLABQgVAAgUgPg");
	this.shape_14.setTransform(76.7908,48.3429,0.9999,0.9999,-42.4304);

	this.instance_2 = new lib.Path_3();
	this.instance_2.setTransform(104.1,72.75,0.9999,0.9999,-42.4304,0,0,27.9,55.6);
	this.instance_2.alpha = 0.25;
	this.instance_2.compositeOperation = "multiply";

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#955D5E").s().p("AiKDBQgdgJgHgYIABgvQAHg/AMgrQAQg5AcgqQAggwAxgcQA1gfA3ADQAhACAWANQAdASAJAhQAGAWgGAXQgFAXgPASQgQARgmAWQgqAWgPANQgRAPgOAaIgYAuQgfA6gnAQQgOAGgPAAQgMAAgNgEg");
	this.shape_15.setTransform(41.7041,75.2484,0.9999,0.9999,-42.4304);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhqAxQhMgdgwg5QgMgOgGgMQAlgEAggBQBEBOBwgDQBtgCBHhIQAhABAjAFQghAyg1AgQg1Aig+AKQgYAEgXAAQg1AAg2gUg");
	this.shape_16.setTransform(111.6888,113.7306,0.9999,0.9999,-42.4304);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BD4723").s().p("AAHHtIgHhiIgFBiImqAAIgRg4IBmo7IALlZQAdgIAhgFIAdE2ID0AfID2gfIAdk2QAqAHATAFIAMFaIBlI7IgQA4g");
	this.shape_17.setTransform(140.2249,146.3193,0.9999,0.9999,-42.4304);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B7A180").s().p("AhHBvIBIhuIBHhvIAeguIgGAOIgTAiQggA4glA5QgnA9gjAwQgPAUgKAMIgKALQgBgBAfgtg");
	this.shape_18.setTransform(109.5409,168.9597,0.9995,0.9995,-42.4299);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#73736F").s().p("AgPAxIACgEIAHgJQALgRACgRQADgQgHgTIgEgPIADADIAHAKQAKARgDAVQgEAWgNAOQgFAGgFADIgEABIAAAAg");
	this.shape_19.setTransform(106.3183,57.7982,0.9995,0.9995,-42.4299);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#73736F").s().p("Ag3ArQAHgnAVgZQAXgcAigPQAMgEAKgCQAIgBAAABQABABgIACIgUAIQghAQgVAbQgRAUgMAoQgHAbgBAAQgDgBAGgbg");
	this.shape_20.setTransform(106.2674,56.1776,0.9995,0.9995,-42.4299);

	this.instance_3 = new lib.Path_7();
	this.instance_3.setTransform(65.15,104.7,0.9999,0.9999,-42.4304,0,0,9.2,10.9);
	this.instance_3.alpha = 0.1992;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Path_8();
	this.instance_4.setTransform(103.25,69.6,0.9999,0.9999,-42.4304,0,0,8.2,10.5);
	this.instance_4.alpha = 0.1992;
	this.instance_4.compositeOperation = "multiply";

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag0AXQgcgLgIgQQABADBSgOIBegRQAAANgOAUQgMATgWAIQgOAEgUABIgGAAQgcAAgZgKg");
	this.shape_21.setTransform(84.8987,86.7572,0.9999,0.9999,-42.4304);

	this.instance_5 = new lib.Path_10();
	this.instance_5.setTransform(69.85,73.7,0.9999,0.9999,-42.4304,0,0,6.4,11.8);
	this.instance_5.alpha = 0.1992;
	this.instance_5.compositeOperation = "multiply";

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#825052").s().p("AAHAlQgTgFgagPQgNgHgGgHQgIgKADgLQANgjA3AYQA3AWADAeQAAAGgBACQgCACgEABQgNAGgPAAQgLAAgLgDg");
	this.shape_22.setTransform(74.0059,56.1312,0.9999,0.9999,-42.4304);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#825052").s().p("Ag7AdIgFgFQgCgCABgFQAHgeA5gRQA5gSAJAkQADALgKAJQgGAFgPAHQgaANgVADIgOABQgTAAgQgIg");
	this.shape_23.setTransform(50.0002,78.3191,0.9999,0.9999,-42.4304);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#955D5E").s().p("AgFAbQgDgMABgPQgBgPADgLQADgLACAAQADAAADALQADALAAAPQAAAPgDAMQgDALgDAAQgCAAgDgLg");
	this.shape_24.setTransform(82.381,67.1377,0.9995,0.9995,-42.4299);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#955D5E").s().p("AgFAbQgCgLAAgQQAAgPACgLQADgLACAAQAEAAACALQACALAAAPQAAAQgCALQgCALgEAAQgCAAgDgLg");
	this.shape_25.setTransform(61.4474,86.2728,0.9995,0.9995,-42.4299);

	this.instance_6 = new lib.Path_13();
	this.instance_6.setTransform(176.05,181.1,0.9999,0.9999,-42.4304,0,0,47.7,6.8);
	this.instance_6.alpha = 0.2383;
	this.instance_6.compositeOperation = "multiply";

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#91321C").s().p("AAOJQQgKkRgKl2QgQoVgEkOIAGgBQAMEoAOH8QAaOTgGAAIAAAAQgCAAgKkMg");
	this.shape_26.setTransform(267.0743,258.4526,0.9992,0.9992,-42.4304);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#91321C").s().p("AgZNbQgDAAAGkNQAGkQALl3QAPoaALkHIAGACQgED4gQInQgaOUgGAAIAAAAg");
	this.shape_27.setTransform(245.5535,278.3278,0.9992,0.9992,-42.4304);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#91321C").s().p("AhODmIAWgXQBEhMAfhsQAbhYAAh1IgBg5IAGgBIAEA6QAFBzgcBeQgRA4geA0QgaAtggAgIgeAdg");
	this.shape_28.setTransform(157.7379,228.1595,0.9995,0.9995,-42.4299);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#91321C").s().p("AAQCxQgNhPgJhQQgKhTgGhPIgCggIAHAAIAqFhg");
	this.shape_29.setTransform(182.2808,196.6862,0.9995,0.9995,-42.4299);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#91321C").s().p("AgPCyQAEhpAGhMIAMiuIAJAAQgCA/gIBvQgGBtgGBIg");
	this.shape_30.setTransform(189.4417,190.039,0.9995,0.9995,-42.4299);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#91321C").s().p("AgVBOQgkhPgMh5IgFg+QgBgRABgFIACAAIALBUQAJA3AIAjQANA5AWAxQAeBCA0AzIACAPQg+g0gihMg");
	this.shape_31.setTransform(221.8409,164.8921,0.9995,0.9995,-42.4299);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#91321C").s().p("AhwADQgugEAAgDQAAgCAvACIBvABQAsAABEgDQAvgCAAACQAAADguAEQg2AGg6ABIgKAAQg1AAgygFg");
	this.shape_32.setTransform(198.6031,205.288,0.9992,0.9992,-42.4304);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BD4723").s().p("AA9p9Ih5AAIghZfImzgfQgUgmgRg2QghhqAMhEQAPhVAPiQQAEgsgFgtQgjj5A4pHQASi4AYjBIAVidIGTgFIAAgBICNAAIAAABIGTAFIAVCdQAYDCASC3QA4JHgiD5QgGAtAFAsQAOCQAPBVQAMBEghBqQgRA2gUAmImzAfg");
	this.shape_33.setTransform(241.6387,253.0025,0.9999,0.9999,-42.4304);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2D1B5").s().p("Aj0IvQhOg7iAi9QiJjKgChWQgBg6A2hPQAmg5A+g9QBnANBShPQBPhLAEhmQBAg2A6geQBNgpA2AIQBrAPC2BTQDABXhMAUQiiArApBpQAfBQCRBvQBcBFhhCpQglBAg2A8QgxA2gjAWQhDBZg9AtQhhBIhpgKQg9gFhtAMIgPABQgwAAgugjg");
	this.shape_34.setTransform(137.5687,144.1555);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F9A287").s().p("AlZFJQjljxgBhQQgDhTBph3QA0g8A1grIiHiVIA3g2IgBgBIAdgaIABAAIA7gyICICVIAggfQApgkAogfQCAhdBRALQBtAQCzBPQC+BUhMAVQiWAqgmAmQggAgAqAoQALAMBjBFQBSA5AhAwQBCBghRCgQgfA+guA2QgqAzgjAVQglAziLBCQimBLhHAmIgNAGQhshSi9jHg");
	this.shape_35.setTransform(136.0962,145.6498);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F9A287").s().p("AhsBeIBCi7QAdgTAkADQAlADAWAXQAsAvgdBCQgcBChBALQgRADgRAAQgoAAgmgQg");
	this.shape_36.setTransform(105.7749,55.7207,0.9999,0.9999,-42.4304);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9A287").s().p("AhzF/Qg5gMglgZQglgZgfgvQgog+gTheQgOhFgEhgQgJjGCDhUQBag6B3gHQBygHBmArQBZAlAmBEQAkA9AABjQgBFsi8BaQg+AehOAEIgbABQg3AAg8gNg");
	this.shape_37.setTransform(70.6904,73.0718,0.9999,0.9999,-42.4304);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#955D5E").s().p("AAMAwQgFgDgFgGQgNgOgDgWQgEgVALgRQAHgPADACQABABgGAOQgHASADARQACARALARIAJANIAAAAIgEgBg");
	this.shape_38.setTransform(53.096,106.4113,0.9992,0.9992,-42.4304);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#955D5E").s().p("AAzAsQgMgogRgUQgVgbghgQQgbgKAAgBQAAgBAIABQAKACAMAEQAjAOAXAdQAUAZAHAnQAGAbgDABQgBAAgHgbg");
	this.shape_39.setTransform(51.4816,106.2256,0.9992,0.9992,-42.4304);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EF977F").s().p("AgDBrQhBgLgchCQgdhCAsgvQAWgXAlgDQAkgDAdATIBCC7QgmAQgoAAQgRAAgRgDg");
	this.shape_40.setTransform(51.1575,105.6463,0.9999,0.9999,-42.4304);

	this.instance_7 = new lib.Path_20();
	this.instance_7.setTransform(98.75,133.05,0.9999,0.9999,-42.4304,0,0,58.6,51.5);
	this.instance_7.alpha = 0.2109;
	this.instance_7.compositeOperation = "multiply";

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#955D5E").s().p("AsnM3Qh+g0gSiJQgQh+BNhrQAqgzATgbQAiguAFgoQAFgrgghOQgihSACgnQACg4Avg1QAigoBBgrQBFguAXgTQAwgnAbgqQAZgmAVhDQAeheAGgPQAqhnAzg8QBGhVBcgLQCUgTBZAEQBhAEA2APQBKAVA4A2QArApAkBEQAgA8ARBBQAJAhALBmQAJBTAWAxQAYA2BEApQAQAKBtA0QBxA2A4BRQAfAuALAzQALA3gNAxQgMAsgZBFQgNA5AeA4IAcAyQAPAdADAYQAGAigOAlQgMAigbAdQg3A7hOASQhLAShSgZQh2gkhlhfQhWhRhFh4Qggg3gLgQQgcglgggTQhMgri3AbQg0AIgWATQgYAWACAsQACA9gCAdQgDAygQAkQgjBRhlAxQguAWhXAWQhhAYglAPQhHAcgLADQgTAFgSAAQgZAAgYgKg");
	this.shape_41.setTransform(98.5638,101.74,0.9999,0.9999,-42.4304);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EF9D4D").s().p("Ao6DDQjthaAAh/QAAh8DthHQDehEFcAAQFdAADeBEQDtBHAAB8QAAB/jtBaQjtBblOAAQlOAAjshbg");
	this.shape_42.setTransform(57.0946,60.4158,0.9999,0.9999,-42.4304);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BF743C").s().p("AAACQIgWADIAAgGIlNgpQAghVAxhLQAXgjASgLQAUgOApgJQBUgRBYAAQBaAABTARQAqAJAUAOQARALAXAjQAyBLAfBVIlNApIAAAGg");
	this.shape_43.setTransform(40.9531,36.4587,0.9999,0.9999,-42.4304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_7},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_6},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_5},{t:this.shape_21},{t:this.instance_4},{t:this.instance_3},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_2},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5_2, new cjs.Rectangle(-7.4,0,353.09999999999997,359.8), null);


(lib.Symbol2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Shadow_mazlef();
	this.instance_1.setTransform(101.45,89.6,0.6336,0.667,0,-8.8788,172.3662,63.4,92.5);
	this.instance_1.alpha = 0.2109;
	this.instance_1.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#969799").s().p("AAPATQgJgCgLgGQgMgGgGgGQgHgHACgGQACgFALAAQALAAALAHQANAGAGAJQAGAJgEAEQgCAEgGAAIgFgBg");
	this.shape.setTransform(11.9746,13.5319,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#969799").s().p("AgEANQgJgEgGgGQgFgFADgGQACgFAIgBQAIgBAIADQAJAEAFAGQAFAFgBAGQgCAFgIABIgEAAQgGAAgHgCg");
	this.shape_1.setTransform(6.5156,30.4532,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#969799").s().p("AAOAXQgLgDgLgJQgLgJgGgJQgGgKAEgEQADgFALAEQALADAKAJQAMAKAGAIQAGAKgEAEQgCADgEAAIgIgCg");
	this.shape_2.setTransform(6.2323,23.0839,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#969799").s().p("AgEANQgNgEgHgIQgIgGADgGQACgFAKAAQAJAAAMAEQANAFAHAGQAIAFgBAFQgBAGgLABIgFABQgJAAgJgEg");
	this.shape_3.setTransform(19.0986,29.1554,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#969799").s().p("AAMATQgJgBgJgGQgKgHgFgGQgFgIADgFQADgFAJABQAJABAJAHQAKAGAFAHQAFAIgDAEQgCAEgHAAIgDAAg");
	this.shape_4.setTransform(12.5305,24.0329,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#969799").s().p("AARAVQgLgCgMgIQgNgHgHgHQgHgJACgFQADgFALABQAMACAMAIQAOAIAHAIQAHAJgEAFQgCADgFAAIgHgBg");
	this.shape_5.setTransform(17.158,16.9478,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#969799").s().p("AAPAUQgLAAgKgHQgMgHgGgIQgGgJAEgFQAEgEAJACQAJACALAGQALAGAGAHQAGAHgCAFQgCAFgJAAIgCAAg");
	this.shape_6.setTransform(21.366,22.4152,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#969799").s().p("AASAWQgMgCgMgIQgNgIgHgIQgHgJADgFQADgFALADQALACAMAHQANAIAHAIQAHAIgDAGQgBADgHAAIgFAAg");
	this.shape_7.setTransform(29.6979,22.7047,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#969799").s().p("AAMATQgJgBgJgGQgKgGgFgHQgFgIADgFQACgFAKABQAJABAJAGQAKAGAFAHQAFAIgDAFQgCAEgHAAIgDAAg");
	this.shape_8.setTransform(25.7962,13.3666,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#969799").s().p("AgFALQgMgHgHgGQgHgIADgFQACgGALABQALABALAHQAMAHAHAIQAGAJgDAFQgDAEgGAAQgJAAgQgKg");
	this.shape_9.setTransform(21.1077,9.2119,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#969799").s().p("AAPAWQgLgCgLgJQgMgIgGgIQgGgJADgFQADgFALADQALACALAJQAMAIAGAIQAHAJgEAFQgCADgGAAIgGgBg");
	this.shape_10.setTransform(35.0147,12.9957,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#969799").s().p("AARAWQgMgCgMgIQgNgIgHgJQgHgJAEgFQADgEALACQAKADANAIQANAIAHAHQAHAJgCAEQgCAFgIAAIgFgBg");
	this.shape_11.setTransform(33.5608,5.8335,0.6333,0.6667,0,-8.8784,172.3671);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EBB926").s().p("AuDgYIAGgXQG3BsHIgIQHIgHG1h6IAFAXQm3B7nLAHIg5AAQmuAAmehlg");
	this.shape_12.setTransform(127.4223,131.773,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EBB926").s().p("AtcgIIAMguQGkBgGvgHQGugHGghuIAMAuQmmBwm1AHIg4AAQmYAAmOhbg");
	this.shape_13.setTransform(125.636,120.3383,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EBB926").s().p("Ap2gBIAGgXQE3AyE6gFQE8gFE0g8IAGAXQk3A9k/AFIg8AAQkfAAkcgug");
	this.shape_14.setTransform(116.0889,59.7369,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EBB926").s().p("ApNANIALguQJEBWJBhpIALAvQlCA6lDAAQkLAAkLgog");
	this.shape_15.setTransform(114.2882,48.2098,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#943D9B").s().p("ABbDcQiDgRhZg+QhyhOgfgeQhFhDgRhZQgNhGBJgXQA3gRBKALQDMAgCCBNQA7AjA0AvQA4A0AVAvQAaA7ggAvQgdArhaAIQgUACgVAAQgrAAgzgHg");
	this.shape_16.setTransform(21.5014,17.2623,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7B287F").s().p("Ai5EKQgUgDgKgGQgNgHgQgWQhKhrgjiNQgrisA/hUILAE/QgZCbjNA2QhfAZhiAAQhCAAhDgLg");
	this.shape_17.setTransform(23.0821,22.9415,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#500E54").s().p("AkEAjQh0gOg0gVQA0gVB0gNQB2gNCOAAQCPAAB3ANQByANA1AVQg1AVhyAOQh2ANiQAAQiPAAh1gNg");
	this.shape_18.setTransform(111.6892,37.1132,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#73317A").s().p("AlIA3QiIgXAAggQAAgfCIgXQCIgXDAABQDAgBCIAXQCIAXAAAfQAAAgiIAXQiIAWjAAAQi/AAiJgWg");
	this.shape_19.setTransform(111.388,35.1856,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A329A3").s().p("ApJJLIBZxCIABAAQABgcBdgfQBdgfCGgSQCGgSBhAFQBjAGAKAaIGkP+IhOAtQhmAzh9AkQjhBAj1AAQjAAAjMgng");
	this.shape_20.setTransform(128.125,86.9695);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7B287F").s().p("AlmC5IJus6IBfBDIooTAg");
	this.shape_21.setTransform(57.0575,66.2014,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7B287F").s().p("Ai8KxQgrgOgfgYQgkgbgSgjQgTgnAIgrQAHgtAhgYQAjgZAtAOQAuAPAHAoQAmgMANguQALgrgPgrQgTgzg0g7Qg+hBgcgiQhChQgkhoQgihjgEhuQgFigA9hwQBIiDCcgcQB2gVB1AxQBvAvBQBfQBcBtAOB2QARCLhyBLQgChegphYQgohXhGg/Qgvgpg1gXQg5gag4ABQg9ABg1AfQg3AggWA1QgWA0AIBKQAIBXAqBfQAdBDA+BnQBPCDAUAmQAzBhAVBRQAQA/gFA1QgHA/glAmQgjAmg8AIQgQACgQAAQgnAAgpgNg");
	this.shape_22.setTransform(175.6419,71.9681,0.6336,0.667,0,-8.8788,172.3662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2_1, new cjs.Rectangle(-0.1,0.2,202.1,155.70000000000002), null);


(lib.startbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.nextq();
	this.instance.setTransform(-8.2,59.25,0.5322,0.5322,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtA8IAAh3IBbAAIAAB3g");
	this.shape.setTransform(25.6,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-11,124.7,54.1);


(lib.plant10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// plant
	this.instance = new lib.Symbol8();
	this.instance.setTransform(60.05,193.95,1,0.2182,0,0,0,60,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleY:0.4136,x:0.05,y:127.6364},0).wait(1).to({scaleY:0.6091,y:85.2245},0).wait(1).to({scaleY:0.8045,y:42.8125},0).wait(1).to({scaleY:1,y:0.4005},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.plant9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// plant
	this.instance = new lib.Symbol7();
	this.instance.setTransform(75,193,1,0.2182,0,0,0,75,109.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleY:0.4136,x:0,y:126.8375},0).wait(1).to({scaleY:0.6091,y:84.6267},0).wait(1).to({scaleY:0.8045,y:42.4159},0).wait(1).to({scaleY:1,y:0.2051},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.plant8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// plant
	this.instance = new lib.Symbol6();
	this.instance.setTransform(65,205,1,0.1364,0,0,0,65,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleY:0.3523,x:0.0125,y:142.5001},0).wait(1).to({scaleY:0.5682,x:0.025,y:95.0002},0).wait(1).to({scaleY:0.7841,x:0.0375,y:47.5003},0).wait(1).to({scaleY:1,x:0.05,y:0.0005},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.plant7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// plant
	this.instance = new lib.Symbol5_2();
	this.instance.setTransform(75,194.9,1,0.209,0,0,0,75,109.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:162.1,regY:171.1,scaleY:0.4068,x:162.1,y:198.55},0).wait(1).to({scaleY:0.6045,y:189.45},0).wait(1).to({scaleY:0.8023,y:180.35},0).wait(1).to({scaleY:1,y:171.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,0.1,353.09999999999997,359.79999999999995);


(lib.plant6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// plant
	this.instance = new lib.Symbol4();
	this.instance.setTransform(57.6,200.1,1,0.1269,0,0,0,57.6,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:141.3,regY:94.1,scaleY:0.3452,x:141.3,y:170.3},0).wait(1).to({scaleY:0.5634,x:141.35,y:142.45},0).wait(1).to({scaleY:0.7817,x:141.4,y:114.65},0).wait(1).to({scaleY:1,x:141.45,y:86.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.2,282.9,217.29999999999998);


(lib.plant5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// plant
	this.instance = new lib.Symbol3();
	this.instance.setTransform(75,201.95,1,0.1636,0,0,0,75,109.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:135.6,regY:124.3,scaleY:0.3727,x:135.6,y:184.5},0).wait(1).to({scaleY:0.5818,y:164.6},0).wait(1).to({scaleY:0.7909,y:144.75},0).wait(1).to({scaleY:1,x:135.65,y:124.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,271.3,248.6);


(lib.plant4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// plant
	this.instance = new lib.Symbol2copy();
	this.instance.setTransform(90,197.95,1,0.1999,0,0,0,90,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:128,regY:110.2,scaleY:0.3999,x:128,y:176.35},0).wait(1).to({scaleY:0.6,y:154.6},0).wait(1).to({scaleY:0.8,y:132.85},0).wait(1).to({scaleY:1,y:111.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.9,256,220.4);


(lib.plant3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// plant
	this.instance = new lib.Symbol1copy2();
	this.instance.setTransform(88,223,1,0.2773,0,0,0,75,109.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:651.2,regY:361.2,scaleY:0.458,x:661.95,y:309.85},0).wait(1).to({scaleY:0.6386,x:659.7,y:326.95},0).wait(1).to({scaleY:0.8193,x:657.45,y:344.15},0).wait(1).to({scaleY:1,x:655.2,y:361.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,0.1,1311.4,722.4);


(lib.Symbol2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.Shadow_mazlef_1();
	this.instance_2.setTransform(101.45,89.6,0.6336,0.667,0,-8.8788,172.3662,63.4,92.5);
	this.instance_2.alpha = 0.2109;
	this.instance_2.compositeOperation = "multiply";

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#969799").s().p("AAPATQgJgCgLgGQgMgGgGgGQgHgHACgGQACgFALAAQALAAALAHQANAGAGAJQAGAJgEAEQgCAEgGAAIgFgBg");
	this.shape_23.setTransform(12.0132,13.5028,0.6333,0.6667,0,-8.879,172.368);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#969799").s().p("AgEANQgJgEgGgGQgFgFADgGQACgFAIgBQAIgBAIADQAJAEAFAGQAFAFgBAGQgCAFgIABIgEAAQgGAAgHgCg");
	this.shape_24.setTransform(6.5547,30.4229,0.6333,0.6667,0,-8.879,172.368);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#969799").s().p("AAOAXQgLgDgLgJQgLgJgGgJQgGgKAEgEQADgFALAEQALADAKAJQAMAKAGAIQAGAKgEAEQgCADgEAAIgIgCg");
	this.shape_25.setTransform(6.2714,23.054,0.6333,0.6667,0,-8.879,172.368);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#969799").s().p("AgEANQgNgEgHgIQgIgGADgGQACgFAKAAQAJAAAMAEQANAFAHAGQAIAFgBAFQgBAGgLABIgFABQgJAAgJgEg");
	this.shape_26.setTransform(19.1368,29.1253,0.6333,0.6667,0,-8.879,172.368);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#969799").s().p("AAMATQgJgBgJgGQgKgHgFgGQgFgIADgFQADgFAJABQAJABAJAHQAKAGAFAHQAFAIgDAEQgCAEgHAAIgDAAg");
	this.shape_27.setTransform(12.5691,24.0031,0.6333,0.6667,0,-8.879,172.368);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#969799").s().p("AARAVQgLgCgMgIQgNgHgHgHQgHgJACgFQADgFALABQAMACAMAIQAOAIAHAIQAHAJgEAFQgCADgFAAIgHgBg");
	this.shape_28.setTransform(17.1963,16.9186,0.6333,0.6667,0,-8.879,172.368);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#969799").s().p("AAPAUQgLAAgKgHQgMgHgGgIQgGgJAEgFQAEgEAJACQAJACALAGQALAGAGAHQAGAHgCAFQgCAFgJAAIgCAAg");
	this.shape_29.setTransform(21.4041,22.3857,0.6333,0.6667,0,-8.879,172.368);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#969799").s().p("AASAWQgMgCgMgIQgNgIgHgIQgHgJADgFQADgFALADQALACAMAHQANAIAHAIQAHAIgDAGQgBADgHAAIgFAAg");
	this.shape_30.setTransform(29.7354,22.6752,0.6333,0.6667,0,-8.879,172.368);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#969799").s().p("AAMATQgJgBgJgGQgKgGgFgHQgFgIADgFQACgFAKABQAJABAJAGQAKAGAFAHQAFAIgDAFQgCAEgHAAIgDAAg");
	this.shape_31.setTransform(25.8338,13.3377,0.6333,0.6667,0,-8.879,172.368);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#969799").s().p("AgFALQgMgHgHgGQgHgIADgFQACgGALABQALABALAHQAMAHAHAIQAGAJgDAFQgDAEgGAAQgJAAgQgKg");
	this.shape_32.setTransform(21.1456,9.1833,0.6333,0.6667,0,-8.879,172.368);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#969799").s().p("AAPAWQgLgCgLgJQgMgIgGgIQgGgJADgFQADgFALADQALACALAJQAMAIAGAIQAHAJgEAFQgCADgGAAIgGgBg");
	this.shape_33.setTransform(35.0517,12.967,0.6333,0.6667,0,-8.879,172.368);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#969799").s().p("AARAWQgMgCgMgIQgNgIgHgJQgHgJAEgFQADgEALACQAKADANAIQANAIAHAHQAHAJgCAEQgCAFgIAAIgFgBg");
	this.shape_34.setTransform(33.5978,5.8052,0.6333,0.6667,0,-8.879,172.368);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EBB926").s().p("AuDgYIAGgXQG3BsHIgIQHIgHG1h6IAFAXQm3B7nLAHIg5AAQmuAAmehlg");
	this.shape_35.setTransform(127.4223,131.773,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EBB926").s().p("AtcgIIAMguQGkBgGvgHQGugHGghuIAMAuQmmBwm1AHIg4AAQmYAAmOhbg");
	this.shape_36.setTransform(125.636,120.3383,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EBB926").s().p("Ap2gBIAGgXQE3AyE6gFQE8gFE0g8IAGAXQk3A9k/AFIg8AAQkfAAkcgug");
	this.shape_37.setTransform(116.0889,59.7369,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EBB926").s().p("ApNANIALguQJEBWJBhpIALAvQlCA6lDAAQkLAAkLgog");
	this.shape_38.setTransform(114.2882,48.2098,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#943D9B").s().p("ABbDcQiDgRhZg+QhyhOgfgeQhFhDgRhZQgNhGBJgXQA3gRBKALQDMAgCCBNQA7AjA0AvQA4A0AVAvQAaA7ggAvQgdArhaAIQgUACgVAAQgrAAgzgHg");
	this.shape_39.setTransform(21.5014,17.2623,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7B287F").s().p("Ai5EKQgUgDgKgGQgNgHgQgWQhKhrgjiNQgrisA/hUILAE/QgZCbjNA2QhfAZhiAAQhCAAhDgLg");
	this.shape_40.setTransform(23.0821,22.9415,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#500E54").s().p("AkEAjQh0gOg0gVQA0gVB0gNQB2gNCOAAQCPAAB3ANQByANA1AVQg1AVhyAOQh2ANiQAAQiPAAh1gNg");
	this.shape_41.setTransform(111.6892,37.1132,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#73317A").s().p("AlIA3QiIgXAAggQAAgfCIgXQCIgXDAABQDAgBCIAXQCIAXAAAfQAAAgiIAXQiIAWjAAAQi/AAiJgWg");
	this.shape_42.setTransform(111.388,35.1856,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A329A3").s().p("ApJJLIBZxCIABAAQABgcBdgfQBdgfCGgSQCGgSBhAFQBjAGAKAaIGkP+IhOAtQhmAzh9AkQjhBAj1AAQjAAAjMgng");
	this.shape_43.setTransform(128.125,86.9695);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7B287F").s().p("AlmC5IJus6IBfBDIooTAg");
	this.shape_44.setTransform(57.0575,66.2014,0.6336,0.667,0,-8.8788,172.3662);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7B287F").s().p("Ai8KxQgrgOgfgYQgkgbgSgjQgTgnAIgrQAHgtAhgYQAjgZAtAOQAuAPAHAoQAmgMANguQALgrgPgrQgTgzg0g7Qg+hBgcgiQhChQgkhoQgihjgEhuQgFigA9hwQBIiDCcgcQB2gVB1AxQBvAvBQBfQBcBtAOB2QARCLhyBLQgChegphYQgohXhGg/Qgvgpg1gXQg5gag4ABQg9ABg1AfQg3AggWA1QgWA0AIBKQAIBXAqBfQAdBDA+BnQBPCDAUAmQAzBhAVBRQAQA/gFA1QgHA/glAmQgjAmg8AIQgQACgQAAQgnAAgpgNg");
	this.shape_45.setTransform(175.6419,71.9681,0.6336,0.667,0,-8.8788,172.3662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2_2, new cjs.Rectangle(-0.1,0.2,202.1,155.70000000000002), null);


(lib.forcomb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.startbtn = new lib.startbtn();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(186.6,56.95);
	new cjs.ButtonHelper(this.startbtn, 0, 1, 1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, :בחרו נושא, 0, בעלי חיים, 1, ?מי אמר, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(81.25,11,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(30.8,-0.5,270.2,100.5), null);


(lib.undefined = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחר נושא, 0, מקומות באירופה, 1, נשיאי ישראל, 2, , ', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(50,11,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.mycb).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.undefined, new cjs.Rectangle(-84.6,-0.5,185.1,23), null);


(lib.startAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_255 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(255).call(this.frame_255).wait(1));

	// text
	this.text = new cjs.Text("בואו נצא לדרך", "normal 400 40px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 237;
	this.text.parent = this;
	this.text.setTransform(654.632,-13.7,0.4664,0.3978);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(217).to({_off:false},0).wait(1).to({scaleX:0.5112,scaleY:0.4594,x:629.6064,y:-18.2936},0).wait(1).to({scaleX:0.556,scaleY:0.521,x:604.6308,y:-22.8873},0).wait(1).to({scaleX:0.6007,scaleY:0.5826,x:579.6053,y:-27.4809},0).wait(1).to({scaleX:0.6455,scaleY:0.6442,x:554.5797,y:-32.0746},0).wait(1).to({scaleX:0.6903,scaleY:0.7058,x:529.5542,y:-36.6682},0).wait(1).to({scaleX:0.7351,scaleY:0.7674,x:504.5286,y:-41.2618},0).wait(1).to({scaleX:0.7799,scaleY:0.829,x:479.5031,y:-45.8555},0).wait(1).to({scaleX:0.8247,scaleY:0.8906,x:454.4775,y:-50.4491},0).wait(1).to({scaleX:0.8695,scaleY:0.9522,x:429.5019,y:-55.0428},0).wait(1).to({scaleX:0.9142,scaleY:1.0138,x:404.4764,y:-59.6364},0).wait(1).to({scaleX:0.959,scaleY:1.0754,x:379.4508,y:-64.23},0).wait(1).to({scaleX:1.0038,scaleY:1.137,x:354.4253,y:-68.8237},0).wait(1).to({scaleX:1.0486,scaleY:1.1986,x:329.3997,y:-73.4173},0).wait(1).to({scaleX:1.0934,scaleY:1.2602,x:304.3742,y:-78.0109},0).wait(1).to({scaleX:1.1382,scaleY:1.3218,x:279.3486,y:-82.6046},0).wait(1).to({scaleX:1.183,scaleY:1.3834,x:254.3731,y:-87.1982},0).wait(1).to({scaleX:1.2278,scaleY:1.445,x:229.3475,y:-91.7919},0).wait(1).to({scaleX:1.2725,scaleY:1.5066,x:204.322,y:-96.3855},0).wait(21));

	// nati_hand
	this.instance = new lib.Symbol1();
	this.instance.setTransform(770.7,98.1,1,1,0,0,0,52,15.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).wait(1).to({regX:51.9,regY:16.2,rotation:-17.6427,x:771,y:86.9},0).wait(1).to({rotation:-35.2855,x:771.4,y:75},0).wait(1).to({rotation:-52.9283,x:758.85,y:64.8},0).wait(1).to({rotation:-70.5711,x:746.2,y:54.55},0).wait(1).to({rotation:-103.2135,x:723,y:61},0).wait(1).to({rotation:-135.856,x:699.65,y:67.55},0).wait(1).to({rotation:-143.499,x:695.35,y:69.55},0).wait(1).to({rotation:-151.142,x:691,y:71.5},0).wait(1).to({rotation:-158.785,x:686.6,y:73.5},0).wait(1).to({rotation:-166.285,y:79.75},0).wait(1).to({rotation:-173.785,x:686.5,y:86},0).wait(1).to({rotation:-158.7855,x:691.6,y:78.65},0).wait(1).to({rotation:-143.786,x:696.75,y:71.4},0).wait(1).to({rotation:-158.786,x:693.85,y:80.35},0).wait(1).to({rotation:-173.786,x:691.05,y:89.45},0).wait(1).to({rotation:-166.287,x:691.35,y:86.05},0).wait(1).to({rotation:-158.788,x:691.55,y:82.7},0).wait(40));

	// nati_bitmap
	this.instance_1 = new lib.Bitmapnati();
	this.instance_1.setTransform(632.1,-115.7,1,1,7.9633);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:false},0).wait(57));

	// mazlef
	this.instance_2 = new lib.Symbol2_2();
	this.instance_2.setTransform(812.2,-427.5,0.8091,0.7212,0,0,0,100.8,70.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(171).to({_off:false},0).wait(1).to({regX:102.5,regY:77.6,scaleY:0.7213,rotation:17.1429,x:792.4,y:-405.85},0).wait(1).to({rotation:34.2857,x:771.2,y:-390},0).wait(1).to({scaleY:0.7212,rotation:51.4286,x:750.2,y:-374.6},0).wait(1).to({rotation:68.5714,x:729.5,y:-359.6},0).wait(1).to({scaleY:0.7213,rotation:85.7143,x:709.2,y:-344.85},0).wait(1).to({rotation:102.8571,x:689.35,y:-330.3},0).wait(1).to({scaleY:0.7212,rotation:120,x:670,y:-315.8},0).wait(1).to({rotation:137.1429,x:684.85,y:-311},0).wait(1).to({scaleY:0.7213,rotation:154.2857,x:700.15,y:-305.95},0).wait(1).to({rotation:171.4286,x:715.75,y:-300.55},0).wait(1).to({rotation:188.5714,x:731.55,y:-294.65},0).wait(1).to({rotation:205.7143,x:747.4,y:-288.4},0).wait(1).to({scaleY:0.7212,rotation:222.8571,x:763.1,y:-281.55},0).wait(1).to({rotation:240,x:778.65,y:-274.3},0).wait(1).to({scaleY:0.7213,rotation:257.1429,x:772.75,y:-258.9},0).wait(1).to({rotation:274.2857,x:766.4,y:-243.25},0).wait(1).to({scaleY:0.7212,rotation:291.4286,x:759.6,y:-227.55},0).wait(1).to({rotation:308.5714,x:752.3,y:-211.9},0).wait(1).to({scaleY:0.7213,rotation:325.7143,x:744.55,y:-196.4},0).wait(1).to({rotation:342.8571,x:736.45,y:-181.25},0).wait(1).to({rotation:360,x:728.1,y:-166.55},0).wait(64));

	// mouth
	this.instance_3 = new lib.Symbol1_1();
	this.instance_3.setTransform(710.3,-19.9,1,1,0,0,0,7,6.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(171).to({_off:false},0).wait(1).to({regX:7.1,scaleX:1.0507,scaleY:1.0678,x:710.35,y:-19.85},0).wait(1).to({scaleX:1.1013,scaleY:1.1357,y:-19.9},0).wait(1).to({scaleX:1.152,scaleY:1.2035,x:710.4},0).wait(1).to({scaleX:1.2026,scaleY:1.2714,y:-19.85},0).wait(1).to({scaleX:1.2533,scaleY:1.3392,y:-19.9},0).wait(1).to({scaleX:1.304,scaleY:1.4071},0).wait(1).to({scaleX:1.3546,scaleY:1.4749,x:710.35,y:-19.85},0).wait(1).to({scaleX:1.3079,scaleY:1.4255,x:710.4,y:-19.9},0).wait(1).to({scaleX:1.2613,scaleY:1.3761},0).wait(1).to({scaleX:1.2146,scaleY:1.3268,x:710.35,y:-19.85},0).wait(1).to({scaleX:1.168,scaleY:1.2774,x:710.4},0).wait(1).to({scaleX:1.1213,scaleY:1.228,x:710.35,y:-19.9},0).wait(1).to({scaleX:1.0746,scaleY:1.1786,x:710.4,y:-19.85},0).wait(1).to({scaleX:1.028,scaleY:1.1292},0).wait(1).to({scaleX:1.1196,scaleY:1.2137,y:-19.9},0).wait(1).to({scaleX:1.2113,scaleY:1.2981},0).wait(1).to({scaleX:1.3029,scaleY:1.3825,y:-19.85},0).wait(1).to({scaleX:1.3946,scaleY:1.467},0).wait(1).to({scaleX:1.4862,scaleY:1.5514},0).wait(1).to({scaleX:1.5779,scaleY:1.6359,y:-19.9},0).wait(1).to({scaleX:1.6695,scaleY:1.7203},0).wait(1).to({scaleX:1.4501,scaleY:1.4855,skewX:0.1968,y:-19.8},0).wait(1).to({scaleX:1.2307,scaleY:1.2508,skewX:0.3937,y:-19.75},0).wait(1).to({scaleX:1.0112,scaleY:1.016,skewX:0.5905,y:-19.65},0).wait(1).to({scaleX:0.7918,scaleY:0.7812,skewX:0.7873,x:710.35,y:-19.55},0).wait(1).to({scaleX:0.5723,scaleY:0.5464,skewX:0.9841,y:-19.5},0).wait(1).to({scaleX:0.3529,scaleY:0.3116,skewX:1.181,y:-19.4},0).to({_off:true},1).wait(57));

	// nati
	this.instance_4 = new lib.Symbol5_1();
	this.instance_4.setTransform(995.65,169.35,1,1,0,0,0,176.3,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(146).to({_off:false},0).wait(1).to({regX:169.5,rotation:-1.5398,x:981.05,y:177.55},0).wait(1).to({rotation:-3.0796,x:973.25,y:185.75},0).wait(1).to({rotation:-4.6194,x:965.5,y:193.9},0).wait(1).to({rotation:-6.1592,x:957.65,y:202.1},0).wait(1).to({rotation:-7.6989,x:949.9,y:210.35},0).wait(1).to({rotation:-9.2387,x:942.15,y:218.55},0).wait(1).to({rotation:-10.7785,x:934.4,y:226.7},0).wait(1).to({rotation:-12.3183,x:926.65,y:234.95},0).wait(1).to({rotation:-13.8581,x:918.9,y:243.15},0).wait(1).to({rotation:-15.3979,x:911.15,y:251.35},0).wait(1).to({rotation:-13.4295,x:900.3,y:237.6},0).wait(1).to({rotation:-11.461,x:889.45,y:223.75},0).wait(1).to({rotation:-9.4926,x:878.7,y:210},0).wait(1).to({rotation:-7.5242,x:867.8,y:196.15},0).wait(1).to({rotation:-5.5558,x:856.95,y:182.4},0).wait(1).to({rotation:-3.5873,x:846.15,y:168.65},0).wait(1).to({rotation:-1.6189,x:835.4,y:154.85},0).wait(1).to({rotation:0.3495,x:824.6,y:141.05},0).wait(1).to({rotation:2.3179,x:813.75,y:127.25},0).wait(1).to({rotation:4.2864,x:803,y:113.4},0).wait(1).to({rotation:6.2548,x:792.3,y:99.65},0).wait(1).to({rotation:8.2232,x:781.5,y:85.85},0).wait(30).to({_off:true},1).wait(57));

	// ancore
	this.instance_5 = new lib.hook_1();
	this.instance_5.setTransform(800.2,-205.75,1,1,0,0,0,52.5,40.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(168).to({_off:false},0).wait(88));

	// keren
	this.instance_6 = new lib.Symbol3_2();
	this.instance_6.setTransform(805.75,-352.95,0.6508,0.6066,0,0,0,135.6,124.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).wait(1).to({scaleX:0.6611,scaleY:0.6182,x:802.3,y:-349.75},0).wait(1).to({scaleX:0.6714,scaleY:0.6297,x:798.9,y:-346.55},0).wait(1).to({scaleX:0.6816,scaleY:0.6413,x:795.5,y:-343.45},0).wait(1).to({scaleX:0.6919,scaleY:0.6529,x:792.05,y:-340.25},0).wait(1).to({scaleX:0.7022,scaleY:0.6645,x:788.65,y:-337.05},0).wait(1).to({scaleX:0.7124,scaleY:0.676,x:785.2,y:-333.9},0).wait(1).to({scaleX:0.7227,scaleY:0.6876,x:781.8,y:-330.75},0).wait(1).to({scaleX:0.733,scaleY:0.6992,x:778.4,y:-327.6},0).wait(1).to({scaleX:0.7432,scaleY:0.7107,x:775,y:-324.4},0).wait(1).to({scaleX:0.7535,scaleY:0.7223,x:771.6,y:-321.2},0).wait(1).to({scaleX:0.7638,scaleY:0.7339,x:768.15,y:-318.1},0).wait(1).to({scaleX:0.7741,scaleY:0.7454,x:764.7,y:-314.9},0).wait(1).to({scaleX:0.7843,scaleY:0.757,x:761.3,y:-311.7},0).wait(1).to({scaleX:0.7946,scaleY:0.7686,x:757.9,y:-308.55},0).wait(1).to({scaleX:0.8049,scaleY:0.7802,x:754.5,y:-305.4},0).wait(1).to({scaleX:0.8151,scaleY:0.7917,x:751.1,y:-302.25},0).wait(1).to({scaleX:0.8254,scaleY:0.8033,x:747.7,y:-299.05},0).wait(1).to({scaleX:0.8357,scaleY:0.8149,x:744.2,y:-295.85},0).wait(1).to({scaleX:0.8459,scaleY:0.8264,x:740.8,y:-292.7},0).wait(1).to({scaleX:0.8562,scaleY:0.838,x:737.4,y:-289.55},0).wait(1).to({scaleX:0.8665,scaleY:0.8496,x:734,y:-286.4},0).wait(1).to({scaleX:0.8768,scaleY:0.8612,x:730.6,y:-283.2},0).wait(1).to({scaleX:0.887,scaleY:0.8727,x:727.15,y:-280},0).wait(1).to({scaleX:0.8973,scaleY:0.8843,x:723.7,y:-276.9},0).wait(1).to({scaleX:0.9076,scaleY:0.8959,x:720.3,y:-273.7},0).wait(1).to({scaleX:0.9178,scaleY:0.9074,x:716.9,y:-270.5},0).wait(1).to({scaleX:0.9281,scaleY:0.919,x:713.5,y:-267.35},0).wait(1).to({scaleX:0.9384,scaleY:0.9306,x:710.1,y:-264.2},0).wait(1).to({scaleX:0.9486,scaleY:0.9421,x:706.65,y:-261.05},0).wait(1).to({scaleX:0.9589,scaleY:0.9537,x:703.25,y:-257.85},0).wait(1).to({scaleX:0.9692,scaleY:0.9653,x:699.8,y:-254.65},0).wait(1).to({scaleX:0.9795,scaleY:0.9769,x:696.4,y:-251.55},0).wait(1).to({scaleX:0.9897,scaleY:0.9884,x:693,y:-248.35},0).wait(1).to({scaleX:1,scaleY:1,x:689.6,y:-245.15},0).wait(1).to({x:688.7,y:-246.25},0).wait(1).to({x:687.85,y:-247.35},0).wait(1).to({x:686.95,y:-248.45},0).wait(1).to({x:686.1,y:-249.55},0).wait(1).to({x:685.2,y:-250.65},0).wait(1).to({x:684.35,y:-251.75},0).wait(1).to({x:685.2,y:-251.2},0).wait(1).to({x:686.1,y:-250.65},0).wait(1).to({x:686.95,y:-250.1},0).wait(1).to({x:687.85,y:-249.55},0).wait(1).to({x:688.7,y:-249},0).wait(1).to({x:689.6,y:-248.45},0).wait(1).to({x:688.85,y:-249.2},0).wait(1).to({x:688.1,y:-249.9},0).wait(1).to({x:687.35,y:-250.6},0).wait(1).to({x:686.6,y:-251.3},0).wait(1).to({x:685.85,y:-252},0).wait(1).to({x:685.1,y:-252.7},0).wait(1).to({x:684.35,y:-253.4},0).wait(1).to({x:686.1,y:-252.95},0).wait(1).to({x:687.85,y:-252.5},0).wait(1).to({x:689.6,y:-252},0).wait(1).to({x:691.35,y:-251.55},0).wait(1).to({x:693.1,y:-251.05},0).wait(1).to({x:694.85,y:-250.6},0).wait(1).to({x:696.6,y:-250.1},0).wait(1).to({x:695.7,y:-250.95},0).wait(1).to({x:694.85,y:-251.75},0).wait(1).to({x:693.95,y:-252.6},0).wait(1).to({x:693.1,y:-253.4},0).wait(1).to({x:697.15,y:-255.05},0).wait(1).to({x:701.25,y:-256.7},0).wait(1).to({x:705.35,y:-258.35},0).wait(1).to({x:701.85,y:-262.2},0).wait(1).to({x:698.35,y:-266.05},0).wait(1).to({x:694.85,y:-269.9},0).wait(1).to({x:697.15,y:-271.55},0).wait(1).to({x:699.5,y:-273.2},0).wait(1).to({x:701.85,y:-274.85},0).wait(1).to({x:698.9,y:-277.6},0).wait(1).to({x:696,y:-280.35},0).wait(1).to({x:693.1,y:-283.1},0).wait(1).to({x:695.4,y:-283.95},0).wait(1).to({x:697.75,y:-284.75},0).wait(1).to({x:700.1,y:-285.6},0).wait(1).to({x:702.4,y:-286.4},0).wait(1).to({x:704.75,y:-287.25},0).wait(1).to({x:707.1,y:-288.05},0).wait(1).to({x:709.4,y:-286.15},0).wait(1).to({x:711.75,y:-284.2},0).wait(1).to({x:714.1,y:-282.3},0).wait(1).to({x:716.4,y:-280.35},0).wait(1).to({x:718.75,y:-278.45},0).wait(1).to({x:721.1,y:-276.5},0).wait(1).to({x:726.5,y:-289.3},0).wait(1).to({x:731.95,y:-302.1},0).wait(1).to({x:737.35,y:-314.9},0).wait(1).to({x:742.8,y:-327.7},0).wait(1).to({x:748.2,y:-340.5},0).wait(1).to({x:753.65,y:-353.25},0).wait(1).to({x:760.15,y:-362.65},0).wait(1).to({x:766.65,y:-372.05},0).wait(1).to({x:773.15,y:-381.4},0).wait(1).to({x:779.7,y:-390.8},0).wait(1).to({x:786.2,y:-400.15},0).wait(1).to({x:792.7,y:-409.55},0).wait(1).to({x:799.25,y:-418.95},0).wait(1).to({x:805.75,y:-428.3},0).wait(1).to({x:812.25,y:-437.7},0).wait(1).to({x:818.8,y:-447.05},0).wait(1).to({x:828.75,y:-451.1},0).wait(1).to({x:838.7,y:-455.15},0).wait(1).to({x:848.65,y:-459.2},0).wait(1).to({x:858.6,y:-463.25},0).wait(1).to({x:868.55,y:-467.3},0).wait(1).to({x:878.5,y:-471.35},0).wait(1).to({x:888.45,y:-475.4},0).wait(1).to({x:898.4,y:-479.45},0).to({_off:true},1).wait(110));

	// sun
	this.instance_7 = new lib.Symbol2copy_1();
	this.instance_7.setTransform(915.5,-421.95,1,1,0,0,0,128,110.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).wait(1).to({x:912.65,y:-419.55},0).wait(1).to({x:909.8,y:-417.15},0).wait(1).to({x:906.95,y:-414.75},0).wait(1).to({x:904.1,y:-412.35},0).wait(1).to({x:901.25,y:-409.95},0).wait(1).to({x:898.4,y:-407.6},0).wait(1).to({x:895.55,y:-405.2},0).wait(1).to({x:892.7,y:-402.8},0).wait(1).to({x:889.85,y:-400.4},0).wait(1).to({x:887,y:-398},0).wait(1).to({x:884.15,y:-395.65},0).wait(1).to({x:881.3,y:-393.25},0).wait(1).to({x:878.45,y:-390.85},0).wait(1).to({x:875.6,y:-388.45},0).wait(1).to({x:872.75,y:-386.05},0).wait(1).to({x:869.9,y:-383.65},0).wait(1).to({x:867.05,y:-381.3},0).wait(1).to({x:864.2,y:-378.9},0).wait(1).to({x:861.35,y:-376.5},0).wait(1).to({x:858.5,y:-374.1},0).wait(1).to({x:855.65,y:-371.7},0).wait(1).to({x:852.85,y:-369.35},0).wait(1).to({x:850,y:-366.95},0).wait(1).to({x:847.15,y:-364.55},0).wait(1).to({x:844.3,y:-362.15},0).wait(1).to({x:841.45,y:-359.75},0).wait(1).to({x:838.6,y:-357.4},0).wait(1).to({x:835.75,y:-355},0).wait(1).to({x:832.9,y:-352.6},0).wait(1).to({x:830.05,y:-350.2},0).wait(1).to({x:827.2,y:-347.8},0).wait(1).to({x:824.35,y:-345.4},0).wait(1).to({x:821.5,y:-343.05},0).wait(1).to({x:818.65,y:-340.65},0).wait(1).to({x:815.8,y:-338.25},0).wait(1).to({x:812.95,y:-335.85},0).wait(1).to({x:810.1,y:-333.45},0).wait(1).to({x:807.25,y:-331.1},0).wait(1).to({x:804.4,y:-328.7},0).wait(1).to({x:801.55,y:-326.3},0).wait(1).to({x:798.7,y:-323.9},0).wait(1).to({x:795.85,y:-321.5},0).wait(1).to({x:793.05,y:-319.15},0).wait(1).to({x:793.8,y:-319.6},0).wait(1).to({x:794.55,y:-320.05},0).wait(1).to({x:795.35,y:-320.5},0).wait(1).to({x:796.1,y:-320.95},0).wait(1).to({x:796.85,y:-321.4},0).wait(1).to({x:797.65,y:-321.85},0).wait(1).to({x:798.4,y:-322.3},0).wait(1).to({x:799.15,y:-322.75},0).wait(1).to({x:799.95,y:-323.2},0).wait(1).to({x:800.7,y:-323.65},0).wait(1).to({x:801.5,y:-324.1},0).wait(1).to({x:802.25,y:-324.55},0).wait(1).to({x:803,y:-325},0).wait(1).to({x:803.8,y:-325.45},0).wait(1).to({x:804.55,y:-325.9},0).wait(1).to({x:805.3,y:-326.35},0).wait(1).to({x:806.1,y:-326.8},0).wait(1).to({x:806.85,y:-327.25},0).wait(1).to({x:807.6,y:-327.7},0).wait(1).to({x:808.4,y:-328.15},0).wait(1).to({x:809.15,y:-328.6},0).wait(1).to({x:809.95,y:-329.05},0).wait(1).to({x:810.7,y:-329.5},0).wait(1).to({x:811.45,y:-329.95},0).wait(1).to({x:812.25,y:-330.4},0).wait(1).to({x:813,y:-330.85},0).wait(1).to({x:813.75,y:-331.3},0).wait(1).to({x:814.55,y:-331.75},0).wait(1).to({x:815.3,y:-332.2},0).wait(1).to({x:816.05,y:-332.65},0).wait(1).to({x:816.85,y:-333.1},0).wait(1).to({x:817.6,y:-333.55},0).wait(1).to({x:818.4,y:-334},0).wait(1).to({x:819.35,y:-337.75},0).wait(1).to({x:820.35,y:-341.55},0).wait(1).to({x:821.35,y:-345.3},0).wait(1).to({x:822.3,y:-349.1},0).wait(1).to({x:823.3,y:-352.9},0).wait(1).to({x:824.3,y:-356.65},0).wait(1).to({x:823.7,y:-358.75},0).wait(1).to({x:823.15,y:-360.85},0).wait(1).to({x:822.55,y:-362.95},0).wait(1).to({x:822,y:-365.05},0).wait(1).to({x:821.4,y:-367.15},0).wait(1).to({x:820.85,y:-369.2},0).wait(1).to({x:820.25,y:-371.3},0).wait(1).to({x:819.7,y:-373.4},0).wait(1).to({x:819.1,y:-375.5},0).wait(1).to({x:822.7,y:-377.25},0).wait(1).to({x:826.3,y:-379.05},0).wait(1).to({x:829.9,y:-380.8},0).wait(1).to({x:833.45,y:-382.6},0).wait(1).to({x:837.05,y:-384.35},0).wait(1).to({x:840.65,y:-386.15},0).wait(1).to({x:844.25,y:-387.9},0).wait(1).to({x:847.8,y:-389.7},0).wait(1).to({x:851.4,y:-391.45},0).wait(1).to({x:855,y:-393.2},0).wait(1).to({x:858.6,y:-395},0).wait(1).to({x:862.15,y:-396.75},0).wait(1).to({x:864.3,y:-401.95},0).wait(1).to({x:866.45,y:-407.15},0).wait(1).to({x:868.55,y:-412.35},0).wait(1).to({x:870.7,y:-417.55},0).wait(1).to({x:872.8,y:-422.75},0).wait(1).to({x:874.95,y:-427.95},0).wait(1).to({x:877.1,y:-433.15},0).wait(1).to({x:879.2,y:-438.35},0).wait(1).to({x:881.35,y:-443.55},0).wait(1).to({x:883.5,y:-448.8},0).wait(1).to({x:893.45,y:-452.85},0).wait(1).to({x:903.4,y:-456.9},0).wait(1).to({x:913.35,y:-460.95},0).wait(1).to({x:923.3,y:-465},0).wait(1).to({x:933.25,y:-469.05},0).wait(1).to({x:943.2,y:-473.1},0).wait(1).to({x:953.15,y:-477.15},0).wait(1).to({x:963.1,y:-481.2},0).to({_off:true},1).wait(110));

	// sky
	this.instance_8 = new lib.Symbol1copy2_2();
	this.instance_8.setTransform(191.8,-33.5,1,1,0,0,0,651.2,361.2);
	this.instance_8.alpha = 0.4609;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({y:-45.65,alpha:0.46},0).wait(1).to({y:-57.85},0).wait(1).to({y:-70.05},0).wait(1).to({y:-82.2},0).wait(1).to({y:-94.4},0).wait(1).to({y:-106.6},0).wait(1).to({y:-113.95},0).wait(1).to({y:-121.3},0).wait(1).to({y:-128.65},0).wait(1).to({y:-136},0).wait(1).to({y:-143.35},0).wait(1).to({y:-150.7},0).wait(1).to({y:-161.4},0).wait(1).to({y:-172.1},0).wait(1).to({y:-182.8},0).wait(1).to({y:-193.5},0).wait(1).to({y:-204.2},0).wait(1).to({y:-212.95},0).wait(1).to({y:-221.65},0).wait(1).to({y:-230.4},0).wait(1).to({y:-243.3},0).wait(1).to({y:-256.25},0).wait(1).to({y:-269.2},0).wait(1).to({y:-282.1},0).wait(1).to({y:-295.05},0).wait(1).to({y:-308},0).wait(1).to({y:-320.9},0).wait(1).to({y:-333.85},0).wait(1).to({y:-346.8},0).wait(1).to({y:-350.95},0).wait(1).to({y:-355.1},0).wait(1).to({y:-359.25},0).wait(1).to({y:-363.4},0).wait(1).to({y:-367.55},0).wait(1).to({y:-371.7},0).wait(1).to({y:-375.85},0).wait(1).to({y:-379.95},0).wait(1).to({y:-387.35},0).wait(1).to({y:-394.75},0).wait(1).to({y:-402.15},0).wait(1).to({y:-409.55},0).wait(1).to({y:-416.95},0).wait(1).to({y:-424.35},0).wait(1).to({y:-431.75},0).wait(1).to({y:-439.15},0).wait(1).to({y:-454.45},0).wait(1).to({y:-469.7},0).wait(1).to({y:-485},0).wait(1).to({y:-500.3},0).wait(1).to({y:-515.55},0).wait(1).to({y:-530.85},0).wait(1).to({y:-543.9},0).wait(1).to({y:-556.9},0).wait(1).to({y:-569.95},0).wait(1).to({y:-583},0).wait(1).to({y:-596.05},0).wait(1).to({y:-609.1},0).wait(1).to({y:-622.1},0).wait(1).to({y:-635.15},0).wait(1).to({y:-648.2},0).wait(1).to({y:-661.25},0).wait(1).to({y:-674.3},0).wait(1).to({y:-687.3},0).wait(1).to({y:-700.35},0).wait(1).to({y:-713.4},0).wait(1).to({y:-726.45},0).wait(1).to({y:-739.5},0).wait(5).to({_off:true},1).wait(183));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-459.4,-1100.7,1624.8000000000002,1572.4);


(lib.mazlef = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// drops
	this.instance = new lib.Symbol1copy();
	this.instance.setTransform(-181.3,109.85,1,1,0,0,0,33.6,33.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({regX:33.7,regY:33.3,x:-183.7,y:125.45},0).wait(1).to({x:-186.2,y:140.95},0).wait(11).to({_off:true},1).wait(4));

	// back
	this.instance_1 = new lib.Symbol2_1();
	this.instance_1.setTransform(-82.5,36.45,1,1,-72.4686,0,0,100.5,78);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).wait(1).to({regX:102.5,regY:77.6,rotation:-48.3123,x:-81.7,y:34.5},0).wait(1).to({rotation:-24.1562,x:-81.35,y:34.9},0).wait(1).to({rotation:0,x:-81.2,y:35.5},0).wait(1));

	// Layer_1
	this.instance_2 = new lib.Shadow_mazlef();
	this.instance_2.setTransform(-82.6,47.95,0.6336,0.667,0,-8.8786,172.365,63.4,92.4);
	this.instance_2.alpha = 0.2109;
	this.instance_2.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#969799").s().p("AAPATQgJgCgLgGQgMgGgGgGQgHgHACgGQACgFALAAQALAAALAHQANAGAGAJQAGAJgEAEQgCAEgGAAIgFgBg");
	this.shape.setTransform(-171.9665,-28.3506,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#969799").s().p("AgEANQgJgEgGgGQgFgFADgGQACgFAIgBQAIgBAIADQAJAEAFAGQAFAFgBAGQgCAFgIABIgEAAQgGAAgHgCg");
	this.shape_1.setTransform(-177.4249,-11.4314,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#969799").s().p("AAOAXQgLgDgLgJQgLgJgGgJQgGgKAEgEQADgFALAEQALADAKAJQAMAKAGAIQAGAKgEAEQgCADgEAAIgIgCg");
	this.shape_2.setTransform(-177.7081,-18.7997,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#969799").s().p("AgEANQgNgEgHgIQgIgGADgGQACgFAKAAQAJAAAMAEQANAFAHAGQAIAFgBAFQgBAGgLABIgFABQgJAAgJgEg");
	this.shape_3.setTransform(-164.8434,-12.7292,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#969799").s().p("AAMATQgJgBgJgGQgKgHgFgGQgFgIADgFQADgFAJABQAJABAJAHQAKAGAFAHQAFAIgDAEQgCAEgHAAIgDAAg");
	this.shape_4.setTransform(-171.4107,-17.8509,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#969799").s().p("AARAVQgLgCgMgIQgNgHgHgHQgHgJACgFQADgFALABQAMACAMAIQAOAIAHAIQAHAJgEAFQgCADgFAAIgHgBg");
	this.shape_5.setTransform(-166.7837,-24.9351,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#969799").s().p("AAPAUQgLAAgKgHQgMgHgGgIQgGgJAEgFQAEgEAJACQAJACALAGQALAGAGAHQAGAHgCAFQgCAFgJAAIgCAAg");
	this.shape_6.setTransform(-162.5762,-19.4686,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#969799").s().p("AASAWQgMgCgMgIQgNgIgHgIQgHgJADgFQADgFALADQALACAMAHQANAIAHAIQAHAIgDAGQgBADgHAAIgFAAg");
	this.shape_7.setTransform(-154.2453,-19.1793,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#969799").s().p("AAMATQgJgBgJgGQgKgGgFgHQgFgIADgFQACgFAKABQAJABAJAGQAKAGAFAHQAFAIgDAFQgCAEgHAAIgDAAg");
	this.shape_8.setTransform(-158.1465,-28.5161,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#969799").s().p("AgFALQgMgHgHgGQgHgIADgFQACgGALABQALABALAHQAMAHAHAIQAGAJgDAFQgDAEgGAAQgJAAgQgKg");
	this.shape_9.setTransform(-162.8345,-32.6701,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#969799").s().p("AAPAWQgLgCgLgJQgMgIgGgIQgGgJADgFQADgFALADQALACALAJQAMAIAGAIQAHAJgEAFQgCADgGAAIgGgBg");
	this.shape_10.setTransform(-148.9292,-28.887,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#969799").s().p("AARAWQgMgCgMgIQgNgIgHgJQgHgJAEgFQADgEALACQAKADANAIQANAIAHAHQAHAJgCAEQgCAFgIAAIgFgBg");
	this.shape_11.setTransform(-150.3829,-36.0483,0.6333,0.6667,0,-8.8783,172.3662);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EBB926").s().p("AuDgYIAGgXQG3BsHIgIQHIgHG1h6IAFAXQm3B7nLAHIg5AAQmuAAmehlg");
	this.shape_12.setTransform(-56.5883,89.9419,0.6336,0.667,0,-8.8786,172.365);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EBB926").s().p("AtcgIIAMguQGkBgGvgHQGugHGghuIAMAuQmmBwm1AHIg4AAQmYAAmOhbg");
	this.shape_13.setTransform(-58.3746,78.507,0.6336,0.667,0,-8.8786,172.365);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EBB926").s().p("Ap2gBIAGgXQE3AyE6gFQE8gFE0g8IAGAXQk3A9k/AFIg8AAQkfAAkcgug");
	this.shape_14.setTransform(-67.9217,17.9042,0.6336,0.667,0,-8.8786,172.365);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EBB926").s().p("ApNANIALguQJEBWJBhpIALAvQlCA6lDAAQkLAAkLgog");
	this.shape_15.setTransform(-69.7224,6.3768,0.6336,0.667,0,-8.8786,172.365);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#943D9B").s().p("ABbDcQiDgRhZg+QhyhOgfgeQhFhDgRhZQgNhGBJgXQA3gRBKALQDMAgCCBNQA7AjA0AvQA4A0AVAvQAaA7ggAvQgdArhaAIQgUACgVAAQgrAAgzgHg");
	this.shape_16.setTransform(-162.5113,-24.5696,0.6336,0.667,0,-8.8786,172.365);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7B287F").s().p("Ai5EKQgUgDgKgGQgNgHgQgWQhKhrgjiNQgrisA/hUILAE/QgZCbjNA2QhfAZhiAAQhCAAhDgLg");
	this.shape_17.setTransform(-160.9306,-18.8902,0.6336,0.667,0,-8.8786,172.365);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#500E54").s().p("AkEAjQh0gOg0gVQA0gVB0gNQB2gNCOAAQCPAAB3ANQByANA1AVQg1AVhyAOQh2ANiQAAQiPAAh1gNg");
	this.shape_18.setTransform(-72.3214,-4.72,0.6336,0.667,0,-8.8786,172.365);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#73317A").s().p("AlIA3QiIgXAAggQAAgfCIgXQCIgXDAABQDAgBCIAXQCIAXAAAfQAAAgiIAXQiIAWjAAAQi/AAiJgWg");
	this.shape_19.setTransform(-72.6225,-6.6477,0.6336,0.667,0,-8.8786,172.365);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A329A3").s().p("AmoOJQjLgcitg4IiEgzIGW5EIAAAAQAJgoCYgcQCZgcDUAAQDVAACZAcQCZAcAIAoIABAAIGVZEQn5ChncAAQi+AAi6gag");
	this.shape_20.setTransform(-63.8086,45.2599,0.6336,0.667,0,-8.8786,172.365);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7B287F").s().p("AlmC5IJus6IBfBDIooTAg");
	this.shape_21.setTransform(-126.9545,24.3701,0.6336,0.667,0,-8.8786,172.365);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7B287F").s().p("Ai8KxQgrgOgfgYQgkgbgSgjQgTgnAIgrQAHgtAhgYQAjgZAtAOQAuAPAHAoQAmgMANguQALgrgPgrQgTgzg0g7Qg+hBgcgiQhChQgkhoQgihjgEhuQgFigA9hwQBIiDCcgcQB2gVB1AxQBvAvBQBfQBcBtAOB2QARCLhyBLQgChegphYQgohXhGg/Qgvgpg1gXQg5gag4ABQg9ABg1AfQg3AggWA1QgWA0AIBKQAIBXAqBfQAdBDA+BnQBPCDAUAmQAzBhAVBRQAQA/gFA1QgHA/glAmQgjAmg8AIQgQACgQAAQgnAAgpgNg");
	this.shape_22.setTransform(-8.3673,30.1345,0.6336,0.667,0,-8.8786,172.365);

	this.instance_3 = new lib.check();
	this.instance_3.setTransform(-65.05,48.55,1,1,0,0,0,58.3,39.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.instance_4 = new lib.Symbol2_1();
	this.instance_4.setTransform(-82.85,36.45,1,1,0,0,0,101,78);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-8.3673,y:30.1345}},{t:this.shape_21,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-126.9545,y:24.3701}},{t:this.shape_20,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-63.8086,y:45.2599}},{t:this.shape_19,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-72.6225,y:-6.6477}},{t:this.shape_18,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-72.3214,y:-4.72}},{t:this.shape_17,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-160.9306,y:-18.8902}},{t:this.shape_16,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-162.5113,y:-24.5696}},{t:this.shape_15,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-69.7224,y:6.3768}},{t:this.shape_14,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-67.9217,y:17.9042}},{t:this.shape_13,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-58.3746,y:78.507}},{t:this.shape_12,p:{scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-56.5883,y:89.9419}},{t:this.shape_11,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-150.3829,y:-36.0483}},{t:this.shape_10,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-148.9292,y:-28.887}},{t:this.shape_9,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-162.8345,y:-32.6701}},{t:this.shape_8,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-158.1465,y:-28.5161}},{t:this.shape_7,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-154.2453,y:-19.1793}},{t:this.shape_6,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-162.5762,y:-19.4686}},{t:this.shape_5,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-166.7837,y:-24.9351}},{t:this.shape_4,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-171.4107,y:-17.8509}},{t:this.shape_3,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-164.8434,y:-12.7292}},{t:this.shape_2,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-177.7081,y:-18.7997}},{t:this.shape_1,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-177.4249,y:-11.4314}},{t:this.shape,p:{scaleX:0.6333,scaleY:0.6667,skewX:-8.8783,x:-171.9665,y:-28.3506}},{t:this.instance_2,p:{regX:63.4,regY:92.4,scaleX:0.6336,scaleY:0.667,skewX:-8.8786,skewY:172.365,x:-82.6,y:47.95}}]}).to({state:[{t:this.shape_22,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-8.0012,y:29.9506}},{t:this.shape_21,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-126.5449,y:24.1885}},{t:this.shape_20,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-63.4225,y:45.0704}},{t:this.shape_19,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-72.2325,y:-6.8179}},{t:this.shape_18,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-71.9315,y:-4.8909}},{t:this.shape_17,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-160.508,y:-19.0559}},{t:this.shape_16,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-162.0881,y:-24.7331}},{t:this.shape_15,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-69.3336,y:6.2018}},{t:this.shape_14,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-67.5336,y:17.7249}},{t:this.shape_13,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-57.9908,y:78.3052}},{t:this.shape_12,p:{scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-56.2053,y:89.7359}},{t:this.shape_11,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-149.9533,y:-36.1918}},{t:this.shape_10,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-148.4999,y:-29.0327}},{t:this.shape_9,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-162.4003,y:-32.8146}},{t:this.shape_8,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-157.7139,y:-28.6619}},{t:this.shape_7,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-153.8138,y:-19.3279}},{t:this.shape_6,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-162.1417,y:-19.6171}},{t:this.shape_5,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-166.3478,y:-25.0821}},{t:this.shape_4,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-170.973,y:-18.0001}},{t:this.shape_3,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-164.4079,y:-12.8799}},{t:this.shape_2,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-177.2681,y:-18.9486}},{t:this.shape_1,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-176.9848,y:-11.5825}},{t:this.shape,p:{scaleX:0.633,scaleY:0.6665,skewX:-8.8796,x:-171.5289,y:-28.4965}},{t:this.instance_2,p:{regX:65,regY:92.2,scaleX:0.6334,scaleY:0.6668,skewX:-8.8779,skewY:172.3649,x:-82.45,y:47.9}},{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(1).to({regX:102.5,regY:77.6,rotation:-18.1171,x:-81.5,y:35.65},0).wait(1).to({rotation:-36.2343,x:-81.8,y:35.2},0).wait(1).to({rotation:-54.3514,x:-82.25,y:34.95},0).wait(1).to({rotation:-72.4685,x:-82.7,y:34.8},0).wait(14).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.7,-76.2,241.79999999999998,250.5);


(lib.howToPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap44();
	this.instance.setTransform(527,-57,0.3466,0.3343);

	this.instance_1 = new lib.nati();
	this.instance_1.setTransform(659.55,-74.5,0.38,0.3501,0,0,0,-3.6,223.6);

	this.instance_2 = new lib.mazlef();
	this.instance_2.setTransform(129.65,-286.8,0.2948,0.2788,0,14.9955,-165.0027,-83.5,35.8);

	this.instance_3 = new lib.exit();
	this.instance_3.setTransform(63.05,-404.1,1,0.886,0,0,0,26,28.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.text = new cjs.Text("השקו את העציץ עם התשובה הנכונה באמצעות גרירת המזלף ע\"י העכבר ומיקומו מעל התשובה הנבחרת.\n\nלחצו \"בדיקה\" על מנת לאשר את הבחירה ובדיקתה.\n\nענו נכונה על 10 שאלות בכדי לשתול את הצמחים בגינה\nשל נתי ולהשלים את המשחק.", "24px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 683;
	this.text.parent = this;
	this.text.setTransform(378.5,-335.95);

	this.instance_4 = new lib.logo();
	this.instance_4.setTransform(498.3,-386,0.5917,0.7251,0,0,0,-6.1,29.4);

	this.text_1 = new cjs.Text("איך משחקים?", "42px 'Rubik'", "#A65A02");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 55;
	this.text_1.lineWidth = 240;
	this.text_1.parent = this;
	this.text_1.setTransform(335.35,-409.35);

	this.instance_5 = new lib.Bitmap43();
	this.instance_5.setTransform(0,-469,0.6161,0.6481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.text_1},{t:this.instance_4},{t:this.text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.howToPlay, new cjs.Rectangle(0,-469,762.7,501), null);


// stage content:
(lib.ginati = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//**********הטמעת פונטים*********//
		WebFontConfig = {
			google: {
				families: ['Rubik'] //כאן בחרו את הפונט <-------------------
			}
		};
		
		//בפונקציה הזו אין לבצע שינויים, מייבאת את הפונט הרצוי
		(function () {
			var wf = document.createElement('script');
			wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
			wf.type = 'text/javascript';
			wf.async = true;
			var s = document.getElementsByTagName('script')[0];
		
			s.parentNode.insertBefore(wf, s);
		})();
		
		restart();
		
		function restart() {
			//במקרה של לחיצה על סיום משחק
			//העלמה של האובייקטים של חלונית הסיום
			stage.removeChild(stage.getChildByName("endW"));
			stage.removeChild(stage.getChildByName("gradeTXT"));
			stage.removeChild(stage.getChildByName("durationTXT"));
			stage.removeChild(stage.getChildByName("mistakTXT"));
			stage.removeChild(stage.getChildByName("mistakTXT"));
			stage.removeChild(stage.getChildByName("board"));
			stage.removeChild(stage.getChildByName("myQ"));
			stage.removeChild(stage.getChildByName("subject"));
			stage.removeChild(stage.getChildByName("unitTXT"));
			
		
		
			//********קומבו ומסך פתיחה*******//
		
			var subjects = ["לא בחרת נושא", "בעלי חיים", "מי אני"];
			////משתנה שיעזור לברר איזה ערך מסומן בכל פעם בקומבו בוקס. עם הפתיחה מופיע הערך הראשון ולכן הערך ההתחלתי הוא 0
			var mychoice = 0;
		
		
			//*******משתנים גלובאליים**********///
			////המערך של כל המשחק
			var myGame;
			//משתנה לשמירת מספר מסיחים לשאלה
			var answNum = 0;
			//משתנה לשמירת מספר השאלה האקראית
			var randomQ = 0;
			//משתנה לשמירת תשובת השחקן
			var playerAnswr = 0;
			//משתנה לשמירת מיקום התשובה הנכונה 
			var correctPlace = 0;
			//משתנה להגדרת האינטרוול
			var myInterval;
			//משתנה להגדרת השניות
			var sec = 0;
			//משתנה מערך לשמירת נסיונות המענה לשאלות
			var tries = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
			//משתנה לצבירת משך המענה עם כל שאלה
			var Tduration = 0;
			//משתנה לשמירת מספר הפריים הכרונווגי לצמיחת הצמח
			var Fcounter = 0;
			//משתנה לשמירת מספר השאלה הכרונולוגי
			var Qcounter = 0;
			//////הוספת הקומבו לבמה
			var entering = new lib.entering();
			entering.x = 121;
			entering.y = 529;
			stage.addChild(entering);
		
			var forcombo = new lib.forcomb();
			forcombo.x = 380;
			forcombo.y = 337;
			stage.addChild(forcombo);
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0.7;
		
			////מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
			////בעת שינוי ערך בקומבו
			function mycb_change(evt) {
				//שמירת הערך שנבחר בקומבו
				console.log(evt.currentTarget.value);
				mychoice = evt.currentTarget.value;
				//	//אם נבחר הערך הראשון - "בחר נושא
				if (mychoice == 0) {
					//ניטרול כפתור "בחר
					forcombo.startbtn.alpha = 0.3;
					forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
				} else {
					//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
					forcombo.startbtn.alpha = 1;
					forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
				}
			}
		
			////לחיצה על בחר
			function fl_ClickToPosition() {
				//איפוס המשתנים לצמחית הצמח במקרה של שחק שוב
				Fcounter = 0;
				Qcounter = 0;
		
				stage.removeChild(forcombo);
				stage.removeChild(entering);
			    
				var startAnim= new lib.startAnimation;
				stage.addChild(startAnim);
				startAnim.name= "startAnim";
				startAnim.x=458;
				startAnim.y=370;
				
				var deleyfirst;
				function deleyFirstfunc() {
			    dedeleyfirst = setTimeout(firstGameFunc, 11000);}
		
				var deleySecond;
				function deleySecfunc() {
			   deleySecond = setTimeout(secondGameFunc,11000);}
		
				if (mychoice == 1) {
					deleyFirstfunc();
				} else if (mychoice == 2) {
					deleySecfunc();
				}
			}
		
		
		
		
			//************ שאלות *************//
		
			//התוכן של המשחק הראשון: בעלי החיים
			function firstGameFunc() {
		
				myGame = [
					[ //שאלה1	
						["?מי מהבאים אינו יונק", "", "txt"],
						["ינשוף", "", true, "txt"],
						["דולפין", "", false, "txt"],
						["פרה", "", false, "txt"],
						["כלב", "", false, "txt"]
		
					],
		
					[ //שאלה2
						["?מי אינו נכלל תחת משפחת העופות", "", "txt"],
						["עטלף", "", true, "txt"],
						["פינגווין", "", false, "txt"],
						["תרנגול", "", false, "txt"],
						["בת יענה", "", false, "txt"]
					],
		
					[ //שאלה3
						["?כמה רגליים יש לעכביש", "", "txt"],
						["8", "", true, "txt"],
						["6", "", false, "txt"],
						["7", "", false, "txt"],
						["9", "", false, "txt"]
					],
		
		
					[ //שאלה4
						["?מי מהבאים מטיל ביצה", "", "txt"],
						["נחש", "", true, "txt"],
						["עטלף", "", false, "txt"],
						[lib.dolphin, "", false, "pic"],
						["ארנב", "", false, "txt"]
					],
		
		
					[ //שאלה5
						["?מהו פרד", ""],
						["בן כלאיים של חמור וסוסה או אתון וסוס", "", true, "txt"],
						["סוג של חמור גדול", "", false, "txt"],
						["סוס צעיר", "", false, "txt"]
					],
		
		
					[ //שאלה6
						["איזו ציפור מהציפורים הבאות עפה לקנים אחרים בכדי להטיל את ביציה בלי להשאר לדגור עליהן ומשאירה אותן לציפור פונדקאית", "", "txt"],
						["קוקייה", "", true, "txt"],
						["סנונית", "", false, "txt"],
						["יונה", "", false, "txt"],
						["אדום החזה", "", false, "txt"]
					],
		
					[ //שאלה7
						["?מהו גזע הכלב בתמונה", lib.dog, "txt"],
						["ג'ק ראסל", "", true, "txt"],
						["פינצ'ר", "", false, "txt"]
					],
		
		
					[ //שאלה8
						["?מי מהבאים הוא הנחליאלי", "", "txt"],
						[lib.nahlieli, "", true, "pic"],
						[lib.snunit, "", false, "pic"],
						[lib.red, "", false, "pic"],
						[lib.duhifat, "", false, "pic"]
					],
		
		
					[ //שאלה9
						["?מיהו בעל החיים המהיר בעולם", "", "txt"],
						["ברדלס", "", true, "txt"],
						["פנתר", "", false, "txt"]
					],
		
		
					[ //שאלה10
						["?כמה זמן נמשך הריון אצל עכברים", "", "txt"],
						["22 ימים", "", true, "txt"],
						["חודש אחד", "", false, "txt"],
						["10 ימים", "", false, "txt"],
						["תשעה חודשים", "", false, "txt"]
					]
				];
		
				startGame();
			}
		
		
		
			//התוכן של המשחק השני:מי אמר
		
			function secondGameFunc() {
		
		
				myGame = [
					[ //שאלה1	
						["?מיהו הפילוסוף שאמר:אני חושב משמע אני קיים", "", "txt"],
						["רנה דקארט", "0", true, "txt"],
						["קארל מרקס", "0", false, "txt"]
		
					],
		
					[ //שאלה2
						["?מי אמר את המשפט: פשטות היא התחכום האולטימטיבי", "", "txt"],
						[lib.leonardoDV, "0", true, "pic"],
						[lib.vanG, "0", false, "pic"]
		
					],
		
					[ //שאלה3
						[":אלברט איינשטיין אמר את המשפט", "", "txt"],
						["צירוף מקרים הוא הדרך של אלוהים להישאר אנונימי", "0", true, "txt"],
						["לעולם אל תפריע לאויבך כשהוא עושה טעות", "0", false, "txt"],
						["לאדם שלא קורא ספרים טובים אין שום יתרון על פני אדם שלא יודע לקרוא", "0", false, "txt"],
						["אנחנו יודעים מה אנחנו, אך לא מה היינו יכולים להיות", "0", false, "txt"]
					],
		
					[ //שאלה4
						["מה המילה החסרה בציטוטו של אלברט איינשטיין: רק שני דברים הם אינסופיים. היקום וה___ האנושי, ואני עדיין לא בטוח לגבי הראשון", "", "txt"],
						["טמטום", "0", true, "txt"],
						["הון", "0", false, "txt"],
						["רצון", "0", false, "txt"],
						["מוח", "0", false, "txt"]
					],
		
					[ //שאלה5
						["מי אמר את המשפט: אנשים שקטים הם בעלי המוחות הקולניים ביותר", "", "txt"],
						["סטיבן הוקינג", "0", true, "txt"],
						["דונלד טראמפ", "0", false, "txt"],
						["פבלו פיקאסו", "0", false, "txt"],
						["ג'ון לנון", "0", false, "txt"]
					],
		
					[ //שאלה6
						["מי אמר/ה: אם אין לחם תאכלו עוגות", "", "txt"],
						["מארי אנטואנט", "0", true, "txt"],
						["הילרי קלינטון", "0", false, "txt"]
					],
		
					[ //שאלה7
						["מי אמר/ה את המשפט: המדע מצא תרופה לרוב הרעות אבל עדיין לא מצא מרפא לאדישותם של בני אדם", "", "txt"],
						["הלן קלר", "0", true, "txt"],
						["מהטמה גנדי", "0", false, "txt"],
						["מרטין לותר קינג", "0", false, "txt"],
						["עדה יונת", "0", false, "txt"]
					],
		
		
					[ //שאלה8
						["השלמ/י את המשפט שאמר שחקן הכדורסל טל ברודי: אנחנו על המפה ואנחנו נשארים ____", "", "txt"],
						["על המפה", "0", true, "txt"],
						["פה תמיד", "0", false, "txt"],
						["במפה לעולמים", "0", false, "txt"],
						["כדי לנצח", "0", false, "txt"]
					],
		
					[ //שאלה9
						["למי משוייך הציטוט: אני לא מפחד מהמוות - הייתי מת במשך מליארדים של שנים לפני שנולדתי ולא סבלתי בשל כך", "", "txt"],
						["מרק טווין", "0", true, "txt"],
						["אוסקר ווילד", "0", false, "txt"],
						["פרידריך ניטשה", "0", false, "txt"],
						["סוקרטס", "0", false, "txt"]
					],
		
					[ //שאלה10
						["בחר/י את התמונה של הפוליטיקאי/ת שאמר/ה: מנהיג שלא מהסס לפני שהוא שולח את אומתו לקרב, אינו מתאים להיות מנהיג", "", "txt"],
						[lib.golda, "0", true, "pic"],
						["משה דיין", "0", false, "txt"],
						[lib.bibi, "0", false, "pic"],
						["יצחק רבין", "0", false, "txt"]
					]
				];
		
				startGame();
			}
		
		
		
			//***********תחילת המשחק **********//
		
			function startGame() {
				// הצגת נושא המשחק 
				
		stage.removeChild(stage.getChildByName("startAnim"));  
			
				var subject = new createjs.Text();
				stage.addChild(subject);
				subject.name = "subject";
				subject.x = 1250;
				subject.y = 11;
				subject.font = "20px Rubik";
				subject.textAlign = "right";
				subject.text = subjects[mychoice];
				subject.color = "white";
		
				//מערך למיקומי המסיחים על פי כמות מסיחים
				var answerPosition = [
					[416, 676],
					[284, 548, 812],
					[208, 435, 662, 889]
				]
		
				// הפעלת פונקציית טעינת השאלות
				quesLoad();
		
		
		
		
		
				// פונקצייה לגרירת המזלף
				function dragMazlef(evt) {
					stage.getChildByName("mazlef").gotoAndStop(0);
					var mouseloc = stage.globalToLocal(stage.mouseX, stage.mouseY);
					evt.currentTarget.x = mouseloc.x;
					evt.currentTarget.y = mouseloc.y;
		
					//יצירת ההילה
					//ל4 מסיחים
		
					if (answNum == 4) {
		
						if ((mouseloc.x < 470) && (mouseloc.x > 200)) {
							stage.getChildByName("0").gotoAndStop(1);
						} else {
							stage.getChildByName("0").gotoAndStop(0);
						}
		
						if ((mouseloc.x < 650) && (mouseloc.x > 470)) {
							stage.getChildByName("1").gotoAndStop(1);
						} else {
							stage.getChildByName("1").gotoAndStop(0);
						}
		
						if ((mouseloc.x < 900) && (mouseloc.x > 650)) {
							stage.getChildByName("2").gotoAndStop(1);
						} else {
							stage.getChildByName("2").gotoAndStop(0);
						}
		
						if ((mouseloc.x < 1200) && (mouseloc.x > 900)) {
							stage.getChildByName("3").gotoAndStop(1);
						} else {
							stage.getChildByName("3").gotoAndStop(0);
						}
					}
		
					//ל3 מסיחים
					else if (answNum == 3) {
		
						if ((mouseloc.x < 500) && (mouseloc.x > 230)) {
							stage.getChildByName("0").gotoAndStop(1);
						} else {
							stage.getChildByName("0").gotoAndStop(0);
						}
		
						if ((mouseloc.x < 800) && (mouseloc.x > 500)) {
							stage.getChildByName("1").gotoAndStop(1);
						} else {
							stage.getChildByName("1").gotoAndStop(0);
						}
		
						if ((mouseloc.x < 1030) && (mouseloc.x > 800)) {
							stage.getChildByName("2").gotoAndStop(1);
						} else {
							stage.getChildByName("2").gotoAndStop(0);
						}
					}
		
		
					////ל2 מסיחים
					else if (answNum == 2) {
		
						if ((mouseloc.x < 634) && (mouseloc.x > 346)) {
							stage.getChildByName("0").gotoAndStop(1);
						} else {
							stage.getChildByName("0").gotoAndStop(0);
						}
		
						if ((mouseloc.x < 940) && (mouseloc.x > 634)) {
							stage.getChildByName("1").gotoAndStop(1);
						} else {
							stage.getChildByName("1").gotoAndStop(0);
						}
					}
				}
		
		
				//פונקציה לשחרור המזלף
				function upMazlef() {
					var mouseloc = stage.globalToLocal(stage.mouseX, stage.mouseY);
		
		
					//ל4 מסיחים
		
					if (answNum == 4) {
		
						if ((mouseloc.x < 470) && (mouseloc.x > 200)) {
							mazlef.x = 450;
							stage.getChildByName("mazlef").gotoAndStop(1);
							mazlef.y = 275;
							playerAnswr = 1;
		
						} else if ((mouseloc.x < 650) && (mouseloc.x > 470)) {
							mazlef.x = 680;
							stage.getChildByName("mazlef").gotoAndStop(1);
							mazlef.y = 275;
							playerAnswr = 2;
		
		
						} else if ((mouseloc.x < 900) && (mouseloc.x > 650)) {
							mazlef.x = 912;
							stage.getChildByName("mazlef").gotoAndStop(1);
							mazlef.y = 275;
							playerAnswr = 3;
		
						} else if ((mouseloc.x < 1200) && (mouseloc.x > 900)) {
							mazlef.x = 1138;
							stage.getChildByName("mazlef").gotoAndStop(1);
							mazlef.y = 275;
							playerAnswr = 4;
						}
		
					}
		
					//ל3 מסיחים
					else if (answNum == 3) {
		
						if ((mouseloc.x < 500) && (mouseloc.x > 230)) {
							mazlef.x = 534;
							stage.getChildByName("mazlef").gotoAndStop(1);
							mazlef.y = 275;
							playerAnswr = 1;
		
		
						} else if ((mouseloc.x < 800) && (mouseloc.x > 500)) {
							mazlef.x = 798;
							stage.getChildByName("mazlef").gotoAndStop(1);
							mazlef.y = 275;
							playerAnswr = 2;
		
		
						} else if ((mouseloc.x < 1030) && (mouseloc.x > 800)) {
							mazlef.x = 1062;
							stage.getChildByName("mazlef").gotoAndStop(1);
							mazlef.y = 275;
							playerAnswr = 3;
		
						}
		
					}
		
					//ל2 מסיחים
					else if (answNum == 2) {
		
						if ((mouseloc.x < 634) && (mouseloc.x > 346)) {
							mazlef.x = 666;
							stage.getChildByName("mazlef").gotoAndStop(1);
							mazlef.y = 275;
							playerAnswr = 1;
		
		
						} else if ((mouseloc.x < 940) && (mouseloc.x > 634)) {
							mazlef.x = 926;
							stage.getChildByName("mazlef").gotoAndStop(1);
							mazlef.y = 275;
							playerAnswr = 2;
		
		
						}
					}
		
					if (playerAnswr > 0) {
						mazlef.addEventListener("click", check);
					}
		
		
		
				}
		
		
				//פונקצייה ליצירת ומיקום שאלה
				function quesLoad() {
		
					//הגרלת שאלה רנדומאלית
					randomQ = Math.floor(Math.random() * myGame.length);
					console.log(randomQ);
					answNum = myGame[randomQ].length - 1;
					console.log(answNum + "ansN");
		
					//יצירת הלוח של השאלה
					var board = new lib.board();
					stage.addChildAt(board, 1);
					board.name = "board";
					board.y = 184;
					board.x = 319.2;
		
		
					//יצירת תיבת טקסט של השאלה
					var myQ = new createjs.Text();
					stage.addChildAt(myQ, 2);
					myQ.name = "myQ";
					myQ.x = 630.2;
					myQ.y = 60;
					myQ.font = "29px Rubik";
					myQ.textAlign = "center";
					myQ.lineWidth = 635;
					myQ.text = myGame[randomQ][0][0];
		
					var explainT = new createjs.Text();
					stage.addChildAt(explainT, 2);
					explainT.name = "explainT";
					explainT.text = "השקו את התשובה הנכונה על ידי גרירת המזלף";
					explainT.x = 595;
					explainT.y = 160;
					explainT.font = "19px Rubik";
					explainT.textAlign = "left";
					explainT.color = "blue";
		
		
					//הוספת תמונה במידה ויש
					if (myGame[randomQ][0][1] != "") {
						var quesPic = new(myGame[randomQ][0][1])();
						stage.addChild(quesPic);
						quesPic.name = "pic5";
						quesPic.x = 312;
						quesPic.y = 46;
						myQ.lineWidth = 550;
		
						//יצירת זכוכית המגדלת
						var mGlass = new lib.mGlass();
						stage.addChild(mGlass);
						mGlass.y = 165;
						mGlass.x = 307;
						mGlass.name = "mGlass5";
						//יצירת ארוע לחיצה לזכוכית 
						mGlass.addEventListener("click", biggerPic);
		
					}
		
		
					//יצירה דינאמית של הכדים
					for (i = 0; i < answNum; i++) {
		
						var box = new lib.seed_box();
						stage.addChildAt(box, 1);
						box.gotoAndStop(0);
						box.y = 389;
						box.name = i;
		
						if (answNum == 2) {
							box.x = answerPosition[0][i];
						} else if (answNum == 3) {
							box.x = answerPosition[1][i];
						} else if (answNum == 4) {
							box.x = answerPosition[2][i];
						}
					}
		
		
		
		
					//************יצירת  המסיחים בהתאם לסוג*********
		
					// יצירת הכפלה של מערך של התשובה שנבחרה לצורך הגרלה עתידית
					//var randomArray = myGame[randomQ];
					var randomArray = myGame[randomQ].concat();
		
					randomArray.splice(0, 1);
					/*var randomArray = [];
					for (i = 0; i < answNum; i++) {
						randomArray[i][0] = myGame[randomQ][i + 1][0];
						randomArray[i][1] = myGame[randomQ][i + 1][3];
					}*/
					console.log("randomArray: " + randomArray);
		
		
					var counter = 0;
					//יצירת המסיחים
					for (i = 0; i < answNum; i++) {
						var ansRandNum = Math.floor(Math.random() * randomArray.length);
		
						//אם מדובר בטקסט 
						if (randomArray[ansRandNum][3] == "txt") {
		
							//יצירה דינאמית של תיבת הטקסט
							var myTxt = new createjs.Text();
							stage.addChildAt(myTxt, 5);
							/*myTxt.text = myGame[randomQ][i + 1][0];*/
							myTxt.y = 450;
							myTxt.lineWidth = 140;
							myTxt.textAlign = "center";
							myTxt.font = "18px Rubik";
							myTxt.name = "txt" + i;
		
							if (answNum == 2) {
								myTxt.x = answerPosition[0][i] + 90;
							} else if (answNum == 3) {
								myTxt.x = answerPosition[1][i] + 90;
							} else if (answNum == 4) {
								myTxt.x = answerPosition[2][i] + 90;
							}
		
		
							// השתלת התוכן 
							stage.getChildByName("txt" + i).text = randomArray[ansRandNum][0];
							console.log("randomArray: " + randomArray);
							console.log("ansRandNum: " + ansRandNum);
		
							if (ansRandNum == 0 && counter == 0) {
								counter++;
								correctPlace = i + 1;
								console.log("correctplac " + correctPlace);
							}
		
		
						}
		
						//אם מדובר בתמונות 
						else if (randomArray[ansRandNum][3] == "pic") {
							//יצירת התמונות
							console.log(ansRandNum + "מספר תמונה שהוגרל");
							var myPic = new(randomArray[ansRandNum][0])();
							stage.addChildAt(myPic, 5);
							myPic.y = 450;
							myPic.name = "pic" + i;
		
							//יצירת זכוכית המגדלת
							var mGlass = new lib.mGlass();
							stage.addChildAt(mGlass, 6);
							mGlass.y = 531;
							mGlass.name = "mGlass" + i;
							//יצירת ארוע לחיצה לזכוכית 
							mGlass.addEventListener("click", biggerPic);
		
							if (answNum == 2) {
								myPic.x = answerPosition[0][i] + 32;
								mGlass.x = answerPosition[0][i] + 5;
							} else if (answNum == 3) {
								myPic.x = answerPosition[1][i] + 32;
								mGlass.x = answerPosition[1][i] + 5;
							} else if (answNum == 4) {
								myPic.x = answerPosition[2][i] + 32;
								mGlass.x = answerPosition[2][i] + 5;
							}
		
							if (ansRandNum == 0 && counter == 0) {
								counter++;
								correctPlace = i + 1;
								console.log("correctplac " + correctPlace);
							}
		
						}
						//הסרה של התשובה שהוגרלה
						randomArray.splice(ansRandNum, 1);
					}
		
				}
		
		
		
		
		
				//הפונקציה להגדלת תמונות
				function biggerPic(evt) {
					var picB = evt.currentTarget.name;
					console.log("השם ההפעיל לחיצה" + picB);
					picB = picB.substring(6, 7);
					console.log("מספר התמונה עליה לחצו" + picB);
					stage.getChildByName("pic" + picB).scale = 1.8;
		
					//יצירת לחצן יציאה
					var exit = new lib.exit();
					stage.addChildAt(exit, 13);
					exit.x = (stage.getChildByName(evt.currentTarget.name)).x + 10;
		
					//אם התמונה היא מופיעה בגזע השאלה
					if (picB == 5) {
						exit.y = 20;
		
						//אם התמונה היא מופיעה במסיחים
					} else {
						exit.y = 431;
					}
		
					exit.name = "exit" + picB;
					exit.addEventListener("click", normalPic);
		
				}
		
				//פונקצייה לסגירת הגדלת התמונות
				function normalPic(evt) {
					var Npic = evt.currentTarget.name;
					Npic = Npic.substring(4, 5);
					console.log("מספר התמונה להקטנה חזרה" + Npic);
					(stage.getChildByName("pic" + Npic)).scale = 1;
					stage.removeChild(stage.getChildByName("exit" + Npic));
		
				}
		
		
				function txtrnd() {
					//***********השתלת תוכן טקסטואלי של המסיחים עצמם בצורה רנדומאלית******//
		
					//הגרלה של מיקום המסיחים
					//יצירת הכפלה של מערך של התשובה שנבחרה
					var randomArray = [];
					for (i = 0; i < answNum; i++) {
						console.log(myGame[randomQ][i + 1][0]);
						randomArray[i] = myGame[randomQ][i + 1][0];
		
					}
					console.log(randomArray);
					var counter = 0;
					for (i = 0; i < answNum; i++) {
		
						var ansRandNum = Math.floor(Math.random() * randomArray.length);
						stage.getChildByName("txt" + i).text = randomArray[ansRandNum];
						randomArray.splice(ansRandNum, 1);
		
						if (ansRandNum == 0 && counter == 0) {
							counter++;
							correctPlace = i + 1;
							console.log("correctplac " + correctPlace);
						}
					}
		
				}
		
		
				//**************יצירת האובייקטים דינאמית על הבמה**************
		
		
		
				//יצירת המזלף
				var mazlef = new lib.mazlef();
				stage.addChildAt(mazlef, 6);
				mazlef.y = 250;
				mazlef.x = 1257;
				mazlef.name = "mazlef";
				mazlef.addEventListener("pressmove", dragMazlef);
				mazlef.addEventListener("pressup", upMazlef);
				mazlef.gotoAndStop(0);
		
		
				//יצירת מחזיק מזלף
				var hook = new lib.hook();
				stage.addChild(hook);
				hook.y = 201;
				hook.x = 1210;
				hook.name = "hook";
		
		
				//יצירת גומות באדמה
				for (i = 0; i < 10; i++) {
					var hole = new lib.hole();
					stage.addChild(hole);
					hole.y = 685;
					hole.name = "hole" + i;
					var locx = 210 + 100 * i;
					hole.x = 210 + 100 * i;
				}
		
				//יצירת כפתור טיימר
				var timer = new lib.timer();
				stage.addChildAt(timer, 2);
				timer.x = 32;
				timer.y = 21;
				timer.name = "timer";
		
				//יצירת כפתור פאוז
				var pause = new lib.pause();
				stage.addChildAt(pause, 2);
				pause.x = 116;
				pause.y = 12.4;
				pause.name = "pause";
				pause.addEventListener("click", pauseFunc);
		
				//יצירת טיימר
				var timerTxt = new createjs.Text();
				stage.addChildAt(timerTxt, 7);
				timerTxt.x = 36;
				timerTxt.y = 30;
				timerTxt.name = "timerTxt";
				timerTxt.font = "20px calibri";
				timerTxt.color = "white";
				myInterval = setInterval(myTimer, 1000);
				sec = 31;
				function myTimer() {
					sec--;
					timerTxt.text = sec;
					if (sec == 0) {
						clearInterval(myInterval);
						var timesUp = new lib.timesUp();
						stage.addChild(timesUp);
						timesUp.y = 564;
						timesUp.x = 258;
						timesUp.name = "timesUp";
						Tduration += 30;
						console.log(Tduration + "after timesout");
		
						stage.getChildByName("timesUp").getChildByName("nextQues").addEventListener("click", nxtWrong);
		
					}
				}
		
		
		
		
				//פונקצייה לבדיקה
				function check() {
		
					clearInterval(myInterval);
					stage.getChildByName("mazlef").gotoAndPlay(2);
		
		
		
					if (playerAnswr == correctPlace) {
		
		
						var grow;
						function deleyGrowfunc() {
							grow = setTimeout(growFunc, 2500);
						}
						//צמיחת הצמח מהכד
						function growFunc() {
							var plant = new lib.plant1;
							stage.addChildAt(plant, 1);
							plant.y = 303;
							plant.x = answerPosition[answNum - 2][correctPlace - 1] + 50;
							plant.gotoAndPlay(Fcounter);
							plant.name = "plant";
						}
						deleyGrowfunc()
		
		
						var deleyNati;
						function deleyNfunc() {
							deleyNati = setTimeout(natiPosFeedback, 3385);
						}
		
		
						var nati = new lib.nati();
						nati.name = "nati";
						console.log("correct");
						var nextQues = new lib.nextQues();;
						nextQues.name = "nextQues";
		
		
						function natiPosFeedback() {
							stage.addChildAt(nati, 6);
							nati.gotoAndPlay(1);
							nati.y = 260;
							nati.x = 50;
						}
		
		
						var deleynext;
						function deleyNqfunc() {
							deleynext = setTimeout(showNextq, 3587);
						}
		
						function showNextq() {
							stage.addChildAt(nextQues, 7);
							nextQues.addEventListener("click", rndNxt)
							nextQues.x = 64;
							nextQues.y = 200;
						}
		
						deleyNfunc();
						deleyNqfunc();
		
		
						var garden;
						function deleyAddFunc() {
							garden = setTimeout(addToGarden, 4000);
						}
						//הוספת הצמח אל הגומה באדמה
						function addToGarden() {
							var plantG = new lib.plant1;
							stage.addChildAt(plantG, 3);
							plantG.y = 585;
							plantG.x = 195 + 100 * Qcounter;
							plantG.gotoAndPlay(Fcounter);
							plantG.name = "plantG" + Fcounter;
							console.log("this is  the name" + "plantG" + Fcounter);
							Qcounter = Qcounter + 1;
							Fcounter = Fcounter + 5;
						}
		
						deleyAddFunc();
		
					} else {
		
						var puddel = new lib.puddle;
						stage.addChildAt(puddel, 1);
						puddel.y = 500;
						puddel.x = mazlef.x -140 ;
						puddel.gotoAndPlay(1);
						puddel.name = "puddel";
		
						var sadNati = new lib.sadNati();
						
						sadNati.name = "sadNati";
						console.log("INcorrect");
		
		
						function showSad() {
							stage.addChildAt(sadNati, 6);
							sadNati.gotoAndPlay(1);
							sadNati.y = 260;
							sadNati.x = 50;
						}
		
						var deleySad;
						function deleySadfunc() {
							deleyNati = setTimeout(showSad, 3385);
						}
		
						deleySadfunc();
		
						var nextQues = new lib.nextQues();
						nextQues.name = "nextQues";
						nextQues.addEventListener("click", nxtWrong);
		
						function showNq() {
							stage.addChildAt(nextQues, 7);
							nextQues.x = 71;
							nextQues.y = 205;
						}
		
						var deleyNq;
						function deleyNqFunc() {
							deleyNq = setTimeout(showNq, 3985);
						}
						deleyNqFunc();
					}
		
					//שמירת משך מענה השאלה במשתנה
					Tduration += (30 - sec);
					console.log(Tduration + " duration after check");
		
					//הסרה של הליסנרים של המזלף שלא יפעלו אחרי שלחץ על בדיקה
					stage.getChildByName("mazlef").removeEventListener("click", check);
					stage.getChildByName("mazlef").removeEventListener("pressmove", dragMazlef);
					stage.getChildByName("mazlef").removeEventListener("pressup", upMazlef);
		
				}
		
		
		
				function backFunc() {
					stage.removeChild(stage.getChildByName("stopGame"));
					stage.removeChild(stage.getChildByName("backToGame"));
					stage.getChildByName("pause").addEventListener("click", pauseFunc);
					myInterval = setInterval(myTimer, 1000);
				}
		
				//לאחר לחיצה על פאוז
				function pauseFunc() {
					clearInterval(myInterval);
					stage.getChildByName("pause").removeEventListener("click", pauseFunc);
		
		
					var stopGame = new lib.stopGame();
					stage.addChild(stopGame);
					stopGame.x = 258;
					stopGame.y = 564;
					stopGame.name = "stopGame";
					stage.getChildByName("stopGame").getChildByName("backToGame").addEventListener("click", backFunc);
		
		
		
		
				}
		
		
				//************מעבר לשאלה הבאה **************//
		
				//במידה והתשובה נכונה
				function rndNxt() {
					stage.removeChild(stage.getChildByName("plant"));
					console.log(myGame.length);
					myGame.splice(randomQ, 1);
					console.log(myGame.length);
		
					if (myGame.length > 0) {
						zeroInter();
						quesLoad();
					} else {
						//המשחק הסתיים
						//הסרה של כל האובייקטים
						zeroNxt();
						stage.removeChild(stage.getChildByName("pause"));
						stage.removeChild(stage.getChildByName("timerTxt"));
						stage.removeChild(stage.getChildByName("timer"));
						for (i = 0; i < 10; i++) {
							stage.removeChild(stage.getChildByName("hole" + i));
						}
						stage.removeChild(stage.getChildByName("hook"));
		
						//הסרה של הצמחים בגומות
						for (i = 0; i < 46; i = i + 5) {
							stage.removeChild(stage.getChildByName("plantG" + i));
						}
						//יצירת לוח העץ עם הכיתוב המתאים
		
						//יצירת הלוח של השאלה
						var board = new lib.board();
						stage.addChildAt(board, 1);
						board.name = "board";
						board.y = 184;
						board.x = 319.2;
		
		
						//יצירת תיבת טקסט של השאלה
						var myQ = new createjs.Text();
						stage.addChildAt(myQ, 2);
						myQ.name = "myQ";
						myQ.x = 630.2;
						myQ.y = 100;
						myQ.font = "35px Rubik";
						myQ.textAlign = "center";
						myQ.lineWidth = 635;
		
						//אם סחר במשחק הראשון - בעלי חיים
						if (mychoice == 1) {
							myQ.text = " !סיימתם את המשחק - בעלי חיים";
						} else if (mychoice == 2) {
							myQ.text = "!סיימתם את המשחק - מי אמר";
						}
		
		
						//מעבר לאנימציית סיום
						var endW = new lib.endW();
						stage.addChildAt(endW, 2);
						endW.x = 451;
						endW.y = 232;
						endW.name = "endW";
		
						//חישוב מספר הטעויות
						var mistakN = 0;
						for (i = 0; i < 10; i++) {
							mistakN += tries[i];
		
						}
		
						mistakN = mistakN - 10;
						console.log("מספר הטעויות הוא" + mistakN);
						console.log("תיבת טקסט טעויות" + mistakTXT);
		
						//יצירת תוויות הסיכום הדינאמיות 
						//יצירת תיבת טקסט לציון יחידת המידה של הזמנים
						var unitTXT = new createjs.Text();
						stage.addChildAt(unitTXT, 3);
						unitTXT.font = "37px Rubik";
						unitTXT.x=610;
						unitTXT.y=327;
						unitTXT.name="unitTXT";
			
		
						//יצירת תיבת טקסט למשך זמן מענה
		
						var durationTXT = new createjs.Text();
						stage.addChildAt(durationTXT, 3);
						durationTXT.x = 700;
						durationTXT.y = 327;
						durationTXT.font = "37px Rubik";
						durationTXT.name = "durationTXT";
		
						if (Tduration > 60) {
							var rest= Tduration%60;
							Tduration = ~~(Tduration / 60);
							durationTXT.text = "  למשך  " +Tduration + ":" + rest ;
							unitTXT.text=".דקות";
							
						} else {
							durationTXT.text = " "+"למשך"+" " +Tduration;
							unitTXT.text=".שניות";
		
						}
		
						//יצירת תיבת טקסט למספר הטעויות 
						var mistakTXT = new createjs.Text();
						stage.addChildAt(mistakTXT, 3);
						mistakTXT.x = 635;
						mistakTXT.y = 365;
						mistakTXT.text = mistakN;
						mistakTXT.font = "37px Rubik";
						mistakTXT.name = "mistakTXT";
		
						//יצירת תיבת טקסט לציון 
						var gradeTXT = new createjs.Text();
						stage.addChildAt(gradeTXT, 3);
						gradeTXT.x = 615;
						gradeTXT.y = 407;
						gradeTXT.font = "37px Rubik";
						gradeTXT.name = "gradeTXT"
		
		
						//משתנה לציון המשחק
						var Tgrade = 0;
						
		
						//לולאה לחישוב ציון כל שאלה וצבירתה במשתנה של ציון המשחק
		
						for (i = 0; i < 10; i++) {
							var Qgrade = 100 / (10 * tries[i]);
							console.log(Qgrade);
							Tgrade += Qgrade;
						}
						console.log("הציון הסופי הוא" + Tgrade);
						
						gradeTXT.text = Tgrade.toFixed(0);
		
						////הוספת ארועי לחיצה לכפתורים במסך הסיום
						stage.getChildByName("endW").getChildByName("endGame").addEventListener("click", restart);
						stage.getChildByName("endW").getChildByName("replayGame").addEventListener("click", replayFunc);
					}
		
		
				}
		
				//פונקציה לאחר לחיצה על "שחקו שוב"
				function replayFunc() {
		
					//העלמה של האובייקטים של חלונית הסיום
					stage.removeChild(stage.getChildByName("endW"));
					stage.removeChild(stage.getChildByName("gradeTXT"));
					stage.removeChild(stage.getChildByName("durationTXT"));
					stage.removeChild(stage.getChildByName("mistakTXT"));
					stage.removeChild(stage.getChildByName("mistakTXT"));
					stage.removeChild(stage.getChildByName("board"));
					stage.removeChild(stage.getChildByName("myQ"));
		
					//קריאה לפונקציה של תחילת המשחק 
					fl_ClickToPosition();
				}
		
		
				//  במידה והתשובה שגויה או שנגמר הזמן
				function nxtWrong() {
					zeroInter();
					tryUp();
					quesLoad();
		
				}
		
		
				//העלאת מספר הנסיונות
				function tryUp() {
					tries[randomQ]++;
				}
		
		
				//איפוס הטיימר ויצירת האובייקטים לשאלה הבאה
				function zeroInter() {
		
					//הפעלת פונקציית איפוס האובייקטים לקראת השאלה הבאה
					zeroNxt();
		
					//יצירת המזלף
					stage.addChildAt(mazlef, 6);
					mazlef.y = 250;
					mazlef.x = 1257;
					mazlef.name = "mazlef";
					mazlef.addEventListener("pressmove", dragMazlef);
					mazlef.addEventListener("pressup", upMazlef);
					mazlef.gotoAndStop(0);
		
					//איפוס הטיימר ל30 בחזרה
					sec = 31;
					myInterval = setInterval(myTimer, 1000);
				}
		
		
				//איפוס האובייקטים לקראת השאלה הבאה
				function zeroNxt() {
					for (i = 0; i < answNum; i++) {
						stage.removeChild(stage.getChildByName(i));
					}
		
					for (i = 0; i < answNum; i++) {
						stage.removeChild(stage.getChildByName("txt" + i));
						stage.removeChild(stage.getChildByName("pic" + i));
						stage.removeChild(stage.getChildByName("mGlass" + i));
						stage.removeChild(stage.getChildByName("exit" + i));
					}
					stage.removeChild(stage.getChildByName("pic5"));
					stage.removeChild(stage.getChildByName("timesUp"));
					stage.removeChild(stage.getChildByName("sadNati"));
					stage.removeChild(stage.getChildByName("nati"));
					stage.removeChild(stage.getChildByName("mazlef"));
					stage.removeChild(stage.getChildByName("nextQues"));
					stage.removeChild(stage.getChildByName("myQ"));
					stage.removeChild(stage.getChildByName("board"));
					stage.removeChild(stage.getChildByName("explainT"));
					stage.removeChild(stage.getChildByName("mGlass5"));
					stage.removeChild(stage.getChildByName("exit5"));
					stage.removeChild(stage.getChildByName("puddel"));
		
				}
		
		
		
		
		
		
		
		
		
		
		
		
		
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.instance = new lib.garden();
	this.instance.setTransform(580.7,626.45,0.6111,0.8259,0,0,0,844,19.8);

	this.instance_1 = new lib.background();
	this.instance_1.setTransform(-132,-17,0.6681,0.6726);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(508,343,803.0999999999999,385.29999999999995);
// library properties:
lib.properties = {
	id: 'D6121081ADF0354D90C6E124D57038E7',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/ginati_atlas_1.png?1613245208048", id:"ginati_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1613245208299", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1613245208299", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1613245208299", id:"an.ComboBox"},
		{src:"components/ui/src/combobox.js?1613245208299", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D6121081ADF0354D90C6E124D57038E7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;