(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"לשירלי_atlas_", frames: [[1002,1125,221,344],[1202,0,794,1123],[0,850,1000,750],[0,0,1200,848]]}
];


// symbols:



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["לשירלי_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["לשירלי_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["לשירלי_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["לשירלי_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(248,200,152,0.996)").s().p("AibC+IAAgJIgHgBQgJgCgBgGQgTAEgUABQgNAAAHgMIANgTIgeAOQgKAFABgLIgJAGQgmAeABgtQAAgGABgFQBphQBghcQAtgsAygkQAagSgCgRIAVgPIAJgGIAFgEIACgBIADgCIACgBIACgCIAHgEIAbgQQAHgEAHAAQAXAHACANIAMgKQAGgGAIABQAYAOAEAQIAngZQAGAJAEAKIAXgQQAOARABAQIAAAGQgXAJgWAPQhMA0g+BCQhWBahpBDQgdASgJAcQgDAJAIgCIgKAGQgJAHgHAAQgKAAgCgTg");
	this.shape.setTransform(0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("Ah3CyQAIgcAdgSQBphDBWhaQA/hCBLg0QAWgPAYgJIADgBIABgBIAJgDQAEAIABAHIAAAJQgCAbguASQgOAGgNAKQhGA5hBA+QhgBeh3A6IgBABIgDAAQgEAAADgHgAk2CGQAFgnAkgcQBOg9BFhDQAwgvAxgoIAKgIIAcgYQAFgFAHABQAJAKABAKQABARgZASQgyAkguAsQhgBchoBQIgVAPIgCABQgCAAAAgFg");
	this.shape_1.setTransform(0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-31.1,-20.9,62.2,41.8), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AiqLKIgHAFIAJgOQBDk/AElIQACixgsioIgCgIIAAAAIgDgJIgGgVIgCgIIgDgJIgDgKIgUg5QgdhMAEhTIgCgIIgDgFQgFgHgLgBQgIgBgKACIgGACIgDABIgCADIgEAFIgGABQgIgBgFgIIgCgEIgCAEIAAgIIAAgFIABgEQABgcAPgWIAFgIIAEgFQAPgRAXgOIADgCIALgGIABgBIADgBQAjgTAkgIIAOgDQAQgDARgBIAHAAIAMAAIAYAXIAEAFIAJAJIAGAFIAZAdIAGAHIAIAKIADADIACACIASAXIAEAFIALANIAFAHIAEAFIAGAJIAdApIAaApQASAdAQAfIAEAHIAGAMQABAAAAAAQABAAAAAAQAAAAAAABQgBAAgBAAQAOAbAMAcIACAEIAPAjIAIAVIABACQAUA1AQA4QASBAABBGQAED9gfEAQgFApgUAfIABgCQgOAnhIgBQg6gBg1AfQhpA9hWA+IgRAiIAGgbgAD5DgIABAEIAAgGIgBACgACNiKIAAgBIgBgGIABAHgAC9ldIADAFIgCgGIgBABgAjapaIAKADIAAgBIgIgDIgCABgAhnrDIADABQACgEACgDIgCgBIgFAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-28,-74.1,56.1,148.3), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57352C").s().p("ABzAnIAAgBQgFgFgEgPQhNgkhjgOQgSgCgPAHQgMAGgIAAIgHgHQAJABAOgIIANgCQAdgDAYACQARAFANAKIADABQAWAEAjAAIAEAAQAxAYAaAcIADABIgJAEIgEABIgDgBg");
	this.shape.setTransform(0.1,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB7663").s().p("AgYAtIgGgBIgYgIIgLgIIgVgZQgNgQgOgOIgBgBIgDgEIgBgBIAAgBQAIgBALgFQAQgIASADQBjANBNAlQAEAOAEAGQgQgIgOAIQgpAWguAAQgMAAgOgCg");
	this.shape_1.setTransform(-0.4,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C0906").s().p("ACAAqQgZgbgygYIgEAAQgiAAgWgEIgEgBQgMgKgRgGQgZgCgcAEIgOABQgOAJgIgBIgNgQIgBgHIADAAIBeAGQAmAEAlAHQApAJAoASQAPAHANAMIAGAFIAAABIgBAEIgDAHIgJAFIgDgBg");
	this.shape_2.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-14.3,-5.6,28.8,11.3), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A0C0E").s().p("AgsgFQCOgChTAMIgUABQgaAAgNgLg");
	this.shape.setTransform(110.7,205.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0846B").s().p("AgngEIBFAAIAKAAIgBAEQgnAFgnAAIAAgJg");
	this.shape_1.setTransform(104.2,207.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#695341").s().p("AgxgFIAKAAQAsAAAsAFIABAEIgKAAQgQACgPAAQgjAAgXgLg");
	this.shape_2.setTransform(123.2,207.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(23,25,26,0.992)").s().p("AAsEWQgsgPgwgHQhogPhDhAQgFgFADgDQgVgIAMgUQgNgGAAgVQgBgmABgmQgCgXACgVQACgRAEgQIABgKQABgHAHgDQAFgCAFAAQAjANgGAqQgCANgBAOIABANQAMgNAXgEIAMgDIAAAAIgQgNIgFgFIgFgJIgCgEIgBgFQgBgZAagEQBnAABnAGQA7ADA5AIQAIABADAIQACAGAAAGIADACQAHgLAPgGQAmAPgQAnQgFANgBAOIgCAWQgFAegKAdQgBADgCABQgBAMgFANQgHARgLALIgMAYQgIAOgHADIgJARQgVAlgpAAQgTAAgXgIgABshpQgFAAgDgDQgTgVgXgQQgFAAgDgDQgCgCAAgFIgKABQggAGgHgRQAnAAgFgyIAFAAIAAgKIAAgKQAhgHAPgZQACgDAAgFQAlAHAPgPQADgCAFAAQADARAbgCIAAAFIAKAAQBjBShJB+QgBACgFAAQgFAAgFABQgWAJgRAAQgsAAgHg8g");
	this.shape_3.setTransform(113.4,237.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFAF90").s().p("AixgNIAeAAIAKAAQAoAAAogFIAAgFIBZAAIAKAAQAhASA5gHIAKgBQBCADg4AHIgKAAQgFAAgCADQgQANglgHQhIADhCALQgYAEgTAAQg7AAgTglg");
	this.shape_4.setTransform(113.9,209.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9D9791").s().p("AAbAaQgZgmgqgWIAUAAIAKAAQADARAagGIAKgBQAAAFACADQADACAFAAIABAKQAGAfgRAIQAAgFgCgEg");
	this.shape_5.setTransform(143.3,213.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(44,44,45,0.729)").s().p("AAOAmQgSgmgPgnQAgAXAGAuIABAKQgFAAgBgCg");
	this.shape_6.setTransform(123.2,153.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(52,91,122,0.859)").s().p("AgiB9IAAgKIAAgeQAkhdAShzQAAgBAFAAIAKAAIAAAKQgQBoghBVIAAAUIAAAKIgFAAQABAUgOAAIgCAAg");
	this.shape_7.setTransform(153.7,185.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(75,114,148,0.945)").s().p("AgKAeIAAgKIAAgnQAFAAACgCQADgDAAgFQAQADgGAaIgBAKQAAAFgCAEQgDAGgEAFIgKAAg");
	this.shape_8.setTransform(157.3,169.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(44,71,93,0.631)").s().p("AACAeQAGgbgQgDIAAgJIAAgeIAJAAQANAggIAuQAAABgFAAIABgKg");
	this.shape_9.setTransform(158.1,166.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#556573").s().p("AgcgYQAGAmArABIAKAAQAAAFgCABQgPAEgMAAQgmAAAIgxg");
	this.shape_10.setTransform(155.1,157.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(31,31,31,0.718)").s().p("AAABBIgFgBQgFhAAAhAIAKAAQAAAUADATQABABAFAAIABAJQAFAVgPgBQgBAjAFAZg");
	this.shape_11.setTransform(85.3,182.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CBD9E2").s().p("AgVgGQBXABhXAMg");
	this.shape_12.setTransform(91.4,160.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(24,26,27,0.992)").s().p("ADNF0QABgOAFgNQAQgoglgPQgPAGgIALIgDgCQABgGgCgGQgEgIgHgBQg6gIg6gDQhngGhoAAQgaAEACAZIAAAFIACAEIAFAJIAFAGIARANIAAAAIgMADQgXAEgMANIgBgNQAAgOACgOQAGgqgigNQgGAAgFACQgGADgBAHIgBAKQgFAQgBARQgGgRgDgWIAAgKIAAgKIAAgKQADh1AlhTQAAgFgCgDQg7hKgJh/IAFAAQgFgZAAgjQARABgGgWIgBgJIAAgKIAAgyQAKgKAIgMQACgDAAgFQAAgPgCgPQgEgVACAGQAZBCgfBPQAOCXA7BcIAbAAQAbAAADAQIAAAKIgKAAIgeAAQAZAyBggQQBDgMBHgCQAAAFgCADQgPAZghAHIAAAKIAAAKIgFAAQAFAygnAAQAIARAfgGIAKgBQAAAFADACQACADAFAAQAYAQATAVQACADAFAAQAKBUBRghQAEgBAFAAQAFAAACgCQBJh+hkhSIgKAAIAAgFQgbACgDgRIAKgBQA4gHhCgCIAAgFQgtgFgtAAIAAgKQBMAFA1gTQABAAAAgFIAAgKQAFAAABgCQAiiAhkAeQA3gsAjAOIgBgUQgCgjAhgjQAoACgHCAQgCAnAdgdQAyAuhQgQIgEAHQgLARgFAaQAVBEAYABIgPAAIgKAAIgUAAQArAWAZAnQACAEAAAFIgKAAIAAAKIgFAAQACAbgRADIAAAoIAAAKIgFAAQACAbgRADIAAAeIAAAKQgFAAAAABQgRAqgSAlIAAAKIAAAKQgFAAAAABQgCANgFAHIACgWg");
	this.shape_13.setTransform(115.6,205.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(23,24,24,0.894)").s().p("AgKAsQgEgTAAgUIAAgJIAAgeQAFAAACgDQADgCAAgFIAJAAIAKAAQAAAFgCADQgIAMgJAKIAAAxIAAAKQgFAAgBgBg");
	this.shape_14.setTransform(86.7,175.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8EB2CD").s().p("AgZAEQgFgOgEgXIAKAAQAkgHAQAPQACACAFAAQAAAFgCAEIgIASQgRAggMAAQgMAAgJgggAgYABQBXgNhXgBg");
	this.shape_15.setTransform(91.7,161.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#567792").s().p("AAXAKQgQgNgkAGIAAgJQAqgQAPAaQACAEAAAFQgFAAgCgDg");
	this.shape_16.setTransform(92.2,157.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#80868D").s().p("AgRgYQADAkAjAIQABAAAAAFIgKAAIgGAAQglAAAOgxg");
	this.shape_17.setTransform(102,142.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7E7D80").s().p("AAZAwQgVg4ghgpIAKAAQAmAeAKA7IABAKQgFAAAAgCg");
	this.shape_18.setTransform(108.2,131.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(55,56,57,0.773)").s().p("AAOArQgWgngLgwQAgAbAGA0IABAKQgFAAgBgCg");
	this.shape_19.setTransform(109.2,123.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(42,43,44,0.616)").s().p("AAJAcQgNgcgKgdQAbAMACAlIAAAKQgFAAgBgCg");
	this.shape_20.setTransform(113.7,132.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6B737D").s().p("AAHAmQgZgYAEg1IAKAAQAFAnAMAfQACAEAAAFQgFAAgDgCg");
	this.shape_21.setTransform(98.6,135.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D2D0D0").s().p("AgFBVQAAgFgBAAQgkgIgDglQAAgFgCgFQgNgegFgnQAFAAAAgBQAHgfgWgIIAAgKIAAgKIBGAJIAJABQAiApAUA4QABACAFAAQARADgGAbIgBAKIgBAKQgHAygcAAQgSAAgZgUg");
	this.shape_22.setTransform(104.8,136.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#545C67").s().p("AgtAzQgEgOAAgOQADg+AugNIAAAGQgEgBgCADQgNANgKAOQAeAvARg5QACgFAAgFQASAgALAmQABAFAAAFIgKAAIgKgBIhFgJIAAAKIAAAKQgFgBgBgBg");
	this.shape_23.setTransform(101.2,122.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8BEC9").s().p("AgYAEQAKgOANgMQABgDAFAAQAFAFAGADQAEACAFAAQAAAFgCAFQgJAfgOAAQgKAAgOgWg");
	this.shape_24.setTransform(100.7,120.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(44,45,46,0.729)").s().p("AANAhQgRgggPgjQAhAQAGArIAAAKQgFAAgCgCg");
	this.shape_25.setTransform(102.2,108.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(39,39,39,0.624)").s().p("AAGAXQgWgLACgkQATAOAJAZQABAFAAAFQgFAAgEgCg");
	this.shape_26.setTransform(105.6,114.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#707887").s().p("AgJAjIAAg7QAPACgBgWIAFAAIAAAKQAAAxgTAeIAAgKg");
	this.shape_27.setTransform(152.2,145.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C9CDD6").s().p("AgDgHIAGAAIABAMIgHADg");
	this.shape_28.setTransform(160.6,131.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(39,39,39,0.616)").s().p("AgYBBIAAgUQAcgyAQhEQAAgBAFAAIgBAKQgGBWgqA1IAAgKg");
	this.shape_29.setTransform(132.7,146.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(42,41,41,0.584)").s().p("AgKAZIAAgUQAQgHgCggIAFAAIABAKQAEAsgYAPIAAgKg");
	this.shape_30.setTransform(136.2,135.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(29,29,28,0.604)").s().p("AAEAiIgOhEQAcALgIAwIgBAKQgFAAAAgBg");
	this.shape_31.setTransform(140.3,109.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(41,41,42,0.678)").s().p("AgTBBIAAgUQAfgmgChHIAAgKQAFAAAAABQATBXg1A9IAAgKg");
	this.shape_32.setTransform(140.2,121.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(35,36,36,0.631)").s().p("AADAoQgFgrgJgkQAeAPgKA2IgBAKIgFAAg");
	this.shape_33.setTransform(80.3,135.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(51,51,52,0.694)").s().p("AAtBkQgJhCgQg1QgFAAgDgDQglgfgYguQAvAhAjAsQACADAFAAQAHA1ADA4IAAAKIgFAAg");
	this.shape_34.setTransform(74.2,119.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(59,61,59,0.808)").s().p("AAMAWQgWgQgJgeQAaAOALAaQACAEAAAFQgFAAgDgDg");
	this.shape_35.setTransform(65.2,105.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(36,37,37,0.706)").s().p("AAJAcQgNgcgKgdQAbAMABAlIABAKQgFAAgBgCg");
	this.shape_36.setTransform(54.7,89.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6C6055").s().p("AADATQgYgMgDgfQAVAIAMATQABACAFAAQAFAAACADQADACAAAFQgFAAgEACQgGADgFAFQAAgFgCgBg");
	this.shape_37.setTransform(55.7,63.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(42,43,43,0.808)").s().p("AAnBJQgnhNgshGQAZAEARANQACADAFAAQAAAFADACQACADAFAAQAAAFgDACQgCADgFAAQAQA1AWAvQACAEAAAFQgFAAgBgCg");
	this.shape_38.setTransform(47.7,77.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6F6860").s().p("AADAgQgDgCAAgFQAAgFgBgCQgUgQACgkQATAVAOAaQABACAFAAQAAAFgCACQgDADgFAAIAAAKQgFAAgCgDg");
	this.shape_39.setTransform(48.1,69.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6E5C4B").s().p("AAOASQgHgPgQgDQgFAAgBgBQgEgIAAgKIATAAIAKAAQAAATAHAMQADADAAAFQgFAAgBgCg");
	this.shape_40.setTransform(44.2,63.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D8BB9E").s().p("AgKAwQgPgbgTgVQAAgEgDgDQgHgNAAgTIAKAAIAKAAQAhADARgLQAEgCAFAAQADAgAZAMQACABAAAEQAAAFgCABQgiASgXAaQgFAAgBgCg");
	this.shape_41.setTransform(50.7,65.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0D0B09").s().p("AAZAhQgMgUgVgIIAAgFQgdAAAJgiIAKAAQAxAeAAAdIAAAKQgFAAgBgCg");
	this.shape_42.setTransform(54,60.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(56,56,56,0.741)").s().p("AARAwQgCgDgFAAIAAgKQAAgegxgdIAAgKIAAgUIAKAAIAKAAQAMA5AtAaQACABAAAFQAAAFgCACQgIAIgKAFQAAgFgDgCg");
	this.shape_43.setTransform(56.2,59.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#445260").s().p("AgsANQAFgFADgGQACgDAAgFIAAgKQArgsAiAkQACADAAAFQAAAFgCADQgpAxgWAAQgRAAgHgcg");
	this.shape_44.setTransform(57.7,71.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(22,21,21,0.871)").s().p("AAEAeQgEAAgEgDQgVgNAAghQAFAAACgCQADgDAAgFQBBA6gkABIgKAAg");
	this.shape_45.setTransform(14.8,61.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(49,48,48,0.682)").s().p("AAaAhQgngXgVgsQAiAVAcAZQACADAFAAIAAAKIAAAKQgFAAgEgCg");
	this.shape_46.setTransform(8.7,53.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#836A52").s().p("AgjAKQAzAMAHgfIABgKQAQgBgFAUIgBAKQAAAFgBAAQgTAFgOAAQgWAAgNgKg");
	this.shape_47.setTransform(36.8,64.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F0CAA3").s().p("AgTATQgFAAgDgCQgCgDAAgFQAAgFgCgEQgDgFgFgFIAAgKQAvgHAYAPQADACAFAAIgBAKQgFAXgcAAQgKAAgPgEg");
	this.shape_48.setTransform(35.2,63.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(12,10,10,0.973)").s().p("ACKAlQgRgNgZgEIgKAAQh7AIhWgcIAAgEQgbACAHgbQA+ATA6gRQAFgCAFAAQAAAFACACQADADAFAAQAVARAvgMQABAAAAgFQAbAHACgRIABgKQARADAHAPQABACAFAAQgDAkAUAQQADACAAAFQgFAAgDgDg");
	this.shape_49.setTransform(33.6,67.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7D6951").s().p("AAlAIQgYgPgvAHIAAAKQgFAAgBgCQgEgIAAgJIBFAAIAKAAQAFAFADAFQACAEAAAFQgFAAgDgCg");
	this.shape_50.setTransform(34.7,61.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#37332C").s().p("AgYAoIABgJQAGgWgRABQAAgFgCgEQgDgFgFgFIAAgKIAAgUQA1gLAhArQADADAAAEIgKAAIgKAAIgKAAIgTAAQAAAKAEAIQAAACAFAAIAAAKQgCAMgNAAQgGAAgIgCg");
	this.shape_51.setTransform(42.7,61.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#272623").s().p("AgpgGQgBAAAAgFQBaAXgGAAQgEAAhPgSg");
	this.shape_52.setTransform(33.4,50);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#252521").s().p("AABAOQARgngogIQBLgTgzBPQgGAKgBAAQgCAAAIgXg");
	this.shape_53.setTransform(14.4,46.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#26241F").s().p("AgaACQBrgThrAYg");
	this.shape_54.setTransform(20.9,45.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#060505").s().p("AAlAoQgEAAgDgDQgcgagigUQABgFgCgEQgEgLgFgKQA5AcAcAzg");
	this.shape_55.setTransform(8.4,50.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#252423").s().p("AgQgFQgCgBAAgFQAnAXgCAAQgCAAghgRg");
	this.shape_56.setTransform(11.1,45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E8C49F").s().p("AgYAdIAAgKIAAgxIAKAAIAKAAQAWAMAGAbIABAKQgFAAgCACQgHAKgQAAQgJAAgKgCg");
	this.shape_57.setTransform(8.7,38.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#856C55").s().p("AgKAiQgEgOAAgPIAAgJIAAgeIAKAAQAJAAAIAEQACABAAAFIgKAAIgJAAIAAAxIAAAKQgFAAgBgBg");
	this.shape_58.setTransform(6.7,38.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D3B191").s().p("AAcAgQgVgggpgOIAAgKIAAgKQA6AGAKA1IABAKQgFAAgCgDg");
	this.shape_59.setTransform(10.7,34.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5A3C27").s().p("AAJAeQgGgcgWgLQAAgFgCgBQgIgEgKAAIAAgKQAFAAADgCQACgDAAgFQApAOAWAgQABADAFAAQAAAFgBAAQgVAIgIARIgBgKg");
	this.shape_60.setTransform(10.2,36.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#563826").s().p("AAYAoQgKg1g6gGIAAgKQAaAHgBgbIAFAAQAWAgAdAZQADACAFAAQAAAFgCAEQgIAQgKAPIgBgKg");
	this.shape_61.setTransform(11.7,32.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CEAC8C").s().p("AAWAcQgcgagXgfQAhAAAOAWQACADAAAEQAFAKAEAKQABAFAAAFQgFAAgDgCg");
	this.shape_62.setTransform(13.2,30.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#442313").s().p("AAUAMQgOgUghAAIAAgKIAKAAIAKAAQAUgGAEAPQAAABAFAAQAJAJgEATQAAABgFAAQAAgFgCgEg");
	this.shape_63.setTransform(13,28.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(26,24,21,0.984)").s().p("Ah8CpIAKAAQAkgChCg6QAAgFgCgEQgDgGgFgFIAAgKIAAgKIAFAAQgbg0g6gbQAFAKAEAJQABAFAAAFQgFAAgCgDQg0g0AJhyQAKgZAOgXQABgCAFAAIAAAKQADAvgXAXQAYCUALh2IAFAAQAAAPAFANQAAACAFAAQAgAHALgPQACgCAFAAQAIgRAVgIQABAAAAgFQAKgPAIgQQACgEAAgFQATgLAGgcQAAgBAFAAIBJAvIgJgMQgRgWgHghQA6BMBPA5QACACAAAFIgKgBIgogJQBLBZB/ANQAWACgXgQIgLgJQA7ABgaAoQgDAEAAAFIgKAAIgKAAIAAAUIAAAKIgKAAQgJAiAdABIAAAFQgFAAgDACQgSALgigDQAAgFgCgDQgigsg2AMIAAAUIAAAKIgKAAIhGAAQAAAKAEAIQABACAFAAQAFAFADAGQACAEAAAFQgFAAgEABQg6ASg+gTQgGAaAagBIAAAFIgKABIgQABQgiAAAAgggAAQAOQCqAoirgtQAAAFABAAgAiagyQApAHgRAoQgQAnARgbQApg/gpAAQgKAAgPAEgAhegUIAAAFQA8gOgGAAQgGAAgwAJgAi2giQBKAnhMgtQAAAFACABg");
	this.shape_64.setTransform(27.6,47.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7D634C").s().p("AgKAZQgEgKgFgKQAFAAAAgBQAFgRgKgLQAFAAADgDQACgCAAgFQATAFAIAQQACAEAAAFQgFAAAAABQgGAbgSALQAAgFgBgFg");
	this.shape_65.setTransform(17.2,30.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#9D8370").s().p("AAFAOQgDgOgVAFIAAgJIAAgKQAagCALAOQACACAAAFQAAAFgCADQgDACgFAAQgFAAAAgBg");
	this.shape_66.setTransform(14.2,26.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(16,13,11,0.973)").s().p("Ah9AfQAWgXgDguIAAgKIAAgKIAAgKQAYgNALgZQABgCAEAAQAkgIAhAHIAKABQA+ADARAvQACAFgBAFQAIAhAQAVIAKAMIhJguQAAgFgCgEQgIgQgVgFQAAgFgCgDQgKgOgbACIAAAKIAAAKIgJAAIgKAAIAAAKIgGAAQACAagbgGIAAAKIAAAKIAAAJQAAAFgCACQgDADgFAAIAAAKIgKAAIAAAeIAAAKIgEAAQgFA1gIAAQgJAAgNhTg");
	this.shape_67.setTransform(13.8,32.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(44,45,45,0.647)").s().p("AAeAIQgigHgjAIIAAgJQAlgTAoAWQACABAAAFIgKgBg");
	this.shape_68.setTransform(11.2,20.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(16,15,15,0.914)").s().p("ABfAzQh+gNhKhZIAoAJIAKABQAZAUAWAWQADACAAAFQA1gEAcAWQADACAFAAIAKAJQAVAPgPAAIgFgBg");
	this.shape_69.setTransform(42.8,46);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E2BF9D").s().p("AgPAUQgRgCAFgmQBZApgzAAIgagBg");
	this.shape_70.setTransform(135,47.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(36,35,34,0.741)").s().p("AAEAjQAAgFgDgDQgOgUAIgpQANAeABAng");
	this.shape_71.setTransform(137.8,94.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(47,48,50,0.859)").s().p("AgKAPIAAgTQAFgFADgGQACgEAAgFQAEAAABACQAQArgfAEIAAgKg");
	this.shape_72.setTransform(138.2,77.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(28,29,30,0.494)").s().p("AgFA3IAAh3QAPgBgFAWIgBAJIAAAUIAAAKIAAAJQAHAqgQASIAAgKg");
	this.shape_73.setTransform(138.8,65.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#495968").s().p("AgWgGIgJgDQgGgCgFgFQBsgRgzAfQgFACAYAGQAfAIhNAJQgXgQANgNg");
	this.shape_74.setTransform(148.5,68.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5F5F5F").s().p("AgxAUIAAgUQAlAbgCg4IAFAAQgLA1A9gXQAEgBAFAAQAAAFgBAAQg1AKgtAPIAAgKg");
	this.shape_75.setTransform(144.2,61.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D7BB9D").s().p("AgrALIAAgKIAAgxQA9ANAaAvQACAEAAAFIAAAKIAAAKIgKAAIgUAAQgFAAgFABQgRAHgMAAQgcAAAIgmg");
	this.shape_76.setTransform(147.6,57.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(57,58,58,0.937)").s().p("AgTAFIAAgJQAPAAAMgFQACAAAAgFQAFAFADAGQACADAAAFQAAAFgBABQgTAEgTAAIAAgKg");
	this.shape_77.setTransform(154.2,60.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(46,46,47,0.796)").s().p("AAMAXQgWgRgJgeQAaAOALAaQACAEAAAFQgFAAgDgCg");
	this.shape_78.setTransform(93.2,95.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#010000").s().p("AARBLQgXgpgPhiIAAgKQAfBDANBSg");
	this.shape_79.setTransform(119.4,25.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(43,43,43,0.675)").s().p("AgFA3QgFgoAAgnQAQgDgCgbIAFAAIABAKQAGAbgQADIAAA7IAAAKIgFAAg");
	this.shape_80.setTransform(116.3,16.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D7B290").s().p("AgDAfQgagDAGgjQBIg7gkBdQgCAEgJAAIgFAAg");
	this.shape_81.setTransform(123.6,13.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CDAC8F").s().p("AgIAWQgNgUAAghQBLA9g3ADg");
	this.shape_82.setTransform(129.4,10.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DCB995").s().p("AADAZQgEghgOgaQASAAAIALQADAEAAAFIABAKQAGAfgRAIIgBgKg");
	this.shape_83.setTransform(132.8,9.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#987B67").s().p("AgaAsQARgIgGggIgBgJQAdA8gNhYIgBgMIAEAAIAIAMIAFAFQACADAFAAIABAKQALA9gpAAQgJAAgLgCg");
	this.shape_84.setTransform(135.8,8.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#100907").s().p("AgCASIgFgGIgHgMIAAgJIAAgKQAhARgEAOIgDAGQgCACgFAAQgFAAgCgCg");
	this.shape_85.setTransform(137.7,3.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(28,25,22,0.969)").s().p("AAiExIABgKQAGgVgRABQgFAAgDgDQhthFhchYIABgKQALhtgWhaIAAgKIAAg8QARgDgGgbIgBgKIAAgKQAMgcATgUQAggjAxgPIBcAAQAeASASAgQAKARAGAVQABAFAAAFIgFAAQAIA0ghAIQABBLAdAZIgHgRQgWgzAdgMQAdBHALBYIAAAKQBgBJggBQQgKAZAQA+QAAAFgBAAQgOAFgPAAQAAgFgCgEQgagwg+gNIAAAyIAAAKIgFAAQABAmgQAAQgIAAgMgIgAgXC6QBgAKhsgzQgEAnAQACgAi4h8QAPBjAYAoIAFAAQgMhSghhDIABAKgAiRi4QgFAjAZADQAPACACgFQAXg6gTAAQgMAAgdAXgAhIi+IAHALQA5gDhNg+QABAiAMAUgAgZjCIAAAKQA/APgNhLIgBgKQAFAAACgDIADgFQAEgPgigRIAAAKIAAAKIgEAAIABAMQANBZgdg9QAAgFgCgEQgIgLgUAAQAPAZAFAjg");
	this.shape_86.setTransform(135.7,31.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(3,2,2,0.89)").s().p("AgOgTQAggHgIg1IAFAAIAABGIAAAJQgcAMAVAzIAHARQgdgZAAhKg");
	this.shape_87.setTransform(142.7,17.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(49,64,78,0.996)").s().p("AFRLPIAPAAQgYgBgVhFQAFgaALgRIAEgHQBQAQgyguQgdAdACgnQAHiAgogCQghAjACAjIABAUQgjgOg3AsQBkgegiCAQgBACgFAAIAAgKQAFAAABgCQAWhMhEAIIAAAKIgKAAQgSBOA6ACIAKAAQAAAFgBAAQg1AUhMgFIAAAKIgKAAIgKAAIhZAAIgKAAIhGAAQgDgRgbAAIgbAAQg7hcgOiXQAfhPgZhCQgCgGAEAVQACAPAAAPIgKAAIgKAAIgBgKQgIgsABgmQAChGAkgwQAAgFgCgEQgXgzgtgeIAPAAIgZjvQAAgFgCgCQjNihhdkQQARgDAHgPQABgCAFAAQAAAFgCAEQgDAGgFAFQARBCBHhYQACgDAAgFQEBC8CXElQACAEAAAFQgFAAgEgCQgGgDgFgFIAAgFQgvANgDA+QAAAPAFANQAAACAFAAQAWAIgHAfQAAABgFAAIgKAAQgEA2AaAWQADADAFAAQgOA2AsgEIAKAAQBDA0AMhSIAAgKQBCBcAtB0IAEAKQAAACAFAAQByApBgAIIAKABQgtgmg7gYIgQgHQgFgBgFAAQAqjlBgirQACgEAAgFQhMjTALjcQAFhaA0gZQAIgEAKAAQBogDAQCXQAGA0ATBCQA0C1glDBQglgDAEAUIAAADIgHAAIAAAPIAJgDQADA+hSAPIAAAKIgFAAQACAVgRgBIAAA8IAAAKQgCAbAKAOQACAEAAAFQgJBABEgTQABAAAAgFIAAgKIAKAAIABAKQAEARgEALQgDAIgIAEIgKAAIAAAeIAAAKQAAAFgCACQgDADgFAAIAAAoIAAAKQgFAAAAABQgSBzglBeIAAAeIAAAKIgBAKQgPBAgYA4IgKABIgMABQgPAAgDgMgAgWKdQASARApgGQBKgLhpAAIgcAAgAjBDtQASA/Ahg/IAIgTQACgEAAgFQAAgFgCgEQgPgbgrAQIAAAKIgKAAQAEAWAFAQgAFlrGQAFAFAGACIAJADQgMAOAWAQQBPgKgggIQgYgFAGgEQAggUghAAQgSAAgoAHg");
	this.shape_88.setTransform(108.4,137.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(53,74,90,0.894)").s().p("AgTAeIAAgeQAFAAACgBQADgDAAgFQAPABgFgWIgBgJQARADgCAbIAFAAQAAAFgDADQgRAVgTAUIAAgKg");
	this.shape_89.setTransform(164.2,139.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(208,206,208,0.976)").s().p("AAABnQgqgBgHgnQAAgFgCgDQgKgOACgcQAVgcgBgzIAAgKQBCgfAgAGQABAAAAAFQAAAFgCADQgDACgFAAIAAAeIAAAKIAAAKQgJA8gVAxIAAAKIAAAKIgKAAIAAAKIgKAAg");
	this.shape_90.setTransform(157.1,148.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#777D85").s().p("Ag3AyQBQgPgDg9IgBgNIgBgDQgEgTAmACIAAA7IAAAKIABAKQAFAWgQgCQAAgFgBAAQgggGhCAfIAAgKg");
	this.shape_91.setTransform(158.8,134.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(26,26,26,0.486)").s().p("AgEAyIAAhZIAAgKIAAgKQAQAwgMBGQAAABgEAAIAAgKg");
	this.shape_92.setTransform(169.7,116.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(43,42,42,0.741)").s().p("AAKA8QgHhDgRg0IAKAAQASAkABA1IAAAKIAAAKIAAAKIgFAAg");
	this.shape_93.setTransform(167.7,106.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(39,39,41,0.678)").s().p("AAEAgQgSgWAGgsQAOAZAEAiIABAKQgFAAgCgDg");
	this.shape_94.setTransform(166.1,95.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(38,38,40,0.769)").s().p("AAJAwQgXgmAAg7QAQArAMAuIABAKQgFAAgBgCg");
	this.shape_95.setTransform(163.7,84.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(12,15,17,0.969)").s().p("AFtIXQhggJhygpQgFAAgBgCIgEgKQgsh0hChcIABgKQAGgbgRgDIgBgKQgKg8gmgeQAAgFgCgFQgKgmgSggQAAgFgCgEQiXkkkBi8QAAgFgDgDQghgkgsAsIAAAKQgFAAgBACQgHAPgRADQBdEQDMCgQADACAAAFIAZDwIgPAAQgFAAgDgCQgCgDAAgFIABgKQAJg3gegPIAAgKIAAgKIgBgKQgDg4gGg2QgFAAgCgDQglgrgughQgFAAgDgDQgHgHgFgKQAAgFgCgEQgMgbgagOQgFAAgDgDQgmgpgYg4IgBgKQgCgmgbgMQgFAAgBgCQgEgIAAgKQAAgFgCgEQgWgvgQg2QAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFQAYgaAigSQACgBAAgFQAFgFAGgDQAEgCAFAAQAKgFAHgIQADgCAAgFQChCKCSCbQADACAAAFQAJAfAXARQADACAFAAQAlASAMArIABAJQAOAkATAgQACACAFAAQgDAkAYALQAEACAFAAIAAAKIAAAKQALAxAVAnQACACAFAAQAFAFADAGQACAEAAAFQAKAeAOAcQABACAFAAQAoA2ATBNIABAJQAPAoATAmQABACAFAAQAlAkAMhCIABgKQAqg1AHhXIABgKQAYgPgEgtIAAgKIAAgKQAFgFADgGQACgEAAgFQA2g9gThXQAAgBgFAAIAAgKIABgKQAIgxgdgLQAAgFgCgFQgKgcACgqIAFAAQgBgogOgeIAAgKIAAhkQAggEgRgsQAAgCgFAAIAAgKIAAgUQARgSgHgqIAAgKQAtgPA2gKQABAAAAgFIAUAAIAKAAQAUAAATgEQABgBAAgFQAuBKANBqIABAKQAAA8AXAmQACACAFAAIAAAKIAAAKQgGAtATAWQACADAFAAIAAAKIAAAKIgKAAQASA0AHBEIAFAAIAABZIAAAKIAAAKQACBcggA6IgFAAQACgbgRgDIAAgKIAAg8QAljAg1i1QgThCgGg0QgQiXhnADQgKAAgIAEQg1AagEBZQgMDdBNDRQAAAFgCAEQhhCtgpDkQAFAAAEABIARAHQA6AYAuAmIgKAAg");
	this.shape_96.setTransform(108.7,114.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,170.2,266.1), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB7B6E").s().p("AgOAAIgBgDQAjAHgFAAIgdgEg");
	this.shape.setTransform(5.9,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C48077").s().p("AgOAAQA6gDg6AFg");
	this.shape_1.setTransform(21.1,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C77B72").s().p("AgVABIAAgCQA9ADgaAAIgjgBg");
	this.shape_2.setTransform(13.3,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D37A6F").s().p("AgYgBQBjADhjAAg");
	this.shape_3.setTransform(16.1,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B46D5D").s().p("AhIAdQAAgBAAgBQgBAAAAgBQAAAAAAAAQAAgBgBAAQghgTgVgdQgCgHAJgGIAIgEQBpAqCGgZQADADAAAFQABAIgCAGQgeAYglASIgGAAIgGAAQhCAAg3gMgAAGAUQBkAAhkgDgAgRABQBWAChWgEgABDgBIAAACQAogDgPAAIgZABgAhUgKQA9AKg+gNIABADg");
	this.shape_4.setTransform(12.9,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,25.9,8.3), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5F51").s().p("AgBAQQgTgDgSgJQgWgLAUgMQAXAFAQALQAeABAUAQQADACgEABQgNADgLAAQgOAAgLgEg");
	this.shape.setTransform(11.9,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF7362").s().p("Ag/AcQgogOgjgZQgJgGACgFIgFgDQgFgCACgFQABgEACgCQACgCAEAAIA/ATQAVAHAWgEIABAAQA8AAA9gCQAOAAANgFQANgFAMABIACAAIABAAIAGgDIAHAGQABAAABABQAAAAAAABQABAAAAABQAAABgBABQACAIgNAKQgzAmhBAFIgRABQglAAgkgNgAhKANQASAJATADQAYAIAZgHQAEgBgDgCQgTgRgfgBQgQgKgXgFQgUALAWAMg");
	this.shape_1.setTransform(15.5,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,31,8.2), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.076,0.076);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,60.6,85.7), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC707C").s().p("AgngEIBFAAIAKAAQAAAEgBAAQgVAFgRAAQgXAAgRgJg");
	this.shape.setTransform(13,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E66787").s().p("AhAACQBNgeArAcQAEACAFAAQAAAFgCABQgIAEgKAAIAAgFQgZAHgXAAQgfAAgegMg");
	this.shape_1.setTransform(16.5,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B83C5A").s().p("AAFA7IgJAAIhGAAIgKgBQgvgNghgaQDGgBB6hMQAEgCAFAAQAAAFgCADQgnA3g7AkQgFAAgEgDQgrgchNAfQA1AWA4gRIAAAFQgFAAgBACQgFAKgOAAQgGAAgJgCg");
	this.shape_2.setTransform(16.5,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,33,13.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F88F71").s().p("Ag8ACQgCgBAAgEQBNgdAwAmIgGAAQgaAKgbAAQgfAAghgOg");
	this.shape.setTransform(16.3,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D75933").s().p("AjRAEIAAgJIFxg7IAKgBIAeAAIAKAAQgYA4g1AcQhTAvhPAAQhcAAhYg+gAhtAOQAAAFACABQA8AaA5gWIAFAAQgagWglAAQgcAAghAMg");
	this.shape_1.setTransform(21,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,42,13.1), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.282,0.282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,62.4,97.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8AE89").s().p("AgNgHQAQgWALAqQAAABAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQgEAAgWgXg");
	this.shape.setTransform(62.1,97.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDB78C").s().p("AhfASQAcgsAfgqQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQgCAuAYAVIAEABQA5AAAqgoQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIgBAFQgvBHhRAmIgFAAIgLABQgyAAAEg1g");
	this.shape_1.setTransform(106.6,136.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#534431").s().p("AgJAFQgEgEAAgHQAzgNgqAeg");
	this.shape_2.setTransform(118.7,120);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383123").s().p("AgNADIAAgPQA3ARg3AIg");
	this.shape_3.setTransform(116.6,115.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323127").s().p("AgjAyQgMgFADgXQAOg6A1gSIAFgBQAWALgGApIgBAEQgQA3gjAAQgMAAgPgGg");
	this.shape_4.setTransform(111.4,126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C89F83").s().p("AgDAKIgGgJQAHgJANgDIAAADIgBAFQgBAIgJABIAAAGQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_5.setTransform(103.3,124.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C49F79").s().p("AgdAfIAchmQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQgCALAHgBIAGAAQAGAcALAXQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIgBAFIgEAFIAAgCQgNACgIAKIAHAJQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAQgOAbgUAVQgFAFgDAAQgKAAAGgqg");
	this.shape_6.setTransform(101.6,123.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2B796").s().p("AgLAKIAAgFIAAgFQAKgFACgOIADgBQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQASAYgXABIAAAFIAAAGIgGAAIAAAAQgIAAADgLg");
	this.shape_7.setTransform(102.9,115.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#44372B").s().p("AgHAJQgDgHAAgHQAhgfgUAwQgCAGgCAAQgDAAgDgJg");
	this.shape_8.setTransform(112.1,116.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8D1B1").s().p("Ag+B/IgEgBQgYgVACgtIAAgFQAnhaAzhNQAJgOAYAAQAjAHAQAZQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAMBrg5BAQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgpAog5AAIgBAAgAAPgaQg1ASgOA6QgDAXAMAFQA5AZAVhKIABgFQAGgogWgLIgFABgAAzgmQAAAIAEAEIAFAGQAegWgRAAQgHAAgPAEgAgKhKQAAAIACAHQAGARAFgOQAMgegIAAQgFAAgMAMgAAehKIAAAKQA4gHg4gSIAAAPg");
	this.shape_9.setTransform(112.2,123.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C1976B").s().p("AgsgDQAJgCgBgOIACAAQAzgEAcAnIgCAAIAAgCQgUAHgRAAQgeAAgUgYg");
	this.shape_10.setTransform(136.9,118.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EED4B2").s().p("AA/BpIABgFQAMgqgDg4QAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgRg0hEACQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQhIAlgUBYIAAAGQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgMgXgGgbIAAgGIAAgFQAYgBgRgYQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgFQA9hiCHAFIAGAAQAeAPAKAlIABAFQADACABADQARBIgyA7QgQAUgIAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_11.setTransform(115.6,114);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#70675C").s().p("AAAAVQgCgVAAgUIAFAAIAAAkIAAAFg");
	this.shape_12.setTransform(134.1,106.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#81766B").s().p("AAAAfQgCgfAAgeQAIAWgEAiIAAAFg");
	this.shape_13.setTransform(134.2,98.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BE956E").s().p("AgyAPQASAIAdgDIAEAAQAigPAMgkIABgFQAOAvgpASQgUAIgPAAQgZAAgLgWg");
	this.shape_14.setTransform(140.5,124.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E4C098").s().p("AgmBIIAAgGIAAgFQAVgZAegPIAFgBIADAAQgcgog0AEIAAgFIAAgPQANhFA2AuQATAQAPAUQANARAFAaIgBAFQgMAlgiAPIgFAAIgMABQgVAAgNgGg");
	this.shape_15.setTransform(139.3,118.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#392E1F").s().p("AgLAJIgBgIIAAgKQAqATgdAAIgMgBg");
	this.shape_16.setTransform(9.1,107.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3A3024").s().p("AgHAJQgFgKAAgNQAtAFgiAYIgBAAQgDAAgCgGg");
	this.shape_17.setTransform(4.4,107.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E8CEAB").s().p("AA5CEIgEgBQgjglgNgjIADAAQAQhGhGgmIgFABQghAEASAlQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABIACAEQgxgYgDhKQA/g/A+BCQAvAyAiA8IABAFQAGAOAOA1IgBAFQgMAqgkAAIgIAAgAhdhHQADAHADgCQAkgYgvgFQAAANAFALgAgzhVIABAIQAxAEgygWIAAAKg");
	this.shape_18.setTransform(13,116);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ACA29E").s().p("AAAAcQgBgcgBgcIAFAAIAAAzIAAAGIgDgBg");
	this.shape_19.setTransform(20.5,107.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A4845E").s().p("AgEAPQgDgKAAgJIAAgFIAAgFQAagGgTAfQgBABAAAAQAAABAAABQAAAAgBABQAAAAAAABIgCgBg");
	this.shape_20.setTransform(72.4,139.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A38661").s().p("AgMAPIAAgUQAYgjgCA3IADAAIgBACQgMADgMAAIAAgFg");
	this.shape_21.setTransform(76.6,140.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#937457").s().p("Ag2gNIAGAAQAPAZAzgIQATgDARAAQgJAJgVADIgVABQgsAAgNgbg");
	this.shape_22.setTransform(67.2,125.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A18264").s().p("ACKAeQgNgDgIgHQAQgFACgUIADAAQAAAJACAKIACABIAAAKIAAAFIgEAAgAh5AEQgPAAgGgJQAlgzgKA4IgBAEIgFAAg");
	this.shape_23.setTransform(57.9,139.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#99795C").s().p("AgMAKIAAgFIAAgOQALgLAAAQIgBAEQACAJAIABIAFAAIgBADIgLACQgHAAgGgFg");
	this.shape_24.setTransform(50.1,139);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AF8E68").s().p("AAEAIQAAgPgKAKIAAgEIAAgFQARgVgFAoIgDABIABgGg");
	this.shape_25.setTransform(49.5,137.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D6B389").s().p("AgjCPIglAAIgBgDQgkgHgOgbQAqAFANguIABgFQgOg2gFgNIgBgFQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAJgcgLgmQAWggAhgWIABgDQAhgJAdAGIAAgDQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQA3BsAjB8IAAADQhZAPhCAiIgEAAg");
	this.shape_26.setTransform(31.2,118.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BFB5AB").s().p("AALAIQgFgNgYAEIAAgGQAvgRgOAkQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_27.setTransform(41.3,131);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#745E46").s().p("AgCASIAAgoQAIARgGAcIgCAAIAAgFg");
	this.shape_28.setTransform(61,118.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B9A083").s().p("AAIANQgTgDgBgWQALALAMAKQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgFAAg");
	this.shape_29.setTransform(45.4,104.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9C8269").s().p("AghgCIA+AAIAFAAIgBACQgQADgPAAQgTAAgQgFg");
	this.shape_30.setTransform(68.2,114.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#806248").s().p("AgegCIA4AAIAFAAIgBACQgPADgNAAQgSAAgOgFg");
	this.shape_31.setTransform(68.5,116);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B58D66").s().p("Ag6AiIAAgFIAAhSIAaAAIAGAAQAYAJAkgGIABgDQAiAPgQA9QgDAOgFANQgSAAgSACQgLACgKAAQgiAAgMgUg");
	this.shape_32.setTransform(68.1,121.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C7AF93").s().p("AgegCIA4AAIAFAAIAAACQgQADgNAAQgSAAgOgFg");
	this.shape_33.setTransform(64.4,79.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#785538").s().p("AgggCIA8AAIAFAAIAAACQgRADgOAAQgTAAgPgFg");
	this.shape_34.setTransform(64.6,77.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CBB18B").s().p("Ah7AGIAAgDQCNAUBmgrIAEgBQg+ArhRAAQgxAAg3gQg");
	this.shape_35.setTransform(68.5,84.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#302109").s().p("AgjAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAJAGARgBIAEAAQASAAASACIAAADIgFAAIgVABQgZAAgUgGg");
	this.shape_36.setTransform(51.9,49.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4A0D06").s().p("AhHgDIAQAAIAFAAQAygHAvAHIAGAAQAhABgXAIIgFABIgFAAIhsAAIgGAAIgDABQgKAAADgLg");
	this.shape_37.setTransform(64.3,69.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F8885F").s().p("AgNgBIAAgDQAdAJgCAAIgbgGg");
	this.shape_38.setTransform(62.7,71.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D0613D").s().p("AgEAPQgigHgSgXIBsAAIAFAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgSAWgmAEIgEgBgAgegHQA4AQg4gSIAAACg");
	this.shape_39.setTransform(64.4,71.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AF431C").s().p("AAvAKQgvgGgzAHIAAgGQAMgIASgEIABgCQAwgFAWAVQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgFgBg");
	this.shape_40.setTransform(64.4,67.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#976134").s().p("AgNAOIAAgFIAAgFQAZgLACgHIAAAJQgBAUgTAAIgHgBg");
	this.shape_41.setTransform(68.4,60.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9B6139").s().p("AgjgOQAIgLATAUQAIAGAKACQAPABAMgEIAAAFIAAAGIgGABQgOAHgMAAQgZAAgPghg");
	this.shape_42.setTransform(63.3,61.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9B6537").s().p("AgCAHQgDgJAAgKQAUABgPAYg");
	this.shape_43.setTransform(67.5,53.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFD5B1").s().p("Ag7BEIAAhEQATg4A6gPIAFgBQAYAiAMAsIABAEIAAADQgdgGghAJIgBADQghAWgXAgIAAgFg");
	this.shape_44.setTransform(28.3,103.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C9AF90").s().p("AANAhQgTgEgLg5QAIgIAIAHIAEABQABAfANAVIABAEIAAAFIgFAAg");
	this.shape_45.setTransform(37.6,93.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C4AA8E").s().p("AgUgdIAAgFQAUAfAUAfIABAEIAAADQgigLgHg1g");
	this.shape_46.setTransform(41.5,99.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BCB3AD").s().p("AAAAnQgBgngBgmIAFAAIAABIIAAAFg");
	this.shape_47.setTransform(28.8,80.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#907A65").s().p("AAAAcQgCgcAAgbIAFAAIAAAzIAAAEIgDAAg");
	this.shape_48.setTransform(30.4,80.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DAB59B").s().p("AgEAKIAAgDQgNgFADgRQAKAIALAGIAEABIABAEQAHAMgHAAQgFAAgLgGg");
	this.shape_49.setTransform(39.4,57.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C88A6A").s().p("AALArQgLgGgJgJIgBgEIgFgGIAAgFIAAguQAGgFAGgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAGArAJAnIABAFIgFgBg");
	this.shape_50.setTransform(38.9,53.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A39074").s().p("AAAAaQgBgagBgZIAFAAIAAAuIAAAFg");
	this.shape_51.setTransform(35.6,49.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D2BB9C").s().p("AA4CgQh7hJAJjNQAJgPgBgbIACAAQgEBoAhBRQAfBTAtAtQADADAAAFIgEgBg");
	this.shape_52.setTransform(31.9,59.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D4CBC4").s().p("AAAAfQgCgfAAgeIAFAAIAAA4IAAAFIgDAAg");
	this.shape_53.setTransform(24.1,52.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3B3E36").s().p("AhiCXQg0ghgPhgIAAgGQAog2BJgbQApgPAfgcQA4gyBaAJQhlAogqBhQgfBKgnBEQgMAVgiAAIgFAAg");
	this.shape_54.setTransform(33.8,17);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E2E7E0").s().p("AgOANIAAgFQANgDgDgRIAAgFQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAmAdg0AFIAAgFg");
	this.shape_55.setTransform(79.9,48);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#536A52").s().p("AguAUIAEgBIABgEQAoADgXgYQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgFQA1gZgZAsQgCACAKgGQARgMALgKQAIgGAAAIIAAAFQACARgNADIAAAFIAAAFIgFAAIgfAAIAAAFIAAADQgMADgKAAQgOAAgKgGg");
	this.shape_56.setTransform(74.7,48.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDF2EF").s().p("AgJANQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgCgFAAgFIAPgNQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAUAVgdAAIgHAAg");
	this.shape_57.setTransform(71.6,48.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#AF8C6A").s().p("AgZgCQAZAAAaACIAAACIgFAAIgRABQgRAAgMgFg");
	this.shape_58.setTransform(77.3,42.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#532F19").s().p("AA0APIgKAAIAAgCQgagDgaABIgFAAQgoADgGgcQBXAHAkAWg");
	this.shape_59.setTransform(75.8,41.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F1F5ED").s().p("AgNAHQAIgFACgKIAAgFQAQAHABASIgCAAIgFABIgHABQgKAAgDgHg");
	this.shape_60.setTransform(58,48.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4B694C").s().p("AAGAWIAAgDQgRgCgSAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAgBgBQgOgJAFgcQAzgLgeAgQgEADAIAEQARAJAWgaIADAFIgBAFQgCAJgIAFQAEAJARgDIAFAAIAAAFIAAADQgKACgIAAQgLAAgHgFg");
	this.shape_61.setTransform(54.9,48.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E9EEE6").s().p("AgLAPQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQgHgDADgNQAMgHAJgIIAEgBQgFAcAOAJQABAAAAABQAAAAAAAAQABABAAAAQAAABAAABIgGAAIgFAAQgMAAgHgGg");
	this.shape_62.setTransform(50,47.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1C170E").s().p("ABCAaIADAAQgBgTgRgHIgDgEQgWAbgSgKQgIgEAEgEQAfgegzALIgEABQgKAIgMAFQgDAOAHAEQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgQgPgLgTIAqgPQAbgJAnADQA0AXgSAlQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgFg");
	this.shape_63.setTransform(52.5,47.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#937966").s().p("AAAAcQgBgcAAgcIADAAIAAAzIAAAFIgCAAg");
	this.shape_64.setTransform(41.3,51.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#462913").s().p("AgjgBIAFAAQAUAAAUgDIABgDIAEAAQAogLANALIgBADQhIARg9AAQANgKASgEg");
	this.shape_65.setTransform(53.5,41.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#9C7954").s().p("AgUgCIAjAAIAGAAIgBACQgUADgUAAIAAgFg");
	this.shape_66.setTransform(52.4,41.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#220F08").s().p("AgGDaQgag5gngpIAFAAQAcAQgLgVIgBgFIgBgFQgJgogGgrIgBgEQgRgKACgbQAXAkAKgUQAUgrgbABQARgOAYghIABgFQASgNAZgrQAZgpAdggQgUBDgsAsQgsAsgPBIIAAAKIAAAGIgFAAQAAAcACAcIADABQAJBXAkA7IABAEQgDADgCAAQgDAAgEgJg");
	this.shape_67.setTransform(45.6,46.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4F4F50").s().p("AAVADIguAAIAAgFQAZABAaABIAAADIgFAAg");
	this.shape_68.setTransform(47.2,0.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#13130F").s().p("AhfCtIgFgBQhQg0gJh7QA+hBBagqQAggPAfgTQAggUArgKIAvAAIAFAAQAYAHAHAZIAAAFIABADQANALgTABIAAAFIgFABQhXAbgwBCIgBAFQgUB+hSBBIgFABQgCABgFAAQgHAAgMgCgAAMh1QgfAcgpAPQhJAagoA3IABAFQAOBgA0AiQAmABAOgXQAmhDAghLQAphhBlgnIgbgCQhIAAgvArg");
	this.shape_69.setTransform(34.5,18);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A88A6E").s().p("AAPADIgjAAIAAgFIAjAAIAGAAIAAAFIgGAAg");
	this.shape_70.setTransform(59.2,5.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B99B80").s().p("AAsADIhcAAIAAgFQAwAAAxACIAAADIgFAAg");
	this.shape_71.setTransform(66.2,5.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7B6E67").s().p("AA+ADIiAAAIAAgFQBCAABDACIAAADIgFAAg");
	this.shape_72.setTransform(63.8,3.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C9A680").s().p("AgYBUQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAABAAQAGAIAVgaQAyg7gShIQgBgDgCgCQAIgIgDgSIAAgGQAcALAEg5QABgYAIgNIADABQAQEpi4BLQAogoAUg/g");
	this.shape_73.setTransform(124.2,116.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CAA67F").s().p("AhkCIQAlhDgBhOIAAgFQBTg1AyhXIABgFQAbAPACAqIACAAQhxA7gWCUQgEAagMAOQgOAPgMAAQgOAAgKgYg");
	this.shape_74.setTransform(101.4,113.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4F3721").s().p("AA3B6Ig4AAIgGAAQjLgmgpjIIAAgFIAGAEIAFABIAEAGIABAEQgDATANAFIAAACIgFAAQAoApAZA4QAHAPAGgIQAuBEBjAOIAGABQAaAJAngHIABgCQB1gNAuhVQAAAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQADALAEgKQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQgBAQAMgIIAAACQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQhABRh+ASIgFAAg");
	this.shape_75.setTransform(61.5,66.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#DBC0A5").s().p("AgJACIAEgEIABgFQANgGABAGIAAAFIAAAEQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQgHAHgDAAQgFAAgBgJg");
	this.shape_76.setTransform(89.8,58.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7A715A").s().p("AgCASIAAgoQAIARgGAcIgCAAIAAgFg");
	this.shape_77.setTransform(88.5,51.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#704A38").s().p("AgEANIAAgeQAEAAAEACQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAIgCAAQABAVgIAJIAAgFg");
	this.shape_78.setTransform(90.3,52.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C18A6F").s().p("AACAfQgBgGgNAGIAAgFIAAgLQAJgBgDgOIgBgEQAIgKgBgVIADAAIAGAJIAEABIAAAFQAAAhgKAXIgBgFg");
	this.shape_79.setTransform(90.6,54.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A1927A").s().p("AgCAVIAAguQAIATgGAfIgCABIAAgFg");
	this.shape_80.setTransform(93.7,49.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#543F2B").s().p("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");
	this.shape_81.setTransform(73.7,89.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#191409").s().p("AgIAeIgGAAIAAgFIAfAAIAFAAQA1gGgmgcQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAQABgIgIAHQgLAJgQALQgKAIABgCQAZgsg2AZIAAAFQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIgRAOQAAAFACAFQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIgBAEIgEABIgFgBQgJgDgCgMIAZgaQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAQgHAUgGIAAgCQBRgEAJAnIgCAAQgPAcgrAAQgMAAgMgCg");
	this.shape_82.setTransform(76.2,47.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F8C997").s().p("AAaEOIg9AAIgGAAQhjgPguhEIgBgEQglg7gJhXIAAgGIAAgyIAAgGIAAgKQAQhJAtgsQAsgsAUhDQAZgJALADIAGABQBRAdBXAcQAcAJAaARQAYBiA1BFIAAAEIAAAoIAAAFIAAAGQgKBJgaA4IAAAGQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgtBVh2AMIgFAAgAgJDkIAFABQAlgEASgXQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAFgBQAXgJghgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgWgWgwAFIgBADQgSAEgMAJIAAAFIgFAAIgQAAQgDAOAOgDIAFAAQASAXAiAHgAgzBeQAWAxAtgWIAFgBQAbAEACgZIAAgIQgDAGgaAMQgMAEgNgBQgLgCgJgHQgMgNgIAAQgEAAgDAEgAAYApIACAGQAQgZgVgBQAAAKADAKgAg4ADIAAgDQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQASgmg0gXQgogDgbAJIgqAPQAKAUARAPQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAbAIAogDIAGgBQAMAJAYgGgABig9IAAADQgUAGgQAHQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgZAbQACALAJADIAFAAQARAJAdgGIAAgDIAGABQBAAJATgjIACAAQgIgkhEAAIgPAAgABihMQARAJAegEIAGAAIAKAAIAKAAQgkgYhYgHQAGAdAogDIAFAAgAiQhXIgFABQgSAFgNAKQA9gBBJgRIABgDQgNgLgoAKIgEABIgGAAIgkAAIAAAFg");
	this.shape_83.setTransform(64.9,50.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#210E09").s().p("ABfDcIAAgFQAag5AKhJIAAgFIADgBQAGgdgJgRIgBgEQg1hEgXhiQgagQgcgJQhXgdhSgdIAAgFQBagBBBAPQAZgHAXASIADABQAyCOBTB5IgCAAIgFgBIgGgJQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQgEgCgGAAIAAAfIAAAFIABAFQADAOgIACIAAAKIAAAFIgBAFIgFAGQADASAOgRQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgXAggbA0QgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQgCAFgCAAQgCAAgBgGg");
	this.shape_84.setTransform(75.1,45.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3A211C").s().p("AAAAIQgJgKgFgQQAPgGANAnQABAFgBAAQgDAAgLgMg");
	this.shape_85.setTransform(88.1,37.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4D3529").s().p("ADSDgQAbg1AXgfQABgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgFQAKgXABgiIAAgFIACAAQhTh6gyiOIgDgBQgXgRgaAHQhBgQhZABIAAAGIgFgBQgMgDgZAJQgdAggZApQgZArgTANIgBAFQgYAhgQAOQAagBgUAqQgKAVgXgkQgBAbAQAKIABAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgGAEgGAFIAAAvIAAAFIgEgBIgGgEIAAAFIgCAAQgDgQAAgPIAAgFIAAgvIAAgFIAAgPQAzj3EdAUQBvAIA5BEQAdAhAVArQATAnACA4IAAAvIAAAFIgBAFQgJBpg5A4IAAgDQgEADgDAAQgFAAABgKgADdhhQAEAQAKALQASATgEgNQgLgigNAAIgEABg");
	this.shape_86.setTransform(64.6,45.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F1D9B6").s().p("AgwKtIgaAAIAAgFIAAgLQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAVgggbAFIAAAFIAAAGIgDAAQgCAVgQAEQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgIgKAEgWQBZhugqi5QAAAAAAAAQgBAAAAAAQAAABgBAAQgBABAAAAQgDADAAAFQATAigdAMIgFABIgFAAIg/AAIgFgBQjBg6hHi0IgFgBQgIgHgIAIQALA6AUAEIAFAAQAHA2AjALIAAgDQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIABAEQAAAXAVACIAFABQA5A9BSAnQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAqIAAAFIAAAFQgGBdgkA/QAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQgSAVgeAJIgFAAQgJgCgBgIIACgBQAFgpgRAVIAAAFIAAAFIAAAQIAAAFQAAAAAAABQAAABgBAAQAAAAAAABQAAAAAAAAQgTAGgGgJIAAgFQAKg4gkAzIgBgFQgLgrAbgeQADhTgfgzQhXiRgejMIAAgFIAAg0IAAgFIAAgaQAQgfAjAlQAMANAKgJQAAgFgDgCQgtgtghhTQgghSAEhnIAAgFIAAgaQAHgTADgXIAAgFQBThBAUh/IABgFQAwhCBXgbIAFgBQATgEAWgBIAGAAIAkAAIAFAAIBdAAIAGAAIBmAKIAGABQBdArAgBuQAPAzAcArQAeAsA9gLQAEAOACAMQAsDwifBcQCBgoATiyIACAAQBUBXA6ByQA7ByACCrQgIANgCAYQgEA5gcgKQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgUg7hbANQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgzASIgCAAQgCgrgbgPIgBAFQgyBXhUA2IgCAAQggDMiIBhIgDAAQACg4gZAjIAAAVIAAAFIgFAAgAi8DkQAfAggDgKQgHgdgLAAQgFAAgFAHgAjqBwQCUAqBjhHIgEABQhlAtiPgUIABADgAm4jeIADAAQAAAPACAQIADAAQApDIDLAlIAFABQAZAJAlgHIAAgCQB+gTBAhQQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQA6g4AJhpIABgFIACgBQAHgggJgTQgDg5gSgnQgWgrgcghQg5hEhugIQkfgUgyD3IAAAQIAAAFIgFAAQAAAaACAag");
	this.shape_87.setTransform(79.6,74.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#523E2D").s().p("ACMAMIhogKIAAgCQgwgCgxAAIgGAAIgkAAIAAAEIgFAAQgWABgUAFIAAgGQAUgBgNgKIgBgDIAkAAIAFAAICBAAIAFAAQA9AAA1AKIAGAAIgBAEIgFAGIAAAFIgFgBg");
	this.shape_88.setTransform(67.5,5.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3C3E36").s().p("AhZhZQgIgUgOgSQgOgHgQgGIgBgCQBBgbAzA0QASASATANQAjAWAlANQAqAQARAlQACBnhQAvIgFABQhehkg2iOg");
	this.shape_89.setTransform(100.4,17.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#141310").s().p("AgCCHQgcgrgPgzQgghthdgrIAAgGIAEgFIABgFIAAgFQAbghA4gDIAFgBQB6BIB2BLQALAGgDASQAEBmhGA3IgBAEIgGAAIgKAAIAAAFQgNACgLAAQgrAAgXgjgAiBiPIABADQAQAGAOAHQAOARAIAVQA2COBeBjIAFgBQBQgugChnQgRglgqgQQglgNgjgWQgUgOgRgSQgigigoAAQgUAAgWAJg");
	this.shape_90.setTransform(99.1,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,147.4,144.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC8760").s().p("AgJgCQgCgCAAgFQAZATgCAAQgBAAgUgMg");
	this.shape.setTransform(32.2,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F78E6D").s().p("AhAgQQgCgDAAgFQBggCAmAzIgGAAIgFAAQhRAAgogpg");
	this.shape_1.setTransform(21.8,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D65733").s().p("AkShBQEIBHETg8IAKgBQguA5hLAcQhfAkhPAAQiaAAhkiDgAh8AEQAAAFACACQApAsBWgBIAFAAQgkgyhbAAIgHAAgAAlAeQAuAdgwgjQAAAFACABg");
	this.shape_2.setTransform(27.5,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,55,13.3), null);


(lib.tteth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPAoQgegPgbgVQgHgEgGgHIgBgCIgFgCQgIgFgGgHQgKgEgBgKIgFgJIgCgDQgGgHAHgEIABAAIAAgCIACgBIAEADIAFADQABAAAAABQAAAAABABQAAAAAAABQABAAAAABIAEgBIACABIAlANIADABIABAAIAAABIABAAIABAAIAeAJIAWAIIAUADIAZAEIAGACQAEABADACIACAAIAKgBIACABQAEABADACQA1AEA3AAIAMgBIADAAQAUgFAUAEIAGABIABABIAFgCIABgBIADABIABABIABACQAFANgQAGQgYAIgVANQgaAQgeAFQgVAEgWAAQg8AAg2gYg");
	this.shape.setTransform(19.1,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tteth, new cjs.Rectangle(0,0,38.2,12.9), null);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E84E24").s().p("AgRgFQgCgBAAgFQApAXgDAAQgCAAgigRg");
	this.shape.setTransform(12.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#933727").s().p("Ag2gEIBjAAIAKAAQAAAEgBAAQgcAFgXAAQggAAgZgJg");
	this.shape_1.setTransform(14.1,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#475249").s().p("AgsgEIBPAAIAKAAQAAAEgBAAQgYAFgTAAQgaAAgTgJg");
	this.shape_2.setTransform(14.1,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4EAE8").s().p("AgJAcIhQAAQAAgGgCAAQgIgEgKgBIAAgKQCAAABbgiIAAAFQgFABgDACQgmAjhAAMIgJAAg");
	this.shape_3.setTransform(18.6,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BABCBB").s().p("AhwAZQgMgGgJgKQAIACALABQAsAAApgHIBMgNIAfgEQAegCAagNIgSAPIAAgFQhbAiiAAAIAAAKQgFAAgEgCg");
	this.shape_4.setTransform(17.9,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D4603E").s().p("AheBfQAAgFgBgBQhCgWgXg+QAlAIAZATQADADAFAAQAqARBDgMQABAAAAgFQCCgZA1hmQABgCAFAAIgBAJQgqC0jdAAIgPAAgAhcA9QBLAnhNgtQAAAFACABg");
	this.shape_5.setTransform(20.1,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#39241A").s().p("AgHBDIhjAAQgFgBgEgCQgZgTglgJQgEAAgBgBQgEgMgGgJIAoACIAFACQAJAKANAGQAEACAFAAQAJABAJAEQABAAAAAGQAhARA4gNQABAAAAgEQBAgMAmgjQACgCAFgBIASgPQAXgKATgRQAKgKANgGIAIgFIgBADQgEAAgBADQg2BmiDAZIgJAAg");
	this.shape_6.setTransform(19.3,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,0,38.6,19.3), null);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BD6136").s().p("AAMAXQgVgXgUgYQAcACAVAGQAFACAFAAQAAAFgCAEQgDAFgFAFIAAAKIAAAKQgFAAgDgCg");
	this.shape_91.setTransform(3,2.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F47757").s().p("AgQAFQgCAAAAgOQAyATgRAAQgIAAgXgFg");
	this.shape_92.setTransform(31.9,9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F38967").s().p("AhIgNQgCgCAAgFQBAgEBUAcQABAAAAAFQgaAMgbAAQgtAAgxgig");
	this.shape_93.setTransform(21.5,9.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D55630").s().p("Aj5gPIAAgKIAAgKQAFgFADgGQACgEAAgFQD1A5DrhCQAEgBAFAAQAAAFgDACQhTBMhyAuIgKAAQgZACgWAAQiiAAhQhRgAifAEQAAAFACACQBOA4BGghQAAgFgBgBQhKgZg7AAIgQABgAACAdQBKAOhMgdQAAAPACAAg");
	this.shape_94.setTransform(30,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2_1, new cjs.Rectangle(0,0,55,13.2), null);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C75A35").s().p("AgTAcQgFAAgCgDQgXgagUgeQA+AcBMAQQABAAAAAFQAAAFgCACQgIAHgaAAQgVAAgggEg");
	this.shape_3.setTransform(7,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6522E").s().p("AALAdQglgOhTgsQBeAQBzgGIAKAAQAAAFgDACQgoAZgvARQgFAAgEgBg");
	this.shape_4.setTransform(27,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E56E49").s().p("Ah3gaQBKALAOgNQACgDAAgFIAKAAIAKAAQBSAsAmAOQAEABAFAAQAAAFgBAAQgqAJglAAQhjAAg8g/g");
	this.shape_5.setTransform(17,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,0,38,12.4), null);


(lib.shirlybody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9B9FB7").s().p("Ag/gCQgBgBAAgFQBhACAfADIABAEQgdAIgdAAQgjAAgjgLg");
	this.shape.setTransform(65.1,88.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#868B8E").s().p("AgEAtIAAgKIAAhPIAJAAIAABPIAAAKIgJAAg");
	this.shape_1.setTransform(3.1,89.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939494").s().p("AgEBQIAAipQAQBNgMBlIgEABIAAgKg");
	this.shape_2.setTransform(5.1,56.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0C89B").s().p("AAyDVIhtAAIAAgKIAAhkQASihAXiZIASAEQA4Akg9BXQgdAqAFBLQAvBHAjBMIAHAhIgKAAg");
	this.shape_3.setTransform(12.6,72.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E717B").s().p("AgFAjIAAhPIAJAAIAAAKQAHAzgQAcIAAgKg");
	this.shape_4.setTransform(20.2,41.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BABCBE").s().p("AgIAHIARgYQgJAjgEAAQgDAAgBgLg");
	this.shape_5.setTransform(5.5,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#787C89").s().p("AgxgEIBZAAIAKAAQAAAEgBAAQgaAFgVAAQgdAAgWgJg");
	this.shape_6.setTransform(52.6,33.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CA98").s().p("AjYgFIgBgKQBTALAYhFIAAAAQgBgaAPgTQAFADADAEQAEgDAGAAQBqAJBmgMQAhAMgBAqIAAACIADAFIACAAQAUAWAeAJIgEAAQhABfh9AnQgBAAAAAFQgiAFgeAAQiWAAgZh8gAhUhTIAAAAIAAAAIAAAAgACCheIADADIABAAIgBgEIgDABgABzhdIAGABIABgCIgHABg");
	this.shape_7.setTransform(57.3,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E8A89").s().p("AAAAnQgFgnAAgnQAQAWgHAvIAAAKIgEgBg");
	this.shape_8.setTransform(123.2,81.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#856B51").s().p("AAAAnQgFgnAAgnQAQAWgHAvIAAAKIgEgBg");
	this.shape_9.setTransform(120.2,87.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8F8F8F").s().p("AAAAnQgFgnAAgnQAQAWgHAvIAAAKIgEgBg");
	this.shape_10.setTransform(121.2,61.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7C996").s().p("ABaDXIhtAAIgBgKQguitghi6QBNgWA/gkQAEgCAFAAQARAcgCA0IAFAAQAGB8AOBzIAAAKQAAAoAFAnIAFABIAAAKIAAAKIgKAAg");
	this.shape_11.setTransform(110.6,72.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A58963").s().p("AADAtQACgzgQgcIAAgKQAgAQgMA/IgBAKg");
	this.shape_12.setTransform(116.8,54.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7B7A84").s().p("AAAAsQgEgsAAgsIAJAAIAABPIAAAKIgFgBg");
	this.shape_13.setTransform(93.1,53.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D5D9ED").s().p("AEiGGIqdAAIAAgoIAAgTQg9gxgxg+IAAgKIAAhaQBUhqAIitQACgsgYAYIgKAAIAABQIAAAKQAAAPgGADQhHAghJhQQAZh8A/hXQACgEAAgFQBUgLBNgSIAJgBQASAqAUAnQACAEAAAFQAvArBJAQIAKABQAmASA9gNQABAAAAgFQCugjBOiFQACgCAFAAQB2gEARAsIgFAAQg2BrBwhkQACgCAAgFQBAgJAcAbQADACAFAAQA3BaAYB4IABAKQhkBHiMAOIAAgPQgWizgICVIAAAKIgKAAQAAAtAFAsIAFAAQAFAAADADQA8AxgIB2QgFAAAAACQgaBXgnBHIAAAUIAAAKIgKAAgAgmFQQA9AVBDgRIgBgFQgfgDhhgCQAAAFABABg");
	this.shape_14.setTransform(62.6,54.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#170D0B").s().p("AJdGtIgUAAIAAgKIAAgKIAAgKQAHgvgRgXIgBgKQgOhzgFh9IABgKQAMg/ghgQIAAAKQgFAAgEABQhAAkhNAWQAgC8AvCtIABAJIgKAAIgeAAIgBgKQgGhOghg0QAAAFgCAFQgVA/gbA5IAAAKIgKAAIgUAAIAAgKIAAgUQAnhHAZhXQABgCAFAAQAIh2g8gxQgDgDgFAAIAAgKIAAhPIAAgKQAHiVAXCzIAAAOQCMgOBkhGIgBgKQgYh4g3haQgFAAgDgCQgcgbhAAJQAAAFgDACQhvBkA2hrIAFAAQgRgsh2AEQgFAAgCACQhOCFiuAjIgKAAIhaAAIgKgBQhJgQgvgrQAAgFgCgEQgUgngSgqIgKABQhMAShUALQAAAFgDAEQg+BXgZB8QBJBQBHggQAGgDAAgPQARgbgHg1IAAgKQAYgYgCAsQgJCthTBqIAABaIAAAKQAwA+A+AxIAAATIAAAoIgKAAIgyAAIgHggQgjhMgwhIQgGhLAegqQA9hXg3gkIgUgFQgWCagSChIAABkIAAAKIgKAAIgUAAIAAgKIAAhQIAAgKIAAhGQARglgHg/IAAgKIAFAAQAMhmgRhNQAAgFgCAAQgxgOAVgfQACgcgHgOIgLgWQAPgeATgdIAMgTQADAfAPg5QAOgUAQgSQAOgSAFgRQCqgZB+hLQAFgDAEgEQATAUAZAKQgYBEhSgKIABAKQAdCWDSgeQAAgFABAAQB8gnBAhgIAFAAQgegKgVgWQAZgGAXgNQA0AqBfAEQBOADBTAMQBZA0ArBfQgDAFABAJQAEAdAHAcIgCgBQAXAzg0AgQALA5gKArIgBAJQAAAoAFAoIAFAAQgDA+AMAxIABAJQAAAoAFAoIAFAAIAABGIAAAKIgKAAg");
	this.shape_15.setTransform(62.1,50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shirlybody, new cjs.Rectangle(0,6.5,124.2,87.4), null);


(lib.eyesshirly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B1A0C").s().p("AgVgRIAKAAQANAAAOgEQACgBgBgFIAGAAQAAA3gNAAQgKAAgVgtg");
	this.shape.setTransform(17.3,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1E9DB").s().p("AgJAKQgPgDAGgVIAKAAIAJAAIAKAAIAKAAIAAAKIAAAJQAAAFgCABQgNAEgOAAQAAgFgBAAg");
	this.shape_1.setTransform(16.9,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9F2E7").s().p("AgRA7QAAgFgBAAQgtgJgYgaQAAgFgCgBQgZgMgDgfQAUgPAWgNQADgCAFAAQAfANAPA/QAKAvAugOQAvgPgKhAQAwASgDA9IgFAAQgFAAgEACQgiAKgtAAQgUAAgVgCg");
	this.shape_2.setTransform(16.8,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D3825").s().p("AhogRQAFAAACgCQADgDAAgFQAYAaAtAIQABAAAAAFQBGAHAygPQAEgCAFAAIAAAKQAAAFgBABQgqAKgkAAQhMAAg2gtg");
	this.shape_3.setTransform(17.5,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C644B").s().p("AgYAZQgPg/gfgMIAAgKQAjAAAjAFIAAAFIgKAAIgKAAQgGAVAPAEQABAAAAAFIgKAAQAsBeAAhoIgFAAIAAgKIAAgKQAVAOAcAKQABABAAAFQAKBAgvAOQgLADgJAAQgcAAgIgkg");
	this.shape_4.setTransform(17.1,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F110B").s().p("ACCBEIAFAAQADg/gwgQQAAgFgBgBQgcgKgVgOIgKAAIgKAAIAAgFQgigFgjAAIAAAKQgFAAgDACQgWANgUAPQADAfAZAMQACABAAAFQAAAFgCACQgDADgFAAQgFAAgCgDQgqgmgVg6QBcgtCAAiIAJABQBXAvgVBYQgBAEgPAAIAAgKg");
	this.shape_5.setTransform(15,7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAF0EA").s().p("AhLAnIAKAAQBfAGgBhfIAFAAQAFAAADACQBWBLiFAWIgKAAQgMACgJAAQgaAAgNgMg");
	this.shape_6.setTransform(67.6,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C2C1D").s().p("ABGAeIg8AAQgFAAgFgCQgvgPggggIAAgKQAhAbAuALIAKABQARARArgHIAKAAIAAAKIgKAAg");
	this.shape_7.setTransform(59,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#937D5E").s().p("AgsgEIA7AAIAKAAIAKAAIAKAAQAAAEgBAAQgYAFgTAAQgaAAgTgJg");
	this.shape_8.setTransform(64.5,24.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAF1EA").s().p("AAoAtIgKgBQgugMghgbIAAgJIAAgKQAWgNAUgPQADgCAEAAQAHA5ApAZQACACAAAFIgKAAg");
	this.shape_9.setTransform(56,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#041A06").s().p("AgagJQBlgXhYAwQgEACgDAAQgKAAAEgbg");
	this.shape_10.setTransform(63.7,15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#43654F").s().p("AgYA3QAAgFgCgCQgpgZgHg5IAAgKQAgAHALgPQACgCAFAAQAIA4ATgvQACgEAAgFQAmACAeAMQACABAAAFIgFAAQABBZhUAAIgLAAgAgYgOQgGAiATgJQA7ghgbAAQgNAAggAIg");
	this.shape_11.setTransform(63.5,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DDE8E6").s().p("AgOgPIATAAIAKAAQAAAFgCAFQgJAVgFAAQgIAAgFgfg");
	this.shape_12.setTransform(62.5,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F130A").s().p("AAZBQIgKAAIAAgKQCGgVhWhLQgDgDgFAAQAAgFgCAAQgegMglgDIgKAAIgUAAQgFAAgCADQgLAOgggHIAAAKQgFAAgDADQgUAPgWALIAAAKIAAAKIAAAKQgFAAgFgBQgRgGgDgXQAqgvBDgaQABgBAAgFQCKgEA9BAQADARAlgHQgpBEhZAUIgKABIgKAAg");
	this.shape_13.setTransform(65.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyesshirly, new cjs.Rectangle(0,0,83,24.6), null);


(lib.shirlyend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#260F09").s().p("AgOAUQAAgBgFAAQAAgFACgCQAVgRAQgZQgCAcgHAWQgBAEAAAFQgHACgDAAQgMAAgCgLg");
	this.shape.setTransform(-84.5,117.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B6C46").s().p("AAKgkQAAAFgCAFIgRA/IAThJg");
	this.shape_1.setTransform(-89.5,109.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85888B").s().p("AgEgiIABgKIAJAAIAABPIAAAKQgRgcAHgzg");
	this.shape_2.setTransform(-101.3,88.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0744F").s().p("AgtB9QAAgFACgEQAWgwgDhIIAFgBQAHh8AIBpQAMBEAIhsQAGhSAYAWQgLA2AABCIAAAJQgcBNg0Awg");
	this.shape_3.setTransform(-98.2,59.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#63432D").s().p("AAkCFQg6iMgRhhQgGgVAQAAQAQABAAADQAIAiAMgDQAGgBAcgrIgBAKQgbB8AcCHQgFAAAAgCg");
	this.shape_4.setTransform(-106.9,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BA3F19").s().p("Aj7ADQgBAAAAgEIAKgBQD0gyD7AzQh+AdiEAAQh4AAh+gZg");
	this.shape_5.setTransform(7.7,56.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663E26").s().p("AAJgdQAAAFgBAEIgQAyIARg7g");
	this.shape_6.setTransform(-65.2,73.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7F4F28").s().p("AkYD7QgBgBAAgFQAAgFABgFQAHgWACgcQgQAYgWATQgCACAAAFQgbgdgrgQQgBAAAAgFIABgKQAYh5guhiIgBgKQgKgvAggDQAAgFgDgEQgLgQgHgjQAIgcASgRIAFgFQAQAKAYgUQALAYAUABQAqABAdhMQAFAAAAABQARBLAIAYQgFAAgBABQgSBQAEBiQAFAAAAACQAgBMAsA+IgBgJQgWhYgchSQAAgFACgEQAXg9AGhQIAAgFIAFAAQASggARghQAABmAwA0QA7A9AYAsQAAgFgCgDQgjhPgrhIIAAgKQAIg2AgAOQARACAIgOIADgFQAxhYgRBLQAPAKAOgBIAEAAQAvATgTACQAAAFABAAQA6ALAgBKQAFAAAEACQBkA3ByBcQgTB0hxAXIgKABQjOArkDAgQgbADgDAWQgVgPgdgJgAlNBoQABgEAAgFQgmCNAliEg");
	this.shape_7.setTransform(-55.3,96.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A2633D").s().p("AgcgLQgCgDAAgFQAFAAACACQAgAgAKgiIAKAAQAIAagQAHQgCABAAAFQgegJgRgWg");
	this.shape_8.setTransform(-71.2,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9C39B").s().p("AgFA8QhUg/AbhRQAGAAAAABQAQArAdAaQAAAFADADQAPAWAgAJQAFAAACACQANASAKAUQgGAUgRAAQgUAAgfgZg");
	this.shape_9.setTransform(-73.2,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D18D6D").s().p("AAIBTQgDgCgFAAQgcgagQgrQAAgBgGAAQAAgFADgEQAkg0AqgwIAFAAQgDBNASA0IAAAoIAAAKQgFASgMAAQgKAAgQgQg");
	this.shape_10.setTransform(-74.4,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6C533B").s().p("AAAAsQgLg3AQghIAABPIAAAKQgFAAAAgBg");
	this.shape_11.setTransform(-65.8,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#814720").s().p("AgMBKQgJhcAhg4IAAAKQAKBYgdAzIgFgBg");
	this.shape_12.setTransform(-1.6,17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9E6D47").s().p("AhCArQAXhpAPBDIAAAFQA8g7AohVQgrCEhBBsQgCAEAAAFQgKAKgMAIQgDACgFAAQgHg4AJgkg");
	this.shape_13.setTransform(104.9,108.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3C2C9").s().p("AABAAIAAABQgEgBAEAAg");
	this.shape_14.setTransform(23,143.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7B6441").s().p("Ag2AAQgBAAAAgEIAKAAIBlAAQgZAJghAAQgYAAgcgFg");
	this.shape_15.setTransform(6.2,136.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9CB98").s().p("AgyCvIgKAAIgKAAQjMgThQiNQAKgKAMgHQBRg3gBBIQAFAAADgCQBKg4AJh5QAFAAAEABQCsAvCYg6QAFAAAAABIAaCBIAKAAQA5AJBVAVQhTCdjTAgIgKAAIhlAAg");
	this.shape_16.setTransform(6.7,118.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7F4F29").s().p("Ag4DPQhtgfg0hUIABgKQAQhEBAgVQAAgFADgBQAogagMA9QAHAHAJglQAEgNAHgHQBGg+Arg5IAFgJQAtBYgJh3QADgRAQAEQAMADAAgDQANhDA5AUIAFAAQgZApAUBjQAAAFADADQAYAaAOAkIgBAKQgNCSgbCFQh/gOhqgfg");
	this.shape_17.setTransform(51.8,93.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F47757").s().p("AATgJQAAAOgCAAQgXAFgIAAQgRAAAygTg");
	this.shape_18.setTransform(3.8,68.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F38967").s().p("AhLAJQAAgFABAAQBVgcBBAEQAAAFgCACQgxAiguAAQgbAAgbgMg");
	this.shape_19.setTransform(14.3,68.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D55630").s().p("AgoBAIgKAAQhzguhVhMQgCgCAAgFIAKABQDtBCD5g5QAAAFABAEQAEAGAEAFIAAAKIAAAKQhQBRilAAQgWAAgagCgAALAcQgBABAAAFQBIAhBOg4QACgCAAgFIgQgBQg8AAhLAZgAgBAdQABAAAAgPQhLAdBKgOg");
	this.shape_20.setTransform(5.7,66.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BD6136").s().p("AgTAPIAAgKQgFgFgDgFQgCgEAAgFQAFAAAEgCQAWgGAcgCQgUAYgWAXQgCACgFAAIAAgKg");
	this.shape_21.setTransform(33.1,62.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A0903").s().p("AkMAHIgKgCQgUAAgJgJQg/g/BxArQAAAFABAAQEGA0Dyg5QAGAAADgCQAmgYAjAQQAHAugwgGIgKgBQgdACgWAHQgFABgFAAQh0AbhxAAQiCAAh/gjg");
	this.shape_22.setTransform(8.2,59.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C07D5B").s().p("AgbAEQgCgBAAgEQAFAAACgDQAQgOAkAHQgLAagTAAQgLAAgQgLg");
	this.shape_23.setTransform(7.7,39.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#864926").s().p("AiQgsQgCgFAAgFQAgghAKBSQACAMAlACQAUABAVAPQAAAFACACQAnAbASgsQAQgKAOABQAnABACgMQAMhUAdAjQAGBfhgAJQgYADgdAJQgIADgKAAQhlgUgdhZg");
	this.shape_24.setTransform(7.2,37.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#787572").s().p("AgEAoIAAhZIAJAAQAAAxgFAxIgEABIAAgKg");
	this.shape_25.setTransform(119.7,91.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#80502A").s().p("AgLFdQhRgqAWiOQgUgUAFAyQANBzhPgPQgFAAgEgCQg9gnATh3QAFAAABgBQAIgfARgSIAAgKQgGhygjhVQAAgFACgFQATgzAeApQAKgKAIgLQAKgQAOAKQA2AjAPgSQgFAAgBgCIgEgIQA2AqAkB/IAAgJQAGhugkhGIAKAFQAQhrAjhEQAAAFACAEQBHCXBPC+QgQC8hlBlIAFAAQgKAKgLAIQgEACgFAAQAAgFACgEQBChtAriEQgoBVg9A8IAAgFQgPhEgXBqQgJAkAHA4QgdAHgOAUQgCADgFAAQAAgFgCgBg");
	this.shape_26.setTransform(93.9,89.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#944F30").s().p("AgYAFIAAgJQAFAAAEACQAJAEAfgQQgHAaggACIgKABIAAgKg");
	this.shape_27.setTransform(85.3,24.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#63432A").s().p("AgigIQAFgFACABQArAQgFghQgJhHAhBlQAAAFgCADQgfAygQAAQgUAAAAhDg");
	this.shape_28.setTransform(108.6,-12.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5B3F30").s().p("AAXgOQgFAKgGAIIgIALQg9gUBQgJg");
	this.shape_29.setTransform(104.7,-17.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ECC29A").s().p("AhhDMQACgbASgDIAKAAQAhgDAHgbQAFAAABgCIBAh2IABgJQANgxAGhRQgJgZgSgRQgDgDAAgFQAAgFACgEQAUhJAnA+QAhFRjgA/g");
	this.shape_30.setTransform(90.6,8.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#894524").s().p("AgFAOQgCgbgHghQAFAAADgDQACgCAAgFIAEAAQAAAVAPgBQgHBdgGAAQgDAAgEgrg");
	this.shape_31.setTransform(91.3,4.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D48C6A").s().p("Ag9CgQgEgCgFAAIAAgKQADiXBDhYIAAAKQAHAiACAbQAJBqAMidQgQACABgWIgFAAQAAgFgBgEQgQgpAwgUQAAAFACADQASARAKAZQgHBRgMAxIgBAJIhAB2QgBACgFAAQgZAOgLAAIgGgCg");
	this.shape_32.setTransform(89.8,7.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5F3C30").s().p("AAOAAIAAAFQg3gPA3AKg");
	this.shape_33.setTransform(89.4,-28.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#633F32").s().p("AAZAMIAAAFQhjhBBjA8g");
	this.shape_34.setTransform(106.6,-26.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#60453F").s().p("Ag3hCQAFAAABABQAqBMA/AzIAAAGQhLgWgkhwg");
	this.shape_35.setTransform(98.4,-49.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DBE3DF").s().p("AgKgRQADgCAFAAIAJAAIAUAAQAIAagQAHQgCABAAAFQhMgCAxgjg");
	this.shape_36.setTransform(34.4,-6.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4F6F3").s().p("Ah0BVIgJAAQAAgFABAAQBUgQgOhsQgQgKgEgUIgBgKIAKgBQCOgKAxBRQgvBliXAAQgVAAgXgCg");
	this.shape_37.setTransform(46.8,-1.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#376442").s().p("AAEBUQhbgOABg3QAAgSALgKIAOgLQAzB5A2h5IgKAAQAAgFACgBQAQgHgIgbIgUAAIgKAAIAAgFQAigBARgOIABAKQAEAUAPAKQAPBthVAPQgBAAAAAFIgKgBg");
	this.shape_38.setTransform(32.7,-1.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#442717").s().p("AjUAUQAAgFACgCQB+hWDNAsQAAAFACABQAyAbAoAkIAAAFQizhFj2Asg");
	this.shape_39.setTransform(43.2,-24.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#150F08").s().p("AiOBmQhCgNgigqQAmh+CGggIAKgBIAKAAIBlAAQA1AHAuASIANAFQgUAnBkgJQhWCljBAAQgyAAg4gLgAi/AAQgKAIgBATQAAA4BbAOIALAAIAKABQC8AQA2h0QgyhQiOAKIgKAAQgQAOgiABIAAAFQgFAAgEADQgwAjBNACIAKAAQg3B5gzh5g");
	this.shape_40.setTransform(44.2,-3.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6E5541").s().p("AgtAFIgKAAIABgFQA2gEA4AAIAAAJIhlAAg");
	this.shape_41.setTransform(43.7,-14.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6C534F").s().p("AhYBFQBlg9BOhSQAAAFgCAEQg2Boh9AkQAAgFACgBg");
	this.shape_42.setTransform(25,-90.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#624944").s().p("AhuhmQAEABADACQBpBfBuBbIAAAQQiBhNhdiAg");
	this.shape_43.setTransform(72.6,-53.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6C544F").s().p("AgeAAQgGgSACglQAFAAABgCQAEgIAAgKQAFAAAAABQAQBXAnA9QgFACgFAAQgbAAgdhMg");
	this.shape_44.setTransform(50.8,-80.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#745C56").s().p("AgLgzQAGgtAUBeIAAAnIAAAKQAAAKgEAIQgBACgFAAQgZgyAJhEg");
	this.shape_45.setTransform(46.8,-93);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#705853").s().p("AgBACQgDgCgFAAIgeAAIgLAAQAAgFADgCQAtgmA1A2QgGAOgMAAQgOAAgUgVg");
	this.shape_46.setTransform(53.3,-105.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6C534E").s().p("AgSgFQgBgCgFAAQAAgFACgBQAIgEAKAAIAEAAQADAaAWADQgIAGgIAAQgOAAgNgXg");
	this.shape_47.setTransform(51.8,-101.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5F4742").s().p("AgVgMQADgCAFAAIALAAIAdAAQgFAFgDAGQgCADAAAFQgKAAgHAEQgCABAAAFQgjgPAQgMg");
	this.shape_48.setTransform(49.6,-103.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6A514E").s().p("AgUAIQgfgYBQAHQgKAJgMAGQgJAFgHAAQgGAAgFgDg");
	this.shape_49.setTransform(52.4,-117.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#735B56").s().p("AgdguIgKABQhlAQAKgvIAKAAQC7gOBBCZIAAAPQgrhDh2g5g");
	this.shape_50.setTransform(64.4,-105.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5F4841").s().p("AgMgCQgCgEAAgFQAFAAACgDQADgCAAgFIAEAAQAAAVAPgBQgBAXgHAAQgHAAgMgYg");
	this.shape_51.setTransform(41.7,-123.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6D5651").s().p("Ag7AIQgBAAAAgFQAGAAAEgCQAFgCAFgFIgeAAIgKAAIABgFQBZgKBHAPQgdAWgyAAQgbAAgigIg");
	this.shape_52.setTransform(28,-111.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7C625F").s().p("AgNgDIAKgBIAJAAIAeAAQgFAEgGADQgEACgFAAIgJAAQhJAAA1gIg");
	this.shape_53.setTransform(20.3,-111.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#735B57").s().p("AgaAHQgEgCgFAAQABgFABgDQAGgSAgAHQAFAAAFACIAVAIQgNAVgUAAQgMAAgRgKg");
	this.shape_54.setTransform(23.5,-115.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6E5B57").s().p("AC3A9QiCh4j9ADIAGAAQEWgeB1CBIAAAKQAAAFgDADQgDACgFAAQgFAAgCgCg");
	this.shape_55.setTransform(21.1,-130.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F3F6F2").s().p("AhpBUIgKgBQAAgFABAAQBJgVgDhdQgGAAgCgCQgDgDAAgFIAAgKQgRACACgWIgFAAIAAgKIAKABQB6ASA8BQQgwBKh7AAQgYAAgbgDg");
	this.shape_56.setTransform(-20.1,-1.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3D674B").s().p("AgYAZQAAgFABgBQAQgHgHgaQAFAAAEgCQAFgDAFgFIAFAAQgCAVARgBIAAAJQgPAKgPAIQgEACgFAAIgKAAg");
	this.shape_57.setTransform(-28.2,-6.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4D6D53").s().p("AgaAHQgEADgEAAIAAgKIAAgJIAKAAIA8AAIAAAJQgGAFgGADQgDACgGAAQgWgUgTARg");
	this.shape_58.setTransform(-31.3,-9.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#020C01").s().p("AgigWQgBgOAUgGIAAAKQgBAfApgLIAKAAQgfA3gRAAQgTAAgChBg");
	this.shape_59.setTransform(-33.3,-3.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#ECF3EB").s().p("AgaAEIAAgJIAAgKQAFAAADgCQASgTAYAVQAHAagPAHQgCABAAAFQgLADgHAAQgWAAAAgXg");
	this.shape_60.setTransform(-32.2,-6.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#356442").s().p("AhigOIAFAAQAVg2A9gPIAJgBIAAAKIAAAKIAAAKQgUAGABANQAEB9BBhyQAFAAAEgCQAQgIAQgKQAAAFACADQADACAFAAQADBchJAWQgBAAAAAFQhdgWghhNg");
	this.shape_61.setTransform(-34.6,-1.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#462919").s().p("AjXAtQAvg6BJghIAKgBQDFgUBqBGQAEAdgigKQjqhFirBkQAAgFACgDg");
	this.shape_62.setTransform(-28.2,-23.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F9CA97").s().p("Aj3NVQhfhKhYhOQkCjigkm8IAAgKIAAhPQAhhOAvg9QAzhEAShWQBEk+FDgrQE3gpCsilQAAAFACAEQB6FsD7DtIAAAKQALByAoBWQgGKXmmEEQhTA0huAZQhNARhAAAQh/AAhThCgAkpIJQAJAKAUAAQAAAFADACQBUBNB0AuIAKAAQDJAOBcheQAFAAADgDQAXgWAUgZIAKAAQAwAHgHgvQgjgRgmAYQgDADgGAAQj7gzj0AyIgKABQgugSgRAAQgYAAAlAmgAiSD7QAAAFACAEQAdBaBlAVQAKAAAIgDQAdgKAYgCQBggJgGhgQgdgkgMBUQgCAOgngCQgOAAgQAKQgkgHgQAOQgCADgFAAQgVgPgUgBQglgCgCgOQgHg6gSAAQgIAAgJAKgAhkC0IAFABQAegzgKhZIAAgKQgiA4AJBdgAE2jVIgBAFIgKABQiGAggmB/QAiApBCAMQEWA1BsjOQhkAIAUgnIgNgEQgugSg1gHIAAgKQg4AAg3AFgApSh9QACACAAAFQB5C1EQhGQAzgNAggmQg2h1iJgmQgBAAAAgFQirAAg+A8IAAAKIgKAAIgZgCQgwAAAeAZgAm4ldIgKABQhIAhgvA7QgDADAAAFQCrhlDrBGQAiAKgEgdQhSg4iJAAQgoAAgtAFgAI9kHIAAgFQgogkgygcQgCgBAAgFQjPgsh9BXQgCACAAAFQBggSBWAAQCGAABuArg");
	this.shape_63.setTransform(7.2,6.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1B120B").s().p("AjmgPQAAgFgDgCQgkgdBPAGIAKAAIAAgKQA+g7CqgBQAAAFACABQCJAmA2BzQggAmgzAOQhMAUhBAAQikAAhXiDgAgcBoIAKABQClARA5hYQg7hQh7gSIgKgBIg8AAIgKAAIgKABQg9APgUA1IgFAAQAgBOBeAWg");
	this.shape_64.setTransform(-28.9,-3.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#603F30").s().p("AAQgDIgBAEIgdADQgHAAAlgHg");
	this.shape_65.setTransform(-78,-8.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#644B46").s().p("AAig0QAAAFgDADQghAkgYAtIAAAQQgchNBYgcg");
	this.shape_66.setTransform(-72.7,-58.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#634A45").s().p("AhQA4QAAgFACgEQAshlBzgdQAAAFgDACQg9AwhDAsIAAAKQgKA6gIAAQgGAAgGgcg");
	this.shape_67.setTransform(-72.3,-62.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#725B56").s().p("Aj7BZQEHhSDyhlQAAAFgCAEQhHCLjTABIABgFQBUgKA4gjIgKABQi3AliqA0QAAgFABgBg");
	this.shape_68.setTransform(12.8,-99.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#734C32").s().p("AiUG1QACgCAFAAIAAAFQA1gwAchNIAAgKQgBhCALg2QgXgVgGBRQgIBtgOhFQgHhogHB7IgGABIAAgKQgpmQCEj5QAFAAADgCQAggfgcA9QBXhfB7hxQilCihWDuQgBAFAAAFQAtiOBghTIAAAFQAjAZgKA2QAAABgEAAQgsApgfA5QgCACgEAAQgLA8gFA8IAFAAQAOguACBpQAIF6jiCOQAIgmAkg8gAgZlCIgFAIIAJgKQgDAAgBACg");
	this.shape_69.setTransform(-88.5,28.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5A4E4A").s().p("AgTAtQAEhBAjgiIgBAKQgQBNgWAWIAAgKg");
	this.shape_70.setTransform(-100.7,-52.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6D5551").s().p("AhVAHQA9gNBFgFIALgBIAKAAIAUAAIAAAKQhSANhZACg");
	this.shape_71.setTransform(-1.9,-116.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7A6663").s().p("AgoAGIAIgEQACgBAAgEIABgFQAigFAjAAQgYAbgaAAQgOAAgQgIg");
	this.shape_72.setTransform(1.7,-121.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6D5752").s().p("AhLghIAKgBQAAAFgCABIgIAEQAsAXAkgrIAKAAQCqgCBoA9Qg7gHg1gDIAJAEQABABAAAFQgggHgGASQgCAEAAAFQhHAFgzgNQgFgCgFAAIAAgKIgTAAIgKAAIAAgFQA0ADAcgRQjQgLiJA6QgEACgFAAQBQhBCFgNg");
	this.shape_73.setTransform(5.2,-118.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#37221B").s().p("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");
	this.shape_74.setTransform(0,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shirlyend, new cjs.Rectangle(-120.2,-143.8,240.5,287.6), null);


(lib.shirlyclosed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#260F09").s().p("AgJAOIgEgBQAAgDACgCQAOgLALgRQgCATgEAOIgBAHIgHABQgHAAgCgHg");
	this.shape.setTransform(-57.4,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85888B").s().p("AgCgXIAAgHIAGAAIAAA2IAAAHQgLgTAFgjg");
	this.shape_1.setTransform(-68.9,59.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B6C46").s().p("AAHgYIgBAHIgMAqIANgxg");
	this.shape_2.setTransform(-60.9,74.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7F4F28").s().p("Ai+CrQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgGQAFgPABgTQgLAQgPANQgBABAAAEQgTgUgdgLQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIABgHQARhSgfhDIgBgHQgHgfAVgCQAAgEgBgCQgIgMgEgXQAFgTAMgLIADgEQALAHARgOQAHAQAOABQAcABAUg0QABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAMAzAGAQQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgMA2ADBCQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAWA1AeAqIgBgHQgPg7gTg3IABgHQAQgpAEg2IAAgEIADAAQANgVAMgXQgBBFAhAjQAoAqAQAdIgBgFQgYg1gdgxIAAgHQAFglAWAKQAMABAFgKIACgDQAhg8gLA0QAKAGAJgBIADAAQAgAOgNABIABADQAnAIAWAyQAEAAACABQBEAmBOA+QgNBPhNAQIgHAAQiMAeiwAVQgSACgCAPQgOgKgUgGgAjiBHIABgGQgaBgAZhag");
	this.shape_3.setTransform(-37.6,65.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663E26").s().p("AAGgUIgBAGIgKAjIALgpg");
	this.shape_4.setTransform(-44.3,50.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0744F").s().p("AgeBVQAAgEACgCQAOghgCgxIADAAQAGhUAEBHQAIAuAGhJQAFg4APAPQgIAlABAsIAAAGQgTA1gjAgg");
	this.shape_5.setTransform(-66.7,40.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#63432D").s().p("AAZBbQgnhggMhBQgEgOALAAQALAAAAACQAFAXAIgCQAEgBATgdIAAAHQgTBUATBcQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_6.setTransform(-72.7,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A2633D").s().p("AgSgHQgCgCAAgEQADAAACACQAVAVAHgXIAHAAQAFASgKAFQgBAAAAAAQAAAAgBABQAAABAAAAQAAABAAABQgUgHgLgOg");
	this.shape_7.setTransform(-48.4,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9C39B").s().p("AgDApQg5gqATg4QAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAKAdAUASQAAADACACQAKAPAWAGQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAKAMAGANQgEAOgMAAQgNAAgVgRg");
	this.shape_8.setTransform(-49.8,15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D18D6D").s().p("AAFA5QgBgCgEAAQgTgSgLgdQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQAAgDACgCQAYgkAdggIADAAQgBA0AMAjIAAAbIAAAHQgEAMgIAAQgHAAgLgKg");
	this.shape_9.setTransform(-50.5,9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C533B").s().p("AAAAeQgHglALgXIAAA2IAAAHIgEgBg");
	this.shape_10.setTransform(-44.7,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BA3F19").s().p("AiqACIgBgDIAGAAQCmgiCrAiQhWAUhZAAQhSAAhVgRg");
	this.shape_11.setTransform(5.3,38.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#814720").s().p("AgIAzQgGg+AWgnIAAAHQAHA8gUAiIgDAAg");
	this.shape_12.setTransform(-1.1,11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B120B").s().p("Ah4AIQAIgFgLgFIgHACIgEgFIAFgEQAGgEgIgGIgGACIgGABIgGgGIAIgBQAEgBAAgDQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgPgCIgCgCQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgZgUA2AEIAHAAIAAgBIACABIACADIABACQACALAFALQADAGADADQAXAzA/AOIAGABQBmALAqgyQAEgCADgFIACgCIAMgKIADgDIAKAUQgVAagjAJQg0AOgrAAQhSAAg1gwg");
	this.shape_13.setTransform(-19.7,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#462919").s().p("AiSAeQAggnAxgWIAHgBQCGgOBIAwQADAUgXgIQifguh0BEQAAgEABgCg");
	this.shape_14.setTransform(-19.2,-16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#603F30").s().p("AALgCIAAACIgUADQgFAAAZgFg");
	this.shape_15.setTransform(-53,-6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#734C32").s().p("AhkEpQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAIAAADQAkggASg1IAAgHQAAgsAIglQgQgPgEA4QgGBKgJgvQgFhHgFBUIgEAAIAAgGQgbkQBZipQAEAAACgCQAVgVgTAqQA7hBBUhNQhxBug6CjIgBAGQAfhgBBg5IAAAEQAYARgGAkIgEABQgeAcgVAnQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgHApgEApIAEAAQAJggACBHQAFECiZBgQAFgaAZgpgAgRjaIgDAFIAGgHQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_16.setTransform(-60.2,19.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5A4E4A").s().p("AgMAfQACgsAYgXIgBAGQgLA0gPAPIABgGg");
	this.shape_17.setTransform(-68.5,-35.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#634A45").s().p("Ag2AmQAAgEACgCQAdhEBOgUQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAAAQgqAhgtAeIgBAHQgGAngGAAQgEAAgEgTg");
	this.shape_18.setTransform(-49.2,-42.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#644B46").s().p("AAXgiQAAADgCABQgWAZgQAeIAAALQgTg0A7gSg");
	this.shape_19.setTransform(-49.4,-39.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7A6663").s().p("AgaAEIAFgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgEQAXgDAYAAQgRARgRAAQgKAAgKgFg");
	this.shape_20.setTransform(1.1,-82.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9E6D47").s().p("AgtAdQAQhHALAtIAAAEQAogoAbg6QgdBagsBJQgCADAAADQgGAHgIAFQgDACgDAAQgEgmAFgZg");
	this.shape_21.setTransform(71.3,73.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7B6441").s().p("AgkAAIgBgDIAHAAIBEAAQgRAHgWAAQgQAAgTgEg");
	this.shape_22.setTransform(4.2,92.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9CB98").s().p("AAiB3IhEAAIgGAAIgHAAQiLgNg2hfQAHgIAIgEQA3gmgBAyQADAAACgCQAzgmAGhSIAGABQB0AfBognQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIASBXIAHABQAmAFA6APQg4BriQAVIgHAAg");
	this.shape_23.setTransform(4.6,80.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A0903").s().p("Ai2AFIgGgBQgOAAgGgGQgrgrBNAdIAAAEQCyAiClgmQAEAAACgBQAagRAXAMQAFAeghgEIgGAAQgUABgPAFIgGABQhPAShNAAQhZAAhWgYg");
	this.shape_24.setTransform(5.6,40.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BD6136").s().p("AgNAKIAAgHQgEgDgCgDIgBgGIAHgBQAOgEAUgCQgOAQgPAQQgBABgEAAIAAgHg");
	this.shape_25.setTransform(22.5,42.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F38967").s().p("AgzAGQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBAAAAQA5gSAtADQAAADgCACQgiAXgeAAQgTAAgSgJg");
	this.shape_26.setTransform(9.7,46.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D55630").s().p("AgbAsIgGAAQhPgfg6g0QgBgBAAgEIAGABQCiAtCpgnIABAGQACAEADAEIAAAGIAAAHQg3A3hvAAIghgBgAAIATQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABQAwAXA1gmQACgCAAgDIgKgBQgpAAgzARgAgBAUQABAAAAgKQgzAUAygKg");
	this.shape_27.setTransform(3.9,45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F47757").s().p("AANgGQAAAKgBAAQgQADgFAAQgMAAAigNg");
	this.shape_28.setTransform(2.5,46.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C07D5B").s().p("AgSADQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQADAAABgBQALgKAYAEQgHASgNAAQgIAAgKgHg");
	this.shape_29.setTransform(5.3,27.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#864926").s().p("AhigeIgBgGQAWgXAGA4QACAIAZABQAOABAOAKQAAABAAABQAAABAAAAQAAABAAAAQABABAAAAQAbASAMgeQAKgGAKAAQAaABACgIQAIg5AUAYQAEBAhBAGQgRACgTAGQgGACgHAAQhEgNgUg9g");
	this.shape_30.setTransform(4.9,25.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7F4F29").s().p("AgmCNQhKgVgjg5IABgHQAKguAsgOQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAbgSgJApQAFAFAHgZQACgJAFgFQAwgpAdgnIADgHQAeA9gFhRQABgMALADQAIACAAgCQAJguAoAOIADAAQgRAbAOBEQAAADABACQAQASAKAZIAAAGQgKBjgRBbQhXgKhIgVg");
	this.shape_31.setTransform(35.3,63.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#80502A").s().p("AgHDtQg3gdAPhgQgOgNAEAhQAIBPg1gLQgEABgCgCQgqgbANhQQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAFgVAMgMIAAgHQgEhNgYg6IABgGQAOgkAUAdQAHgIAFgHQAHgKAJAGQAlAYAKgNQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAIgCgGQAkAdAYBVIAAgGQAEhKgYgvIAHADQALhJAXguQAAADACADQAwBnA2CAQgLCAhFBFIAEAAIgPAMQgCACgEAAQAAgEACgDQAthKAdhaQgcA6gpApIAAgDQgKgvgQBIQgGAZAFAmQgUAEgJAOQgCADgDAAQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_32.setTransform(63.8,60.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#944F30").s().p("AgQADIAAgFIAGABQAGACAVgKQgFARgVACIgHAAIAAgHg");
	this.shape_33.setTransform(58,16.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#787572").s().p("AgCAbIAAg8IAFAAQAAAhgDAhIgCABIAAgHg");
	this.shape_34.setTransform(81.4,62.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#63432A").s().p("AgXgGQAEgDABABQAdAKgEgWQgFgwAWBEQAAAEgCACQgVAigKAAQgOAAAAgug");
	this.shape_35.setTransform(73.8,-8.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5B3F30").s().p("AAQgJQgDAHgFAFIgFAHQgpgNA2gGg");
	this.shape_36.setTransform(71.2,-12.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#894524").s().p("AgDAJQgCgRgEgXQADAAACgCQACgCAAgDIACAAQAAAPAKgBQgFA/gEAAQgBAAgDgeg");
	this.shape_37.setTransform(62.1,3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ECC29A").s().p("AhBCKQABgSAMgCIAHAAQAWgCAFgSQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIArhQIABgGQAJghAEg3QgHgRgMgMQgBgCAAgDIABgGQAOgyAaAqQAWDliYArg");
	this.shape_38.setTransform(61.6,5.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D48C6A").s().p("AgpBtIgGgBIAAgHQAChmAtg8IAAAHQAEAXADASQAGBIAHhqQgLABABgPIgDAAIgBgGQgKgcAggOQAAAEABACQAMALAHARQgEA4gIAgIgBAHIgrBQQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAQgQAJgIAAIgEgBg");
	this.shape_39.setTransform(61.1,5.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5F3C30").s().p("AAKAAIAAADQgmgJAmAGg");
	this.shape_40.setTransform(60.8,-19.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#633F32").s().p("AARAIIAAAEQhDgsBDAog");
	this.shape_41.setTransform(72.5,-18.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(21,15,8,0.996)").s().p("AFvAYIgCgDQgFgGAIgCIAGAEIAKAIQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAABQgEABgEAAQgFAAgEgEgAmMAYQgFgEAGgCIAOgDIABAAIAHgBQALAFgIAFIgHADIgIABQgGAAgFgEgAmiAMQgJgDAGgGQADgDAEAAIAKACIALgCIAGgBIAGgCQAIAFgGAFIgFAEIgDABIgCABIgNABQgIAAgIgCgAF6AMQgEAAAAgFQgBgFAFgBIAEABIAFAAIAeADQAFABgCAFQgBADgDAAQgTAAgTgCgAGJgEIgGgEQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBABAAQAEgDAHABIAEAAQAVAGAQgKQALAKgRAFQgKACgKAAQgLAAgKgEgAm6gUQgDgCADgDQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAQAJATAEIAPABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAEgEAAIgIABIgDAAQgXAAgRgOg");
	this.shape_42.setTransform(5.3,-1.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#624944").s().p("AhLhEQADAAACABQBHBBBLA9IAAAKQhXg0hAhVg");
	this.shape_43.setTransform(49.4,-36.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#60453F").s().p("AglgtQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAcAzArAjIAAADQgygOgZhNg");
	this.shape_44.setTransform(66.9,-33.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#150F08").s().p("AhgAxQgtgJgXgcQACgKAEgHQANARASAOIAFADQAPAMAgAFIAHAAIAHAAQB/ALAlhOIAAAAIABgDIABgEIABgBIALgHQALgHAHgLQAMABASgCQgGANgIALQgGgBgFADQAAAAgBABQAAAAAAABQAAAAAAAAQAAABABAAIAFAEIgGAHIgEAAIgEgBQgFABAAAFQAAAFAFAAIgFAFIgGgEQgHACAEAFIACADQg4AyhXAAQgiAAgmgHg");
	this.shape_45.setTransform(30.1,-0.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#442717").s().p("AiQANQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQBVg6CMAdQAAABAAABQAAABAAAAQAAABAAAAQAAABABAAQAiASAbAYIAAADQh6guinAdg");
	this.shape_46.setTransform(29.4,-16.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(249,202,151,0.996)").s().p("AkLBRIgHgBQg/gOgWg1QgEgDgCgFQgFgKgDgLIgBgDIgBgCIgCgBQgOgIAJgNQADgEAEgCQACgDAEgEQABAAAAAAQABAAAAgBQABAAABAAQAAAAABAAQAGADAFAEIAEgCQALgVAbgFQAwAAAvACQAGAAAHADQAoATAgAeQAHAHAJADIADACIAEgBQAQAGgBAKQABAHgHAJIgDACIgMALIgCACQgDAGgEACQgiAphLAAQgRAAgSgCgAC0BRIgHgBIgHAAQgggFgPgMIgFgDQgSgOgNgSIgFgIQgIgMABgMQABgMAMgBQAIADAGAGQACgFAEgGQAbgfAngIQAGgBAFgDQAKgFAMgCIATgEQAkABAjACQAQAAALAKIAFABQANAAAHAHIAFgLQAGgPAPgEQAXAIgMAXIgFAJQAKAHgJANIgBACQgHALgLAHIgLAGIgBABIgBAFIgBACIAAAAQggBGhnAAIgegBg");
	this.shape_47.setTransform(5.9,-3.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6C544F").s().p("AgUAAQgEgMABgZQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAgBQADgFAAgHIADABQALA7AaApQgDACgDAAQgTAAgTg0g");
	this.shape_48.setTransform(34.5,-54.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9CA97").s().p("AioJEQhAgzg8g1QiviZgZkuIAAgHIAAg1QAXg1AfgqQAjguAMg7QAvjYDbgdQDTgcB1hwIABAHQBTD3CrChIAAAHQAHBNAcA6QgFHDkeCxQg5AjhKARQg1AMgsAAQhVAAg5gtgAjKFiQAHAHANAAQAAADACACQA5A0BPAfIAHAAQCIAKA/hAQADAAACgCQAQgPANgRIAHAAQAhAEgFgfQgYgMgZARQgDABgEAAQirgiilAiIgHAAQgfgMgLAAQgRAAAZAagAhjCqIABAHQAUA9BEAOQAHAAAGgCQATgHARgBQBBgGgEhCQgUgYgIA5QgCAKgagBQgKgBgKAHQgZgFgKAKQgCACgDAAQgOgKgOgBQgZgBgCgKQgEgngNAAQgFAAgGAGgAhEB6IADABQAVgjgHg8IAAgHQgXAmAGA/gABQhUQgBANAIAMIAGAIQgEAJgDAJQAXAdAtAIQCMAaBNhFQAGAIALgFQAAAAAAAAQABgBAAAAQAAAAgBAAQAAgBAAAAIgKgIIAEgFQATACATAAQADAAABgDQACgEgFgBIgegDIAGgIQASAKAXgIQARgFgLgKQgQALgVgGIgEgBQAHgLAHgNQgSACgNgBIABgBQAJgOgJgHIAFgJQAMgXgYgHQgPADgFAPIgFALQgIgGgNAAIgEgCQgLgKgQAAQgkgCgkAAIgTADQgLACgKAFQgGADgGABQgnAJgaAfQgFAFgBAFQgHgFgHgEQgNABgBAMgAiHgEQAjgJAVgaIgKgVQAGgJgBgGQACgMgRgFIgEAAIgCgBQgJgEgIgHQgggegngTQgHgDgHAAQgvgCgvAAQgcAFgLAVIgEACQgFgEgGgDQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgEADgDAEQgEABgCAEQgJAOANAHIAAABIgHAAQg2gEAZAUQABAAAAABQAAAAAAABQABAAAAABQAAABAAABIACACQgTgDgQgKQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQgDADADACQASAQAZgBIAGAGIgLACIgKgBQgEgBgDADQgGAGAJADQAOAEAPgDIACAAIADgCIAEAFIgBAAIgOADQgGABAFAEQAIAHALgEIAHgCQBSBICVgmgAkrjtIgHABQgxAWggAoQgBACAAAEQB0hFCgAvQAXAIgDgUQg4gmhdAAQgcAAgeADgAGFizIAAgDQgbgYgigTQAAgBAAAAQAAAAgBgBQAAgBAAAAQAAgBAAgBQiNgdhVA7QAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABQBBgMA6AAQBcAABKAdg");
	this.shape_49.setTransform(4.9,4.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#745C56").s().p("AgHgiQAEgfANBAIAAAaIAAAHQAAAGgCAGQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgQghAGgug");
	this.shape_50.setTransform(31.8,-63.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6C534E").s().p("AgMgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAGgCAGAAIADAAQACARAPACQgFAEgGAAQgJAAgJgPg");
	this.shape_51.setTransform(35.2,-69);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5F4742").s().p("AgOgIQACgBADAAIAIAAIAUAAQgEADgCAFQgCABAAADQgGAAgFADQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABQgYgKALgIg");
	this.shape_52.setTransform(33.7,-70.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#705853").s().p("AgBABQgBgBgDAAIgWAAIgHAAQABgDACgBQAegaAjAkQgEAKgHAAQgKAAgOgPg");
	this.shape_53.setTransform(36.3,-71.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6C534F").s().p("Ag8AvQBFgqA1g3QAAADgBADQglBHhVAYQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAg");
	this.shape_54.setTransform(17,-61.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#725B56").s().p("AirA9QCzg5CkhEQAAAEgBADQgvBeiPAAIAAgDQA4gHAngYIgHABQh8Aah1AjQAAgBABgBQAAAAAAgBQAAgBAAAAQAAAAAAAAg");
	this.shape_55.setTransform(8.7,-67.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#735B57").s().p("AgRAFIgGgBIABgGQAEgMAVAFIAHABIAOAGQgIANgOAAQgIAAgLgGg");
	this.shape_56.setTransform(16,-78.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6D5651").s().p("AgoAGIAAgEQADAAADgBIAHgEIgUAAIgHAAIAAgEQA8gHAxALQgUANgiAAQgSAAgXgEg");
	this.shape_57.setTransform(19.1,-75.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7C625F").s().p("AgJgCIAHAAIAGAAIAVAAIgIAEQgDABgDAAIgIAAQgvAAAjgFg");
	this.shape_58.setTransform(13.8,-76);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6D5551").s().p("Ag5AFQApgJAvgDIAHAAIAHAAIAOAAIAAAGQg4AJg8ABg");
	this.shape_59.setTransform(-1.3,-78.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6D5752").s().p("AgzgWIAHAAQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABIgGACQAeAQAYgdIAHAAQB0gCBHAqQgpgFgkgCIAGACQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQgWgFgEAMIgBAGQgwAEgjgKIgHgBIAAgGIgMAAIgHAAIAAgEQAiACAUgLQiOgIhcAoIgHABQA3gsBagJg");
	this.shape_60.setTransform(3.6,-80.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6A514E").s().p("AgNAFQgVgQA2AFQgHAGgIAEQgGAEgFAAQgEAAgDgDg");
	this.shape_61.setTransform(35.6,-79.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5F4841").s().p("AgIgBQgBgDAAgEQADAAACgBQACgCAAgDIACAAQAAAOAKgBQAAAQgFAAQgFAAgIgQg");
	this.shape_62.setTransform(28.3,-83.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6E5B57").s().p("AB7ApQhYhPipAAQC9gUBPBXIAAAHQAAAEgBABQgCACgEAAQgDAAgBgCg");
	this.shape_63.setTransform(14.6,-88.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#37221B").s().p("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");
	this.shape_64.setTransform(0,-1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#735B56").s().p("AgTgfIgHABQhFAKAHgfIAHgBQB/gJAsBoIAAAKQgdgthQgng");
	this.shape_65.setTransform(43.8,-71.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shirlyclosed, new cjs.Rectangle(-81.7,-97.7,163.5,193.4), null);


(lib.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// waterl
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(42,94,133,0.722)").s().p("Ag2gFQA2AAA2AFIABAEIgKAAQgSACgQAAQgmAAgbgLg");
	this.shape.setTransform(-36,151.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(73,140,188,0.855)").s().p("AB4AFIjlAAQgFAAgEgCQgGgDgFgEIAKAAIBQAAIAKAAQBPAABQAEIAAAFIgKAAg");
	this.shape_1.setTransform(-17.5,152.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(21,40,53,0.235)").s().p("AiLgEIDlAAIAKAAIAeAAIAKAAIgBAEQg/AFg7AAQhSAAhKgJg");
	this.shape_2.setTransform(-14.5,153.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,101,142,0.749)").s().p("AgngFQAnAAAnAFIABAEIgKAAQgOACgLAAQgcAAgQgLg");
	this.shape_3.setTransform(-52.5,149.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(61,132,186,0.933)").s().p("ACvAZIgBgFQg2gFg3AAIgKAAQgrAHgQgRIgBgFQgngEgoAAIgKgBQgogJgyAAIAAgKIAoAAIAKAAQCtAGCQAmQACAAAAAFIgKAAg");
	this.shape_4.setTransform(-48,149.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(77,152,204,0.996)").s().p("AAoAKIgoAAQgEAAgEgCQgOgJgbABIAAgJQAxAFAxAJQABAAAAAFIgKAAg");
	this.shape_5.setTransform(-66.5,146);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(31,61,82,0.412)").s().p("AAeAKQgmgFgfgOIAUAAIAKAAQAagCAOAKQAEABAFAAIAAAKIgKAAg");
	this.shape_6.setTransform(-70.5,147);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(81,141,179,0.914)").s().p("AAjALIgUAAIAAgFQgnACgRgOIgDgCQAngFAaAHIAPAGQAEABAFAAIAAAKIgKAAg");
	this.shape_7.setTransform(-76,144.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4FA1D7").s().p("AgEATQgcgHgMgVQA7AVAXgdQACgCAFAAIAAAKQABAegpgLIAAAKIgJgBg");
	this.shape_8.setTransform(-77,131);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(202,240,246,0.973)").s().p("AgPAZQgFAAgDgCQgHgIgFgKIAAgJIAAgKQBggjggA4QgFAIgLAKQgEADgHAAQgHAAgKgDg");
	this.shape_9.setTransform(-82.9,140.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(18,25,29,0.129)").s().p("AhZgEICpAAIAKAAIgBAEQgqAFgmAAQg1AAgtgJg");
	this.shape_10.setTransform(-102.5,139.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(111,154,176,0.737)").s().p("ABzAKQgcgBgWgIIgKAAIipAAQgFAAgDgCQgCgCAAgFQCIgHBwAVQABAAAAAFIgKgBg");
	this.shape_11.setTransform(-100,138.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(56,84,101,0.447)").s().p("AgxgKQAlADAgAGIAKABQAKAAAIADQACABAAAFIgKABIgUABQgtAAgYgVg");
	this.shape_12.setTransform(-120.5,136.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(33,56,77,0.357)").s().p("AgngEIBFAAIAKAAIAAAEQgoAFgnAAIAAgJg");
	this.shape_13.setTransform(-109.5,120.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(63,105,142,0.714)").s().p("AAABpQAEh3gOhkQAgBcgSCIIgEABIAAgKg");
	this.shape_14.setTransform(-88.5,105.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CFF8FE").s().p("AgQgLQgCgCAAgFQAnAlgCAAQgBAAgigeg");
	this.shape_15.setTransform(-81.6,102.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(39,70,98,0.475)").s().p("Ag2gEIBjAAIAKAAIAAAEQg3AFg2AAIAAgJg");
	this.shape_16.setTransform(-100,119.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D0F8FE").s().p("AgLgQQgCgEAAgFIAbAzIgZgqg");
	this.shape_17.setTransform(-80.2,86.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(77,155,220,0.98)").s().p("AhyDvQgggGgmgDIAAgFQhRACABhNQBQgtB4gKIAAgFQAoAAAngFIAAgFQA3AAA3gFIAAgFQArAIALgaQABgCAFAAIAFgBQASiIghhcQgFAAAAgBQgFgdAAgeQAFAAABACQBMCSASDJIgBAKQgGAbgXANQgsAZhIgSQgbgHBTgKIAFgKQjMgeiqBGQAUAyBGAFIAAAFIgKgBg");
	this.shape_18.setTransform(-107.1,112);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(83,119,144,0.753)").s().p("AAdBJQgnhCgYhRQAqA+AZBNQACAFAAAFQgFAAgBgCg");
	this.shape_19.setTransform(-94,80.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(82,109,122,0.604)").s().p("AAIAlQgWgbAAgxIAKAAQADAqAOAcQACAEAAAFQgFAAgCgDg");
	this.shape_20.setTransform(-99.1,69);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(50,80,103,0.529)").s().p("AAAAoQgBgugHgrQAaAhgMBBQAAABgFAAIgBgKg");
	this.shape_21.setTransform(-91.6,50);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E4F9FD").s().p("AgDgjIgBgKIAJBbIgIhRg");
	this.shape_22.setTransform(-85.1,51.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(90,140,178,0.906)").s().p("AgdCLQAdAAAdgFQABAAAAgFQAFAAAAgBQAMhCgbghQgFAAgBgCQgmhNgZhaQAFAAACgCQADgDAAgFQAUAeAOAnQABABAEAAQAMBEATAwQAsBzg6AAQgRAAgdgMg");
	this.shape_23.setTransform(-94.5,42.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(91,134,166,0.855)").s().p("AgEAjQgFgjAAgiIAJAAQACAcAGAVQACAFAAAFQAAAFgDACQgCADgFAAIgEAAg");
	this.shape_24.setTransform(-99.5,24.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#567F9A").s().p("AgsAZQAFAAACgDQADgCAAgFIAAgKQAkgHAUgYQADgDAAgFIAKAAIAKAAQAAAFgDADQgkAkgyAZIAAgKg");
	this.shape_25.setTransform(-12,87.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3E6887").s().p("AhFgOIAAgKIAAgeIAKAAQANBzBrgZIAJgBQAAAFgDACQgCADgFAAIAAAKIgKAAIgIAAQhaAAgVhFg");
	this.shape_26.setTransform(-22.5,85.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(135,172,193,0.957)").s().p("AADAhQgPgdgHgmQAKAJATABIAKAAIAAAKIAAAKIgKAAIAAAdIAAAKQgFAAgCgCg");
	this.shape_27.setTransform(-30.5,80.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(21,32,40,0.2)").s().p("AAAA7QgEg7AAg7IAJAAIAABtIAAAKIgFgBg");
	this.shape_28.setTransform(-33,62);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(81,128,160,0.859)").s().p("AAFBoQgOgnAAgyIAAgKIAAhZIAAgKIAAgKIAJAAQAAA8AFA6IAFABIAABQIAAAKQgFAAAAgBg");
	this.shape_29.setTransform(-33.6,66.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6CA6CF").s().p("AAAAxQgEgxAAgxIAJAAIAABZIAAAKIgFgBg");
	this.shape_30.setTransform(-35,63);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D4F6FD").s().p("ABCC2QgyAWgOhFQgfilg2idQBFA6AhBsQAbBTAfBaQANAkgLAAQgFAAgIgGg");
	this.shape_31.setTransform(-48.2,86.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#70A4C6").s().p("AAyBEQhJgXgkhyQAFAFAGADQAEACAFAAQAYAjATAqQABACAFAAQAAAFACABQAjAXANAVQgFAAgFgCg");
	this.shape_32.setTransform(-43.5,80);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#82ABC6").s().p("AgYguIAKAAQANAuAYAiQACADAAAGIAAAEQgfgMgShRg");
	this.shape_33.setTransform(-53,63.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#86ADC2").s().p("AAAAbQgPgUAHgpQAFAAADACQABADAAAFQgGAaAOAHQACABAAAFQAAAFgCAEQgDAGgFAFQAAgFgBgDg");
	this.shape_34.setTransform(-47.7,52.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(156,191,209,0.965)").s().p("AgBAWQgDgCgFAAIgFAAQAZgSgogLQAhADANgPQADgDAAgFIAKAAQAAAFgCAEIgcAyQAAgFgBgDg");
	this.shape_35.setTransform(-47.5,47);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(230,247,250,0.996)").s().p("AA8C7QgFAAgBgBQgUgrgYgkQAAgEgCgFQgIgegTgUQAAgGgDgDQgYgjgNgtQAAgGgCgEQgMglAEg2IAAgKIAAgKQAPgKAJgSQABgBAFAAQAFAKAHAHQADADAFgBQAoANgZARIAEAAQgHArAOATQADAEAAAEQBHB7gLCOg");
	this.shape_36.setTransform(-48.5,63.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(49,83,113,0.604)").s().p("AAAAeQABgogKgdQAeATgQA7QAAABgFAAIAAgKg");
	this.shape_37.setTransform(-53.5,35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(100,153,196,0.961)").s().p("AgYBDIAAgKQAeg3gJheIgBgKQAEAAADACQACADAAAFQAMAcgCAqIAAAKQgHAfAPALQACACAAAFQgFAAgBACQgJASgOAKIAAAKIAAAKQgFAAAAABQgGAPgEAAQgFAAAAgkg");
	this.shape_38.setTransform(-55.1,40.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EBFBFD").s().p("AgSAkQgDgBAAgPIAAg7QBGAOgtBBg");
	this.shape_39.setTransform(-58.4,35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(78,115,140,0.682)").s().p("AgYgQQAYAFARAMQADACAFAAQAAAFgCABQgMAIgKAAQgTAAgGghg");
	this.shape_40.setTransform(-73,43.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(214,244,251,0.992)").s().p("AD9HCQhfkqjQi0IAAgFQg3AgA3A+IAAAKQgggSgohCQgthNg/gIIgKAAQAAgFgDgCQgYgVAHg0QANgMAbACIAKAAQB3Axg6iYQgTgxgMhEQAxAsAEAKQALAZAXgdQAZggAcAWQgcAnAwgJIAHAMQAMAVABghQAEAAACADQADACAAAFQAJAxAngXQACgBAAgFQBCgSAFg/QAFhJBKAOIAAAKQAKBggeA2IAAAKIgFAAQAYB2hPAWQAPCRBBCQQBDCWgRCWQgFAAgBgBgAhakMQASCpgSizIAAAKgACfl6QAAAPACABIAYAEQAshChGgOIAAA8g");
	this.shape_41.setTransform(-76.4,74.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(229,245,249,0.984)").s().p("ABmBuIgGgMQgxAJAcgmQgcgXgZAhQgWAdgKgZQgFgKgxgsQgFAAgBgCQgNgmgVgdQAAgFgCgFQgGgWgCgcIAAgKQBvgiA8BxQAiA7AYBHQAAAUgFAAQgDAAgFgJg");
	this.shape_42.setTransform(-88,31.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DAF6FC").s().p("AANBLQgLgZgwgyQAAgEgCgBQgPgHAHgbIAcgzQACgEAAgFIAxAAIAKAAQAdALgDAnQgGA/gKBMQgNAKgIAAQgMAAADgZg");
	this.shape_43.setTransform(-41.8,54);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(99,128,145,0.725)").s().p("AA3AcQACgugvAHIgKAAIgxAAIgKAAIAAgKQBmgXAQA/IABAJg");
	this.shape_44.setTransform(-39.5,45.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(84,131,167,0.91)").s().p("AAAAoIgKAAIAAgKIAAgUQAQgIgGgfIAAgKQAQAXgHAuIAAAKIgJAAg");
	this.shape_45.setTransform(-33.4,52);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCFBFE").s().p("AgbABQBvgPhvAUg");
	this.shape_46.setTransform(90.3,140.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(78,101,115,0.58)").s().p("AAVASQgegMgUgZQAkAIAUAXQADADAAAFQgFAAgEgCg");
	this.shape_47.setTransform(79.5,100);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(84,140,179,0.886)").s().p("AgBBIQgxg8gYhWQAiBaA/gIQAOgBARgMIALgJIAKAAQAAAFgCAFQgVAzgvAcQgFAAgBgDg");
	this.shape_48.setTransform(92,111.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(86,140,177,0.898)").s().p("Ag2AyIAAgKIAAgKQAsgsA4ghQAEgCAFAAQAAAFgDACQg0AqgsAyIgKAAg");
	this.shape_49.setTransform(104,105);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(41,62,78,0.388)").s().p("AgFAjIAAhPIAJAAIAAAKQAHA0gQAbIAAgKg");
	this.shape_50.setTransform(119.1,109.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(73,156,227,0.961)").s().p("AhgCKQgPgQgxgFQgTgCgZAAQDGgMBghrIgFAAQhFgVgcgNQgCgBAAgFQA8giAhhAQABgCAFAAQgCBHA1ARQAxARAUAsQAAAFgDADQg0BHhaAhQhCAZhYADQAAgFgCgCg");
	this.shape_51.setTransform(105,132.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(96,143,179,0.902)").s().p("AgYBBIAAgKIAAhZQAUgPAUgNQAEgCAFAAIAAAKQAAAFgCADQgNAMgOAKIgKAAIAABPIAAAKIgKAAg");
	this.shape_52.setTransform(120,107.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(79,144,191,0.835)").s().p("AhKAAQBEgGBHgDIAKAAIAAAFQhKAKhLAEIAAgKg");
	this.shape_53.setTransform(88,148);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(73,129,168,0.71)").s().p("Ag7gEIBtAAIAKAAQAAAEgBAAQgeAFgZAAQgjAAgcgJg");
	this.shape_54.setTransform(60.5,151.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(75,146,197,0.859)").s().p("AhFAAQA5gMBIADIAKAAQAAAFgBABQhAANhKAAIAAgKg");
	this.shape_55.setTransform(73.5,150);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(65,129,173,0.718)").s().p("AiLgEIENAAIAKAAIAAAEQiMAFiLAAIAAgJg");
	this.shape_56.setTransform(14.5,151.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(78,166,236,0.992)").s().p("Ag7AVIgeAAIAAgFQhQgFhQAAIAAgKQDxgcD4AJIAKAAQAAAFgDADQgCACgFAAIAAAJIgKAAIkNAAIAAAKIgKAAIAAAKIgKAAg");
	this.shape_57.setTransform(4.5,150.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5BADE6").s().p("ACRAFIkrAAIAAgJQCaAACbAEIAAAFIgKAAg");
	this.shape_58.setTransform(-12,141.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D2F8FD").s().p("AgIgEQgDgGgFgFQA5ARgpAOg");
	this.shape_59.setTransform(21.1,109.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CDF9FE").s().p("AgZALQBmg3hmA8g");
	this.shape_60.setTransform(31,120.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#578AAB").s().p("AgNgeQALABACgJQACAhAJAhQAAABAFAAQAAAFgCABQgHAEgGAAQgXAAAJhFg");
	this.shape_61.setTransform(31.8,106.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CBFAFE").s().p("AgfABQCAgOiAATg");
	this.shape_62.setTransform(77.7,142.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CCF9FE").s().p("AAIAFIgagGQgBAAAAgFIAjALQACAAABABQABAAAAABQAAAAAAAAQAAAAAAAAIgMgCg");
	this.shape_63.setTransform(70.5,143.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CDFBFE").s().p("AiqgEQDFgKCQAUIgMgBIgKAAIi9AAIgKABQgVACgSAAQgvAAgigMg");
	this.shape_64.setTransform(35.6,146.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(156,196,200,0.804)").s().p("ABaAFIi9AAIAAgJIC9AAIAKAAIAAAJIgKAAg");
	this.shape_65.setTransform(41.5,147.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(29,37,40,0.165)").s().p("ABkAFIjRAAIAAgJIAKAAIC9AAIAKAAQAFAAADACQACACAAAFIgKAAg");
	this.shape_66.setTransform(41.5,148.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3583C8").s().p("Ag5BkIAAgFQibgFiaAAIAAAKIgKAAQkcgBjFhZIAAgKQApALAAgeIAAgKIAAgKQA2APAkAhQAgAdA6ABQFWAIEzgKQAjgBAZgtQBQAFA6gUQABAAAAgFQAkhuBIA/QADACAAAFQgjA7BVAcQAFACAEAAIBkAAIAKAAQBbhJCBATIABAFQBFhGBLAoIgFAAQhPAuBDAbQACABAAAFQmiBCnXAOIgKAAg");
	this.shape_67.setTransform(9.2,132);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CFF8FC").s().p("AgqBTIgRgbQAzhTA9hJQACgDAFAAQg0BigZBIQgCAEAAAFQApAcgKAAQgIAAgugVg");
	this.shape_68.setTransform(40.5,110.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5A9BCA").s().p("AAAAnQgEgnAAgnIAJAAIAAAKIAAAKIAAAxIAAAKIgFgBg");
	this.shape_69.setTransform(50,111);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#406F95").s().p("AgKAoIAAgKIAAgKIAAgKIAAgKQAQgHgCggIAFAAIABAKQAGAfgQAIIAAAUIAAAKIgKAAg");
	this.shape_70.setTransform(51.6,105);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#223039").s().p("AgaAfIAAgKIAAgUQARgHgGggIgBgKIAKAAQgJAiAcgEIAKAAIABAKQALA5gYAAQgNAAgYgSg");
	this.shape_71.setTransform(54.2,105.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5993BA").s().p("AhegPQBQgSBjAIIAKAAQAAAFgDACQg2AvguAAQguAAgogsg");
	this.shape_72.setTransform(61,118.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D1F7FE").s().p("AAlAsQAOhYheAJQgEAAgFgKQCMg4guCXQgDALgCAAQgBAAABgRg");
	this.shape_73.setTransform(73.8,107.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#468EC7").s().p("AAKAUQAOgUg3gKIAAgKQBggcgzBKQgBADgFAAQAAgFACgEg");
	this.shape_74.setTransform(71.7,110.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#426780").s().p("AhsBJQgEgIAAgKIAAgKIAAgxIAKAAQBFAygShaIgBgKQARACgCgWIAFAAQgLA9AgAQQAEACAFAAQAeAVAlgZQACgBAAgEQA4AKgNAUQgDAEAAAFIAAAKQgDARgRADIgKgBQhigHhRASQgFAAgBgCg");
	this.shape_75.setTransform(61.7,109.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4F92C2").s().p("AgiAAQAiAAAZgHQAFgCAFAAQAAAFgCACQgUAMgSAAQgPAAgOgKg");
	this.shape_76.setTransform(65,110);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(57,83,99,0.475)").s().p("AhPAAQBGgOBZAJIAAAFIgKAAQhRgChEAMIAAgKg");
	this.shape_77.setTransform(68.5,98.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(58,86,106,0.8)").s().p("AAYAUQgYgFgYAAIgKAAIAAgKQAdAEgEghIAFAAQgJAmAmgIIAKgBQAAAFgCAEQgDAGgFAFQAAgFgBAAg");
	this.shape_78.setTransform(56,99.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(34,46,54,0.263)").s().p("AAeAFIhFAAIAAgJQAnAAAoAEIAAAFIgKAAg");
	this.shape_79.setTransform(51.5,89.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(93,144,179,0.937)").s().p("AgnAjIAAgKIAAgKQAjgdAkgcQADgCAFAAIAAAKQAAAFgCADQgmAkgnAjIAAgKg");
	this.shape_80.setTransform(45.5,78.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D6F6FC").s().p("AgTgRQBJAPg6ATIgGABQgPAAAGgjg");
	this.shape_81.setTransform(74.4,70.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(90,141,180,0.922)").s().p("AiLAuIAAgKQBehlC4ALIgJAKQgXAXglAIIAAgPQh9ANhUBHIAAgKg");
	this.shape_82.setTransform(63.4,69.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(97,130,150,0.753)").s().p("AAHAhQgPgTgGgcQAQABgCgVIAFAAQgFAnANAVQACAEAAAFQgFAAgDgCg");
	this.shape_83.setTransform(69,72.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(81,110,127,0.784)").s().p("AgGAMQgDgCgFAAQAAgFgCgDQgDgCgFAAIAAgJQAaADAOgLQAEgCAFAAQAAAFgCAEQgKASgRAMQAAgFgCgDg");
	this.shape_84.setTransform(42,95);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3C5E77").s().p("AgdAjIAAgKQAVggAagdQACgDAAgFQAFAAADACQACADAAAFQAAAFgCADQgaAmgfAhIAAgKg");
	this.shape_85.setTransform(38.5,100.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5683A8").s().p("AgTAUQAWgRAMgeQAAgCAFAAIAAAKIAAAKQAAAFgDAEQgNATgXALIAAgKg");
	this.shape_86.setTransform(33.5,92);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(23,44,62,0.988)").s().p("AgTBZQgIgigEghQABgFgCgHIAAgCIgBgIQAAgEgBAAQgPgEAGgVQAFgFADgGQACgEAAgFQAYgLAMgUQADgEAAgFQAFAFAGADQAEACAFAAQAFAKAHAIQADACAFAAIAAAKQgFAAgFgBQgqgPgHA4QgIApAUAQQACACAFAAIAAAKQABAQgUgGIAAAKIAAAKQgFAAgBgBg");
	this.shape_87.setTransform(34.9,100);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(77,123,154,0.878)").s().p("AgSAwQgGgDgFgFIAAgKIAAgKIAAgKIAzg4QADgDAFAAIAAAKQAAAFgCAEQgQAcgVAWIAAAUIAAAKQgFAAgEgCg");
	this.shape_88.setTransform(38.5,87);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#527794").s().p("AgTAyIAAgKIAAgKQASgkAQgpQAAgCAFAAIgBAKQgHAtgVAiIAAAKIgKAAg");
	this.shape_89.setTransform(22.5,85);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4C84B0").s().p("AgYgNQAaAVAIgoQAAgBAFAAIAKAAQAAAFgBAFQgSA5gMAAQgLAAgHgvg");
	this.shape_90.setTransform(19,93.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D2F6FD").s().p("AGQCiQgYhBguAtIAAgKQAAgZgUgFQhmgrBngkQAEgBAFAAQA0BbgHhvIgFAAQgnhQhbAUIgKABQg7AogxAzQgHAIgPAAQg1g5hfgRQgBAAAAgFQBJgeg+hdQgIgKARgRQAeBeA9A/QADADAFAAICyhUQACgBAAgFQA8AAA7AFIABAFQAqBrBHBPQACADAFAAQgQAUgjAxQgbAlgGAAQgFAAAJgagAnSA7QgKgKgDgRQAqhYgTB9g");
	this.shape_91.setTransform(-29.5,100.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4B708C").s().p("AAYAhQgUgpghgaIAKAAIAKAAQAlANACAuIAAAKQgFAAgBgCg");
	this.shape_92.setTransform(13.5,88.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#42677F").s().p("ABkAUIgKAAQgFAAgDgCQhNgxheApIgKAAIgKAAIAAgKQB4guBhA8QACABAAAFIgKAAg");
	this.shape_93.setTransform(1.5,83);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D8F4FC").s().p("AgbgQQA7hGgEBtQgBAKgQAIQgIADgFAAQgaAAABg8g");
	this.shape_94.setTransform(14.2,69.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2A4E64").s().p("AARASQgRgUgYgRQANAAAKADQATAGAFATIABACIABAJQgFAAgDgCg");
	this.shape_95.setTransform(5,72);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#34434D").s().p("AgYATQAnAAgFgxIAFAAQgHAkAOAPQADADAAAFIgKABIgPABQgSAAgGgMg");
	this.shape_96.setTransform(-1,66.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5283A7").s().p("AgNAZIgBgKIAAgCIAKAIIApAcQAdAUAUgOIAAAKIAAAKQgFAAgEABQgXAJgRAAQgrAAgHg8gAg/gOQgFAAgCgDQgDgCAAgFQAAgFgCgDQgPgPAHglIAKAAQAJAqAYAfQgKgEgNABg");
	this.shape_97.setTransform(8.8,71.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A0CADF").s().p("AAVBRIgpgcIgLgIQgGgUgTgFQgYgegJgqIAAgKQAhgHATgVQADgCAFAAIBFAAIAKAAQBEBIguBiQgCAEAAAFQgJAGgKAAQgOAAgQgMgAAKgCQgCBLApgTQAQgHAAgLQADhCgVAAQgOAAgXAcg");
	this.shape_98.setTransform(10.5,68.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#42667F").s().p("AgIBfIAAgKQAAgFACgEQAuhihEhIIAAgKQBjBThIB8QgCACgFAAIAAgKg");
	this.shape_99.setTransform(18.3,68.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6592B6").s().p("AAeAFIhFAAIAAgJIA7AAIAKAAIAKAAIAAAJIgKAAg");
	this.shape_100.setTransform(11.5,58.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#46657A").s().p("AhFAjIAAgKIAAgKQAhgHAPgXQACgEAAgFQAkAHAQgPQACgCAFAAQADARAbgCIAAAFIgKAAIg8AAIAAAKQgEAAgDACQgTAUghAHIAAAKIgKAAg");
	this.shape_101.setTransform(7.5,59.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5C829D").s().p("AgJAZIAAgdQAQgDgCgbIAFAAIAAAKQAAAngTAUIAAgKg");
	this.shape_102.setTransform(25.5,76.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#48687C").s().p("AgJAeIAAgnQAQgDgCgbIAFAAIAAAKQACAugVAXIAAgKg");
	this.shape_103.setTransform(27.5,69);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(70,83,88,0.42)").s().p("AAPAUQglgCgCglQATAUAcANQACABAAAFIgKAAg");
	this.shape_104.setTransform(38,52);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(71,114,146,0.91)").s().p("AgbBOQgCgDAAgFQAYg4AOg/IABgKQAQABgBgVIAFAAIAAA8IAAAKQgFAAgCACQgUAUgWBDQgFAAgDgCg");
	this.shape_105.setTransform(32.5,51);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5A89AB").s().p("AARAoQg5gCAShNIAKAAQgJBOAngRQAEgCAFAAIAAAKIAAAKIgKAAg");
	this.shape_106.setTransform(12.7,47);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#9BC1D9").s().p("AgYgaIAAgKQBDgIgWBLQgBACgFAAQgFAAgEACQgGADgFAAQgaAAAHhAg");
	this.shape_107.setTransform(13.9,45.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(41,67,86,0.486)").s().p("AAAAZQAGgkgQgNIAAgKQAgAMgRA3QgBACgEAAIAAgKg");
	this.shape_108.setTransform(132.5,92.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(80,126,160,0.843)").s().p("AgyAyIAAgKQBQgJAIhQIABgKQARANgGAlIgBAJQAAAFgDADQgjAng9ANIAAgKg");
	this.shape_109.setTransform(127.6,96);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(89,136,168,0.871)").s().p("AgnAPIAAgKQApgHAdgTQAEgDAFAAQAAAFgCACQgiAbgrAPIAAgKg");
	this.shape_110.setTransform(119.5,93.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(90,140,181,0.906)").s().p("AgdAFQAZgJAYgJQAFgBAFAAQAAAFgDACQgTAUglACIAAgKg");
	this.shape_111.setTransform(112.5,97.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(55,77,92,0.463)").s().p("AAAAoQgEgoAAgnIAJAAIAABFIAAAKIgFAAg");
	this.shape_112.setTransform(84,87);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(127,179,211,0.961)").s().p("AgiA3IAAgKIAAhFIAAgKQARgDAHgPQABgCAFAAIAJAAQAAAFgCAEQgFAXgWAIQgPBEBAgIIAKgBQAAAFgBAAQgdAFgdAAIgKAAg");
	this.shape_113.setTransform(88,85.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(82,115,140,0.698)").s().p("AgFAyIAAgKIAAhZQAQAhgHA4IAAAKIgJAAg");
	this.shape_114.setTransform(92.1,71);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(123,167,194,0.914)").s().p("AgYAUIAAgKQAUgKAQgMQADgCAAgFIAKAAIgBAJQgHAbgfADIgKAAg");
	this.shape_115.setTransform(90,78);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6BA7D1").s().p("AAjAZQgMg9g+AhIAAgKQBDgkALBBIABAKQgFAAAAgBg");
	this.shape_116.setTransform(90.5,62.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(84,138,180,0.918)").s().p("AA8BCQAHg6gSgfIgKAAQhMgDgrBSIAAgKIAAgKQAjgjAXgtQACgEAAgFQAFgFAGgDQAEgCAFAAQA/ghALA+QAAABAFAAIABAKQAGBCgbAhIABgKg");
	this.shape_117.setTransform(86.5,68.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(142,209,247,0.996)").s().p("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");
	this.shape_118.setTransform(2.5,98);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(80,133,174,0.918)").s().p("AiQBkQAeAAAdgFQABAAAAgFQBshaBjhmQACgCAAgFIAKAAIAKAAQgRAwgjAfQglAfgbAnQgxBGhEAAQgbAAgdgKg");
	this.shape_119.setTransform(100,81);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(110,157,188,0.937)").s().p("AAAAZIgJAAIgKAAIAAgKQAagIAIgeQAAgBAFAAIAAAUIAAAJIgFAAQABAUgOAAIgCAAg");
	this.shape_120.setTransform(114.5,67.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(70,87,95,0.42)").s().p("AgEAtIAAgUIAAgKIAAhFQAQArgMBBQAAABgEAAIAAgKg");
	this.shape_121.setTransform(117,62.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(214,242,249,0.988)").s().p("AkhgiQAHgKgQgHQgJgEASggIAAgKQBPhQBwgwQAEgCAFAAQA2AeBVADQARAAgHAlQA7AcA/hCQBJhMBFhRQBRhhBpAWQAJCqh1BdQgCACAAAFQADA+AiAfQADACAAAFIAABFIAAAKQgFAAgBABQgHAfgbAIIAAAKQAAAFgDADQhiBlhtBbIgKABQhBAJAPhGQAVgIAHgWQACgFAAgFQAggDAHgbIABgKQAbghgHhDIAAgKIgBgKQgLhBhEAkIAAAKQgFAAgEACQgGADgFAEQgWAXgLgIQgWgQgQAAQhygEg2gOQjmB4haD9QgaBLgsABQBHkSCVjAg");
	this.shape_122.setTransform(72.5,62.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(51));

	// moving
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(-27.4,-35.8,1,1,0,0,0,85,133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:85.1,x:-27.3,y:-34.9},0).wait(1).to({y:-34.1},0).wait(1).to({y:-33.2},0).wait(1).to({y:-32.3},0).wait(1).to({y:-31.5},0).wait(1).to({y:-30.6},0).wait(1).to({y:-29.8},0).wait(1).to({y:-28.9},0).wait(1).to({y:-28},0).wait(1).to({y:-27.2},0).wait(1).to({y:-26.3},0).wait(1).to({y:-25.4},0).wait(1).to({y:-24.6},0).wait(1).to({y:-23.7},0).wait(1).to({y:-22.8},0).wait(1).to({y:-22},0).wait(1).to({y:-21.1},0).wait(1).to({y:-20.2},0).wait(1).to({y:-19.4},0).wait(1).to({y:-18.5},0).wait(1).to({y:-17.7},0).wait(1).to({y:-16.8},0).wait(1).to({y:-15.9},0).wait(1).to({y:-15.1},0).wait(1).to({y:-14.2},0).wait(1).to({y:-13.3},0).wait(1).to({y:-12.5},0).wait(1).to({y:-11.6},0).wait(1).to({y:-10.7},0).wait(1).to({y:-9.9},0).wait(1).to({y:-9},0).wait(1).to({y:-8.2},0).wait(1).to({y:-7.3},0).wait(1).to({y:-6.4},0).wait(1).to({y:-5.6},0).wait(1).to({y:-4.7},0).wait(1).to({y:-3.8},0).wait(1).to({y:-3},0).wait(1).to({y:-2.1},0).wait(1).to({y:-1.2},0).wait(1).to({y:-0.4},0).wait(1).to({y:0.5},0).wait(1).to({y:1.4},0).wait(1).to({y:2.2},0).wait(1).to({y:3.1},0).wait(1).to({y:3.9},0).wait(1).to({y:4.8},0).wait(1).to({y:5.7},0).wait(1).to({y:6.5},0).wait(1).to({y:7.4},0).wait(1));

	// body
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(28,25,22,0.969)").s().p("AgtAGQAagHAfgEIAKAAQANAFALAGg");
	this.shape_123.setTransform(16.3,-153.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_123).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-168.8,267.2,322.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shirlyend();
	this.instance.parent = this;
	this.instance.setTransform(79.8,94.7,0.662,0.662,0,0,0,0,0.1);

	this.instance_1 = new lib.shirlybody();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.9,201.7,1,1,0,0,0,62.1,46.9);

	this.instance_2 = new lib.shirlyclosed();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78.9,95.6,0.959,0.959,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{x:79.8,y:94.7}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{x:79.6,y:95.3}},{t:this.instance_2}]},42).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-0.6,159.2,249.2);


(lib.shirly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1_1();
	this.instance.parent = this;
	this.instance.setTransform(80,143.6,1,1,0,0,0,19,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:143.5},0).wait(2).to({y:143.7},0).wait(1).to({x:79.9,y:143.8},0).wait(1).to({y:144},0).wait(1).to({y:144.1},0).wait(1).to({x:79.8,y:144.2},0).wait(1).to({y:144.4},0).wait(1).to({x:79.7,y:144.5},0).wait(1).to({y:144.7},0).wait(1).to({y:144.8},0).wait(1).to({x:79.6,y:144.9},0).wait(1).to({y:145.1},0).wait(1).to({y:145.2},0).wait(1).to({x:79.5,y:145.4},0).wait(1).to({y:145.5},0).wait(1).to({x:79.4,y:145.7},0).wait(1).to({y:145.8},0).wait(1).to({x:79.5,y:145.6},0).wait(1).to({y:145.3},0).wait(1).to({x:79.6,y:145.1},0).wait(1).to({x:79.7,y:144.8},0).wait(1).to({y:144.6},0).wait(1).to({x:79.8,y:144.4},0).wait(1).to({x:79.9,y:144.1},0).wait(1).to({y:143.9},0).wait(1).to({x:80,y:143.6},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.tteth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.1,143.8,1,1,0,0,0,19.1,6.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#868B8E").s().p("AgEAtIAAgKIAAhPIAJAAIAABPIAAAKIgJAAg");
	this.shape.setTransform(24.5,254.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#939494").s().p("AgEBQIAAipQAQBOgMBlIgEAAIAAgKg");
	this.shape_1.setTransform(26.5,222.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0C89B").s().p("AAyDUIhtAAIAAgKIAAhkQASigAWiaIATAGQA4Ajg9BXQgdAqAFBKQAvBJAjBMIAHAfIgKAAg");
	this.shape_2.setTransform(34,238.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E717B").s().p("AgFAjIAAhPIAJAAIAAAKQAHA0gQAbIAAgKg");
	this.shape_3.setTransform(41.6,206.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#787C89").s().p("AgxgEIBZAAIAKAAQAAAEgBAAQgaAFgVAAQgdAAgWgJg");
	this.shape_4.setTransform(74,198.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#856B51").s().p("AAAAnQgFgnAAgnQAQAWgHAvIAAAKIgEgBg");
	this.shape_5.setTransform(141.6,253.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8E8A89").s().p("AAAAoQgFgoAAgnQAQAXgHAuIAAAKIgEAAg");
	this.shape_6.setTransform(144.6,247.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9B9FB7").s().p("Ag+gCQgCgBAAgFQBhACAgADIAAAEQgdAIgdAAQgjAAgigLg");
	this.shape_7.setTransform(86.5,254.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7B7A84").s().p("AAAAtQgEgtAAgsIAJAAIAABPIAAAKIgFAAg");
	this.shape_8.setTransform(114.5,218.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8F8F8F").s().p("AAAAoQgFgoAAgnQAQAWgHAvIAAAKIgEAAg");
	this.shape_9.setTransform(142.6,227.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7C996").s().p("ABaDXIhtAAIgBgJQguitghi7QBOgXA+gjQAEgCAFAAQASAbgDA1IAFAAQAGB9ANByIABAKQAAAoAFAnIAFABIAAAKIAAAKIgKAAg");
	this.shape_10.setTransform(132,237.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A58963").s().p("AADAtQACg0gQgbIAAgKQAgARgMA+IgBAKg");
	this.shape_11.setTransform(138.2,219.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A6A5A4").s().p("AAAAnQgEgnAAgnIAJAAIAABFIAAAKIgFgBg");
	this.shape_12.setTransform(147.5,186.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C583A").s().p("ABDBVQgrhphfg3IAAgKQAvAWAugZQAVgLAHANQADAGAFAFIABAKQATBxgKAuQAAgFgBgEg");
	this.shape_13.setTransform(138.2,190);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A87B56").s().p("AgDASQgFgVgCgdQAnAHgdA6g");
	this.shape_14.setTransform(153.1,155.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#877865").s().p("Ag2gEIBjAAIAKAAQAAAEgBAAQgcAFgXAAQggAAgZgJg");
	this.shape_15.setTransform(82.5,167.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BA3F1A").s().p("AiVgWQB9gLBUAUIAKABQAgAWAvALQABABAAAFIgKAAIgfAAQiaAAhogxg");
	this.shape_16.setTransform(81,138.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#81471D").s().p("AgSAIQBGg2g+A9QgDADgFAAIAAgKg");
	this.shape_17.setTransform(91.9,125.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#864B24").s().p("AgGAcIAAhGQAcA6gcAbg");
	this.shape_18.setTransform(91.7,110.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#041A06").s().p("AgagJQBlgXhYAwQgEACgDAAQgKAAAEgbg");
	this.shape_19.setTransform(110.7,100.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#937D5E").s().p("AgsgEIA7AAIAKAAIAKAAIAKAAQAAAEgBAAQgYAFgTAAQgaAAgTgJg");
	this.shape_20.setTransform(111.5,108.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3C2C1D").s().p("ABGAeIg8AAQgFAAgFgBQgvgQggggIAAgKQAgAbAvALIAKABQARARArgGIAKgBIAAAKIgKAAg");
	this.shape_21.setTransform(106,105.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#644731").s().p("AgJBaQgFhGAAhFQAQgDgFgbIgBgKQAQgBgCAVIAFAAIgBAKIgSCVIgFAAg");
	this.shape_22.setTransform(148.5,142.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6A4122").s().p("ABaEEIAAAKQhTgMhNgDQijgHgkh2QEChmBzj1QABgCAFAAQA8gUAzgcQAEgCAFAAQgeDGBACLQABACAFAAIAABaIAAAKQgVAxgaAqQgDAEAAAFQgFgFgDgGQgHgNgWALQgZANgYAAQgWAAgWgKg");
	this.shape_23.setTransform(122,155.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#684D46").s().p("AAOAqQgTgqgQgxQA3AsgQA3g");
	this.shape_24.setTransform(152.2,106.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7B5134").s().p("AAaEPQhDg1gOhpIATiVIABgKIABgKQAQhlgRhZQAigeANBHQATBggRh/QABgzATAVIAFgFIAFAFQAXBNgWBKQgBAEAAAFIgBAKQgtDPAkCiQgFAAgDgCgAgICuIADAOQAdg6gngHQACAcAFAXg");
	this.shape_25.setTransform(153.6,140.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DBB79B").s().p("Ag4AqQAQACgBgWIAEAAQA9gNAXg2QABgCAEAAIAGAAQgaBfg6AAQgOAAgQgGg");
	this.shape_26.setTransform(139.8,123.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C38869").s().p("AgsA3IAAgKQAahXAhgWIAFAEQAXATACAlQgFAAgBACQgWA1g9AOIAAgKg");
	this.shape_27.setTransform(140.5,118.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#532805").s().p("AgOAFQAQgDgCgaIAFAAIAKAAQAAAFgCAFQgNAngGAAQgGAAgCgUg");
	this.shape_28.setTransform(61.5,168.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7CA98").s().p("AjYAIIgBgJQB2ANgDiPIAGAAQB1AbBtAMQADAAABAMQACAUAQgBQAYAkAqAOIgGAAQhABfh8AmQgBABAAAFQgiAEgeAAQiWAAgZh8g");
	this.shape_29.setTransform(78.8,182.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D5D9ED").s().p("AEiGGIqdAAIAAgoIABgTQg/gxgwg+IAAgKIAAhaQBThqAKitQABgsgYAYIgKAAIAABQIAAAKQAAAPgGADQhHAghJhQQAah8A9hXQADgEAAgFQBUgLBMgSIAKgBQASAqAUAnQACAEAAAFQAvArBJAQIAKABQAlASA+gNQABAAAAgFQCugjBOiFQACgCAFAAQB2gEARAsIgFAAQg2BrBwhkQACgCAAgFQBAgJAdAbQACACAFAAQA3BaAYB4IABAKQhjBHiNAOIAAgPQgWizgICVIAAAKIgKAAQAAAtAFAsIAFAAQAFAAADADQA8AxgIB2QgFAAgBACQgZBXgnBHIAAAUIAAAKIgKAAgAglFQQA8AVBDgRIAAgFQgggDhhgCQAAAFACABg");
	this.shape_30.setTransform(84,220.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E6E8E7").s().p("AgHAaQgDgCAAgFIAAgKIAAgdQAkgcgZBDQgBAFAAAFQgFAAgCgDg");
	this.shape_31.setTransform(28.1,187.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BABCBE").s().p("AgJgcIAJAAQAAAFADACQACADAFAAIgBAJQgJAmgFAAQgFAAABg5g");
	this.shape_32.setTransform(27,192.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#797774").s().p("AAAAyQgEgyAAgxIAJAAIAABZIAAAKIgFAAg");
	this.shape_33.setTransform(0.5,154.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#471F05").s().p("AAAAVQgDgGgFgFIAAgKQAYhGgKBjIgFABQAAgFgBgEg");
	this.shape_34.setTransform(21.9,167.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4F2407").s().p("AgdBTIAAgeQAzg7gMhQIAAgKQAWgKgCBGIAAAKQghBCgaA6g");
	this.shape_35.setTransform(33,150.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4A250C").s().p("AhMB7QBrhsAViNIABgKQAiAKgNA7IgBALQhPB8hGBFg");
	this.shape_36.setTransform(24.7,133.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7A4C29").s().p("Ah+F+QghguAFhWQAegeAAg8IAAgKIAFAAQALhlgaBHIAAAKIgBAKQgQBnhTAlIgFAAQgBiVhAhRIAAgKIAAhtIC8kjQACgEAAgFQAYgGAGAkIAJgPQASgjAXAAQAwAzAOBhQAJA8AgAvQBcCGByBuIgFAAQACAbgRADQAGAvAXhEQABgEAAgFQAaAEgIAkQgFAcgTALQiBBMiuAZIAAgKQgKhfAKhzQgFAAAAACQgvChgwCdQAAgFgCgDgAgEiVIABAKQALBQg0A7IAAAeIAAAPQAbg5AghDIAAgKQACg9gQAAIgFABgAgsldQgWCPhsBrIAAAPQBHhFBPh+IABgKQANg7gigLIAAAKg");
	this.shape_37.setTransform(34.5,155.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4D2E1F").s().p("AgnALIAAgKIAAgJQAbg9AyA2QACACAAAFQgXAAgSAiIgIAPQgHgjgXAFg");
	this.shape_38.setTransform(27,117.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#54515A").s().p("AAAAxQgFgxAAgxQAQAhgHA4IAAAKIgEgBg");
	this.shape_39.setTransform(20.6,95.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2F0A04").s().p("AgiAkIgKAAIgKAAQAAgFgBAAQhNgQg+gcIgKABQgdAEAJgjQAjgMAlAeQADACAFAAQBzA3CugGIAKAAQB5gMhRAfQgFABgFAAIgKAAQggACgeAAQhQAAhDgMg");
	this.shape_40.setTransform(80.5,138.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#985B35").s().p("AhUgjQAighALA8QAAADAIAGQAuArBGgUIAAAKQgFAAgFABQggANgbAAQhFAAgfhTg");
	this.shape_41.setTransform(81.5,124);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0B1A0C").s().p("AgVgRIAJAAQAPAAANgEQABgBAAgFIAGAAQgBA3gMAAQgKAAgVgtg");
	this.shape_42.setTransform(64.3,93.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D1E9DB").s().p("AgJAKQgPgDAGgVIAKAAIAJAAIAKAAIAKAAIAAAKIAAAJQAAAFgCABQgNAEgOAAQAAgFgBAAg");
	this.shape_43.setTransform(63.9,89.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D3825").s().p("AhogRQAFAAACgCQADgDAAgFQAYAaAtAIQABAAAAAFQBGAHAygPQAEgCAFAAIAAAKQAAAFgBABQgqAKgkAAQhMAAg2gtg");
	this.shape_44.setTransform(64.5,99.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E9F2E7").s().p("AgRA7QAAgFgBAAQgtgJgYgaQAAgFgCgBQgZgMgDgfQAUgPAWgNQADgCAFAAQAfANAPA/QAKAvAugOQAvgPgKhAQAwASgDA9IgFAAQgFAAgEACQgiAKgtAAQgUAAgVgCg");
	this.shape_45.setTransform(63.8,94.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3C644B").s().p("AgYAZQgPg/gfgMIAAgKQAjAAAjAFIAAAFIgKAAIgKAAQgGAVAPAEQABAAAAAFIgKAAQAsBeAAhoIgFAAIAAgKIAAgKQAVAOAcAKQABABAAAFQAKBAgvAOQgLADgJAAQgcAAgIgkg");
	this.shape_46.setTransform(64.1,93.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1F110B").s().p("ACCBEIAFAAQADg/gwgQQAAgFgBgBQgcgKgVgOIgKAAIgKAAIAAgFQgigFgjAAIAAAKQgFAAgDACQgWANgUAPQADAfAZAMQACABAAAFQAAAFgCACQgDADgFAAQgFAAgCgDQgqgmgVg6QBcgtCAAiIAJABQBXAvgVBYQgBAEgPAAIAAgKg");
	this.shape_47.setTransform(62,92.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#54301B").s().p("AAOAOQgrgQgwAKQguAKgagLQAcgVApgMQABgBAAgFQCUgIBOA8QADACAAAFQgSAHgYAAQgoAAg2gUg");
	this.shape_48.setTransform(65,78.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7D6D58").s().p("AAAA2QgEg2AAg2IAJAAIAABjIAAAKIgFgBg");
	this.shape_49.setTransform(36.5,103.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#864328").s().p("AgYAHQAPgTAMgVQACgEAAgFQAKAKAIAMQACADAAAFQgVgGgEAPQgOAugGAAQgFAAABgkg");
	this.shape_50.setTransform(30.5,91.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#725A40").s().p("AAAAtQgEgtAAgsIAJAAIAABPIAAAKIgFAAg");
	this.shape_51.setTransform(23.5,92.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CE8B68").s().p("AAZCKQhHg6AKiLQAWgWgCgwIAAgKQAMAhAPAcQACAEAAAFQAAAFgCAEQgMAVgPAUQgCBMAZhXQAFgPAVAGQAKBKgKBfIAAAKQgFAAgDgCg");
	this.shape_52.setTransform(29.7,94.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E6BE9A").s().p("AgxARIAAgKIAAhPIAAgKIAAgTQAOglAagSIAAAEIAAAKQADAwgXAWQgKCLBHA6QADACAFAAQgGAWAMAHIAEACQhWgEgNiJg");
	this.shape_53.setTransform(29,95.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#725955").s().p("AgdAjQAbhIAggMIAAAFQgXA9gkAhg");
	this.shape_54.setTransform(70,31.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#745B57").s().p("AgbAEQBvgbhvAgg");
	this.shape_55.setTransform(66.8,21);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#785F5A").s().p("AhPAPQAvgvBmAIIAKAAQgEAghfACQgKAAgRAKQgKAGgHAAQgKAAgGgLg");
	this.shape_56.setTransform(61,17.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4A302A").s().p("AjCD+IAAAFQhTChgRjJIAAgKQCbjvCTj8QARgcAbgYQBQhKCFAcQgJBYAmB6QABAFAAAFQh+Eaj9COIAKgFQApAQgoBKIgVAoQgohQg8g3gADXiWIAAAPQAlghAXg+IAAgFQghAMgbBJgAC5kiIAAAFQA9gSgFAAQgFAAgzANgABLk2QAKATAXgOQARgKAKgBQBggBAEghIgKgBIgbgBQhSAAgpAqg");
	this.shape_57.setTransform(45.5,50.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#989A98").s().p("AAeAFIhFAAIAAgJQAnAAAnAEIABAFIgKAAg");
	this.shape_58.setTransform(66,7.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#644B46").s().p("AAPAaQgagZgSgeQBUAtgjAOg");
	this.shape_59.setTransform(150,63.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EAF0EA").s().p("AhLAnIAKAAQBfAGgBhfIAFAAQAFAAADACQBWBLiFAWIgKAAQgMACgJAAQgaAAgNgMg");
	this.shape_60.setTransform(114.6,102.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DDE8E6").s().p("AgOgPIATAAIAKAAQAAAFgCAFQgJAVgFAAQgIAAgFgfg");
	this.shape_61.setTransform(109.5,97);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#43654F").s().p("AgYA3QAAgFgCgCQgpgZgHg5IAAgKQAgAHALgPQACgCAFAAQAJA4ASgvQACgEAAgFQAlACAfAMQACABAAAFIgFAAQABBZhUAAIgLAAgAgYgOQgFAiASgJQA7ghgbAAQgNAAggAIg");
	this.shape_62.setTransform(110.5,100.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EAF1EA").s().p("AAoAtIgKgBQgvgMgggbIAAgJIAAgKQAXgMATgPQADgDAEAAQAHA5ApAZQACACAAAFIgKAAg");
	this.shape_63.setTransform(103,101.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1F130A").s().p("AAZBQIgKAAIAAgKQCGgVhWhLQgDgDgFAAQAAgFgCAAQgfgMgkgDIgKAAIgUAAQgFAAgCADQgLAOgggHIAAAKQgFAAgDADQgTAPgXALIAAAKIAAAKIAAAKQgFAAgFgBQgRgGgDgXQAqgvBCgaQACgBAAgFQCLgEA8BAQADARAlgHQgpBEhZAUIgKABIgKAAg");
	this.shape_64.setTransform(112.5,100.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#846340").s().p("AAyAFIhtAAIAAgJQA7AAA7AEIABAFIgKAAg");
	this.shape_65.setTransform(109,85.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4F3019").s().p("AAQgIIgKgBIAAgFQg7gFg8AAIAAAKIgKABQgdAEAJgjQBxgYBhAhQAEABAFAAIBEBIQACACAAAFQgzgshPgOg");
	this.shape_66.setTransform(114.4,87.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F8C997").s().p("AAAKKIhjAAQgFAAgFgCQgqgKgwgIQAAgFgCgBQkJihghmJIAAgKIAAhjIAAgKIAAgoQAmhXAeheQACgEAAgFQDNiCBnjnQACgEAAgFQC3CSDwBiQAaALAXAWQAWASAPAZQAQDWBbCJQADADAAAFQhHHfmaCLQgEACgFAAIgKAAgAjYGYQACACAFAAQBSBYCcghQABAAAAgFQAwgSAngZQADgCAAgFQAFAAAFgBQBRggh5ANQAAgFgBgBQgvgLgggXIgKgBQhUgUh9ALQgFAAgDgCQglgegjAMQgJAjAdgFIAKAAQAUAeAXAcgAiLC0QArB0B0gtQAFgBAFAAQAFAAACgCQA/g/hGA3QhFAUgvgrQgIgHAAgDQgHgmgRAAQgJAAgMALgAAoBuIAAAPQAdgbgdg6IAABGgAC+hjQAAAFgCABQhCAagqAwQADAVARAGQAFACAFAAQAgAhAwAQQAFABAFAAQAgASA5gNQABAAAAgFIAKgBQBZgUAphEQglAHgDgRQg5g8h9AAIgSAAgAmPiVQAVA8AqAlQACADAFAAQBPBCCCgeQABgBAAgFQAPAAABgDQAVhZhXgwIgKgBQg3gOgwAAQhBAAg0AZgAEOifIAKAAIAKABQBPAPAzAsQAAgFgCgDIhEhIQgFAAgFgCQhigghwAYQgJAiAdgDIAKgBIBuAAgAjNjfQBWAhAygTQAAgFgDgCQhOg+iVAJQAAAFgBABQgpAMgcAWQAaALAugKQATgFASAAQAcAAAbAKg");
	this.shape_67.setTransform(87,102.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6F5652").s().p("AgVgSQgDgDAAgFQAyA1gBAAQgBAAgtgtg");
	this.shape_68.setTransform(84.5,35.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6E5752").s().p("AgEAoIgKAAQhMgigqhDQgCgDAAgFQCBBFCKBAQACABAAAFQhHgdhEgBg");
	this.shape_69.setTransform(91.5,28.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#765D59").s().p("AgqgKQBXgDgCAUQgBACgPACIgPAAQgmAAgQgVg");
	this.shape_70.setTransform(84.3,19.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#665450").s().p("AiBAZQAhgpBDgIIAKAAIAKgBQBVgFA2AaQhQgKhKAWQg8ATgdAAQgKAAgGgCg");
	this.shape_71.setTransform(90,5.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#755D59").s().p("AA4AcQg5gag/gVIAAgKIAKAAIAJABQBDAQArAqQgFAAgEgCg");
	this.shape_72.setTransform(111.5,18.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#745C58").s().p("AAYAiQiUgKBIggQAVgKg/gOQBogGBUAUQABABAAAFIgKAAIAAAKIgKAAQh7ACBnAHQArAbg4AAIgSAAg");
	this.shape_73.setTransform(96.5,16.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4A2F29").s().p("AEdKZQABgVgQABIAAgKQAHhTgHhDQggg6glg1Qglg1gUg9QgviOgsiTQhSkTkagnIABABQCpBBBmCFQgFAAgEgCQirhTiqhVQAAgFgCgEQgZgxgXg0IAAgKQAKhLgohBQAPgKAJgSQABgCAFAAQAZAJBPgaQBMgXBQAKQg2gahWAFIgKABIAAgKQGCASC6DcQACACAFAAQAQBTAgBsQACAEAAAFQgwhrg4hlQgBgCgFAAQAWAqAWAuQABACAFAAQAKC+CXBnQAYARASAbQAQAWALAeQgHBxgvAQQgBABgFgKQgPhXgFBDIAAAKQAgBhAqBbQABACAFAAQADDlhdBCIACgOQAEgWgQABQAAgFABgFQAWhJgXhNIgFgFIgFAFQgTgVgBAzQARB/gThhQgOhGgiAeQARBZgQBlIgBAKgAFGGhIAEAIQAQg4g4gsQAPAxAVArgAExgcIAFAEQAjgOhVguQASAfAbAZgAmDllQBfBghhhnQAAAFACACgAmrnSQAqBEBMAiIAKAAQBFABBHAdQAAgFgCgBQiLhAiBhGQAAAFACADgAifoMQA/AWA6AaQAEACAFAAQgrgrhEgQIgJgBQAAgFgBgBQhUgUhpAGQA/AOgVAKQhIAiCVAJQBQAFgxggQhpgIB9gCIAKAAgAmZn4QASAbA0gGQAPgBAAgCQADgShDAAIgVAAg");
	this.shape_74.setTransform(121,68.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#170D0B").s().p("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");
	this.shape_75.setTransform(86.1,129.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AGfBeQgLgEgFgJIgCgGQgBAAAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIACAAIAFADQAMAJAOAEQAAAAAAAAQABAAAAABQAAAAgBAAQAAABAAAAQgDAGgGAAIgHgCgAGaBFIgDgGQgCgFAEgBIAAAAQgHgDAHgCIAPgDIAIgCQAFgBAEgEIABAAQALAJgRAGQgIADgIgBQAKAKAPACQAIABgHAFQgEADgFAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgFABQgOAAgHgNgAGcA6IAAAAIgBAAIABAAgAmhgPQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQANgFAOgIIAFgEIADgCIACgBIACABQABAAAAAAQAAAAABABQAAAAAAAAQAAABABAAQgCAGgCAFQgHALgOAAQgHAAgIgCgAmyguQgMgHgCgMIABgBIACgCIACAAQAJAJAMAIQALAHAKgGIAFgDQAIgDAHADIAAABIAAABIAAACIgKAGQgJAEgJAAQgNAAgMgHgAmfhCQgPgKgBgQQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAKAPAQAHIAKADQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgEAEgEABIgEABQgFAAgGgEg");
	this.shape_76.setTransform(87.4,94.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3C2C1D").s().p("ABGAdIg8AAQgFAAgFgCQgvgPggggIAAgIQAWAPALAFIAEABIAQAHIACAAIAfAMIASAFIAAAAIABABQARAFAbgEIAAAAIAJAAIABAAIAAAKIgKAAg");
	this.shape_77.setTransform(106,105.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4D3825").s().p("AhogTQAFAAACgDIACgDQANALAPAHQAVAKAWAGIAAABIAFAAQASAFASgBQAjgBAhgJIAHgBQAHAAAGgCIAAAJQAAAFgBAAQgqALgkAAQhMAAg2gtg");
	this.shape_78.setTransform(64.5,99.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E9F2E7").s().p("AhCAFIAAgBIAFABIgFAAgABDgEIABAAIAAAAg");
	this.shape_79.setTransform(68.8,99.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1F110B").s().p("ACCA8IAEgCIABAAIAAAAIAEgDIAJgBIgCALQgBAEgPAAIAAgJgAhWAkQgYgVgRgbQADgFABgGQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgDAAIgCAAIgCACIgFgIIAKgFIABgCIAAgCIgBgBQgHgDgHADIgEgKQAEgBAEgEQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIgJgDIAOgHIADAGIAIAPIAAAAIABAAQAHAZAPAVIAEAEIAJANQAHAJAJAIIgBADQgDADgFgBQgFABgCgDg");
	this.shape_80.setTransform(62,93.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EAF0EA").s().p("Ag+ALQAGABAOAAIAYAAQgMACgJAAQgNAAgKgDgAgJAMIAGgCIADgBIANgBIgVAEgAA4gKIADgBIAEgCQgHAGgLAFIALgIg");
	this.shape_81.setTransform(114.9,106.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EAF1EA").s().p("AgHgCIAGACIAJADIgPgFg");
	this.shape_82.setTransform(102.5,105.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1F130A").s().p("AAZAtIgKAAIAAgKIAWgEQAMgCAGgCQAHgCAHgFQAMgFAGgGQAegPAWgWQAHgHAEgHQAKABAPgDIgBACIgQAEQgGACAGACIABABQgFABACAFIADAGIgFAGIgFgDIgBAAQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIACAGQgnAnhAAOIgKABIgKAAgAiagGQgRgGgDgWIAEgEIAFAJQAGAIAOAKIABAAIAAAHQgFAAgFgCgACgghIABAAIAAABIgBgBg");
	this.shape_83.setTransform(112.5,103.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F8C997").s().p("AAAKKIhjAAQgFAAgFgCQgqgKgwgIQAAgFgCgBQkJihghmJIAAgKIAAhjIAAgKIAAgoQAmhXAeheQACgEAAgFQDNiCBnjnQACgEAAgFQC3CSDwBiQAaALAXAWQAWASAPAZQAQDWBbCJQADADAAAFQhHHfmaCLQgEACgFAAIgKAAgAjYGYQACACAFAAQBSBYCcghQABAAAAgFQAwgSAngZQADgCAAgFQAFAAAFgBQBRggh5ANQAAgFgBgBQgvgLgggXIgKgBQhUgUh9ALQgFAAgDgCQglgegjAMQgJAjAdgFIAKAAQAUAeAXAcgAiLC0QArB0B0gtQAFgBAFAAQAFAAACgCQA/g/hGA3QhFAUgvgrQgIgHAAgDQgHgmgRAAQgJAAgMALgAAoBuIAAAPQAdgbgdg6IAABGgABQgTQADAVARAGQAFACAFAAQAgAhAwAQQAFABAFAAQAgASA5gNQABAAAAgFIAKgBQBAgOAngoQAFAIALAEQAMAFAFgIQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgPgEgMgIIAFgGQAIANASgCQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAgBAAQAFAAAEgEQAHgDgIgBQgPgCgKgKQAIABAIgDQARgGgKgKIgCABQgDADgFABIgIACIABgCQgPADgKgBQgEAHgHAHQgWAVgeAQIgEACIgDABIgLAIQgHAFgHACQgGACgMACIgOABIgCACIgHABIgJABIAAAAIgYAAQgOgBgGgBIgBAAIAAAAIgSgGIgggLIgCgBIgKgFIgGgCIgEgBQgLgFgWgPIgBAAQgOgJgGgIIgFgJIgEAEgAlQg0QACADAFAAQBPBCCCgeQABgBAAgFQAPAAABgDIACgMIgJACIgEADIgBAAIgEABQgGACgHAAIgHABQghAJgjACQgTAAgSgFIgFgBQgWgGgVgLQgPgHgNgLQgJgHgHgKIgJgMIgEgGQgQgVgGgZIgBAAIAAAAIgIgPIgDgFIgOAGQgQgGgLgPQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAQAPAJQAJAGAHgCIAEAKIgGACQgKAHgLgIQgMgHgJgKIgCABIgBABIgBACQABAMAMAHQAWAMAVgJIAFAIIgGAEQgOAHgMAGQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAABQAbAHAJgRQARAcAYAVgAGkhjQAAgFgCgDIhEhIQgFAAgFgCQhigghwAYQgJAiAdgDIAKgBIBuAAIAKAAIAKABQBPAPAzAsIAAAAgAjNjfQBWAhAygTQAAgFgDgCQhOg+iVAJQAAAFgBABQgpAMgcAWQAaALAugKQATgFASAAQAcAAAbAKg");
	this.shape_84.setTransform(87,102.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2F0A04").s().p("AgCApIgDAAIgTgDIgGgCIgYgEIgBgBIgqgKIgdgJIgBAAIAAAAIgBAAIgBAAIgEgCIgkgMIgJgEIgFgDIgEgDIgCABIgFgCIgKABQgdAEAJgjQAjgMAlAeQADACAFAAQBzA3CugGIAKAAQB5gMhRAfQgFABgFAAIgCAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAABIgCAAIgEAAIgHAAQgVgDgUAEIgDABIgMAAQg9AAg1gHg");
	this.shape_85.setTransform(80.5,138.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F8C997").s().p("AAAKKIhjAAQgFAAgFgCQgqgKgwgIQAAgFgCgBQkJihghmJIAAgKIAAhjIAAgKIAAgoQAmhXAeheQACgEAAgFQDNiCBnjnQACgEAAgFQC3CSDwBiQAaALAXAWQAWASAPAZQAQDWBbCJQADADAAAFQhHHfmaCLQgEACgFAAIgKAAgAkAFiQgHAEAHAIIACACIAEAJQABAKAKAEQAGAHAIAFIAFACIABACQAGAHAHAGQAbAUAfAPQA2AZA8AAQAXgBATgEQAegFAagPQAVgNAYgJQARgGgGgOIAAgDQAFAAAFgBQBRggh5ANQAAgFgBgBQgvgLgggXIgKgBQhUgUh9ALQgFAAgDgCQglgegjAMQgJAjAdgFIAKAAIADAEgAiLC0QArB0B0gtQAFgBAFAAQAFAAACgCQA/g/hGA3QhFAUgvgrQgIgHAAgDQgHgmgRAAQgJAAgMALgAAoBuIAAAPQAdgbgdg6IAABGgAC+hjQAAAFgCABQhCAagqAwQADAVARAGQAFACAFAAQAgAhAwAQQAFABAFAAQAgASA5gNQABAAAAgFIAKgBQBZgUAphEQglAHgDgRQg5g8h9AAIgSAAgAmPiVQAVA8AqAlQACADAFAAQBPBCCCgeQABgBAAgFQAPAAABgDQAVhZhXgwIgKgBQg3gOgwAAQhBAAg0AZgAGkhjQAAgFgCgDIhEhIQgFAAgFgCQhigghwAYQgJAiAdgDIAKgBIBuAAIAKAAIAKABQBPAPAzAsIAAAAgAjNjfQBWAhAygTQAAgFgDgCQhOg+iVAJQAAAFgBABQgpAMgcAWQAaALAugKQATgFASAAQAcAAAbAKg");
	this.shape_86.setTransform(87,102.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#877865").s().p("AgrAAIgLgEIBjAAIAKAAIAAAEIgBAAQgcAFgXAAQgZAAgVgFg");
	this.shape_87.setTransform(82.5,167.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6A4122").s().p("ABaEEIAAAKQhTgMhNgDQijgHgkh2IAPgGQD2hnBwjuQABgCAFAAQA8gUAzgcQAEgCAFAAQgeDGBACLQABACAFAAIAAA2IAAAkIAAAKQgVAxgaAqQgDAEAAAFQgFgFgDgGQgHgNgWALQgZANgYAAQgWAAgWgKg");
	this.shape_88.setTransform(122,155.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#532805").s().p("AgOAFQAMgCACgNQABgFgBgJIAFAAIAKAAQAAAFgCAFIgBAEQgMAjgGAAQgGAAgCgUg");
	this.shape_89.setTransform(61.5,168.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#471F05").s().p("AAAAVQgDgGgFgFIAAgGIAAgEQAVg8gFBAIgCAZIgFABQAAgFgBgEg");
	this.shape_90.setTransform(21.9,167.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7A4C29").s().p("Ah+F+QghguAFhWQAegeAAg8IAAgKIAFAAIACgaQAFhBgWA9IAAAEIAAAGIgBAKQgQBnhTAlIgFAAQAAhbgYhBQgQgqgZggIAAgKIAAhtIC8kjQACgEAAgFQAYgGAGAkIAJgPQASgjAXAAQAwAzAOBhQAJA8AgAvQBcCGByBuIgFAAQABAIgBAGQgDAOgMACQAGAtAVg9IACgFQABgEAAgFQAOACAEAMQAEAKgEAQQgFAcgTALQiBBMiuAZIAAgKQgIhIAEhUIAEg2QgFAAAAACIgQA0QgnCHgoCDQAAgFgCgDgAgEiVIABAKQALBQg0A7IAAAeIAAAPQAbg5AghDIAAgKQACg9gQAAIgFABgAgsldQgWCPhsBrIAAAPQBHhFBPh+IABgKQANg7gigLIAAAKg");
	this.shape_91.setTransform(34.5,155.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#170D0B").s().p("Ap7PxQgihFgph3QgFAAgDADQhDAugtgdQAAgFACgEQAxhYgfhjQgNgpgbgrIAAgKIAAhaIAAgKIAAgKQB7isBbjOQABgCAFAAQgHgrgLgkQgCgFAAgFIABgKQAHg5gSghQAAgFgCgBQhRgyADiGIFDoKQAbgrAtggQAngdBCgEIBGAAIAKAAQAygjAwgmQACgCAAgFQGRgfDbDJQCEB6A0DXQAUBUAwBBQASAYATAUQghCeAWB7QAuEBh6C0Qg0BNAYBdQANAvARAmQAMAZANAVIgKAAQhOAEgjgpQgCgDgFAAQAABVglAvQgDADAAAFIgKAAQAAAoAFAoIAFAAQAAAFACAFQAcBGAeBGQgxAHgagMQgJgHgMgEQgVgIgTgKQgYhRgohBQgFAAgCgCQgYgWgwACQgngXgyAHQgfgZhbADQgFAAgBACIgBACIgpgFQgngOgXgjQgQACgCgVQgBgLgDAAQhsgMh3gcIgFAAQADCRh2gPIAAACQgbgBgWAKIgBgBIgJABQhNAShUALQAAAFgCAEQgvBBgaBXIgsApQgBgPgFgJgAJED9QgzAcg8AUQgFAAgBACQhwDvj3BnIgPAGQAlB3CjAGQBNADBTAMQBgA3ArBqQABAEAAAFQAKgugThyIgBgKQAAgFADgDQAagrAVgxIAAgKIAAgkIAAg2QgFAAgBgCQhAiMAejGQgFAAgEACgApFNxIABgKQAAgFACgEQAZhEglAbIAAAeIAAAKIgKAAQgDBrAWhXgAqCKWQACAEAAAFIAAAKQAAA8geAeQgFBWAhAuQACADAAAFQApiDAniHIAPg0QAAgCAFAAIgDA2QgEBUAHBIIAAAKQCvgZCBhMQATgLAFgcQAEgQgEgKQgEgLgOgDIgKAAQhyhuhciHQgggvgJg8QgOhhgxgzQAAgFgCgCQgzg2gbA9IAAAKIAAAKQAAAFgCAEIi8EjIAABuIAAAKQAaAgAPAqQAYBCAABaIAFAAQBTglAQhnIABgKQAFAFADAGgAnvA9IAFAAQAhGJEJChQACABAAAFQAwAIArALQAEABAFAAIAMAEQAnAMA5gLIABgBIAAgEQAFAAAFgBQGZiMBHnfQAAgFgCgDQhciJgQjWQgPgYgVgTQgYgWgagKQjwhji3iSQAAAFgCAEQhnDnjNCCQAAAFgBAFQgfBdgmBXIAAAoIAAAKIgKAAQAAA2AFA3gAGTl1QAsCUAvCOQAUA9AlA0QAkA1AgA6QAIBEgHBSIgBAKIABAKQAGAbgRADQAABGAFBGIAFAAQAPBpBDA1QADACAFAAQgkiiAtjQIABgKQARgBgEAWIgDAOQBehCgEjlQgFAAgBgBQgphaghhiIABgKQAEhDAPBXQAFAKACAAQAugRAHhxQgKgdgQgXQgTgcgYgQQiWhogLi+QgFAAgBgCQgVgugXgqQAFAAABACQA4BlAwBrQAAgFgBgEQghhsgQhTQgFAAgCgCQi6jcmDgSIAAAKIgKABQhBAIgiApQgFAAgBACQgJASgPAKQAoBBgJBLIgBAKQAXA1AZAwQACAEAAAFQCpBVCrBTQAEACAFAAQhmiFiohBIgBgBQEaAnBTETgAJSCXIgFAAQgCglgXgTIgFgEQgiAWgaBYIAAAKIAAAKIgFAAQACAWgRgCQBUAcAfh2gApxg6IAFAAQAOCIBWADIgEgCQgMgGAGgWIABgKQAKhegLhLQAAgFgCgDQgIgMgKgKQAAgFgCgEQgPgcgNghIAAgFQgaATgOAkIAAAUIAAAKIgKAAQAAAtAFAtgAn0iKIAVgnQAohLgpgQIgKAFQD+iNB+kcQAAgFgBgEQglh6AIhZQiEgbhRBJQgbAYgQAcQiUD9icDvIABAKQAQDJBTihIAAgFQA8A3AoBQg");
	this.shape_92.setTransform(86.1,103.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{y:143.8,x:80.1}}]}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_70},{t:this.shape_71},{t:this.shape_68},{t:this.shape_69},{t:this.shape_66},{t:this.shape_65},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_55},{t:this.shape_56},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_49},{t:this.shape_50},{t:this.shape_48},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_77},{t:this.shape_20},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_76}]},14).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_86},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_85},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{y:143.9,x:80.1}}]},2).to({state:[{t:this.shape_92},{t:this.shape_74},{t:this.shape_72},{t:this.shape_73},{t:this.shape_71},{t:this.shape_70},{t:this.shape_68},{t:this.shape_69},{t:this.shape_66},{t:this.shape_65},{t:this.shape_67},{t:this.shape_64},{t:this.shape_62},{t:this.shape_63},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_45},{t:this.shape_46},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_91},{t:this.shape_36},{t:this.shape_35},{t:this.shape_90},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_89},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_88},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_87},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_1,p:{y:143.8,x:79.9}}]},5).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.1,259.4);


(lib.face4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(112.5,313.4,1,1,0,0,0,27.5,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:112.4},0).wait(4).to({x:112.3,y:313.5},0).wait(4).to({x:112.2},0).wait(2).to({y:313.6},0).wait(2).to({x:112.1},0).wait(4).to({x:112,y:313.7},0).wait(4).to({x:111.9},0).wait(1).to({y:313.8},0).wait(1).to({y:314},0).wait(1).to({y:314.2},0).wait(1).to({y:314.5},0).wait(1).to({y:314.7},0).wait(1).to({y:315},0).wait(1).to({y:315.2},0).wait(1).to({y:315.4},0).wait(1).to({y:315.7},0).wait(1).to({y:315.9},0).wait(1).to({y:316.2},0).wait(1).to({y:316.4},0).wait(1).to({y:316.7},0).wait(1).to({y:316.9},0).wait(1).to({y:317.1},0).wait(1).to({y:317.4},0).wait(1).to({y:317.6},0).wait(1).to({y:317.9},0).wait(1).to({y:318.1},0).wait(1).to({y:318.4},0).wait(1).to({y:318.6},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7A/IgcgCQgagCgYgLQgdgMgVgTQgIAAgIgFQgQgLgKgOQgPgHgKgOQgDgEABgEIgIgHQgHgHADgEIADgDIADgCIAJAFIAFADIAMABIAOADIAJADQBKASBNADIACAAQBZACBYgNQAXgEAUAFQAkgEAjgHIALgFIAJABIAIgCIACABIACgCIADACQAEADAAAEQABAGgIAHIgDAFQgEAHgJABQgCAEgGAFQgVAPgXAMIgbAPQgyAeg7AEIg2ACIgYABQgUAAgUgDgAiWAGIACgBIgEAAIACABg");
	this.shape.setTransform(112.4,313.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A07653").s().p("Agmh+QAOBkAZAZIAAgPQAHhpAIB7IAFAAQgCBDAUAsQACAFAAAEIAAAFQhchIANi1g");
	this.shape_1.setTransform(219.9,306.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7D5232").s().p("ABgFhQimhNgijTQAFAAAAgCQAVgxgagwQALiyAdiEIAEAIQABACAFAAQAfB6gFhSQgBgeAFgeQA+BSgcB2IAFAAIAAENIAAAKIgFAAQgHh9gHBpIAAAPQgagYgOhkQgNC2BcBIIAAgFQAFAAABACQAaA9AmAvQgFAAgEgCg");
	this.shape_2.setTransform(220.5,294.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#764A2C").s().p("AgIgJQAiAMgiAHg");
	this.shape_3.setTransform(210.9,261.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#704C32").s().p("AgFgSQgBgEAAgFIANA3IgMgug");
	this.shape_4.setTransform(218.7,253.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAC19B").s().p("AhDA3QAIgRAUgIQACAAAAgFQBEgeAZhOQABgBAFAAQAWBSg5A0QgkAjgZAAQgWAAgLgeg");
	this.shape_5.setTransform(194.8,269.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CD8865").s().p("AgxBUQgFgYAAgZQAOgxAGg8IAAgKIAnAFIAAgFQAXAbAZAaQACACAAAFQgFAAgBACQgZBMhEAfQgFAAAAgBg");
	this.shape_6.setTransform(195.5,263.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4967F").s().p("AgTARIAAgKIAAgcQATAPASAQQACACAAAFIAAAGIgngGg");
	this.shape_7.setTransform(194,252.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D5149").s().p("Ahbh+QgDgDAAgFQCBBeA6CmQACAEAAAFQhEiFh2iAg");
	this.shape_8.setTransform(205.5,240.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9F8266").s().p("AAgAPIgKAAQgmgBgUgSIAAgKQApAMAhARg");
	this.shape_9.setTransform(170.8,238.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#87542B").s().p("Aj8BqQAAgFgBAAQg8gXgxggQAAgFgCgDQgPgUAHgpQAqgrAugoQACgCAAgFQALAAAOgFQAUgHAbgQQADgCAFAAQBUAkBQgVQAGgBABALIAAAPIgBAoQBXAxARhYQAAgBAFAAQAcgUAMAQIgFgNQgKgVAZgMQAWgnAFBKIACAjQABBjgeB4QA9g3AmhyQABgFAAgFQBcgDgthAQgCgDgFAAIABgFQAJg/BBA2QAEADADAGIABAEQACAGAFAFQABgIAFA8QAEAmACAxQABAJAFAFIgBACIgJAIQhMA6haAkQgRAHgTADQgGABgGACQjmgYitglg");
	this.shape_10.setTransform(175.3,351.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#633C1F").s().p("ACUDrIgBgjQgFhKgWAnQgaAMAKAVIAGANQgMgQgcAUQgFAAAAABQgSBYhWgxIABgoIAAgPQgCgMgFACQhRAVhTgkQgFAAgEACQgaAQgUAHQgOAFgLAAQAAAFgDACQgtAogqArQgIAqAPAUQADADAAAFQgFAAgCgCQgZgqgIg4QA3geAygjQDpiiB+kJQAZg0AUg3QBcgwBGhGQADgCAFAAQgBEyB8C0QACADAFAAQAOBRgFBUQgEA+gOA/QgDAEgBAHQgDAKgGAJIgLAOQgFgFAAgJQgDgygDgnQgGg7AAAIQgFgFgCgGIgCgEQgCgGgEgDQhBg2gJA/IgBAFQAFAAABADQAtA/hbAEQAAAFgCAEQglB0g9A3QAdh4gBhkg");
	this.shape_11.setTransform(176,320.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CB350B").s().p("AiEgEQgBAAAAgFQB6gIBrARIAKAAQAyACgoAHIgKABQghACgfAAQheAAhQgQg");
	this.shape_12.setTransform(112.4,304.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#240702").s().p("Ag8AqQhRgFhRgSIgOgEIgRgEIgJgEIgDABIgIgCIgKABQgyAJAAgnQAjgkAlAhQADADAFAAQD9BDETg+QABAAAAgFQBagngzA7QgJAJgTAEQgGABgFAFIgKABIgDgDIgCACIgCgBIgIACIgJAAIgLAEQgjAHgkAEQgUgEgXADQhLAMhLAAIgbgBg");
	this.shape_13.setTransform(112.4,306);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B44420").s().p("AkIgFQEHguEAAtIAKABQAAAFgBAAQiEAdiAAAQiIAAiEgigAiQgFQAAAFABAAQBrAWCDgIIAKgBQAogHgygCIgKgBQhJgLhOAAQgmAAgoADg");
	this.shape_14.setTransform(113.5,304.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8CA98").s().p("AhxCeQiLgghMhhQAJAFASACQAyAFgYghQAygNAkglQAVgWgCgRQAagggZgZIgDADQACgKAAgLIgBACIACgXIAFgBQCXA6CpguQAEgCAFAAIADAVIgDgJQgEAOADANIgEgCQgUAFAJATQAWArAfAfIAdAdQAlAhAegVQAOgEAEgEQATAGAUAHQhiCmjSAAQhJAAhXgVgAligIIACgBIAAAAIgBADIgBgCg");
	this.shape_15.setTransform(113.5,366.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#502303").s().p("AgCgVIgBgKIAHA/IgGg1g");
	this.shape_16.setTransform(23.4,336.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A2307").s().p("AgeBQIAAgGIAAgEQAMg1AZgmQACgDAAgFQgChQgHg8QAmA0gIBiIgBAKQgdAkgGAvQgFAnAKAvIABAKQgegfAAg7g");
	this.shape_17.setTransform(47.1,332.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#524336").s().p("AAAA2QgEg2AAg2IAJAAIAABjIAAAKIgFgBg");
	this.shape_18.setTransform(40.5,252.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#432108").s().p("AhRC0IAAgeQBnigAjizIABgKQAgAYgLBCIgBAKQhYCWhHCVg");
	this.shape_19.setTransform(32.2,311.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#774A27").s().p("AikHAIgNgDQgngMgjgUQhFglgwg2QgPgQgNgTQgWg3gIhGIgDgjQB9kSBnknQACgFAAgFQBEAgA/AlQAEACAFAAQBaFID+CiQAmAZAfAcQAoAkAfArQAFAGAAALQgpBtiIAcQg2ALhDATQhNAWgjgdQAJhzgmAAIAAAPIAABFQgJBIhkgaQgBgBAAgEQANhYghglIAAAEQAHBTgQA6IgBAFIgPgFgAAAA6QAAAFgBADQgaAngMA1IAAAEIAAAGQAAA7AeAfIgBgKQgKgvAEgnQAHgvAdglIAAgKQAJhhglg0QAHA8ABBPgAj5BrQAPBygPh8IAAAKgAhkk3QgjCzhoCfIAAAfIAAAUQBHiVBZiWIABgLQALhCgggYIgBALg");
	this.shape_20.setTransform(48,323.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9E5B31").s().p("AgdgTQAWARAcAKQAEACAFAAIAAAKIgKAAIgGAAQgpAAgCgng");
	this.shape_21.setTransform(35,269.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C57654").s().p("AgPgLIAKAAQAFAAACgDQACgCAAgFQAFAAABABQAKAqgIAAQgHAAgUghg");
	this.shape_22.setTransform(28.6,256.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E18C6B").s().p("AgEgTIgBgKIALA7IgKgxg");
	this.shape_23.setTransform(33.6,261.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B88269").s().p("AAEAjQAAgtgOgYIAKAAQAQARgHAqIAAAKg");
	this.shape_24.setTransform(35.1,253.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A08B75").s().p("AAAA2QgEg2AAg2IAJAAIAABjIAAAKIgFgBg");
	this.shape_25.setTransform(20.5,243.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7D3B21").s().p("AgYBBIAAhPQAWgNgBglIgBgKQAGAYAVAKQACABAAAFQgFAAgCADQgPAYgRAWIAAAoIAAAKQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_26.setTransform(30.5,248.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E1A881").s().p("AhZg6IAAgKIAAhkIAAgKIAAgUQA1gygDBGIAGAFQATAPAOAUIAAAKQACAlgVANIAABPIAAAKIgKAAQArBIgShRQAAgBgFAAIAAgJIAAgoQAQgXAQgZQACgCAFAAQAKAUAIAUQACAFAAAFIgKAAQAPAYAAAtIAFAAQgFBQAXAzQACAEAAAFQgFAAgFgCQgcgLgWgRQACArAwgDIAKAAQAJAKABAUIAAATQilgcgOj6gAAfAzQAWBogXhyIABAKg");
	this.shape_27.setTransform(30,254.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#696969").s().p("AAAAnQgEgnAAgnIAJAAIAABFIAAAKIgFgBg");
	this.shape_28.setTransform(0.5,225.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#796048").s().p("AgTAIQgIgIgEgJIAwAAIAKAAIAGAAQgJAQgkgHIAAAKQgEAAgDgCg");
	this.shape_29.setTransform(55.3,239.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#150B06").s().p("ACHAlQg8gXhAAEQitANhNg4IAAgKQAlAHAIgRIgFAAIAAgFQEkgYCTCAIgSABQgnAAgwgSg");
	this.shape_30.setTransform(78,243.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AB7447").s().p("AgJAZIAAg7QAJAKAHAMQADADAAAFIgFAAQACAfgQAIIAAgKg");
	this.shape_31.setTransform(127,279.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DBA56F").s().p("AgKgOQgCgDAAgFIAZAtIgXglg");
	this.shape_32.setTransform(127.3,253.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7D4120").s().p("AgGAoQgFgoAAgnQAgAHgMA0IgBAKIgJAAIAAAKIgFAAg");
	this.shape_33.setTransform(122.2,260.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77391A").s().p("AgHgXIAAgKIAJAAIABAKQAHA4gDAAQgDAAgLg4g");
	this.shape_34.setTransform(122.8,266.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C37F5D").s().p("AgsgRQAqATAmgRQAEgCAFAAQAAAFgDADQgXAbgUAAQgXAAgUgjg");
	this.shape_35.setTransform(113.5,286.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C78865").s().p("AgYADQAQgTAgAFIABAFQgFAAgCADQgOAPgcABIAAgKg");
	this.shape_36.setTransform(120.5,287.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D19070").s().p("AAQAMQgXgFgRgNQAbgSATAdQADADAAAFIgJgBg");
	this.shape_37.setTransform(106.5,287.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#834623").s().p("AguAxQAAgFgDgEQgUgdgbASIgKgBQg1gHANhHQAfgyAJBjQABAFAxAAQAFAAAFAFQAlBCAxg6QADgDAAgFQAxgJAegFQABAAAAgFQARgIgCggIAFAAQAFAAAAABQANBMhEACIgBgFQgigFgPAUIAAAKQgFAAgDACQgRARgTAAQgWAAgXgTg");
	this.shape_38.setTransform(113.7,283.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D5A26D").s().p("AgQAQQBDhLhDBQg");
	this.shape_39.setTransform(98.7,256);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#89684F").s().p("AA3AFIh3AAIAAgJQBAAABAAEIABAFIgKAAg");
	this.shape_40.setTransform(79.5,217.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3F2314").s().p("AjRAoQAwhCBmgNIAKAAIB3AAIAKAAIAKAAQBXgCAhAzIAAAFQiEgNjFgCQAAAFgCABQgwAigkAAIgEAAg");
	this.shape_41.setTransform(78,221.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CD9765").s().p("AhJgDIgBgFQBagKAzAbQADACAFAAQghAAhzgOg");
	this.shape_42.setTransform(80.5,231.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#130905").s().p("Aj0AvQBqhJCjgPIAKgBQAtAAAsgFIABgFIAoAAIAKAAQAVATAnABIAKAAQgeBLhxgUQhjgRhSAaQhEAVgyAAQgaAAgVgGg");
	this.shape_43.setTransform(149.5,242.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#725D45").s().p("AgsgEIBPAAIAKAAIgBAEQgsAFgsAAIAAgJg");
	this.shape_44.setTransform(157.5,238.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CE9566").s().p("AhFAIQAxgZBQAGIAKAAQhGANhFALg");
	this.shape_45.setTransform(146,231.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#422515").s().p("ADUA1QgvgrhBgYQhmgIhMAWQhZAag0geQArgvBXgDIAKAAIB3AAIAKAAIAKABQB2AQAqBcQgFAAgDgCg");
	this.shape_46.setTransform(150,223.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9A745C").s().p("AA3AFIh3AAIAAgJQBAAABBAEIAAAFIgKAAg");
	this.shape_47.setTransform(148.5,217.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#715954").s().p("AAWAwQgmgpgXg4QAjAtAqAlQACACAAAFIgKAAIAAAKQgFAAgDgCg");
	this.shape_48.setTransform(91,150.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FACA97").s().p("AkzQcQgRgCgJgFQgTgKARgZQADgEAHgBIAGgBQAJgLAOgJIAOgIQAfgVAZgbIAJgJQAUgVAUgSIADgDQAYAZgZAgQACASgWAVQgjAlgyAOQAUAdgjAAIgMgBgADiPzIgegdQgfgfgVgrQgJgTATgFIAFACIAUANQAdAVAZAaQAOAPAQAMQAOAKAQAIQAZAOgHAKQgEAFgOAEQgMAIgMAAQgUAAgXgVgAj7LxIgBgBQi7iNiBi/QhkiVgtjLQgOg+gChOIAAgKIAAhkIAAgKIAAgeQAthVAFh9IAAgKQEBjpB6lvQABgFAAgFQCzCnE9ApQBUALBKApQBBAkA8AsQBNEvCrDRQACADAAAFQgUKJmdEFQgeATggAPQg7AchFARQhRAUhFAAQh7AAhVhAgAiZIUQAYALAaACIAcACQAfAEAigCIA1gCQA6gEAzgeIAagPQAXgMAWgQQAFgFADgEQAIgBAEgHIAEgFQAIgHgBgGIAGgIQAFgFAGgBQATgEAIgKQA0g6haAmIgKgBQkAgtkHAuQgFAAgDgCQglghgjAjQAAAoAygJIAKgBIAEAGQgDAEAIAHIAHAHQAAAEADAEQAKAOAPAHQAJAPARALQAIAFAHAAQAWAUAdALgAiVCJQgNBJA1AHIAKAAQARAOAYAFIAJABQAuAmAkgjQACgDAFAAQAdgBAOgQQACgDAFAAQBFgBgOhOQAAgBgFAAQAAgFgDgDQgHgMgKgKIAAA8IAAAKQAAAFgBAAQgdAHgyAIQgFAAgEACQgmASgqgUQgFgFgFAAQgxABgBgHQgFhBgQAAQgIAAgLAQgABLgCIAFAAQAYBxgOhxIAAgKIABgKQAMg0ghgIQAAAoAFAogAiphIIAAAFQAjgpgBAAQgBAAghAkgAB6h7QAwBPgyhYQAAAFACAEgAjgizQA7AXAugGQiTiAklAXIAAAFIgKAAIgyAAQAFAKAIAIQACACAFAAQBNA5CugMIAVgBQA1AAAyATgAGGkGIgKABQikAPhqBKQA/AQBmgfQBTgaBjARQBxAUAehMIAFAAQghgRgqgNIAAAKIgKAAIgoAAIgKAAIhQAAIAAAKgAD6lCIAAAFQBFgLBHgOIgKAAIgdgBQg9AAgoAVgAmZlWIABAFQB0APAgAAQgEAAgEgCQgmgUg6AAQgVAAgYACgAJElqQgqhdh2gQIgKgBIAAgFQhBgFhBAAIAAAKIgKAAQhXADgrAvQA0AfBZgaQBMgWBnAHQBBAZAvArQADACAFAAIAAAAgAmZnYIgKABQhmANgwBCQAlACAzgjQACgCAAgFQDGACCEANIAAgFQghgzhXABIgKAAIgBgFQhAgFhBAAIAAAKg");
	this.shape_49.setTransform(114,264.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#796560").s().p("AgXgGIAAgKIAKAAQAFAAADACQAjAfgIAAQgGAAgngXg");
	this.shape_50.setTransform(96.4,156.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#755E59").s().p("AgrAaQApAQAMANIgFAAQiygVhPh3QgCgEAAgFQD2BhEFBWQACABAAAFQiLgzifgSg");
	this.shape_51.setTransform(108.5,145.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#785F5B").s().p("AhjAFIAAgFQBYgQBuAMIABAEQg1AKg8AAQgpAAgtgFg");
	this.shape_52.setTransform(95,132.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#765E5A").s().p("AjRAjQgXgBAXgFQArgWAggRIgPAAQg0ARg6AHIAAgFQENhoD6B6QiYgjjPAQIgKABQCBAKB4ATIAKABIhzABQh6AAh6gFg");
	this.shape_53.setTransform(116,124.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7B675F").s().p("AgaBcQAfhXARhmIABgJQASCDhDBTg");
	this.shape_54.setTransform(72.7,154.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#735955").s().p("AgTAJQBQguhQAzg");
	this.shape_55.setTransform(70,141.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7D6462").s().p("AggAEQCCgciCAhg");
	this.shape_56.setTransform(68.3,138.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7A6261").s().p("AgUgDQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgCIADACQArARgDAAQgDAAgngNg");
	this.shape_57.setTransform(69.2,126.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7F6561").s().p("Ah3AuQBIh0CdARIAKAAQgqAXhdAeQg+ASgqAmg");
	this.shape_58.setTransform(57,136.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4B302A").s().p("AjdGXQgDgCAAgFQgtA/gFBhIAAAKQhDgcgbhHQgBgBgFAAIAAhuIAAgKQCckqBylmQAriIBjhVQBRhEB0AHQAAABAAABQAAAAABABQAAAAAAABQAAAAABAAQBUAdhSghQAaACAcAGQAHABAFAKQgbBLAfBJQABACAFAAQBRBKgdBqQgCAFAAAFQgjBlgeA7IAFAAQgvAfAHAwIAAAKQgsBEg1AtQgDACAAAFQAFA6hUAHQACBKhJAyQg7ApgeAoIAKAAQBJgmgjB4QgQA2gWAsQg8huhhhJgAE6mPQgRBmggBYIAAAPQBEhTgSiEIgBAKgAD1mjIAAAFQArgbgCAAQgCAAgnAWgAAPmtIAAAKQAqgmA+gUQBegdAqgXIgKgBQgUgCgSAAQiAAAhABngADXnLIAAAFQBGgTgFAAQgFAAg8AOg");
	this.shape_59.setTransform(43.5,184.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#715C58").s().p("AjCA7QAKgKAHgLQADgEAAgFIAAgKQArguBEgVQAEgCAFAAIAKgBQB5gWB2AXQjUgNhsBcQgoAigTAAQgGAAgEgEg");
	this.shape_60.setTransform(98.5,113.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E3C8D3").s().p("AAhA5QgjgoglhMQAyAsAbBBQACAFAAAFQgFAAgCgDg");
	this.shape_61.setTransform(148,83.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5D5250").s().p("AAJA3QgFhAgTgtIAKAAQAZAigFBBIgBAKIgFAAg");
	this.shape_62.setTransform(222.6,194.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BE6A83").s().p("AhFgDQBZAdAyg2IAAAFQAAAFgCAEQgDAGgFAFIAAAJQgFAAgFACQgUAIgUAKIgKABQgKACgKAAQgpAAgIggg");
	this.shape_63.setTransform(210,172.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6C514D").s().p("AAIAaQgSgbgMgmQA+AggXAvg");
	this.shape_64.setTransform(195.3,187.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6B514C").s().p("AAYAiQgTgzgtgdQBvAbgqBCg");
	this.shape_65.setTransform(197.1,183.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F9C0D1").s().p("Ag8A+QAAgFgCgCQgdgWALg8IAAgKQARgDAHgPQABgCAFAAQB1g4ARCbIgFAAIAAgFQggAkgwAAQgbAAgggLg");
	this.shape_66.setTransform(209.1,166.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4B2F29").s().p("AIrPKQgOi0gLizQhJiThuhuQhwhxgpitQiFoypigYQAPAPAZAGQEEA8CqCVQgFAFgBgBQhMgvhsgJQlmgehmkWIABgKQALhWg+hKQAUgZAXgXQACgCAFAAQAAAFgCADQgIAMgKAKQAQAOA1gsQBshdDVANQh2gXh6AWIgKABIAAgKQI9g+E0EXQADADAFAAQAoBvA6CLQACAFAAAFQg+imh7hpQBHCKBJC3QABAFAAAFQBCBEAygaQAEgCADgJQACgGAFgFQgLA9AdAWQACACAAAFQAKAoA8gJIAKgBQArBIBBAzQACACAAAFIgKAAQAUAtAFBAIAFABIAAAKQgJBKgVAPIACAFQAVAzgggsIg9hRQAmC/BjCAQAqA3ABBVQABCqg6B+QgcA8gFhqIgBADQgJAWAAAZIgFAAQAdh2hAhSQgFAeACAdQAEBTgfh6QgFAAgBgCIgEgIQgdCEgLCyQAbAwgVAyQgBACgFAAIgFgBgAIwJPQAjgIgjgMgAKCHgQAbBjgdhsQAAAFACAEgAGnDuQB4CCBDCFQAAgFgBgFQg6imiDheQAAAFADACgAGliEIAJAOQAYgxhAgfQANAlASAdgAHHimIAFANQAqhDhwgcQAuAeATA0gApenhQACADAFAAQBVA1hDg9QgDgCgFAAQAAgFgCgDQgqgmgkgsQAXA5AoAogAjHnoQAAgFgBgBQkGhWj3hiQAAAFADADQBOB5CzAVIAFAAQgNgNgogQQCfASCLAzgAqxrEIABAFQBuAKBZgPIAAgFQgugFgqAAQg8AAg0AKgAoCseQggASgrAWQgWAFAWABQC0AHC0gDIgKgBQh4gTiCgKIAKgBQDQgRCZAkQj6h7kPBpIAAAFQA6gHA0gSg");
	this.shape_67.setTransform(154,203.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#DDBDCA").s().p("AAWAZIgJgBQgXgFgQgOIAEAAQgEgKAAgTQAjASATAfg");
	this.shape_68.setTransform(162.8,109.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#150B08").s().p("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");
	this.shape_69.setTransform(121.7,236.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E45680").s().p("AgWABIgBgEQA7AHgPAAIgrgDg");
	this.shape_70.setTransform(192.4,118.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CC6889").s().p("AhAAZQAUAAATgEQABgBAAgFQA4gIAbgmQABgDAFAAQAAAFgCAEQgnA8gxAAQgSAAgVgKg");
	this.shape_71.setTransform(225.5,147);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D7AEBE").s().p("AgTBBQhbgLgJh7QAMASAQAPQACACAAAFIgKAAQANAgAlACIAAgFIA7AAIAKAAQAAAFgBABQgTAEgTAAQBJAhA2hUQACgDAAgFIAAgKIAAgKIAKAAIgBAKQgKB7iAAGIAAgFg");
	this.shape_72.setTransform(221,148.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C16D8B").s().p("AgYgRIAKAAQAUAJANASQABACAFABIAAAEQgkgCgNggg");
	this.shape_73.setTransform(213.5,147.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FAC1D4").s().p("AAKBkIg7AAQgFAAgCgCQgMgTgVgJQAAgFgDgCQgPgPgMgSIAAgKQAThyCCgFIAKAAQBUAWgnA6IAFAAQAhgTgDA6IAAAKIgKAAIAAAKIAAAKQgFAAgCADQgaAng5AIIgKAAg");
	this.shape_74.setTransform(221,138.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E6577C").s().p("AgegCQB8ABh8ADg");
	this.shape_75.setTransform(218.1,120.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D4CBD2").s().p("AhUBtQAAgFgCgBQgogRgwgHQgFAAgFACQhsAfhIgNQgFAAgFgBQgWgHgIgWIAAgKIAAgKQByA3B1g/QAEgCAFAAQA0ArBigDIAKAAQBWgcAlhPQABgCAFAAQA1AQBhgPIAKgBQA/ggAygtQACgDAFAAQAAAFgCAEQhEB9jSgPQAAAFgDADQguArgzAnQgFAAgFACQgdAKgpAAIgdgCg");
	this.shape_76.setTransform(222.5,115.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F88D95").s().p("AAQASQgbgLgNgaQAeAJAQAWQADADAAAFQgFAAgEgCg");
	this.shape_77.setTransform(212.5,93.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F38391").s().p("AgYALQAfgDAMgYQABgCAFAAQAAAFgCAFQgKAbgQAAQgKAAgLgIg");
	this.shape_78.setTransform(219.5,96.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FE97A1").s().p("AAABOQgTgkAGg9QAOgYAJgjQABgBAFAAIgBAKQgEAkgOAYQgDAvAKAhQACAEAAAFQgFAAgBgCg");
	this.shape_79.setTransform(167.4,49.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F64E3C").s().p("AgYACIAAgEQBMAFgrAAIghgBg");
	this.shape_80.setTransform(177.5,40.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D97291").s().p("AAUD1QgFAAgEACQh0A+hyg2IAAAKIAAAKQgFAAgDgDQhIg+hagtIAFAAQgTgggkgSQAAgFgCgEQgqhOgkhSQAAgFgCgFQgbhCgzgsQgFAAAAgCQgPgwgKgyIAAgKQB2DYCcC1QAmAtBDATQDBA1D3gFQBEgcAtgyQACgCAFAAQD2ABBFizQAAgBAFAAIgBAKQgEBEgjApIAAAKQgFAAgCACQgyAug/AgIgKAAQhhAPg1gPQgFAAgBACQglBQhXAcIgKAAIgLAAQhZAAgygogABuEEQB9gFh9AAgAiKDwQBfAHhggMIABAFg");
	this.shape_81.setTransform(204,95.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CA1B1A").s().p("AAbChQgHgHgKgFQAAgFgDgDQgPgXgfgJQAAgFgCgCQhahHhig9QAAgFgCgEQgQgdg0gqQAegeAxgPQABAAAAgFQBEAHBTApQAEACAFAAQCDg/CAArIAEgCQAagNAUgPQAcgUAUAfQACAEAAAFQAAAFgDADQhfCUh6B7QgFAAgBACQgMAZggADQAAgFgDgDg");
	this.shape_82.setTransform(214,80.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D17C97").s().p("AhFBWQBXhHAvh0QAAgCAFAAIgBAKQgRBSgqA5QgFAAgBACQgXA4gXAAQgOAAgNgSg");
	this.shape_83.setTransform(272,68.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FCC5D3").s().p("AkyIbQhDgTgngsQibi2h2jZIAAAKQgFAAAAgBQgFgdAAgeQAPg1AXgvQACgEAAgFQAbgRAfgRQACgBAAgFQAFi+B/h1QB4huD4ARQC+h+DRB1QA8AhAUBMQFTAtgdFtIAAAKQgFAAgBACQguB0hYBHQAlAxAlhXQABgCAFAAQAAAFgCAEQgXA2gtBNQAJALABATIAAAKQgFAAgBACQhECzj2gBQgFAAgCADQguAyhDAbIguABQjbAAivgxgAkJkaQAAAFgCABQhdAZgtBFIAAAKQgFAAgBABQgJAjgPAYQgGA+AUAkQABACAFAAQAMA0AnAZQAEACAFAAQBMBABVA2QAEACAFAAQBiA/BYBGQADACAAAFQANAbAcALQAEACAFAAQAKAFAHAIQADACAAAFQAhAXAPgrQACgFAAgFQB6h6BfiVQADgEAAgFQAUgeASgfQACgEAAgFQAFAAABgCQAghKAChnQgFAAgBgBQgPgwgTgpQgFAAgDgCQgrgggxgaIgKAAQhPgEg9AOQAAAFgDACQhAAqg1AzQgFAAgEgCQghgUgbgcIgKgBQhKgThdAAIghAAg");
	this.shape_84.setTransform(209.6,58.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3831").s().p("AjBDtQhVg2hNhAQAAgFgCgDQgNgVgjg9QAZgUAtAAIAKAAQBzhUCkgnQABgBAAgFQBVAYAqguQACgDAAgFQAZALAXgOQACgCAAgFQAzAmBhgqQACgBAAgFQgyghgyAGQABgXA2AAIAAgDQgGgaAVATQBfAIhGAWIAPAAQBPAGAaA/QAAABAFAAQAHBYgZBcQgCAEAAAFQAAAFgCAEQgSAfgUAeQAAgFgCgDQgTgfgdATQgUAPgaANIgEACQiAgriDA/QgFAAgEgCQhTgphEgHQAAAFgBABQgxAOgeAeQA1ArAPAcQACAEAAAFQgFAAgDgCg");
	this.shape_85.setTransform(209.6,53.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F9635F").s().p("AlqDBQgngZgNg1QAAgFgBgEQgLghACgwQAQgYAEgjIAAgKIAAgKQAuhFBdgZQABgBAAgFQBygEBXAXIAJABQAcAcAhAUQADACAFAAQA2gzBAgqQACgCAAgFQA9gOBPAEIAKAAQAyAaAqAgQADACAFAAQATApAQAwQAAABAFAAQgCBmggBLQgBACgFAAQAAgFACgEQAZhdgHhXQgFAAAAgBQgag/hPgGIgPAAQBGgWhfgIQgVgTAGAaIAAADQg2AAgBAXQAygGAyAhQAAAFgCABQhhAqgzgmQAAAFgCACQgXAOgZgLQAAAFgCADQgqAuhVgYQAAAFgBABQikAmhzBVIgKAAQgtAAgZAUQAjA9ANAVQACADAAAFQgFAAgDgCgAlYgxQBjAChjgHg");
	this.shape_86.setTransform(209.5,46);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#87542B").s().p("AC1CpQj9gai6gnQAAgFgBgBQg8gXgxgfQAAgFgCgDQgPgUAHgpQAqgrAugoQACgCAAgFQALAAAOgFQAUgHAbgQQADgCAFAAQBUAjBQgUQAGgCABAMIAAAPIgBAoQBXAxARhYQAAgBAFAAQAcgUAMAPIgFgNQgKgUAZgMQAWgnAFBKIACAjQABBjgeB4QA9g4AmhyQABgEAAgFQBcgEgthAQgCgCgFAAIABgFQAJg/BBA2QAEADADAGIABAEQACAGAFAFQABgIAFA7QAEAmACAyQABARARADIAAABIgFAHQhcA3heA0IgJABg");
	this.shape_87.setTransform(175.9,352.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#633C1F").s().p("ACUDrIgBgjQgFhKgWAnQgaAMAKAVIAGANQgMgQgcAUQgFAAAAABQgSBYhWgxIABgoIAAgPQgCgMgFACQhRAVhTgkQgFAAgEACQgaAQgUAHQgOAFgLAAQAAAFgDACQgtAogqArQgIAqAPAUQADADAAAFQgFAAgCgCQgZgqgIg4QA3geAygjQDpiiB+kJQAZg0AUg3QBcgwBGhGQADgCAFAAQgBEyB8C0QACADAFAAQAOBRgFBUQgFBRgXBUQgBAFAAAFQgRgDgBgRQgDgygDgnQgGg7AAAIQgFgFgCgGIgCgEQgCgGgEgDQhBg2gJA/IgBAFQAFAAABADQAtA/hbAEQAAAFgCAEQglB0g9A3QAdh4gBhkg");
	this.shape_88.setTransform(176,320.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#774A27").s().p("AsDHFQhGgQg8goQgugfgigsIgEgFQgIgLgKgJIAAgBQgag7gJhNIgDgjQB8kSBoknQACgFAAgFQBEAgA/AkQAEACAFAAQBbFJD+CiQAlAZAgAcQAoAkAfArQAFAGAAAKQgpBtiIAdQg2ALhDATQhNAVgjgdQAJhygnAAIAAAOIAABGQgJBHhkgZQgBgBAAgFQANhYghglIAAAFQAHBSgQA7IgBAJIgKgCgApjA3QAAAFgDAEQgZAmgMA1IAAAFIAAAFQAAA8AeAeIgBgKQgLguAFgnQAHgwAeglIAAgKQAIhgglg0QAGA7ADBPgAtdBpQAOBxgOh7IAAAKgArIk6QgjC0hoCfIAAAeIAAAUQBGiUBaiXIABgKQAKhCgfgYIgBAKgAQSFYIgGAFQg/ArhEArQgVANgZACIgCAAQBdgzBcg3g");
	this.shape_89.setTransform(109.2,324);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4B2F29").s().p("AIrPKQgOi0gLizQhJiThuhuQhwhxgpitQiFoypigYQAPAPAZAGQEEA8CqCVQgFAFgBgBQhMgvhsgJQlmgehmkWIABgKQALhWg+hKQAUgZAXgXQACgCAFAAQAAAFgCADQgIAMgKAKQAQAOA1gsQBshdDVANQh2gXh6AWIgKABIAAgKQI9g+E0EXQADADAFAAQAoBvA6CLQACAFAAAFQg+imh7hpQBHCKBJC3QABAFAAAFQAzA0ApgDQADgEAHgBIADACIALgEQAEgCADgJQACgGAFgFIAAgKIADgBIABADQAPAcAbARQAuAdAbAsIgTAKQArBIBBAzQACACAAAFIgKAAQAUAtAFBAIAFABIAAAKQgJBKgVAPIACAFQAVAzgggsIg9hRQAmC/BjCAQAqA3ABBVQABCqg6B+QgcA8gFhqIgBADQgJAWAAAZIgFAAQAdh2hAhSQgFAeACAdQAEBTgfh6QgFAAgBgCIgEgIQgdCEgLCyQAbAwgVAyQgBACgFAAIgFgBgAIwJPQAjgIgjgMgAKCHgQAbBjgdhsQAAAFACAEgAGnDuQB4CCBDCFQAAgFgBgFQg6imiDheQAAAFADACgAGliEIAJAOQAYgxhAgfQANAlASAdgAHHimIAFANQAqhDhwgcQAuAeATA0gApenhQACADAFAAQBVA1hDg9QgDgCgFAAQAAgFgCgDQgqgmgkgsQAXA5AoAogAjHnoQAAgFgBgBQkGhWj3hiQAAAFADADQBOB5CzAVIAFAAQgNgNgogQQCfASCLAzgAqxrEIABAFQBuAKBZgPIAAgFQgugFgqAAQg8AAg0AKgAoCseQggASgrAWQgWAFAWABQC0AHC0gDIgKgBQh4gTiCgKIAKgBQDQgRCZAkQj6h7kPBpIAAAFQA6gHA0gSg");
	this.shape_90.setTransform(154,203.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#150B08").s().p("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");
	this.shape_91.setTransform(121.7,236.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E45680").s().p("AgNACIAAgFIAbAEIAAACIgbgBg");
	this.shape_92.setTransform(191.4,118.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_92},{t:this.shape_68},{t:this.shape_91},{t:this.shape_90},{t:this.shape_64},{t:this.shape_65},{t:this.shape_62},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_55},{t:this.shape_56},{t:this.shape_54},{t:this.shape_53},{t:this.shape_51},{t:this.shape_52},{t:this.shape_48},{t:this.shape_50},{t:this.shape_49},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_41},{t:this.shape_42},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_32},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_89},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_13},{t:this.shape},{t:this.shape_14},{t:this.shape_12},{t:this.shape_88},{t:this.shape_87},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},37).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279.3,384.3);


(lib.face2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol3_1();
	this.instance.parent = this;
	this.instance.setTransform(72.4,151.5,1,1,0,0,0,19.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:151.3},0).wait(1).to({x:72.5,y:151.2},0).wait(1).to({y:151.1},0).wait(1).to({x:72.6,y:150.9},0).wait(1).to({y:150.8},0).wait(1).to({x:72.7,y:150.7},0).wait(1).to({x:72.8,y:150.5},0).wait(1).to({y:150.4},0).wait(1).to({x:72.9,y:150.3},0).wait(1).to({y:150.1},0).wait(1).to({x:73,y:150},0).wait(1).to({y:150.1},0).wait(1).to({x:73.1,y:150.2},0).wait(1).to({y:150.4},0).wait(1).to({y:150.5},0).wait(1).to({y:150.6},0).wait(1).to({x:73.2,y:150.7},0).wait(1).to({y:150.8},0).wait(1).to({y:151},0).wait(1).to({y:151.1},0).wait(1).to({x:73.3,y:151.2},0).wait(1).to({y:151.3},0).wait(1).to({y:151.5},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AhGBKIgSgFIgTgGIgBgCIgpgoQgJgJgGgLIgBgBQAAgKAOgBIADgBQAVAAAVABIADAAIAsgBIAOgCIApgHIAGgCIACABQACgCAEAAIACgCIAGgCIAXgHIApgNQAVgGAVgKIAVgKIAHgDIAKgEIAEACIgCAKQgGATgKASQgFAHAFAFQAIAJAHgJQgPAWgUASIgQAMIgKAGQgbAWggAPQgJAEgKABIgcACQghAAghgIg");
	this.shape.setTransform(73.4,149.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#946034").s().p("AhvB6QAAgFgCgEQgMgWgGgdQA/AKBGghQAIgDgVAGQgegpAxgrIAIAGQAEAEABADQAfgiAZhLQABgEAAgFQAQBzAcApQABADAFAAIABAKQALBSggAmIgKABQgbAFgfAAQhDAAhUgag");
	this.shape_1.setTransform(136.2,165.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#965F33").s().p("AAaA1QgUgIgTgKQAAgFgDgDQgZgYAIg5QBFAQAABTIAAAKQgFAAgFgCg");
	this.shape_2.setTransform(116.4,172.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#695441").s().p("AgsgEIBPAAIAKAAQAAAEgBAAQgYAFgTAAQgaAAgTgJg");
	this.shape_3.setTransform(90.5,196.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C5120").s().p("AgJAIQADgSAAgUQAmABgpA7IgBABQgCAAADgXg");
	this.shape_4.setTransform(111.7,161.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5C997").s().p("AgJC0IhQAAIgKgBQhngRgRhmQA6gQAegDQARgBAAgoQAAgJAFgKQBmhJBfhQQACgCAAgFQAeBfAxBQQAPAZAkAJQhFBviOAmIgJABIgJAAg");
	this.shape_5.setTransform(95,178);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#935E2F").s().p("AgZA/QgBAAAAgFQgMg+gRg6QgBgEgBgFQAtBKBGAtIgGAAQgEAYgdAAQgSAAgagJg");
	this.shape_6.setTransform(124.8,163.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#925B2A").s().p("AgCAOQgOgEgCgbQAxAjgQAAQgFAAgMgEg");
	this.shape_7.setTransform(153.9,146.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D5D22").s().p("AgNAAIADgMIABgBIAAAAIABgCIAHABIAEACIAKAaIgHACQgLAAgIgQg");
	this.shape_8.setTransform(134.9,147.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B47444").s().p("AgVgUIAJAAIAKAAQABAUAIAAIAQAAQgCAVgJAAQgLAAgWgpg");
	this.shape_9.setTransform(127.3,108.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#061C0B").s().p("AgUABQBPgohCAzQgHAFgEAAQgGAAAEgQg");
	this.shape_10.setTransform(42.1,105.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#815733").s().p("Ai8hzQgBgEAAgFQByBHAuBTIAAgFQABgtBVAqQA2AbBFgIQAFgBAFAFQh8A3h7ASIggAHQg0h2gvh6g");
	this.shape_11.setTransform(61,172.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BABCBB").s().p("AhiAhQgUgBgWABIgCAAIAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgGAAIgDgEQCZATCThMQAEgCAFAAIgBAFIgVAKQgVAJgWAHIgoALIgXAHIgGADIgRAEIgoAHIgOACIgtACIgDgBg");
	this.shape_12.setTransform(72.5,145.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#835E40").s().p("AgdBJQASglALgrIAAgJQAMhhAJAwQAJA1AAA3QAAAFgDADQgYAfgQAAQgJAAgHgJg");
	this.shape_13.setTransform(26,159.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#575858").s().p("AAAAxQgEgxAAgxIAJAAIAABZIAAAKIgFgBg");
	this.shape_14.setTransform(2.5,117);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#645741").s().p("AgiAAQAKAAAIgEQACgBAAgFIAdAAIAKAAQAFAAACADQADACAAAFQgFAAgDABQgQAKgOAAQgQAAgPgLg");
	this.shape_15.setTransform(34.5,113.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DFE3DF").s().p("AALAtIgdAAQgFAAgEgCQgRgMgEgaQAVgbAdgUQAEgCAFAAQARASgCApIAFAAQAAAFABAAQAnANgyACIAAAKIgKAAg");
	this.shape_16.setTransform(34.9,107.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#526655").s().p("AAAAjQACgpgQgSIAAgKIATAAIAKAAIAAAUIAAAKQAAAEgCADQgDACgFAAIAAAUIAAAKg");
	this.shape_17.setTransform(37.5,105.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B9784F").s().p("AgaAQQgDgGgFgFIAAgJQAbACAHgVQAAgBAFAAQgBARAVgGIAKgBQAAAFgBABQgmAIgUAZQAAgFgCgEg");
	this.shape_18.setTransform(68.5,132.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#986436").s().p("AgaALQBThHgvBPQgCACgFAAIgIABIgKABQgLAAAAgMg");
	this.shape_19.setTransform(71.7,128.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DFDCE2").s().p("AifAhIAAgKQAtAAAtgFIAAgFQBygcBzgVIgEAIQgBACgFAAQgFAAgEACQh4A9h5AAQgdAAgegEg");
	this.shape_20.setTransform(73,144.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BBC5C2").s().p("AgqAIQgHgIgFgJIBjAAIAKAAIAAAFQgtAEgsAAIAAAKQgFAAgDgCg");
	this.shape_21.setTransform(60.5,147);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D25B36").s().p("AiGAPQBtgoCWABIAKAAQAAAFgCABQgIAEgKAAIgKABQh/ALhwAbIAAgKg");
	this.shape_22.setTransform(70.5,140.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#39241A").s().p("AhuBmQgagUgUgaIgCgDIgFgHQgJgNgGgOIgBAAIAAAAQgPgWgbgKQAFAAACgDQADgCAAgFQC0AACJgtQACAAAAgFQAKAAAIgEQACgBAAgFQB+g3grBKQAEAGgEAJIgHAUQgEARgIAOIgIAMQgGAJgIgJQgFgFAEgHQALgRAFgTIADgKIACgKIgQAMIgHADIABgEQAFAAABgCIAEgIQhzAUhyAeIgKAAIhkAAQAFAJAHAHQADADAFAAIADAEIgQgBQAGAHAEAIIABACQAGALAJAJIAqAoIABACIgBACQgFAIgHAAQgFAAgHgGg");
	this.shape_23.setTransform(71.2,146.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B33B22").s().p("AifAPIA8AAIAKAAQBvgbCAgLIAKgBQAAAFgCABQiKArizAAIAAgKg");
	this.shape_24.setTransform(66,141.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#965839").s().p("Ag7ApQAZhKAPhQIAAAFQgYB4A2BEQAMANAbgCQAFAFADAGQACAEAAAFIgKABQgOACgNAAQhNAAgFhJg");
	this.shape_25.setTransform(60,123.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BBC9C2").s().p("AgOAOIAAgKIAAgTIATAAIAKAAIAAAKQADAVgSAAQgGAAgIgCg");
	this.shape_26.setTransform(40.5,103.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4B5D42").s().p("AhKA3QAAgFgDgDQgCgCgFAAIAAgKQAygCgmgNQgCAAAAgFIAAgKIAAgTQAFAAADgDQACgCAAgFQAjAJgFgdIAAgKQApADAaAUQACACAAAFQgFAAAAABQgGAbgTALQAmAbAUgmQACgEAAgEQAFAEAGADQAEACAFAAQAAAFgDACQg3ArhhAAIgEAAgAg2gOQgHAZAUgOQAlgdgIAAQgHAAgjASg");
	this.shape_27.setTransform(45.5,107.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DCE9DC").s().p("AgdAOQATgLAGgbQAAgBAEAAQARADAHAPQABACAFAAQAAAFgCADQgMAXgQAAQgNAAgQgMg");
	this.shape_28.setTransform(49,107.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B2218").s().p("AhXBEQgigegcgmQAugXA9goQADgBAAgFIBjAAIAKAAQAuAjAfAuQADADAAAFQgFAAgEgCQgGgDgFgFQgFAAgBgCQgHgOgRgDQAAgFgCgCQgagTgqgEIgKAAIgUAAIgJAAIgUAAIAAAKQgFAAgDACQgfAUgVAbQAFAaAQAMQAEACAFAAQAAAFgCABQgIAEgKAAQgFAAgDgCg");
	this.shape_29.setTransform(39,106);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#513F31").s().p("AgngaIAKAAQAAAKAEAIQABACAFAAQALASAcABIAKAAQAFAAADACQACADAAAFIgKABQgPADgMAAQgwAAAGg1g");
	this.shape_30.setTransform(74,103.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#786955").s().p("AgVAHQgDgCgFAAIAAgJQAbAGAGgOQABgCAFAAQAFAFAGADQAEACAFAAQAAAEgBABQgbAGgVAIQAAgFgCgDg");
	this.shape_31.setTransform(80,104.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DDE5DC").s().p("AgEAoQgdgBgLgTIAAgKQAPgXAXgTQACgCAAgFIAJAAQAMAhAZATQADACAAAFQgFAAgBACQgHAPgbgHIAAAKIgJAAg");
	this.shape_32.setTransform(76.5,101);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#37241A").s().p("AgeA1QgEgIAAgKIAAgKIAAgKIA9hDQADgCAFAAQAAAFgCAFQgHAVgVAJQAAAFACACQADADAFAAQAAAEgCACQgWATgPAYIAAAKQgFAAgBgCg");
	this.shape_33.setTransform(74.5,97.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6E4931").s().p("Ag/ANQgLgIAAgTQBJASBCgRIAKgBQAAAFgCABQgzAVhMgIIAAAKQgFAAgEgCg");
	this.shape_34.setTransform(73.5,85.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#553924").s().p("AhPAWQAcACAKgOQACgDAAgFQAFAAAEgCQBFgvApAUQAAAFgCACQgtAshSAIIgJABIgKABQgMAAABgMg");
	this.shape_35.setTransform(42,92.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#715433").s().p("AgnAMQAWgMATgPQADgCAFAAQAPAAANAEQACABAAAFQAAAFgCABQgmATgVAAQgMAAgGgGg");
	this.shape_36.setTransform(29,97.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#734E3D").s().p("AgLAPQgNgFgPAAIAAgKQAmgGAggLQAEgCAFAAQAAAFgDADQgJANgcgCQAAAQAVgFIAJgBQAAAFgBABQgTAEgTAAQAAgFgCAAg");
	this.shape_37.setTransform(34,95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#65442E").s().p("ABMDvQgIgxgNBiQAAgGgCgEQhEjNiBiQIAAgLIAAhkQAhhvAlg2IAAAGQAHBfgbA8IAKgQIAbBKQAFANgBgQQAAgdATgMQAJg3ARBHIAAgaQgBgWAFAWQAiDrBwCcQADAEAAAFQgRBIglA3QgBADgFgBQAAg3gJg1g");
	this.shape_38.setTransform(20.5,129.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#513D38").s().p("AgrALQgBgFAAgFQAmguAzgcIAAAFQgUA+gbBEQgCAEAAAFQgDADgCAAQgPAAgTg/g");
	this.shape_39.setTransform(8.5,71.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#544039").s().p("AgxAnQAbgqAigiQADgDAFAAQADARATgOQADgDAFAAQgKAUgOAQQgrAtgXAAQgFAAgEgCg");
	this.shape_40.setTransform(32,47.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#644D46").s().p("AikA6IAAgKQBahFCAgiQABgBAAgFQAxAMA9gRIAAAFQiNBYiUAeIgKABQgFAAgDADQgJAGgFAAQgGAAgCgJg");
	this.shape_41.setTransform(50.5,37.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#584039").s().p("AhKAwQBAgmBNg7QADgCAFAAQghBgh0AHg");
	this.shape_42.setTransform(49.5,46.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#583F3B").s().p("AgYgPIAUAAIAJAAQgFAaAZgCIAAAFIgKABIgMABQgdAAACgfg");
	this.shape_43.setTransform(60.5,23.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#68544E").s().p("AgMAGIAAgFQgaACAGgaIAKAAIAKAAQgBARAVgGIAJgBQAFAAABACQAUAjgQAAQgLAAgcgSg");
	this.shape_44.setTransform(64.3,24.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5A443E").s().p("AjDAtQA4gtBLgXQAEgBAFAAQBDgCBDAMIgPAAQhQABBlAOQBwAQhOgzIAPACQAWAEgCgQQA8AKgaAiIgEAFQACAWg0gCIAAAKIgJABQgWAFABgQIAKAAQhPgYhZAZQhCAThBAAIgKAAg");
	this.shape_45.setTransform(52.6,19.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#715C56").s().p("AAjAZQhkgOBQgCIAPAAQhCgLhEACIAAgKQBjgeBkATIAKABQABARgWgEIgOgDQA7AngzAAQgQAAgbgEg");
	this.shape_46.setTransform(57.5,17.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A16147").s().p("AgnB4IAAgKQgBhAgTguIAAgJQAigzAdg5QABgCAFAAQAKAYAQgTIAEgFQgnA3A7BAQAAAZgIAVQgBABAAABQAAAAgBABQAAAAAAAAQAAAAgBgBQgeiNgwBxQATAzgRAoQgCAEAAAFIgKAAg");
	this.shape_47.setTransform(130,94);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#53352C").s().p("AgvgcQgCgEAAgFQBMANgbAaIADAEQAUAfAHgxIAIAHQACADAKgFQgTAtgWAAQgZAAgfhCg");
	this.shape_48.setTransform(119,85.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#654D33").s().p("AAFAMQgMgMgPgKQBBgZgeA0QgBACgFAAQAAgFgCgCg");
	this.shape_49.setTransform(98.3,93.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4D3F38").s().p("AgMAbQgCgCAAgFIAAgKQAQgDgFgaIgBgKQAQAIgCAfIAFAAQAAAFgCACQgIAIgJAFQgFAAgDgDg");
	this.shape_50.setTransform(95.5,98);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E7EEED").s().p("AAAAeQgEAAgDgDQgUgPAIgpIAKAAIAJAAQAFAFAGADQAEACAFAAIABAKQAGAagRADIAAAKIgKAAg");
	this.shape_51.setTransform(93,97);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B0BEB4").s().p("AgTAeQARgXgCguIAEAAQAKAAAIAEQACABAAAFIgKAAIgKAAQgGApASAPQADADAFAAQAAAFgBAAQgNAFgHAAQgNAAgFgKg");
	this.shape_52.setTransform(91,97);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0A130A").s().p("AgbgBQBngYhZAkIgBABQgEAAgJgNg");
	this.shape_53.setTransform(83.8,97.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#405F42").s().p("AgmA5QgGgDgFgFQAAgFgDgCQgZgUgMggIAAgKQAPgKAQgIQAEgCAFAAQAPAqAOgrQABgEAAgFQAbgMApAHQABAAAAAFIgFAAQACAvgRAWQAIARAfgMQABAAAAgFIAKAAQAAAFACACQADADAFAAQAAAFgBAAIh2AZQgFAAgEgCgAgxgKQAKAOADgCQA3gWgRAAQgKAAgpAKg");
	this.shape_54.setTransform(86,98.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CAD4CD").s().p("AgOgFQAKgFAKgDQAEgCAFAAQAAAFgBAFQgHAVgHAAQgHAAgHgVg");
	this.shape_55.setTransform(82.5,94.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#907158").s().p("AAoAFIhZAAIAAgJQAxAAAyAEIAAAFIgKAAg");
	this.shape_56.setTransform(89,89.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1C160D").s().p("ABfAtQACgggRgIQgFAAgEgCQgGgDgFgEQAAgFgCgBQgIgEgKAAQAAgFgBAAQgogGgcALQgFAAgEACQgLADgKAFQgFAAgEACQgQAHgPAKIAAAKIgKAAQgFAAgDgCQgCgDAAgFQAVgIAHgVQACgFAAgFIAAgKQAiAEASgLQADgDAFAAIBZAAIAKAAQAqgCgUAPQgCACAAAFQAPAKAMANQADABAAAFIgBAKQgCARgRADIAAAKg");
	this.shape_57.setTransform(87,94.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F5C796").s().p("AiKKYQmUjLg2omQASh1AVhxIABgKQC2hsCrh6QA5goAehGQB8EED9CGQACABAAAFQAzCQBvAYQAHACABgUQATAuABBAIAAAJIgKAAQAoBIAFg0IgPAAQgKgBAAgTQAAgEACgEQARgogTgzQAxhyAeCOQAAABAAAAQABAAAAAAQAAgBAAAAQABgBAAgBQAJgVAAgZQg8hBAog3IgEAFQgQATgKgYQAFgFAGgDQA1gfAOA0QBGEFjkBLQAAA3gSAxQg4CdhjB8Qh9CdkFASQAAgFgCgBgAkyF8QAAAFgDACQgCADgFAAQAaAKAQAXIgBABIgBAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABABAAIADAAQAGAKAEALQAAABAAAAQABAAAAAAQABABAAAAQABAAABAAIAEAHQAYA4A+AWQACAAAAAFQDLAFA8iLQAIgPAEgQIAHgUQADgKgDgGQArhKh+A3IgKAAQiWgBhtApIAAAKIgKAAIg8AAIAAAKgAkKDcQAGBUBogNIAKgBQATgaAogIQABgBAAgFQAFAAABgCQAvhQhTBIQgFAAgBABQgHAVgbgCIAAAKQgbACgMgOQg4hDAZh5IAAgFQgPBQgZBLgAnLg/Qg9AoguAXQAbAmAjAeQADACAFAAQAcAWAhgUQAEgCAFAAQBlABA4gsQADgCAAgFQAAgFgDgDQgfgugugjIgKAAIhkAAQAAAFgDABgAgkABIAKgBQAWgHAagGQABgBAAgFIB3gZQABAAAAgFQAKgFAHgIQADgCAAgFIAAgKQARgDACgRIABgKQAFAAABgCQAdg1hBAZQAAgFACgCQATgPgpACIgBgFQgxgFgyAAIAAAKQgFAAgEADQgSAKgggDIAAAKQgFAAgDACIg+BEIAAAKIAAAKIgKAAQgIBCBOgQgAmiiDQgDACgFAAQgFAAgFACQggALgmAHIAAAKQgFAAgDACQgUAQgWAMQAQATA+ghQACgBAAgFQAUAAATgEQABgBAAgFQBSgHAtguQADgCAAgFQgNgGgOAAQgjAAgyAigAiHi/QAEACAFAAQCCAQCKgfQABAAAAgFQg2gRhMAHIgKAAIgJABQhDAShJgTQAAAUALAIg");
	this.shape_58.setTransform(80.7,106);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#543524").s().p("AiGANIAAgKQBNAIAzgVQACgBAAgFIAJAAQBNgGA1AQQAAAFgBAAQhbAUhXAAQgtAAgtgGg");
	this.shape_59.setTransform(81.5,85.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#543B34").s().p("AA+BZQgEgBgFAAQgyhvA1A6QACADAFAAQg/hBhyhEQgCgBAAgFQCyAjAaCGIgFAAQAxAigUAAQgMAAgmgNg");
	this.shape_60.setTransform(105.7,64.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#5D4640").s().p("AggAYQgMgDAAgTQA/hAAaBKIgKgCQgNgCgaAUIgDAAQgGAAgTgEg");
	this.shape_61.setTransform(85.5,25.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#604C47").s().p("AgIgTIgBgKQgjgaghgbQgCgCAAgFQB4AUAmCVIABAKQhHgpgRhEg");
	this.shape_62.setTransform(82,41);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5B4944").s().p("AgcgBQB0ACh0ABg");
	this.shape_63.setTransform(98,14.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#614944").s().p("AAIgKQgDgCAAgFQhNAEgdgbQgDgCAAgFQBFgcAqAaQADACAFAAQBKAuAOA2QACAEAAAFQgngWg6gyg");
	this.shape_64.setTransform(98.5,23.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#505351").s().p("ABGAFIiVAAIAAgJQBPAABPAEIABAFIgKAAg");
	this.shape_65.setTransform(78,0.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5B4642").s().p("ABHASQgBgCgFAAQgkgkh7gSIAAgFQCDgRA4A8QACABAAAFQgBAqgHAAQgGAAgKgeg");
	this.shape_66.setTransform(78.5,8.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#916136").s().p("AhZBEIgBgKQgLgzAChOQA3h3BKCBIAEgIIABgCQALAJASgHQAEgCACgEQA9BLg9B2QgFAAgDgDQg+hDgdhjQgHBLAXAuQAJASgIAMQgTAdgQAAQgYAAgSg9g");
	this.shape_67.setTransform(163,165.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7C522E").s().p("AiJD1IgoAAIAAgKQABhThHgRQgIA6AaAZQACACAAAFQgFAAgBgCQg1hOgBiCQAtg+ALAVQAWAngHAZQgIAjAHAgQARgSgJhbQgIhNAmgfQAAAFAEAFIACAEQABAOANALQAgAagGAoQgDAVAOAHQAAgHADgHQAEgHAHgEQAAglAJgiQAGgXAOgPQAHgOAJgNQACgDAEgBQAEgNAHgNQALgTAJgVQAKgYAVgKQAZARgTAcQANAPgKAcIgBADQACALAIALQAVAbAJAeIAHAEQACgOAPgDIAIgSQAKgUAIgWQAKgbAWgMQARALgEASQAJALABARQAAACAEACQAaAJgBATIAHAKQAkAwAlAtIAEAFIAHATQAEAKAGAGIgCACIgEAHQhLh/g3B1QgCBPALAzIABAKQgFAAAAgBQgOg8gfgnIAAAoIAAAKQgFAAgBgCQgcgrgQhyQAAAFgBAFQgZBJgfAiQgBgDgEgDIgHgHQgyAsAeApQAWgGgIAEQhHAhg/gLQAGAeAMAVQACAEAAAFIgKAAgAi5AjQAQA5AMA/QAAAFACABQBHAYAHgoIAFAAQhGgtgthLQAAAFACAFgAkOBVQgEAbAEgGQAqg7gngCQAAAUgDAUgAgnhHIAAAAIAAABIgDAMQAJAVASgGIgKgbIgFgCIgIgBIgBACgACegzQAzAQhDgxQACAcAOAFg");
	this.shape_68.setTransform(137.8,153.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5A3C2B").s().p("ADcILQgGgGgDgKIgHgTIgFgFQglgugjgwIgIgKQABgTgZgJQgEgCAAgCQgCgRgIgLQAEgSgRgLQgWAMgKAbQgJAWgKAUIgIASQgNADgDAOIgHgEQgIgegWgbQgIgLgBgLIABgDQAKgcgOgPQATgcgYgRQgWAKgLAYQgJAVgKATQgIANgDANQgEABgCADQgKANgGAOQgOAPgGAXQgJAiAAAlQgIAEgDAIQgEAHABAHQgPgHADgWQAGgogfgaQgOgLAAgOIgDgEQgDgFAAgFQgBgEACgFQAHgQASgCQANg/Abg8QACgFAAgFQgDgqAUgjQAHgNANgIIAlgYIAmgZQANgIAKgNQAIgLAMgFQAjhdAagfQACgDAFAAQgxiWBSBsQACACAFAAQAtAVgUgxQAAgCgFAAQhFhChOg5QgCgCAAgFQA5AQA0AiIgEgIQgBgCgFAAQAVg5hugDIgKAAQA5gjg5AIQghAEgbANQh3gqB3AVIAKABQgOgLgVgnIAOAEQAaAGAjAAQA2gaheAGIgKAAQhZgkg7hCQgCgDAAgFQA2AGA+AuQBKA2AogkQAOgOAKArQAAABAFAAQAXAcgLAXQgCAEAAAFQBaA3AsBnQABACAFAAQgODjA0CtQACAEAAAFIgFgEIgBAHQgBAFABAHIACAIQgEAXAFAaIAIAnIACAwIAAAGIAAACQARAMAGAZQACALAGAJQAJAaALAaQADASgBATIAAADQgCAEgEACQgJAEgGAAQgIAAgGgFgAipFPIAEgBIgCgIIgCAJg");
	this.shape_69.setTransform(144.5,105.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#33231E").s().p("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");
	this.shape_70.setTransform(91.3,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.6,199);


(lib.face1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2_1();
	this.instance.parent = this;
	this.instance.setTransform(110.5,210.8,1,1,0,0,0,27.5,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:210.9},0).wait(1).to({y:211.1},0).wait(1).to({y:211.3},0).wait(1).to({y:211.5},0).wait(1).to({y:211.6},0).wait(1).to({y:211.8},0).wait(1).to({y:212},0).wait(1).to({y:212.2},0).wait(1).to({y:212.3},0).wait(1).to({y:212.5},0).wait(1).to({y:212.7},0).wait(1).to({y:212.9},0).wait(1).to({y:213},0).wait(1).to({y:213.2},0).wait(1).to({y:213.4},0).wait(1).to({y:213.6},0).wait(1).to({y:213.7},0).wait(1).to({y:213.9},0).wait(1).to({y:214.1},0).wait(1).to({y:214.3},0).wait(1).to({y:214.4},0).wait(1).to({y:214.6},0).wait(1).to({y:214.8},0).wait(1).to({y:214.5},0).wait(1).to({y:214.2},0).wait(1).to({y:214},0).wait(1).to({y:213.7},0).wait(1).to({y:213.4},0).wait(1).to({y:213.1},0).wait(1).to({y:212.8},0).wait(1).to({y:212.6},0).wait(1).to({y:212.3},0).wait(1).to({y:212},0).wait(1).to({y:211.7},0).wait(1).to({y:211.4},0).wait(1).to({y:211.2},0).wait(1).to({y:210.9},0).wait(1).to({y:210.6},0).wait(1).to({y:210.3},0).wait(1).to({y:210.1},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+BCQgSgBgRgFQg9gTg1giIgNgIQgKgHgHgKIgHgMQgJgGgGgLIgBgDIAAgBIgDgCIgBgBQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBABAAIADgCIABAAIAbAEIAJADIAKADQBCAOBDAIQAbABAaAEIAWgBIANgCQAEAAADACIACABQAFgBAIABIAIAAIAxgEQA4gFA2gMQAkgIAjgLIAEACQAEADAAACQADAHgLAIQgHAGgIAAIgDABIAAACQgDAKgQAFIgKAEQgCAEgDADIgJAGIgDACQgGABgEAFIgCABQgiAkgxAOIgZAGQgQADgRABIgvABIgGAAIg3gBg");
	this.shape.setTransform(110.7,210);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B6C46").s().p("AAHAbIgMgsQgBgFAAgFIANA3IAAgBg");
	this.shape_1.setTransform(206.7,252.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CACED7").s().p("AgaAHQBrgnhrAsg");
	this.shape_2.setTransform(168.7,278.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A19FA7").s().p("AgogFQAnAAAlADIABACIAEAEIgCAAIgKAAQgNACgMAAQgcAAgQgLg");
	this.shape_3.setTransform(176.1,268.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#260F09").s().p("AgPgVQAOAVARAQIgCAEQgDgHgJgFQgHAGgDAIQgFgUgCgXg");
	this.shape_4.setTransform(201.6,260.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D0D6E3").s().p("AgZACQAVgFAEgGIAaAlIgCAAQgaAAgXgagAgNgVQgCgBAAgFIACAAIAGAIIgGgCg");
	this.shape_5.setTransform(181.6,271.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663E26").s().p("AgHgUQgBgEAAgFIARA7IgQgyg");
	this.shape_6.setTransform(182.9,217.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#85888B").s().p("AgFAjIAAhPIAJAAIAAAKQAHAzgQAcIAAgKg");
	this.shape_7.setTransform(218.6,232);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1D4DF").s().p("AgUADQBTgXhTAcg");
	this.shape_8.setTransform(62.1,281.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CDCBD6").s().p("AgWgEQgCAAAAgFQA0ATgDAAQgDAAgsgOg");
	this.shape_9.setTransform(52.5,278.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CFD4E0").s().p("AgYgIIAAgKQAhABAOAUQACADAAAFQgFAAgDADQgIAFgHAAQgPAAgLgbg");
	this.shape_10.setTransform(71.5,265.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3D5E4").s().p("AgzgIIAAgKQAKgKAUAAIAKAAIAxAAIAKAAIABAJQAMAwgdAAQgaAAg5glg");
	this.shape_11.setTransform(37.2,271.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D707E").s().p("AAAAFIgxAAIAAgJIBZAAIAKAAQAAAEgBABQgTAEgUAAIgKAAg");
	this.shape_12.setTransform(41,268);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9E6D47").s().p("AAKBBQgvhaghhoQAoBVA7A7IAAgFQAPhDAXBpQAGAcgCAoQgFAGgDAIQgVglgggcg");
	this.shape_13.setTransform(15.1,251.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#787572").s().p("AAAAxQgEgxAAgxIAJAAIAABZIAAAKIgFgBg");
	this.shape_14.setTransform(0.5,235.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#80502A").s().p("AgTGAIgCAAIgFADIAAgBIgDgGIgBgDIgCgFIgBgCIgEgGQgSgngNgpQgMgigZgTIgBgBIgFAEIgBAAQgMABgLAHIgFAEIgBAAIgTAIQgGADgGADQgRAHgTACQACgEgBgFIABgHQAEghAOgeQAKgWgKgMIAAgEQADgOAGgNQACgEAEgCQgchIgIhdQBNi+BHiXQACgEAAgFQAiBEAQBrIAJgFQgiBGAFBuIAAAKQAjiAA2gqIgEAIQgBACgFAAQAPASA2gkQANgJAKAPQAIAMAKAKQAdgpAUAzQABAFAAAFQgiBVgGByIAAAKQARASAIAfQAAABAFAAQATB3g9AmQgDADgFAAQhNAPAMh0QAEgwgTATQAUB/g/AvIgEgEQgOACgDAQIgIBAIgBAPIgBAHQgGgHgJgGgAhiDPQAgAdAWAkQACgHAFgHQACgngGgcQgXhqgPBEIAAAFQg8g8gohVQAiBoAvBag");
	this.shape_15.setTransform(26,237.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3D3DF").s().p("AgTABIAAgEQAwAHgLAAIglgDg");
	this.shape_16.setTransform(159,280.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CAC9D1").s().p("AhBgCQgBgBAAgFQBNgFA5AOIgQAAQgdAJgaAAQghAAgdgMg");
	this.shape_17.setTransform(131.8,287.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CFD3E2").s().p("AgTAFIAAgJQAFAAACgCQADgDAAgFIAJAAIAKAAQAAAFACABQAaAKg5ANIAAgKg");
	this.shape_18.setTransform(152,267);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C8CEDF").s().p("AgfAUQAogJAOgmQAAgCAFAAQAAAFACAEQAMAshJAGIAAgKg");
	this.shape_19.setTransform(146.2,272.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B3B8C2").s().p("AAZAIIgnAAIgKAAIgKAAIAAgJQAcgOAnARQACABAAAFIgKAAg");
	this.shape_20.setTransform(154.5,264.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C4C4C6").s().p("AhPgCQArgOBWAOIAKAAQAKAAAIADQACABAAAFIgKABQgZACgXAAQg4AAgtgMg");
	this.shape_21.setTransform(107,288.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D0D0D4").s().p("AgUAKQAAgFgCgBQgIgEgKAAIAAgJQCSAOh0AFIgKAAg");
	this.shape_22.setTransform(117.1,288.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ABB4BC").s().p("AhAgEIB3AAIAKAAQAAAEgBAAQggAFgcAAQglAAgfgJg");
	this.shape_23.setTransform(113.5,285);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7B6441").s().p("Ag2gEIBjAAIAKAAQAAAEgBAAQgcAFgXAAQggAAgZgJg");
	this.shape_24.setTransform(112.5,280);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C3C2C9").s().p("AgjgBQCOgBiOAFg");
	this.shape_25.setTransform(92.6,287.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D1D6").s().p("AgYAAQBjgHhjALg");
	this.shape_26.setTransform(84.5,286.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7F4F29").s().p("AjVgbIgBgKQANgkAZgaQACgDAAgFQAUhjgZgpIAFAAQA5gUAMBDQAAADAMgDQAQgEADARQgJB3AshZIAFAKQArA5BEA+QAIAGADAOQAJAlAIgHQgMg9AnAaQADABAAAFQBAAVAPBEIABAKQgzBUhrAfQhpAfh+AOQgaiFgNiSg");
	this.shape_27.setTransform(67.5,237.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7F4F28").s().p("AE1F5QgogTgigdQg1gqgYg8QgahBg6ggIAAgBIgDgBIgGgCQgDAAgDABQitgZiTgfIgKgCQhvgWgTh0QBxhcBig3QAEgDAFAAQAghJA5gLQABAAAAgGQgTgBAvgUIAEAAQANACAPgLQgRhLAxBYIADAGQAIANAQgCQAggOAIA3IAAAKQgqBIgjBPQgCADAAAGQAYguA6g9QAwgzgBhmQARAhASAfIAFAAIAAAGQAFBPAYA9QABAFAAAEQgbBTgWBXIgBAJQAsg8AfhNQAAgBAFAAQAEhkgShPQgBgBgFAAQAIgYARhLQAAgBAFAAQAdBMApgBQAUgBAKgZQAYAVAQgLIAFAGQASARAHAcQgHAigKARQgDADAAAFQAgAEgLAuIgBAKQgrBfAUByQAGAGAEAGQAEAggEAgQgHBBgaA+QgXA6gQA7IgEgDgAETB8QgFAMADARQAFAXAOgVQAOgTgHgOIABgDQgSgRgOgVQACAXAFAUgAFKAAIAMAuIABAAIgPg2QAAAFACADg");
	this.shape_28.setTransform(173.2,250.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F9CB98").s().p("AAyCvIhjAAIgKgBQjRgehRieQBUgWA4gIIAKAAIAZiBQAAgBAFAAQCWA5CqgtQAEgCAFAAQAJB5BJA3QADADAFAAQgBhIBPA3QAMAHAKAKQhPCNjJASIgKABIgKAAg");
	this.shape_29.setTransform(112,262);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A0903").s().p("AAFApIgNABQhmgChogZQgFAAgFgBIgLgDIgbgFIgBAAIgLgBIgKABQgvAGAHguQAigQAlAYQAEACAFAAQDvA5EDg0QABAAAAgFQBvgrg+A/QgJAJgUAAIgGABIgEgCQgjALgkAIQg2ALg4AFQgjADglAAQgDgCgEABg");
	this.shape_30.setTransform(110.5,202.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BA3F19").s().p("Aj5gBQD4gzDxAyIAKABQAAAEgBAAQh8AZh3AAQiCAAh9gdg");
	this.shape_31.setTransform(111,200.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C07D5B").s().p("AgdgLQAkgHAPAOQADADAFAAQAAAEgCABQgQALgMAAQgSAAgLgag");
	this.shape_32.setTransform(111,183.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#864926").s().p("AgDA+QgcgJgYgDQhfgJAGhfQAdgjAMBUQACAMAmgBQAOgBAPAKQASAsAngbQACgCAAgFQAUgPAVgBQAkgCACgMQAKhSAfAhQAAAFgBAFQgdBZhkAUQgKAAgIgDg");
	this.shape_33.setTransform(111.5,180.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#814720").s().p("AgMhAIABgKQAgA4gIBcIgFABQgdgyAJhZg");
	this.shape_34.setTransform(120.2,161);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DBE3DF").s().p("AgSAOQgPgHAHgaIAUAAIAJAAQAFAAADADQAwAihLACQAAgFgCgBg");
	this.shape_35.setTransform(84.7,137.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#020C01").s().p("AgigMIAKAAQAoALgBgfIAAgKQAUAFAAAPQgDBBgSAAQgRAAgfg3g");
	this.shape_36.setTransform(151.5,140.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3F6F2").s().p("AhyANQA6hQB5gSIAKgBIAAAKIgFAAQABAWgQgCIAAAKQAAAFgDADQgCACgFAAQgDBdBHAVQACAAAAAFIgKABQgbADgYAAQh4AAgwhKg");
	this.shape_37.setTransform(138.5,142.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3D674B").s().p("AAPAZQgFAAgEgCQgPgIgPgKIAAgJQAQABgBgVIAFAAQAEAFAGADQAEACAFAAQgHAaAPAHQACABAAAFIgKAAg");
	this.shape_38.setTransform(146.5,137);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ECF3EB").s().p("AgNAYQAAgFgCgBQgPgHAHgaQAXgVATATQACACAFAAIAAAKIAAAJQABAXgWAAQgHAAgLgDg");
	this.shape_39.setTransform(150.4,137);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4D6D53").s().p("AAcAHQgUgRgWAUQgFAAgEgCQgGgDgFgFIAAgJIA7AAIAKAAIAAAJIAAAKQgFAAgCgDg");
	this.shape_40.setTransform(149.5,134.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#944F30").s().p("AAPAOQgfgCgIgaQAfAQAJgEQAEgCAFAAIAAAJIAAAKIgKgBg");
	this.shape_41.setTransform(34.5,168);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#894524").s().p("AgOgkQAPABgBgVIAFAAQAAAFADACQACADAFAAQgGAhgDAbQgEArgDAAQgGAAgHhdg");
	this.shape_42.setTransform(28.5,148.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D48C6A").s().p("AAUCUQgFAAgBgCIg/h2IgBgJQgNgxgGhRQAJgZASgRQADgDAAgFQAvAUgPApQgCAEAAAFIgFAAQABAWgQgCQAMCdAJhqQADgbAFgiIAAgKQBDBYADCXIAAAKQgFAAgEACIgFACQgLAAgZgOg");
	this.shape_43.setTransform(30,151.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ECC29A").s().p("Ahci5QAmg+AVBJQABAEAAAFQAAAFgCADQgSARgKAZQAHBRAMAxIABAJIA/B2QABACAFAAQAIAbAgADIAKAAQARADACAbIABALQjdg/AglRg");
	this.shape_44.setTransform(29.3,152);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#63432A").s().p("AggAJQgCgDAAgFQAhhlgJBHQgFAhAqgQQADgBAFAFQAABDgUAAQgQAAgfgyg");
	this.shape_45.setTransform(11.5,131.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5B3F30").s().p("AgKAEQgHgIgFgKQBQAJg8AUg");
	this.shape_46.setTransform(15.3,126);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#633F32").s().p("AgYAMQBhg8hhBBg");
	this.shape_47.setTransform(13.5,117.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5F3C30").s().p("AgNAAQA3gKg3APg");
	this.shape_48.setTransform(30.4,115.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6E5541").s().p("AAtAFIhjAAIAAgJQA2AAA2AEIABAFIgKAAg");
	this.shape_49.setTransform(75.5,129);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#376442").s().p("AgOBQQhTgQAOhsQAPgKAEgUIABgKQARANAhACIAAAFIgKAAIgUAAQgHAbAPAHQACABAAAFIgKAAQA2B5Ayh5IAOALQALAJAAATQABA3haAOIgKABQAAgFgBAAg");
	this.shape_50.setTransform(86.4,142);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4F6F3").s().p("Ah8gOQAxhRCMAKIAKABIgBAKQgEAUgPAKQgOBsBTAQQABAAAAAFIgKAAQgXACgUAAQiVAAgvhlg");
	this.shape_51.setTransform(72.5,142);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#150F08").s().p("AjvgzQBjAIgTgnIAMgEQAtgSA1gHIBjAAIAKAAIAKABQCEAgAmB+QghAphCANQg4AKgxAAQi+AAhVijgAiVgBQA2BzC5gQIAKAAIAKgBQBagOAAg3QAAgUgLgIIgOgLQgzB5g2h5IAKAAQBMgCgwgkQgDgCgFAAIAAgFQghgCgRgNIgKgBIgegBQhzAAgsBIg");
	this.shape_52.setTransform(75,140.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#442717").s().p("AjRAoQAngkAxgbQACgBAAgFQDLgsB8BWQACACAAAFQjygsixBFg");
	this.shape_53.setTransform(76,119.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#624944").s().p("AhtBXQBshbBnhfQADgDAFABQhcB+h/BOg");
	this.shape_54.setTransform(47,90.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6C544F").s().p("AgiBKQAmg9AQhXQAAgBAFAAQAAAKAEAIQABACAFAAQACAlgHASQgcBMgaAAQgFAAgFgCg");
	this.shape_55.setTransform(68.5,63.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#745C56").s().p("AgKBBQgEgIAAgKIAAgKIAAgnQAUheAGAtQAJBEgZAyQgFAAgBgCg");
	this.shape_56.setTransform(72.5,50.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#60453F").s().p("Ag2A+QA+gzAphLQABgCAFAAQgkBwhJAWg");
	this.shape_57.setTransform(21.5,94.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#705853").s().p("AgxAJQA0g2AsAmQADACAAAFIgKAAIgeAAQgFAAgDACQgUAVgOAAQgLAAgGgOg");
	this.shape_58.setTransform(66,38.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6C534E").s().p("AgYAMQAWgDACgaIAFAAQAKAAAIAEQACABAAAFQgFAAgBACQgNAXgOAAQgIAAgIgGg");
	this.shape_59.setTransform(67.5,42.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5F4742").s().p("AABAJQgHgEgKAAQAAgFgCgDQgDgGgFgFIAdAAIAKAAQAFAAADADQARALgjAPQAAgFgCgBg");
	this.shape_60.setTransform(69.7,40);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6A514E").s().p("AgGAHQgMgHgKgJQBPgHgeAXQgFAEgGAAQgHAAgJgEg");
	this.shape_61.setTransform(66.9,26.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#735B56").s().p("AiBA/QBAiZC5AOIAKAAQAKAvhkgQIgKgBQh0A5grBDg");
	this.shape_62.setTransform(55,38.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5F4841").s().p("AgOgBQAQABgCgVIAFAAQAAAFACACQADADAFAAQAAAFgCAEQgNAYgGAAQgHAAgBgXg");
	this.shape_63.setTransform(77.5,20.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6C534F").s().p("AhXhBQgCgEAAgFQBOBSBjA8QACACAAAFQh7gjg2hpg");
	this.shape_64.setTransform(94,53);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#725B56").s().p("AhjAGIgKgBQA3AjBUAKIAAAFQjQgBhFiLQgCgEAAgFQDvBkEDBUQABAAAAAFQipgzi0gmg");
	this.shape_65.setTransform(106,44);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7C625F").s().p("AgPAFQgFAAgEgCQgGgDgFgEIAeAAIAJAAIAKABQA0AIhJAAIgIAAg");
	this.shape_66.setTransform(98.6,32);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6D5651").s().p("AhPgGQBGgPBYAKIABAFIgKAAIgeAAQAFAFAGACQAEACAFAAQAAAFgBAAQgiAIgaAAQgxAAgdgWg");
	this.shape_67.setTransform(91,32.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#735B57").s().p("AgigEQAKgFAKgDQAFgCAFAAQAfgHAGASQACADAAAFQgFAAgDACQgRAKgMAAQgUAAgMgVg");
	this.shape_68.setTransform(95.5,27.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7A6663").s().p("AgngNQAjAAAiAFIAAAFQAAAEACABIAIAEQgPAIgOAAQgaAAgYgbg");
	this.shape_69.setTransform(117,21.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6E5B57").s().p("AjCA9QgDgDAAgFIAAgKQBziBESAeIAGAAQj5gDiAB4QgDACgFAAQgFAAgCgCg");
	this.shape_70.setTransform(97.8,13.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6D5551").s().p("AhUgCIAAgJIAUAAIAKAAIAKAAQBFAGA8AMIAAAGQhYgBhRgOg");
	this.shape_71.setTransform(120.5,27.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6D5752").s().p("AEUArQiHg6jNALQAcARAzgDIAAAFIgKAAIgTAAIAAAKQgFAAgEACQgzANhGgFQAAgFgCgEQgGgSggAHQAAgFACgBIAIgEQg0ADg6AHQBng9CnACIAKAAQAkArArgXIgIgEQgCgBAAgFIAKABQCDANBPBBQgFAAgEgCg");
	this.shape_72.setTransform(113.5,24.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A0744F").s().p("AgiAFIAAgJQABhCgLg2QAXgWAGBSQAIBsAMhEQAIhpAHB8IAFABQgDBIAVAwQACAEAAAFIAAAFQgzgwgchNg");
	this.shape_73.setTransform(215.5,203);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#63432D").s().p("Agnh8IgBgKQAcAqAGACQAMADAIgiQAAgDAPgBQARAAgHAVQgQBgg5COQgBABgFAAQAciHgbh8g");
	this.shape_74.setTransform(224.1,164);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A2633D").s().p("AgUAOQgPgHAHgaIAKAAQAKAiAgggQACgCAFAAQAAAFgCADQgRAWgeAJQAAgFgCgBg");
	this.shape_75.setTransform(188.9,167.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6C533B").s().p("AgEAjIAAhPQAQAggMA4QAAABgEAAIAAgKg");
	this.shape_76.setTransform(183.5,149);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E9C39B").s().p("AhDBBQAKgUANgSQACgCAFAAQAfgJAPgWQADgDAAgFQAdgaAPgrQABgBAFAAQAbBRhTA/QgfAZgTAAQgRAAgGgUg");
	this.shape_77.setTransform(190.8,167);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D18D6D").s().p("AgxBRIAAgKIAAgoQASg0gDhNIAFAAQApAwAjA0QADAEAAAFQgFAAAAABQgQArgdAaQgEAAgDACQgPAQgLAAQgLAAgFgSg");
	this.shape_78.setTransform(192,157.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#603F30").s().p("AgOABIgBgEQAlAHgIAAIgcgDg");
	this.shape_79.setTransform(195.6,134.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#462919").s().p("Ai4AWQgiAKAEgdQBohGDDAUIAKABQBIAhAuA6QACADAAAFQiohkjnBFg");
	this.shape_80.setTransform(146.5,120.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#356442").s().p("AgcBQQhIgWAEhcQAFAAACgCQADgDAAgFQAPAKAQAIQAEACAFAAQBAByAEh8QABgPgUgFIAAgKIAAgKIAAgKIAJABQA8APAVA2IAFAAQggBNhcAWQAAgFgCAAg");
	this.shape_81.setTransform(152.7,142);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1B120B").s().p("AifBgQgygOgggmQA2hzCHgmQABgBAAgFQCoABA9A7IAAAKIAKAAQBPgGgkAdQgDACAAAFQhWCDiiAAQhAAAhLgUgAgVhAQh5ASg7BQQA5BYCigRIAKgBQBdgWAghOIgFAAQgUg1g8gPIgKgBIgKAAIg7AAIgKABg");
	this.shape_82.setTransform(147.2,140);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F9CA97").s().p("AhmOGQhsgZhSg0QmgkEgGqXQAohWAJhyIABgKQD4jtB4lsQACgEAAgFQCqClEzApQE+ArBDE+QASBWAyBEQAvA9AgBOIAABPIAAAKQgjG8j/DiQhXBOhdBKQhTBCh8AAQhAAAhMgRgAA3KVIAKAAIAGgDIAZgGQAxgOAigkIAQgKIAIgGIAQgLQAPgFADgKIAEgDQAHAAAHgGQALgIgCgHIABgFQAUAAAJgKQA+hAhvAsIgKgBQjxgyj4AzQgFAAgEgDQglgYgiARQgHAvAvgHIAKAAIAFAGQAAABABAAQAAABAAAAQAAABABAAQAAABABAAIACABIACADIABADQAGAKAKAHIAHAMQAHAJAJAIIANAJQA2AiA9ATQAQAFATABIA8ABQAeAAAigCgAiQD7QgGBgBeAJQAYACAdAKQAIADAKAAQBjgVAdhaQACgEAAgFQgfghgKBRQgCAOgkACQgVABgUAPQgFAAgDgDQgPgOgkAHQgPgKgPAAQgmACgBgOQgJg7gRAAQgHAAgIALgABLApQgKBZAeAzIAFgBQAJhdgig4IAAAKgAjfAFQBCgMAhgpQgmh/iEggIgKgBIgBgFQg2gFg3AAIAAAKQg1AHgtASIgMAEQATAnhjgIQBrDOESg1gAEvjVQiGAmg2B1QAgAmAyANQENBGB3i1QAAgFADgCQAjgehOAHIgKAAIAAgKQg9g8ipAAQAAAFgCAAgAI1j4QAAgFgCgDQgvg7hHghIgKgBQjEgUhoBHQgEAdAigKQBegdBVAAQB5AABkA8gAnalSQAAAFgCABQgxAcgnAkIAAAFQCxhGDzAtQAAgFgDgCQhSg6h2AAQg7AAhEAPg");
	this.shape_83.setTransform(111.5,150.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#734C32").s().p("AgYAPQAChqANAvIAFAAQgFg8gKg8QgFAAgBgCQgeg4gsgqQgFAAAAgBQgJg2AigZIAAgFQBfBTAsCOQAAgFgBgFQhUjvikihQB6BwBWBgQgcg9AgAeQACADAFAAQCDD5goGQIgBAKIgFAAQgHh9gIBpQgNBFgIhtQgGhRgXAVQALA3gBBBIAAAKQAcBNA0AwIAAgFQAFAAACACQAjA8AIAmQjfiNAJl7gAAek6IgEgIQgBgCgEAAIAJAKg");
	this.shape_84.setTransform(206,172);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#5A4E4A").s().p("AgSgsIgBgKQAjAiAEBBIAAAKQgWgWgQhNg");
	this.shape_85.setTransform(218,91);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#634A45").s().p("AAzAaIgBgKQhBgrg+gxQgCgCAAgFQByAdArBlQACAEAAAFQgGAcgFAAQgJAAgJg6g");
	this.shape_86.setTransform(190,80.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#644B46").s().p("AAbAmQgYgughgkQgCgDAAgEQBWAbgbBNg");
	this.shape_87.setTransform(190.3,85.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#37221B").s().p("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");
	this.shape_88.setTransform(118,146.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0,238.5,293.5);


(lib.shirly6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(1,10,1,1,0,0,0,16.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:10.2},0).wait(1).to({y:10.3},0).wait(1).to({x:1.1,y:10.5},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({y:11},0).wait(1).to({y:11.1},0).wait(1).to({x:1.2,y:11.3},0).wait(1).to({y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({y:11.9},0).wait(1).to({x:1.3,y:12.1},0).wait(1).to({y:12.3},0).wait(1).to({y:12.4},0).wait(1).to({y:12.6},0).wait(1).to({y:12.8},0).wait(1).to({y:12.5},0).wait(1).to({y:12.3},0).wait(1).to({y:12.1},0).wait(1).to({y:11.9},0).wait(1).to({y:11.7},0).wait(1).to({y:11.5},0).wait(1).to({y:11.3},0).wait(1).to({y:11.1},0).wait(1).to({y:10.9},0).wait(1).to({y:10.6},0).wait(1).to({y:10.4},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.8},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVAuQgGgCgHgBQgYgDgVgKIgMgEIgBAAIgGgFIgDABIAAAAQACgCAEAAQAkABAjgFIAVgEIATgDIAqgGIAGgBQAMgBAMgDIALgEQAYgGAWgJIAZgJIAOgJIAUgNIABABQAIgHAJgDIADABQAEADABAEIAAAAQgMAFgLAIIgGAGQgNAWgUAOIgfAWQgQALgSAIQgXAKgYAJIgHABQgjgDgjgOg");
	this.shape.setTransform(1.2,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8C997").s().p("AMqK3IicAAQABgEgBgFQAKgJAFgdIAHg3QABgMAAgJIAAgGQACgGgDgIQCbARCbAjQAEABAAAUQAsAEgNhoIgBgKQBwkCCrjHQACgDAFAAQA1h+BahbQACgCAFAAQgYCIgJBQIADgRQAUhLB4gDQAVAAAcgMQAZgJAkAAQgwA5hmADIgKAAQABBLgUA2QgBAFAAAFQBDgmBBgoQADgCAFAAQglBjiFABIgKAAIgKAAIhQAAIgKAAIhGAAQASA0gDA6IAFAAIgBAKQgEAUgPAKQAGgVgDAGQhfDkieCdIgBAFQhFAFhGAAIgKAAIhGAAIAAAKIgKAAgAsBK3IgKAAIjmAAQhehMgzh0Qg3iAhGg8IAAAKQgFAAgBgCQgJgSgFgUQAVAGAAgQIgDgzQgBgggGACQjaApiFh4QAFAAAEACQBSAlA7ALQAAgFgCgDQgdgzgJhHIgKABQhZARgzhDQB0ApBxAIIAFAIQAGAMAKAKQAsAwgthmQgdhBgUhGQA7A3A/A0QADADAFAAQARApAVAnQACAEAAAFQDwDSBeFnQABABAFAAQAFgoAagSQAEgCAFAAQCagSCdgJQACAHAEAIQATAkAWAjQASAcAVAXIjtAAgAAyKZIhPAAIgKgBIgKgBQgpgPgfgdQAZgFAeAOIARAHQgUgahPgRQgJgMgIgMQggg4g7gMIgDgFQB1gTAzhSQACgEAAgFQBZAUB4gZIAAAFQAhBkB5APQgmAoghAuIgBABQgSALgigDQADARAPAHIABABQgzAdg7AQIgJAAgAAyJxIAAAFQBagQgIAAQgHAAhLALgAoGh9IgBgJQAFAAAAgBQANgzgSgcIAAgKIAAg8QBriZAMj3IABgKQCYBODwgVQAsgDApATQANAHATAAQBPCWCEBhQAEADAFAAQBPERhnDbQhTCvjDA0QglAKgoAAQlyhuhjl8gAidCrIAAAAIANAFQAVAJAXADQAIACAGACQAiANAkADIAGgBQAYgIAYgLQASgHAQgMIAfgVQAUgPANgWIAGgGQALgJAMgFIAAAAQgBgDgEgDQAFAAACgDQAzg6hiAzIgKAAQiOAHhhA1IAAAKIgKgBQgrgHgRAIQgCAuAZgXQACgDAFAAIADADIAAAAIADgBIAGAEgAiBgYQgCApAgAIIAKAAQCCANgBhsQgBAhgTAMQhbA6g6hDIAAAKgAgbivQA7CBg9iKQAAAFACAEgAl9jfQghAYgjAFQAqBEBEgIIAKAAQA9gNAEgRIgFAAIAAgKIAUAAIAKAAQAcAXAdgaQADgCAAgFIAOgLQgHgNgJgKIgMgOQgigigsAAQgxAAg9ArgAAAjqQA6AIBGggQACgBAAgFQCAgRgqhRQgBgCgFAAQAAgFgCgCQgagUg0AHIAAAKIgKABQhvANgmBWQgLApAfgBIAJAAgAkrliIgKABQg1ALgvASQAAAFgCADQgSAWgUAUQAQAOAzgvQADgCAAgFQAmgDAggGIAKgBQAtAAAsgFIABgFQAFAAABgCQALgZgbAHIgBgFQgngFgoAAIAAAKgAgxmUQAAAKABAAQAxAGBJgbQBagiAkAPQAAgFgBgBQgygPguAAQhSAAhGAzgAp1iGQAUgiASAjQACAEAAAFQAAAFgCACQgDADgFAAQANB0BYApQAEACAFAAIAKAKQiDgFgTi4g");
	this.shape_1.setTransform(1.4,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3B095").s().p("AAJAOQglgBgMgbQB1AdgzAAIgRgBg");
	this.shape_2.setTransform(-158.5,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C8805C").s().p("AgoADQCkgYikAdg");
	this.shape_3.setTransform(10.5,57.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#957263").s().p("AgSAEQgPgCgLgFIBPAAIAKAAIgSADQgRAEgRAAIgLAAg");
	this.shape_4.setTransform(2.8,62.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#715D5C").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_5.setTransform(37.4,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B78167").s().p("AgIAPQgPgGgDgQQAhADASgLIACgBIgEAFIgPAUIgOAIIgCgCg");
	this.shape_6.setTransform(19,55.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#95571C").s().p("AgTAAIgBgEQAwAJgIAAIgngFg");
	this.shape_7.setTransform(29.4,37.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#835E4A").s().p("AgngEIBFAAIAKAAIgBAEQgnAFgnAAIAAgJg");
	this.shape_8.setTransform(87.4,64.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8A789").s().p("AgYgFQBjgNhjAcg");
	this.shape_9.setTransform(156.9,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#75523D").s().p("AgsgEIBPAAIAKAAQAAAEgBAAQgYAFgTAAQgaAAgTgJg");
	this.shape_10.setTransform(142.9,11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C89F88").s().p("AgkgWQB7ArhUACIgCAAQgrAAAGgtg");
	this.shape_11.setTransform(-163,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9AD99").s().p("AgcgDQgBgBAAgFQA/ATgFAAQgEAAg1gNg");
	this.shape_12.setTransform(-154.7,6.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F4841").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_13.setTransform(-31.7,52.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C58261").s().p("AAhAOQgfgOgYAGIgQgPIgLgMQBOASAVAZg");
	this.shape_14.setTransform(-8.6,56.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A6846F").s().p("Ah6gEIDtAAIAIAGQgtADgrAAQhSAAhLgJg");
	this.shape_15.setTransform(-63.4,65.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7B5634").s().p("AgPgQQAZAEAJATIgHAEIgaAGQgGgMAFgVg");
	this.shape_16.setTransform(-55,42.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#855936").s().p("AgJAPQACgOAAgOQApgygrBdIgCACQgBAAADgRg");
	this.shape_17.setTransform(-53.9,33.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D5D9ED").s().p("ADnFuIovAAQAAgFgBgEQgYhJgFg5QgFgBgCgCIg1g6IgBgJQgLgxACg9QAdggADg5IAIgIQAogwgsgcQgUAIgLATQgKgGgPgEQhhgZguhYQgJgQgGgSQgFgPgHgOQAUgEAUgIQBMgfBLAfQAgANAVgIIASgBIADAAQAGASAngCQAxBFBDA2QAQANATAJQBuA0BxgxIBKgfQBKgfAxg6QAZgdAAgYQATAAAEgQIApgEQA7gGA4APQA6AQAoAsQgCAogIAqQgBAJAFAHQg/AehDAaQgWAIgWADIgHgCIgDABIgBAAIgEACIgDAAQg0AAgJAnQgCAJAHAAIAGABQAJBaAFBeQgFAAAAABQgLBAg2AQIABAJQAPA3gkAtIAAAUIAAAKIgKAAgAmEj+IAAgCIAAAAIAAACgAEtkWIABgDIgBAAIAAADgAJkkbIAFAHQAEAIgDAHQgCgMgEgKgADgk6IACgEIABACIgCADIgBAAIAAgBgADblUIACACIACABIgFAGQAAgFABgEgApblcQAOgGATgBIgnALIAGgEgADtlqIgBAAIAHgEIAFADIgHAEQgBgCgDgBg");
	this.shape_18.setTransform(7.2,78.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#785436").s().p("Ag0APQgCgDAAgFQAzgOA6gKIAAAGQAAAEgCACQgrASg2AEQgFAAgDgCg");
	this.shape_19.setTransform(-24.1,40);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6A4121").s().p("AiCCWQgIABgJADIgKADQgTABgNAGQgJgVgagEIAAgKIAAhGIAoijIAFAJIAFgFQgOhgAiAuQAUAFAAAPQAJgbASATQADADAAAFQgMBtgRBkIgBAKQAuhiAEiNIAAgKQCKCICrBoIgKAMQgTAYgpADIAAgFQg7AJgzAQQAAAFACADQADACAFAAIAAAFQgYgBgXAMQhBgShJADgAjMAxQAAAQgDAOQgDAWADgIQAdg9gIAAQgEAAgOARg");
	this.shape_20.setTransform(-34.1,26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#41080C").s().p("Ai/AgQARgIArAHIAKABQCOgMBpgzQACgBAAgFQBigzgzA6QgCADgFAAIgEgCQgJADgIAHIgBAAIgTAMQgTAJgVAIQgWAJgXAHIglAJIgFAAIgqAGIgTADIgVAEQgmADgpABQgFAAgDACQgIAIgFAAQgKAAABgeg");
	this.shape_21.setTransform(0.6,6.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#98203E").s().p("Ah8AZQBhg0COgHIAKAAQAAAFgCABQhpA0iOALIAAgKg");
	this.shape_22.setTransform(0.9,6.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3D241C").s().p("AgdAFQApAHAMgYQABgCAFAAIAAAKQAAAEgDACQgPANgOAAQgOAAgNgKg");
	this.shape_23.setTransform(-19.6,-22.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#905533").s().p("AgNgaQgCgEAAgFIAfBHIgdg+g");
	this.shape_24.setTransform(-0.1,-19.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E9F4EB").s().p("AAKAZQgrAAgGgnQAFAAACgDQADgCAAgFQAYAZAsAJQABAAAAAFIgKAAIgKAAIAAAKIgKAAg");
	this.shape_25.setTransform(-33.6,-21.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3A2C1C").s().p("AggAFIAAgJIAKAAIALAAQAFAAACgCQADgDAAgFIATAAIAJAAIAGAAQgEAQg9ANIAAgKg");
	this.shape_26.setTransform(-28.4,-19.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#486452").s().p("AAYAZQgsgJgYgZIAAgKQAYgWAuAeQAEACAFAAQAAAFACACQADACAFAAQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAQAAgFgBAAg");
	this.shape_27.setTransform(-32.1,-23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#30593E").s().p("AgNAbQgCgCAAgFQAAgFACgDQAKgQgMgZIATAAIAKAAIABAKQAGApgaAIQgFAAgDgDg");
	this.shape_28.setTransform(-27,-26.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8D6347").s().p("AAeAFIhFAAIAAgJQAnAAAnAEIABAFIgKAAg");
	this.shape_29.setTransform(-24.6,-40.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1F150D").s().p("AiNAGQAigFAigXQBzhTBIBKQgWgOg2ACIgKAAIgUAAQAMAZgKAQQgCADAAAFQgFAAgDgCQgwgdgXAWIAAAJQAAAFgDACQgCADgFAAQAGAnAsABIAKAAIAAAKIgKAAIgOABQg6AAgmg9gACAAGIAAgJQABgIgDgGQAJAKAHAMIgOALIAAgKg");
	this.shape_30.setTransform(-29.4,-24.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDF2EC").s().p("AgnAoIgUAAIAAgKQAFAAACgCQADgDAAgFQAbgIgGgpIgBgKQA1gBAWAOIAMANQADAHgBAGIAAAKQgFAAgBACQgMAZgqgHIgJAAIgUAAIAAAKIgKAAg");
	this.shape_31.setTransform(-22.6,-25.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A07A63").s().p("AgsAFIAAgJIBPAAIAKAAIgBAEQgoAFgpAAIgHAAg");
	this.shape_32.setTransform(-24.1,-37.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#542A14").s().p("Ah7AnQAUgUARgVQADgDAAgFQAvgSA0gLIAKgBIBGAAIAKAAQAagHgKAZQgBACgFAAIgKAAIhQAAIAAAKIgKABQggAGglADQAAAEgDACQgnAkgTAAQgGAAgDgDg");
	this.shape_33.setTransform(-31.2,-36.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AD8472").s().p("AgEAeIAAhFQAQAcgMAyQAAABgEAAIAAgKg");
	this.shape_34.setTransform(-50.1,-22.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7A3627").s().p("AgJgdQAJAGAHAHQADACAAAFIgFABQgFAmgDAAQgFAAgBg7g");
	this.shape_35.setTransform(-54.6,-13.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C47F67").s().p("AAuBTQhXgpgNh0QAFAAADgDQACgCAAgFQAKAAAIAEQACABAAAFQACBrANhWIAFgBQAbBBAeBBQACAEAAAFQgFAAgEgCg");
	this.shape_36.setTransform(-53.1,-8.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#533722").s().p("AgvAIQgCgEAAgEQAVhUAoAGQAfAFgbAzQgQAbAyAEQgQBGgYAAQgYAAghhHg");
	this.shape_37.setTransform(-67.6,-24.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#483931").s().p("AgIAGQAwhPg1BlIAAABQgBAAAGgXg");
	this.shape_38.setTransform(-68.7,-43.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4B3320").s().p("AgOA1QgYgZgWgcQAjgxAigjIAAAPQggBUBBgNQAZgEgIAqQgFAtgVAAQgSAAgdggg");
	this.shape_39.setTransform(-58.6,-27.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#49392C").s().p("AgxA+QArhGAxhCQACgDAFAAQgyBsgxAvg");
	this.shape_40.setTransform(-54.6,-48.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4D3B31").s().p("AgJgtIAJAAQAAAQAFANQAAABAFAAIgBAKQgJAzgEAAQgHAAAChbg");
	this.shape_41.setTransform(-45.7,-68.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#534237").s().p("AgOADQAQgHgCggIAFAAQAAAFADACQACADAFAAQAAAFgCAEQgOA2gHAAQgGAAAAgig");
	this.shape_42.setTransform(-63.1,-77.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#706057").s().p("AAAAwQgEgNAAgPIAAgKIAAgTIAAgKIAAgeIAJAAIAABZIAAAKQgFAAAAgCg");
	this.shape_43.setTransform(-45.1,-75.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4A3A33").s().p("AgEAeQgFgdAAgdQAUgGgBAQIAAAKIgKAAIAAAdIAAAKQgEAAAAgBg");
	this.shape_44.setTransform(-45.6,-79.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#615248").s().p("AgfAHIAAgJQB8gihzAzQgEACgFAAIAAgKg");
	this.shape_45.setTransform(-55.4,-86);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5E4C45").s().p("AgQAWQgDgCAAgFIAAgKQAPgOAQgNQADgCAFAAIAAAKQAAAFgBAFQgHAVgVAIQgFAAgCgDg");
	this.shape_46.setTransform(-60.6,-82.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#534239").s().p("AAFAPQACgVghALIAAgJQBXgzg6BQg");
	this.shape_47.setTransform(-51,-82.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#53433A").s().p("AAwAeQg/gKgigpQgCgDAAgFQBLAfAcAcg");
	this.shape_48.setTransform(-33.4,-79.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5C4D45").s().p("AgsAGQAdgGAVgLQAEgCAFAAQAPABANAEQACAAAAAFQgFAAgDACQgZAPgXAAQgRAAgQgIg");
	this.shape_49.setTransform(-38.1,-90.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4C3C34").s().p("AARAdQgOgEgOAAQAAgFgBgBQgagHgDgaQAbACAIgVQAAgBAFAAQAxACgjAlIAFAAQAqAMghAQQgEACgFAAQAAgFgBgBg");
	this.shape_50.setTransform(-35.5,-94.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5B4B42").s().p("AirgUQgDgCAAgFQCgAZCzAEIAKAAQg3APhLgOIgKgBQgtAagsAAQg9AAg4gwg");
	this.shape_51.setTransform(-26.1,-85.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#554741").s().p("AhPAoQAuhOBngUIAKgBQglAXg+AuQg0AmgIAMg");
	this.shape_52.setTransform(-39.6,-102.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5F4F45").s().p("Ah3ApQAjgmgygCQBqg+CZAgIAJABQhogBgxAeIAPAAQBUgPhAAUQgBAAAAAFQhJABgvAbQgEACgFAAgACGgcIABAAIgBAAg");
	this.shape_53.setTransform(-22.1,-98.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C0A08C").s().p("AgaAAIAAgEQA/AJgLAAIg0gFg");
	this.shape_54.setTransform(-166.9,-1.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D8AC92").s().p("AgvgDQBmgXgHAIQggAngZAAQgVAAgRgYg");
	this.shape_55.setTransform(160.2,-2.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D7AF97").s().p("AgdAHQB3gmh3Arg");
	this.shape_56.setTransform(165.4,-2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DBB4A2").s().p("AgWgBQBaAAhaADg");
	this.shape_57.setTransform(168.6,-7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#76573D").s().p("AgugHIAAgKQAFAAACgDQADgCAAgFQAKAAAIgEQACgBAAgFQAFAAAAABQALAtArANQAFAKgBABQgIAFgLAAQgcAAgugtg");
	this.shape_58.setTransform(67.1,-2.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#401F03").s().p("AgIgXQgBgEAAgFIATBBIgSg4g");
	this.shape_59.setTransform(43.4,2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#411E03").s().p("AgbgoQgCgEAAgFQAiApAXAxQACAEAAAFQgegTgbhHg");
	this.shape_60.setTransform(50.4,3.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#764A25").s().p("AD4EnIhzhGIAEAKIgBAXQgXgJgYgFIgBgDQgDgEgFAAQgEAAgEAEIgDgBIgBgFIgEAFIgXgCQgFAAgCAEIAAABIgWACQgigCgkAAQgXAFgVAHQgIACgHAEIgIAEIgEgDIgHAEIgIgCIgFACIgMgBIgKAAQhcgNgRhXIgBgKQC4ibBMj+IAEAIQAJAUgDgwQAaAfAygsQADgCAAgFQAiBRBXBMQAEADAEAAQAnBOgSBRIgBAKQAwBTARAwIgOgBQgwgmggADIAAAFQAlBOAbBSgAirDcQBTAMhTgRIAAAFgAAdibQAbBIAgATQAAgFgCgEQgXgygkgpQABAFABAEgAgUibQAnB3goiAQAAAFABAEg");
	this.shape_61.setTransform(44.6,15.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#855B3A").s().p("AASBSQgug1gQhTQAagZAOgEIAJgBIAnCVIABAKQAAAFgCABQgIAEgKAAQgFAAgCgDg");
	this.shape_62.setTransform(60.9,-13.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DABBA6").s().p("AgTABQAVgIAMgTQABgCAFAAQAAAFgCAEQgQAwgJAAQgIAAgEgcg");
	this.shape_63.setTransform(42.4,-23.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E6BBA3").s().p("AgGAQQgDgGgFgFQAKgOAMgNQACgCAFAAIAAAKQgBAcgSALQAAgFgCgEg");
	this.shape_64.setTransform(44.9,-28.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C2846F").s().p("AgSA8QADhOgYgzQAuASAeAiQADADAAAFQgFAAgCACQgNAMgKAPQAFAFADAGQACAEAAAFQgFAAgBACQgMATgVAJIABgKg");
	this.shape_65.setTransform(42.4,-30.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#99593F").s().p("AgsAvIgKAAQgfgJABgoIAAgKQA7BDBag6QAUgMAAghQABBhhoAAIgagCg");
	this.shape_66.setTransform(-3.2,-7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#543F2F").s().p("AhAATQAFAAACgCQADgDAAgFQAqACAZgOQACgCAAgFQAcADAOgKQADgDAFAAIAAAKQAAAFgCABQg4AZgvAAQgMAAgMgCg");
	this.shape_67.setTransform(7.9,-30.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E1E9DB").s().p("AgXAUIgKgBQgRgCAHgaQAFAAADgDQACgCAAgFQAfAhAngVQAEgCAFAAIAAAJQAAAFgCABQgYAOgkAAIgHAAg");
	this.shape_68.setTransform(4.7,-31.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F1F3EF").s().p("Ag4AoIAAgKQAdgLgIgwIgBgKQCjAJh9A6QgDACgFAAQgFAAgDACQgLAIgUAAIgLAAg");
	this.shape_69.setTransform(15,-35.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#345B45").s().p("AgyAUIAAgKQA9AIAgg3QABgCAFAAIABAKQAIAwgdALQgFAAgEACQgQAIgNAAQgXAAgSgUg");
	this.shape_70.setTransform(6.5,-35.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#715846").s().p("AgngBIAAgKQAzgHAaATQACACAAAFIAAAFQgUgXg7AJg");
	this.shape_71.setTransform(18.4,-42.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1D120B").s().p("Ah+AfQAnhVBugNIAKgBQA8gJAUAYIAAgFQAFAAABACQAqBQiAARIAAgKQAFAAAEgCQB9g6ikgJQgEAAgBACQgfA3g/gIIAAAKQAAAFgCADQgDACgFAAQgHAbARADIAKAAQAAAFgCADQgDACgFAAIgKAAIgBAAQgdAAAKgog");
	this.shape_72.setTransform(11,-35.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#592F14").s().p("Ah7AeQgBAAAAgKQBvhPCJAtQABAAAAAFQgkgPhZAiQg7AVgsAAIgUgBg");
	this.shape_73.setTransform(8.9,-47.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#403124").s().p("AgSgGQgCgCAAgFQArAbgDAAQgCAAgkgUg");
	this.shape_74.setTransform(34.4,-44.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#49372E").s().p("AgXAPQgHgHAIgIQAIgHAOAAQAegGhYgdQgBAAAAgFQBigEATBJQACAFAAAFQgNAQgRAAQgYAAgdghg");
	this.shape_75.setTransform(29.4,-76.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#583A24").s().p("ACGEWQhUiKgyipQgjgdgsgUQglgPAbguQhOgxA7APIAOAFQgdgbgagsQBnA5BNAyQAEADAFAAQAeAUgXgmQgCgCgFAAQgxg3gmhCQgCgEAAgFQBeAnAdA7QABACAFAAQAcgqAZBUQAdBkggBWIAAgTQgigVAgBIQACAEAAAFIgKABQgOAEgaAZQAQBUAvA1QACADAFAAQAAAFgDACQgCADgFAAIAAAKQgFAAgBgCg");
	this.shape_76.setTransform(48.4,-31.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#281811").s().p("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");

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AhNA3IgUgDQAAgEgIgDIg4gXIgCAAIAFgDIAJABIALABQAGgEAMABQANABANgBQBHgHBCgWIAigMQAqgMAjgWIADABIACABQAGADgBAEIgFgDQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgIANIgDgDQgYAMgKAZIgCAEQgUAZgdAOIgGgDQgcAOgcAHQgmAAglgDg");
	this.shape_78.setTransform(1.4,9.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3A2C1C").s().p("AgKAAIAJgCIAMAAIgVAFIAAgDg");
	this.shape_79.setTransform(-30.5,-18.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1F150D").s().p("AAUAhQAUgBAUgDIAAAEIgKABIgNAAIgRgBgAAEAdIAAgEIACABIACABIABAEIgFgCgAgPAUQAGgOgMgGQgDAAgCABIgFAGIgDgDIAAAAQAPgMgTgEIgBAAQgFABgBADIgBABIgNgTQAPgCAOgFQAKAaAZAOIgFACIgEADIgCgBQgFAEgDAFIgBAAg");
	this.shape_80.setTransform(-37.6,-21.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#41080C").s().p("Ai/AgQARgIArAHIAKABQCOgMBpgzQACgBAAgFQBigzgzA6QgCADgFAAIgCAAIgEgBQgjAWgpALIgiAMQhDAXhHAHQgNABgNgBQgLgCgGAFIgLgBIgJgBIgFADIgBABIgGAAQgFAAgDACQgIAIgFAAQgKAAABgeg");
	this.shape_81.setTransform(0.6,6.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#543F2F").s().p("Ag+ASIADAAIAKABIgNgBgAARgEIARgFIAIgDIAJgCIAMgEQgYAJgZAGIADgBg");
	this.shape_82.setTransform(7.6,-30.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1D120B").s().p("AkyBqIAAgHQABgMAFgIQAEgFAFgEIABABIAFgDIAFgCQAJgBAJADQAKAFALgBIAKgBQBCgSA+gdIADAAQAEgCAGgBQAKgDAHgHQAJgIAKgFQARAIgQAPQgIAHgJAFIgDAEQgQAQgWAEIgFAAQggARgkAHQgOAFgOAAIgEAAIgJACQgUADgUABIgBAAQgIABgCgDIgBgEIgCgBIgCgBIAAAEIgCAJQgCAHgFAFQgGAGgEAAQgEAAgCgJgAlNBgQgBgLAKgKIAHgJIAFgGQACgCADAAQANAHgHAOIgEAGQgJANgPACIgBAAQgDAAAAgEgAluA4QgCgEAFgBQAMgBAMABIAHABIAAgBIABgBQACgDAEgBIABAAQATAEgPANIAAAAQgHAHgJABIgGAAQgSAAgGgPgAB1gGIgKgBIgDAAIgKAAQgGAAgFgBIAUAAIgIgCQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAgHAHAAQAqABAogJQAZgFAYgKIAIgDQAcgNAZgSIABABQACgEAEgDQAHgHAKgEQAIgJAFgKQACAHAAAHIAcgHQATAHgTALIgJAEIgHABQAKAEAKADQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQgEAPgTgEQgMgDgHgIIgBACQABACgBADIAXAbQAAABAAAAQABABAAAAQAAABgBAAQAAABgBAAQgKAJgMgKQgLgJgEgNQgPAKgaAGQglAVgqAMQgXAGgXAAIgXgCg");
	this.shape_83.setTransform(-9.1,-27.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F8C997").s().p("AMqK3IicAAQABgEgBgFQAKgJAFgdIAHg3QABgMAAgJIAAgGQACgGgDgIQCbARCbAjQAEABAAAUQAsAEgNhoIgBgKQBwkCCrjHQACgDAFAAQA1h+BahbQACgCAFAAQgYCIgJBQIADgRQAUhLB4gDQAVAAAcgMQAZgJAkAAQgwA5hmADIgKAAQABBLgUA2QgBAFAAAFQBDgmBBgoQADgCAFAAQglBjiFABIgKAAIgKAAIhQAAIgKAAIhGAAQASA0gDA6IAFAAIgBAKQgEAUgPAKQAGgVgDAGQhfDkieCdIgBAFQhFAFhGAAIgKAAIhGAAIAAAKIgKAAgAsBK3IgKAAIjmAAQhehMgzh0Qg3iAhGg8IAAAKQgFAAgBgCQgJgSgFgUQAVAGAAgQIgDgzQgBgggGACQjaApiFh4QAFAAAEACQBSAlA7ALQAAgFgCgDQgdgzgJhHIgKABQhZARgzhDQB0ApBxAIIAFAIQAGAMAKAKQAsAwgthmQgdhBgUhGQA7A3A/A0QADADAFAAQARApAVAnQACAEAAAFQDwDSBeFnQABABAFAAQAFgoAagSQAEgCAFAAQCagSCdgJQACAHAEAIQATAkAWAjQASAcAVAXIjtAAgAAyKZIhPAAIgKgBIgKgBQgpgPgfgdQAZgFAeAOIARAHQgUgahPgRQgJgMgIgMQggg4g7gMIgDgFQB1gTAzhSQACgEAAgFQBZAUB4gZIAAAFQAhBkB5APQgmAoghAuIgBABQgSALgigDQADARAPAHIABABQgzAdg7AQIgJAAgAAyJxIAAAFQBagQgIAAQgHAAhLALgAoGh9IgBgJQAFAAAAgBQANgzgSgcIAAgKIAAg8QBriZAMj3IABgKQCYBODwgVQAsgDApATQANAHATAAQBPCWCEBhQAEADAFAAQBPERhnDbQhTCvjDA0QglAKgoAAQlyhuhjl8gAhoC7QAIAEAAADIAUADQAlADAlABQAdgHAcgPIAGADQAdgNAUgaIACgEQAKgaAYgMIADADIAIgNQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAGADQABgEgGgDIAAgBQAFAAACgDQAzg6hiAzIgKAAQiOAHhhA1IAAAKIgKgBQgrgHgRAIQgCAuAZgXQACgDAFAAIADADQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIABAAIACgBIA4AXgAiBgYQgCApAgAIIAKAAQCCANgBhsQgBAhgTAMQhbA6g6hDIAAAKgAmUiTQgFAIgBAMIAAAHQADARANgOQAFgGACgGIACgJIAFACQACADAHgBIACAAQAOACAQgCIAKAAIAWgFIgNgBIAEAAQAOAAANgFQAlgHAggRIAFgBQAWgEAQgQIADgDQAJgFAIgHQAQgPgRgJQgKAGgJAIQgHAHgKACQgGACgEACIgDAAQg+AchDATIgJABQgLABgKgFQgJgEgJACQgagPgKgaQgOAFgPACIANATIAAABIgIgBQgMgBgLABQgFABACAEQAHARAWgCQAKgBAHgHIADADIgHAJQgKAJABAMQgBAFAFgBQAPgDAJgMIAEgGIABAAgAgbivQA7CBg9iKQAAAFACAEgAAAjqIANABQAjAFAigJQAqgMAlgVQAagGAPgKQAEANALAJQAMAKAKgJQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIgWgbQABgDgBgCIABgCQAGAIANADQATAEADgPQABgBAAAAQgBgBAAAAQAAgBAAAAQgBAAgBgBQgKgCgJgEIAHgCIAJgDQATgLgTgHIgcAHQAAgHgCgIQgGALgHAJQgKAEgIAGQgDAEgCADIgBAAQgZASgdANIgIADIgMAEIgIACIgJADIgRAFIgCABQgoAJgpgBQgHAAAAAHQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIAJACIgVAAQAFABAHAAIAJAAgAkrliIgKABQg1ALgvASQAAAFgCADQgSAWgUAUQAQAOAzgvQADgCAAgFQAmgDAggGIAKgBQAtAAAsgFIABgFQAFAAABgCQALgZgbAHIgBgFQgngFgoAAIAAAKgAgxmUQAAAKABAAQAxAGBJgbQBagiAkAPQAAgFgBgBQgygPguAAQhSAAhGAzgAp1iGQAUgiASAjQACAEAAAFQAAAFgCACQgDADgFAAQANB0BYApQAEACAFAAIAKAKQiDgFgTi4g");
	this.shape_84.setTransform(1.4,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_84},{t:this.shape_74},{t:this.shape_73},{t:this.shape_83},{t:this.shape_82},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_61},{t:this.shape_59},{t:this.shape_60},{t:this.shape_62},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_9},{t:this.shape_10},{t:this.shape_8},{t:this.shape_18},{t:this.shape_22},{t:this.shape_81},{t:this.shape_7},{t:this.shape_5},{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_54},{t:this.shape_52},{t:this.shape_53},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_46},{t:this.shape_45},{t:this.shape_47},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_40},{t:this.shape_41},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_80},{t:this.shape_29},{t:this.shape_79},{t:this.shape_24},{t:this.shape_20},{t:this.shape_19},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_2},{t:this.shape_78}]},30).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.6,-114.6,343.3,229.4);


(lib.rumi4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(8.4,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:53.3},0).wait(1).to({y:53.2},0).wait(1).to({y:53},0).wait(1).to({y:52.9},0).wait(1).to({x:8.5,y:52.7},0).wait(1).to({y:52.6},0).wait(1).to({y:52.4},0).wait(1).to({y:52.3},0).wait(1).to({y:52.1},0).wait(1).to({y:52},0).wait(1).to({y:51.8},0).wait(1).to({y:51.7},0).wait(1).to({y:51.5},0).wait(1).to({x:8.6,y:51.4},0).wait(1).to({y:51.2},0).wait(1).to({y:51.1},0).wait(1).to({y:50.9},0).wait(1).to({y:50.8},0).wait(1).to({y:50.6},0).wait(1).to({y:50.5},0).wait(1).to({y:50.3},0).wait(1).to({y:50.2},0).wait(1).to({x:8.7,y:50.1},0).wait(1).to({x:8.6,y:50.2},0).wait(1).to({y:50.4},0).wait(1).to({y:50.6},0).wait(1).to({x:8.5,y:50.8},0).wait(1).to({y:51},0).wait(1).to({y:51.2},0).wait(1).to({x:8.4,y:51.4},0).wait(1).to({y:51.6},0).wait(1).to({y:51.7},0).wait(1).to({y:51.9},0).wait(1).to({x:8.3,y:52.1},0).wait(1).to({y:52.3},0).wait(1).to({y:52.5},0).wait(1).to({x:8.2,y:52.7},0).wait(1).to({y:52.9},0).wait(1).to({y:53.1},0).wait(1).to({x:8.1,y:53.2},0).wait(1).to({y:53.4},0).wait(1).to({y:53.6},0).wait(1).to({y:53.8},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.4,133.6);

	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.4,148.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWA5IgegFQgpgJgfgcIgEgDQgZgRgTgXQgCgDgDgBQgHgBgFgFIgBgCQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgCgFACgEIACgCIACgCIAEgBIABAAQAtABAtAHIBZAQIADAAIATAEQAlAJAiAQQAJAEAFAGIACADIABABQACADAAAFIAAAAIgBAEQgBADgEACIgrAQQgEADgGABIgDAAIgLAEIgVAFQgKACgKAAIgPgBg");
	this.shape.setTransform(8.2,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(24,26,25,0.455)").s().p("AATAMIgpgTIAAgEQAXAJAVAMIABACIgEAAg");
	this.shape_1.setTransform(-80.5,100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(23,23,24,0.475)").s().p("AAPAIIgEAAQgMgHgQgEIAAgEQAVADAOAKIAAACIgDAAg");
	this.shape_2.setTransform(-65.3,106.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(21,22,22,0.467)").s().p("AA0AWQg4gSgygaQA4AQAyAYIADAAIAAAFIgDgBg");
	this.shape_3.setTransform(-72.7,103.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(44,37,30,0.455)").s().p("AANAFQgNgGgQgEIAUAAIAEAAQACAEAEACIACABIAAAEIgDgBg");
	this.shape_4.setTransform(-47,112.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(135,118,100,0.604)").s().p("AATAGQgVgDgUgEIAAgEQAaAAASAJIAAACIgDAAg");
	this.shape_5.setTransform(-43.1,113.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(25,26,26,0.478)").s().p("AAVAIQgagEgTgLQAaAFAWAIIABACIgEAAg");
	this.shape_6.setTransform(-55.2,109.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(20,19,20,0.506)").s().p("AAOADQgRgCgPgEIARAAIADAAQAJACAGACIABADIgEgBg");
	this.shape_7.setTransform(-50.5,111.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(24,25,25,0.463)").s().p("AAbAKIg5gTIAEAAQAiACAWAPIABACIgEAAg");
	this.shape_8.setTransform(-60.8,108);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(114,92,67,0.98)").s().p("AgQAcQgEgDgCgEIAAgEIAAgEQASgXAXgRIAEgBIAAAFIgBACQgWAPgNAXIAAAIIAAAEIgDgBg");
	this.shape_9.setTransform(-43.9,109.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(59,50,42,0.251)").s().p("AgWgBIAoAAIAEAAIAAADIgEAAIgOAAQgPAAgLgDg");
	this.shape_10.setTransform(-27.5,117.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(140,120,101,0.592)").s().p("AAWAEIgEAAIgoAAIgBgDIgDgBIAAgDQAXAFAeAAIAAACIgFAAg");
	this.shape_11.setTransform(-27.5,116.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(173,148,119,0.757)").s().p("AgTgBIAjAAIAEAAIAAADIgEAAIgNAAQgNAAgJgDg");
	this.shape_12.setTransform(-22.3,117.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(135,115,93,0.58)").s().p("AgOgEQAMAEAQABIAAACIgDABIgJABQgMAAgEgJg");
	this.shape_13.setTransform(-39.4,114.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(49,42,34,0.212)").s().p("AgPgCQAPAAAQACIAAABIgEABIgJABQgMAAgGgFg");
	this.shape_14.setTransform(-32.6,116.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(121,103,85,0.518)").s().p("AATAHIgFgDIAAgCQgPgCgRAAIgBgCIgDgBIAAgEQAXADAVAGIAAACIAAAEIgDgBg");
	this.shape_15.setTransform(-32.4,116.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(79,68,56,0.353)").s().p("AgQgBIAcAAIAEAAIAAADIgEAAIgLABQgKAAgHgEg");
	this.shape_16.setTransform(-36.3,115.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(153,131,108,0.678)").s().p("AAMACIgcAAIAAgDQAQAAAQABIAAACIgEAAg");
	this.shape_17.setTransform(-36.3,115);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(251,206,160,0.996)").s().p("AgSAEIgDAAQgXgPgigGIgBgDQAdAFAQgEIAEgBQAZAKAUAKIADAAQAaAHAjAMIABACIhigRg");
	this.shape_18.setTransform(-31.6,114.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FBD1A1").s().p("Ag/AMQAPgRATgOIADgBQAfAGA7AAIAAACQgxALglgGQgGAAgGAEQgIAVgHACIgHABQgHAAAAgJg");
	this.shape_19.setTransform(-38.2,110.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FECD9A").s().p("AAZAMQgUgCgIgMQgVgFgMgBIAAgCQAtgDAJAIIAAAGQAAABAAAAQAAABABAAQAAABAAAAQABABABAAQAZAHgOAAIgHAAg");
	this.shape_20.setTransform(-31,111.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#977759").s().p("AgYgBIAtAAIAEAAIgBABQgYACgYAAIAAgDg");
	this.shape_21.setTransform(-34.7,105.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDCC9D").s().p("AgNgFQAzACgnAJIgGAAQgKAAAEgLg");
	this.shape_22.setTransform(-23.4,108.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FECF9C").s().p("AgKAAQAqgDgqAFg");
	this.shape_23.setTransform(-22.5,105.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FBD0A4").s().p("AhDAIIAAgCQBEgEA/gLIAEAAQgoATg5AAQgSAAgUgCg");
	this.shape_24.setTransform(-31.6,106.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6B523A").s().p("Ag/AKIAAgEQAygUBIABIAFAAIAAAEIgEABQgLAFgSgCIgEAAIgtAAIAAAEIgDABIgqAPIAAgFg");
	this.shape_25.setTransform(-35.3,106);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8E765F").s().p("AgTgBIADAAIAFAAIAbAAIAEAAIAAABQgUACgTAAIAAgDg");
	this.shape_26.setTransform(-26.8,104.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#433023").s().p("AAMACIgbAAIAAgDIAbAAIAEAAIAAADIgEAAg");
	this.shape_27.setTransform(-26.4,104.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#86684B").s().p("AgPAAQAEgDAIAAIADAAIAMAAIAEAAIAAACQgQADgPACIAAgEg");
	this.shape_28.setTransform(-23.2,104.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4C3C31").s().p("AgEAFQAFgBAAgKIACAAQAAAFACACIgIAGIgBgCg");
	this.shape_29.setTransform(-9.5,115.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#947B66").s().p("AgFgDIAHAAIAEAAIAAABIgDACIgEAAIACABIgEADQgCgDAAgEg");
	this.shape_30.setTransform(-8.6,115.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(94,80,64,0.424)").s().p("AAXAEIgoAAIgEAAIgFgEIAAgDIAFAAIAEAAQANAGAXgDIAEAAIAEAAIAAAEIgEAAg");
	this.shape_31.setTransform(-22.6,117.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(32,26,21,0.161)").s().p("AgYgCIAoAAIAEAAIADABQABABAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIgFABIgOABQgRAAgNgFg");
	this.shape_32.setTransform(-21.9,118.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(56,44,32,0.745)").s().p("AAIAHQgDgGgKADQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgDgBIAAgDIADgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAIAFAGAHIABADIgCgBg");
	this.shape_33.setTransform(-18.9,118.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FAD1A6").s().p("AgbAQQAPgQAHgRQgGARAQgHQAsAIgoADIgEAAQgMAMgUACg");
	this.shape_34.setTransform(-19.5,114.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D68E57").s().p("AgKgDQAqgEgnAMIgBAAQgEAAACgIg");
	this.shape_35.setTransform(-15.5,111.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FDCD9D").s().p("AgqAWIAAgCQAvgEgpgQIADgCQADgCAEAAQAlATAPgkIAAgEQAfANgYAaQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAQgugQAYAVIABADQgKACgLAAQgPAAgQgEg");
	this.shape_36.setTransform(-22.5,109.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FBCEA3").s().p("AASgMQAAgQgKAMQgYAhgMgdIAAgEQASAEAEgGQAQgWAOAQQAIAfgGAZIgCAAQgEgLgCghg");
	this.shape_37.setTransform(-15.7,106.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(240,194,147,0.992)").s().p("ABOBMIglAAIgEAAIAAgCQgfAAgWgGIAAgCQgWgIgXgCIAAgDQgQgBgRgBIAAgCQgRgBgMgFIAAgCQgSgLgbABIAAgFIAAgIQANgWAXgPIABgCIAqgRIADAAQAZAAAYgCIABgCQASACALgGIAEgBQATAAAUgBIABgCQAQgCAQgFIAAgBQAvgDAkgNIAEgBQANAvgBAmIAAAFQgQAlgqAEQgZADgDARIgEAAgAA9BEIAAABQAVgCAMgLIAEgBQAogDgsgJQgRAIAGgSQgHASgPARgAAxBEIgBgCQgkgMgYgHIgDAAQgWgLgYgKIgEABQgQAEgdgFIAAADQAjAGAWAQIAEAAIBiARIAAAAgAg9AKIAAACQAMABAVAFQAJANATACQAaACgdgJQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIAAgIQgGgGgdAAIgUABgAB3ASQgDALAGgCQAegJgRAAIgQAAgAh+gMQgTANgPARQgBAMAPgEQAHgCAIgWQAGgDAGAAQAmAFAxgJIAAgDQg7AAgggFIgDABgAAZgDIgDABQArAQgxAEIABADQAcAHAYgFIgBgDQgZgUAvAPQABgBAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAYgagfgNIgBAEQgPAkgmgTQgEAAgDACgACSgvQACAjAEALIACgBQAGgYgIggQgPgRgQAXQgFAGgSgEIABADQALAfAZgiQAFgFACAAQAEAAAAAIgAAxgKQAogJg0gCQgEAQAQgFgAAhgqQg+AMhFAEIAAACQBUAJAzgbIgEAAgAAxgqIAAACQAbgEgHAAIgUACg");
	this.shape_38.setTransform(-28.5,109.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(111,86,65,0.996)").s().p("AggBQIAAgEQAEgRAYgDQApgEARglIAAgFQAAgmgNgvIgEABQgjANguADIgFAAIgLAAIAAgFQA1gFAwgLIAEAAQAOAlACAwIAAAEQgKAbgRATIgBAEQgdAJgbAFIAAACQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABIgEAAg");
	this.shape_39.setTransform(-17,109.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FCD4A8").s().p("AABAGQgFgFAAgJQALARgCAAIgEgDg");
	this.shape_40.setTransform(-5.9,110.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5C3F2B").s().p("AAEAjIgEAAIgHAAIAAgEQAVgMgOggQgCgJgBgMIADAAQAJAcgBAlIAAADIgCABIgCAAg");
	this.shape_41.setTransform(-8.4,111.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FED3A7").s().p("AgCAHQgDgCAAgHIAAgIQAQAVgGAAQgCAAgFgEg");
	this.shape_42.setTransform(-6.9,106.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6C5039").s().p("AACAtIAAgEQgIgmABgvIAEAAQABAuAGAnIAAAEIgEAAg");
	this.shape_43.setTransform(-9,103.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(26,26,26,0.435)").s().p("AAMAIQgTgCgJgNIAdAKIADABIAAAEIgEAAg");
	this.shape_44.setTransform(-89.3,95.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(22,23,23,0.467)").s().p("AAUAOQgagIgSgPIAAgEIAtAWIAEABIAAAEIgFAAg");
	this.shape_45.setTransform(-85.2,97.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(24,24,25,0.447)").s().p("AAIAGQgLgEgIgHIAEAAQALACAHAGIABADIgEAAg");
	this.shape_46.setTransform(-92.2,94.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(43,45,46,0.871)").s().p("AgOgFQASgBAJAJIABADIgDAAIgHABQgPAAgDgMg");
	this.shape_47.setTransform(-99.8,89.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(21,21,22,0.533)").s().p("AAzAdIgDgBQgKgKgTgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQgNgGgFgLIgEAAQgggFgSgUQAQABAJAHIAEABQADAPAWgDIADAAQARAPAYAIIAEABQABAHAHADQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAABIgFAAg");
	this.shape_48.setTransform(-98.5,91);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(32,33,32,0.753)").s().p("AAUASQgQgPgRgMIAAgCQgJAAABgGQAhAEAKAcIABAEIgDgBg");
	this.shape_49.setTransform(-106.4,86.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(31,32,32,0.898)").s().p("AgEAIIAAgLIAGgGQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACAAQACALgFAHQgCADgEADIAAgFg");
	this.shape_50.setTransform(-110.6,76.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(19,20,20,0.49)").s().p("AgHASIAAgEIACgJQAEgOAGgMIACgBIABAAIAAAEQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIgHAGIAAALIAAAEIAAAEQABAKgGACIgCABIAAgFg");
	this.shape_51.setTransform(-111.1,76.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(15,16,15,0.855)").s().p("AgNAGIAAgEQAKgGADgNIACAAQAVgNgOAeQgLAWgFAAQgFAAgBgQg");
	this.shape_52.setTransform(-107.6,69.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(3,4,3,0.937)").s().p("AgJBuQgNgDgJgGQgIgGgFgKIgCgEIABgDIABgBQAFgIgFgJIgCgDIAAgEIAAgEIACgBQAHgCgBgKIAAgEQAFgCACgEQAFgGgCgMIgCgBIAAgEIAAgDIAAgIQAJgMADgRIAAgEQADAiATgpQAPgegUANIAAgFIAAgEIAGgMIABgEQAGAMAFgLQARghANAUQgTACAEAQQAJAkgfAHIgBAMQgHAkgFAmQgGAugWgJIgHgFQADAHAEAGQAGAHAIAEIAEABQgBAHAJgBIAAACIgEAAg");
	this.shape_53.setTransform(-107.2,74.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(14,14,15,0.525)").s().p("AgSAVIAAgFQAUgQAOgWIADgBIgBADQgOAagWATIAAgEg");
	this.shape_54.setTransform(-103.5,61);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(19,19,19,0.502)").s().p("AgFAGIAAgEQAIgBABgKIACAAIAAAEIAAAEIgBACQgDAHgHACIAAgEg");
	this.shape_55.setTransform(-99,55.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(28,28,29,0.667)").s().p("AgUASIAAgDIAAgFQAUgNANgSIADAAIAFAAIgBACQgUAVgUAVIAAgFg");
	this.shape_56.setTransform(-96.3,53);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(13,13,13,0.447)").s().p("AgHAGIAAgEQAIgDAFgIIACAAIAAAEIAAAEIgCABQgFAHgIADIAAgEg");
	this.shape_57.setTransform(-87.3,44);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(27,27,27,0.612)").s().p("AgFAIIAAgEIAAgEIAAgDQAGgBADgHIACAAIAAAEIAAAEIgCAAQgCALgHAEIAAgEg");
	this.shape_58.setTransform(-85.8,42.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(35,35,35,0.729)").s().p("AgJAIIAAgEIAAgEQAJgCAEgIIACgBIAEAAIgBADQgFAOgNAGIAAgEg");
	this.shape_59.setTransform(-84.2,40.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(16,15,17,0.514)").s().p("AgNAKIAAgEIAYgPIADAAIgBADQgJAJgNAHIgEAAg");
	this.shape_60.setTransform(-93.2,49.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#624937").s().p("AgBAQIAAgEIAAgbIADAAIAAAEIAAAEIAAATIAAAEIgDAAg");
	this.shape_61.setTransform(-9.4,97.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B79373").s().p("AAFBZQABgmgJgcIAAgEQgHgmgBgvIAAgEIAAgVIAEAAQADBdAPBPIAAAHIgGAEIAAgDg");
	this.shape_62.setTransform(-8,105.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FECDA7").s().p("AgEAGQATgdgTAfg");
	this.shape_63.setTransform(-2.9,87.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#927054").s().p("AgBAXIAAgEIAAgUIAAgEIAAgRQAGAQgDAZIAAAEIgDAAg");
	this.shape_64.setTransform(-7.3,80.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#65462E").s().p("AACAcQgGgZABgfIADAAQAAAHACAFIACABIAAATIAAAEIAAARIAAAEIgCgBg");
	this.shape_65.setTransform(-8,77.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F3D2B5").s().p("AgDgCIgBgDIAJALIgIgIg");
	this.shape_66.setTransform(-6.6,75.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#7B5B41").s().p("AAEAtIgCAAIgJhNIAAgEIAAgIQAKAoAFAtIAAAEIgEAAg");
	this.shape_67.setTransform(-1.8,83.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#272E2E").s().p("AgCAHQAFgKgIgPQAZAYgZANIAAAAQgCAAAFgMg");
	this.shape_68.setTransform(-31.2,58.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6D5540").s().p("AAOARQgRgQgNgTIAFAAQAPAQAMARIABADIgDgBg");
	this.shape_69.setTransform(-26,55.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6E5543").s().p("AAMAUIgBgCQgRgNgJgUIAAgFQAQASAOATIABADIgEAAg");
	this.shape_70.setTransform(-28.9,52);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7A5E44").s().p("AAIAKIgEAAIgBgCIgOgNIAAgEQAOAGAIAKIABADIgEAAg");
	this.shape_71.setTransform(-4.3,71.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#816350").s().p("AAYAgQgJgzglgFIAAANIAAAEIgCgBQgBgFAAgHIAAgEIAAgEQADgEAIAAIAEAAQAYASAMAfIABAEIAAAIIAAAEIgDgBg");
	this.shape_72.setTransform(-5.3,77);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4B3628").s().p("AgJAIIAAgEIAAgHQAHgGAMADIAAADIgEAAQgHAAgEADIAAAEIAAAEIgEAAg");
	this.shape_73.setTransform(-7.4,74.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6B5039").s().p("AAQAEIgfAAIgFAAIAAgEQAUgIAQAIIAFAAIAAAEIgFAAg");
	this.shape_74.setTransform(-7.5,70.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#66523F").s().p("AgcgNIAAgEQAXAbAaAEIAEABIAEAAIgBACIgMABQgdAAgPgfg");
	this.shape_75.setTransform(-12.1,69.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#282A2C").s().p("AhwC+QAYgYACgHQACgKAAgMIAAgZQAbgDgOgvIAAgDQAQgNgDghIAAgEQAKgEAAgPIABAAQgDgsAEgwQAHg1AIgiQAAgBABgBQAAAAAAAAQAAAAAAABQAAABAAACQAagKASAkIADAFQAOAaAZANQgDArATAAIAAgCQAKgiAMApIACAEQAGAIALABIgMA9IAAAEQgTASgDAgQgFA0gXgHQALgsgfgBIgFAAQAHA3gSAfIgBAEQAHAWAQgWIACAEQgGATgLANIgEABQhAAFhCABgAApCLQgCAAAAgHQATAKgFAAIgMgDg");
	this.shape_76.setTransform(-26.6,80.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#705842").s().p("AAbAjIgBgDQgigbgWgnQAgAeAcAjIABAEIgEAAg");
	this.shape_77.setTransform(-21.3,61.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#634B38").s().p("AAPASQgSgQgOgTIADAAIAgAcIABAEIAAAEIgEgBg");
	this.shape_78.setTransform(-16.8,66.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(14,15,16,0.522)").s().p("AgPAXIAAgEQAQgSANgWIACgBIAAAEQgLAXgQASIgEAAg");
	this.shape_79.setTransform(-81.9,37.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(12,12,12,0.459)").s().p("AgHARIAAgNQAKgGADgRIACAAIAAADQgFAVgKAPIAAgDg");
	this.shape_80.setTransform(-76.2,27.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#29292B").s().p("AgRAGIgBgEIALgYQAIAPALALQARAVgXgDIgGABQgKAAgHgRg");
	this.shape_81.setTransform(-69.8,28.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(6,6,6,0.478)").s().p("AAAAZQACgfgFgWQANATgIAlIgCABIAAgEg");
	this.shape_82.setTransform(-73.7,17.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(16,16,16,0.518)").s().p("AgFAOIAAgDQAFgMAEgQIACgBIAAAFQgBAVgKALIAAgFg");
	this.shape_83.setTransform(-74.7,23.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(18,17,18,0.486)").s().p("AAEAUQgGgTgDgVQAJAPACAVIAAAFIgCgBg");
	this.shape_84.setTransform(-74.7,13);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(27,27,27,0.702)").s().p("AADARIgIgPIAAgDIAAgRQAHAPAEARIAAAEIgDgBg");
	this.shape_85.setTransform(-76,5.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6B553F").s().p("AAIBhQgLhggGhhIAEAAQAJBdAGBfIAAAFg");
	this.shape_86.setTransform(-45.1,9.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#654734").s().p("AgFAKIgFAAIAAgEIAAgEQANgBAFgJQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABAAIgBAEQgDAKgMABIAAAEg");
	this.shape_87.setTransform(-5.3,42.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#654F3A").s().p("AAHAMQgHgMgJgLIAEAAIAEAAQAGAHAEAJIABADIAAAEIgDAAg");
	this.shape_88.setTransform(-31.6,49.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6D5643").s().p("AASAjIgDAAIgBgDQgYgXgLgjIAAgDIAAgFQASAlAZAdIABADIgFAAg");
	this.shape_89.setTransform(-34,44.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6B513B").s().p("AAQAtQgQgugRgrIADAAQAWAhAKAsIABAEIAAAEIAAAEIgDAAg");
	this.shape_90.setTransform(-38.1,37.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B4906A").s().p("AgPgDIAfAFIABACIgFAAIgEAAQgPAAgIgHg");
	this.shape_91.setTransform(-13.3,1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BC916F").s().p("AAdAGQghgDgcgIQAjACAdAHIABACIgEAAg");
	this.shape_92.setTransform(-5.9,2.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(23,24,24,0.431)").s().p("AgYACIAcgGIAEgBIAMAAIAFAAIAAACQgbADgWAGIAAgEg");
	this.shape_93.setTransform(87.4,110.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(29,29,30,0.525)").s().p("AgYANIgMAAIAAgFIBFgTIAEAAIAAAEIgEAAQgcAIgYAMIgFAAg");
	this.shape_94.setTransform(91.9,108.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(21,22,22,0.482)").s().p("AgaAIIAAgEIAxgPIAEgBIgBADQgZALgbALIAAgFg");
	this.shape_95.setTransform(98.2,106.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(11,5,2,0.251)").s().p("AABAEIgJAAIgBgHIAKAAIAEAAQAJACgJADIAAACIgEAAg");
	this.shape_96.setTransform(16.6,119.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FED3A6").s().p("AgIAFIANgKIADAJQgFACgDAAIgIgBg");
	this.shape_97.setTransform(15.9,113.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(127,95,70,0.961)").s().p("AgHAAIAFgDIACgBIAEAAIAEAAIgBADIgCABIgIADIAAAAIAAAAIgEACIAAgFg");
	this.shape_98.setTransform(14.6,117.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(15,12,9,0.255)").s().p("AAAAHIAAgDQgHgDgEgGQALgCACAGIACABIAIAAIgKAHIgCAAg");
	this.shape_99.setTransform(-18.3,119.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#775942").s().p("AgIAJIgEAAIAAgFIAXgMIACAIIgRAJIgEAAg");
	this.shape_100.setTransform(15.9,116);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(105,85,61,0.976)").s().p("AgBgBIABgBIACAFIgDgEg");
	this.shape_101.setTransform(51.4,113.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(61,49,36,0.298)").s().p("AgFAIIAAgCQAIgEgIgCIAAgDIAEgDIADgBIACAHIgCAAIACAAIACAIIgLAAg");
	this.shape_102.setTransform(17.7,118.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(26,22,19,0.502)").s().p("AgBABIgBgBIACAAIADAAIAAABIgEAAg");
	this.shape_103.setTransform(55,117.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(115,93,70,0.502)").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_104.setTransform(18,119);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#755D46").s().p("AABAkQARgaAJggIgEgBQgbgDgagFIgEgIQAiAFAfAHIAEAAQgGAqgaAYIAAABIgCgEg");
	this.shape_105.setTransform(52.2,108.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F7D7B1").s().p("AgDgBIgBgCIAJAHIgIgFg");
	this.shape_106.setTransform(53.4,106.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(243,194,147,0.992)").s().p("AgWgVQABAAAAAAQABAAgBAAQAAAAAAAAQAAAAgBgBIgGgLQAaAFAbADIAEABQgJAggRAaQgLgcgOgbgAAKgRQAUANgVgQIABADgAgTASIAAgBIABABg");
	this.shape_107.setTransform(52,108.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(26,27,27,0.549)").s().p("AgPAEIgFAAIAAgEQAXACAOgFIAEgBIgBADQgKAGgPAAIgKgBg");
	this.shape_108.setTransform(82.8,111.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(19,19,19,0.329)").s().p("AgPAEIAAgEIADAAIAFAAQAJABAGgDIAEgBIAEAAIgBACQgKAFgOAAIgGAAg");
	this.shape_109.setTransform(73.8,114);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(26,27,27,0.443)").s().p("AgeAKIAAgEQAdgGAYgJIADAAIAFAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgbAKgdAHIgEAAg");
	this.shape_110.setTransform(78.1,112.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(27,27,27,0.529)").s().p("AgeAGIAAgEIA5gHIAEAAIAAAEIgEAAQgaAEgbADIgEAAg");
	this.shape_111.setTransform(58,117.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(20,20,20,0.518)").s().p("AgYAEIAAgEIAsgHIAFAAIAAAEIgFAAQgXADgVAIIAAgEg");
	this.shape_112.setTransform(63.5,116.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(20,20,20,0.4)").s().p("AgcACQAYACANgIIADgBIAMAAIAFAAIgBACQgaAHgeACIAAgEg");
	this.shape_113.setTransform(68.9,115);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(21,22,21,0.675)").s().p("AACADIgDAAIgMAAIAAgDIAbgCIAAACIgEAAIgEAAIAAADIgEAAg");
	this.shape_114.setTransform(71.5,114.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#282C2D").s().p("AgmAOIAAgCQAjAFAWgPIADgKQAUgbgDAnIAAAEQgRAMgXAAQgRAAgUgGg");
	this.shape_115.setTransform(53.1,98);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#272B2C").s().p("AgfCMIgagoQANgFACAXQABAOAIgJQgGgagOgkIgBgEQAHgeAJgZQADgIgPAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQgLgcAggBIAAgEIAAgIQgUgLgEgeQgBgRgSAGQgFABACgLQAPgJAOAFIAEAAQAQgNASgKIADgBQATAuAJA4IAAAEQAsAtgTA1IAAAEQAVAGAPAYIABADQgUgMgCAhQAAAGgLACIAAAEQgrAFgeAAIgGAAg");
	this.shape_116.setTransform(48.5,84.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#412E1C").s().p("AAAAWQgBgWAAgWIADAAIAAApIAAADg");
	this.shape_117.setTransform(47.3,55.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#76553F").s().p("AgDAGIAFgPQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAAAEQgBAJgDAIIgDgFg");
	this.shape_118.setTransform(29,76.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6E5443").s().p("AAAAMIAGgQIgDABIgGALIgFgHIALgUIADgBQAGAVgFAUIgHgJg");
	this.shape_119.setTransform(39.1,87.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7A5338").s().p("AgBgBIADAAIAAADIAAAAIgDgDg");
	this.shape_120.setTransform(37,86.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7E6047").s().p("AjvBQIAAgEIAAgEIAAgEIAAgIQAFgWAJgTIACAAIAAhFIAAgEIAEAAIAAAEQAEBKgUA0IAAAEIgEAAgADcgaIAAgEIAAgEQAQgPACgeIACAAIAAAMIAAAEIAAAEQgFAUgLANIgEAAg");
	this.shape_121.setTransform(14.8,88.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#704E36").s().p("AAAAAIABgBIAAADIgBgCg");
	this.shape_122.setTransform(34.6,83.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#77553F").s().p("AgIAGIAIgLIABgEIAEgDIAEgBIgBAEQgDAMgGALIgHgIg");
	this.shape_123.setTransform(33.9,80.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8F6B49").s().p("AgFAMIAAgDQALgFgCgUIACAAIAAANIAAADIAAAEQACAJgGgBIgDABIgEAEIAAgFg");
	this.shape_124.setTransform(34.6,78.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8F6F52").s().p("AgBAQIAAgkQAGAQgFAYIgBABIAAgFg");
	this.shape_125.setTransform(35.4,74.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#4C3427").s().p("AgBAWIAAgDIAAgNIAAgEIAAgLIAAgEIAAgJQAGASgFAaIgBAAg");
	this.shape_126.setTransform(39.1,80.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7A5A3E").s().p("AgJAZIAAgDIAAgEIAAgFQAPgNACgaIACgBIAAAJIAAAEIAAAEQgGAVgLARIgCgDg");
	this.shape_127.setTransform(35.8,81);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#91715E").s().p("AgJAHIAAgIIAAgEQAJgIAHAHIADABIAAAHIAAAFQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgIgUgJAZIAAgEg");
	this.shape_128.setTransform(37.8,78.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#54382A").s().p("AAHAFQgHgHgJAIIAAgEIAAgDQALgJAHAMIABAEIgDgBg");
	this.shape_129.setTransform(37.8,77.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FED2A7").s().p("AgMAEQAMgEAJgFIADAFQgKAEgOACg");
	this.shape_130.setTransform(10.6,91);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#806147").s().p("AgQAQIgCgBQgLgPgHgUIAEAAQAKAnAzgDIAEAAIAEAAIgBADQgMACgKAAQgQAAgOgFg");
	this.shape_131.setTransform(2.3,90.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6C5947").s().p("AgcgJIAAgEIAAgUIAEgCIABgCQAYADAdABIgEAFIgxgBQgJA2AdAHIAHAAIgBAGIgFAAQgfAAAFgvg");
	this.shape_132.setTransform(3.9,85.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#443A31").s().p("AgBAOQgCgOAAgNIADAAIAEAAIgBADIgDABIAAATIAAAEg");
	this.shape_133.setTransform(1.1,83);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F4CBA0").s().p("AgTgYIAAgEQATAEAUAAQgOAXgCAbIgEACIgDABQgTgRADgkg");
	this.shape_134.setTransform(3.9,85.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#97785D").s().p("AgqgBIBRAAIAEAAIAAABIgBAAQgUACgSAAQgYAAgWgDg");
	this.shape_135.setTransform(7.9,78.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B59C7F").s().p("AgDAfIADgBIAEgCIAAADIgHAAgAgXgeIAxABIgGAHQgUgBgTgDIAAAEQgDAkATARQgdgGAJg3g");
	this.shape_136.setTransform(3.9,85.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#76533C").s().p("AgPAbQAPgbANgfIADgBIAAAEIAAAEIgBAEQgMAbgNAaIgFgGg");
	this.shape_137.setTransform(31.5,75.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#654B38").s().p("AAGAfIAAgNIAAgEIACAAQAFgYgHgQIgEgBQgFgCgLALIAAgEIAAgEIAAgEQAngSgOBGQgBAHgEAGIAAgEg");
	this.shape_138.setTransform(34.6,74.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#7D5B43").s().p("AgFAMIAAgEQAJgGAAgRIACAAIAAAEIAAAEIAAAEQACASgNABIAAgEg");
	this.shape_139.setTransform(30,73.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#7A5C43").s().p("AhoBpIAAgEIAAgEIAEgCIAGgBIAEgEIALgGQAKgCAIABQgTALgUALIgEAAgAg3BFIACgBIAIAEIAAAAIgKgDgAA7giIAFgHIACAAQgCADgCAEIgDAAgABmhnIADgBIAAAFIAAAEIgBADIgPAYIgHAAQALgQAJgTg");
	this.shape_140.setTransform(16.1,81.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(245,198,150,0.996)").s().p("AgeDTIgYAQQgDgJgGgKIgoAZQgDgPgYgOQgIgBgHAFIgLAKQgDgNgWgHQgHABgIAEIgaAQIgBgHQgQhPgDheIAAgEQAVgzgEhLIAAgEIAAgEQADgagHgQIAAgEIAAgUIAAgEIAAgNQAlAFAKA0IACABIAKBOIACAAQAHAUALAQIADABQAWAHAfgFIABgCQAUgLASgLQALABAFAGQgKAGgMAFIAAACQAPgCAKgFIACAHQgEBTAdBMIATA5IgNALQAHADAJgEIADAIIgYANIAAAFIgCABIgFADQgBgRgOgRgAjTC2QAKALgQgaQAAAKAGAFgAjlCKQAAAIADACQAVANgYgfIAAAIgAi8gqIAAACIAKgQIgKAOgAjgiuQATAUgUgYIABAEgAjyDkIAGAAIgCABIgEgBgAjpDgIABAAIgBABIAAgBgADpgpIAHgMIACgBIgFARIgEgEgADDhZQAMgRAGgWIABgEQAJgaAJAVQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAAAMIAAAEIgCAAQgDAegPAPIAAAEIAAAEIgTgWgACWiMQAOgaAMgcIABgEQAKgMAHADIADABIAAAlIAAAEIAAAEIgCAAQACAUgMAFIAAAEIAAAEIgBADIgIANIgagcgABri3IgLAAIAOgYIABgDQALgQAMgOIABgDQAdgGgMAjIAAAEIgCAAQAAASgKAGIAAAEIAAAEQgBAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgGARIgYgXg");
	this.shape_141.setTransform(15.5,92.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#68503C").s().p("AhcAUIAAgEQgMgZgUgTIAEAAIAEAAQANAbAcANIAAAAQAKAFALADIAEAAQAlAHAugFIgKAHIgbAAQgrAAgtgJgAAjAUIADAAIgDACgAB2gPIADgBIAEAAIgDAHIgNADIAJgJg");
	this.shape_142.setTransform(8.7,75.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#785A41").s().p("AgLAQIAAgEIAAgEIAAgEQALgKAJgNIADgBIAAAFIAAAEIgBACQgLANgLARIAAgFg");
	this.shape_143.setTransform(27.8,69.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#66533F").s().p("AAEAXIAAgEIAAgEQALgigbAGIAAgEIAAgEIAAgFQAmAIgUAsIgCABIAAgEg");
	this.shape_144.setTransform(30.3,69.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#69523C").s().p("AiFAxIAAgEQAcg5A3gfQgqArgkAxIgFAAgAAnAAQgvgRgmgbIgBAAIAFgDIAEgBQAZAFALAUIABADQAWACALAOIADABIBWgkIAEgBIAEAAIAFAAIgBACQgtAUgtASIgEAAg");
	this.shape_145.setTransform(34.2,69.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#A08064").s().p("AgNAKIAAgEQAOgDAHgMIACgBIAEAAIgBAEQgIALgOAFIgEAAg");
	this.shape_146.setTransform(21.8,26.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#57352C").s().p("AgBAAIADAAIgDABIAAgBg");
	this.shape_147.setTransform(-6.2,43.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#5B382D").s().p("ABUAhIgBgDQgCgZgPACQgCAEgBAAQgfgKgigGIgTgEIgCAAQgjgJgbgPQANAFAPAFIABACQBKAHAuANQACABAIAAQAMALgBAXIgBgBg");
	this.shape_148.setTransform(14.6,47.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#1C0906").s().p("ACCAiQgjgQglgJQAjAHAfAJQABAAACgEQAOgBADAZQgFgHgJgEgAg1gKQgsgIgugBIAAgEQANgBADgLIABgFIAAgDQAIAAAHABIABACQANAbAxgFIAYgBQAaAQAjAHIhagOg");
	this.shape_149.setTransform(8.5,45.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#573730").s().p("AgqgKQAlANAwAEIAAACIgYABIgOABQgkAAgLgVg");
	this.shape_150.setTransform(1.7,42.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#BB7663").s().p("ACUBBQAAgFgCgDQABgXgMgMQgIAAgCgBQgugNhLgHIgBgBQgOgFgNgFIAAgCQgxgFglgOIgBgCQgHgCgIAAIAAAEQgBAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgFAKgNACIAAAEIAAAEIAAABIgDACIgBgCIAAgFIAAgEIAigcIADgBQAcAPApgdIABgDQArAIAuAEIAEABQAoAiAqAeIAJAAQARAbgGAZIgDAAg");
	this.shape_151.setTransform(8.5,44.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A08367").s().p("AgUAMIgDgBIgmgXIAEAAQAWAKAXAHIABADQAlACAcgKIAEAAIAEAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQgZALgiAAIgWgBg");
	this.shape_152.setTransform(14.6,27.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#AE947C").s().p("AgUgBIAkAAIAFAAIgBABQgKACgJAAQgLAAgKgDg");
	this.shape_153.setTransform(15.9,25.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#A48265").s().p("AAKAWIgDgBQgPgKgFgUQAFgIAHgEIADgBIgBAEIgCABIAAADIgEAAQABAZASAJIAAACIgEAAg");
	this.shape_154.setTransform(7.4,24.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#B38C69").s().p("AgmgDQAlACAkgCIAEAAIgBACQgTAFgSAAQgUAAgTgHg");
	this.shape_155.setTransform(2.1,3.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#BB956F").s().p("AgIAMIAAgEQAQAAgCgUIACAAIAAAFIAAAEQADAQgOAAIgFgBg");
	this.shape_156.setTransform(7.3,2.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#96785B").s().p("AgFAYIAAgDIAAgFQAKgNgBgaIACAAIAAAUIAAADIAAAEQACAPgJACIAAADIgEAAg");
	this.shape_157.setTransform(23.5,23.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#A88B6C").s().p("AgCAQIAAgTIAAgEIAAgNIAEAAIAAAFQADAWgHAOIAAgFg");
	this.shape_158.setTransform(24.3,21.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B5906F").s().p("AgDAXIAAggQAFgDAAgOIACAAIAAAFQgCAagFAWIAAgEg");
	this.shape_159.setTransform(20.8,18.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#6E5743").s().p("Ag3AZIgBgCQgHgCgIAAIAAgEIADgBIABgDQAeANAcAOIADABQAPAHAZgFIAAgCQAbAAgCgcIAAgFQAHgVABgbIAAgEIAAgEIAAgEIAEAAIABAEQACAZgHAQIAAAYIAAAEQgDAVgVAGQgSAFgQAAQglAAgbgcg");
	this.shape_160.setTransform(14.5,20.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A28263").s().p("AAJAiIABgEQAShDgrAOIAAARIAAAEIgEAAIAAgEIAAgVQA3gZgWBSIgBAEIgEAAg");
	this.shape_161.setTransform(23.2,15.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#130803").s().p("AgJBKQgPgJgWgCIgBgDQgYgKgIgYIAIAAIAEAAQAnAoA7gSQAVgFADgWIACAAQAAg4ATglIAAgCQARBOguA7IgEAAIgwAMIgEgBg");
	this.shape_162.setTransform(15.7,20.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#432E1E").s().p("AgWBNIgBgCQgXgIgWgKIAAgDQgTgJgBgZIAEAAQAIAAAIACIAAACIgEAAIgIAAQAJAYAXAKIABADQAWACAQAJIADABIAwgMIAFAAQAtg7gRhOIAAACQgSAlAAA5IgCAAIAAgEIAAgYQAHgQgDgZIAAgEIAAgEIAAgRQArgOgSBEIgBAEIAAAMIAAAEIgCAAQABAbgLANIAAAEIAAAEIgCABQgHANgPADIAAAEIgEABQgXAHgdAAIgNAAg");
	this.shape_163.setTransform(15.7,20.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FCD9AA").s().p("AgGgCIAAgDIANALIgNgIg");
	this.shape_164.setTransform(30.6,8.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FAD6B3").s().p("AABAHQgFgFgBgLQANATgDAAIgEgDg");
	this.shape_165.setTransform(31.2,2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#7D654C").s().p("AAjAnQgwgagZgzIAEAAIAEAAQAPAdAUAVIABADIAgASQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIgEAAg");
	this.shape_166.setTransform(41.1,6.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(29,24,21,0.388)").s().p("AgRAUQgPgJgKgOQALABAGgEIAEgBQAlADAWgNIABgDIAEAAIgBAEQgTAWgxgGQABANALAFIABADIgEgBg");
	this.shape_167.setTransform(46.1,4.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(10,10,9,0.529)").s().p("AgOAAQAQABAIgEIAFAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAgBAAQgHAFgHAAQgGAAgHgEg");
	this.shape_168.setTransform(53.1,9.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(20,19,19,0.576)").s().p("AgEAGIAAgHQAFAAAAgIIACAAIABADQAEAQgMAAIAAgEg");
	this.shape_169.setTransform(55,7.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(2,3,3,0.498)").s().p("AgCAQIAAgkIADAAIABAEQACAXgGAOIAAgFg");
	this.shape_170.setTransform(55.6,4.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(2,2,2,0.635)").s().p("AgBAQIAAgEIAAgbQAGALgFAUIgBAAg");
	this.shape_171.setTransform(56.3,-0.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(21,21,21,0.498)").s().p("Ag3AxQAmgJAfgRIABgCQA7gRgvg1IgBgDIAEABQAWAcADAbIgBADIg0AiIgDAAQgcAFgaAHIAAgEg");
	this.shape_172.setTransform(106.5,99.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(13,13,13,0.529)").s().p("AAJASQgNgPgHgUQANAOAKARIAAAFIgDgBg");
	this.shape_173.setTransform(107.9,92.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(13,13,13,0.553)").s().p("AAJARQgOgNgHgWQANAPALASIAAADIgDgBg");
	this.shape_174.setTransform(104.6,87.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(12,12,12,0.537)").s().p("AAHASQgLgPgFgUQALANAIATIAAAEIgDgBg");
	this.shape_175.setTransform(101.9,82.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(13,13,14,0.525)").s().p("AAGAYQgJgVgEgbQALATAEAZIAAAFIgCgBg");
	this.shape_176.setTransform(98,73.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(4,4,4,0.506)").s().p("AAAAUQgBgUAAgUQAGAOgDAWIAAAFIgCgBg");
	this.shape_177.setTransform(96.6,67.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(0,0,1,0.471)").s().p("AAAAlQgBglAAgkIADAAIAABFIAAAEg");
	this.shape_178.setTransform(95.4,59.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(17,17,17,0.451)").s().p("AgDAIIAAgIIAAgDIAAgEIADgDIAEgBIAAAEQgCAMgFAHIAAgEg");
	this.shape_179.setTransform(102.6,42.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(15,15,15,0.553)").s().p("AgHANIAAgJQAJgFAEgOIACAAIAAADQgEASgLAKIAAgDg");
	this.shape_180.setTransform(103.8,40.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(16,16,16,0.525)").s().p("AgHAMIAAgIQAJgGAEgNIACgBIAAAFQgDASgMAKIAAgFg");
	this.shape_181.setTransform(105.8,36);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(13,14,14,0.494)").s().p("AgJAbIAAgNQAOgPADgdIACAAIAAAEQgEAigPAXIAAgEg");
	this.shape_182.setTransform(107.7,31.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(13,13,13,0.518)").s().p("AgFAIIAAgLIAIgIIADgBIgBAEIgKAVIAAgFg");
	this.shape_183.setTransform(109.3,26.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(32,32,32,0.733)").s().p("AgDAMQgHgBADgJQAIgEAFgLIADAAIAAAIIAAAEIgDABQgEAIgFAGIAAgCg");
	this.shape_184.setTransform(101.3,44.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(18,19,19,0.576)").s().p("AgWAlIAAgEQAUglAWgjIACgBIgBAEQgSApgZAkIAAgEg");
	this.shape_185.setTransform(98.7,49.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(15,15,15,0.506)").s().p("AgFAKIAAgEIAHgQIABgDIACAAQAEAVgOAGIAAgEg");
	this.shape_186.setTransform(111.7,18.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(12,13,13,0.525)").s().p("AAAANQgEgGABgKQAFgBAAgLIACAAIAAAEQADASgHAJIAAgDg");
	this.shape_187.setTransform(110,24);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(0,0,1,0.659)").s().p("AAABGQgBhGAAhFIADAAIAACHIAAAEg");
	this.shape_188.setTransform(111.8,6.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(13,14,13,0.518)").s().p("AABAQIgFgbIADgBIABgDQAGAJgCASIgBAEIgCAAg");
	this.shape_189.setTransform(110,-10.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(12,13,12,0.514)").s().p("AADARQgLgLADgYIAKAgIABAFQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_190.setTransform(109.3,-13.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(28,28,28,0.694)").s().p("AADAOQgFgOgEgNIAFADIADABQAHAFgDAOIAAAEIgDAAg");
	this.shape_191.setTransform(107.7,-17.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(5,6,6,0.49)").s().p("AADAoIgEgDIAAgEQgHggADgpIAEAAQgFAwAMAdIABAEIgEgBg");
	this.shape_192.setTransform(107.2,-22.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(36,37,37,0.875)").s().p("AgEAIIAAgIQAGAAAAgLIACAAIAAAEIAAAJQAAAEgCADQgCACgEABIAAgEg");
	this.shape_193.setTransform(107.5,-29);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(4,4,4,0.529)").s().p("AxOKNQADgMgFgMIAEAAIACADQAFAJgFAIIgBABIgBADgARAm6IAAgFQAEgBADgCIgHAMIAAgEgARJnTIAAgEIAAgEIAAixIAEAAQAAA5AEA6QADAwgLAgIAAgKg");
	this.shape_194.setTransform(-1.8,17);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(16,16,16,0.569)").s().p("AACAYIAAgDQgFgVgCgXQAMAPgBAdIAAADIgEAAg");
	this.shape_195.setTransform(107.7,-50.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(4,5,4,0.494)").s().p("AAAASQgCgSAAgRQAHALgDAUIgBAFIgBgBg");
	this.shape_196.setTransform(106.9,-55);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(19,19,19,0.533)").s().p("AAKAlQgHglgOgbIADgFIABgEQAQAcADApIAAAEIgCAAg");
	this.shape_197.setTransform(103.8,-65.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(12,12,12,0.4)").s().p("AACAOQgCgOgDgJIAAgFQAJAHgCARIAAAFIgCgBg");
	this.shape_198.setTransform(100.5,-76);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(18,18,18,0.541)").s().p("AADAJQgHgGgBgMQAGAFAEAHIABADIAAAEIgDgBg");
	this.shape_199.setTransform(99.5,-78.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(23,23,25,0.588)").s().p("AAFAPQgIgNgEgRQANAIACATIAAAFIgDgCg");
	this.shape_200.setTransform(96,-84.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#292A2A").s().p("AgDgBIgBgCIAJAHIgIgFg");
	this.shape_201.setTransform(86.2,-91.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(28,28,29,0.69)").s().p("AAoAqQgrgogngsQAvAkAlAuIABADIgDgBg");
	this.shape_202.setTransform(85.5,-99);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(24,24,24,0.616)").s().p("AAOAaQgSgYgLgcQAVASAKAeIAAAFIgCgBg");
	this.shape_203.setTransform(93.5,-89.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(43,32,24,0.533)").s().p("AgPAfIAAgEQAXgQAAglIAAgEQAFAAADACIABACIgBAEQgGAigWATIgDAAg");
	this.shape_204.setTransform(51.6,-0.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FBD5AE").s().p("AgEAGQAFgpADAiQADASgEAAQgCAAgFgLg");
	this.shape_205.setTransform(54.6,-11.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#B0A49C").s().p("AgJAIIAAgEIAAgMIALAAIAFAAIACABQAEAQgNAAIgJgBg");
	this.shape_206.setTransform(48.5,-3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#5D5956").s().p("AgHAKQgHgDADgMQAHgFANABIAEAAIAAAEIgFAAIgLAAIAAAMIAAAEIgEgBg");
	this.shape_207.setTransform(47.9,-3.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(126,116,108,0.973)").s().p("AAAAWIgBgDQgLgIgBgRQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgGgDADgLIAEAAIAEAAQAKAWARAPIABADIgDABQgFAEgIAAIgDgBg");
	this.shape_208.setTransform(41.9,1.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#625B5A").s().p("AAAALQgIgGADgQQAFAAAGACIAAACIAAAEIgEAAIgDAAQgDAKAFADQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgCgBg");
	this.shape_209.setTransform(40.3,-0.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(76,53,38,0.976)").s().p("AgbAnIgBgDQgRgRgMgUIAAgFQAYgTAEAKQAJARAPAJQAFADAEgEQAcgLgWgOIgBgDQAYAGgGgWIgCAAIAAgEQAOALAPgHIADAAIAAAEQAAAlgYAPIAAAEIgBADQgRAKgbAAIgPAAg");
	this.shape_210.setTransform(46.7,-0.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#9E7758").s().p("AgSgBQASAAASABIAAACIgEAAIgMAAQgMAAgIgDg");
	this.shape_211.setTransform(39.5,-11.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#A18267").s().p("AgPgBIAbAAIAFAAIgBABQgQACgPAAIAAgDg");
	this.shape_212.setTransform(47.9,-20.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#736455").s().p("AAZAbIg1AAIAAgEQBGAKgdgvIgBgDIAAgEIAAgFIADABQAIAZAGAbIgEAAg");
	this.shape_213.setTransform(50.8,-28.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#8F755F").s().p("AATACIgYAAIgEAAIgNAAIAAgDIApAAIADAAIAAADIgDAAg");
	this.shape_214.setTransform(45.7,-26.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FBD4AD").s().p("AgDgEIgBgDIAJAPIgIgMg");
	this.shape_215.setTransform(50,-31.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#7F664D").s().p("AAeBBQghg/gdhDIAEAAQAgA6AbBAIACAAIAAAFIAAAEIgDgBg");
	this.shape_216.setTransform(48.7,-37.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FCD5AB").s().p("AgFAFQgEgEADgKQAWAOgMAEIgCABQgDAAgEgFg");
	this.shape_217.setTransform(46.1,-38.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#6E5842").s().p("AACAIIgCgBQgGgEABgKIAEAAIAGALIABAEIgEAAg");
	this.shape_218.setTransform(45.2,-44.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#796149").s().p("AgKAOIgIAAIAAgEQAVgIAMgOIADgBIAAAEIgBADIgWAUIgFAAg");
	this.shape_219.setTransform(35.8,-2.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#6B543B").s().p("AgLAEIAAgEIAAgDIAIgEIADAAIAIAAIAEAAIAAACQgOAFgJAIIAAgEg");
	this.shape_220.setTransform(33.9,-0.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#7D6148").s().p("AgegKQAHABgBgJIACAAIAAAEIAAAEQAHAeAugIIAAACIgEAAIgFAAIgDABQgMAEgIAAQgZAAgEgdg");
	this.shape_221.setTransform(35,1.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FAD8B1").s().p("AgHACQAggMggAOg");
	this.shape_222.setTransform(33.2,-2.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FDD7AC").s().p("AgDgCQAPAFgPAAg");
	this.shape_223.setTransform(32.7,-7.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#9F8166").s().p("AAZACIg1AAIAAgDQAcAAAdABIAAACIgEAAg");
	this.shape_224.setTransform(37.6,-10.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FCD4AE").s().p("AgOABQAcgIABAIIgFABQgIACgEAAQgIAAgEgDg");
	this.shape_225.setTransform(35.9,-9.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FCD5AF").s().p("AgJAAQAmgCgmADg");
	this.shape_226.setTransform(39.4,-7.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EEC499").s().p("AgLB1QgWgIgUgEQg9gNgEhDQARgtgIg0IAAgFQAKgnAfgRIAEgBIA1AAIAEAAIAEABQAbAIAiADIAAACQg5ANgkAeIAAAFIgDABQgNAPgVAIIAAAEIgEABIgJADIAAAFIgCAAQABAIgHAAQAGAnAsgOIADgBQAZAzAxAaIAEAAIADABQAZASApACIAEABQAMALgHAVQgEAGgFAAIgTABQgxAAgygSgAhxAwQAdATgdgVIAAACgAhigCQALAKgSgbQAAAMAHAFgAhZg0IAAACIARgHIgRAFgAgbhpIAAACQAZgDgIAAIgRABgAhZhnQAQgBgQgFgAhEh+QAIAGARgEIAFgCQAAgEgIAAQgIAAgOAEg");
	this.shape_227.setTransform(41.3,3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#41291D").s().p("AgCAFIgNgHQA0gGgkALIAAACIgDAAg");
	this.shape_228.setTransform(22.8,-5.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#785E47").s().p("AhhgOQAFAAAAgIIACAAIAAAEIAAAEQATAsBDgVQA3gPAvAQIAAAIIAAAEIgDgBQgNgTgpAIIgEAAIgdAAIAAAEIgEABQgZAIgUAAQgpAAgPglg");
	this.shape_229.setTransform(45.5,-21.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#745A42").s().p("AgqAKIAAgEIAAgEQAbgNAlgDIAFAAIAMAAIAEAAIAAACQg2ACgfAYIAAgEg");
	this.shape_230.setTransform(40.7,-24.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#2D1A0C").s().p("AgNAhQAJgkAQggIACAAIAAAEQgFAWgKAOQAAAKABAKIACAAIgBAEQgEAHgFAAQgDAAgCgDg");
	this.shape_231.setTransform(9.9,-0.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#29160C").s().p("ABTgPIABgEQgVgQgcgIIgEgBIAAgCQAkgMg1AGIgEAAQghgLgkAHIAAAEQgIAvgdAaIgCAAQgCgKAAgKQAMgOAEgWIABgEIAAgFIAAgMQASgTAHgDIAHAAQBQAABBAgIACgCQAOBJgcA1QAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgUgtAXgxg");
	this.shape_232.setTransform(19.8,-0.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#B88E66").s().p("AgEAdQAFghgFgcQATAVgRArIgCABIAAgEg");
	this.shape_233.setTransform(13.1,-12.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#AA815A").s().p("AgBAQIAAgkQAGAQgFAYIgBABIAAgFg");
	this.shape_234.setTransform(14.8,-12.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FCD3AF").s().p("AAAAPIgFgLQgDgEACgOQAYAdgRAAIgBAAg");
	this.shape_235.setTransform(16.1,-11.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#AF8F6E").s().p("AgHAUIAAgEIAAgMQAGgNAHgOIACgBIAAAEIgPAtIAAgFg");
	this.shape_236.setTransform(8.9,-1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#62462E").s().p("AgSAAQAiAZgCgkIAAgEQAHABgCAGQgGAYgLAAQgIAAgMgQg");
	this.shape_237.setTransform(6.3,-6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#5F4A36").s().p("AAGAPQgIgOgFgQQAIABABAKIACABQgBAKAEAGIABAEQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape_238.setTransform(6.8,-9.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#A38363").s().p("AAGASQgBgLgIgBIAAgEQgBgHgDgEIAAgFIAAgDQALAMAEATIAAAFIgCgBg");
	this.shape_239.setTransform(6.4,-11.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#8F755C").s().p("AAFATQgFgEAAgLIAAgEQgFgHgCgNQAMAKADASIAAAFIAAADIAAAFIgDgCg");
	this.shape_240.setTransform(4.8,-14.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#5A422D").s().p("AAIAQQgKgPgHgQQAHABACAGIACABQACALAGAJIAAADIgCAAg");
	this.shape_241.setTransform(3.7,-15.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B68B62").s().p("AAHAHIgQgOQAOABAFAKIAAAEIgDgBg");
	this.shape_242.setTransform(11.5,-16.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B99067").s().p("AAIAGQgLgEgIgHQAOABAIAHIABADIgEAAg");
	this.shape_243.setTransform(9.3,-17.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#96765C").s().p("AAGAIQgKgFgFgKQALAEAHAIIABADIgEAAg");
	this.shape_244.setTransform(6.2,-40.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#F9D6B0").s().p("AgHABIAAgBQAVABgHAAIgOAAg");
	this.shape_245.setTransform(6.1,-49);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#715942").s().p("AAbBSQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgkhAgShSIAAgEIAAgMQAXBYAlBIIABADIgEAAg");
	this.shape_246.setTransform(42,-53.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FBD3AD").s().p("AAAAIQAAAAgCgFQgCgEAAgGQAOAPgIAAIgCAAg");
	this.shape_247.setTransform(38.1,-58.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#7B5D42").s().p("AgNAGIADgBIABgDIAAgDQALgCAJgFIADgBIAAAEIAAACIgbANIAAgEg");
	this.shape_248.setTransform(28,-66.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#7F664B").s().p("AgRAKIAAgEQAOgHANgKIABgCIADAAIAFAAIgBACQgPAPgUALIAAgFg");
	this.shape_249.setTransform(31.3,-68.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#745F4D").s().p("AAFAAQAFg1gXAAIAAgFIADgBIABgDIAAgEQAXgLgEA5QgCAmAGAiIAAANIAAAEQgNgcAEgpg");
	this.shape_250.setTransform(37.4,-67.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#65503C").s().p("AgQARIgDAAIAAgFQATgMARgPIADgBIgBADIgCABIAAAFIgBADQgMAMgPAJIgFAAg");
	this.shape_251.setTransform(34.4,-71.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FDD5AD").s().p("AgLACQAugLguANg");
	this.shape_252.setTransform(20.7,-61.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#765D47").s().p("AhyAlQB9gaBlgyIADgBIgBADIgDABIAAAEIgEABQhdA1iAATIAAgEg");
	this.shape_253.setTransform(15.5,-62.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FDD6AC").s().p("AgLAAQAvgEgvAGg");
	this.shape_254.setTransform(17,-60.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(17,17,17,0.557)").s().p("ABCAgQg/gkhIgcQBJARBBAtIABADIgEgBg");
	this.shape_255.setTransform(71.3,-108.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(17,17,18,0.475)").s().p("AAZAKQgbgJgagKQAkAAAUAQIABADIgEAAg");
	this.shape_256.setTransform(39.7,-117.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(9,9,9,0.498)").s().p("AA7AHIgIAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgNgFgTAAIgEAAQgrACgigGQBIgFA2AOQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABIgFAAg");
	this.shape_257.setTransform(53.9,-113.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(37,38,37,0.831)").s().p("AgPgDQARAAANAFQABAAAAAAQAAAAAAAAQAAAAAAABQABAAAAABIgFAAIgDAAQgQAAgIgHg");
	this.shape_258.setTransform(57.4,-113.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(30,30,32,0.722)").s().p("AAKAEQgPAAgIgHIAPAAIAEAAIAHAEIABADIgEAAg");
	this.shape_259.setTransform(31.3,-118.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(4,4,5,0.482)").s().p("AgUgCQAUABAVABIAAACIgFAAIgMABQgOAAgKgFg");
	this.shape_260.setTransform(34.8,-118.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(13,13,14,0.533)").s().p("AgNAGIAAgEQAOgBAKgFIAEgBIgBADIgEABIAAADIgDABQgGADgIAAIgGAAg");
	this.shape_261.setTransform(2.5,-116.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(25,25,26,0.686)").s().p("AgSACIAEgBIABgCIAAgEIAbAAIAFAAIgBACQgVACgPAHIAAgEg");
	this.shape_262.setTransform(5.4,-117.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(4,4,5,0.471)").s().p("AgVAEIAAgEQAXACARgFIADgBIAAADQgOAGgSAAIgLgBg");
	this.shape_263.setTransform(9.9,-118.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(4,4,5,0.525)").s().p("ABYACIgQAAIgEAAIifAAIAAgDQBbAABcABIAAACIgEAAg");
	this.shape_264.setTransform(22.7,-119.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(14,16,16,0.557)").s().p("AAIAIQgOgDgGgMQANAFAKAIIABACIgEAAg");
	this.shape_265.setTransform(80,-104.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#B99C7D").s().p("Ag2gGQAtALA8gDIAEgBIAAADQgVADgTAAQgpAAgcgNg");
	this.shape_266.setTransform(-8.2,-3.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#564230").s().p("AgYADQARgNAgAEIAAACIgEAAQgaACgTAJIAAgEg");
	this.shape_267.setTransform(1.9,-5.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#A9886B").s().p("AAbAeQgJgDgGgFQgZgWgkAbIAAgEIADgBIABgEQASgKAbgCIADAAQAbAlAMgtQABgGgHgBIgBgEQgEgGABgLIACABQAGAOAIAKIABAEQAFAPgSANQgBAEgEAAIgEgBg");
	this.shape_268.setTransform(4,-6.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#6F5640").s().p("AitC7IgCgDQgmgugChSIAEAAQAGBOAjAyIAAADIgDAAgABZixIgFAAIgEAAIgBgFIgDgEQBCAXBFgSIAFgBIAAAFIgBADQgFAGgLgBIgEAAIgbABQgtAAgigJg");
	this.shape_269.setTransform(-22.5,14);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(35,31,32,0.773)").s().p("AAGAKQgMgFgDgOQAJAIAJAIIABADIgEAAg");
	this.shape_270.setTransform(-19.7,-10.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#C1B1A9").s().p("AgHgHIALAAIAEAAIgBAEQgEALgDAAQgEAAgDgPg");
	this.shape_271.setTransform(-12.9,-18.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#766359").s().p("AgIAJIgEgDIAAgEIAAgLIAEAAQAGAcAJgZIAAgDIADAAQAKAQgYADIgEgBg");
	this.shape_272.setTransform(-12.8,-18.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#4E4540").s().p("AgJAMQgCgKAAgJQALgJAJAIIADABIAAAEIgEAAIgLAAIgEAAIAAALIAAAFIgCgBg");
	this.shape_273.setTransform(-13.3,-19.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#846C57").s().p("AgOAGIgIAAIAAgEQAWgCATgFIADAAIgBADIgCABIAAADIgFAAIgXAEIgFAAg");
	this.shape_274.setTransform(-16.8,-23.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(53,34,28,0.612)").s().p("AgBASQgCgQAAgPIAAgFIADAAIAEAAIgBAEIgDABIAAAbIAAAEIgBAAg");
	this.shape_275.setTransform(-9.2,-17.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#9C836D").s().p("AAZAYQgDgGgHgCIgBgDQgOgPgVgJIgBgCQgGgCADgIQATACAQAHIABADIgEAAIgIAAIAbAgIABADIgCAAg");
	this.shape_276.setTransform(1.2,-19.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#594431").s().p("AAUAMQgZgGgTgNIAAgEQAXALAZAKIAAACIgEAAg");
	this.shape_277.setTransform(-18.2,-6.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#A28669").s().p("AAdAQQgkgKgZgWIAEAAQATAPAZAEIAEABIAFAEIAEAAIADAEIABAFIgEgBg");
	this.shape_278.setTransform(-17.8,-5.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#7D6649").s().p("AARAbIgEgBQgUgSgNgZIAAgEIAAgFIAmAwIACABIAAAEIgDAAg");
	this.shape_279.setTransform(-22.7,-9.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#5A3E2C").s().p("AgDAJIAAgEIAAgIIAAgEIAAgIQAGADgBAMIACAAIAAAFQABALgDAAQgCAAgDgHg");
	this.shape_280.setTransform(-33,-16.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#DCB391").s().p("AgEAlQgCgQAAgRQAIgPACgZIACAAIAAAEQADAdgKALIAAAZIAAAEg");
	this.shape_281.setTransform(-32.4,-12.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#433434").s().p("AANAhQgcgmgXgsQA/AfAOA6IAAAEQgCAGgFAAQgHAAgMgRg");
	this.shape_282.setTransform(-36.5,-26);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#7F6654").s().p("AAEAJQgFgJgEgJIAEAAQAGgBgBAJIACAAIAAAHIAAAEIgCgBg");
	this.shape_283.setTransform(-34,-17.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#614B39").s().p("AAEAIIgCAAQgDgJgGgGIAEAAQAIADADAIIAAAEIgEAAg");
	this.shape_284.setTransform(-35.1,-19.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#ECC299").s().p("AhTAPIAAgEIAAgEQARg2BJAOQA5AMAUARIgIAAIgEAAQgUAEgVADIAAAEIgEABQghAHgYARIgEAAQgOAFgLAAQgWAAgCgWg");
	this.shape_285.setTransform(-22.1,-23.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(7,6,7,0.373)").s().p("ABIAzIhVAAIgBgCQglgMgcgSIgBgEQgJgJgLgHIAAgDQgUgOgIgYQAGAAAAgJIACAAQAZBHBNAVIAAACIBaAAIAEAAQAWgPAagLQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgJgfgTgWIAAgDIADABQAZAUAFAoQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAgBAAQgbAPgZAPIgEAAg");
	this.shape_286.setTransform(-10.6,-11.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(255,255,255,0.992)").s().p("AFdCQIgEgBQgngIgbgUIgBgDQgLgFAAgNQAxAHATgYIABgDQAWgTAHgjIAAgEQATAAAJAJIABAEIAAAcIAAAEIAAAFQADALgHABIgEAAIAAAlIAAAEIgCAAQAAAJgGgBIAAAIIAAAFIgEAAQgHAEgLAAIgHAAgAjJgUIhaAAIgBgCQhNgVgZhHIAAgEQARgIAGAYIACAAQALAaAaAKIAEABQA7AFAKgqIABgEIAAgEIAAgdIADgBIABgDQANADAQABIAEAAQAUARAYANQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIABADQATAWAJAhQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQgbALgWAPIgEAAg");
	this.shape_287.setTransform(16.7,-5.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(77,53,40,0.937)").s().p("AgFApIgEgBQgagKgLgaIgBgEQgDgQgNgIQAkgFAKAGQADADABAIIAAAIQAgAgADgoIABgEQAZgDgKgRIgDAAIAAgFIAVAIIAEABQAAAQACAQIACAAIgBAEQgJAmgwAAIgLgBg");
	this.shape_288.setTransform(-15.6,-15.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(36,32,30,0.549)").s().p("AAOAOQgFgXgQAIIAAADIgCAAQAAAJgGgBIAAgEIAAgHQAIgEAFgHIACgBQANAHADAQIAAAFIgCgBg");
	this.shape_289.setTransform(-21.9,-16.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#F5C89C").s().p("ABRB3IgEAAIgFAAIAAgDQgegIgjgCIgBgCQgJgGgOAAIAAgCIghgGIgEgBQgtgSg2gKIAAgCQg0gPgVgsIAAgEIAAgYQALgNgDgcIAAgEIAAgFQAUAFARAHIAEABIAaAgIADABQAMAaAVARIAEABQAYAWAlAKIAEABIAEAAIAFAAQApATBEgJIAAgCQAMABAEgGIABgDQAkgbAaAWQAGAFAJADQAIADABgGQASgNgFgQIgBgEQgIgKgGgNIgCgBIAAgEQgEgVgMgMIgBgEQgDgTgNgKIgBgDIgcgiIAJAAIAEAAQAdAIAZAMIADABQAJAIAMAEIAEAAIARAQIADABQAHAcgGAhIgBAEIgCABQgNAWgNAWIAAAEIAAAEIgDABQgIANgGAPIAAAMIAAAEIgCAAQACAVgQAAIAAAEIgEAAIgEAAIglABIglgBg");
	this.shape_290.setTransform(-9.9,-8.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#8F6D50").s().p("AAnBHQg0gOgZgrIAAgPQAEgxgMAUIAAgEIAAgNQAHAAgBgLIACAAQAJAPgBgUIAAgEIAAgEIAdAAIADAAQAaAQASAWIABADIAAAFIAAADIgDAAIgaghIgDAAQgRgHgUgFIAAAEIgCAAQgCAZgIAQQAAARACAPIACAAQAVAtAzAOIABADIgEgBg");
	this.shape_291.setTransform(-29.5,-9.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#A98C72").s().p("AgdgCIgBgCIACAAQAFgBAAgHIACAAQADAfAtgPIAEgBIAAAEIgEABQgQAFgLAAQgUAAgJgPg");
	this.shape_292.setTransform(-28.3,-21.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#715C4A").s().p("AgkAKQAYgPAhgIIAEAAIAIAAIAEAAIgBACQgmAKgiAPIAAgEg");
	this.shape_293.setTransform(-21.5,-21.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#795A3D").s().p("AFpHVIgEAAIAAgEQgHj5A4jPIhPgNQh+gXgxheIAAgEQACgxAGgZIgBgDQgugghRACIAAAEQgPBNhCAaIgEAAQjvgMiXhjIgBgEQgMgSABggQAGgBgCgLIAAgEQAMgUgEAxIAAAQQAZArA1AOIAEABQA2AJAtATIAEAAQAJAKATgBIAFAAQAOgBAJAGIABADQAcAJAiADIAEAAIAEAAIAEAAQAkAPAqgNIAAgCIAEAAQAUADgDgTIAAgEIAQguIAAgEIAAgEIAAgEQANgVAMgXIADgBIACgBQASgsgUgVIgBgEQgEgLgPgBIgBgDQgIgJgPgBIgEAAQgYgMgegIIAAgDQgRgHgUgCQgCAIAGACIAAACIgDgBQg7gjhNADIAAgEIADgBIABgDIAIAAQgUgRg5gMQhKgOgRA3IAAAEIAAAEIgCAAQAAAIgFABQARgogfgSIAAgEQAYAJAhgOQAPgHASADQChAfCTAwQAwARAZAoIABAlIgBAEIAAAEIgEAFQAaAPAvAIQAmAFAhARQAPgjAXgaIADgBQASgHAbADIAFAAQALAHAVgDIAFAAQBIAKBDAOIAEABQAHgwgKgzIgBgEIAAgEIAAgIIACAAQATBSgNA5IgEAAQg3gPhAAHIgBADQggAPgcATIAAgEIAAgEQAlgeA5gNIAAgCQgigDgcgJIgEgBIAAgCQgdgCgcAAIAAAEIgEABQgfASgKAnIAAAEQAIA1gRAuQAEBCA9ANQAUAFAWAHQA8AWA7gEQAFAAAEgHQAHgVgMgKIgEgBQgpgDgZgRIgDgBIAAgEQAnAOArAKIAEABQAEAogUARIgBADQgjCTgKDCIAAAEIgEAAQAAAXACAWIACAAQADArgDAbIAAAEIgEAAgABijtIAEABIANAHIAEABIAEAAQAcAIAVARIgBADQgXAyAUAtQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAcg1gOhJIgCACQhBghhRABIgHAAQgHADgSATIAAAMIAAAEIgDABQgQAfgJAmQAHAHAIgMIABgDQAcgbAIgvIAAgEQAPgDAOAAQAVAAAUAGgAmrmAIABgEIAEgHQAOAaArgPIAEAAIgBACQgRAGgPAAQgSAAgPgIg");
	this.shape_294.setTransform(11,18.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#674B37").s().p("AAQAbIgCgBQgPgYgTgTIAAgEIAAgFQAXAXAQAaIACAEIgFAAg");
	this.shape_295.setTransform(-37.5,-23);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FBD7AB").s().p("AgDgDQATgKgUAUg");
	this.shape_296.setTransform(-36.7,-34.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#65503B").s().p("AAeAmQgpgagVguIAEgDIAFgBQgBAKACAKIACABIA0AxIABADIAAAEIgDgBg");
	this.shape_297.setTransform(-35.9,-31.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FDD5AA").s().p("AgMAEQA0gXg0Aag");
	this.shape_298.setTransform(-21.8,-39.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#100905").s().p("ACPAnQgagkgqgWQhLgqhlAgQgTASgaALIAAADIgBACQggARgZAWIgEAAQgHAAADgJQBHh5C2ASQAZACAVANQATALAWAJQA5AsAcA2IABADQgJADgJAAQgfAAgWggg");
	this.shape_299.setTransform(-6,-42.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FBD5B2").s().p("AgKADQATgRACALIgEADQgIAIgEAAQgEAAgBgFg");
	this.shape_300.setTransform(-27.4,-44.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#725C45").s().p("AgmA5QgCgKAAgKIAAgEIAAgEQAkguAqgnIADgBIAAAFIgBADQgsAnggAzIAAAMIAAAFIgCgBg");
	this.shape_301.setTransform(-34.3,-38.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#84684F").s().p("AgLAGIAAgEQAIgDAGgGIABgCIAEAAIAEAAIgBADQgIAKgOAGIAAgEg");
	this.shape_302.setTransform(-28.9,-45.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#69513C").s().p("AgHAIIgEAAIAAgEQALgEAJgGIADgBIAAAEIgBADQgHAEgHAEIgEAAg");
	this.shape_303.setTransform(-27.3,-47);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FAD2AD").s().p("AgDgEIgBgDIAJAPIgIgMg");
	this.shape_304.setTransform(-24.7,-46.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#80654A").s().p("AgsADIAEAAQgDATATgFIAAgCQAYgVAggQIABgDIAIAAIAEAAQgZASgWATQgQAOgKAAQgNAAgDgXg");
	this.shape_305.setTransform(-24,-39.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FDD7AA").s().p("AgJAAQAogEgoAGg");
	this.shape_306.setTransform(-13.9,-44.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#997A5E").s().p("AgPAAQANgCAOgBIAEAAIAAACQgQADgPACIAAgEg");
	this.shape_307.setTransform(-12.1,-45.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#856C54").s().p("AAWACIgwAAIAAgDQAaAAAaABIABACIgFAAg");
	this.shape_308.setTransform(-6.9,-46.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FCD8B1").s().p("AgFAAIgBgDIANAHIgMgEg");
	this.shape_309.setTransform(0.5,-43);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#4F3D2B").s().p("AAAAnQgBgnAAgmIADAAIAABJIAAAEg");
	this.shape_310.setTransform(-46.4,-4.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#876F57").s().p("AgBAzIAAgEIAAgIIAAgEIAAhJIAAgEIAAgIIADAAIAABhIAAAEIgDAAg");
	this.shape_311.setTransform(-46,-4.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#C5A584").s().p("AAECcIAAgEQgFhggKhcIAAgEIAAhjIAAgEIAAgMIAEAAIAAAVIAAADQADCSAQCFIAAAEIgEAAIAAAEIgEAAg");
	this.shape_312.setTransform(-44.5,3.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#554230").s().p("AgDAVIAAgFIAAgQQAGgEgBgQIACAAIAAANIAAAEIAAADIAAAEIgEAAIAAAMIAAAFIgDAAg");
	this.shape_313.setTransform(-45.8,-12.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#674E37").s().p("AgBAMIAAgMIAAgDIAAgMIADAAIAAAMIAAADIAAAEQACALgFABIAAgEg");
	this.shape_314.setTransform(-45.1,-14.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#82664C").s().p("AgDAKIAAgLIAAgEQAFAAAAgIIACAAIAAAEQgCANgFAKIAAgEg");
	this.shape_315.setTransform(-44.5,-15.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#674E39").s().p("AgHAQIAAgEIAAgIQAIgEABgPIACAAIAEAAIAAAEQgDALgFAIIgBAAQAAAIgGAAIAAAAg");
	this.shape_316.setTransform(-44.1,-17.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#5F4937").s().p("AgEAXIAAgFIAAgEQAGgNgBgXIACAAIAAANIAAAEIABAEQACAQgGAIIgEAAg");
	this.shape_317.setTransform(-43.2,-21.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("rgba(6,6,6,0.388)").s().p("AAAA7QgBg7AAg6IADAAIAAADIAAAFIAABVIAAAEIAAARIAAADg");
	this.shape_318.setTransform(-76.8,0);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("rgba(19,18,19,0.529)").s().p("AgFAMIAAgDIAAgFQAGgGADgNIACgBIAAAFQgBATgKAJIAAgFg");
	this.shape_319.setTransform(-76,-6.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#292A2C").s().p("AlMJAIgBgEQAWgLAGghQAJg9AZgzQAMBWgaBAQgMAdgIgOIgDgFQgHAMgGAAQgGAAgFgMgAMmHWQgDgUgTgFQALguggAAIgEAAQgQgbAEgzIAAgEQAVgigKApQgCAIAHACQAaA/AhA5QAJARAAAbQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgDACgDAAQgMAAgFgigAs+pFQAXgSgSAmQgBABAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgDAAABgYg");
	this.shape_320.setTransform(15.5,38.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#27292A").s().p("AgQASQAdgFgdAHgAAIgKIAAgJQASAFgSAIg");
	this.shape_321.setTransform(-64.6,-23.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("rgba(22,22,22,0.58)").s().p("AgNAUIAAgIIAZgjIADgBIgBAEQgMAYgPAVIAAgFg");
	this.shape_322.setTransform(-68.1,-27.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("rgba(10,10,10,0.482)").s().p("AgHAIIAAgEQAKgDADgMIACAAIAAAEQgDAOgMAFIAAgEg");
	this.shape_323.setTransform(-65.9,-31.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(12,13,12,0.545)").s().p("AgHAIIAAgEQAIgEAFgLIACAAIAAAEQgEANgLAGIAAgEg");
	this.shape_324.setTransform(-63.4,-35.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FCCA99").s().p("AgLIAIgEAAIgBAAQgbhFhHgFIgEAAQgLAPgNgIIgBgDQiDiBhiiiQgMgTgHgTQgahEgegqQgEgjgIgeIAAgEIgBgEQgQiFgEiTQAchRAJhPIAAgDIAAgBIABAAQAlAqAjAtIABADQgJAkgDAqIAAAEQAUAzAxAVQAAAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQApAJANATIADABQA2AAA0AWIABADQBQAPBXgBQAbAAAXgKQAJgLAMgJIADgBQAXgfgCgiIAAgEQBEgIAwAfIADABQgGAlACAtIAAAFIAQAhIAAADQAvAkA2AcIAAACIACAAQA+AGBFAVQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQg8DHAODrIAAAFQgjATgnARIgEABQgtgVgtgUIgEgBQhCAtgnBKQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQg0AThBAAQgZAAgZgDgAg8CPIgiAcIAAAEIAAAFQAAABgBAAQAAABAAAAQAAABAAAAQAAABABABQgCADACAGQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAIABACQAFAGAHABQADABACACQATAYAZASIADACQAfAcAoAJIAgAGQASACARgDIAVgGIALgDIADgBQAGgBAEgCIArgRQAEgBABgDIABgEIAAgBIACAAQAHgYgSgbIgJgBQgpgfgogiIgEAAQgvgEgsgIIgBADQgnAdgdgQIgDABgAAtglQgHAEgFAIQAFAVAQAKIADABIAmAXIADABQAyAFAggPQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQAPgFAIgMIABgDIAAgEQALgBgCgPIgBgEQAIgOgDgXIAAgEIAAgEQAWhTg3AZIAAAVIAAAEIAAAEIAAAEIgCAAQAAANgGADIAAAhIAAAEIAAAFQABAcgaAAIgEAAIglAAIgEgBQgcgOgegNIgEAAg");
	this.shape_325.setTransform(2.7,25.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#CEAB88").s().p("ABWIGIhSAAIgEAAQgKgDgJgFIAEAAQBeALBJgbQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAnhKBCgtIAEABQAtAUAtAVIAEgBQAngRAjgTIAAgFQgOjrA8jHQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQhFgVg+gGIgCAAIAAgCQg2gcgvgkIAAgDIgQghIAAgFQgCgtAGglIgDgBQgwgfhEAIIAAAEQACAigXAfIgDABQgMAJgJALQgXAKgbAAQhXABhQgPIgBgDQg0gWg2AAIgDgBQgNgTgpgJQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQgxgVgUgzIAAgEQADgqAJgkIgBgDQgjgtglgqQADgCADABQAHABAHAIQATAUAPAYIADABQAGAGAEAKIACABQAEAKAGAJIACABIAAAJIAAAEIgCAAQABALgHABIAAAMIAAAEIABAEQACALgHACQgBAfAMATIABADQCYBkDuALIAEAAQBCgaAPhNIABgEQBQgCAuAhIABACQgFAagDAwIAAAEQAxBfB/AWIBPAPQg5DNAHD6IAAAEIgDABIhXAkIgDgBQgLgOgXgCIgBgDQgKgUgagFIgEABIgEADIgBAAIAAAAIgCABIAAAAQg3AfgcA6IAAAEIgDABIgJAJQglAJgjASIgDAAIgEAAgAg9HVIgBgDQgIgMgPgGIgEAAQgSgIgTAIIAAAFIgEgBQgbgEgXgcIgBgDIgggeIgBgEQgbgkghgeIgBgEQgMgSgQgPIgBgEQgOgUgSgRIgBgEQgEgKgHgHIgBgDQgagdgSgmIgBgEQgKgsgWgiIgBgDQgjgygFhNIAAgEIAEAAIAAAEQAIAeAEAjQAeAqAaBEQAHATAMATQBiCiCDCBIABADQANAIALgPIAEAAQBHAFAbBFQgbgOgOgbgAnklkIAAgUIAAgEIAAgFQAHgBgCgLIgBgEQAHgKABgPIABgEQAFgJACgLIABgEQAHgIgDgRIAAgEQAEgaAIgGIAAADQgJBPgcBRIAAgEg");
	this.shape_326.setTransform(3.1,26);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#6A5745").s().p("AgQAXIAAgNIAAgEIAAgHQALgtAVAlIAAAEIAAAEIAAADQgGgHgHgBQgDgBgCACIgBAAIAAABQgIAFgFAaIAAgEg");
	this.shape_327.setTransform(-41.2,-25.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(38,40,38,0.871)").s().p("AgHAGIAAgEQAIgCAFgIIACgBIAAAEQgFAKgKAFIAAgEg");
	this.shape_328.setTransform(-58.9,-40.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(17,18,17,0.459)").s().p("AgcAfIAAgFQAXghAegaIAEgBIgBADIgQANIAAAFIgCABQgFAHgIAEIAAADIAAAEIgCAAQgIATgPAKIAAgEg");
	this.shape_329.setTransform(-59.3,-40.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(12,12,12,0.557)").s().p("AgJAJQALgHAGgNIACgBIAAAFQgEAQgPADIAAgDg");
	this.shape_330.setTransform(-54.2,-47);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(1,2,2,0.604)").s().p("AgCAMIAAgcIADAAIABAFQACASgGAKIAAgFg");
	this.shape_331.setTransform(-52.1,-53.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(20,21,20,0.604)").s().p("AgJATIAAgFQAJgPAIgUIACgBIAAAFQgBAbgSAMIAAgDg");
	this.shape_332.setTransform(-49.3,-64.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#614C37").s().p("AC4BVIAAgCQgdgVgXgaIgBgDIgBgDQgHgJgNgEIgDgBQglggg2gPIgBgDQgZgCgbAAIAAAFIgEAAIgEAAIgEAAQgQABgNADIAAAEIgEABIg1AbIgFAAIgIAAIABgDQAagLASgSQBlggBMAqQApAWAaAkQAeApAqgMIgBgDQgcg2g6gsQgVgJgUgLQgVgNgYgCQi3gShHB5QgCAJAHAAIAEAAIgBACQgTAFADgUIAAgEQA7hOBqgfIAEgBQAaAAAbgCIAAgCQBMAGAvAiIADABQA5AtAmBAQAFAIgFAFQgJAIgQAAIgMgBg");
	this.shape_333.setTransform(-5.8,-43);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#8A725C").s().p("AgagBIAwAAIAFAAIgBABQgaACgaAAIAAgDg");
	this.shape_334.setTransform(-8.6,-51.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FAD8B2").s().p("AgNAAQA2gDg2AFg");
	this.shape_335.setTransform(-12.3,-52.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#745A43").s().p("AhYAbIgIAAIAAgEQBcgaBggWIAFgBIAAAEIgBADQheAThVAbIgFAAg");
	this.shape_336.setTransform(-5.7,-55.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#775A45").s().p("AgPAIIAAgEIAcgPIADAAIAAAEIgBACQgOAKgQAHIAAgEg");
	this.shape_337.setTransform(-24.4,-48.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#F8C898").s().p("AB9E5QgvgIgagPIADgFIABgEIACAAQAFgZgHgQQgZgogwgRQiTgwiigfQgRgDgQAHQghAOgXgJIgBgDIg1gyIAAgFIAAgMQAggzAtgnIABgDQAPgGAJgMIABgDQAIgEAHgFIABgDQARgIAPgKIABgDQAMgEAMgGIABgCIA9gWIAAgDQBXgbBegUIAAgCQCAgTBeg2IADgBIAcgOIABgCQAVgKAPgQIABgDQARgIALgOIABgDQAYABgFA1QgEAqANAbQASBTAlBAQABAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQgBAMAGAEIADABQAdBCAiA/IADABIABAEQAcAwhGgLIgEAAIgpAAIAAAEIgFAAQgmADgbAOIAAAEIgCAAQAAAIgGAAQAXA5BPgbIAEgBQARAAAQgCIAAgCQApgIAOATIADABIAAAEQALAzgHAwIgEgBQhDgOhJgKIAAgCQgSgCgTAAIgEAAQgbgDgSAHIgDABQgYAagOAjQgigRglgFgAHCEVQAOAbgEgjQgCgPgCAAQgCAAgEAXgABBETIAGALQATABgageQgCANADAFgAGWBDQASAdgTggIABADgAnNArIgBALQAPgOgFAAQgCAAgHADgAiIhHIAEAAQA2AQAlAgIAEABQAFALALAFIAEABIABADQAWAZAdAUIABACQAYAEAMgKQAGgFgGgJQglg+g4guIgDgBQgwgjhMgFIgFAAIgxAAIAAAEIgEAAQhpAgg7BPIAAAEIgEAAQAGAoAkggQAXgTAZgSIA2gcIAEgBQAQgCAQgEIAAgCIAFAAIAEAAIAYAAIAZAAgAFtAJQAFAFAFgBQAMgEgXgOQgDAKAEAEgAlBACIAAACIAbgNIgbALgAhagoQAaAMgbgOIABACgAjvgyIAAACQAZgEgEAAIgVACgAl2g3QACAMAPgPIAEgEQAAgEgDAAQgGAAgMALgAlVhMQATAbgUgeIABADgAglhiQAiACgigEgAjiiFIAAACQAigDgIAAIgaABgAEgi/QACAFABAAQALACgQgSQAAAGACAFgABEjTIAAACQAcgEgEAAIgYACgABpjfIAAACIAYgHIgYAFg");
	this.shape_338.setTransform(9,-39);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(15,11,9,0.996)").s().p("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");
	this.shape_339.setTransform(2.5,15.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#765D48").s().p("AgLAEIAAgEQALgCAJgEIADgBIAAAEIgBACQgLAFgLAEIAAgEg");
	this.shape_340.setTransform(-21.5,-50.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#82684C").s().p("AgeAIIAAgEIAwgNIABgCIAIAAIAEAAIgBACIg8AVIAAgEg");
	this.shape_341.setTransform(-17.2,-52);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(18,18,19,0.514)").s().p("AgLAOIAAgEQAMgKAJgRIACAAIAAADQgHAUgQANIAAgFg");
	this.shape_342.setTransform(-41.7,-78.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(10,11,11,0.502)").s().p("AgJAIQAMgFAFgOIACAAIAAAEQgDAQgQADIAAgEg");
	this.shape_343.setTransform(-33.2,-90.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(10,10,11,0.502)").s().p("AgJAKIAAgEQAMgFAFgOIACgBIAAAFQgFAQgOAIIAAgFg");
	this.shape_344.setTransform(-36.9,-85.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(36,39,40,0.996)").s().p("AIjSMIgIgVIASgfQANgZAPgOIACAAQACAqARAYIAHgRQAYhMgXhXQgkiKgth3QgahFgBhaQAAiuApiRQAfhvANhsQAZjahMiXQgRgigUgPIAAgEQgJgPABgSIgCgBQgohUgkhXIgDg2QgDhdAKhCQAHgsgUgTQgHAEgBAGQgKBNgpAmQgwAtg+AcQiBA7iYAgQiZAfhuBLIgBADQgkAjgUAgIgEABQhTBVglCDIAAAEQgWCdACCfQgSgQgEgXQgLg5glAOQA4ChBSCGQAYAnATArQABABALgJQAEAPgPAKIACAAQADAmARAYIABAEQAUB4gOCXQgRDGhwBqQgLgYAKgtQAIgogLgbQgmAVgDBBQgCBGAmAVIgDAAIgRAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgDIgBgCQgWgKgagFIgBgCQgWgQgjgCIgBgDQgOgLgWgDIgEAAQgxgZg6gQIgBgCQgUgNgYgJIgDgBIgugYIgEgBIgdgLIgBgDQgHgHgMgDQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgHgDgBgHIAEAAIgLgdQgLgagXAWIgCgBQgSgYgRgYIAAgCQgiAPgcgdQATgBASgIIgDgCQgJgGgRAAQAMhBAhgrQADgDgCAIQAGgPAGgiIAAgEQAkgoAhgrIABgDIAVgIIADgBQAcgsAvgYIAEgBQALggAbgRIADgBQAQgrAegeIADgBQAIgpAZgWIAAACQATARgFAlQgQBsAfBYQASAMABAdIgDAAQAvA0ARBQQAGAeAQATQASgLAZgFQghgCAAgnQAAgSgIgSQgMgcgGgjQgNABgBgNIgDAAQgfg+gShLQgQhEAOg7IABgIQgBgIgGgQQASAHgBAaIAAAEQAOACAEAOIACAAQAGAJACAMIAAAEQA1A2AdBOIAAAEQAfAgAKAzQAKA6gFAvQAAAJgJgIQgUAEATARIABADQgKAhARASIABADQASAFAUgNIAEgBQAghPgPhuIgBgEQgZg1gTg6IgBgEQgbgagOgoIAAgEQgbgMgGghIAAgEQg9hMgwhbIgCgBIgEgdIAAgEQgrhWAJh3QAGhHAcgwQgQA9gIBXQgJBeArArIADgCQAYgLgNgoQgRg1AMhHQACgOAHgWQABgHgGgNQgBgCACgJQAUgbAJgmIAAgEQAigagBgoIAAgEQgogSAjghIABgDQARgEAEgYIAAgFQAWgXAYgVIADgBQAHgXANgSIABgEQAWgTAYgRIADgBQA/hOBBhNQABAAAAAAQAAgBAAAAQABAAAAAAQABAAABAAQAFAIAKgZQAJgXANADQATgZAFgpIAAgEQgQgXgdAGIgFABQglBEhCA6IgDABQgKAjgcASIgDABQARgrAPgsQASgyAggQQgEgbAggfQAJgJAAgTQA7hFA7hHIABgEQAxgiAvgnIACgBQADgLAJgGIABgDQAWgCAQgJIADgBQAJgEADgJIAAgEQA7gTA2gYQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQBQgVBpgCQBtgBBEAxQBYATBkALQAtAGAlATIBHAjQANAcAYABIAEAAQALAaAJgBIAFgBQASAtAcAQIADABQAjAvAWA8IAAAEQApA7ASBRQAGAeANALQAEAsAJA3QARBygTB3QgFAoACAnQANAgAPAeIABADQAXBBgDBOIAFgDQAKBegTBbQgUBkgtA3QAIAgghAtQgaAjgVAmQgCACgEAAQAAAugkANQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABQASAQgUAgQghA0gCBQQgCBFAfA3QgHAyAnAVIABADQAigDgCgnIAAgEQATAxAlAbQAEACAHAAQAQgSgQgfIACgCQABgCAAgEQgiAHARggIABgEQASAJASAeQARAcgDAgQgoANAzgJIAFAAIASAYIADABIgBACQggARgmAJIAAAEIgDABIgyAQIAAAEIgEAAIhGAUIAAAFIgEAAIgdAIIAAAEIgDABQgOAGgYgDIAAAEIgEABQgZAKgdAGIAAAEIgDABQgGAEgLgBIAAgCIgcACIAAAEIgEABQgOAJgYgCIgEAAIgtAIIAAAEIgEABIg6AIIAAAEIgBAAg");
	this.shape_345.setTransform(0.1,1.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(16,16,16,0.498)").s().p("AgJAEQAKgDAHgHIACgBIAAAEIgBADQgFAIgNAAIAAgEg");
	this.shape_346.setTransform(-17.2,-106.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(27,27,27,0.643)").s().p("AgMAEIAAgEIAMgHIAEAAIAEAAIAFAAIgBACQgLAIgNAFIAAgEg");
	this.shape_347.setTransform(-14.9,-107.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(11,11,11,0.459)").s().p("AgJAIIgFAAIAAgEQARgCAIgIIAEgBIgCADQgGAIgMAEIgEAAg");
	this.shape_348.setTransform(-13.1,-109.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(12,12,13,0.498)").s().p("AgLACQAIgFALgCIAFAAIgBACQgKAHgNACIAAgEg");
	this.shape_349.setTransform(-9.2,-111.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(14,14,14,0.549)").s().p("AgVAEQASgIAVgDIAFAAIgBACQgVAIgWAFIAAgEg");
	this.shape_350.setTransform(-1.2,-115.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("rgba(13,14,15,0.984)").s().p("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ARAAIADAAQAOAHAXgDIAFAAQAZAMAcAIIAEABQAZAHAVAMIAEABQAhAHAsgDIAFAAQAJAKATgBIAFgBIAHAAIAFAAQARAGAUACIAEABQBIAcBAAlIADAAIADABIABAEQAGANAPADIAEAAQAoAtArAoIAEABQAKANAJANIABADQAMAdASAXIADABQAEATAJANIAEABQAOAPAEAaIACAAQABANAIAHIADABQAFAKACAOIABABIAUAtIABAEIgBAEIgDAEQAPAcAHAlIADABQAMAUAEAdIAAAEQAAATACASIACAAQADAYAFAWIABADIAACxIAAAEIgCAAQAAALgHACIAAAIIAAAEIAAAEIAAAEIgEAAQgDAqAHAgIAAAEQAEAPAGANIACABIABADIAEABQgDAZAMALQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIgBADIgDABIAGAcIACAAQANAkADAuIAAAEIgEAAQAABGACBGIACAAIAAAYIAAAFIgBADIgHARIAAAEIAAAEIgCAAQABASgHAHIAAAEIgCAAQABALgHABQgBAMAEAGIABADIgDABIgJAHIAAANIAAAEIgCAAQgEAdgPAQIAAAMIAAAEIgDABQgEANgJAHIAAAIIAAAEIgFAAIAAAEIAAAEIgCABQgEANgKAHIAAAIIAAAEIgEABIgEADIAAAEIAAAFIgDAAQgFALgIAFQgEAJAHABIAAACIgCABQgXAjgUAmIAAAEIAAAEIAAAFQAAAGgIgCIAAAEIAAAEIgEAAQAAAlACAlIACAAQgBAPAIAHIABACQAAAVACAUIADABQAAAHADAGIAAADQAEAbALAWIACAAQAGAZAMAUIACAAQAGAVAMAPIADABQAAAFACADIACABQAHAWAOAOIAEABQAJABgBALIAAAEQAHAWAPAOIACABIABADQAvA3g7AQIgDgBgAOmOYQAUAFADAUQAGArARgKQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgbgJgRQghg6gag/QgHgBACgIQAKgpgWAiIAAAEQgDAzAQAbIAEAAIABAAQAfAAgMAtgArQF6IAAAEQAJAVAPgFQAYADgRgVQgLgMgJgPIgLAZgAqnhqQgCAhAGgMQANgagHAAQgDAAgHAFgAqbiDIAAACQASgDgDAAIgPABgAqCifIAAAEQATgJgTgEIAAAJgANVs6QAUAOgVgRIABADg");
	this.shape_351.setTransform(0.5,-8.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(18,18,19,0.545)").s().p("AgVATQAVgTATgVIAEgBIgBAEQgRAagaAOIAAgDg");
	this.shape_352.setTransform(-24.6,-100.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("rgba(22,22,22,0.612)").s().p("AgPAIQAOgJAOgKIADAAIgBADQgKAPgUAFIAAgEg");
	this.shape_353.setTransform(-20.7,-103.7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#0E0A08").s().p("AgMAPIgBgBIgDgFQAAgDABgGIABgBIgBgCQgDgIAIgDIACAAQAQgFAGAIQACADABAEQAAAFgEADIgBAHQgBAEgEABIgCAAIgIABQgGAAgDgCg");
	this.shape_354.setTransform(53.3,11.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("rgba(84,65,51,0.624)").s().p("AgWACIAAgDIAoAAIAFAAIAAADIgFAAIgTAAIgVAAg");
	this.shape_355.setTransform(-2.4,118.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(138,109,88,0.918)").s().p("AAUADIgoAAIgDgBIgBgCIAEAAIAFAAQAUgFATAGQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIgFAAg");
	this.shape_356.setTransform(-2.6,117.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(7,5,4,0.494)").s().p("Ag0gBIBlAAIAEAAIAAABQgYACgXAAQgeAAgcgDg");
	this.shape_357.setTransform(-11.2,119.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#4C3C31").s().p("AgRADQAGgCAAgJIACAAQABASAagFIAAACIgEAAIgPACQgMAAgEgGg");
	this.shape_358.setTransform(-8.2,116.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#947B66").s().p("AAUAMIgEAAIgBgDQgDgFgIAAIAAgCQgaAFgCgSIAIAAIAFAAIgBACQgEACgEAAQAbAEARAMIABADIgFAAg");
	this.shape_359.setTransform(-6.7,116.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FBD7B3").s().p("AgFgBIgBgCIANAHIgMgFg");
	this.shape_360.setTransform(-4,116.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#5C3F2B").s().p("AAEAjIgEAAIgHAAIAAgEQAVgMgOggQgCgJgBgMIADAAQAJAcgBAlIAAAEIgEAAg");
	this.shape_361.setTransform(-8.4,111.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#B79373").s().p("AAFBYQABgmgJgbIAAgFQgHgmgBgvIAAgEIAAgVIAEAAQADBdAPBPQADALgJACIAAgFg");
	this.shape_362.setTransform(-8,106);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#ECC299").s().p("AGLDDIAAgCQAGAEANgCIgCABIgCADIgEAFQgFAFgCAAQgFAAABgOgAGPCjIgCABIgHgCQgUgFgRgJQgGAAgFgCQgjgQgXgeQgLgQgBgOIgDgGQgFgIgIgFQgJgFgFgGIgEgFQgCgEAAgGQgBgGAHAAIAKAFIAAAAIAAAAIAAgFQANgKAPgIQgBgCADgDQAMgPAQgHIAQgBQAngCAeAQIAOAGIABAAIALAEQAeAMAAAiQAAAWgJATQAEANgLAPIgFAaIAAADIgCAKIAAAAIABAAQAAAAABABQAAAAAAAAQAAABgBAAQAAABgBAAIgDAEIgDAEIAAACIAAADQgGgJgRAFgAiOBmIgDAAIgFAAIgBgDQgdgIgjgCIgBgCQgKgGgOAAIgBgCIgggGIgEgBQgtgSg2gKIAAgCQg1gPgUgsIAAgEIAAgYQALgNgDgcIAAgEIAAgFQATAFASAHIADABIAaAgIADABQANAaAVASIAEABQAYAVAlAKIAEABIAEAAIAFAAQApATBFgJIAAgCQALABAFgGIABgDQAkgbAaAWQAGAFAIADQAJADABgGQASgNgFgPIgBgEQgIgKgGgOIgCgBIAAAAIgCAAIgHgBQgXAAgXAGIgPAFIgCABIgGAHIgBABIgLAGQgLAEgLgBIgOABQhqAMg7hRIgQgVIgBgDIgNgPQgJgMgOgIIgEgDIgCgBIgDgCQgXAAgCgWIAAgEIAAgEQARg4BKAPQAwAJAWAOQAQABAKAIQA2AHAyAUIAZAKIAIAAIAFAAQAdAIAZAMIADABQAIAIAMAEIAFAAIARAQIACABQAGAcgGAhIAAAEIgBABQgNAWgNAWIAAAEIAAAEIgDABQgIANgGAPIAAAMIAAAEIgCAAQACAVgRAAIAAAEIgDAAIgFAAIglABIglgBgAl4iLIAAgBIgBAAIABABg");
	this.shape_363.setTransform(12.5,-6.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(36,32,30,0.549)").s().p("AAAAAIABABIgBAAIAAgBg");
	this.shape_364.setTransform(-23.5,-15.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#A98C72").s().p("AgdgCIgBgCIACAAQAFgBAAgHIACAAQACAVAWAAIADACIACABIgIABQgUAAgJgPgAAeADIABAAIAAABIgBgBg");
	this.shape_365.setTransform(-28.3,-21.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("rgba(11,5,2,0.251)").s().p("AAUAGIgwAAIAAgEQAKgDAOgCIAAgCQAJAEAPAAIAEAAQAKABgJAEIgBACIgEAAg");
	this.shape_366.setTransform(14.7,119.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("rgba(41,29,20,0.361)").s().p("AgLACQAFgEAKgBIAAgCIAEAAIAEAAIAAAEIAAABQgNACgKAEIAAgEg");
	this.shape_367.setTransform(13,118.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FED3A6").s().p("AgPAHQAXgVAIAKIgEAEQgLAIgJAAIgHgBg");
	this.shape_368.setTransform(16.7,113.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("rgba(127,95,70,0.961)").s().p("AAAAGIgDAAIgEAAIgJAAIAAgEQAOgBAHgFIADgBIAEAAIAFAAIgBADQgEAEgIAAIAAAEIgEAAg");
	this.shape_369.setTransform(13.8,117.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("rgba(60,49,37,0.267)").s().p("AAzACIhqAAIAAgDIBqAAIAFAAIAAADIgFAAg");
	this.shape_370.setTransform(6.2,119.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("rgba(122,99,77,0.557)").s().p("AAvAGIhqAAIgBgDQgDgDgEgBIAAgEQA9ASA5gSIAEAAIAJAAIAEAAIgBACQgLABgFAEIAAAEIgEAAg");
	this.shape_371.setTransform(6.6,118.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("rgba(15,12,9,0.255)").s().p("AAjAHIh7AAIAAgDQgIgDgDgGQALgCACAGIADABIAIAAIAEAAQAxAGA5gFIAAgBQAIABACgFIACgBIApAAIAEAAQAFACACADIABADIgDAAQgkgCgWACIAAAEIgEAAg");
	this.shape_372.setTransform(-9.4,119.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FED0A0").s().p("AgNAAQA2gCg2ADg");
	this.shape_373.setTransform(34.1,117.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FECFA1").s().p("AgPACQAYgTAHAXIgHABIgHAAQgLAAgGgFg");
	this.shape_374.setTransform(38,117.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#775942").s().p("AgcATIgEAAIAAgFQAcgOAagQIADgBIAEAAIAEAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgaATgdAPIgFAAg");
	this.shape_375.setTransform(17.9,115.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#846953").s().p("AgDAIIgEAAIgEAAIAAgEQALgEAJgGIADgBIgBADIgDABIAAADIgCAAQAAAIgGAAIgDAAg");
	this.shape_376.setTransform(21.6,112.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("rgba(213,149,100,0.988)").s().p("AgyApIg2AAIAAgFIAAgIQAxgTAfgkIADgBIADAEQAGAHAKgEIAXgJQA5gWAbAcQgRAQgYgBQgfAAgYAKQgpATg3AIQAKAOAfgDIAAACIgEAAg");
	this.shape_377.setTransform(30.4,114.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(134,94,66,0.984)").s().p("AgmAnIgNAAIAAgEIgDgFQARgLAUgIIADgBIA6gvIADgBIAFAAIADAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQgCACgFAAIAAAEIgDABQgeAkgwAUIAAAIIAAAEIgEAAg");
	this.shape_378.setTransform(23.5,115.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#71533C").s().p("AgeAXIADgBIABgDIAAgEQAbgRAXgXIADgBIAEAAIgBAEQgYAegkATIAAgEg");
	this.shape_379.setTransform(25.5,109.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FDD3A9").s().p("AgIACQAigLgiANg");
	this.shape_380.setTransform(25.8,107.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#8C6544").s().p("AgUgHIAFAAQgGASASgFIAAgCIAPgQIABgDIADAAIAFAAIgMAQQgJAPgHAAQgJAAgEgXg");
	this.shape_381.setTransform(27.4,104.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#633E23").s().p("AgFgFIAAgEIAFAAIADAAIgBAEIgCAFQgDAHAGAAIAEAAIgBACIgGABQgJAAAEgPg");
	this.shape_382.setTransform(26.3,103.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#6E492F").s().p("AgDAKIgEAAIAAgEQAIgFAFgKIACAAIAAAEIAAAEIgBACIgHAFIAAAEIgDAAg");
	this.shape_383.setTransform(29.4,101.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#6F4D37").s().p("AgJAKIAAgEIAAgEIAKgIIABgDIAEAAIAEAAIgBADQgFAKgJAGIgEAAg");
	this.shape_384.setTransform(27.2,101.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FBCFA7").s().p("AgaAWQAbgWAagXIAAABQgOAlgnAJg");
	this.shape_385.setTransform(33.3,108.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#735945").s().p("AgYAfIgEAAIAAgFQAfgXAXggIADgBIAAAEIAAAFIgBADQgWAagaAXIgEAAg");
	this.shape_386.setTransform(31.1,108.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#6F5844").s().p("AgFAIIAAgEIAAgEQAIAAABgLIACAAIAAAEIAAAEIgBADQgCAJgIAEIAAgFg");
	this.shape_387.setTransform(34.6,104.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#785943").s().p("AgUAXIAAgFQAXgPAPgYIADAAIAAADIAAAFIgBADQgOAVgVAMIgFAAg");
	this.shape_388.setTransform(30.3,104.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#684730").s().p("AgFAEIAAgEIAAgDIADgBIABgDIADAAIAEAAIAAAEQgEAIgHADIAAgEg");
	this.shape_389.setTransform(32.9,102.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FCD0A9").s().p("AgHgBQAcgQgVAWQgDAEgCAAQgEAAACgKg");
	this.shape_390.setTransform(37.2,104.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#735946").s().p("AgRAGIAAgEIAAgDQALgMAYAGIABACIAAAEIgFAAQgXgBgIAMIAAgEg");
	this.shape_391.setTransform(37,103.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("rgba(61,49,36,0.298)").s().p("ACcAIIk/AAIAAgCQAJgEgJgCIAAgDIAEgDIAEgBIADAEIABADIgEAAQCdAKCegKIAEAAIgBADIgDABIAAAEIgEAAg");
	this.shape_392.setTransform(33.5,118.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("rgba(26,22,19,0.502)").s().p("AgaAEIAAgEIAAgDQAJADATgFIAAgCQAFAFAMgBIAEAAIAEAAIAAACQghgBgUAKIAAgEg");
	this.shape_393.setTransform(52.6,118.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("rgba(105,85,61,0.976)").s().p("AgXAdQAWgcATggIADgBIADAAIAAAEQgKAVgRAPQAAAGACAGIABABIAAADIAAAFIgDABQgJACgLABIAAgEg");
	this.shape_394.setTransform(50,115.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FED0A3").s().p("AgIABQAkgIgkAKg");
	this.shape_395.setTransform(44.3,117.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("rgba(115,93,70,0.502)").s().p("AifAAIAEAAIAMAAIAEAAIA2AAIAEAAICnAAIAEAAIAqAAIAEAAQALAAAJgDIAEgBIAAAEIgEAAQhPAFhOAAQhPAAhPgFg");
	this.shape_396.setTransform(33.9,119);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("rgba(188,156,126,0.796)").s().p("AATACIgpAAIAAgDIApAAIAEAAIAAADIgEAAg");
	this.shape_397.setTransform(45.2,118.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#F9D3A8").s().p("AgLgCQAfgUgKAVQgIAOgEAAQgGAAgDgPg");
	this.shape_398.setTransform(49.1,113.9);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FBD0A5").s().p("AgLAAIAAgBQAcADgHAAIgVgCg");
	this.shape_399.setTransform(48.7,106);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FDCFA1").s().p("AgdgCIgBgCQAeACAbAFIAEAAQgLACgLAAQgTAAgTgHg");
	this.shape_400.setTransform(43.6,105.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#654C3B").s().p("AAdAGIgJAAIgDAAQgcAAgVgHIAAgEQAgAFAgAEIABACIgEAAg");
	this.shape_401.setTransform(42.2,103.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#755D46").s().p("AAVArIABgEQASgaAJgiIgDgBQg3gGgwgOIAJAAIAEAAQAyAGAvAKIAFAAQgHAqgaAYIgBADIgDAAg");
	this.shape_402.setTransform(50,108.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("rgba(243,194,147,0.992)").s().p("AArBQIinAAIAAgCQgfAEgKgOQA3gIAqgUQAYgLAfABQAXAAAQgQQgagag4AVIgZAJQgJADgGgGIgEgFIAAgEQAFAAACgCQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAcgVAVgcIABgDQAJgEACgJIABgEQAJgNAXABIAEAAQAVAIAdAAIADAAQAwAOA4AGIADABQgJAjgSAaIgBADIgDABQgUAhgWAcIgFAAIgpAAIAAAEIgEAAgAgSBEQAHAHARgCIAHgBQgEgNgJAAQgGAAgMAJgAAzBEIAAACIATgGIgTAEgAg3BEIAAACQAlgDgMAAIgZABgABgAbQAHAgAQgfQAFgLgGAAQgGAAgQAKgAhLgBIAAABQAogJANglIAAgCQgZAYgcAXgACTgsQAUAOgVgQIABACgABdgwQAuADgugFgAAXg8QAeANAfgIIgEAAQgbgGgegCIAAADgAgShDQgCASAKgKQAMgOgEAAQgEAAgMAGg");
	this.shape_403.setTransform(38.3,110.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#272B2C").s().p("AhCCJIAEgCQgUgjAYARQADACgEgMIgDgFQARgLADAbQABAOAIgJQgGgagOgkIgBgEQAHgeAJgZQADgIgPAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQgLgcAggBIAAgEIAAgIQgUgLgEgeQgBgRgSAGQgFABACgLQAPgJAOAFIAEAAQAQgNASgKIADgBQATAuAJA4IAAAEQAsAtgTA1IAAAEQAVAGAPAYIABADQgUgMgCAhQAAAGgLACIAAAEQgrAFgeAAQgYAAgRgDg");
	this.shape_404.setTransform(48.5,84.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FDD2AA").s().p("AgFAHQAKgZAAAKQABAUgFAAQgCAAgEgFg");
	this.shape_405.setTransform(34.1,87.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FED3A4").s().p("AgFAAQAWgEgWAGg");
	this.shape_406.setTransform(31.2,93.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#78533E").s().p("AgUAdIgEAAIAAgEQAXgVAPgbIACgBIAFgDIAEgBIgBAEQgTAbgUAaIgFAAg");
	this.shape_407.setTransform(29.8,98);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#7B573D").s().p("AgYAjIAAgEIAAgEQAbgbATglIADgBIAAAEIAAAFIgBADQgWAjgaAeIAAgEg");
	this.shape_408.setTransform(32.7,97.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#825A3D").s().p("AgSAZIAAgEQAVgUANgcQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAAAEIAAAFIgBADQgLAYgQARIgEABIgFADIAAgEg");
	this.shape_409.setTransform(33.3,92.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#76563D").s().p("AgaAxIgEAAIAAgEQAhgoAXgyIABgEIAEAAIgBAEQgSA3giAnIgEAAg");
	this.shape_410.setTransform(35.8,96.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#7B583F").s().p("AgkAvIAAgEIAAgEQAkgmAaguIADgBIAFgEIADAAIgBADQggA1goAtIAAgEg");
	this.shape_411.setTransform(29.4,92);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#835D3F").s().p("AgPgJIAEAAIAAAEIAAAEQALAVAOggIACgBIAAAEIAAAEIgBAEQgLAPgHAAQgJAAgDgXg");
	this.shape_412.setTransform(24.1,97.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#745035").s().p("AgNAOIAAgDIAAgEQANgJAIgOIACgBIAEAAIAAADQgLATgQAOIAAgFg");
	this.shape_413.setTransform(24.3,95.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#7A553D").s().p("AgYAhIAAgEQAZgcAVggIADgBIgBAEQgPAlgdAYIgEAAg");
	this.shape_414.setTransform(27.8,90.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#7E5E43").s().p("AgLAVIAAgFIAAgEQAOgLAHgUIACgBIAAAFIAAADIAAAFQgHAQgMAMIgEAAg");
	this.shape_415.setTransform(25.7,81.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#76553F").s().p("AgLAXIAAgEIAAgEQANgQAIgYQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAAAFQgEAggTAQIAAgEg");
	this.shape_416.setTransform(28.2,77.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#6E5443").s().p("AgXAnIAAgEIAAgEQAWgjAUglIACgBQAJAggPAcIgCAAIgEAAIAAgEQAFgUAHgUIgCABQgTAkgXAgIAAgEg");
	this.shape_417.setTransform(37.6,90);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#7A5338").s().p("AgJASIAAgEIAAgEIAAgEQAHgNAHgLIABgEIAEAAIAAAEQgGAYgNARIAAgFg");
	this.shape_418.setTransform(36.2,88.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#7B5940").s().p("AgLATIAAgFQAMgOAJgVIACgBIAAAEIAAAFIAAADQgIAVgPALIAAgDg");
	this.shape_419.setTransform(31.5,85.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#704E36").s().p("AgLARIAAgFQAMgMAJgTIACgBIAAAFIAAADIgBAFQgGAMgIAMIgEAAIgEADIAAgDg");
	this.shape_420.setTransform(33.5,85.3);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#77553F").s().p("AgJAQIAAgEIAAgEIAAgEIAKgQIABgDIAFgEIADgBIAAAFQgGAVgNAPIAAgFg");
	this.shape_421.setTransform(33.7,81.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#7A5A3E").s().p("AgJAZIAAgEIAAgEIAAgFQAPgMACgbIACgBIAAAJIAAAEIAAAEQgGAXgNARIAAgEg");
	this.shape_422.setTransform(35.8,81.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#926C46").s().p("AgSAAQAIgCgBgLIACAAQAAALACAJIACAAQAPgBADgOIACAAIADAAIAAADQgKATgJAAQgJAAgIgOg");
	this.shape_423.setTransform(20.2,91.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#78543B").s().p("AgWAfIgEAAIAAgEQAbgYATggIADgBIAEAAIgBAEQgTAfgYAaIgFAAg");
	this.shape_424.setTransform(22.2,86.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#624124").s().p("AgDAMQgCgKAAgJIADgBIABgEIADAAIAEAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGAFIAAALIAAAFIgCgBg");
	this.shape_425.setTransform(19.8,91);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FED2A7").s().p("AgaAQQAdgMAVgUIACAAQgPAcglAGg");
	this.shape_426.setTransform(12,89.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#6C5947").s().p("AgsgJIAAgEIAAgUIAEgCIABgCQAgAFAkgBIAEAAQAAAGAJgCIAEAAIAAABIhVgBQgJA2AdAHQAHABAKgBIADAAIAAADIgDABQgJACgHAAQgfABAFgwg");
	this.shape_427.setTransform(5.5,85.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FDD4AA").s().p("AgLAIQAvgkgvAmg");
	this.shape_428.setTransform(18.7,84);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#F4CBA0").s().p("AgwgYIAAgEQAwAIAxgGIAAACQgfAiguASIgEABQgTgRADgkg");
	this.shape_429.setTransform(6.8,85.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#97785D").s().p("AgqgBIBRAAIAEAAIAAABQgUACgTAAQgYAAgWgDg");
	this.shape_430.setTransform(7.9,78.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#B59C7F").s().p("AgfAfIAEgBQAugSAfgiIAAgCQgxAGgwgIIAAAEQgDAkATARQgdgGAJg3IBVACIAAgCIAMAAIAIAAQgJAagYASIgDABQgNAHgPAEIAAAFIgEAAIgJAAIgIAAg");
	this.shape_431.setTransform(6.7,85.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#5D4E3C").s().p("AgqAhIAAgFQAQgEANgHIADgBQAXgSAJgaIgIAAIgMAAIgDAAQgJACAAgGIAFgBQAagGAWAHIgBADQgfAsg1AWIAAgEg");
	this.shape_432.setTransform(9.9,85.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#76533C").s().p("Ag4BdIAAgFQBDhOAshlIADgBIAAAFIAAAEIgBADQgrBihDBLIgDAAg");
	this.shape_433.setTransform(27.4,81.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#7A5C43").s().p("AhoBpIAAgEIAAgEQCIhDBGiFIADgBIAAAFIAAAEIgBADQhJCAiDBFIgEAAg");
	this.shape_434.setTransform(16.1,81.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("rgba(245,198,150,0.996)").s().p("AibD0QAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgTgHgVAFIgBgDQgRgOgcgEQAFAAADgBIABgDIAEAAQAJgBgDgLQgQhPgDheIAAgEQAVgzgEhLIAAgEIAAgEQADgagHgQIAAgEIAAgUIAAgEIAAgNQAlAFAKA0IACABIAKBOIACAAQAHAUALAQIADABQAWAHAfgFIABgCQCChFBJiBIABgDQALgQAMgOIABgDQAdgGgMAjIAAAEIgCAAQAAASgKAGIAAAEIAAAEQgBAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQgHAYgPARIAAAEIgCAAQgIAVgPAMIAAAEIAAAEIgCABQgUAhgbAXIAAAEIgBADIgDABIgCAAQABALgIACQASAeATgjIAAgDQBEhLArhiIABgEQAKgMAHADIADABIAAAlIAAAEIAAAEIgCAAQACAUgMAFIAAAEIAAAEIgBADIgMARIAAAEIAAAFIgCAAQgJAVgNAQIAAAEIAAAEIgDABQgVAhgaAbIAAADIgCABQgJAPgNAJIAAAEIgEAAQAHArAYgjIACgEQAogsAhg2IABgDQAIgMAHgNIABgEQAOgRAGgYIABgEQAJgaAJAVQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAAAMIAAAEIgCAAQgDAegPAPIAAAEIAAAEIgBAEQgJALgHAOIAAAEIAAAEQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQgNAdgWATIAAAEIAAAEIgCABQgQAcgXAUIAAAEIgBADIgLAKIAAAEIAAAEIgEAAIAAAEIgFAAQAGAsAYgjIAMgRIAAgEIAHgGIABgDQAbgeAVgkIABgDQAXggAUgkIACgBQgGATgFAWIgBAEIAAAEQgYAxgiAoIAAAFIgBADIgCABIAAAEIgDABQgPAYgYAQIAAAEIgDABQgWAXgcARIAAAEIgEABQgIAIgMADIAAAFIgEABQgaARgcAOIAAAFIgCABQgIAGgOABIAAAEIgEAAQgdAKgdAAQgeAAgfgKgAjHDeQAaANgbgQIABADgAjcDVQAeAFgfgHIABACgAgDDPQAMAFAPgOIAEgEQgCgDgEAAQgJAAgQAQgAjTCtQAKALgQgaQAAAKAGAFgAjlCBQAAAIADACQAVANgYgfIAAAIgABfCJIAAACIARgHIgRAFgAC2ArQgPAZgTAUIAAACQAXgIAOgnIgDAAgACYgGIAAACQANgDgCAAIgLABgAgKg2QgVAUgeAMIAAACQAmgFAPgeIgCABgAi8gzIAAACIAKgQIgKAOgAC0g3QAMAOgBgeQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQgCAAgIATgAAUhYIAAACIAYgUIgYASgAjgi3QATAUgUgYIABAEg");
	this.shape_435.setTransform(15.5,93.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#68503C").s().p("AhcAUIAAgEQgMgZgUgTIAEAAIAEAAQANAbAcANIAAAAQAKAFALADIAEAAQAlAHAwgFIAAgCQA3gEAcgfIADgBIAEAAQgIAagcAIQgvALgvAAQgrAAgsgJg");
	this.shape_436.setTransform(8.7,75.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("rgba(20,19,19,0.576)").s().p("AAAAFIAAAAIABgJQABAFgCAEg");
	this.shape_437.setTransform(55.3,7.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#796149").s().p("AgKAOIgIAAIAAgEQAOgFAJgHIADADIgNANIgFAAgAASgNIAAAAIAAAAIAAAAg");
	this.shape_438.setTransform(35.8,-2.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FAD8B1").s().p("AgSIOQASgUAPgZIADAAQgOAngWAIgAACoJQAigMgiAOg");
	this.shape_439.setTransform(32.1,49.9);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FCD4AE").s().p("AjbJxIgBgDQATAFgDAAIgPgCgAC+ptQAdgJACAJIgGABQgHACgGAAQgHAAgFgDg");
	this.shape_440.setTransform(15.3,52.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#EEC499").s().p("AgLB1QgWgIgUgEQg9gNgEhDQARgtgIg0IAAgFQAKgnAfgRIAEgBIA1AAIAEAAIAEABQATAGAWADIgQABQgRAHgKAPQgDAEABACQgPAIgNAKIAAAFIgBAAIgKgFQgGAAAAAGQABAGACAEQgKAIgNAFIAAAEIgEABIgJADIAAAFIgCAAQABAIgHAAQAGAnAsgOIADgBQAZAzAxAaIAEAAIADABQAZASAoACIABABIAAACQgBAXAMgOQACAJgEAMQgEAGgFAAIgTABQgxAAgygSgAhxAwQAdATgdgVIAAACgAhigCQALAKgSgbQAAAMAHAFgAhZg0IAAACIARgHIgRAFgAgbhpIAAACQAZgDgIAAIgRABgAhZhnQAQgBgQgFgAhEh+QAIAGARgEIAFgCQAAgEgIAAQgIAAgOAEg");
	this.shape_441.setTransform(41.3,3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#CEAB88").s().p("ABWIGIhSAAIgEAAQgKgDgJgFIAEAAQBeALBJgbQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAnhKBCgtIAEABQAtAUAtAVIAEgBQAngRAjgTIAAgFQgOjrA8jHQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQhFgVg+gGIgCAAIAAgCQg2gcgvgkIAAgDIgQghIAAgFQgCgtAGglIgDgBQgwgfhEAIIAAAEQACAigXAfIgDABQgMAJgJALQgXAKgbAAQhXABhQgPIgBgDQg0gWg2AAIgDgBQgNgTgpgJQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQgxgVgUgzIAAgEQADgqAJgkIgBgDQgjgtglgqQADgCADABQAHABAHAIQATAUAPAYIADABQAGAGAEAKIACABQAEAKAGAJIACABIAAAJIAAAEIgCAAQABALgHABIAAAMIAAAEIABAEQACALgHACQgBAfAMATIABADQCYBkDuALIAEAAQBCgaAPhNIABgEQBQgCAuAhIABACQgFAagDAwIAAAEQAxBfB/AWIBPAPQg5DNAHD6IAAAEIgDABIhXAkIgDgBQgLgOgXgCIgBgDQgKgUgagFIgEABIgEADIgBAAIAAAAIgCABIAAAAQg3AfgcA6IAAAEIgDABQgcAgg4AEIgEAAgAg9HVIgBgDQgIgMgPgGIgEAAQgSgIgTAIIAAAFIgEgBQgbgEgXgcIgBgDIgggeIgBgEQgbgkghgeIgBgEQgMgSgQgPIgBgEQgOgUgSgRIgBgEQgEgKgHgHIgBgDQgagdgSgmIgBgEQgKgsgWgiIgBgDQgjgygFhNIAAgEIAEAAIAAAEQAIAeAEAjQAeAqAaBEQAHATAMATQBiCiCDCBIABADQANAIALgPIAEAAQBHAFAbBFQgbgOgOgbgAnklkIAAgUIAAgEIAAgFQAHgBgCgLIgBgEQAHgKABgPIABgEQAFgJACgLIABgEQAHgIgDgRIAAgEQAEgaAIgGIAAADQgJBPgcBRIAAgEg");
	this.shape_442.setTransform(3.1,26);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("rgba(7,6,7,0.373)").s().p("ABLAvIhWAAIgBgCQgkgMgcgTIgBgDQgJgJgLgHIgBgDQgUgOgIgYIACAAIAPAVQA7BRBqgMIANgCQAMACALgFIgOAIIgDAAgABoAgIAGgHIABgBIAQgFIgZAOIACgBg");
	this.shape_443.setTransform(-10.9,-11.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#5F4A36").s().p("AAEAKQgFgKgEgKIAFAAIAAABIACAAQgBAKAEAGIABAEQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_444.setTransform(7,-8.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#A38363").s().p("AAAAAIAAAAIABAAIAAAAIgBAAg");
	this.shape_445.setTransform(7.1,-9.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#9C836D").s().p("AAPAGIgJAAIgYgKIABgBQASADARAFIABADIgEAAg");
	this.shape_446.setTransform(0.4,-20.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#795A3D").s().p("AFpHVIgEAAIAAgEQgHj5A4jPIhPgNQh+gXgxheIAAgEQACgxAGgZIgBgDQgugghRACIAAAEQgPBNhCAaIgEAAQjvgMiXhjIgBgEQgMgSABggQAGgBgCgLIAAgEQAMgUgEAxIAAAQQAZArA1AOIAEABQA2AJAtATIAEAAQAJAKATgBIAFAAQAOgBAJAGIABADQAcAJAiADIAEAAIAEAAIAEAAQAkAPAqgNIAAgCIAEAAQAUADgDgTIAAgEIAQguIAAgEIAAgEIAAgEQANgVAMgXIADgBIACgBQASgsgUgVIgBgEQgEgLgPgBIgBgDQgIgJgPgBIgEAAQgYgMgegIIAAgDQgRgHgUgCIAAABQgygTg3gIQgKgIgQgBQgWgNgvgKQhKgOgRA3IAAAEIAAAEIgCAAQAAAIgFABQARgogfgSIAAgEQAYAJAhgOQAPgHASADQChAfCTAwQAwARAZAoIABAlIgBAEIAAAEIgEAFQAaAPAvAIQAmAFAhARQAPgjAXgaIADgBQASgHAbADIAFAAQALAHAVgDIAFAAQBIAKBDAOIAEABQAHgwgKgzIgBgEIAAgEIAAgIIACAAQATBSgNA5IgEAAIgLgDIgLgEIgBAAIgOgFQgfgRgmACQgWgDgUgGIgEgBIAAgCQgdgCgcAAIAAAEIgEABQgfASgKAnIAAAEQAIA1gRAuQAEBCA9ANQAUAFAWAHQA8AWA7gEQAFAAAEgHQAEgMgCgIIAEgGIACgCQADAlgTAQIgBADQgjCTgKDCIAAAEIgEAAQAAAXACAWIACAAQADArgDAbIAAAEIgEAAgABijtIAEABIANAHIAEABIAEAAQAcAIAVARIgBADQgXAyAUAtQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAcg1gOhJIgCACQhBghhRABIgHAAQgHADgSATIAAAMIAAAEIgDABQgQAfgJAmQAHAHAIgMIABgDQAcgbAIgvIAAgEQAPgDAOAAQAVAAAUAGgAFYhLIgDgBIAAgEQAfALAiAJIADAFQgogDgZgRgAmrmAIABgEIAEgHQALAUAbgEIAEACIgOABQgSAAgPgIg");
	this.shape_447.setTransform(11,18.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("rgba(15,11,9,0.996)").s().p("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");
	this.shape_448.setTransform(2.5,15.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("rgba(36,39,40,0.996)").s().p("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");
	this.shape_449.setTransform(0.1,1.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("rgba(15,11,9,0.996)").s().p("AhTQNIgEAAIhnAAIgEAAIgIAAIgBgDQgGgIgJgFIAAgCQAcgFAdgKIABgDQARgUALgaIAAgEQgCgxgPglIgEAAQgwALg2AFIAAAEIgFAAQgIAAgEAEIgEAAIgdAAIAAAEIgEAAIgEAAIgEAAQhJgBgyAWIAAAEIgEABQgYAQgSAYIAAAEIAAAEIgEAAIgUAAIgBgCQgHgEgJgCQgmgVAChGQAChBAmgVQAMAbgJAoQgJAtALAYQBvhqASjGQANiXgTh4IgBgEQgRgYgDgmIgCAAQAPgKgEgPQgMAJAAgBQgTgrgYgnQhSiGg5igQAmgOALA5QAEAXARAQQgCigAXidIAAgEQAliDBThVIADgBQAUggAlgjIABgDQBuhLCZgfQCYggCAg7QA/gcAvgtQAqgmAKhNQAAgGAIgEQAUATgHAsQgLBCAEBdIADA2QAjBXAoBUIADABQgBASAIAPIABAEQAUAPARAiQBLCXgZDbQgMBsggBuQgpCRABCuQAABaAbBFQAtB3AkCKQAXBXgYBMIgHARQgRgYgCgqIgCAAQgPAOgOAZQgNAYgPAYIgBACQgUAFgIgDIgCgBQgCgGAAgGQARgPALgWIAAgEIABgDQAagYAGgrIgEAAQgvgKgzgGIgBgCQgigEgfgGIgBgCQgZgGgLAMIAAAEIgCAAQgBALgJABIAAAEIgDABQgXAhggAYIAAAEIgDABIg7AwIgDABQgUAIgSAMIgDABIgFADIAAAEIgEAAQgPAAgKgEIAAgEIAAgEQAIAAAEgFIABgDQAegPAagUQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQALACAAgLIACAAQAkgTAYgfIABgDQAXgMANgVIABgEQAJgEADgJIAAgDQAjgoASg3IABgEIACgBQAPgdgJggIgCABQgVAmgWAjIAAAEIgDABQgTAlgbAcIAAAEIgDABQgFALgJAFIAAAEIgBADIgPARIgEAAQgHABADgJIADgEIABgEQAKgHAFgKIABgEQAWgZASgdIABgDQASgRAKgZIABgDQAOgRAGgZIAAgEQAMgNAEgUIABgEIACAAQAFgbgHgSIgBgDQgIgNgMAIIAAAEIAAAEIAAAEIgCABQgCAbgQANIAAAFIAAAEIgDAAQgIATgOAOIAAAEIAAAEIgCABQgbAvglAmIAAAEIgCABQgOAhgMgWQARgNALgUIAAgEQAegYAPglIABgEQAQgMAIgVIAAgEQAOgPAGgWIABgEQAGAAgCgJIAAgEQAEgGABgHQAOhGgoASIAAAEIgCAAQgtBmhEBOIAAAFIgCAAQgCAPgQABIAAgEIAAgMIAHgGQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAZgaATggIABgDQAOgMAGgRIABgEQAUgQAEghIAAgFQAPgBgCgTIAAgEIACgBQAVgtgogIIAAAFIgDABQgKAMgLALIAAAEIAAAEIgDABQhGCGiJBDIAAAEIAAAEIgEAAQgzADgKgoIAAgEQgFgugLgoIgBgEQgLgggZgSIgBgCQgNgDgHAFIAAAIIAAAEQAAAgAGAZIADABIAAAVIAAAEIAAAEIAABGIgDAAQgJATgFAWIAAAIIAAAEIgEAAIAAAdIAAAEQgBAwAJAmIAAAEQABAMAEAJQAOAhgXAMIAAAEIgCAAQABALgHABQAGAKAbgFIAEAAQAIAAADAEIABAEIABADIADABIAAAEIgCAAQgBAFgFAAIgEgBgAHTNKQAxAPAdgVIAAgEQADgogUAbIgDALQgXAPgjgFIAAACgAleKXIAAAEQAEAhgQANIAAADQAOAvgbADIAAAZQAAAMgCAKQgCAHgYAYIAAACQBCgBBBgFIADgBQALgNAHgTIgCgEQgQAWgHgWIABgEQASgfgHg3IAEAAQAgABgLAsQAXAHAFg0QADggASgSIABgEIAMg+QgLgBgGgIIgDgEQgLgpgKAiIAAACQgTAAACgrQgYgNgOgaIgDgFQgUgkgZAKQAAgCAAgBQAAgBAAAAQAAAAAAAAQgBABAAABQgJAigGA1QgFAwAEAsIgCAAQAAAQgKAEgAGNM3IgEACQAmAJBNgLIAAgEQALgBAAgHQACghAUANIgBgEQgPgXgVgGIAAgEQATg2gsgtIAAgEQgJg4gUgvIgDABQgSALgQANIgEgBQgOgEgPAJQgCALAFgCQASgGABASQAEAeAUALIAAAIIAAAEQggAAALAdQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQAPAAgDAIQgJAZgHAeIABAEQAOAlAGAZQgIAJgBgNQgDgbgRALIADAEQAEANgDgCQgIgGgDAAQgGAAANAXgAivL7QgFAhgWALIABAEQAJAXAPgXIADAFQAIAOALgdQAahAgLhWQgZAzgKA9gAj6MZQAbAIgcgPQAAAHABAAgAgPK0IACAAQgGA7AugNIAEgBQA2gWAfgsIABgEQgVgGgcAGIgEAAIgEAAQgmABgfgFIgEAAIgEAAQAAAOACAPgAhTIxIAEAAIAQANIABADQAUATAMAaIAAAEQBdAUBYgWQAcgIAIgbQAlgxAqgsIAAAAIACgBIABAAIAAAAIAAAAQAnAbAwARIAEABQAtgTAsgUIABgCIAAgEQADgcgDgqIAAgEIAAgpIAAgEQAKjCAjiTIABgDQAUgSgEgoIgEAAQgrgLgngOQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgggSIgBgDQgWgWgOgdIAAgCQgvAIgHgeQAKgJAOgFIABgDIAYgVIABgDQAcgTAggQIABgCQBAgHA3AOIAEABQANg6gThRIgCgBQgwgQg3AQQhEAUgSgsQAfgZA3gCIABgCIAYAAIAEAAIA2AAIAEAAQgGgbgIgaIgDgBIgCAAQgahBghg6IgBgEIgHgMIgBgEQgnhIgWhZQgHgiADgnQADg5gYALIAAAEIgDABQgRAQgVAMIAAAEIgBADQgNAKgPAIIAAAEIgDABQgJAFgMACIAAAEIgEABQhkAzh+AaIgEABQhgAWhcAbIAAAEIgBACIgxAOIAAAEIgDABQgJAFgMACIAAAFIgEAAIgdAQIAAAEIgDABQgJAIgNADIAAAFIgBACQgHAGgIAEIAAAEIgDABQgsAngjAuIAAAEIAAAEIgEABIgFAEQAVAuAqAbIADABQAfASgRAnIgCAAIABACIgEAHIgBADQAbAQAmgNIABgDQAhgQAogKIABgCIAZgEIAEgBQBNgDA7AjIADABQAWAKANAQIABADQAIARAKAPIADABQgBALAGAEIADABQAEAEAAAJIAAAEQAGARAIAPQABAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAIAAAEQACAlgjgZIAAgCQgggEgRAOIAAAEIgBAEIgDABIgEAAQhFAShCgXIgEAAIgFgEIAAgCQgagKgXgMIgDgBIgmgxIgBgDQgSgWgagQIgEAAIgdAAIAAAEIgCAAQABgNgHgDIgCAAQAAgJgGABIgBgEQgDgJgJgEIgBgDQgRgcgXgWIgBgEQgVglgLAtIAAAIIAAAEIgCAAQABAYgHANIAAAEIAAAFIgCAAQgBAPgJAFIAAAIIAAAEIAAAFIgEAAIAAAMIAAAEIgCAAQABAPgIAGIAAAQIAAAEIAAAIIAAAEIgEAAQAAAnACAnIACAAIAAAJIAAAEQAHBiAMBeIACAAQACBSAmAuIABADQASAsARAuIACABQAMAjAYAXIABADQAKALAIANIADABQAJAVASANIABADQANAUARAQIADABQAWAoAjAbIABADQAOAVATAPIAEABQARAmAogHIAAgCIARgBIAQABgAlSG3QgHAOAEgCQAZgNgagZQAJAPgFALgAF5iOIADABQACASAKAIIABADQAJAPAQAJIADAAQAcAUAmAJIAEAAQAOAKAOgLQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQANAAgEgRIgBgDQAHgOgCgYIgBgEQAHgBgCgLIgBgEIADAAQAFgVgIgMIgBgDQgJgJgSAAIgBgDQgDgBgFAAIgDAAQgPAHgOgLIgEgBQgOgBgHAGQgDANAHACIAEABIABADQAWAOgbAMQgEAEgGgDQgPgJgJgSQgFgKgXATIAAgCQgGgCgGAAQgDASAIAGgAjzlOIgDABQgFAIgJADIAAAIIAAAFQAJAYATAOIABADQADAPAOAFIAEAAQAcATAlAMIAAACIBXAAIAEAAQAZgQAbgOQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgEgpgZgTIgEgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQgXgOgVgQIgEAAQgPgBgOgDIgEAAIgEAAIAAAEIgEgBIgVgIIgDgBQgKgIgLAJQAAALACAKIACAAIAEADIAEABIAAAEQgEApghghIAAgIQAAgIgEgDQgFgDgOAAQgKAAgQACgAl4l6QAUAcAGgRIAAgEQgOg7hAgfQAXAsAdAng");
	this.shape_450.setTransform(2.5,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{x:32.4,y:148.6}},{t:this.instance_1,p:{x:-15.4,y:133.6}}]}).to({state:[{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_351},{t:this.shape_262},{t:this.shape_261},{t:this.shape_350},{t:this.shape_449},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_448},{t:this.shape_338},{t:this.shape_254},{t:this.shape_336},{t:this.shape_253},{t:this.shape_252},{t:this.shape_250},{t:this.shape_251},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_333},{t:this.shape_245},{t:this.shape_244},{t:this.shape_299},{t:this.shape_447},{t:this.shape_243},{t:this.shape_242},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_268},{t:this.shape_237},{t:this.shape_443},{t:this.shape_267},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_442},{t:this.shape_325},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_441},{t:this.shape_226},{t:this.shape_440},{t:this.shape_224},{t:this.shape_223},{t:this.shape_439},{t:this.shape_221},{t:this.shape_220},{t:this.shape_438},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_205},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_320},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_437},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_150},{t:this.shape_149},{t:this.shape_151},{t:this.shape_148},{t:this.shape},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_139},{t:this.shape_138},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_133},{t:this.shape_427},{t:this.shape_131},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_129},{t:this.shape_128},{t:this.shape_422},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_121},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_117},{t:this.shape_404},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_403},{t:this.shape_106},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_353},{t:this.shape_352},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_340},{t:this.shape_341},{t:this.shape_337},{t:this.shape_335},{t:this.shape_334},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_310},{t:this.shape_311},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_365},{t:this.shape_291},{t:this.shape_364},{t:this.shape_363},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_270},{t:this.shape_269},{t:this.shape_266},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_147},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_362},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_361},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_354},{t:this.instance_2,p:{x:31.2,y:147.8}},{t:this.instance_1,p:{x:-15.9,y:133.9}}]},37).to({state:[{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_449},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_450},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_442},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_440},{t:this.shape_224},{t:this.shape_223},{t:this.shape_439},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_139},{t:this.shape_138},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_133},{t:this.shape_427},{t:this.shape_131},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_129},{t:this.shape_128},{t:this.shape_422},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_121},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_406},{t:this.shape_407},{t:this.shape_405},{t:this.shape_117},{t:this.shape_404},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_403},{t:this.shape_106},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_393},{t:this.shape_392},{t:this.shape_394},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_362},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_361},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{x:32.2,y:146.6}},{t:this.instance_1,p:{x:-15.6,y:133.3}}]},2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.3,-119.7,224.6,342.5);


(lib.rumi3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(328.2,480.2,1,1,0,0,0,15.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:4.1,x:328.1},0).wait(1).to({y:480},0).wait(1).to({x:328,y:479.9},0).wait(1).to({y:479.7},0).wait(1).to({x:327.9,y:479.6},0).wait(1).to({y:479.4},0).wait(1).to({x:327.8,y:479.3},0).wait(1).to({y:479.1},0).wait(1).to({x:327.7,y:479},0).wait(1).to({y:478.8},0).wait(1).to({x:327.6,y:478.7},0).wait(1).to({x:327.5,y:478.5},0).wait(1).to({y:478.4},0).wait(1).to({x:327.4,y:478.2},0).wait(1).to({y:478.1},0).wait(1).to({x:327.3,y:477.9},0).wait(1).to({y:477.8},0).wait(1).to({x:327.2,y:477.6},0).wait(1).to({y:477.5},0).wait(1).to({x:327.1,y:477.3},0).wait(1).to({y:477.2},0).wait(1).to({x:327,y:477},0).wait(1).to({y:476.9},0).wait(1).to({y:477.3},0).wait(1).to({x:327.1,y:477.7},0).wait(1).to({x:327.2,y:478.1},0).wait(1).to({x:327.3,y:478.5},0).wait(1).to({y:479},0).wait(1).to({x:327.4,y:479.4},0).wait(1).to({x:327.5,y:479.8},0).wait(1).to({y:480},0).wait(1).to({y:480.2},0).wait(1).to({y:480.4},0).wait(1).to({y:480.6},0).wait(1).to({y:480.7},0).wait(1).to({y:480.9},0).wait(1).to({y:481.1},0).wait(1).to({y:481.3},0).wait(1).to({x:327.6,y:481.5},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(45,45,45,0.745)").s().p("AAJAQQgRgKgFgWQAQALALARIABAFIgGgBg");
	this.shape.setTransform(389.2,581.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(27,27,27,0.447)").s().p("AgIAOQgDgOAAgOQALABALACQAAAAAAAAQAAABAAAAQABABAAAAQAAABAAABIgGAAIgLAAIAAAQIAAAFIgDAAg");
	this.shape_1.setTransform(383.7,567.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(14,14,14,0.357)").s().p("AgDAVIAAguIAFAAIAAAGQAEAdgJAQIAAgFg");
	this.shape_2.setTransform(389.8,556.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(45,45,46,0.859)").s().p("AgCAOQgDgOAAgNIAFAAIAFAAIABAFQADAOgJACIAAAHQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAg");
	this.shape_3.setTransform(399.3,518.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(3,2,2,0.518)").s().p("AAAAaQgCgaAAgZIAFAAIAAAtIAAAGIgDAAg");
	this.shape_4.setTransform(226.1,597.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(40,41,40,0.678)").s().p("AAEANQgMgHAAgUQAMAIAEAPIABAFIgFgBg");
	this.shape_5.setTransform(219.8,543);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(5,5,5,0.412)").s().p("AAABXQgChXAAhWIAFAAIAACnIAAAGg");
	this.shape_6.setTransform(214.6,524.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020405").s().p("AgLgFQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAbARIgZgOg");
	this.shape_7.setTransform(267.7,554.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#010204").s().p("AgLAuQASgoAFAiQADATgIAAQgGAAgMgNgAAAgNQgFgMAAgOQAMgvgBBGQgBAJgCAAQgBAAgCgGg");
	this.shape_8.setTransform(255.4,538.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(54,54,55,0.796)").s().p("AADAIQgEgDgGAAIAAgFQARgZgDAkIgDAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAg");
	this.shape_9.setTransform(336.5,587.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(46,46,46,0.682)").s().p("AgIAWQgFgQgDgRQAMgIAQgDIAFAAIAAADQgOAFgIAJIAAAWIAAAGQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_10.setTransform(331.6,593);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#767E75").s().p("AAPAYIgRAAQAAgDACgCQANgRgggSQAVgXASA5IAAAGIgFAAg");
	this.shape_11.setTransform(314.6,554.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC727F").s().p("AgYgRQAKgCAEgJQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAQAAIAGAAQAFAGACALIABAMQgRAegLAAQgOAAgGgvg");
	this.shape_12.setTransform(315,560.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AA6770").s().p("AgCAMQgDgMgBgRQAYAcgSAGg");
	this.shape_13.setTransform(310.4,551.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#472B2B").s().p("AgMAEIAAgEIAAgSQAKASAIgRQAAAAABAAQAAAAAAAAQABAAAAgBQABAAABAAIAAAGQAHAfgKAAQgGAAgNgPg");
	this.shape_14.setTransform(310.4,548.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A38465").s().p("AgTAAQAJgCgDgQIAAgGIAFAAIABAGQADASgJAEQAJAQAYgBIAAADIgFAAQgJADgGAAQgXAAAEgZg");
	this.shape_15.setTransform(309.4,530.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#624736").s().p("AgFARIAAgFIAAgMQAIgBgBgPIADAAIAAAGIAAAFIABAFQADAMgJAAIAAAFIgFAAg");
	this.shape_16.setTransform(308.6,526.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#897361").s().p("AgTAJIAAgWQAXgBAPAJQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABIgFgBQgdgNgFAfIAAgGg");
	this.shape_17.setTransform(311.7,519.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#84654B").s().p("AgDASIAAgHIAAgFIAAgcIAFAAIAAAGQAEAagJANIAAgFg");
	this.shape_18.setTransform(309.5,523.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DB7886").s().p("AAFARQgRgFABgXQAJgJADAIQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAKAFgEASIAAAFIgGAAg");
	this.shape_19.setTransform(317.3,549.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#61524F").s().p("AgaB1QgiguAjgMQAAgDgBgCQgcg4AAhTQAjAkgLg1IgBgGQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAVgOAcABQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAZA5IgBAFQgDAaAKAgQgDAAgCACQgcAQAbAnIAAADQhGADATA/QgFAEgFAAQgHAAgHgJgAgTgmQAfATgMAQQgCACAAACQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgDAJgKACQAJBVAmhDIgBgNQgCgLgFgGIgBgEQgMgqgOAAQgGAAgGAHgAgsgsIABAGQATgHgYgcQABAQADANgAAChmQgCAuAlADIAAgDIABgFQADgTgJgFIAAgFQgDgVgKAAQgHAAgKAJg");
	this.shape_20.setTransform(314.6,557.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BF6B76").s().p("AgQgTQAYgXAEAjIAAAFQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgEgIgIAJQgBAXARAFIAGAAIAAADQgkgDACgtg");
	this.shape_21.setTransform(316.6,548.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7A5F4A").s().p("AAjAJQgogPgjAQQAsglAjAgQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABIgFgBg");
	this.shape_22.setTransform(317.2,533.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#70553F").s().p("AgcA1QAVgGAYAAIAGAAQgDg8gXgmQgCgCAAgDQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAfAmgBBGIAAADIgaABQgTAAgMgEg");
	this.shape_23.setTransform(324.1,529.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#725842").s().p("AgigHQAgAGAkABIABAEIgGAAQgNAEgLAAQgWAAgRgPg");
	this.shape_24.setTransform(317.8,521);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4C698").s().p("AAnBJQgjghgsAmQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgQgNIAAgDQgZABgJgPQAJgFgEgSIAAgGIAAgGQAJABgDgMIAAgFQAKgNgEgcIAAgFQAFggAeANIAFABQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAZAYAmgMIAFAAQAJALAKAKQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAQABADABACQAYAlADA9IgFAAQgaAAgVAGQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBg");
	this.shape_25.setTransform(317.2,526.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#866A53").s().p("AgZAUQAZgUAWgYQAAAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIgCAFQgRAeggAQIAAgGg");
	this.shape_26.setTransform(341.2,496.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#80674D").s().p("AgNAOIAAgFQAQgJAIgSQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAAAFQgIAXgTALIAAgGg");
	this.shape_27.setTransform(345.2,491.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C563F").s().p("AhQgLQBFASBWgBIAGAAIAAADQgaADgXAAQhCAAgugXg");
	this.shape_28.setTransform(321.3,501.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7E6249").s().p("AgtAMQAxgIAlgTIAFgBQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgiAag4ADIAAgFg");
	this.shape_29.setTransform(334,500.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#504D4D").s().p("AAXADIgzAAIAAgFQAcAAAdACIAAADIgGAAg");
	this.shape_30.setTransform(322.4,470.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B0ACAC").s().p("AAXADIgXAAIgFAAIgXAAIAAgFIAzAAIAGAAIAAAFIgGAAg");
	this.shape_31.setTransform(334.5,473.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#767473").s().p("AgZAFIAAgFQAaABAUgGIAFgBIAAAGIgFAAQgLAHgQgBIgTgBg");
	this.shape_32.setTransform(330.2,471.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#81644B").s().p("AgKAPIAAgGQAKgLAIgQQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAAAFQgHAWgOAMIAAgFg");
	this.shape_33.setTransform(351.3,481.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#959394").s().p("AAmADIhQAAIAAgFQAqAAArACIAAADIgFAAg");
	this.shape_34.setTransform(337.1,470.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#817F81").s().p("AgTAIIAAgGQAZADAKgMQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIgBAFQgHAMgUAAIgLgBg");
	this.shape_35.setTransform(339.4,472.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#74583D").s().p("AgIAPQARgCgGgaIgBgGQABAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQANAlgaABIAAgFg");
	this.shape_36.setTransform(345.9,469.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7C6349").s().p("AgIALIAAgFQAKgGAEgQIADAAIAAAGQgCAUgPAIIAAgHg");
	this.shape_37.setTransform(355.6,473.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#272A2B").s().p("AhJAaIgBgDQgKgigHg6IAAgFQBgAiBXgOIAAADQgJAzgSBGIgBAFQg9gghMgRg");
	this.shape_38.setTransform(318.9,511.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7A644D").s().p("AgTgIQATAGATAHQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIgFAAIgCABQgYAAgIgRg");
	this.shape_39.setTransform(310.5,499.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6C553F").s().p("AAIAfQgNgcgGgiQAPAZAHAgIABAGQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAg");
	this.shape_40.setTransform(306.2,495);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#775E47").s().p("AARAqQgTgqgRgqQAaAhAMAvIABAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape_41.setTransform(303,487.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#715945").s().p("AAHAYQgPgSgDgfQAMAXAKAXIABAFQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_42.setTransform(284.2,460.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#725943").s().p("AAYAhQgogTgMgwQAWAmAiAbIABAEIgFgCg");
	this.shape_43.setTransform(288.3,466.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#78604A").s().p("AAfAqQgigogfgsQAoAiAcAuIABAFQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_44.setTransform(294.6,474.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#775F4A").s().p("AALAWQgPgTgKgZQATAQAIAYIABAFQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_45.setTransform(299.6,480.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BF7362").s().p("Ah+ANQAXgNAcgLQAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQBrgKBMARQAOADAEAMQgcAIgpAAQhpgBhPAEIAAgGg");
	this.shape_46.setTransform(328.8,466.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#979798").s().p("AArADIhbAAIAAgFIALAAIAGAAIAzAAIAGAAIARAAIAGAAIAAAFIgGAAg");
	this.shape_47.setTransform(322.7,471.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E9E8E9").s().p("AiHgHIAdAAIAGAAIBcAAIAGAAQAdAFARgJIAFgBIBRAAIAGAAIAAAFQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgLAMgagDIgFAAIg0AAIAAAGIgGAAQgdADgZAAQhDAAgugUg");
	this.shape_48.setTransform(327.9,472.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6D6A69").s().p("AhqgMQAOgIAaACIAGABIAAAFIgGAAIgdAAQBAAdBngMIAGAAIAXAAIAGAAQgWAKgkADIghABQhPAAgrgfg");
	this.shape_49.setTransform(323.9,472.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#84674E").s().p("AAMAaQgggEAEgpIAGgFIAGgBQgIApAdAHIABADIgGAAg");
	this.shape_50.setTransform(309.6,470.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2D0C0B").s().p("AhGBKIgCgCIgCgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQgagVgfgRIgBgBIgBAAIgGgDQgOgQgIgVIgBgDQgegHAIgqQALAAAFgHIABgEQBDAcBqgGQBVgEA/gXIAFgEQADgDAFAAQAJAGAHAHQABABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAAAGQAHAbgTACIAAAGQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAIgGANQgLAKgFAPQgCAHgEAHQgHANgJAMIgFgDQgmAWgrAPQgQADgRAAQglAAgogNgAiQgcQA0AlBogIQAjgCAWgKIAXAAIAGAAQAeAEAJgQIABgFIAAgGIAAgDQgrgDgrAAIgGABQgTAHgbgCIgFAAIgRAAIgBgDQgcgDgdAAIAAAGIgGAAIgMAAIgFAAIgMgBQgSAAgLAHg");
	this.shape_51.setTransform(327.6,474.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8C5F51").s().p("AingDIAAgGIAvAPIAGABQBPgEBpABQAoAAAdgHQAGgSAWADIABADQgGAAgDADIgFAEQg/AWhVAEIghABQhTAAg5gWg");
	this.shape_52.setTransform(327.6,467.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A6815D").s().p("AhTgEQBSAHBPgHIAGAAIgBADQgpAGgnAAQgsAAgqgJg");
	this.shape_53.setTransform(296.7,440.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7C634B").s().p("AAQA4QgYgygLg/QAVA1ARA4IABAGQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_54.setTransform(281.1,452);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E7E8E7").s().p("AgYAEQALgIALgKQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAkgTgNA1IgBAFIgFABQgKACgHAAQgWAAgBgUg");
	this.shape_55.setTransform(293.7,427.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#545758").s().p("AgfgGQADgDAEgBIAFgCQACAbAmgKIAFAAIAGAAIgBADQgRAFgMAAQgZAAgIgTg");
	this.shape_56.setTransform(293.2,428.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8A6440").s().p("AikATIAAgFQgJgqgUghQAQgBAIAGQACABADAAQAAASADAQIADABQADA2A3ADIAGAAQBMATBagQIAAgDQA/ACAqgTIAFgBQAGAAAEADQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQg1AdhQAGQgbACgaAAQhtAAg/grg");
	this.shape_57.setTransform(297.8,436.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9E8162").s().p("AgLAUQgCgRgBgQIAAgGIAXAAIAFAAIAAAGIgFAAIgRAAIAAAcIAAAFIgDAAg");
	this.shape_58.setTransform(282.8,432.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#423528").s().p("AgZgCIALAAIAHAAIAbAAIAGAAIAAACQgNADgLAAQgQAAgLgFg");
	this.shape_59.setTransform(283.4,428);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A2886E").s().p("AgcAIIAAgFQAfAAAUgKIAGgBQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgLAHgMAFIgFABIgcgBg");
	this.shape_60.setTransform(285.4,426.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D9B794").s().p("AgCAZQgDgWAAgWIAEgBQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAGAAIgBAFIgFAHQAIAQgHARIgBAGIgCgBg");
	this.shape_61.setTransform(281.9,424.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#42332D").s().p("AgUgEQAfALAAgcIgDAAIAAgGQATAHgHAhIgBAFQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgIAIgHAAQgMAAgIggg");
	this.shape_62.setTransform(278.8,425.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#896E58").s().p("AAHAXQgbgEALgpIAFAAQgFAfAQAHIAGABIAAAGIgGAAg");
	this.shape_63.setTransform(278.3,421.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#977A5D").s().p("AAIAgIgKAAIAAgGQAHgggSgHIAAgGIAAgGQADgDADgBQACgCADAAIAGAFIAEABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgEABQAAAWADAXIACAAIAHAAIAAAGIgHAAg");
	this.shape_64.setTransform(281.1,424.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#886543").s().p("AgFAJIgFgBIgHgFIAAgFIAHgFIAFgBQAKAAALADQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQgHADgJAAIAAAGIgFAAg");
	this.shape_65.setTransform(282.5,421);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8D6E53").s().p("AgIATQgCgKgBgLQAMgFAHgLQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABAAIgBAFIgGAGIAAAGIgFABQgCABgDADIAAALIAAAGQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_66.setTransform(282.5,414.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#422818").s().p("AgWALIAAgLQADgCADgBIAFgCQALAFATgPQAAAAABgBQAAAAABAAQAAAAABAAQABgBAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIAAAFIgEACQgNANgWAHIAAgGg");
	this.shape_67.setTransform(284.2,415);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#958C85").s().p("AAFAdIABgGQANg1gkATIAAgFQAJgIATgBIAAgDQAMALgLAoIgBAGIgGAAg");
	this.shape_68.setTransform(295.3,426.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#94775B").s().p("AgWAOIAAgFQARgRAWgKIAGgBQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgYAQgUAUIAAgGg");
	this.shape_69.setTransform(290.6,423.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#9C7652").s().p("AgGAGQgLgDgLAAIAAgFQAZgEAagCIAGAAIgBADQgNADgPAAIAHAEIAEABIAAADQgIADgIAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAg");
	this.shape_70.setTransform(284.8,419.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F3C89D").s().p("Ag3AjIgGAAIABgGQAHgRgIgRIAFgGIABgFIAAgGQAIAAAIgDQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAgBQAJAAAIgCIAAgEIA5AAIAGAAQAlAAgeAOQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIgGABQgYAKgQARIAAAFIAAAGIgFABQgTALgfAAIgCAAg");
	this.shape_71.setTransform(288.1,423.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#85705B").s().p("AgJAIQAdgNgkAAIAAgFQAVgDALAKQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAIgBADQgQAEgMAFQAAgBABAAQAAgBAAgBQAAAAAAAAQAAgBABAAg");
	this.shape_72.setTransform(294.1,420.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BC9F86").s().p("AgWgCIAnAAIAGAAIAAACQgNADgKAAQgNAAgJgFg");
	this.shape_73.setTransform(307.4,433.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#7F8183").s().p("AAMAXIADAAQAAgbgkgYQA7ARgWAnIgEABIAAgGg");
	this.shape_74.setTransform(309.6,426.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#796046").s().p("AAHANQgMgKgGgQQAOAHAIAPIABAFIgFgBg");
	this.shape_75.setTransform(315.5,426.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#453024").s().p("AAXADIgGAAIgFAAIgoAAIAAgFIAzAAIAGAAIAAAFIgGAAg");
	this.shape_76.setTransform(307.9,432.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F6C799").s().p("Ah0AsIgGAAQg3gDgDg2IAAgFIAAgdIASAAIAGAAQBfAOBqADIAGAAQAQAKAdgHIABgDIAGAAIAFAAQAfgQAhAJIAGABIAAAGQAJArgaAIIAAAGIgGABQgpATg/gDIgGAAQgoAEgoAAQgoAAgpgEg");
	this.shape_77.setTransform(300,436);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#68503D").s().p("ABiALQhqgDhfgNIAAgGQBhAMBoAFIAGAAIAAAGIgGgBg");
	this.shape_78.setTransform(294.7,431.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B39F8D").s().p("AgHABIAAgCQAbADgUAAIgHgBg");
	this.shape_79.setTransform(301.8,425.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6E6B6E").s().p("AgWgCIAnAAIAGAAIAAACQgXADgWAAIAAgFg");
	this.shape_80.setTransform(307.9,430.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F4F5F6").s().p("AgagaIAMAAIAFAAQAkAYABAbIgEAAIgFABIgMABQghAAAAg1g");
	this.shape_81.setTransform(308.4,426.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D0CAC7").s().p("AAUAgIgnAAIAAgGQAEgjgQgQIAAgGIAGAAIAGAAQAAA+AtgKIAGgBIAAAGIgBAEQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgGAAg");
	this.shape_82.setTransform(307.6,426.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#503F31").s().p("AgLgDIgCgDQAEAigngBIABgFQALgogMgLIAAgGQApABA4gEIAAADIgGAAIgXAAQADAGAFAEQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAQAQARgEAiIgBAHIAAAFQgegLgYgfgAgCgJQAfAAgfgDg");
	this.shape_83.setTransform(301.3,426.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#888380").s().p("AgMAEQgEgEgDgFIAWAAIAGAAQAGAAAEADQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgFAAIgMAAIgFAAIgGAAIAAAGQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBg");
	this.shape_84.setTransform(305.3,423.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#644D36").s().p("AANANQgTgJgLgRQAVAHAMAPQACADgBACQgCAAgCgBg");
	this.shape_85.setTransform(312.6,423.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#AA8460").s().p("AgfgDQAfAAAfADIABACIgGABIgTABQgWAAgQgHg");
	this.shape_86.setTransform(310,418.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#AF8862").s().p("AglgDQAlAAAlADIABACIgGAAIgXACQgaAAgUgHg");
	this.shape_87.setTransform(345.2,439);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8C7662").s().p("AgcgCIAzAAIAGAAIgBACQgOADgMAAQgRAAgNgFg");
	this.shape_88.setTransform(331.1,453.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8F7557").s().p("AgDAXQADgWgEgdQAQAZgMAfQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAIABgGg");
	this.shape_89.setTransform(338.5,450.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#846C57").s().p("AACATQgFgRgCgVQALAMAAAWIAAAFQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_90.setTransform(335.1,447);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7D6553").s().p("AgIAMQAOgDgDgUIAAgGQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAABQAJAegXACIAAgFg");
	this.shape_91.setTransform(335.4,450.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7B5C44").s().p("AAAAaQgDgaAAgZQAJAQgEAdIAAAGIgCAAg");
	this.shape_92.setTransform(335.5,434.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#070101").s().p("AgCAKQgFgJACgOQAVgBgQAdg");
	this.shape_93.setTransform(333.4,432.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FDD4AA").s().p("AgJABQAmgZgmAig");
	this.shape_94.setTransform(336.7,426.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#775F4B").s().p("AAkAKQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgFgBQgggJgfAQIAAgGQAvgdAeAjg");
	this.shape_95.setTransform(314.7,431.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8A6846").s().p("AgJAfQgFgCgFAAIAAgGQAZgIgIgrIAAgGQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQgFAqARgHIAFgBQAAADgBACQgIASgTAGQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_96.setTransform(318.1,435.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#856A55").s().p("AglAAQAhgIApAFIABADIgGAAQglAAggAFIAAgFg");
	this.shape_97.setTransform(326.2,428.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#79604A").s().p("AgKAjIAAgRQABgjARgVQAAAAAAgBQABAAAAAAQAAAAABAAQABgBAAAAIAAAHIgCAAQgHApgMAgIAAgFg");
	this.shape_98.setTransform(321.3,432.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#372519").s().p("AgoB0QAOAAAOACIAAADQAVAKAkgHIAAgDQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAYgCgJggQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIAAgGQAAgXgMgMIgBgFQgVhSgYhPIgBgDQgpgFggAIIAAgDQgQABgCgKQAbgIAfgGIAAgDIA5AAIAGAAQAJACgBAPIADAAQAJARAAAdIADAAQAAAbADAZIADABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIgBAFIgEAHQAAAJACAHQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAOAaABArIADAAQAEAdgEAXIAAAFQgMAagiAHQgPACgMAAQgwAAgFgogAAihhQgCAPAFAJIACAFQARgdgVAAIgBAAg");
	this.shape_99.setTransform(329.4,441);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E4BE97").s().p("AAcAnIgGgBIgBgFQgHgQgOgIQAAgDgBgCQgNgPgVgIQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQgIgEgCgKQBEgLAUAnIADABQAIAvgUAAIgFgBg");
	this.shape_100.setTransform(314.4,423.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#77593E").s().p("ABuAnIAFABQAaAHgIg1IgEgBQgUgnhFALQACAKAJAEQAAAAAAAAQAAAAAAABQABAAAAABQAAABAAAAIgFgBQgWgMgZgKIgFAAQg0AAgoAMQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgKgKgXADIAAAGIgGAAIg6AAIgFgBIgGgFQAOAAAOgDIABgDQBVgKBjAEIAGAAQAVALAkgEIAGgBQAvgBATAdQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAQgKA1AtgSIAFgBIARAAIAGAAIAAADQgfAGgbAIIgFgDQgHAZgKAAQgIAAgKgQg");
	this.shape_101.setTransform(305.6,423.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B59272").s().p("AAlAGIg4AAIgGAAIgSAAIAAgGQAwAEAhgIIAGgBIAAAFIAAAGIgHAAg");
	this.shape_102.setTransform(328.5,424.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6A533D").s().p("AAXAFIgzgFQAegLAaANQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgGAAg");
	this.shape_103.setTransform(340.3,430.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7C604B").s().p("AgZgCIAuAAIAFAAIAAACQgOADgLAAQgPAAgLgFg");
	this.shape_104.setTransform(345.8,431.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6D6C6D").s().p("AADARQgNgCADgUQAJgCAEgIQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIgBAFQgCADgDADQgDAPAIAEQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgGAAg");
	this.shape_105.setTransform(342.9,426.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E3DCD8").s().p("AgFAUQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgJgEAEgPQADgDACgDIABgFQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAXAOgTAYQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgFAAg");
	this.shape_106.setTransform(344.4,426.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#998C86").s().p("AgKAWQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQATgYgXgOIAAgGQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAVADgKAwIAAAGIgGABIgEABQgHAAAAgIg");
	this.shape_107.setTransform(345.4,426);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#7F634A").s().p("AgNARIAAgFQAQgMAJgVIACgBIAAAFQgGAbgVANIAAgGg");
	this.shape_108.setTransform(338.9,426);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DAD6D3").s().p("AgKARQAAgCgCgDQgHgMgDgRIARAAIAFAAQAKAIAMAHQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQgDAAgCAAQgIgGgPABIAAAQIAAAGIgFAAg");
	this.shape_109.setTransform(355.4,423.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4B372E").s().p("AgCARQgEgCgQgPQATAFgCgQIAAgFIAAgGIAFAAQAIAGAGAKQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAQAAALACALIADAAIAAAGIgCAAQgNAAgKgGg");
	this.shape_110.setTransform(352.5,425.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#9F8E86").s().p("AgIAIIAAgGIAAgFIAAgFIALAAIAFAAIABAFQABAMgKAAIgIgBg");
	this.shape_111.setTransform(351,424.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#8A837D").s().p("AAIATQgFgKgIgGQAAgBAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQgKgFgGgJQAGAAAEgCQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQARAAARACIAAADIgGAAIgRAAQADAQAHANQACACAAADQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_112.setTransform(353,422.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#544134").s().p("AgZAiQAKgvgVgDIAAgGQAcgMAigFIAFgBQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgEACgGAAQAGAIALAGQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIgGAAIAAAFIgFAAIgLAAIAAAGIAAAFIgGgCQAAAlgiAGIAAgHg");
	this.shape_113.setTransform(348.7,424.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#7A5B3D").s().p("AhZA0QABgQgJgCIAAgFIAAgGIAAgGIAAgbQAUgYAlgJQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBQA8gCA8gDIAGAAIAFAAIAGAAIAAADQgrALgmAPQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAFgCQhBgPgsArIAAAuIAAAGg");
	this.shape_114.setTransform(342.6,421.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#776A60").s().p("AgMgGIARAAIAFAAIADAAQgGANgGAAQgGAAgHgNg");
	this.shape_115.setTransform(356.7,417.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#664F39").s().p("AADAUIgBgFQgGgPgEgTQAPAKABAXIABAGIgGAAg");
	this.shape_116.setTransform(356.2,412.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4F3B2B").s().p("AAFAOIgQAAIAAgFQAVAFgEgWIgBgFQAKAEgEASIAAAFIgGAAg");
	this.shape_117.setTransform(356.6,415.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B6997E").s().p("AALALIgGAAIgWAAIgGAAIgGAAIAAgGQAnAIALgTIABgFIAGAAIABAGQAEARgPAAIgHgBg");
	this.shape_118.setTransform(354.3,415.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(33,34,34,0.584)").s().p("AgIAOIAAgLQAKgGAEgQIADAAIAAAFQgCAYgPAKIAAgGg");
	this.shape_119.setTransform(223.2,496.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(40,41,41,0.647)").s().p("AgFAMIAAgXIAGgEIAFgBIAAAFQABAVgMAHIAAgFg");
	this.shape_120.setTransform(228.7,483.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,1,0.592)").s().p("AgCARIAAgnQAJAQgHAdIgCAAIAAgGg");
	this.shape_121.setTransform(230.2,475.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(35,35,36,0.667)").s().p("AAAAPQgHgMADgWQAOALgGAcIgDAAIgBgFg");
	this.shape_122.setTransform(228.7,465.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(34,35,36,0.624)").s().p("AACAQQgHgNAAgUQAMAIgBAVIgBAFQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_123.setTransform(227,458.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(35,35,35,0.624)").s().p("AACAQQgHgNAAgUQAMAIgBAVIAAAFQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_124.setTransform(225.3,450.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,1,0.533)").s().p("AgCAxIAAhnQAJAwgHA9IgCAAIAAgGg");
	this.shape_125.setTransform(225,443);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(40,40,41,0.62)").s().p("AgEALIAAgVQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIADABQAGAZgNAIIAAgGg");
	this.shape_126.setTransform(225.2,435.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(43,43,44,0.659)").s().p("AgFALIAAgQQAIABAAgNIACAAIABAHQABAUgMAIIAAgHg");
	this.shape_127.setTransform(227,427.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#020305").s().p("AAAICIAAgGQARgagBBIQgBAhgKATQgGgpABgzgAgLktQgNhBABhPIAAgGQAKBKAFBMgAAFpIQAlgvglA7g");
	this.shape_128.setTransform(248.4,474);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#483728").s().p("AAAAdQgCgdAAgcIAFAAIAAAzIAAAGg");
	this.shape_129.setTransform(276.4,432.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#735B47").s().p("AAIAzQgQgtgDg5IAGAAQAGAzAKAuIABAGQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBg");
	this.shape_130.setTransform(277.9,441);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#917963").s().p("AgIAdIAAgGIAAgzQAIAAAIADQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgGAAIgFAAIAAAtIAAAGIgGAAg");
	this.shape_131.setTransform(277.6,432.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.612)").s().p("AgCBUIAAgGIAAihQAJBNgHBag");
	this.shape_132.setTransform(231.9,403.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(41,41,41,0.675)").s().p("AgFAJIAAgRQADgDACgBIAFgBIABAFQADAUgOACIAAgFg");
	this.shape_133.setTransform(232.2,393.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(37,37,37,0.624)").s().p("AgFAMIAAgRQAJABgBgMIADAAIAAAGQABAUgMAHIAAgFg");
	this.shape_134.setTransform(235.7,379.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(27,28,27,0.498)").s().p("AgLALIAAgFQALgJAIgMIAEgBIgBAFQgIARgOALIAAgGg");
	this.shape_135.setTransform(246.1,357.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(38,38,39,0.651)").s().p("AgOAGQAMgIAMgHIAEgBQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgKANgRAEIAAgFg");
	this.shape_136.setTransform(258.5,345);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#907A65").s().p("AgGAOQAQgIgRgWQAeAQgZAQIgFABIABgDg");
	this.shape_137.setTransform(349.2,401.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#7D6652").s().p("AArATQgUgxhEAcIAAgGQBGgfAUA2IABAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_138.setTransform(350.7,408.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#846D56").s().p("AgfAJIAAgGQAcgJAdgHIAGAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAQggALgeAOIAAgFg");
	this.shape_139.setTransform(342.9,410.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#8A6E52").s().p("AAKAQQgQgNgIgTQARAKAKASQACACgBAEQgCAAgCgCg");
	this.shape_140.setTransform(337.2,387.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#8E745C").s().p("AAJANQgQgHgGgTQAPAJALANIABAGIgFgCg");
	this.shape_141.setTransform(340,390.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#816952").s().p("AAeAkQgjghgdgnQAmAeAdAnQACACAAACQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_142.setTransform(344.9,395.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#7E654E").s().p("Ag8AUQAzgdBAgPIAGgBQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQg/AWg5AaIAAgGg");
	this.shape_143.setTransform(342.3,405.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#81654C").s().p("AADAMQgBgUgKgJQAYACgKAfQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAgFg");
	this.shape_144.setTransform(319.2,409.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#8E7558").s().p("AgzgLQAzASAugBIAGAAIgBADQgPADgOAAQgoAAghgXg");
	this.shape_145.setTransform(314.3,410.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#8A6C4F").s().p("AATAfQgZgbgQgjQAaAZASAhIABAFIgEgBg");
	this.shape_146.setTransform(333.4,382.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#8B7056").s().p("AAFAQQgJgNgEgTQANAKADASIAAAFQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_147.setTransform(330.2,377.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#715C47").s().p("AgzAsQAugmAhgxIABgFQAVAHACAbIAAAHQgGgHgCgHIgEgKQgnAug0AiIAAgFg");
	this.shape_148.setTransform(324.1,376.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#927254").s().p("AAOAIQgVgDgMgNQAXADAPAKQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgGAAg");
	this.shape_149.setTransform(316.3,407.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#8A6F57").s().p("AAdAIQglgCgagOQAlADAfAKQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAABIgGgBg");
	this.shape_150.setTransform(310.8,405.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#8C7158").s().p("AgTAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAQAAgBAAgBQALAIAWAAIAAADIgFAAIgNACQgOAAgHgHg");
	this.shape_151.setTransform(305.3,408.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#8A7358").s().p("AgTAGQANgMAVgEIAFgBQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgmATIAAgGg");
	this.shape_152.setTransform(304.2,390.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#98795D").s().p("AgrAAQAngEApgBIAHAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgFAAQgkAEgnACIAAgGg");
	this.shape_153.setTransform(299.6,408.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#997B5E").s().p("AglARQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAfgRAggPIAGgBQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQgkAWglAUIAAgGg");
	this.shape_154.setTransform(289.7,412.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#8C735B").s().p("AgWADQAQgJAXgCIAGAAQAAABAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQgXAGgVAIIAAgGg");
	this.shape_155.setTransform(293.5,405.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#A08163").s().p("AA0AFQg3gJg2AKIAAgGQA5gLA5AOIABADIgGgBg");
	this.shape_156.setTransform(301.6,404);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#8A7056").s().p("AgWALIAAgFQAVgKATgLIAFgBIgBAEQgWAPgWAOIAAgGg");
	this.shape_157.setTransform(288.9,408);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#1B130D").s().p("Ai1AzIAAgGIAFgGIABgFQAOgMANgNQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAXgOAWgQIABgEQAVgIAYgGQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQA2gLA3AKIAGABQAaAOAlADIAGAAQANAOAWADIAGAAQALAJAAATIAAAGIgGAAQgtACg1gTIgFAAQgNADABgIIAAgDQgXAAgMgJIgGAAQgqABgmAFIAAAGIAAACQgIADgJAAIgFABQgiAPgeASQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBABQgOAMgKAAIgGgCg");
	this.shape_158.setTransform(301.3,409.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#856B53").s().p("AgRAlIAAgRQARgcAOghQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIgBAFQgPApgSAnIAAgGg");
	this.shape_159.setTransform(279.6,414.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#826952").s().p("AgOARIAAgGIAZggQAAAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQAAADgBACQgLAXgQARIAAgGg");
	this.shape_160.setTransform(282.8,408);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#765E4A").s().p("AgLAJIAAgGQALgGAHgJQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAQgBACgBADQgHANgOAKIAAgGg");
	this.shape_161.setTransform(285.4,404.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#957A60").s().p("AgZAJQAWgMAXgJIAGgBQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgYAOgaAKIAAgFg");
	this.shape_162.setTransform(299.6,393.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#856B55").s().p("AgiAXQAdgbAjgXIAFgBQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQggAcgjAZIAAgGg");
	this.shape_163.setTransform(290,399.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#7E6549").s().p("AgQAGQANgJAPgHIAFgBQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgOALgSAHIAAgGg");
	this.shape_164.setTransform(295.2,395.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#7D634B").s().p("AgQAFQAQgGANgJIAEgBQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQgMANgUAFIAAgHg");
	this.shape_165.setTransform(315.5,383.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F9C999").s().p("AAeDfQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBAAAAgBQgTgcguABIAAgDQgggDgfAAIgGAAQhkgEhVAKIgGAAQgbACgZAEIAAAFIgFABIgHAFIAAAGQgDAAgCABQgDACgDADIAAAFIAAAGIgGgBQgRgHAFggQATgoAPgqIABgFQARgRALgYQABgCAAgDQAOgJAIgPQABgCAAgDQAkgZAggcQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQATgHAOgMQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAcgKAXgPQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAogUQAAAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQAVgIASgLQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQATgHAOgMQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAVgFAMgOQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQALgBAFgGIABgFQA1giAngvIAEAKQACAHAGAGQADAUAKANQABABAAAAQAAAAABAAQAAAAABABQABAAAAAAQAQAkAaAaIAFABQAIAVAQANQACABADAAQAGAUARAIIAFABQAdApAkAhQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQASAWgRAIIgBAEIgGABQhBAOgzAfIAAAGIgFAAQgJArArgIIAGAAQAegOAhgMQAAAAAAgBQABAAAAAAQAAAAAAgBQAAgBAAAAIAAgGQBFgcAUAyQAAAAAAABQABAAAAAAQAAAAABAAQABAAAAAAQAEATAHAQIABAGIgBAFQgMAUgngIIAAAGIgGAAQg8ADg9ACQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQglAJgUAXIAAAdIAAAGIgGABQghAJgwgEIAAAFIgFABQgLAFgIAAQgXAAAHgogAkDA9IAAAGIgFABQgTALgWALIAAAFIAAAGQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQgNANgPALQAAAAgBAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgHAMgNAFQAAALADALQAAAAAAAAQABAAAAAAQAAABABAAQAAAAABAAQAWgIAOgOIAEgBQAmgVAkgWQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAIAAAIgCIABgEQAmgCAlgDIAGAAQAKAKAZgEIAFgBQAAAKAMgDIAGgBQAtAgA5gLIABgDQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAKgggZgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgOgLgYgCQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgfgLgmgDIAAgDQg7gPg4AMIAAAGIgGAAQgYACgRAKg");
	this.shape_166.setTransform(317.1,399.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#937559").s().p("AgTAGQAPgJATgHIAFgBQAAABAAABQAAAAAAABQAAABgBAAQAAAAAAABQgSAKgUAIIAAgGg");
	this.shape_167.setTransform(308.2,388.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#846B53").s().p("AgQAGQANgKAPgFIAFgBQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgOAMgSAGIAAgFg");
	this.shape_168.setTransform(312,386.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#282C2B").s().p("AgIAAQAAAAAAgBQAAAAAAAAQAAgBAAgBQgBAAAAgBQAUAJgCAAIgRgFg");
	this.shape_169.setTransform(292.1,339.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#262A29").s().p("Ag1AAIgBgCQBBgHArAJIABADQgYADgWAAQgfAAgfgGg");
	this.shape_170.setTransform(284.5,339.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(12,12,12,0.447)").s().p("AAxADIhnAAIAAgFQA2AAA3ACIAAADIgGAAg");
	this.shape_171.setTransform(287.4,334.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(44,45,45,0.773)").s().p("AAHANQgNgKgEgQQAOAHAGAPIABAFIgEgBg");
	this.shape_172.setTransform(354.2,356.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(47,47,49,0.82)").s().p("AgIgLIAPAMQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgCAAQgHAAgEgXg");
	this.shape_173.setTransform(356.2,358.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(1,1,1,0.447)").s().p("ABgADIjEAAIAAgFQBkAABlACIAAADIgFAAg");
	this.shape_174.setTransform(311.7,333.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(58,58,59,0.851)").s().p("AACAQQgJgLACgVIAGAAQAEAMABAPIAAAGQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_175.setTransform(399.3,507.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#25292A").s().p("AjPJvQABhKgGg7IgBgGQgUgMgTAOQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQgLArgeAZQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAgBAAQgMgVACg2QAGiXAQiEQA+BYAKB4IADAAQAhgngTg+QgXhNgmg5Qgng8ARhiQgsgOgHg7QgBgNgGgRQAUhMAXhJQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQBSgjA/gyIAAAEQAJgfAVgUQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAQASgxAbgnIABgFQApBiAxBYIABAFQAQABAEAQIAEAAQBECGgvCkQgBAIAIARQAPATALgSQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQANhaAFhMIAAgHQgYh7g4hbIgBgFQg5hEgdheIAAgGQAHghAPgZQABgDAAgDQAVgUARgsIABgFQAcA+AdA8IABAGQBJBEA4BWQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAQA5AMA3QADAMAhADIAdgfIAAADQAYAtANA6QAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQgkC/g3CpQgOAsgFAuQgOgdgngWIgEgBQgVAfgDAhIAAAFQAZAzARA/QAIAcAPAZIAcAvQhkgphHhFIgDAGQgjAOAcAcQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAaAbAfAVQAAABABAAQAAAAAAABQAAAAAAABQABABAAABQgcAXg1gBIgHAAQgWgLgigDIAAgDQhJA/hwAVg");
	this.shape_176.setTransform(361.7,530.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#7B614C").s().p("AgKARIAAgLQAOgHAFgVIACAAIAAAGQgGAYgPAPIAAgGg");
	this.shape_177.setTransform(358.3,468.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(35,35,35,0.588)").s().p("AgDAcQgDgZAAgZQADgDADgCQACgBADAAIABAGQADAPgJACIAAAcIAAAGIgDgBg");
	this.shape_178.setTransform(379.1,460.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(9,9,9,0.412)").s().p("AgCBLIAAgGIAAiPQAJBEgHBRg");
	this.shape_179.setTransform(384.5,433.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#96765A").s().p("AADAaIgIgzIAFAAQAFAVABAYIAAAGIgDAAg");
	this.shape_180.setTransform(361.7,455.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#524034").s().p("AgDAlIAAgFIAAgoIAAgFIAAgYQAKAcgEApIgBAFIgFAAg");
	this.shape_181.setTransform(361.5,449.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#715A46").s().p("AAAArQgDgoAAgoIAAgFQAJASgEAgIAAAGIAAAYIAAAFIgCAAg");
	this.shape_182.setTransform(360.9,444.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F9C898").s().p("AhCFgIgGAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQgTgIgUgGQgDAAgCgBQgEgCgDgDIAAgFQgHghgQgZIgBgGQgMgvgbgiIgBgFQgJgZgTgQIgBgFQgcgvgpgjIgBgEQgigbgWglIgBgGQgKgYgNgWIAAgGQgSg5gWg1IgBgGQgKgvgGgzIAAgGIAAguIAFAAIAGAAQAUAgAJArIAAAGQBOA0CUgMQBQgGA1gcQAUgGAGgSQACgCAAgDQAOggAGgrIADAAQAfgHAmABIAGAAQAYBPAVBTIABAFQACAWAGASQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAGQADAUgPADIAAAGQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAgBAAIgGAAIg0AAIAAgDQgOgCgOAAQAGAzBLgNQAigHAMgaQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQANgggQgYIgDAAQgBgrgOgbIAAgGIAAgFQB3AQB2gFIAGAAQAAApADAoIADAAIAAApIAAAFIAJA0IADAAIAAAGQABAwgeAPIAAAGIAAAFIgDABQgFAVgPAHIAAAMIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIgDABQgEAQgLAHIAAAFIAAAGIgBAFIgWAeIAAAGIAAAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgJAPgLAMIAAAGIAAAGQAAADgBACQgNAYgVARIAAAGIAAAGQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAgBAAQgIATgRAJIAAAFIAAAGQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAQgVAZgaATIAAAGIgGABQgkAVgzAHIAAAGIgGAAIgIAAQhSAAhBgSgAAqCzQASAHASADIABgBQAUgFATgGQArgPAmgXIAGADQAJgLAGgOQAEgGACgHQAGgRAKgKIAEgEIADACIABgGIABgGQAbgBgMgmQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgHgIgJgFIAAgDQgXgDgGARQgEgMgNgDQhNgRhsAKQAAABAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQgaALgYAOIAAAGIgFgBIgvgRIAAAGIgBAFQgFAHgLAAIgGABIgGAEQgEAqAhAEIAGABQAIAWAPAPIAFADIABAAIAAABIABAAQAfASAZAUQABABAAABQABAAAAABQAAAAgBAAQAAABAAAAIABABIACABIAQALIAGgBQAGAAAHADg");
	this.shape_183.setTransform(319.8,465.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#896647").s().p("Ah2ACIAAAGIAAAGQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgCgIAAgIIAEgGIABgFQAWAHAZAEIAFAAQAcAJApgEIAGAAQA+gBAwgOIAFgBIAAAQIAAAGIAAAGIgGAAIg3ABQhZAAhcgNg");
	this.shape_184.setTransform(348.1,439);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F1C498").s().p("AARBkQglgDglAAIgFAAQgZgEgWgHQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgGQAEgegKgQIgDAAQABgcgJgRIAAgGIAAguQAsgsBCAPIgFACQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIgFABQgTASgRAVIgCABQgJAWgRAMIAAAFIAAAGIgDAAQABAMgKgBQADAGAEAEQABAAAAAAQABAAAAABQABAAAAAAQABAAABAAIA0AGIAFAAQAUAKAfgHIAAgDIASAAIAGAAQAvgNAoAWQAFADACALQABADADADIAAAdIAAAGIgFABQgxAPg9ABIgBgDgAhzgXIAAAJQAXgVgDAAQgDAAgRAMg");
	this.shape_185.setTransform(347.3,428.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#856E57").s().p("AAuAOQgDgLgEgDQgngVgwANIAAgGQAxgNArAWQAFADAAALIAAALQgDgDAAgDg");
	this.shape_186.setTransform(355.6,432);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F6F5F4").s().p("AgWACIAAgFIAAgSQAQgBAHAGQACABADAAIAGAAIAFAAQAIAKgCASIAAAGIgFABQgKACgIAAQgVAAgBgUg");
	this.shape_187.setTransform(357.1,424.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#414244").s().p("AgWgCIAnAAIAGAAIAAACQgXADgWAAIAAgFg");
	this.shape_188.setTransform(357.1,427.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#ADAAA9").s().p("AAUAMIgnAAIgEgBQgCgLAAgLIAGAAQABAbAmgJIAGgBIAAAGIgGAAg");
	this.shape_189.setTransform(356.8,426);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#5A5857").s().p("AAAAOIAAgFQACgTgHgJQASAHgKAfQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAgGg");
	this.shape_190.setTransform(359.4,425.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#6D6C6E").s().p("AAMAJIgGAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgMgFgJgIQAXgBAJANIABAFIgFAAg");
	this.shape_191.setTransform(357.1,422.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(46,46,46,0.651)").s().p("AAEANQgLgIgBgSQAPAEACASIAAAFQgDABgCgCg");
	this.shape_192.setTransform(375.3,402);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(39,40,40,0.588)").s().p("AACAQQgHgNAAgTQAMAHgBAUIgBAGQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_193.setTransform(368.7,384.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#242728").s().p("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");
	this.shape_194.setTransform(304.8,465.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(17,16,16,0.984)").s().p("AsoUvIAAgvIgBgFQgIg1AagRIABgGQAUinAIiXQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQg+gogpg9IgBgFQgEgQgNgIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgYglgNgwIAAgGIAAioIAAgFQAdhWArhLIADgBQAQgLABgYIAAgGQARgyAXgqIABgGQANgIgBgVIAAgGIAAgFIAAgGQAKgFgEgSIgBgGIAEAAQAGgegKgQIAAgGQAAgdgLgSIADAAQAGgcgPgLIAAgFQACgQgIgIIABgFQABgWgNgIIgBgFQgDgTgCgWIAAgFQABgWgMgIIAAgFIACAAQAHg+gJgwIAAgGQAOgIgGgaIgDgBIAAgFIAAgRQANgDgBgPIAAgFQANgIgBgVIgBgHIAAgFIAAgGQAag1AOg/IAAgGIAEAAQAHhagLhNIAAgGQAPgDgCgUIgBgFIAAgHIAAgLQAHgtAPgkIABgGQANgHgBgWIAAgGIAAgFQAfhiA3hNIAAgEQAQgMAHgSIABgFIAAgGQAsgxAxgqQABAAAAgBQABAAAAAAQABAAABAAQAAgBABAAQASgEAKgOQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQBShICJgSIAAgDIBpAAIAFAAQAugBAjgKIAGgBIDEAAIAGAAQDGA+BwCTQACADAAADQAFARANAKIAFABQAFAeALgJQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAPANAGAWIABAFQAJAXAQAQQAAAAABABQAAAAABAAQAAAAABAAQABABABAAQAjBBAWBPIAAAGQAAAUAIANQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQAIBZAsAzIAAAFQABAUAMAIQACABADAAQA5BdAYB+IAAAHIAACQIAAAFIAAAGQgEA5gZAkIABAGQAEAngWANIAAAFQgDAAgDACQgDABgDADQAAAaADAaIADABQBGCiBXCSQAfA0APBCIgHAAQgCAXAKAKQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAABLIAAAGIgFAAIgHAAQAAAPADANQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAIgBAFQgIApgDAvIgEAAQgmBygnBvIAAALIAAAGIgGAAIAAAvIAAAFIgDAAQANBkg4gYQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgLgCgMgBQAAAPADAOIAEAAQAMA/AhAqIABAGQAFAXASAKIAGABQAKAKAFAOQACAIgDABQhFAcgyggIgFABQgoALgeAXIgGAAIiEAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAQg8Aig9AgIgFAAQgwAJgngJIgDgBQgDglAAglIADAAQADglgSAZIAAAGQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgKAJgMAJIgFABQgSACgLAIQADASAFARQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAnAngyAAQoFAIoFgBIAAgFgAqlNsQAPApgGBGQgPDCCvAqIABADQAhAVAYAcIADAAQABg5gQgpQABgEABgCQAPgbAvAVIADAAQABgZAUghIAEABQAkATARAmQADAAACACQAmAcAxAQIAEAAQABhJAZgwQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAngkArggQAAgDABgBQAUghAOgmIABgDQAggSANAhIAAAMIAAAFQAcgWgOhNQgJgqgSgiQgvhYgJhlIABgEQAmgeAHA5IAAAGQA0hNgRh9QgRh1gzhWQh2jKinicQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgcgeAZgeIAEABQAxAdAVAcQgXg3gKhDQgpj+B4iWQABAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQANgNALgOQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQAFgOAVAEQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQASgRAPgTQADAAACgBQBVg2BegsQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAMgHAEgMIAGgBIAvgXQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIAzgqQAAgDABgCQAkg0gPhMIABgFQABgjAWALQAVAGACASQAZCPBJBXQABAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAUAcAcARIABAFQAJAJACAPQBJAwApBQQAcA1ATAgQgBAcAMAkQALAjAAAiQABD8BBC1IgHg5QgIhKADhXQADhMAfguQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABIAEACQgDBCgHBaQgKBuAkBLQAbA7gTAgQAAABAAABQAAABAAAAQAAABAAAAQABABAAAAQBCA9ArBVIAAACQAqgEAEAfIAGACQhUiRhKijQgdhCAZhDQAjgIAIhDQAejzhniiIgDAAQADgWgWAFIgCgFQgGgKABgUQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgHgLgMgFQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAIgng8QABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAQANgUAGgZQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgQhUgshNQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQgQgWgDgXQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgPgRgKgXIgGAAQgPgBgOgPQAFgfgfgSQgagQAAgWIgMgOQgUgYglgIQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgFgXgggRQgDAAgCgCQiUhPjBAiQAEANgJgBQg1gBAYANIAAALQgBASgugCQhagEhZAiQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgWAbgigOIgDAAQA4g0A5gXIAAgDQhIAXhDAgIgCAAQAPAKgTAHIAAgDQgpARgiAbQAAACgBACQgOAYgZAMQAAADgCACQgfA6grAvQACANAFAEIgCADQgzBRgaBrQgKAngNAtQgVBGA7AIQAOAjgdAsQgWAjgSAsQgjBMgOBqQgLBQAcA2QAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABQgJALAEAZIADAAQAAAiAUALIABASQAIA7AAAgQAGDOhXB4QghAwAHAfQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgfAdgIA1IAAAGIAABoQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAYBAAeA5IAFABQAbAWAVAcIAEABQAVAMAVALIABAEQAXAmAcgIIAEAGgAFJReIABAGQAHA8gBBKIAAACQBwgVBIg+IAAACQAjADAXAMIAGAAQA1ABAcgYQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgfgVgZgcQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQgcgdAjgOIADgFQBGBEBlAqIgcgvQgQgZgIgcQgQhAgZgyIAAgGQADghAUgfIAFABQAnAXAOAcQAFguAOgsQA2ioAljBQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgMg7gZgtIAAgDIgdAgQghgEgDgLQgMg4gQg4QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQg4hVhKhFIgBgFQgdg8gbg/IgBAGQgTAsgVAUQAAADgBACQgOAagHAhIAAAFQAdBfA5BDIACAFQA3BbAYB8IAAAGQgEBNgOBaQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgKASgQgTQgIgQACgJQAuilhEiGIgDAAQgEgPgRgCIgBgEQgyhZgphiIgBAGQgbAmgSAxQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQgVAUgKAfIAAgDQg/AyhSAiQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgYBKgTBMQAFAQACANQAHA9ArANQgRBjAoA8QAlA5AYBNQASA9ghAnIgCAAQgLh4g9hXQgQCDgHCXQgCA2ANAWQABAAAAAAQABAAABAAQAAgBABAAQAAAAABAAQAegZALgsQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAKgIAKAAQAJAAAJAFgAARMsIAAAGQABBTAbA4QACADAAADQgjAMAiAuQAKAPANgKQgSg/BGgDIAAgDQgagoAbgRQACgBAEAAQgKggADgaIAAgFIgZg5QAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgeAAgVAOQAAAAgBABQAAAAAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgKARgKgSIAAARgACFKmIAGACQASAGAngDIAAgDQAChIggglQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgLgKgIgLIAAgEQgmgCgggGQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQgPgJgYACIAAAWIAAAHIgGAAIAAAcIAAAGIgDAAQABAPgJADIAAALIAAAFIAAAGQADAQgJACQgDAhAmgJIAFgBIARANQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABQASgJATAAQATAAATAHgAAXF6QAHA6AKAjIABADQBOARA8AgIABgFQAShHAKgzIAAgDQhXAOhigiIAAAFgAA0FSIAGAAQA9AfBlgKIAAgDQA5gEAigbQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAigQARgfIABgFQAVgLAHgYIABgGIAAgFIAAgGQAVgRANgYQABgDAAgDQAQgMAHgXIAAgFIAAgFIAAgHIAWgdIABgFQAQgIABgVIAAgGQABAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAQgPAGgaIAAgFIAAgGIAAgGQAfgQgBgvIAAgGIAAgGQgBgZgFgVIAAgGQAEgqgLgbIABgGQAEghgKgTIAAgFIAAgSIAAgGIAAgcIAAgMQAAgMgFgCQgsgXgxAOIAAAGIgGAAIgSAAIgFAAIgvAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQgZgNgfALQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgEgEgDgGQAKABgBgNIADAAQAWgNAGgbIAAgGQARgVATgSIAFgBQAlgPAsgLIAAgDIAXAAIAGAAIAAAFQAOAbAMgbIgDAAIAAgFQAEgSgJgFIgBgGQgBgZgQgKIgBgFQgUg3hHAfIAAAGIAAAGIgGABQgfAGgbAKIAAAGIAAAGIgGABQgrAHAIgrIAGAAQA4gbBAgWQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAGgBQAZgRgfgRQABgCgCgCQgdgogngeIgBgGQgMgOgQgJQABgEgCgCQgKgTgSgKIgBgGQgSghgbgZIAAgGQgEgSgNgKIAAgHQgCgbgWgHIgBAFQghAygvAmIAAAFIgBAFQgEAHgMAAIgEABQgOAJgQAHIAAAGIgGABQgQAGgNAKIAAAGIgGABQgTAGgPALIAAAFIgFAAQgVAFgOAMIAAAHIgGAAQgYAKgWAMIAAAGIgGABQgQAGgNAKIAAAHIgEABQgkAWgdAcIAAAGQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQgJAJgKAHIAAAHIAAAFQgBAAAAAAQgBAAgBAAQAAABAAAAQgBAAAAAAIgZAhIAAAHIAAAFQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgOAhgRAdIAAARIAAAGIgGAAQgKAqAcAEIAGAAIACAAQABAdghgMQANAyAYgZQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQATAKAhgHIAAgDQALgGALgIQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAUgWAZgPQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQANgFAQgEIABgDQAogMA0ABIAGAAQAXAJAXAMIAEACQALASAUAJQACACACAAQAGARANALIAFABQAVAkAOgtIAFADQACAJAPgBIAAADQAAAAgBABQgBAAAAAAQAAAAgBAAQAAABAAAAQgSAVgBAkIAAARIAAAFIgGABQgSAIAGgrIADAAQgegkgxAeIgFAAIgzAAIgGAAQhpgEhhgNIgGAAIgXAAIAAAGQgDAAgCgCQgJgGgPACQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgIgDgJAAIgFAAQAAAdACAdIADAAQADA5ASAuQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQALBAAZAyQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQACAhARASQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQAMAvApATIAFACQAeAtAkAoQAAAAAAABQABAAAAAAQAAAAABAAQABAAAAAAQAKAbAQASQAAABAAAAQAAAAABABQAAAAABAAQABAAAAAAQASAsAUAqQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAGAjANAbQABAAAAAAQAAABABAAQAAAAABAAQAAAAAAAAQADADADACQADABADAAQAIASAbgBIAFAAgAhImUQAZAhAfALQAWgBAXgCIAAgDQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBIABgEIAFgBQAVgog8gRQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgEgCgHAAIAAgEQg4AFgqgBIAAAFIAAADQgUABgJAIIAAAFQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgKAKgMAJIgFABQgEABgDADQAMAdAzgOIABgDQAnAAgEgigAG3nKQgiAFgdAMIAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIAAAGQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgEAJgKACQgDAUAOACIAGAAIAGAAQAAAKAMgDIAGAAQAigGAAgmIAGADIAAAFQAQAQAEACQAMAGAOAAQAXAAAXgDIAAgDQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAJghgSgGIgBgGQgKgNgYABIAAgDQgSgCgRgBIgGABgAigz2QAlANgmgRQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABgAkaz6IAAADQA2AKA3gHIAAgDQgagGghAAQgXAAgbADg");
	this.shape_195.setTransform(307.4,466.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(44,44,44,0.706)").s().p("AAKATQgPgQgJgWQASANAJAVIACAFQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_196.setTransform(360.9,365.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#2D0C0B").s().p("AhMA7Ig/gTQgDAAgCACQgLgNgGgRIgBgDQgegHAIgpQALAAAFgHIABgFQBDAcBqgFQBVgEA/gYIAFgEQADgCAFAAQAJAFAHAIQABAAAAAAQAAABAAAAQAAABABAAQAAABAAABIAAAGQAHAbgTACIAAAFQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABQgOAbgPAaQgLAAgNAFQgNAFgOAAQg9ACg8AAIgCAAIgOABQgPAAgOgEgAiQgFQA0AlBogHQAjgDAWgKIAXAAIAGAAQAeAEAJgQIABgFIAAgFIAAgDQgrgDgrAAIgGABQgTAGgbgBIgFAAIgRAAIgBgDQgcgDgdAAIAAAGIgGAAIgMAAIgFgBIgMAAQgSAAgLAGg");
	this.shape_197.setTransform(327.6,472.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F9C898").s().p("AhCFgIgGAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQgTgIgUgGQgDAAgCgBQgEgCgDgDIAAgFQgHghgQgZIgBgGQgMgvgbgiIgBgFQgJgZgTgQIgBgFQgcgvgpgjIgBgEQgigbgWglIgBgGQgKgYgNgWIAAgGQgSg5gWg1IgBgGQgKgvgGgzIAAgGIAAguIAFAAIAGAAQAUAgAJArIAAAGQBOA0CUgMQBQgGA1gcQAUgGAGgSQACgCAAgDQAOggAGgrIADAAQAfgHAmABIAGAAQAYBPAVBTIABAFQACAWAGASQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAGQADAUgPADIAAAGQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAgBAAIgGAAIg0AAIAAgDQgOgCgOAAQAGAzBLgNQAigHAMgaQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQANgggQgYIgDAAQgBgrgOgbIAAgGIAAgFQB3AQB2gFIAGAAQAAApADAoIADAAIAAApIAAAFIAJA0IADAAIAAAGQABAwgeAPIAAAGIAAAFIgDABQgFAVgPAHIAAAMIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIgDABQgEAQgLAHIAAAFIAAAGIgBAFIgWAeIAAAGIAAAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgJAPgLAMIAAAGIAAAGQAAADgBACQgNAYgVARIAAAGIAAAGQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAgBAAQgIATgRAJIAAAFIAAAGQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAQgVAZgaATIAAAGIgGABQgkAVgzAHIAAAGIgGAAIgIAAQhSAAhBgSgAhZARIgBAFQgFAHgLAAIgGABIgGAEQgEAqAhAEIAGABQAGARALANIgDADIA+AbQBbAoBcgfIAzgbIABABIAIgBIgHgGIgGADIgCAAIAOgKQAJgUAGgVIABgGQAbgBgMgmQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgHgIgJgFIAAgDQgXgDgGARQgEgMgNgDQhNgRhsAKQAAABAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQgaALgYAOIAAAGIgFgBIgvgRIAAAGg");
	this.shape_198.setTransform(319.8,465.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#2D0C0B").s().p("Ag1A8IgUgCQgfgCgYgTIgKgHIgQgFQgEgIgDgJIgBgDIAAAAQgegGAIgqQALAAAFgHIABgFQBDAcBqgFQBVgEA/gYIAFgEQADgCAFAAQAJAFAHAIQABAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAAAGQAHAbgTACIAAAFQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAABIgHAMIAGACIAAAAQAEABgEAEIgDAEIgFAEQgnAlg1AHQgZADgZAAQgkAAgkgHgAiQgJQA0AlBogHQAjgDAWgKIAXAAIAGAAQAeAEAJgQIABgFIAAgFIAAgDQgrgDgrAAIgGABQgTAGgbgBIgFAAIgRAAIgBgDQgcgDgdAAIAAAGIgGAAIgMAAIgFgBIgMAAQgSAAgLAGg");
	this.shape_199.setTransform(327.6,472.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#84674E").s().p("AAMAaQgggEAEgpIAGgFIAGgBQgIApAdAHIAAAAIABADIgGAAg");
	this.shape_200.setTransform(309.6,470.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F9C898").s().p("AhCFgIgGAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQgTgIgUgGQgDAAgCgBQgEgCgDgDIAAgFQgHghgQgZIgBgGQgMgvgbgiIgBgFQgJgZgTgQIgBgFQgcgvgpgjIgBgEQgigbgWglIgBgGQgKgYgNgWIAAgGQgSg5gWg1IgBgGQgKgvgGgzIAAgGIAAguIAFAAIAGAAQAUAgAJArIAAAGQBOA0CUgMQBQgGA1gcQAUgGAGgSQACgCAAgDQAOggAGgrIADAAQAfgHAmABIAGAAQAYBPAVBTIABAFQACAWAGASQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAGQADAUgPADIAAAGQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAgBAAIgGAAIg0AAIAAgDQgOgCgOAAQAGAzBLgNQAigHAMgaQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQANgggQgYIgDAAQgBgrgOgbIAAgGIAAgFQB3AQB2gFIAGAAQAAApADAoIADAAIAAApIAAAFIAJA0IADAAIAAAGQABAwgeAPIAAAGIAAAFIgDABQgFAVgPAHIAAAMIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIgDABQgEAQgLAHIAAAFIAAAGIgBAFIgWAeIAAAGIAAAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgJAPgLAMIAAAGIAAAGQAAADgBACQgNAYgVARIAAAGIAAAGQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAgBAAQgIATgRAJIAAAFIAAAGQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAQgVAZgaATIAAAGIgGABQgkAVgzAHIAAAGIgGAAIgIAAQhSAAhBgSgAhZARIgBAFQgFAHgLAAIgGABIgGAEQgEAqAhAEIAGABQADAJAFAIIAQAFIAJAHQAYATAeACIAUACQA9AMA+gIQA1gHAoglIACAAIACgEIADgEQAEgEgEgBIAAAAIADgLIABgGQAbgBgMgmQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgHgIgJgFIAAgDQgXgDgGARQgEgMgNgDQhNgRhsAKQAAABAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQgaALgYAOIAAAGIgFgBIgvgRIAAAGg");
	this.shape_201.setTransform(319.8,465.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_172},{t:this.shape_173},{t:this.shape_196},{t:this.shape_148},{t:this.shape_166},{t:this.shape_147},{t:this.shape_146},{t:this.shape_140},{t:this.shape_141},{t:this.shape_193},{t:this.shape_134},{t:this.shape_133},{t:this.shape_174},{t:this.shape_169},{t:this.shape_170},{t:this.shape_171},{t:this.shape_136},{t:this.shape_135},{t:this.shape_162},{t:this.shape_152},{t:this.shape_164},{t:this.shape_165},{t:this.shape_168},{t:this.shape_167},{t:this.shape_149},{t:this.shape_158},{t:this.shape_150},{t:this.shape_156},{t:this.shape_151},{t:this.shape_101},{t:this.shape_86},{t:this.shape_145},{t:this.shape_144},{t:this.shape_153},{t:this.shape_155},{t:this.shape_163},{t:this.shape_161},{t:this.shape_160},{t:this.shape_157},{t:this.shape_154},{t:this.shape_67},{t:this.shape_66},{t:this.shape_70},{t:this.shape_71},{t:this.shape_72},{t:this.shape_83},{t:this.shape_79},{t:this.shape_68},{t:this.shape_56},{t:this.shape_55},{t:this.shape_69},{t:this.shape_60},{t:this.shape_65},{t:this.shape_58},{t:this.shape_77},{t:this.shape_78},{t:this.shape_59},{t:this.shape_57},{t:this.shape_100},{t:this.shape_85},{t:this.shape_75},{t:this.shape_95},{t:this.shape_96},{t:this.shape_99},{t:this.shape_98},{t:this.shape_198},{t:this.shape_97},{t:this.shape_84},{t:this.shape_81},{t:this.shape_82},{t:this.shape_80},{t:this.shape_76},{t:this.shape_74},{t:this.shape_73},{t:this.shape_53},{t:this.shape_159},{t:this.shape_63},{t:this.shape_128},{t:this.shape_64},{t:this.shape_61},{t:this.shape_62},{t:this.shape_131},{t:this.shape_129},{t:this.shape_130},{t:this.shape_54},{t:this.shape_50},{t:this.shape_197},{t:this.shape_52},{t:this.shape_46},{t:this.shape_43},{t:this.shape_42},{t:this.shape_45},{t:this.shape_44},{t:this.shape_30},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_41},{t:this.shape_132},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_6},{t:this.shape_5},{t:this.shape_39},{t:this.shape_40},{t:this.shape_38},{t:this.shape_17},{t:this.shape_25},{t:this.shape_23},{t:this.shape_24},{t:this.shape_18},{t:this.shape_16},{t:this.shape_15},{t:this.shape_22},{t:this.shape_8},{t:this.shape_7},{t:this.shape_21},{t:this.shape_19},{t:this.shape_20},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_4},{t:this.shape_192},{t:this.shape_179},{t:this.shape_142},{t:this.shape_143},{t:this.shape_137},{t:this.shape_138},{t:this.shape_139},{t:this.shape_114},{t:this.shape_185},{t:this.shape_118},{t:this.shape_116},{t:this.shape_117},{t:this.shape_115},{t:this.shape_108},{t:this.shape_105},{t:this.shape_106},{t:this.shape_103},{t:this.shape_94},{t:this.shape_102},{t:this.shape_93},{t:this.shape_184},{t:this.shape_92},{t:this.shape_109},{t:this.shape_187},{t:this.shape_191},{t:this.shape_112},{t:this.shape_189},{t:this.shape_190},{t:this.shape_188},{t:this.shape_110},{t:this.shape_186},{t:this.shape_113},{t:this.shape_111},{t:this.shape_107},{t:this.shape_104},{t:this.shape_87},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_36},{t:this.shape_177},{t:this.shape_176},{t:this.shape_90},{t:this.shape_91},{t:this.shape_89},{t:this.shape_88},{t:this.shape_35},{t:this.shape_34},{t:this.shape_31},{t:this.shape_32},{t:this.shape_26},{t:this.shape_27},{t:this.shape_37},{t:this.shape_33},{t:this.shape_178},{t:this.shape_175},{t:this.shape_3},{t:this.shape_29},{t:this.shape_28},{t:this.shape_10},{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_172},{t:this.shape_173},{t:this.shape_196},{t:this.shape_148},{t:this.shape_166},{t:this.shape_147},{t:this.shape_146},{t:this.shape_140},{t:this.shape_141},{t:this.shape_193},{t:this.shape_134},{t:this.shape_133},{t:this.shape_174},{t:this.shape_169},{t:this.shape_170},{t:this.shape_171},{t:this.shape_136},{t:this.shape_135},{t:this.shape_162},{t:this.shape_152},{t:this.shape_164},{t:this.shape_165},{t:this.shape_168},{t:this.shape_167},{t:this.shape_149},{t:this.shape_158},{t:this.shape_150},{t:this.shape_156},{t:this.shape_151},{t:this.shape_101},{t:this.shape_86},{t:this.shape_145},{t:this.shape_144},{t:this.shape_153},{t:this.shape_155},{t:this.shape_163},{t:this.shape_161},{t:this.shape_160},{t:this.shape_157},{t:this.shape_154},{t:this.shape_67},{t:this.shape_66},{t:this.shape_70},{t:this.shape_71},{t:this.shape_72},{t:this.shape_83},{t:this.shape_79},{t:this.shape_68},{t:this.shape_56},{t:this.shape_55},{t:this.shape_69},{t:this.shape_60},{t:this.shape_65},{t:this.shape_58},{t:this.shape_77},{t:this.shape_78},{t:this.shape_59},{t:this.shape_57},{t:this.shape_100},{t:this.shape_85},{t:this.shape_75},{t:this.shape_95},{t:this.shape_96},{t:this.shape_99},{t:this.shape_98},{t:this.shape_201},{t:this.shape_97},{t:this.shape_84},{t:this.shape_81},{t:this.shape_82},{t:this.shape_80},{t:this.shape_76},{t:this.shape_74},{t:this.shape_73},{t:this.shape_53},{t:this.shape_159},{t:this.shape_63},{t:this.shape_128},{t:this.shape_64},{t:this.shape_61},{t:this.shape_62},{t:this.shape_131},{t:this.shape_129},{t:this.shape_130},{t:this.shape_54},{t:this.shape_200},{t:this.shape_199},{t:this.shape_52},{t:this.shape_46},{t:this.shape_43},{t:this.shape_42},{t:this.shape_45},{t:this.shape_44},{t:this.shape_30},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_41},{t:this.shape_132},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_6},{t:this.shape_5},{t:this.shape_39},{t:this.shape_40},{t:this.shape_38},{t:this.shape_17},{t:this.shape_25},{t:this.shape_23},{t:this.shape_24},{t:this.shape_18},{t:this.shape_16},{t:this.shape_15},{t:this.shape_22},{t:this.shape_8},{t:this.shape_7},{t:this.shape_21},{t:this.shape_19},{t:this.shape_20},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_4},{t:this.shape_192},{t:this.shape_179},{t:this.shape_142},{t:this.shape_143},{t:this.shape_137},{t:this.shape_138},{t:this.shape_139},{t:this.shape_114},{t:this.shape_185},{t:this.shape_118},{t:this.shape_116},{t:this.shape_117},{t:this.shape_115},{t:this.shape_108},{t:this.shape_105},{t:this.shape_106},{t:this.shape_103},{t:this.shape_94},{t:this.shape_102},{t:this.shape_93},{t:this.shape_184},{t:this.shape_92},{t:this.shape_109},{t:this.shape_187},{t:this.shape_191},{t:this.shape_112},{t:this.shape_189},{t:this.shape_190},{t:this.shape_188},{t:this.shape_110},{t:this.shape_186},{t:this.shape_113},{t:this.shape_111},{t:this.shape_107},{t:this.shape_104},{t:this.shape_87},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_36},{t:this.shape_177},{t:this.shape_176},{t:this.shape_90},{t:this.shape_91},{t:this.shape_89},{t:this.shape_88},{t:this.shape_35},{t:this.shape_34},{t:this.shape_31},{t:this.shape_32},{t:this.shape_26},{t:this.shape_27},{t:this.shape_37},{t:this.shape_33},{t:this.shape_178},{t:this.shape_175},{t:this.shape_3},{t:this.shape_29},{t:this.shape_28},{t:this.shape_10},{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_172},{t:this.shape_173},{t:this.shape_196},{t:this.shape_148},{t:this.shape_166},{t:this.shape_147},{t:this.shape_146},{t:this.shape_140},{t:this.shape_141},{t:this.shape_193},{t:this.shape_134},{t:this.shape_133},{t:this.shape_174},{t:this.shape_169},{t:this.shape_170},{t:this.shape_171},{t:this.shape_136},{t:this.shape_135},{t:this.shape_162},{t:this.shape_152},{t:this.shape_164},{t:this.shape_165},{t:this.shape_168},{t:this.shape_167},{t:this.shape_149},{t:this.shape_158},{t:this.shape_150},{t:this.shape_156},{t:this.shape_151},{t:this.shape_101},{t:this.shape_86},{t:this.shape_145},{t:this.shape_144},{t:this.shape_153},{t:this.shape_155},{t:this.shape_163},{t:this.shape_161},{t:this.shape_160},{t:this.shape_157},{t:this.shape_154},{t:this.shape_67},{t:this.shape_66},{t:this.shape_70},{t:this.shape_71},{t:this.shape_72},{t:this.shape_83},{t:this.shape_79},{t:this.shape_68},{t:this.shape_56},{t:this.shape_55},{t:this.shape_69},{t:this.shape_60},{t:this.shape_65},{t:this.shape_58},{t:this.shape_77},{t:this.shape_78},{t:this.shape_59},{t:this.shape_57},{t:this.shape_100},{t:this.shape_85},{t:this.shape_75},{t:this.shape_95},{t:this.shape_96},{t:this.shape_99},{t:this.shape_98},{t:this.shape_198},{t:this.shape_97},{t:this.shape_84},{t:this.shape_81},{t:this.shape_82},{t:this.shape_80},{t:this.shape_76},{t:this.shape_74},{t:this.shape_73},{t:this.shape_53},{t:this.shape_159},{t:this.shape_63},{t:this.shape_128},{t:this.shape_64},{t:this.shape_61},{t:this.shape_62},{t:this.shape_131},{t:this.shape_129},{t:this.shape_130},{t:this.shape_54},{t:this.shape_50},{t:this.shape_197},{t:this.shape_52},{t:this.shape_46},{t:this.shape_43},{t:this.shape_42},{t:this.shape_45},{t:this.shape_44},{t:this.shape_30},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_41},{t:this.shape_132},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_6},{t:this.shape_5},{t:this.shape_39},{t:this.shape_40},{t:this.shape_38},{t:this.shape_17},{t:this.shape_25},{t:this.shape_23},{t:this.shape_24},{t:this.shape_18},{t:this.shape_16},{t:this.shape_15},{t:this.shape_22},{t:this.shape_8},{t:this.shape_7},{t:this.shape_21},{t:this.shape_19},{t:this.shape_20},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_4},{t:this.shape_192},{t:this.shape_179},{t:this.shape_142},{t:this.shape_143},{t:this.shape_137},{t:this.shape_138},{t:this.shape_139},{t:this.shape_114},{t:this.shape_185},{t:this.shape_118},{t:this.shape_116},{t:this.shape_117},{t:this.shape_115},{t:this.shape_108},{t:this.shape_105},{t:this.shape_106},{t:this.shape_103},{t:this.shape_94},{t:this.shape_102},{t:this.shape_93},{t:this.shape_184},{t:this.shape_92},{t:this.shape_109},{t:this.shape_187},{t:this.shape_191},{t:this.shape_112},{t:this.shape_189},{t:this.shape_190},{t:this.shape_188},{t:this.shape_110},{t:this.shape_186},{t:this.shape_113},{t:this.shape_111},{t:this.shape_107},{t:this.shape_104},{t:this.shape_87},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_36},{t:this.shape_177},{t:this.shape_176},{t:this.shape_90},{t:this.shape_91},{t:this.shape_89},{t:this.shape_88},{t:this.shape_35},{t:this.shape_34},{t:this.shape_31},{t:this.shape_32},{t:this.shape_26},{t:this.shape_27},{t:this.shape_37},{t:this.shape_33},{t:this.shape_178},{t:this.shape_175},{t:this.shape_3},{t:this.shape_29},{t:this.shape_28},{t:this.shape_10},{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(214.3,332.9,185.8,267.1);


(lib.rumi2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,35,1,1,0,0,0,12.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-0.2,y:35.2},0).wait(1).to({y:35.4},0).wait(1).to({y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({y:36.1},0).wait(1).to({y:36.3},0).wait(1).to({y:36.5},0).wait(1).to({y:36.7},0).wait(1).to({y:37},0).wait(1).to({y:37.2},0).wait(1).to({y:37.4},0).wait(1).to({y:37.6},0).wait(1).to({y:37.8},0).wait(1).to({y:38},0).wait(1).to({y:38.3},0).wait(1).to({x:-0.1,y:38},0).wait(1).to({y:37.7},0).wait(1).to({y:37.4},0).wait(1).to({y:37.2},0).wait(1).to({y:36.9},0).wait(1).to({y:36.6},0).wait(1).to({x:0,y:36.3},0).wait(1).to({y:36.1},0).wait(1).to({y:35.8},0).wait(1).to({y:35.5},0).wait(1).to({y:35.2},0).wait(1).to({y:35},0).wait(1).to({x:0.1,y:34.7},0).wait(1).to({y:34.4},0).wait(1).to({y:34.1},0).wait(1).to({y:33.9},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56635A").s().p("AgEgHQAWAHgUAIIgBAAQgFAAAEgPg");
	this.shape.setTransform(-40.2,112.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000103").s().p("AAGANIgRAAIAAgGIAAgMQAWgSABAeIAAAGIgGAAg");
	this.shape_1.setTransform(-51.1,127.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050402").s().p("AgQAAIAAgCQAnAFgHAAIgggDg");
	this.shape_2.setTransform(-42.1,99.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB6B75").s().p("AAiAZIhJAAIAAgHQANgRAQgOQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIALgGIAGgBQAFAgAZAMIABAFIgGAAg");
	this.shape_3.setTransform(-32.5,126.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#725C58").s().p("AANAKIgYAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQgJgDAEgMQAdgFAGARIABAGIgGAAg");
	this.shape_4.setTransform(-26.1,127.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E07B87").s().p("AgggSIAAgGQAKACAVAAQAZgBAIAVQACAEgIAFQgLAGgFALQgGABgFAAQgbAAgEgrg");
	this.shape_5.setTransform(-21,124);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#668171").s().p("AgIAGIAAgRQANACADAJIABAGIgGABIgLAFIAAgGg");
	this.shape_6.setTransform(-32.5,123.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#657D72").s().p("AgGAVIgGAAQAAgDgCgDIgFgGQBCg+gvBFQAAACAAADIgGAAg");
	this.shape_7.setTransform(-29,121.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#27241C").s().p("AgGAAIgBgCQARAFgDAAIgNgDg");
	this.shape_8.setTransform(-31.4,120.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D534F").s().p("AgDgFQgCgDAAgDIALAXIgJgRg");
	this.shape_9.setTransform(-38.4,122.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7F5153").s().p("AgGAdQgLgNADgbQAMgKAMgHQACgBAEgBQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQgLALgLAJQgCAUAHAKQABADAAADQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_10.setTransform(-37.4,116);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#605551").s().p("Ag+BQQAJgQgHgRQgNgbAWAIIAJACQAXgTgrgXQBRAKgZhGIgBgHQAqAFAUAXQALANgKAcQgDAJANgEQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgEAEgHACIAAAGQgKgTACARQAJA+glgqQAAgCABgCQAvhGhCA/IAEAGQACACAAADIgGAAIgGAAIgBgFQgDgLgOgCIAAASIAAAHQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQgQAPgNARIAAAHIgGAAgAgMgCQAdAFgegIIABADg");
	this.shape_11.setTransform(-30.8,120.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CF6F7D").s().p("AgYAkQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAgDgBgCQgHgLACgUQAMgJALgLQABAAAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBIAAgGQAUAAAVADIAAADIABAGQAXA9g7AAIgTgBg");
	this.shape_12.setTransform(-34.6,116.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#916264").s().p("Ag0gMIAAgGQAHgCAEgFQABAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAgBQAJgSAhADIAKABQAJAWAdAKQADAMgCALQgCAJgLAHQgaATgTAAQgiAAgMg6gAgngMQAEA1AlgLQAFgKALgGQAJgFgDgGQgIgTgZAAQgVAAgJgCIAAAGg");
	this.shape_13.setTransform(-20.2,123.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7F6B57").s().p("AgUgNQAOAPAWAIIAFAAIAAADIgJABQgdAAgDgbg");
	this.shape_14.setTransform(-16.6,101.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#070200").s().p("AgLADQAwgSgwAVg");
	this.shape_15.setTransform(-3.5,104.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#272A2B").s().p("AAeAoIhCAAIAAgGIAAgwQAfg4AhBFQAHAPACAaIgHAAg");
	this.shape_16.setTransform(-84.1,124.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(34,34,34,0.592)").s().p("AAIARQgMgPgHgTIAGAAQALAMAFARIABAHQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_17.setTransform(-95.1,106.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(66,67,66,0.859)").s().p("AAGAOQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgFgEgFgDIgBgFIgFgHQATgLAEAdIAAAGIgGAAg");
	this.shape_18.setTransform(-97,103.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(34,34,34,0.71)").s().p("AAFARQgKgMgDgQIAAgGIAGAAQACAAACABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIAGAXIAAAGQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_19.setTransform(-102.8,99.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(27,27,27,0.506)").s().p("AAFAXQgPgRgEgdQAIAPAUAVQABACAAAEIgGAAIAAAFQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_20.setTransform(-104.6,95.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(11,12,12,0.976)").s().p("AgGAVIAAgwQAYAVgUAgQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAgGg");
	this.shape_21.setTransform(-107.3,80.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(5,5,5,0.663)").s().p("AAAAbQgCgbAAgbIAFAAIAAAwIAAAGIgDAAg");
	this.shape_22.setTransform(-108.3,80.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(6,6,7,0.925)").s().p("AAUCUQgBgBgEAAQAAgEgBgBQgUgWgIgQIgBgFQgVgjAEg6QAAAAABAAQABAAAAAAQABAAAAgBQAAAAABAAQAVgggZgVIAAgGIAAg3QALgQAGgVIABgGQAbAugNA2QgMAwAFAjQAFAiAAAhQAPgwATA7QAHAVgRAXQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBg");
	this.shape_23.setTransform(-104.6,83);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(38,37,37,0.604)").s().p("AgFAMIAAgXIAFgFIAGgBIAAAGQgCASgJALIAAgGg");
	this.shape_24.setTransform(-85.3,33.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8C745E").s().p("AgRADQAUAAALgJQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAADgBACQgKAMgJAAQgHAAgIgGg");
	this.shape_25.setTransform(-34,99.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#917B65").s().p("AgSAGQAPgJAGgUQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIgBAHQgDAOgHAJQAFAKASgBIAAADIgFABQgLAGgGAAQgNAAgBgTg");
	this.shape_26.setTransform(-40.1,96.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8D7358").s().p("AgIASIAAgMQAJgKAFgTIADAAIAAAGQgDAagOAPIAAgGg");
	this.shape_27.setTransform(-38.6,91.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D5915E").s().p("AhugsQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQCBAdBeBAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQhvgghwg9g");
	this.shape_28.setTransform(-20.3,94);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8E7057").s().p("Ag/AAQA4gBA1gEIAGAAIAGAAIAGAAIAAADQg/AGhAACIAAgGg");
	this.shape_29.setTransform(-28.2,80.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#69513D").s().p("AghAGIgGAAIAAgGIAwgFIAGAAIATAAIAGAAIgBADIhBAIIgHAAg");
	this.shape_30.setTransform(-19.1,79.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#947A60").s().p("AATAUQgZgPgSgaQAbAQAUAVQABADABADQgDgBgDgBg");
	this.shape_31.setTransform(-25.5,48.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#97795C").s().p("AgRAGIAAgRQARAAASADQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAABIgHAAIgGAAQgVAAgCARIAAgGg");
	this.shape_32.setTransform(-9.6,64.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8E6E54").s().p("AgGAYIAAgSQAKgJgCgbIADAAIABAHQADAkgPARIAAgGg");
	this.shape_33.setTransform(-12,69);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCCFA1").s().p("AgPAAQA/gFg/AIg");
	this.shape_34.setTransform(-9.2,56.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCD1A1").s().p("AgbgSQgCgDAAgDQAiAMAWAWQAFAFgFAFQgFAFgJAAQgbgPgNgcg");
	this.shape_35.setTransform(-14.6,54.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8D7259").s().p("AAKALQgQgHgIgPQAPgCAFANQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAFAHIABAFQgDAAgCgBg");
	this.shape_36.setTransform(-21.5,51.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8CFA6").s().p("AgTAAQBQgGhQAJg");
	this.shape_37.setTransform(-0.9,59.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FDCD9D").s().p("AgSAAIgBgDQArAHgFAAIglgEg");
	this.shape_38.setTransform(0.3,55.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FCD0A4").s().p("AgTAAIAAgDQAsAHgFAAIgngEg");
	this.shape_39.setTransform(-7.6,58.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#060202").s().p("AgXAWQAXgbAVgfQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAQgQA+geAPIgBAAQgEAAADgRg");
	this.shape_40.setTransform(-40.8,90.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#010202").s().p("AASDfIgMAAQAYh6gohrQgfhSgBiGQAZAEgDA5QgDBIAdgXQAcAMgaAgQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAJA1AXASQACACADAAQgMBBADBqQABAVgLAWIgGAAg");
	this.shape_41.setTransform(-45,106.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FECE9C").s().p("AgDgDQgBgCAAgDIAJARIgIgMg");
	this.shape_42.setTransform(-45.7,19.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FAD0A4").s().p("AgGAMIAAgGIAAgXQAYAMgUAWQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIAAgGg");
	this.shape_43.setTransform(-51.7,11.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FAD1A4").s().p("AgLgnIAAgGQAXAfAAA2IAAAGQgSgkgFgxg");
	this.shape_44.setTransform(-53.6,4.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEC99E").s().p("AgUgGQBKAGg4AHIgEAAQgNAAgBgNg");
	this.shape_45.setTransform(-1.4,46.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCC9A").s().p("AgJADQgCgBAAgIQAeANgJAAQgEAAgPgEg");
	this.shape_46.setTransform(-13.9,48.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#767574").s().p("AAEADIgGAAIgHgFQAIAAALACIAAADIgGAAg");
	this.shape_47.setTransform(-13.1,28.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7F7F80").s().p("AgEAAIgBAAIgCgBIAPACIAAABIgMgCg");
	this.shape_48.setTransform(-9.2,30.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5E5D5E").s().p("AAlAGQgqgCglgJIAZAAIAGAAQAeAAAXAIIABADIgGAAg");
	this.shape_49.setTransform(-7.2,29.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#97795D").s().p("AATAUQgZgQgRgYQAbAOATAWQABACAAADIgFgBg");
	this.shape_50.setTransform(-30.4,44.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FDCB9C").s().p("AB7C3IgJgEQgqgKghgfQgTgRgLgXQgEgJACgGQgSgSgQgTQgEgDAFgEQACgCADgBIACAAQAoAYAiAhQASASAQAWQAIABAIAEQALAFANABQAsAFArgBIALAAIgBgBIAAgBQgCgFAHgCQASgDARgGQAGgHAJgFIASgNIACgCIADgCIABABIAGAEIAFgDQASAJgJALQAUAQgfAPQgLAGgKADQg1ASg5gIQAAAKgKAAIgRABQgHADgIAAQgIAAgKgEgAhbCJQA3AFgxAJIgCABQgHAAADgPgAlLigQgCgHAEgTQAzAVgqAUIgCAAQgGAAgDgPg");
	this.shape_51.setTransform(-16.9,23.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#AF9071").s().p("AAOARQgQgRgPgRIAGAAQASALAKATIABAFQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_52.setTransform(-38.9,36);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EFC9A2").s().p("ABfBuQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQgEgNgRACQAAgDgBgCQgUgXgcgPQAAgDgBgCQgTgXgbgPQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQgRgXgWgSIgBgFQgKgUgUgLQAAgDgBgCQgMgQgFgWQBFBRBQBBIgDAAQAkAkAyAcQAOAJgbAAIgGAAg");
	this.shape_53.setTransform(-30.1,40.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#614734").s().p("AgCAIIAAgTIAFAAIAAAGIAAAFIgCAMIgDgEg");
	this.shape_54.setTransform(-20.3,25.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FACEA4").s().p("AAUAjQgbgegQgpIAAAAIAFAIQAJAPAPAGIADAAIABADIACADIAGALQAFAMABAOQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_55.setTransform(-19.4,32.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFCB9B").s().p("AiMBSQgCgBAAgJQAfANgJAAQgFAAgPgDgAB4hJQApgYgeAcIgEACQgDAAgEgGg");
	this.shape_56.setTransform(-16.7,26.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F5CAA1").s().p("AgbAZQAUgcAMgcIAVAAQAIABgUANQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAAGIgGAAIgCABIgCAOIgHgFQgHAAAAAHQABAKADAJIgEABQgFAAgGgHg");
	this.shape_57.setTransform(-20.8,24.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FECC9F").s().p("AgLAAQAvgCgvAEg");
	this.shape_58.setTransform(-13.3,21.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCD9B").s().p("AgJgFQAmAAghAKIgCABQgGAAADgLg");
	this.shape_59.setTransform(-11,11.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FECC9A").s().p("AgPClQgJAAgDgMQAoAMgaAAIgCAAgAhMgeIAAgGQAPAZADAjIAAAGQgTgUABgogAA0ihIgBgDQAeAHgEAAIgZgEg");
	this.shape_60.setTransform(-17.8,24.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9D7F63").s().p("AAMAMIgGAAIgGgBQgOgFgDgRIAGAAQAHAQAWAEIAAADIgGAAg");
	this.shape_61.setTransform(-2.9,10.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F4CCA1").s().p("AAHAlQgigHgLgQQAFgWATgbQAEgFgEAMIAAANIAAAGQADARAPAFIAGABQABAOARAAQAVAAgTAHQgIADgHAAIgIgBg");
	this.shape_62.setTransform(-3.2,10.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FECF9D").s().p("AgGgBQAagNgaAVg");
	this.shape_63.setTransform(-8.3,9.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDCFA0").s().p("AgMABIAAgCQAlADgSAAIgTgBg");
	this.shape_64.setTransform(-3.4,5.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#59635B").s().p("AgHASQgFgEAAgMIAAgYQAsADggAqg");
	this.shape_65.setTransform(23.5,123.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E47984").s().p("AghgJQAlguAcA5QACADAAADIAAAGQgDAAgCACQgSAOgMAAQgWAAgKgng");
	this.shape_66.setTransform(17,124.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5F6D64").s().p("AAAAWIgGAAQAAgEgBgCQgFgHAAgLIAAgGIAAgMIAGAAIAGAAQAWAOgPAWQgBACgBAEIgFAAg");
	this.shape_67.setTransform(28.4,126.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#526057").s().p("AgEALQgJgGACgQQALAAALADQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABIgGAAIgGAAIAAALIAAAGQgCAAgCgBg");
	this.shape_68.setTransform(27.1,125.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DD818F").s().p("AgFAZIgTAAIAAgHIgFgXQAWgTAgAAIAFAAIgBAHQgIAYgVgMIAAAXIAAAHIgFAAg");
	this.shape_69.setTransform(1.4,126.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DA6B7E").s().p("AANAZIgjAAIAAgHIAAgXQAVAMAHgYIABgHQAXAQgKAaIgBAHIgGAAg");
	this.shape_70.setTransform(3.7,126.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6A8178").s().p("AAGALIgRAAIAAgGIAAgMQAPgKAHAWIABAGIgGAAg");
	this.shape_71.setTransform(10,127.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#925D61").s().p("AANAkQgcg4gygKQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAAgHQA4AJApgCIAGAAQATARADAeIgDAAQAAgDgCgCQgcg5glAtQAPA/AvgmQACgBADAAIgBAFQgEARgUACIgKACQgLAAgEgIg");
	this.shape_72.setTransform(14.1,124);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#84706C").s().p("AgOAlQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBQgWgLgHgaQApACAQggIAEAEIAFAIQAFAKAUgBIAAACIgGAAQggAAgWASIAFAZIABAGIgGAAg");
	this.shape_73.setTransform(-0.1,125.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#574A46").s().p("ABJArIg9AAIgBgGQgHgXgPAKIAAANIAAAGIgHAAIgYAAIABgGQAKgcgXgOIAAgDQgTABgGgKQAqAKAMgBQABAAgDgHQgOgVAXgGQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQAxAKAdA5QAGAKAUgEIAAAGIgHAAg");
	this.shape_74.setTransform(10,124.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#80624B").s().p("AAhAMQgSgZgzAJIAAgGQA3gJAQAbQACACAAADQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_75.setTransform(-0.4,103.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#79604B").s().p("AgtgGQAnAJA0gBIAAADIgGAAQgRACgOAAQgiAAgUgNg");
	this.shape_76.setTransform(7.8,105.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#786044").s().p("AAWAGQgZgFgYgGQAigDATALIABAEIgFgBg");
	this.shape_77.setTransform(24.9,108.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#8B6C54").s().p("AASAIQgJgPgdAFIAAgGQAhgGAHASIABAGQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_78.setTransform(33.5,110.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8B745F").s().p("AgRAUQAggDAAgnIADAAIAAAGQAAAQgDAHIgHANQgFADgFAAQgHAAgIgDg");
	this.shape_79.setTransform(38.7,111.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8D6F53").s().p("AgIATIAAgNQAJgKAFgTIADAAIAAAGQgDAagOAPIAAgFg");
	this.shape_80.setTransform(41.4,106.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#8E6C54").s().p("AASAGQgZgBgRgKQAbABAUAHQABAAAAAAQAAAAAAABQAAAAAAABQABAAAAABIgHAAg");
	this.shape_81.setTransform(39.9,94.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#8D7158").s().p("AgXgFQAXADAYAEIAAAEIgGAAIgFAAQgYAAgMgLg");
	this.shape_82.setTransform(33.8,92.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#070302").s().p("AgXgDQAxgOgDAUIABAHQgaAAgVgNg");
	this.shape_83.setTransform(30.1,89.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D5915F").s().p("Ah2AEQBmgdCHAJIABADIhVAOQhCALhKAHIgDAAQgOAAAEgPg");
	this.shape_84.setTransform(9,99.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8E6D54").s().p("AASAJQgcgBgNgQQAXAGAXAIQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAIgGAAg");
	this.shape_85.setTransform(23.4,89.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8B6D50").s().p("AASAJQgagDgPgOQAZAEAVAJIABAEIgGAAg");
	this.shape_86.setTransform(28.3,91.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8A6950").s().p("AAKAjQgcgTAEg0QAHApAVAbQABACAAADQgDAAgCgCg");
	this.shape_87.setTransform(10.9,81.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#080102").s().p("AB5CJQgLgDgZgRQgEgDgCgJQgBgDgDgDIBtAnQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQgJAFgNAAQgSAAgYgJgAi3hzQACgOAAgQQAkATgkAcIgBABQgDAAACgSg");
	this.shape_88.setTransform(27.5,79.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#9B7858").s().p("AADAVQgHgUgBgWIAFAAIAGAkIAAAHQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_89.setTransform(8.7,74.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6F5240").s().p("AgDAhIAAgGIAAg7QAKAXgEAkIAAAGIgGAAg");
	this.shape_90.setTransform(8.5,68.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#050202").s().p("ADoD7QAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQgOgegEg3IgBgHQAbADAAA0QgBAaALALQAdAZA3AaIABAEQAzgDABAVQhagGhAg+gAkIDzQAPhDgEhNQgIiFgnh6QgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBAAAAQgRgSAJgXQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgig9gjg2QASgNAYAoQASAdAHAqQBUBEBJBQQABAAAAAAQAAABAAAAQABABAAABQAAAAAAABQg3gYgxg6IAAADQAnCvgPCsIAAAGQBxAGA5gbQAHgDAGgGQAGg8AIArQAIApgcATIgGAAIgxAGIAAAGIgGAAQg2AEg4ACQgfAJgKAlg");
	this.shape_91.setTransform(-11.3,56.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8F7255").s().p("Ag/gGIAGAAQA2AGA9AAIAGAAIAAAFIgGABIgiABQgzAAgkgNg");
	this.shape_92.setTransform(-2,64.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F7C696").s().p("AFcDxQgCgKgKgCIgBgFQgIgTgiAGIAAAGIAAADQgZABgMgQIgBgEQgTgMgjADIAAgDQg5gIgogNIAAgDQg1ABgngKQAAgDgBgCQgQgdg3AJIAAAGIgBADQgqADg9gMIAAAGIgGAAQgWgIgPgQIgNAEQg6gCg/gUQgBAAgBAAQAAAAgBAAQgBAAAAABQAAAAgBAAQgLALgVAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgLgFgMgDIAAgDQgUABgFgLQAIgKAEgOIAAgGQAPgQADgbIABgGQASghAJgtIADAAQBBgDA/gHIABgDIBCgJIABgDQAVgVADgoIAAgGQAQgSgDglIgBgGQADgSAWAAIAGAAQAwASBJgGIAGAAQARgOAPAMQABABAAAAQAAAAABAAQABABAAAAQABAAABAAIAAA9IAAAGQABAXAIATQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAGIAAAGQgDA0AdAUQACABADAAQAlAVAqAPIAGABQAOAQAdABIAGAAQAQAPAbADIAGABIAGAAQAOANAdgBIAGAAIAHAFIAFABQARALAaABIAGAAQAxAdgvA6QgCACAAADIgDAAQgFATgKALIAAANIAAAGIgDAAQAAAogiACIAAgGgAgwBrQgEAQAQgBQBKgIBCgKIBVgPIAAgEQgegCgdAAQhkAAhOAYgAlOAHQBxA+BwAgQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAgBAAQhehBiCgdQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAg");
	this.shape_93.setTransform(2,88.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8D7461").s().p("AAOAFQgOgLgRANIAAgGIAAgFQAYgFAKALQABACAAADQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_94.setTransform(6.3,64.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#040201").s().p("AgyBeQgRgKANgaIALgWQAHgNgOgPQgbgigugTIgGgBQgOgggbgTQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQBUBFBtArQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQBUgFBBALIgCAAQgxAYhDgSIACgDIgCgDQgnABghAIIgBADQgOA6gKAJIgCACQgDAAgCgIg");
	this.shape_95.setTransform(-10,60.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FECF9B").s().p("AgOAAIAAgDQAhAHgEAAIgdgEg");
	this.shape_96.setTransform(7.8,55.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FECE9E").s().p("AgvgCIgBgEQAsAFAvABIAGAAQgXAHgWAAQgZAAgagJg");
	this.shape_97.setTransform(-0.4,57.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FAD1A5").s().p("AgtALQAqgNArgKIAGgBQgkAYg3ADg");
	this.shape_98.setTransform(9,57.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FBCFA4").s().p("AgcARIgBgEQA+gRhEgDIgBgEQAyAIAXgRIAAADQgYAmgYAAQgJAAgIgEg");
	this.shape_99.setTransform(34.4,42.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FDCF9E").s().p("AgIgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIATAJIgSgGg");
	this.shape_100.setTransform(28.7,39.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FBCEA3").s().p("Ag/AgQARgrAnAEQATADAOgNQAOgNAYgEQg6AzhFASg");
	this.shape_101.setTransform(22.5,50.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#85644B").s().p("AgCgBIAFABIgCACIgDgDg");
	this.shape_102.setTransform(20.6,27.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FCD0A3").s().p("AgYAHIAEgGQATgIASgHQAFADADAJIgJAAQgOABgUAQQgBgEgFgEg");
	this.shape_103.setTransform(18.7,36.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FECA9D").s().p("AgYgCQAzgRgBARIgDAAQgWACgBAHQAAADgMABIgEABQgMAAAEgOg");
	this.shape_104.setTransform(5.8,46.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#A1A5A6").s().p("AgwgDQAwAAAwADIABADIgGAAIgeABQgiAAgbgHg");
	this.shape_105.setTransform(4.5,30.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#8A8888").s().p("AgjgCIgBAAQAjACAmACIAAABQgkgBgkgEg");
	this.shape_106.setTransform(-1.1,31.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8E8F91").s().p("AAIADQABgDgDAAIgGAAIgMgDIAAgDIAFABQAPAEAFACIgGAGIABgEg");
	this.shape_107.setTransform(13.7,31.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D1D2D3").s().p("AAYARIAAgBQgmgCgkgEIgjgGIgBAAIgPgDIgDgBQgQgHgOgKIAGAAIAGAAIAGAAQAlAKArACIAGAAIAGAAIAGAAIAHAFIAFAAQAmALA1gEIAGAAIASAAIAHAAIAGAAIAAADIANADQgoAFgoAAIgfgBg");
	this.shape_108.setTransform(0.2,30.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#59585A").s().p("AA9AHIgSAAIgBgDQgvgEgxAAIgGAAIgGgFQBGgEA5AJIAGAAIAAAHIgGAAg");
	this.shape_109.setTransform(5.1,30.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B26E5F").s().p("AhnAMIgBAAIgNgGIgYgHQgMgJgFgQQAbAeAygXQAfgPAnAMQAkALAqgJQAqAZAxAUQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQiIgFh+gLg");
	this.shape_110.setTransform(0.2,25.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0D0404").s().p("AhYAkQgNACgNgFQghghgqgXIgCAAIgCgCIgFABIgDgCIACgMQAWgQAmAKIAYAIIANAGQAhAMAnAIQAzAKBOADQAnACAmgOQALgEAKgHIAFAOIgCACIgBABIgHADQgIAFgIACIgGACQgTgGghAGIgGAAQg5gJhGADIgGAAIgHAAIgBgDQgXgIgfAAQgBgKgQgDQgcgGgOAMIACACIAIAFQAOAJAQAHIADACIACABIABAAIANACIAjAGIACAAQAlAGAjABQA4ADA4gHIAFAAQADgBAAAEIgBAEQgDAIgGAFIgBgBIgDACIgDACQgIADgMgBQgKgBgKABQgYABgXAAQhCAAhAgMg");
	this.shape_111.setTransform(0,29.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#392924").s().p("AgrBMQgNgBgLgFQgJgEgHgBQgQgWgTgSQANAFANgCQBXARBagGQAKgBAKABQAMABAIgDIgRANQgJAFgGAHQgRAGgSADQgHACACAFIgKACIgOABQgjAAglgFgAB+AJIgGgBIgGAAIAAgHQAigFASAFQgHAEgEAGIgIAFQgGgDgPgEgABfgEQhNgEgzgKQgogIghgMIABAAQB+ALCIAFQAWgfATAUQAAABABAAQAAABAAAAQAAABABABQAAAAAAABIAEAFIgGAJIgEgOQgLAHgLAEQghANgjAAIgJAAgAhdgQIgYAAIgGAAIgBgDQgLgDgJABIgCgCQAOgMAdAGQAPADABAKIgGAAgAjLg0IAAgHIAAgGQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAWgDAPgGIAAADQAFAQAMAJQglgKgXAQIAAgGg");
	this.shape_112.setTransform(0.4,30.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FCCFA3").s().p("AAcAoQAPgQgNgLQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAJgMgQgMIgEABIgDgBIAAAAQgGgHgJgGQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQgjAEgHgGQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAVgoAEANQAKAfArAUQAXAlglAuQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAIgQADgOg");
	this.shape_113.setTransform(20.5,28.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FECDA0").s().p("AgLgEQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAZARIgYgNg");
	this.shape_114.setTransform(12.5,23.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FBD2A7").s().p("AgNgCQAzACgtADQgCAAgEgFg");
	this.shape_115.setTransform(7,13.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F9D1A9").s().p("AgJgBQAoABgoACg");
	this.shape_116.setTransform(10.4,11.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#69503B").s().p("Ag5gFIAAAFIAAAGIgGAAIAAgGIAAgLQA6AaBAgZIAFgBQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgcATggAAQgcAAgfgRg");
	this.shape_117.setTransform(1.7,9.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FAD1A7").s().p("AkdAPIgBgGQAsAnAWA7IABAGQgngrgbg3gADFhaQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAtATAhgVQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQgMgRAWAHQACABgBAJQgCAGgDAGQgTAOgUAAQgWAAgXgQg");
	this.shape_118.setTransform(-21.2,16.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FECC9C").s().p("AidC1QgCgCAAgDQAdgLAVAKQgFAPAPAFQgMACgKAAQgaAAgKgQgACRixIAAgTQAeAZgeADg");
	this.shape_119.setTransform(-1.5,24.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#785C45").s().p("AgjAbIAAgGQA4AAANgvIADgBIAAAGIgBAGQgNArg4AAIgCgBg");
	this.shape_120.setTransform(7.5,10);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#9B7F63").s().p("AgDAfIAAgGIAAg9IAGAAIAAAqIAAAGIAAAGQAEARgKABIAAgFg");
	this.shape_121.setTransform(11.5,4.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FECD9B").s().p("AmMA6QgDgBAAgJQAYAOgGAAQgEAAgLgEgAFsg6IAAgDQAoAHgFAAIgjgEg");
	this.shape_122.setTransform(-6.3,7.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFCC9B").s().p("AgJAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBQAYAHgDAAIgUgEg");
	this.shape_123.setTransform(28.7,4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#735B45").s().p("AAABSQgChSAAhRIAFAAIAACdIAAAGg");
	this.shape_124.setTransform(36.5,18);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FBCC9F").s().p("AgChbIAAgGQAKBXgFBmIAAAGQgJhXAEhmg");
	this.shape_125.setTransform(35.3,18.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FCCC9D").s().p("AgDAEQgDgGAAgMQAXABgRAcg");
	this.shape_126.setTransform(35.1,5.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#8F765E").s().p("AgCAZIAAgHIAAgqIAFAAIAAAqIAAAHIgFAAg");
	this.shape_127.setTransform(36.5,7.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(38,38,38,0.671)").s().p("AgGAMIAAgMQAJgBgBgQIADAAIABAGQAEAZgQAEIAAgGg");
	this.shape_128.setTransform(104.1,97.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(97,97,97,0.867)").s().p("AgOgKQAQABAMAHIABADIgGABIgLAFQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgFAAACgVg");
	this.shape_129.setTransform(106.2,79.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(30,30,31,0.533)").s().p("AALAUQgOgTgLgVQAUAMAIAYIABAFQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_130.setTransform(97.6,55.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(36,36,36,0.722)").s().p("AARAdQgZgXgMgkQAWAaASAdIABAGQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_131.setTransform(92.7,50);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(40,39,39,0.635)").s().p("AAOAXQgRgWgOgZQAZANAJAdIABAHQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_132.setTransform(105.3,65.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#292A2B").s().p("AgJAGQgCgTgJgKQAQgpATA+IAFAVQAFARgVgFQgDAJgBAAQgFAAgEgig");
	this.shape_133.setTransform(82.9,44.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(40,41,41,0.698)").s().p("AgJASIAAgMQAKgKAEgTIAEAAIAAAFQACAhgUAJIAAgGg");
	this.shape_134.setTransform(89.7,9.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(49,50,49,0.796)").s().p("AACARQgHgOAAgUIAFAAQAFANABAQIAAAGQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_135.setTransform(91.8,-25.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#705948").s().p("AgCAWIAAgxQAJAUgHAiIgCAAIAAgFg");
	this.shape_136.setTransform(38.4,-9.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FDCE9D").s().p("AgmgBQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQArgEAeAIIAGABQgRAFgRAAQgUAAgYgHg");
	this.shape_137.setTransform(29.2,-0.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#9A9B9C").s().p("AAMAWQgdgBAAgdQAKgCAEgJQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAgBIAAAGIgFAHQgCAZAZABIAAAEIgGAAg");
	this.shape_138.setTransform(25.2,-18.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#85776E").s().p("AgJAfQAOg2gVgHIAAgGQA1gBggA9QgFALgKACIABgGg");
	this.shape_139.setTransform(30.6,-19.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EBEAE7").s().p("AAPAiIgRAAIAAgDQgagCABgaIAFgGIABgFQAWgFANgPQABgBAAgEQAWAHgPA2IgBAGIgGAAg");
	this.shape_140.setTransform(27.4,-19.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#878A8D").s().p("AgSALIAAgFIAPgGIAQgKQACgBADAAQABADgCACQgMAOgXAEIAAgBg");
	this.shape_141.setTransform(27.1,-21.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#070000").s().p("AgqACIAAgCQAhgHAzAEIABADQgVAFgaAAQgRAAgVgDg");
	this.shape_142.setTransform(32.6,-14);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#9E8C7F").s().p("AgIgDQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAVARgCAAIgSgMg");
	this.shape_143.setTransform(36,-20);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FDCD9C").s().p("AgEAMQAJhMAAA0QAAAugDAAQgCAAgEgWg");
	this.shape_144.setTransform(6.8,-12.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#745A44").s().p("AgLA2IAAhtQAPgHAHAIQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgSAvgCA9IAAgGg");
	this.shape_145.setTransform(9.3,1.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#26150B").s().p("AguBJIAAgDQgXgFgHgRIAAgGIAAgGQBAAlA3gnQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQACg9ATgvQAAAAABAAQAAgBAAAAQAAAAABAAQABAAAAAAQALAIgEAXIgBAGIAAA8IAAAGIgDAAQgMAwg6ABIAAAGIgFAAIgMABQgTAAgMgHg");
	this.shape_146.setTransform(3.6,4.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F6CEA5").s().p("AgEAhIAAgpIAAgGIAAgZQAQAegNAwIgDABIAAgHg");
	this.shape_147.setTransform(12.3,1.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FCCEA1").s().p("AgTgVQgBgCAAgDQBBAlgkAQQgMgbgQgVg");
	this.shape_148.setTransform(14.5,-4.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#87633F").s().p("ABlAnQiUAAhNhIQAQAEgBgQIADAAQgDAWAPACIAGABQAKAOAVADIAGABQBGAZBkgCIAGAAIAAATIAAAGQgHgHgRAAg");
	this.shape_149.setTransform(24.9,-5.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F3CB9F").s().p("AAjALQgagJgRAHIgGgBQgVgDgKgNIAAgGQBAAIAbAVg");
	this.shape_150.setTransform(20.6,-6.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F9D3A6").s().p("AgCAOQACgYgJgMQAjAjgdAKg");
	this.shape_151.setTransform(15.8,-12.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FCCFA2").s().p("AgaAIIAAgGQAugtAIAzIgDgEQgTgUgOASQgLASgEAAQgEAAABgMg");
	this.shape_152.setTransform(9,-4.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FECB9B").s().p("Ai+CLQACgPAAgPQAwABgqAoQgEAEgCAAQgEAAACgPgACHiHQAbgDAQgMQANgKAAAZIAAAFQgCAQgXAFIgMACQgXAAAEgcg");
	this.shape_153.setTransform(-17.6,12.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FECD9C").s().p("AgFACQAcgdgcAkIgCACQgBAAADgJg");
	this.shape_154.setTransform(3.9,-12.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FBCFA2").s().p("AB7CrIAAgGQATAkgDA3IgDABQgOggABg2gAiGjfQgEgCAAgMIAAgTQAgAkgQAAQgEAAgIgDg");
	this.shape_155.setTransform(23.3,14);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FDCE9C").s().p("AgDAIIgBgSQARgVgPAwIAAAAIgBgJg");
	this.shape_156.setTransform(1.3,-14.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#67513C").s().p("AANAxQALhFgsgWIAAgGQA1ALgQBQIgBAGg");
	this.shape_157.setTransform(10.2,-14.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#A48363").s().p("AAVADIgvAAIAAgFQAaAAAbACIAAADIgGAAg");
	this.shape_158.setTransform(2.9,-23);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#705438").s().p("AAhADIhIAAIAAgFIAwAAIAGAAQANAAALACIAAADIgGAAg");
	this.shape_159.setTransform(4.2,-22.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FBCD9E").s().p("AAWAmQgLgFgFgLQgDgEADgOIgKADQgIACgMABQgSgCAMgQIgGABQgFAAgZALQgMgGAbgYIgDAAQgdgBgMgNQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQALgFALgBQAOAFAUgBIABAAQAQAFAOAOQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQA5gKAqAXQAEACAAAJQgCA1ghAAQgRAAgYgNg");
	this.shape_160.setTransform(27.1,-8.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#735944").s().p("AgRgFQARABAMAEIAGAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQgJADgHAAQgOAAgEgLg");
	this.shape_161.setTransform(10.6,-21.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#A7886C").s().p("AgXASIAAgGQAWgNAPgVQAAAAABgBQAAAAABAAQAAAAABAAQABgBAAAAIAGAAQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgXAWgXAWIAAgHg");
	this.shape_162.setTransform(21,-21.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#87674A").s().p("AAFAqIgOgkIAAgGIAAgRQAKgFgBgUIACAAQAAANADALIAEABIAAAGQAEAPgLACQgCAVAHALQACACAAADQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAAAAAAAg");
	this.shape_163.setTransform(13.4,-22.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F9CD9F").s().p("AgFAiQgbgFgKgHQAfgRgCgfQgBgIAUAAQAhAAAEAbQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgQAUgWAOIAAAHIgFgBg");
	this.shape_164.setTransform(18.5,-23.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#9B7D5C").s().p("AgFASQgDgPAAgOIALgFIAGgBQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgFAFgFADIAAALIAAAGIAAAGIgDAAg");
	this.shape_165.setTransform(17,-39.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#927C68").s().p("AgUALQAoALgEgiIAAgGQAKALgHAYIgDAAIgHABIgJABQgOAAgGgIg");
	this.shape_166.setTransform(35.3,-29.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#AF8760").s().p("AAuADIhhAAIAAgFQAzAAAzACIABADIgGAAg");
	this.shape_167.setTransform(24.3,-29.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#DBB48C").s().p("Ag8BiQASgHAZAJIALAEQgagWhBgIIAAAGIgGgBQgQgCAEgWIAAgGIAAhIQAAgDgCgCQgHgLACgVQALgCgEgQIAAgGIAAgGIAAgGQAzgoBRAYIABADQgDAAgDACQgUAIgQAPIgGAAQgEgbghAAQgUAAAAAIQACAggeARQAKAHAaAFIAGABIAAAGQAAAAAAABQAAABAAAAQAAAAAAAAQgBABAAAAQgLADgGAGQACAgAaAKQgLABgLAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAMANAdABIADAAQgbAYAMAHQAZgMAFAAIAGgBQgMARASACQAMgBAHgCIALgDQgDAOADAEQAFALALAFQBKAnAChQQAAgJgEgCQgqgXg6AKQgBAAgBAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQgNgOgQgFQALgBALAJIB6AAIAGAAIAAAxIAAAGIAAAGQAEAXgKAHIgGAAIgOAAQhbAAhBgYgAhmArIgBAJQAdgKgjgkQAIANgBAYg");
	this.shape_168.setTransform(25.9,-15.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#84613F").s().p("AhwAYQgDgMAAgMIAAgFQASgQAfgCIAGgBIBhAAIAGAAIAeAAIAGAAQAIALAXgDIAGgBIAAADQg5gDgjARIAAgDQhRgXg0AmIAAAHIAAAFIgDAAg");
	this.shape_169.setTransform(25.2,-26.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#8B6E53").s().p("AgbgCIAAgGQAPAPAhgEIAGAAIAAADQgOADgKAAQgUAAgKgLg");
	this.shape_170.setTransform(19.4,-37);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#030202").s().p("AgOOYIgSAAIAAgGQAEhCgEgsQgDgDgEgCQgJgCgEgEQgTgYAnAWQAAAAABAAQABAAAAAAQABgBAAAAQAAAAABgBIAQgWIAHgNQAwhPAPhcQApgxAdhUQASg1gOgzQgliBhLhgQgZgggDgZQANgBgGgWQgsiEAPioQAQjCAAiUIgGgBIg9gXQggASgbAYIgPAGIAAAFQgaATgQgLQAQgIAHgRQABgCAAgEQA7gwBFASIADgFQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAQANgHAEgRIABgGQgKhbgygzQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQASgXgdgiQgVgZgRgdQBMA4AlB/IADABQAEAegDANIgBAFQAYAoACBBQABA0gPAtQAGBTgHCDQgJCTAKBVQALglgJA+QgCAOAAAPQAOgWANA6QAAAAAAAAQAAABAAAAQABAAAAAAQABAAABAAQAHAWgGAKQgBACAAACQA/BXA5BhQAbAtAPBEIAFAaQANBIgoAPQANgpgfAEIgGAAQgbBTgoBDIAAgDQgCgogEAhIAAAHQgSBNgbAmQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgUBMgKByIAAAGIgGAAg");
	this.shape_171.setTransform(40.8,36.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#060101").s().p("AALDiQgYgOgaAFQAbgcAdAlQAAABABABQAAAAAAABQAAAAAAAAQAAAAAAAAIgHgDgAARjgQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAZAVIgXgRg");
	this.shape_172.setTransform(21.9,-38.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#060201").s().p("AAMAcQgQgjgSgUQgBgCAAgDQAhAFANAtQAEAPgGAAQgDAAgGgFg");
	this.shape_173.setTransform(20.9,-64.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#745E4A").s().p("AAbATQgCgZgMgKQgPgNgiAqIAAgHIAAgGQAfgmAdACQABAAACAIQAEALAAAMQgBAVAGAPIABAGQgJgGgBgMg");
	this.shape_174.setTransform(8.7,-82);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#27292A").s().p("AhqgQIAAgDQBxgIBkAwQhagVh7gQg");
	this.shape_175.setTransform(31.1,-120.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#050303").s().p("ABKCXIgBgFQgigzgShHIgDAAQAAgNgDgLQgCgGgCAAQgdgCgeAmQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQgbAbgKgcQBkgsAGiRIACAAQAOBVAMBVQANBfAiAiQgDAUgGAAQgDAAgFgJg");
	this.shape_176.setTransform(10,-84.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(35,35,35,0.639)").s().p("AgRgFQAUAAAOAHIABAEIgGAAIgDAAQgTAAgHgLg");
	this.shape_177.setTransform(8.7,-127.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(1,1,1,0.553)").s().p("AA3ADIhzAAIAAgFQA8AAA9ACIAAADIgGAAg");
	this.shape_178.setTransform(24.6,-126.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F9D0A3").s().p("AgMANQAZghAAADQgDAjgLAAQgFAAgGgFg");
	this.shape_179.setTransform(-2.8,-11.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FDCE9E").s().p("AgPgHQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAhAVIgggSg");
	this.shape_180.setTransform(-8.5,-4.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FCCFA0").s().p("AgKgCQAAAAgBgBQAAAAAAAAQAAgBAAgBQgBAAAAgBIAYANIgWgJg");
	this.shape_181.setTransform(-7.1,-6.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FECC9B").s().p("ADUEBQgCgWgMgJIAOgEQAIAJgHAeIAAABIgBgFgAjPBUIgGgEQgFgFAEgNQAtAXgYAAIgOgBgAhokFQBRADhRAAg");
	this.shape_182.setTransform(-7,21.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#522D18").s().p("AgtgCIBVAAIAGAAIAAACIAAAAIgDAAQgVADgSAAQgaAAgXgFg");
	this.shape_183.setTransform(-16,-7.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#7A7A79").s().p("AgEALQAHgJgJgQQAYAJgTATQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAg");
	this.shape_184.setTransform(-14.4,-22.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FACFA6").s().p("AglgEQAugFAdAKIgDAAQgogFggALg");
	this.shape_185.setTransform(3.4,-17.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#705A43").s().p("AgIAVIAAgGQAPgLgBgfIADAAIAAAHIAAAFIAAAGQABAcgSAIIAAgGg");
	this.shape_186.setTransform(-3.2,-13.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#543B26").s().p("AAAAXQgMgPAEggIAHAAQgFAZALAJQACACADAAIAAAGQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_187.setTransform(-5.1,-12.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#876D56").s().p("AgXAAIgHAAIAAgGQAegDAOAMQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIAGAAIAHAAIAAADIgGAAQgbAAgVgIg");
	this.shape_188.setTransform(-10.8,-17.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#69472E").s().p("AgCAPIgGAAIAAgGQAUgCgNgQQgBgCAAgDQAMACgBAPIAAAGQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgFAAg");
	this.shape_189.setTransform(-8.1,-18.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#B28E6D").s().p("AAEAMQABgPgMgCIAAgGIAAgGQAVAGgHAdIgDAAIAAgGg");
	this.shape_190.setTransform(-7.6,-19.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#765943").s().p("AAoAGQgsgIgpAJIAAgGQAqgOArANIAGABIAAAGIgGgBg");
	this.shape_191.setTransform(3.5,-19.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#7D6650").s().p("AgFAPIAAgGIAAgGIAAgXIAFAAIAGAAIAAAGIgDAAQABAYgJALIAAgGg");
	this.shape_192.setTransform(-1.6,-17.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#8C725B").s().p("AgLAbIAAgFIAAgTQAIgNAGgPQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIAGAAIgBAGIgQAkIAAAHIAAAFIgGAAg");
	this.shape_193.setTransform(-4.7,-18.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#2C1A0E").s().p("ABQBDQAAgDgCgDQgBgDgDgDIAAgGQAQhQg1gLIgGgBQgrgNgqAOIgGAAIgGAAIAAAYIAAAHIgDAAQABAegQALIAAAGQgDAAgCgBQgMgKAFgZIAAgFIAAgGIARgmIABgFIAAgGIAAgGIAeAAIAHAAIBIAAIAGAAIAGAAQAHARAdgIQAAAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAIAPAjQAAAAAAABQAAAAABAAQAAAAABAAQABAAAAAAIAABJIAAAGIgDAAQABAMgKAAIgGAAg");
	this.shape_194.setTransform(4.4,-15.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#B79671").s().p("AgDAhIAAgFIAAg8QAKAQgEAfIgBAGIAAAHIAAAFIgFAAg");
	this.shape_195.setTransform(-3.7,-24.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#C29975").s().p("AArADIhVAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCgCAAgCIBbAAIAGAAIAAAFIgGAAg");
	this.shape_196.setTransform(-16.3,-8.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F8CDA1").s().p("Ag+gCQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQA2AJBDgDIAGAAQgdAHgeAAQghAAgigJg");
	this.shape_197.setTransform(-21.5,-6.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FBCDA1").s().p("AgsAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAdgCA4ACIAGAAQgbAIgYAAQgUAAgTgFg");
	this.shape_198.setTransform(-33.1,-6.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#926A47").s().p("AiGAeQABgDgCgCQgCgEgCgDIAMAAIAGAAQA1gFAnAKIAFABQAAADACACQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAlAKAzgGQgqAJguAAQg2AAg+gNgABJAeIAAgGQA6AAgGhCIADAAQgEAgAMAOQAAABABAAQAAAAABAAQAAAAABABQABAAABAAQAAAAgBABQAAABAAAAQAAAAAAABQgBAAAAAAQggAQgiAIIAAgDg");
	this.shape_199.setTransform(-18.7,-11);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#A57C59").s().p("AAQALQgNgIgYADIgFAAIgHAAIAAgGQAzAAgggIIAAgDQAaAAAUAJQABAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAIgGAAIgMAAQACADACAEQACACgBADQgDAAgCgBg");
	this.shape_200.setTransform(-34.3,-9.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#A38469").s().p("Ag2gFIAMAAIAGAAQAnANAogMIAGgBIAGAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgcAIgZAAQgdAAgagLg");
	this.shape_201.setTransform(-18.7,-17.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#6E5643").s().p("ABAAMIgMAAIgGAAIgMAAIgBgDQg2gIgwgMQBLADBAARIAAADIgGAAg");
	this.shape_202.setTransform(-29.5,-19);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#595757").s().p("AgbAGIAAgGIAAgLIAHAAQAAAJACAHQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAYADANgIQACgBADAAIgBAEQgOAIgNAAQgNAAgNgGg");
	this.shape_203.setTransform(-17.8,-20.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#85807E").s().p("AghAIQA4AOAHgkQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAAARIAAAGIAAAGIgHABIgVABQgWAAgRgIg");
	this.shape_204.setTransform(-33.7,-24.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#624F46").s().p("AgOAGQAVADACgPIAAgGQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAQAGAUgQADIgEAAIgGABQgHAAAAgHg");
	this.shape_205.setTransform(-23.4,-25.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#AA978D").s().p("AgLAJIAAgGIAAgFQAGgGALAAIAGAAIgBAGQgBALgPAAIgGAAg");
	this.shape_206.setTransform(-23.6,-25.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#7D6F66").s().p("AgIASIAAgSIAAgFQAIgGAGgLQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIgBAGQgEAYgMARIAAgGg");
	this.shape_207.setTransform(-29.4,-25.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FEFDFD").s().p("AgNAHIgHgFQAmgYABAJQAGAdgPAAQgJAAgOgJg");
	this.shape_208.setTransform(-34.4,-25.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E2E1E1").s().p("AgoAaQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQgJgEAEgRIAqgTQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAcgNAXANIgDAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQgFALgJAGIAAAFQgBAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgFAcgeAAQgMAAgQgEgAgiAIIAHAFQAqAZgKguQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAgBAAQgHAAgdASg");
	this.shape_209.setTransform(-33,-25.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#76787C").s().p("AgUAGQANgGALgKQACgBADAAIAGAAIAGAAQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAIgoATIAAgGg");
	this.shape_210.setTransform(-35.6,-27);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#7A7978").s().p("AAGAMQgPgBgCgQQAMAEACgJQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQgEAPAJAFQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgGAAg");
	this.shape_211.setTransform(-38.3,-24.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#8A6F51").s().p("AgUAJQAAgDgCgCIgEgGQAMAAALgDIABgDQAOAAAPADIABADIgGABQgQAEgUAAIAAAGIgGAAg");
	this.shape_212.setTransform(-28.2,-34);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#6B543C").s().p("AgnAJIAxgWIAFgBIASAAIAHAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgsAJgiARIAAgGg");
	this.shape_213.setTransform(-34.3,-31.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#5A3A20").s().p("AgCADIgYAAIAAgFIApAAIAGAAIAHAAIgBACQgMADgMAAIgFAAg");
	this.shape_214.setTransform(-31.3,-34.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#AF9072").s().p("AAeAGIgSAAIAAgDQgfACgRgKIAfAAIAFAAIAYAAIAGAAIAFAGQACACAAADIgHAAg");
	this.shape_215.setTransform(-34,-33.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#876F56").s().p("AgdADQAagHAcgEIAGAAQAAAAgBABQAAABAAAAQAAABAAAAQAAAAgBAAQgdAIgdAGIAAgGg");
	this.shape_216.setTransform(-34,-45);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#6E5640").s().p("AAiADIhJAAIAAgFQAnAAAoACIAAADIgGAAg");
	this.shape_217.setTransform(-27,-46.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#6D6E6F").s().p("AALARQgNgOgMgOIAAgGQASALAKATIABAFQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_218.setTransform(-16.6,-25.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EBE9E8").s().p("AgXAhIAAgGIAAg8IAGAAIAGAAQALAPAOAOQABAAAAABQABAAAAAAQABAAABAAQAAABABAAQAJAQgIAJQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQgDAAgDACQgJAFgOAAIgNgBg");
	this.shape_219.setTransform(-17,-23.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#9C938F").s().p("AAAAnQgCgIAAgJIAAgHQABgigNgUIAMAAIAFAAQADAEAEABQACACADAAIAAAGIgGAAIgGAAIAAA8IAAAGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAg");
	this.shape_220.setTransform(-19.7,-24.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#4D3D33").s().p("AA6AuQgPgFgJgMQARgGgKgIQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAPgDgGgUQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGAAQgMABgGAFIAAAHIgHgEQgKAmglgLIAAgGQAMgRAFgZIABgGIADAAQgXgNgdANIgGAAIgGAAIAAgGQBRgTBGAWIAAADIgGAAIgMAAQAOAUgCAiIAAAGIgGAAIAAAMIAAAGIgGgBg");
	this.shape_221.setTransform(-27,-25);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#775F4B").s().p("AAjAzQggg4gpguIAGAAQAoAlAfAwIABAGIAAAGIAAAGIgFgBg");
	this.shape_222.setTransform(-12.3,-25.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#856647").s().p("ACPA9IgeAAIAAgGQAEgggKgRQgDAAgCgBQgvgghFgJQADADABAEQACACAAAEIgGAAQgEAAgCgCQgcgOgcgPIgGAAIhDAGIAAgGQAWAAAPgFIAGgBQCUgCBNBFQAGAFgCAMQgFAjAggEIAAAGIgHAAg");
	this.shape_223.setTransform(-14.8,-28.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#826B55").s().p("ACuADQAPgGAVABIAHAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgqAJIAAgGgAizAIQgWgFgPgLQAaACAPALQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABIgGgBg");
	this.shape_224.setTransform(4.2,-43.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#876C52").s().p("AAVAJQgbgFgUgMQAdACAYALIAAAEIgGAAg");
	this.shape_225.setTransform(-20.3,-45);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#81634A").s().p("AgEAUQAVgVgcgWQApAQgeAeQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAg");
	this.shape_226.setTransform(-4.1,-41.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#7C644E").s().p("AAMAJQgTgEgKgNQAUAEAOAJQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIgGAAg");
	this.shape_227.setTransform(-9,-40.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#846950").s().p("AAfAOQglgKgdgSQAmAIAhASQAAAAAAAAQAAAAAAABQAAAAAAABQABABAAAAIgGgBg");
	this.shape_228.setTransform(-12,-47.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FCCD9F").s().p("AgdAMQAWgIgggTQAaALAjABIAGAAIAGAAIAGAAQgUAQgiACIgPABQgNAAANgEg");
	this.shape_229.setTransform(-40.5,-8.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FECD99").s().p("AgLAAIgBgCQAdAFgFAAIgXgDg");
	this.shape_230.setTransform(-40.7,-4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FBCE9F").s().p("AgMADQAygRgyAUg");
	this.shape_231.setTransform(-46.2,-9.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FBD0A5").s().p("AgIAAQgDgSAAgTQAUAaADApIAAAGQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgKAAgGgmg");
	this.shape_232.setTransform(-55.4,-4.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#6D5740").s().p("AAVBbQgbhUgRhcIAAgGQAYA/AOBMIADABIAAAGQACARAEAOIAAAGQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAg");
	this.shape_233.setTransform(-54.2,7.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#6E5842").s().p("AAJAtQgJgvgLgrIAGAAQANAjAEAsIAAAGIAAAGIgDgBg");
	this.shape_234.setTransform(-57.9,-5.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FECF9C").s().p("AgDAHQgIgDAEgMQAcgGgSAYg");
	this.shape_235.setTransform(-54.6,-9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#826850").s().p("AgCAiIAAgGIAAg9IAFAAIAAA9IAAAGIgFAAg");
	this.shape_236.setTransform(-58.8,-13.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#806855").s().p("AgFAlIAAgHIAAgjQAJgIgBgXIADAAIAAAMIAAAHIAAAMIAAAFIgGAAIAAAeIAAAHIgFAAg");
	this.shape_237.setTransform(-58.5,-20.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FECE9B").s().p("AgDgPIgBgGIAJArIgIglg");
	this.shape_238.setTransform(-54.9,-19.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#F7C99B").s().p("ACEB0IhcAAIgGgBQglgJg2AEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgVgJgaAAQAAgQgOgFIgBAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIgCAAIgNACQhTAFAIheQBFgDgpAjQAZgVAgANQA3ALA9AEIAAgEIAMAAIAGAAQAwAYA9gUQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAXAKAggBIAAgCQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAgBIADAAQAGgdgWgGIgBgFQgegxgqgmQAAgDgBgCQgCgEgDgDQBHAJAuAgQACACADAAIAAA9IAAAGQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgHAPgIANIAAATIAAAGIgDAAQAGBDg6AAIgGAAg");
	this.shape_239.setTransform(-25.2,-20.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#F8D0A6").s().p("AgIgGQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIATAVIgSgRg");
	this.shape_240.setTransform(-47.7,-12.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FDD2A6").s().p("AgFgEQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAPARIgNgNg");
	this.shape_241.setTransform(-49.8,-15);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#5B4132").s().p("AAPAJQgWgDgOgOIAHAAQARAGARAHQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgGAAg");
	this.shape_242.setTransform(-39.8,-21.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#DDB48B").s().p("AABA9QhCgEgfgnIgBgFQgKgaAFgpIANgFIAFgBQAFAKAUgDIAGgBQANAPAYADIAGAAIAGAAIAFAAQAwAOA3AIIABADIAAADQg9gDg2gMQgggNgZAVQAogkhFADQgIBeBUgFIANgBIABgBQAAAAABAAQAAAAAAAAQgBABAAAAQAAAAgBAAIACAAQANAFgBAQIgGAAg");
	this.shape_243.setTransform(-36.6,-16.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#634E3D").s().p("AgSAAIAAgGQAYgDALAKQACACAAADIgHAAIgGAAIgIABQgMAAgEgHg");
	this.shape_244.setTransform(-43.2,-22.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(30,30,30,0.545)").s().p("AgOAWIAAgGQAOgTAMgXQAAAAAAAAQAAAAABAAQAAAAABAAQABgBAAAAIgBAHQgJAcgTATIAAgFg");
	this.shape_245.setTransform(-78.3,-37.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#6E5540").s().p("AgUAJQAUgJARgNQABgBADAAQAAADgBACQgMAUgcAEIAAgGg");
	this.shape_246.setTransform(-40.4,-28.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#403232").s().p("AArAqQgtgNguhHQA+AgAeAhQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAAANIAAAGIgGgBg");
	this.shape_247.setTransform(-51.7,-31.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#6F5946").s().p("AgUAJIAAgGIAAgLIAAgGIAGAAQgGAgAkgIIAFgBIAAAEQgMACgJAAQgMAAgIgGg");
	this.shape_248.setTransform(-44.7,-27.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#614831").s().p("AAAAQIAAgGQABgTgNgFQAQgEAEAJQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAAGQAEANgKgBIAAAGIgGAAg");
	this.shape_249.setTransform(-46.8,-31);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#A8825D").s().p("AgLAFIgfAAIAAgFQAqgFArACIAAADIgGAAQgagBgQAGIgGAAg");
	this.shape_250.setTransform(-40.8,-35.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#946E4A").s().p("AhIADQAMAAALgCQAAgBABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQARgHAaABIAFAAQAlAAAkADIAAADIgGAAIgrAAIAAAFIgGAAIgdAAIgGABQgbAEgcABIAAgGg");
	this.shape_251.setTransform(-36.5,-34.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E9C29B").s().p("AhCALIAAgGQAKABgDgMIgBgGIAAgGQAGgGAHgFQADgCADAAQAcgBAagEIAGgBQARALAggBIAAADIgGABIgxAXIAAAFQgDAAgCACQgQANgVAKIAAAGIgGAAIgNACQgXAAAFgbg");
	this.shape_252.setTransform(-39.6,-30.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#825F3F").s().p("AADAOQgEgJgQAEQgDAAgDgBQgRgHgIgPQAgAdAYgcQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIAeAAIAHAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgLADgNAAIAAAGQgDAAgCACQgHADgGAGIAAAGQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_253.setTransform(-46.2,-33.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#F8CDA3").s().p("AgUgNQAEgPAOgDIAFAAQACANAQACIABADQAAAJgCAIQgEASgCgOQgGgfgIAYQgKAfgFAAQgHAAACgtg");
	this.shape_254.setTransform(-51.5,-21.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#876343").s().p("ABJBrIgGAAQhAgKghgnIAAgGQgDgugJgnIgBgDQgQgCgCgNQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgYgUgRgZIAAgGQAlAwA9AYIAFABIAAAGIgFABIgNAGQgFAoAKAaIABAGQAeAnBDADIAGABIABADQAfAJgtAAIgFAAg");
	this.shape_255.setTransform(-45,-19.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#F9C797").s().p("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hEgsQAAABAAABQAAAAABABQAAAAAAAAQAAABAAAAgAk/i/QAyAIgzgLIABADgAhLjFQBQAAhQgDgAARjXQAwAWgygZQAAAAAAABQAAABABAAQAAAAAAABQAAAAABAAgAiyjXQA/ASBAgPIgGAAQhEAEg2gKQAAAAAAABQAAABAAAAQAAAAAAABQABAAAAAAgAkVjaQAAAAAAABQAAABAAAAQABAAAAABQAAAAAAAAQAsAMAvgPIgGAAIgygCIgkACgAnGj5QgEANAJADIAHADQAOgUgQAAIgKABgADBj5QAAAMAEACQAlANgpgtIAAASgACikFQALA3gBhPQAAgVgBAAQgDAAgGAtgAl3jzIAAADQAbgLgCAAIgZAIgAA6j5QAVAUAFgzIAAAAQgCAAgYAfgAmBkZQAnAngpgrQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAgACEkRQgEANAEgGQAQgUgCAAQgBAAgNANgABrkwIABATIABAJQALgigFAAQgCAAgGAGgAmUkxQAeAdgfgiQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABgAnFlnQARBPgShVIABAGgABflOIAAAMQAggMApAGIADAAQgUgIgdAAIgbACgACcDmIAAABIABABIgLAAIAKgCg");
	this.shape_256.setTransform(-9.9,15.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#F5CDA4").s().p("AgRBeQgDgqAAgrIAAgGIAAgLQALgggEgvIgBgHQAGAAAFACIABAFQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAgAjgQADIgDgGQgdA/ACBSg");
	this.shape_257.setTransform(-55.8,-21.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#B7997C").s().p("AgDAkIAAgMIAAgGIAAg8IAFAAIABAGQAEAugKAhIAAgHg");
	this.shape_258.setTransform(-57.5,-26.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#775E4F").s().p("AAGAMIgBgEQgFgCgFAAIgGAAIAAgGIAAgLQAOACAHAKQACACAAADIAAAGIgGAAg");
	this.shape_259.setTransform(-56.6,-31.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#6E5843").s().p("AASAeQglgGgFgpQALAAgBgNIADAAIAAAGIAAAHQAEAiAfAKQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAIgHAAg");
	this.shape_260.setTransform(-53.6,-37.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#79624B").s().p("AgOAYIAAgGIAAgFIAAgHQAOgOAMgUQAAAAAAgBQAAAAABAAQAAAAABAAQABAAAAgBQAAADgBADIgcA3IAAgHg");
	this.shape_261.setTransform(-53.3,-42.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#836D58").s().p("AgRADIAegKIAFgBQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgPAJgTAEIAAgGg");
	this.shape_262.setTransform(-38.9,-43.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#836751").s().p("AgwAcQAoglAzgXIAGgBIgBAFQgyAcguAiIAAgGg");
	this.shape_263.setTransform(-41.4,-45.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#795C40").s().p("AgRADQAJgFAGgLQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQgEAUAQgCIAGgBQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgKAHgHAAQgKAAgHgMg");
	this.shape_264.setTransform(-46.3,-40.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#7E654D").s().p("AgnAlIAAgGQAKgPANgMQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAXgUAagUQACgCADAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQgoAlglArIAAgGg");
	this.shape_265.setTransform(-47.8,-50.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#0E0906").s().p("Ah7GVQh2hdg6iZQArAlAdAxIABACQgNh4gDiWQgBhuAmhSQAJgVAKgRIgDADQAfhdBQguQACgBADAAQgHgcAYAXQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQgmAUgWAkIgBAFQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQgNAMgKAPIAAAGIAAAGQAAAAgBAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgMAUgPAPIAAAHIAAAGIgDAAQAAANgKgBQAEAqAnAGIAGABQAJAQAQAHQADABADAAQANAFgBAUIAAAGIAAAGQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgfgig/gfQAuBIAuAMIAGABQAOALAcgHIABgEQAdgEAMgVQACgCAAgDQAhgSAsgKQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIAGAAIBDgGIAGAAQAcAPAcAOQACACAEAAQAqAtAhA5IAEABQAAADABACQAOASgVACIAAAFQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgNgNgfADIAAAGIgGABQgoAMgogNIAAgEQhAgRhMgEIgGAAIgGAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQgRgJgSgGQAAgDgBgCQgLgKgZADIgFgBQg9gZglgvQAAgEgCgCQgHgKgQgDIAAAMIAAAHIAAA9IAAAGIgDAAQABAWgKAIIAAAkIAAAGIAAA9IAAAGQAMArAJAwIADABQASBcAcBUQAAABAAAAQABAAAAAAQAAAAABAAQABAAAAAAIABAGIARA6IgBgBgACUg+QAKAIgSAGQAJAMAQAFIAGABQAbAPAbgRIABgEQABAAAAAAQABAAAAAAQABAAABAAQAAgBAAAAQAUgUgYgJIgBgGQgLgUgTgLQgDAAgCgBQgEgCgDgDIgBgDQhGgWhSATIAAAGQgDAAgCABQgMAKgNAHIAAAGQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgCAJgOgDQACAQAQACIAGAAQAXALAmgFIAGAAQAnALAKgnIAGAEIAAAGQgBAKAOgEIAFAAQAAABAAAAQABABAAABQAAAAAAABQAAAAABAAg");
	this.shape_266.setTransform(-37.7,-17.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#282A2A").s().p("AgZAUQAjg6AQALIgDAAQgPApghAQg");
	this.shape_267.setTransform(-51,-94.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#846952").s().p("AgRAJIAAgGQARgDANgHIAFgBIAAAGQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgJAKgRAAIgFAAg");
	this.shape_268.setTransform(-16.9,-68.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#90755E").s().p("AgRADQAMgIARgCIAGgBIgBAEQgRAHgRAGIAAgGg");
	this.shape_269.setTransform(-13.3,-69.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#886F55").s().p("AgYAGQAUgKAWgHIAHAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAAAQgXALgYAJIAAgGg");
	this.shape_270.setTransform(-32.8,-61.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#866A55").s().p("ABAAFQhBgLhEAMIAAgGQBFgNBGAQIAAADIgGgBg");
	this.shape_271.setTransform(-26.4,-50.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#1E140E").s().p("ADFA6IgSAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQgOgKgVgEQAAgDgBgCQgHgIgQABQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgQgMgZgCIgBgEQgXgLgfgDIAAgDQgngDgoAAIAAAGIgGABQgdAEgaAHIAAAGIgFABIgfALIAAAGQAAABgBAAQAAABAAABQAAAAAAAAQgBABAAAAQgOAIgVAAIAAAGIgGABQgSACAGgVQAtghAzgdIABgEIAAgGQAIgIARABIAGABQBEgOBBANIAGABQATACANAJIAFABQAeATAmAKIAFABQASAEALAJQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAdAWgVAWQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgGAAg");
	this.shape_272.setTransform(-25,-45);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#F8C899").s().p("ADQE4QgOgEgRgBIgGAAIgBgEQgLgDgNAAIAAgDQgbgDgbAAIAAAGQggAEAFgiQACgMgGgGQhMhGiVACIgBgDQgOgDgQAAIgGAAIAAgDQgkgDglAAIAAgDQgsgBgqAEIAAAGQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgYAcghgeQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgfgKgEgkIAdg3QABgDAAgDQAlgqApgmQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAIAAgGIBUguQAAAAAAAAQAAgBABAAQAAAAAAgBQAAgBAAAAQAZgJAXgMQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBQA2gZA9gUQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBQAXACAJgMQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAQASgGARgIIABgEIAAgGQBlgbA7hFQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAigqAQAMQAMALACAZQABAMAJAGQA5CmBtBxQA9A/hdAGIgGAAQgWgBgPAHIAAAGQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAQgLALgVAAIgGABIgNAFQAAAQADAOIADABQAPATAogKIAAgDQA1gOA5gKIAHgBQAXAaAEAwIADAAIAAAGQAFAjgqgLIgGAAIgeAAIgBgDQgzgDg0AAIAAAGIgGABQgfACgSAQIAAAGIgDAAQABATgKAFIAAATIAAAGIgGgBgAkSAgIAAAGIgGABQg0AXgoAlIAAAGQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgGALgJAGQAMAWAXgRQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAgGQAWAAAOgIQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAVgEAOgKQAAgBABAAQAAAAAAgBQAAAAAAgBQABgBAAAAQAegGAegJQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAgBIBJAAIAGAAQAVANAcAFIAGABQAPAMAWAFIAGABQARgBAGAIQACACAAADQAKAOATAEIAGAAIATAAIAGAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAggfgqgQQAAgBgBgBQAAAAAAgBQAAgBgBAAQAAAAAAgBQgLgKgSgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgfgTgogIIgGgBQgNgJgSgCIgBgEQhFgQhHANIAAAHIgGgBIgEAAQgNAAgHAHg");
	this.shape_273.setTransform(-9,-52.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#050201").s().p("ABsKvQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQCihECJhYIAAADQghAvhAAOIgHAAQgaAqg6AXQg9AZggAaQABgEgSgQgAmVoIQAegKAXgRQABAAAAAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAngIAOgSQACgCAAgDQCNgzCShKIAAADQgTAqgkgFIgGAAQhKA2hfAlQheAlhJAYg");
	this.shape_274.setTransform(-2.6,-7.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#282A29").s().p("AgOg/IAAgGQAIgmAQgXIgBAFQgWCNAdBzQgjhNAFh1g");
	this.shape_275.setTransform(-80.8,-5.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(47,47,47,0.757)").s().p("AgIAJIAAgLQAJgCAEgJQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAIAAAGQgEAPgNAIIAAgGg");
	this.shape_276.setTransform(-80.8,-32.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(35,36,36,0.608)").s().p("AghAQQAagWAjgNIAGgBQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQgeAVgjAQIAAgFg");
	this.shape_277.setTransform(-35.6,-118.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(33,34,34,0.639)").s().p("AgaADQAUgJAbgCIAGAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgXAMgeACIAAgGg");
	this.shape_278.setTransform(-20.3,-125.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#292B2B").s().p("AgHAAQAggGggAJg");
	this.shape_279.setTransform(-47.8,-100.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#242626").s().p("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");
	this.shape_280.setTransform(-1.4,2.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(14,15,16,0.973)").s().p("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");
	this.shape_281.setTransform(1.3,0);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(248,200,153,0.973)").s().p("ACGBOIgBACIAAAAIAAABQgEACgDgBIABgFIAAgBIADAAIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgBIgBAAIgBgBIAAgBIgCgHIgFgGIAAAAIgFAAQgEABgBgCQgWALgWgIQgZgBgQgOQgagDgagIIgKgCIgHAAQgPACgMgBQgIAHgJgIIAAgBIACgBIABAAIgDAAIgHgBQgUAAgTABIAAADIgDAJIAAABIgDABQgOAFgFAMQgCAEAEACIAEACIgDAAQgGADgGAFIAJgJQgEgDgBgFIgCgBIgDgCIgCgCQgRABgBgMIgDAAIAAAHIgCgHIgCgJIgBgNIAAgOIABgOIABgJQgDgHACgMIAAgGQAKABgEgOIAAgGIAAgGQAGgGAHgEQACgCADAAQAdgCAagEIAGAAQARALAggCIAAADIASAAIAHAAIAGAAIBCgGIAGAAIAWAMIARACQANACALAEIAFACIgDABIABACQABACAAAEQAqAlAeAwIABAFQAWAGgGAeIgDABQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAADIgGAAQgbAAgVgJgAguBNQACgEgBgDIARADIAgAGIAAACQgZgBgZgDgAhTBHIADgHIALACIgLAGIgDgBgAh8A+IAEgDIAEgDIAMAEQgDAEgEACIgNgEg");
	this.shape_282.setTransform(-26.5,-25.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#876D56").s().p("AgBgBIACAAIAAABIAAAAIAAABIAAABIgBAAIgBgDg");
	this.shape_283.setTransform(-13.7,-18.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#A38469").s().p("AgxgCQAoADAoAAQgSAEgQAAQgYAAgWgHgAArgCQADAAAEgCIgBABIgGACIAAgBg");
	this.shape_284.setTransform(-18.3,-17);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#85807E").s().p("AgEAAIAGAAIADAAIgBAAIgBABIgHgBg");
	this.shape_285.setTransform(-35.7,-22.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#F7C99B").s().p("ACEB0IhcAAIgGgBQglgJg2AEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgVgJgaAAQAAgQgOgFIgBAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIgCAAIgNACQhTAFAIheIACAAIACAHIAAgHIADAAQABALARgBIACACIADACIACABQABAFAEADIgJAJQAGgFAGgDIADAAQAOAEAPgJIANAFIgFABQgKADADALQADAPARgJQAKgEAHgJIADgDIADAAIgCACQgHACADAHQAJASAWgPQAGgFADgEQAZADAaACIAAgDIAbAEQAlAOAsgKIAEAAQAFAAADgDIAHgCIAAgBIABAAIAAAAIAAgCQAYAJAfgBIAAgCQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAgBIADAAQAGgdgWgGIgBgFQgegxgqgmQAAgDgBgCIgBgCIADgCIgGgBIgBgCQBHAJAuAgQACACADAAIAAA9IAAAGQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgHAPgIANIAAATIAAAGIgDAAQAGBDg6AAIgGAAg");
	this.shape_286.setTransform(-25.2,-20.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#5B4132").s().p("AAAAAIAAAAIAAAAg");
	this.shape_287.setTransform(-40.3,-21.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#DDB48B").s().p("AAxA7QhBgDgfgoIgBgFQgKgaAFgpIAGgCIACAJIgCAAQgIBeBSgFIANgCIACgBQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAABIABAAQAOAEAAARIgHgBg");
	this.shape_288.setTransform(-41.4,-16.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#6F5946").s().p("AgDALIAAgGIAAgMIAAgGIAFAAQgCAMAEAGIgBAJIgGgDg");
	this.shape_289.setTransform(-46.5,-28);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#876343").s().p("ABJBrIgGAAQhAgKghgnIAAgGQgDgugJgnIgBgDQgQgCgCgNQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgYgUgRgZIAAgGQAjAtA3AYIABAOIgGADQgFAoAKAaIABAGQAeAnBDADIAGABIABADQAfAJgtAAIgFAAg");
	this.shape_290.setTransform(-45,-19.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#0E0906").s().p("AheGVQh2hdg6iZQArAlAdAxIABACQgNh4gCiWQgChuAmhSQAJgVALgRIgDADQAehdBQguQADgBACAAQgGgcAXAXQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQgmAUgWAkIgBAFQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgOAMgKAPIAAAGIAAAGQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgMAUgPAPIAAAHIAAAGIgDAAQABANgLgBQAFAqAmAGIAHABQAIAQAQAHQADABADAAQAOAFgCAUIAAAGIAAAGQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgfgig+gfQAtBIAvAMIAFABIAHAEIgCAPIAAAOQg3gZgjgsQAAgEgCgCQgHgKgQgDIAAAMIAAAHIAAA9IAAAGIgCAAQAAAWgKAIIAAAkIAAAGIAAA9IAAAGQAMArAJAwIAEABQARBcAcBUQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAIABAGIARA6IgBgBgAA2gBQgDgGAHgDIACgBIAKgGIgKgCIgDAHIgDADQgIAJgJAEQgRAIgEgOQgCgKAKgDIAFgCQAEgCADgEIgMgEIgEADIgEADQgPAJgNgFIgEgCQgEgCABgEQAGgMANgFIADgBIABgBIgBAAIACgJIABgDQATgBATAAIAIACIAAABQAJAIAHgHQANABAPgCIAHAAIAKACQAaAIAbADQAQAOAZABQAWAIAVgLQACACAEgBIAEAAIABAAIAFAGIACAHIAAABIAAABIABAAIABABIAAAAIAAABIgDAAIABAEIAAABIgCAFIAAABQgDACgFAAIgEAAQgpAAgogDIgcgDIghgGIgRgDQAAADgBAEQgDAEgGADQgKAHgHAAQgJAAgFgJg");
	this.shape_291.setTransform(-40.6,-17.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#070000").s().p("AgqACIAAgCQAVgEAbgBIAlAFQgVAGgZAAQgSAAgVgEg");
	this.shape_292.setTransform(32.6,-14);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#856647").s().p("ACPA9IgeAAIAAgGQAEgggKgRQgDAAgCgBQgvgghFgJIABACQgKgEgNgCIgRgCIgXgMIgGAAIhDAGIAAgGQAWAAAPgFIAGgBQCUgCBNBFQAGAFgCAMQgFAjAggEIAAAGIgHAAg");
	this.shape_293.setTransform(-14.8,-28.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#A7886C").s().p("AAAAAIAAAAIAAAAg");
	this.shape_294.setTransform(22.9,-23.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#F9CD9F").s().p("AhCBiQASgHAZAJIALAEQgagWhBgIIAAAGIgGgBQgQgCAEgWIAAgGIAAhIQAAgDgCgCQgHgLACgVQALgCgEgQIAAgGIAAgGIAAgGQAzgoBRAYIABAAIADgBIAGABQAnAFAoABQAFAAADgEQADgHgCgDIAFACQAJAGACAMIACAWIABALQACAWgBAVIgCAOIgEARQgCAIgIgBIgKgCIgkgEQgtgGgsgCIgGgBIgHgBQgSgDgQgHIgJgFIgPgJIAAAAIgEADQACAgAaAKQgLABgLAFQAAAAAAABQABABAAAAQAAABAAAAQAAABABAAQAMANAdABIADAAQgbAYAMAHQAZgMAFAAIAGgBQgMARASACQAMgBAHgCIALgDQgDAOADAEQAFALALAFQBKAnAChQQAAgJgEgCQgqgXg6AKQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgOgOgQgFQALgBALAJIB6AAIAGAAIAAAxIAAAGIAAAGQAEAXgKAHIgGAAIgOAAQhaAAhCgYgAhsArIgBAJQAdgKgjgkQAIANgBAYgAgjhUIABAAIgBAAg");
	this.shape_295.setTransform(26.5,-15.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#927C68").s().p("AgMARQgFgCgDgEQAoALgEgiIAAgGQAKALgHAYIgDAAIgHABIgFABIgQgCg");
	this.shape_296.setTransform(35.3,-29.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#84613F").s().p("AhzAYQgDgMAAgMIAAgFQASgQAfgCIAGgBIBhAAIAGAAIAeAAIAGAAQADAEAFADIARABIAGAAIAGgBIAAADQAEABACACQACAEgEAHQgCACgFAAQgpAAgngEIgGgCIgDACIAAgBQhRgXg0AmIAAAHIAAAFIgDAAg");
	this.shape_297.setTransform(25.5,-26.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#030202").s().p("AgvOYIgTAAIAAgGQAFhCgFgsQgDgDgEgCQgIgCgEgEQgUgYAnAWQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIAQgWIAIgNQAvhPAQhcQAogxAdhUQATg1gPgzQgliBhKhgQgZgggDgZQAOgBgHgWQgsiEAOioQANiXADh7IABgNQABgWgBgVIAAgMIgBAAIgDgWQgCgLgIgHQAEgGADgJIAAgGQgJhbgygzQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQASgXgcgiQgVgZgSgdQBMA4AlB/IAEABQADAegDANIAAAFQAZAoABBBQACA0gQAtQAHBTgICDQgKCTALBVQALglgJA+QgCAOAAAPQAOgWANA6QAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAHAWgFAKQgCACAAACQA+BXA6BhQAbAtAPBEIAFAaQANBIgoAPQAMgpgfAEIgGAAQgaBTgpBDIAAgDQgBgogFAhIAAAHQgRBNgbAmQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgTBMgLByIAAAGIgGAAg");
	this.shape_298.setTransform(44.1,36.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#060101").s().p("AALDiIgBAAIAHABQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAIgHgDgAggDTIAJAEQgIAAgIACIAHgGgAARjgQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAZAVIgXgRg");
	this.shape_299.setTransform(21.9,-38.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#242626").s().p("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BAAQAAAAABAAQABABAAAAQABAAABAAQgrA0AcBVQAQAzgNBDQghCkhmBkQgKApgZAtQgCADAAADIgGAAgADrS9QAAAMAGAEIAIAFQAfgrgtgDIAAAZgAl1SqQAUAmgWgsQAAADACADgAmGRTQAUgJgXgHQgEATAHgDgAggP5IAAADQAagLgCAAIgYAIgAmnPLQBDAHhDgKgAl0NKQgVAfgYAcQgFAUAHgDQAegPARg/QgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABgAFwNtQACAJAEADQAZARALADQAqAOAWgKQAAAAAAgBQgBgBAAAAQAAAAAAgBQAAAAAAAAIhtgnQADADABADgAEiNhQAVAOAbAAIgBgHQACgNgSAAQgLAAgUAGgAEfNaQgBgVgzADIgBgEQg3gagdgZQgLgLABgaQAAg0gbgDIABAHQAEA3AOAeQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQA/A+BbAGIAAAAgABpKQQgCAUAEgDQAkgcgkgTQAAAQgCAOgABfJHQAAABAAABQAAABAAAAQAAABAAAAQABABAAAAQASAQgBAEQAggaA9gZQA6gXAagqIAHgBQBAgOAhguIAAgDQiJBYiiBDgAkzqoQAAADgCACQgOASgnAHQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAAAQgXARgeAKIAAAGQBJgYBeglQBfglBKg3IAGABQAkAFATgqIAAgDQiSBKiNAzgAD5p5QAwAlgxgpQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAgADIq8QASAUARAkQARAOgGgYQgNgugigFQAAADABACgAGWkDIABAAIAAAMIgBgMg");
	this.shape_300.setTransform(-1.4,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_178},{t:this.shape_281},{t:this.shape_177},{t:this.shape_300},{t:this.shape_176},{t:this.shape_175},{t:this.shape_273},{t:this.shape_174},{t:this.shape_173},{t:this.shape_299},{t:this.shape_298},{t:this.shape_224},{t:this.shape_170},{t:this.shape_297},{t:this.shape_167},{t:this.shape_296},{t:this.shape_165},{t:this.shape_295},{t:this.shape_163},{t:this.shape_294},{t:this.shape_161},{t:this.shape_194},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_191},{t:this.shape_256},{t:this.shape_293},{t:this.shape_156},{t:this.shape_185},{t:this.shape_152},{t:this.shape_153},{t:this.shape_154},{t:this.shape_155},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_145},{t:this.shape_146},{t:this.shape_147},{t:this.shape_144},{t:this.shape_292},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_113},{t:this.shape_114},{t:this.shape_111},{t:this.shape_112},{t:this.shape_110},{t:this.shape_109},{t:this.shape_107},{t:this.shape_51},{t:this.shape_108},{t:this.shape_105},{t:this.shape_106},{t:this.shape_104},{t:this.shape_182},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_274},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_90},{t:this.shape_89},{t:this.shape_91},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_291},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_257},{t:this.shape_258},{t:this.shape_290},{t:this.shape_254},{t:this.shape_253},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_289},{t:this.shape_247},{t:this.shape_245},{t:this.shape_288},{t:this.shape_287},{t:this.shape_241},{t:this.shape_240},{t:this.shape_286},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_212},{t:this.shape_285},{t:this.shape_284},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_193},{t:this.shape_192},{t:this.shape_283},{t:this.shape_187},{t:this.shape_186},{t:this.shape_183},{t:this.shape_181},{t:this.shape_179},{t:this.shape_180},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_59},{t:this.shape_60},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_53},{t:this.shape_52},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_54},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_37},{t:this.shape_39},{t:this.shape_38},{t:this.shape_35},{t:this.shape_34},{t:this.shape_36},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_282}]},6).to({state:[{t:this.shape_178},{t:this.shape_281},{t:this.shape_177},{t:this.shape_280},{t:this.shape_176},{t:this.shape_175},{t:this.shape_273},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_224},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_194},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_191},{t:this.shape_256},{t:this.shape_223},{t:this.shape_156},{t:this.shape_185},{t:this.shape_152},{t:this.shape_153},{t:this.shape_154},{t:this.shape_155},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_145},{t:this.shape_146},{t:this.shape_147},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_113},{t:this.shape_114},{t:this.shape_111},{t:this.shape_112},{t:this.shape_110},{t:this.shape_109},{t:this.shape_107},{t:this.shape_51},{t:this.shape_108},{t:this.shape_105},{t:this.shape_106},{t:this.shape_104},{t:this.shape_182},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_274},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_257},{t:this.shape_258},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_193},{t:this.shape_192},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_184},{t:this.shape_183},{t:this.shape_181},{t:this.shape_179},{t:this.shape_180},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_59},{t:this.shape_60},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_53},{t:this.shape_52},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_54},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_37},{t:this.shape_39},{t:this.shape_38},{t:this.shape_35},{t:this.shape_34},{t:this.shape_36},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_178},{t:this.shape_281},{t:this.shape_177},{t:this.shape_280},{t:this.shape_176},{t:this.shape_175},{t:this.shape_273},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_224},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_194},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_191},{t:this.shape_256},{t:this.shape_223},{t:this.shape_156},{t:this.shape_185},{t:this.shape_152},{t:this.shape_153},{t:this.shape_154},{t:this.shape_155},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_145},{t:this.shape_146},{t:this.shape_147},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_113},{t:this.shape_114},{t:this.shape_111},{t:this.shape_112},{t:this.shape_110},{t:this.shape_109},{t:this.shape_107},{t:this.shape_51},{t:this.shape_108},{t:this.shape_105},{t:this.shape_106},{t:this.shape_104},{t:this.shape_182},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_274},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_90},{t:this.shape_89},{t:this.shape_91},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_257},{t:this.shape_258},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_193},{t:this.shape_192},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_184},{t:this.shape_183},{t:this.shape_181},{t:this.shape_179},{t:this.shape_180},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_59},{t:this.shape_60},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_53},{t:this.shape_52},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_54},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_37},{t:this.shape_39},{t:this.shape_38},{t:this.shape_35},{t:this.shape_34},{t:this.shape_36},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.6,-128.8,217.3,257.7);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,30.3,42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:42.8,scaleX:1.01,scaleY:1.01,y:0},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:0.1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:0},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:0.1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:0},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:0.1},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:0},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:0.1},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:0},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:0.1},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:0},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:0.1},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:0},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:0.1},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:0},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:0.1},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:0},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:0.1},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:0},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:0.1},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-42.8,60.6,85.7);


(lib.face5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(123.9,209.2,1,1,0,0,0,21,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:6.6,x:124,y:209.4},0).wait(1).to({x:124.1,y:209.6},0).wait(1).to({x:124.2,y:209.7},0).wait(1).to({x:124.3,y:209.9},0).wait(1).to({x:124.4,y:210},0).wait(1).to({y:210.2},0).wait(1).to({x:124.5,y:210.3},0).wait(1).to({x:124.6,y:210.4},0).wait(1).to({x:124.7,y:210.6},0).wait(1).to({x:124.8,y:210.7},0).wait(1).to({x:124.9,y:210.9},0).wait(1).to({x:125,y:211},0).wait(1).to({x:125.1,y:211.2},0).wait(1).to({x:125.2,y:211.3},0).wait(1).to({x:125.3,y:211.5},0).wait(1).to({x:125.4,y:211.6},0).wait(1).to({x:125.5,y:211.7},0).wait(1).to({y:211.9},0).wait(1).to({x:125.6,y:212},0).wait(1).to({x:125.7,y:212.2},0).wait(1).to({x:125.8,y:212.3},0).wait(1).to({x:125.9,y:212.5},0).wait(1).to({x:126,y:212.6},0).wait(1).to({x:125.9,y:212.4},0).wait(1).to({x:125.7,y:212.3},0).wait(1).to({x:125.6,y:212.1},0).wait(1).to({x:125.4,y:212},0).wait(1).to({x:125.3,y:211.8},0).wait(1).to({x:125.1,y:211.6},0).wait(1).to({x:125,y:211.5},0).wait(1).to({x:124.8,y:211.3},0).wait(1).to({x:124.7,y:211.2},0).wait(1).to({x:124.6,y:211},0).wait(1).to({x:124.4,y:210.8},0).wait(1).to({x:124.3,y:210.7},0).wait(1).to({x:124.1,y:210.5},0).wait(1).to({x:124,y:210.3},0).wait(1).to({x:123.8,y:210.2},0).wait(1).to({x:123.7,y:210},0).wait(1).to({x:123.5,y:209.9},0).wait(1).to({x:123.4,y:209.7},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBDIgJgBQgIgBgFgCIgFgEIgUgDQgXgFgWgJIgKgEIgEAAQgDAAgBgEIAAAAQgLgHgJgHIgDAAQgEAAgBgFIgBgFIAAgBIAAgGIACgDIABgBQAEgEAEgBIALgDQBHgIBHgLQBFgKBFgOQAggHAggEIAHgBIAGgCQAGgCAJACIAKABIAEgBQAGACADAEIABABQAJAJgPAQIgTASIgDAFQgaAhgpAPIgnANIgPAFQgvANgwAAQgRAAgSgBg");
	this.shape.setTransform(124.1,209.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F6A48").s().p("AgQAJQgDgGgFgEQAbgWAOAJQADADAFAAIAAAKQgFAAgCABQgNANgTAFQAAgFgCgEg");
	this.shape_1.setTransform(204.5,255.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E6F55").s().p("AgYAMIAAgKQAZgbAPAGQAEACAFAAQAAAFgCABQgYAPgXASIAAgKg");
	this.shape_2.setTransform(209.5,252.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#975B23").s().p("AgUgCQBSABhSAEg");
	this.shape_3.setTransform(199.1,254.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A1B05").s().p("AgJgSQgCgEAAgFIAXA3IgVgug");
	this.shape_4.setTransform(192.2,200.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96785C").s().p("AgKASQgJgSgFgTQAPAKAPAIQAEABAFAAIAKAAQAAAFgCAEQgIALgTAAQgFAAgBgCg");
	this.shape_5.setTransform(228.5,238);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9C6B44").s().p("AgDgcIgBgKIAJBNIgIhDg");
	this.shape_6.setTransform(225.5,229.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E626C").s().p("AAPAFIgKAAIgxAAIAAgJIBPAAIAKAAQAAAEgCABQgIAEgKAAIgKAAg");
	this.shape_7.setTransform(62.5,265.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D6548").s().p("AAGAmQgLgIgKgKQAAgFADgDQAJgOgMglQAkAtgGAYIgBAKQgFAAgDgCg");
	this.shape_8.setTransform(27.6,251);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#91613E").s().p("AgYBLIAAgoQAkgvAIhSIAFAAQgOCMgjAxg");
	this.shape_9.setTransform(31.5,231.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8B7A69").s().p("AhjAAQA3AAA2gFIAAgFQAnAKAzAEIAAAFIgKAAQgfACgcAAQhHAAg7gLg");
	this.shape_10.setTransform(117,278.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#351A0B").s().p("AgYgJQANgMAaACIAKAAQAAAFgBABQgOAFgOgBQgGAaAZgCIAAAFIgKABIgEAAQgbAAACgeg");
	this.shape_11.setTransform(98.5,209);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C8340D").s().p("AgfgCQB/ADh/ACg");
	this.shape_12.setTransform(116.2,200.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8CA98").s().p("AAUCvQgygEgngLIgKgBQi8glhSiNQBAgtA5AhQAEACAFAAQAkg7ANhRIABgKQCaA3Clg1QAFgCAFAAQAPB8BLA8IAAgFQgChGBkBBQACABAAAEQg2B+ibAdQgBAAAAAFIAAAFQhGgBgyAQIAAgFg");
	this.shape_13.setTransform(125,261);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CA340A").s().p("AgtAAQC3gHi3ALg");
	this.shape_14.setTransform(129.6,198.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#270703").s().p("AjxA8QgaACAGgbQAPABAOgFQABgBAAgFIAVgIQAEgCAFAAQC4goDNgYIAAgFQBKgeABA8IgFAAIgKAAIhQAAIAAAEIgGACIgHACQggAEgfAGQhGANhFALQhGAKhHAJIgLACQgEACgEAEIgEAAIAAAFIAAAFQgFAAgEACIgVAIg");
	this.shape_15.setTransform(124.2,204.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7A4129").s().p("AgFAFQgEgDgGgCIgEABIgJgBQgKgCgGACIAAgEIBPAAIAKAAQAAAEgBAAQgYAFgYAAIgBAAg");
	this.shape_16.setTransform(145.5,202.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C1795A").s().p("AgngIQApABAcgKQAFgBAFAAQAAAFgCACQgDADgFAAIAAAJIAAAKQgFAAgEACQgMAGgKAAQgWAAgQgbg");
	this.shape_17.setTransform(120,181.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7E431F").s().p("Ag2A7IAAgKIAAgKQAFAAADgCQACgDAAgFIAAgFQBegDgZhHQgKgmAdAnQAYAfgdASQg0AegpAnIAAgKg");
	this.shape_18.setTransform(128.5,177.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7B431B").s().p("AARBLQglgzgBhYIAAgKQAiBBAKBUg");
	this.shape_19.setTransform(125.3,158.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B63F1B").s().p("AjCAqQAqgvBCgaQACgBAAgFQCfgiB2AxQACAAAAAFIgBAFQjNAXi3ApIAAgKgAhogCQB+gBh+gEgAAPgbIAAAFQB0gHgfAAIhVACg");
	this.shape_20.setTransform(123.5,200.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8D512C").s().p("AhZg4QAUAMAjAvIARgDQAZgIAMALQAYAqAlgUQAEgCAFAAIAAAKQgFALgHACQgfALgRAAIgBAAQh6AAAEhxg");
	this.shape_21.setTransform(114,180.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8D7351").s().p("AgngEIBFAAIAKAAQAAAEgBAAQgVAFgRAAQgXAAgRgJg");
	this.shape_22.setTransform(141,146.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7F7C6F").s().p("AgsgEIBPAAIAKAAQAAAEgBAAQgYAFgTAAQgaAAgTgJg");
	this.shape_23.setTransform(141.5,144.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F6F2").s().p("AiiAeQAtg3A5gqQADgCAFAAQBsCbBVijQABgCAFAAQAPAKABAKQAEB3igAUIgJAAIhQAAIgKAAIgKAAQg4AAgEgyg");
	this.shape_24.setTransform(145.3,136);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#376544").s().p("AhjgXIAAgKQBCAIAoARQApARAJgpQAIgkAjAjQgFAAgBACQgsBTgyAAQguAAg1hLg");
	this.shape_25.setTransform(150,131.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#582B13").s().p("AgTgPIAKAAQAJAKASAFQACAAAAAEQgFAAgDADQgLAJgHAAQgNAAAAgfg");
	this.shape_26.setTransform(124,111.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#856642").s().p("AAeAFIhFAAIAAgJQAnAAAoAEIAAAFIgKAAg");
	this.shape_27.setTransform(152,121.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#704423").s().p("AjKFgIiNhOIABgKQAFgYgkguQAMAlgKAOQgCAEAAAFQgFAAgEgCQgGgDgFgFIAAgKIAAhQQBIjjAwkBIAKAFQAsglBLAMIABAFQBvDGCgCUQADADAFAAQAqgLBMAvQA0AhAUAuIAHgLQADgEAKAAQBEATgbBHQgBAFAAAFQiXBeizgEIgKgKQgfBShvgZIgcgCQgqgDgbASQgFAAgEgCgAkqg3QgJBQgkAxIAAAoIAAAUQAkgxAOiMIgFAAg");
	this.shape_28.setTransform(63.4,227.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#929292").s().p("AgFAjIAAhPIAJAAIAAAKQAHA0gQAbIAAgKg");
	this.shape_29.setTransform(30.6,189.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#98613C").s().p("AAUAPQgigBgPgSIAAgKIAnAJIAKABQAFAEADAGQACAEAAAFIgKAAg");
	this.shape_30.setTransform(42,179.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#89402B").s().p("AAEBOQgdguAHhRQAQABgFgWIgBgJQAIASATAGQACABAAAFQgFAAgBACQgaA9AWBCQgFAAgCgCg");
	this.shape_31.setTransform(32.9,160);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D58E6A").s().p("ABQCaIgogJIAAAKQgFAAgDgDQhphdgQi3QARACgGgXIgBgJQAbAMAVAVQACACAAAFIABAJQAGAWgRgBQgHBSAfAtQABACAFAAQgXhBAbg+QABgCAEAAQA3BoAhB9QACAFAAAFIgKgBg");
	this.shape_32.setTransform(35,163.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDC39B").s().p("Ah8i5QAjgsAKA/QAAABAFAAIABAJQAGAWgRgBQAQC3BpBdQADADAFAAQAPATAjABIAKAAQAJAKAHASIAEAMQj0gogFldg");
	this.shape_33.setTransform(34.5,164.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B08A65").s().p("AAjAFIhPAAIAAgJQAsABAtADIAAAFIgKAAg");
	this.shape_34.setTransform(80.5,133.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3A6744").s().p("AgSAwQg2gegbg5IAAgKQBEAIApAZQAfARAUgUQAJgJAMAFQAPAHADAQQgFAAgCACQgcAwhKAAQgFAAgEgCg");
	this.shape_35.setTransform(85,143);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F4F6F4").s().p("AingNQAqgxBFgTQAEgCAFAAQAbA6A1AdQAFACAEAAQBMAAAcgvQABgCAGAAQAPAKgBAKQgCBDhmAgIgLABQgmAHgfAAQh8AAgahhg");
	this.shape_36.setTransform(79.8,147.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9F7A5D").s().p("ABLAFIifAAIAAgJQBUAABVAEIAAAFIgKAAg");
	this.shape_37.setTransform(83.5,124.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1A120C").s().p("Aj0gPQBYAGgagrQgBgDAOgJQBAglBbgOIBPAAIAKAAQAFAAAEABQBsAgA1BWQAAAFgCACQhEA+haApIgKAAQgYACgWAAQjKAAhHiDgAgYhBQgFAAgEABQhGAUgpAwQAhB6C6gfIAKgBQBmggADhDQAAgKgPgKQgDgRgPgHQgMgGgJAKQgUAVgfgSQgqgahDgHIAAAKg");
	this.shape_38.setTransform(77.5,145.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#917257").s().p("AAtAFIhjAAIAAgJQA2AAA2AEIABAFIgKAAg");
	this.shape_39.setTransform(83.5,119.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#412417").s().p("AjJA7QBChnCZgQIAKAAIBkAAIAKAAQBoALhBAlQgEACgFAAIAAgFQhVgFhUAAIAAAKIgKABQg1AKg5AIQAAAFgDACQgrAtgYAAQgFAAgFgCg");
	this.shape_40.setTransform(75.2,126.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7F6663").s().p("AgMBQIAAgeQAQg9gChYIAFAAQAUB0gnBTg");
	this.shape_41.setTransform(59.3,60);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7F6260").s().p("AgMACQAygtgyA9g");
	this.shape_42.setTransform(31.3,51.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#452D29").s().p("AgFASQgNgSgKgTIAKAAQBTAqhAgIIAAAFQgEAAgCgCg");
	this.shape_43.setTransform(67.9,46);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#826964").s().p("AhZAdQA4hEBxgLIAKAAQgOAehPAbQgkAMghAcQgFAEgDAAQgJAAAAgWg");
	this.shape_44.setTransform(42,44.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#78615B").s().p("AgrATQATgYAngJQABgBAAgFQApgCgTAPQgCACAAAFQgFAAgEABQghAUgYAAQgHAAgGgCg");
	this.shape_45.setTransform(52.4,45.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4C312B").s().p("AjQJgQhjgygCiUQAQgnASgnQABgCAFAAQgOguAlgpQACgDAFAAIAfksQARimAqh7QBKhxBFhLQACgCAEAAQBIgrBYgaQAFgBAFAAQAlA2glAuIAIAEQACABAAAFQAAAFgBABQgnAJgUAZQAbAHAsgZQAEgCAFAAQAFAAADADQA9A/ApBUQAAAFgCAEQgNAYAPAbQgFAAgBABQgTBPgjA8QAAAFABAEQAVA7gqgmIgBAKQgtDJiQDGQAyAYhDAoQhDAoAsAQIAKgKQAzBHgfBtQgFAAgCgDQhEhghygzQgFAAAAABQgIAxgbBuQgFAAgEgCgADckXIAAAeIAAAUQAohTgUh1IgFAAQADBYgSA+gAg7mZIAAAPQAdgjgEAAQgDAAgWAUgACMoaQhyAKg3BFQABAhAQgOQAggdAkgMQBQgbAOgfIgKABg");
	this.shape_46.setTransform(36,93);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#51423F").s().p("AgdAoQAAgFgCgEQgDgGgFgFQAbgvAsgdQADgDAFAAQAAAFgCACQgiAcgXAiIAAAKIAAAKIgBAKQgCAUgCAAQgCAAgDgUg");
	this.shape_47.setTransform(62,22);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#492E2A").s().p("AhoA3IAAgFQAAgFADgCQALgNgigKQgFAAgFgCQhRgchPhPQAtABBMASIAJABQAAAFgCABQgIAEgKAAQBcA9CTAIQCXAJBZBHQiagXj1gMg");
	this.shape_48.setTransform(101.5,58);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6D5651").s().p("AAVBsQgngOgzgEQAAgFgCgBQhPgwgxhLIAAgFQBAAIhUgrIAAgKQAAgFgCgEQgDgGgFgFQDQA0DxASIAKAAQiVAIiqgNIAAAFQBdANAZAQIABABIgUAAIgdAAIgKAAIgJgBQhMgSgtgBQBPBOBQAdQAFACAFAAQAiAKgLANQgDACAAAFQgFAAgEgCg");
	this.shape_49.setTransform(88,52);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7A625E").s().p("AhZAMQBIgaBhgCIAKAAQhLAhhoABg");
	this.shape_50.setTransform(76,35.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#715E5A").s().p("AiGBGIAAgKQAYgjAigbQACgCAAgFIAAgKQBSglBhgWIAKgBIAUAAQilAnhoB4IAAgKg");
	this.shape_51.setTransform(73.5,17);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#78625D").s().p("AjcAxQBOgxgnAEQguAHAlgVQC8hLDdA2IACABQjGgNikA9IgBAAQBggLCRgHIAKAAIlJA2g");
	this.shape_52.setTransform(98.1,26.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#818284").s().p("AA3AFIh3AAIAAgJQBAAABAAEIABAFIgKAAg");
	this.shape_53.setTransform(106.5,0.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A17858").s().p("AgYgbIAUAAIAJAAQAKAUAIAUQACAEAAAFQAAAFgBAAIgGABQgaAAgQg3g");
	this.shape_54.setTransform(228.5,189.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#855938").s().p("ABzD+QiKgxg9iCIAFAAQgYhbgViUQABhgBFAGIAKAAQAiChAZCoIAAAKIgKAAIgTAAQARA+AfgHQABAAAAgFQAFAAACADQAyBLAhAqQgFAAgFgBg");
	this.shape_55.setTransform(227.5,178.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4F3120").s().p("AgJADQAihAgZBQQgDAHgBAAQgEAAgBgXg");
	this.shape_56.setTransform(205,163.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#764825").s().p("AAyHjQkGgRixhiQgFAAgBgBIgYhjQEtjRB3l/QASg6ALhEQAAgBAIgFQARgKAPAPQABgPAhgSQAZgOABAvQATAdAmgqQADgCAAgFQAXAvACA/IgFAAQBACSBtBlQACADAFAAQARCyAMCrIABAKQgFAAgEgCQgQgIgPgKQAFAUAJASQABACAFAAQAAAFgCACQhIA7hWAsQgFAAgEgCQgPgGgaAcIAAAKQgFAAgDgDQgOgJgcAWQAFAFADAGQACAEAAAFQgFAAgEACQgqAbgxAVIAAgFgABaGdQBTgEhTgBgAFzCKQASCLgTiVIABAKgAAgiOQAuBggwhpQAAAFACAEg");
	this.shape_57.setTransform(188,213.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6B513D").s().p("AgEAyIAAhtQAQAvgMBHQAAABgEAAIAAgKg");
	this.shape_58.setTransform(186.5,149);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9D5733").s().p("AgdARQAlgQAWgcIAAAGQAAAFgCAEQgMAkgtADIAAgKg");
	this.shape_59.setTransform(194,152.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E7C396").s().p("Ag3AdQAugEAMgjQABgFAAgFQAPgjATghQABgCAFAAQAgBFg1BDQghAtgUAAQgWAAgDg+g");
	this.shape_60.setTransform(196.6,152.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CE8C6C").s().p("AgsBaQAGhpgQhUQA9AgAuAyQACADAAAFQgFAAgCACQgSAggPAjIAAgFQgVAcgmARIAAgKg");
	this.shape_61.setTransform(195.5,144);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#15100A").s().p("AggB4IhGAAIgKAAQhPgFgeg3QA3iPCkgjIAJgBIBGAAIAKAAQAfAAAUAOQApAaAdgKIAOABQgnCzjNAdIgKAAgAgNBpQABAAAAgFQCfgUgEh2QAAgLgPgKQgkgjgIAlQgJAqgpgSQgngRhCgJIAAAKQgGAAgCADQg6AqgtA2QAFA4BBgFIAKgBQAhASA4gNg");
	this.shape_62.setTransform(147.3,134);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#422516").s().p("AiwAyQgSgFgKgKIAAgKIAAgKQBihLC1AGIAKAAQBBAeA0AqQADACAAAFQgmgWiOAAQh0AAhTA0QAAgFgCAAg");
	this.shape_63.setTransform(143.5,106.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F9C997").s().p("ABYNuQlTgwjGjPQjejlgrmVQAShTgIhrIAAgKQDJkEA6mQIABgKQDDCMFigHQCAgCBSA+QB2BZBBCSQBACRCFBNQAMBEAHBIIABAKIAABtIAAAKQgCBigQBaQgrEAiJCmQhwCHikBMQgxAXg5AAQgXAAgYgEgAhxJOIAAAEQABAFAFAAIADAAQAJAIAKAGIAAAAQABAEAEAAIADAAIAKAEQAXAJAXAFIAYAHQAFACAHABIAJABQBIALBLgcIAmgNQAqgPAZgiIADgFIATgSQAPgQgIgJIAAgBQAZAAAYgFQABAAAAgFIAFAAQgBg9hKAfQAAgFgCgBQh2gxigAjQAAAFgCAAQhBAagqAxIAAAKQgFAAgFABIgUAJIgKgBQgbgBgNAMQgDAgAhgCIAKAAIAVgJQAEgBAFAAIABACgAAZFfQAQAAAggKQAHgDAFgKQApgnA1ggQAcgRgXgfQgegnALAmQAZBHhfAEIAAAFQgFAAgFABQgcAKgqgBQgMgMgaAHIgRAEQgigwgUgLQgEByB7gBgABVAIQABBYAnA0IAFAAQgKhWgjg/IAAAJgAkmA6IAKAAQBagpBEg9QACgCAAgFQg1hXhsggQgEgBgFAAIAAgFQgtgFgtAAIAAAKQhbAOhAAlQgOAJABADQAaArhYgGQBPCRDxgQgAFPkjIgKABQikAjg4CQQAeA2BQAFIAKABQAcARAzgMQABAAAAgFQDNgeAoi0IgPAAQgdAJgogaQgVgNgeAAIAAgFQgogFgoAAIAAAKgAlsk3IgKAAQiaAQhCBoQAYANA1g4QADgCAAgFQA5gIA1gLIAKgBICgAAIAKAAQAFAAAEgCQBBglhogLIgBgFQg2gFg3AAIAAAKgABrmFQADgCAFAAQBTg1B1AAQCOAAAmAXQAAgFgDgCQg0grhBgeIgKAAQi2gHhiBNIAAAKIAAAKIgKAAQAAAxAggbg");
	this.shape_64.setTransform(114.5,151.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#70544D").s().p("AglgfQgCgDAAgFQAzAXAaAvQACAEAAAFQgogjglgkg");
	this.shape_65.setTransform(205,123);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7A7A7A").s().p("AAABLQgFhLAAhKQAQA6gHBRIAAAKIgEAAg");
	this.shape_66.setTransform(217.6,84.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6E5550").s().p("AgXgGQgCgBAAgFQA2AZgDAAQgCAAgvgTg");
	this.shape_67.setTransform(182.6,65.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4D312B").s().p("ALzODQgng5gMhLQgYiLg0hqQhQiiiPhlQgFAAgEgCQhBgeg4hYQAAgFgCgEQgGgKgMhRQgOAfgHgLQhIhlgbhiQgFAAgCgDQjTkzm6gBQgZgRhegMIAAgFQCrANCVgIIgKgBQjzgRjPg0QAFAFADAGQACAEAAAFQgFAAgBgCQgmhhgug9QAFgFAGgDQAEgCAFAAQAFAmAEgmIABgKQBoh5CmgnIgUAAIAAgKQDXgjDpAlQAyAIB3AkQBkAeAaA5QABACgFAFQgsgug3AUQgBABAAAFQCHBpBbCcQAbAuA5AWQA4AVAiAAQCGBCBZBvQACADAFAAQAHBZgMBGQAAABgFAAQgtg8gjgZIAAAFQAFA9AAAxIgFAAQhWg7gYhqIAAAPQgcBFAjA0QADAEAAAFQBCAwAsAQIAAgEQBQBYA+A6QADADAFAAQgBAoAiAvQACADAFAAQgPhMghg4QgCgDAAgFQCvC2hQFbQAAABgFAAQgkk/jAikQgCgCAAgFQjKhTh5ikQgCgCgFAAQAhBmBKA8QADACAAAFQFdB9AsFvIARASIgKgBQhGgGAABhQAVCUAYBcgAJBDsQAmAmAoAjQAAgFgCgEQgagwg0gXQAAAFACACgAFvk6QBmArhogxQAAAFACABgAr8pOIAAAFQBogBBMgiIgKAAQhiAChIAcgAqiqKIAAAFIFKg3IgKAAQiSAHhgAMIABgBQClg+DGANIgCAAQjeg3i8BMQglAWAugHIAHgBQAZAAhHAug");
	this.shape_68.setTransform(143.5,96.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4B2F29").s().p("AgSgRQgCgDAAgFQArAzgCAAQgBAAgmgrg");
	this.shape_69.setTransform(165.1,28.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1A0F0B").s().p("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");
	this.shape_70.setTransform(126,139.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,279.3);


(lib.dogshirly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(73.7,72.3,1,1,0,0,0,73.7,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-7.4,x:73.8},0).wait(1).to({rotation:-14.8,x:73.7},0).wait(1).to({rotation:-22.1,y:72.2},0).wait(1).to({rotation:-29.5,x:73.8,y:72.3},0).wait(1).to({rotation:-36.9,x:73.7},0).wait(1).to({rotation:-44.3},0).wait(1).to({rotation:-51.7},0).wait(1).to({rotation:-59},0).wait(1).to({rotation:-66.4,y:72.2},0).wait(1).to({rotation:-73.8},0).wait(1).to({rotation:-81.2},0).wait(1).to({rotation:-88.6},0).wait(1).to({rotation:-96,x:73.6,y:72.3},0).wait(1).to({rotation:-103.3,y:72.2},0).wait(1).to({rotation:-110.7,y:72.3},0).wait(1).to({rotation:-118.1,x:73.7},0).wait(1).to({rotation:-125.5},0).wait(1).to({rotation:-132.9,x:73.6},0).wait(1).to({rotation:-140.2,y:72.2},0).wait(1).to({rotation:-147.6,y:72.3},0).wait(1).to({rotation:-155},0).wait(1).to({rotation:-162.4},0).wait(1).to({rotation:-169.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.4,144.7);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(31.2,48.5,1,1,0,0,0,31.2,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-1.7,x:31.3},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-6.8},0).wait(1).to({rotation:-8.5,x:31.2},0).wait(1).to({rotation:-10.2,x:31.3},0).wait(1).to({rotation:-12,x:31.2},0).wait(1).to({rotation:-13.7},0).wait(1).to({rotation:-15.4,x:31.3},0).wait(1).to({rotation:-17.1,x:31.2},0).wait(1).to({rotation:-18.8},0).wait(1).to({rotation:-20.5},0).wait(1).to({rotation:-17.1},0).wait(1).to({rotation:-13.7},0).wait(1).to({rotation:-10.2},0).wait(1).to({rotation:-6.8,x:31.3},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:0,x:31.2},0).wait(1).to({rotation:3.4},0).wait(1).to({rotation:6.9,y:48.6},0).wait(1).to({rotation:10.3,y:48.5},0).wait(1).to({rotation:13.7,y:48.6},0).wait(1).to({rotation:17.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.4,97.1);


// stage content:
(lib.לשירלי = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("WhatsAppAudio20180610at202725mp3copy");
	}
	this.frame_2439 = function() {
		playSound("rumi");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2439).call(this.frame_2439).wait(3717));

	// ktuviot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.996)").s().p("AAvBHIhEhPIgYBLQAAAEgDACQgEACgDgBQgGABgDgDQgCgDAAgFIAAgEIAdhYIgYgbQgCgDgBgEQAAgFADgEQAFgCADAAQAFAAAEADIA7BGIAfhDQACgGAIAAIAFABQAGADABAHIgCAGIgjBJIAhAnQAEADAAAFQAAAFgFADQgDACgDAAQgGAAgEgDg");
	this.shape.setTransform(378.2,297.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,255,0.996)").s().p("AgUBKQgFAAgDgDQgDgDAAgEQAAgFADgCQADgDAFAAIAMAAQAJAAAEgHQAFgHAAgRIAAhMIgSAAQgFAAgDgDQgDgDAAgEQAAgEADgDQADgDAFAAIAZAAQAGAAAFAEQAEAEAAAFIAABTQAAATgEALQgEALgJAFQgJAFgOAAg");
	this.shape_1.setTransform(364.6,297.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,255,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_2.setTransform(357.8,294.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,255,0.996)").s().p("Ag9BIQgEgDAAgFIAAh+QAAgFAEgDQADgEAEAAQAFAAAEAEQADADAAAFIAAALQAKgJAQgHQAQgHAQAAQAZAAAMAPQANAPAAAdIAABPQAAAFgDADQgDACgEAAIg4AAQgEAAgDgDQgDgDAAgEQAAgFADgCQADgDAEAAIArAAIAAhDQAAgPgDgJQgDgJgGgEQgHgEgMABQgNAAgQAHQgQAHgJAKIAABdQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_3.setTransform(346.1,297.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,255,0.996)").s().p("AgxA7QgTgQAAgeIAAhLQAAgFADgDQAEgEAEAAQAGAAACAEQAEADAAAFIAABLQAAAVANALQAMAKAWAAQAVAAAMgKQALgLAAgVIAAgwQAAgKgEgFQgEgEgJAAQgHAAgHAFQgGAGgEAKQgBADgDACQgBACgEAAQgEAAgDgDQgDgDAAgEIABgEQADgLAGgHQAHgIAJgEQAJgEAJAAQARAAALAJQAKAHAAAYIAAAvQABAegSAQQgQAQghAAQggAAgTgQg");
	this.shape_4.setTransform(328.7,297.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,255,0.996)").s().p("AgHBIQgEgEAAgFIAAh9QAAgFAEgDQADgEAEAAQAFAAADAEQADADAAAFIAAB9QAAAFgDAEQgDADgFAAQgDAAgEgDg");
	this.shape_5.setTransform(316.6,297.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,255,0.996)").s().p("AAlBHQgDgDAAgFIAAhSQAAgOgEgHQgDgHgHgEQgIgDgMAAIgTABIgYAEQgFAAgDgCQgDgDgBgEQAAgEACgDQADgDAEgBQAYgFAWAAQAVAAAMAGQAMAFAGAMQAFAMAAAUIAABSQAAAFgDADQgDAEgFAAQgFAAgDgEg");
	this.shape_6.setTransform(305.6,297.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,255,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_7.setTransform(295.9,294.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,255,0.996)").s().p("AA3BHQgEgDAAgFIAAhTQAAgTgHgHQgHgHgNAAIgoAAQgDAHgCAJIAAAXIAABNQAAAFgDACQgDADgFAAIgfAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAUAAIAAhDQgBgZAHgOIgOAAQgFAAgDgDQgCgDAAgEQAAgEACgDQADgDAFAAIBLAAQAYAAANAMQANAMAAAdIAABTQAAAFgDADQgEADgEAAQgFAAgDgDg");
	this.shape_8.setTransform(283.4,297.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.996)").s().p("AAABAQgGAAgEgDQgEgFAAgFIAAgCQAAgFAEgFQAEgEAGAAIABAAQAGAAAEAEQAEAFAAAFIAAACQAAAFgEAFQgEADgGAAgAAAgiQgGAAgEgEQgEgEAAgGIAAgCQAAgFAEgEQAEgEAGAAIABAAQAGAAAEAEQAEAEAAAFIAAACQAAAGgEAEQgEAEgGAAg");
	this.shape_9.setTransform(272,298.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_10.setTransform(259,294.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.996)").s().p("AAlBHQgDgDAAgFIAAhSQAAgOgEgHQgDgHgHgEQgIgDgMAAIgTABIgYAEQgFAAgDgCQgDgDgBgEQAAgEACgDQADgDAEgBQAYgFAWAAQAVAAAMAGQAMAFAGAMQAFAMAAAUIAABSQAAAFgDADQgDAEgFAAQgFAAgDgEg");
	this.shape_11.setTransform(248.2,297.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.996)").s().p("AAOBHQgDgDAAgFIAAhMQAAgbALgNIhLAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBrAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgLAAQgKANAAAcIAABLQAAAFgDADQgDADgFAAQgFAAgDgDg");
	this.shape_12.setTransform(234.2,297.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.996)").s().p("AgHBfQgDgDgBgFIAAitQABgEADgEQADgDAEAAQAEAAAEADQADAEABAEIAACtQgBAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_13.setTransform(223.7,299.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.996)").s().p("AgxA7QgSgQAAgeIAAhLQAAgFACgDQAEgEAEAAQAFAAAEAEQADADAAAFIAABLQAAAVANALQANAKAVAAQAUAAAMgKQAMgLAAgVIAAgwQAAgKgEgFQgEgEgJAAQgHAAgHAFQgGAGgEAKQgCADgCACQgBACgDAAQgFAAgDgDQgCgDAAgEIAAgEQADgLAHgHQAGgIAJgEQAJgEAJAAQASAAAKAJQAKAHAAAYIAAAvQAAAegRAQQgQAQghAAQgfAAgUgQg");
	this.shape_14.setTransform(205.2,297.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.996)").s().p("Ag9BIQgEgDAAgFIAAh+QAAgFAEgDQADgEAEAAQAFAAAEAEQADADAAAFIAAALQAKgJAQgHQAQgHAQAAQAZAAAMAPQANAPAAAdIAABPQAAAFgDADQgDACgEAAIg4AAQgEAAgDgDQgDgDAAgEQAAgFADgCQADgDAEAAIArAAIAAhDQAAgPgDgJQgDgJgGgEQgHgEgMABQgNAAgQAHQgQAHgJAKIAABdQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_15.setTransform(187.8,297.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_16.setTransform(175.8,294.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.996)").s().p("AAlBHQgDgDAAgFIAAhSQAAgOgEgHQgDgHgHgEQgIgDgMAAIgTABIgYAEQgFAAgDgCQgDgDgBgEQAAgEACgDQADgDAEgBQAYgFAWAAQAVAAAMAGQAMAFAGAMQAFAMAAAUIAABSQAAAFgDADQgDAEgFAAQgFAAgDgEg");
	this.shape_17.setTransform(165,297.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.996)").s().p("AgHBIQgEgEABgFIAAh9QgBgFAEgDQADgEAEAAQAEAAAEAEQAEADgBAFIAAB9QABAFgEAEQgEADgEAAQgEAAgDgDg");
	this.shape_18.setTransform(416.8,262.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.996)").s().p("AAlBHQgDgDAAgFIAAhSQAAgOgEgHQgDgHgHgEQgIgDgMAAIgTABIgYAEQgFAAgDgCQgDgDgBgEQAAgEACgDQADgDAEgBQAYgFAWAAQAVAAAMAGQAMAFAGAMQAFAMAAAUIAABSQAAAFgDADQgDAEgFAAQgFAAgDgEg");
	this.shape_19.setTransform(405.8,262.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.996)").s().p("AgHBIQgEgEABgFIAAh9QgBgFAEgDQADgEAEAAQAEAAAEAEQAEADgBAFIAAB9QABAFgEAEQgDADgFAAQgDAAgEgDg");
	this.shape_20.setTransform(396,262.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.996)").s().p("Ag9BIQgEgDAAgFIAAh+QAAgFAEgEQADgDAEAAQAFAAAEADQADAEAAAFIAAAMQAKgKAQgHQAQgHAQAAQAZAAAMAPQANAPAAAeIAABOQAAAFgDACQgDADgEAAIg4AAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIArAAIAAhCQAAgRgDgIQgDgJgGgEQgHgDgMgBQgNAAgQAIQgQAIgJAJIAABdQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_21.setTransform(384,262.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_22.setTransform(372,259.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.996)").s().p("AATBIQgEgEAAgFIAAgPQgJAKgJAJQgKAIgLAAQgGAAgDgDQgEgDAAgGQAAgEADgCQADgDAEgBQAOgBAKgIQAKgGAIgOIAAg8QAAgLgDgDQgEgFgIAAIgGABIgIADIgCABQgDAAgDgDQgDgDAAgEQAAgGAFgDQAFgCAGgBQAGgCAEAAQAKAAAJACQAHADAFAIQAFAKABAQIAABiQAAAGgEADQgDADgFAAQgEAAgDgDg");
	this.shape_23.setTransform(356.4,262.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.996)").s().p("Ag8BKQgDAAgEgCQgCgEAAgDQAAgFACgDQAEgCADAAIBUAAIAAhJQAAgOgDgIQgEgHgGgDQgIgEgMABIgUABIgcAEQgEABgDgCQgDgDgBgEQgBgEACgDQADgDAEgBQAbgHAZAAQATAAANAGQAMAGAFALQAGAMAAAVIAABJIANAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEAAg");
	this.shape_24.setTransform(344.5,262.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_25.setTransform(332.9,259.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.996)").s().p("AAvBGIhEhPIgYBNQAAADgDACQgDACgFAAQgEAAgEgDQgCgDAAgFIAAgEIAchYIgXgbQgCgDgBgFQAAgEADgEQAFgCADgBQAGABADADIA7BGIAfhDQACgGAIAAIAFABQAHADAAAGIgCAHIgjBIIAhApQAEACAAAEQgBAGgEADQgDACgDABQgGgBgEgEg");
	this.shape_26.setTransform(321.6,262.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.996)").s().p("AgRBbQgDgBgCgEQgCgCAAgDQABgDABgDIA2huIhLAAQgGAAgDgCQgCgDAAgGIAAghQgBgFAEgEQADgDAEAAQAEAAAEADQAEAEgBAFIAAAYIBKAAQAGAAAFAEQADAEAAAHQABAGgDAFIg3BzQgCADgDACQgCABgEAAIgEgBg");
	this.shape_27.setTransform(306.4,260.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_28.setTransform(296.5,259.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.996)").s().p("AgcBVQgDgDAAgFIABgGIBEiIIhZAAQgFAAgDgDQgDgDAAgFQAAgEADgEQADgDAFAAIBlAAQAGAAADAEQAEAEAAAFQAAAGgCAFIhGCRQgBADgEABQgCACgEAAQgFAAgDgDg");
	this.shape_29.setTransform(279,261.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.996)").s().p("AhAAAQAAgVAHgUQAHgVARgNQAQgOAZAAQANAAAKADQALADAJAFIAFAEIABAFQgBAEgCADQgDADgEAAIgFAAQgPgIgSAAQgbAAgMAUQgMAUAAAYQAHgJAMgGQANgHASAAQAQAAAOAIQANAHAGAMQAIANAAASQAAAQgIANQgHANgOAHQgOAIgTAAQhDAAAAhagAgqAXQAIAtAlAAQAMAAAJgEQAJgFAFgIQAEgJAAgKQAAgRgJgKQgKgJgSAAQggAAgPAbg");
	this.shape_30.setTransform(263.5,261.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.996)").s().p("AgcBVQgDgDAAgFIABgGIBEiIIhZAAQgFAAgDgDQgDgDAAgFQAAgEADgEQADgDAFAAIBlAAQAGAAADAEQAEAEAAAFQAAAGgCAFIhGCRQgBADgEABQgCACgEAAQgFAAgDgDg");
	this.shape_31.setTransform(247.6,261.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.996)").s().p("AglBSQgPgHgHgLQgHgLAAgMQAAgjAmgLQgNgFgIgJQgIgKAAgOQAAgLAFgKQAGgLANgHQANgHAUAAQAUAAAOAHQANAHAFALQAGAKABALQgBAOgHAKQgJAJgNAFQAmALAAAjQAAAMgHALQgHALgPAHQgPAIgXAAQgXAAgOgIgAgeAOQgNAJAAAQQAAAGAFAHQAEAIAJAFQALAFAOAAQAPAAAKgFQAKgFAFgIQAEgHAAgGQAAgQgNgJQgNgJgSAAQgSAAgMAJgAgag9QgJAIAAALQAAALAJAIQAIAIASAAQASAAAJgIQAJgIAAgLQAAgLgKgIQgJgIgRAAQgRAAgJAIg");
	this.shape_32.setTransform(231.9,261.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.996)").s().p("AhAAAQAAgVAHgUQAHgVARgNQAPgOAZAAQAOAAALADQAKADAJAFIAFAEIABAFQAAAEgDADQgDADgEAAIgFAAQgPgIgSAAQgbAAgMAUQgLAUgBAYQAHgJANgGQAMgHASAAQARAAANAIQANAHAHAMQAHANAAASQAAAQgHANQgIANgOAHQgOAIgSAAQhEAAAAhagAgpAXQAGAtAnAAQALAAAJgEQAJgFAFgIQAEgJAAgKQAAgRgJgKQgJgJgTAAQgfAAgPAbg");
	this.shape_33.setTransform(216.4,261.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.996)").s().p("AhAAAQAAgVAHgUQAHgVAQgNQAQgOAaAAQANAAAKADQALADAKAFIADAEIABAFQABAEgDADQgDADgFAAIgEAAQgPgIgSAAQgbAAgMAUQgMAUgBAYQAIgJAMgGQANgHASAAQARAAAMAIQAOAHAGAMQAIANAAASQAAAQgIANQgHANgOAHQgOAIgTAAQhDAAAAhagAgqAXQAHAtAmAAQAMAAAJgEQAJgFAEgIQAFgJAAgKQAAgRgJgKQgKgJgSAAQgfAAgQAbg");
	this.shape_34.setTransform(200.7,261.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.996)").s().p("Ag5BKIgEgDIgBgGQAAgEADgEQACgDAFABIAFAAQAUALAUAAQAXAAAMgIQANgIAAgUQAAgPgLgIQgKgIgSAAQgUAAgSAJIgCACQgDABgDAAQgHAAgFgEQgFgEAAgFIABgGIALhDQABgFADgEQAEgDAFgBIBQAAQAEAAADADQADAEAAAEQAAAEgDAEQgDADgEAAIhIAAIgIA1QATgLAWAAQATAAANAHQANAIAHALQAGAOAAAQQAAAZgRAQQgRAQghAAQgfAAgWgPg");
	this.shape_35.setTransform(184.9,261.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.996)").s().p("AgxBCQgSgZAAgpQAAgoASgYQARgZAgAAQAhAAASAZQARAYAAAoQAAApgRAZQgSAYghAAQggAAgRgYgAgggxQgMASAAAfQAAAgAMATQAMASAUAAQAWAAAMgSQALgTAAggQAAgfgLgSQgMgTgWAAQgUAAgMATg");
	this.shape_36.setTransform(169.1,261.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.996)").s().p("AgvBZQgFgBgEgDQgEgDAAgGQAAgNAIgLQAHgLALgJIAdgUQAOgKAJgFQAJgHAGgIQAGgIAAgJQAAgPgJgHQgKgJgUAAQgWAAgUAJIgFABQgEAAgDgCQgCgEAAgDQAAgHAFgDQAagNAdAAQAQAAANAHQANAGAHAMQAIALAAAPQAAAPgJANQgIALgMAJQgMAKgTANIgaASQgJAIgDAIIBWAAQAEAAADACQADADAAAFQAAAEgDAEQgDACgEABg");
	this.shape_37.setTransform(153.3,261.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.996)").s().p("AhOAGIAAhEQAAgFAEgDQADgEAFAAQAFAAADAEQADADAAAFIAABEQAAAaAOALQAOAMAbAAQAcAAAOgMQANgLAAgaIAAhEQABgFADgDQADgEAFAAQAFAAADAEQAEADAAAFIAABEQAABFhPAAQhNAAgBhFgAgHAYQgEgDABgFIAAhOQAAgFADgDQAEgEADAAQAFAAADAEQAEADgBAFIAABOQABAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_38.setTransform(400,227.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_39.setTransform(387,224.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.996)").s().p("AAlBHQgDgDAAgFIAAhSQAAgOgEgHQgDgHgHgEQgIgDgMAAIgTABIgYAEQgFAAgDgCQgDgDgBgEQAAgEACgDQADgDAEgBQAYgFAWAAQAVAAAMAGQAMAFAGAMQAFAMAAAUIAABSQAAAFgDADQgDAEgFAAQgFAAgDgEg");
	this.shape_40.setTransform(376.2,227.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.996)").s().p("AgRBbQgDgBgCgDQgCgDAAgDQABgDABgCIA2hvIhLAAQgGAAgCgCQgDgDAAgGIAAgiQAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEIAAAZIBKAAQAGAAAEAEQAFAFAAAHQgBAFgCAFIg4BzQgBACgCACQgDACgEAAIgEgBg");
	this.shape_41.setTransform(362.9,226.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_42.setTransform(353,224.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.996)").s().p("AgtBIQgEAAgCgEQgCgCAAgDQAAgGADgCQAEgDAFAAIAQADIANABQAdAAANgOQANgOAAgdQAAgbgMgOQgMgOgWAAQgSAAgLAJQgLAIAAAPQAAAPAIAFQAHAEAIAAQAEAAAGgCIAIgBQACAAADACQACABAAAEQAAAIgIADQgIAEgLAAQgPAAgOgIQgOgJAAgYQAAgZAQgOQAQgOAeAAQAhAAASAUQASATAAAjQAAAmgUATQgUAUgmAAQgSAAgPgEg");
	this.shape_43.setTransform(335.5,227.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_44.setTransform(324.4,224.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.996)").s().p("AhNAGIAAhEQAAgFACgDQAEgEAFAAQAEAAAEAEQADADAAAFIAABEQAAAaAOALQAOAMAbAAQAcAAAOgMQAOgLAAgaIAAhEQgBgFAEgDQAEgEAEAAQAFAAADAEQAEADgBAFIAABEQAABFhOAAQhOAAABhFgAgHAYQgEgDAAgFIABhOQAAgFADgDQADgEAEAAQAFAAADAEQADADABAFIAABOQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_45.setTransform(311.5,227.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.996)").s().p("Ag9BIQgEgDAAgFIAAh+QAAgFAEgDQADgEAEAAQAFAAAEAEQADADAAAFIAAAMQAKgKAQgHQAQgHAQAAQAZAAAMAPQANAPAAAeIAABOQAAAFgDADQgDACgEAAIg4AAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIArAAIAAhDQAAgPgDgJQgDgJgGgEQgHgDgMAAQgNgBgQAIQgQAHgJAKIAABdQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_46.setTransform(293.2,227.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.996)").s().p("AgHBfQgEgDAAgFIAAitQAAgEAEgEQAEgDADAAQAFAAADADQADAEAAAEIAACtQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_47.setTransform(281,230.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.996)").s().p("AgvBYQgFABgEgEQgEgEAAgFQAAgNAIgMQAHgLALgIIAdgUQAOgJAJgHQAJgGAGgIQAGgIAAgJQAAgOgJgIQgKgJgUAAQgWAAgUAJIgFABQgEAAgDgCQgCgEAAgEQAAgGAFgDQAagMAdAAQAQgBANAHQANAGAHAMQAIAMAAAOQAAAPgJAMQgIAMgMAKQgMAJgTAMIgaATQgJAHgDAIIBWAAQAEAAADADQADAEAAAEQAAAFgDACQgDADgEAAg");
	this.shape_48.setTransform(263.2,226.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.996)").s().p("AhAAAQAAgVAHgUQAHgVAQgNQARgOAYAAQAOAAALADQAKADAJAFIAEAEIACAFQAAAEgDADQgDADgFAAIgEAAQgPgIgSAAQgbAAgMAUQgLAUgCAYQAIgJANgGQAMgHASAAQAQAAANAIQANAHAIAMQAHANAAASQAAAQgHANQgIANgOAHQgOAIgSAAQhEAAAAhagAgpAXQAGAtAnAAQALAAAJgEQAJgFAEgIQAFgJAAgKQAAgRgJgKQgJgJgTAAQgfAAgPAbg");
	this.shape_49.setTransform(247.8,226.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.996)").s().p("Ag5BKIgEgEIgBgFQAAgEADgDQACgEAFAAIAFABQAUALAUAAQAXAAAMgIQANgIAAgTQAAgQgLgIQgKgJgSAAQgUAAgSAKIgCABQgDACgDAAQgHAAgFgEQgFgEAAgFIABgHIALhCQABgFADgEQAEgEAFAAIBQAAQAEABADADQADADAAAFQAAAEgDADQgDADgEAAIhIAAIgIA1QATgLAWABQATAAANAGQANAIAHAMQAGANAAAQQAAAZgRAQQgRAPghAAQgfAAgWgOg");
	this.shape_50.setTransform(232,226.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.996)").s().p("Ag5BKIgEgEIgBgFQAAgEADgDQACgEAFAAIAFABQAUALAUAAQAXAAAMgIQANgIAAgTQAAgQgLgIQgKgJgSAAQgUAAgSAKIgCABQgDACgDAAQgHAAgFgEQgFgEAAgFIABgHIALhCQABgFADgEQAEgEAFAAIBQAAQAEABADADQADADAAAFQAAAEgDADQgDADgEAAIhIAAIgIA1QATgLAWABQATAAANAGQANAIAHAMQAGANAAAQQAAAZgRAQQgRAPghAAQgfAAgWgOg");
	this.shape_51.setTransform(216.3,226.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.996)").s().p("AglBXQgEAAgEgDQgCgDAAgEQAAgFACgDQAEgDAEAAIAeAAIAAh+IgaANIgFABQgFAAgDgDQgDgDAAgFQAAgGAGgEIAigRQAEgCAEAAIADAAQAGAAADADQAEAEAAAFIAACMIAZAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAg");
	this.shape_52.setTransform(200.9,226.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.996)").s().p("AgkBXQgFAAgDgDQgEgDAAgEQAAgFAEgDQADgDAFAAIAdAAIAAh+IgZANIgHABQgEAAgDgDQgDgDAAgFQAAgGAHgEIAigRQADgCADAAIAEAAQAFAAAFADQADAEAAAFIAACMIAYAAQAFAAADADQADADAAAFQAAAEgDADQgDADgFAAg");
	this.shape_53.setTransform(185.2,226.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.996)").s().p("AgxBCQgSgZAAgpQAAgoASgYQARgZAgAAQAhAAASAZQARAYAAAoQAAApgRAZQgSAYghAAQggAAgRgYgAgggxQgMASAAAfQAAAgAMATQAMASAUAAQAWAAAMgSQALgTAAggQAAgfgLgSQgMgTgWAAQgUAAgMATg");
	this.shape_54.setTransform(169.1,226.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.996)").s().p("AgvBYQgFABgEgEQgEgEAAgFQAAgNAIgMQAHgLALgIIAdgUQAOgJAJgHQAJgGAGgIQAGgIAAgJQAAgOgJgIQgKgJgUAAQgWAAgUAJIgFABQgEAAgDgCQgCgEAAgEQAAgGAFgDQAagMAdAAQAQgBANAHQANAGAHAMQAIAMAAAOQAAAPgJAMQgIAMgMAKQgMAJgTAMIgaATQgJAHgDAIIBWAAQAEAAADADQADAEAAAEQAAAFgDACQgDADgEAAg");
	this.shape_55.setTransform(153.3,226.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,255,0.996)").s().p("Ag9BIQgEgDAAgFIAAh+QAAgFAEgEQADgDAEAAQAFAAAEADQADAEAAAFIAAALQAKgJAQgHQAQgHAQAAQAZAAAMAPQANAPAAAdIAABPQAAAFgDADQgDACgEAAIg4AAQgEAAgDgDQgDgDAAgEQAAgFADgCQADgDAEAAIArAAIAAhDQAAgPgDgJQgDgJgGgEQgHgDgMAAQgNAAgQAHQgQAHgJAKIAABdQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_56.setTransform(348.8,193);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,255,0.996)").s().p("AAOBHQgDgDAAgFIAAhMQAAgbALgNIhLAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBrAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgLAAQgKANAAAcIAABLQAAAFgDADQgDADgFAAQgFAAgDgDg");
	this.shape_57.setTransform(332.4,193.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,255,0.996)").s().p("AgHBIQgEgEAAgFIAAh9QAAgFAEgDQADgEAEAAQAFAAADAEQADADABAFIAAB9QgBAFgDAEQgDADgFAAQgDAAgEgDg");
	this.shape_58.setTransform(322,193);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,255,0.996)").s().p("Ag8BLQgDAAgEgEQgCgDAAgDQAAgFACgCQAEgDADgBIBVAAIAAhJQAAgOgEgGQgDgIgIgDQgHgEgMAAIgUACIgbAEQgFACgDgDQgEgDgBgEQAAgEACgDQAEgDADgBQAbgGAZgBQATABANAFQAMAGAGAMQAFAMAAATIAABJIANAAQAEABADADQADACAAAFQAAAEgDACQgDAEgEAAg");
	this.shape_59.setTransform(310.9,193);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,255,0.996)").s().p("Ag7BLQgEAAgEgEQgCgDAAgDQAAgFACgCQAEgDAEgBIBTAAIAAhJQABgOgEgGQgEgIgGgDQgIgEgNAAIgTACIgcAEQgEACgDgDQgDgDgBgEQgBgEACgDQAEgDAEgBQAbgGAYgBQATABANAFQAMAGAFAMQAGAMAAATIAABJIANAAQAEABADADQADACAAAFQAAAEgDACQgDAEgEAAg");
	this.shape_60.setTransform(294.9,193);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,255,0.996)").s().p("AgHBIQgEgEAAgFIAAh9QAAgFAEgDQADgEAEAAQAFAAADAEQADADABAFIAAB9QgBAFgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_61.setTransform(283.2,193);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,255,0.996)").s().p("AA3BHQgEgDAAgFIAAhTQAAgTgHgHQgHgHgNAAIgoAAQgEAHgBAJIAAAXIAABNQAAAFgDACQgDADgEAAIggAAQgDAAgDgDQgEgDAAgEQAAgEAEgDQADgDADAAIAUAAIAAhDQAAgZAFgOIgNAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBLAAQAYAAAMAMQAOAMAAAdIAABTQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_62.setTransform(270.5,193.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,255,0.996)").s().p("AgHBIQgEgEABgFIAAh9QgBgFAEgDQADgEAEAAQAEAAAEAEQAEADgBAFIAAB9QABAFgEAEQgEADgEAAQgEAAgDgDg");
	this.shape_63.setTransform(252.5,193);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,255,0.996)").s().p("Ag9BIQgEgDAAgFIAAh+QAAgFAEgEQADgDAEAAQAFAAAEADQADAEAAAFIAAALQAKgJAQgHQAQgHAQAAQAZAAAMAPQANAPAAAdIAABPQAAAFgDADQgDACgEAAIg4AAQgEAAgDgDQgDgDAAgEQAAgFADgCQADgDAEAAIArAAIAAhDQAAgPgDgJQgDgJgGgEQgHgDgMAAQgNAAgQAHQgQAHgJAKIAABdQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_64.setTransform(240.6,193);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,255,0.996)").s().p("AASBIQgDgEAAgFIAAgQQgJALgIAJQgKAHgMAAQgGABgDgDQgEgDABgGQgBgDADgDQADgDAEgBQAOgBALgHQAJgIAIgMIAAg9QAAgLgEgEQgDgDgIAAIgGABIgIACIgDAAQgCABgDgDQgDgDAAgEQAAgGAGgDQAEgCAGgBQAGgCAEAAQALAAAHADQAIACAGAIQAEAKAAAQIAABiQAAAFgCAEQgEADgFAAQgFAAgDgDg");
	this.shape_65.setTransform(225.9,193);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,255,0.996)").s().p("AgHApQgDgDAAgFIAAhBQAAgFADgDQADgEAEAAQAFAAADAEQADADAAAFIAABBQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_66.setTransform(218.4,190);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,255,0.996)").s().p("AhNAHIAAhFQAAgFADgEQADgDAFAAQAFAAADADQADAEAAAFIAABFQAAAZAOAMQAOALAbAAQAcAAAOgLQANgMAAgZIAAhFQAAgFAEgEQAEgDAFAAQAEAAADADQADAEABAFIAABFQAABEhPAAQhNAAAAhEgAgHAYQgDgDAAgFIAAhOQAAgFADgEQADgDAEAAQAFAAADADQAEAEAAAFIAABOQAAAFgEADQgDADgFABQgEgBgDgDg");
	this.shape_67.setTransform(205.5,193);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,255,0.996)").s().p("AgHBIQgEgEAAgFIAAh9QAAgFAEgDQADgEAEAAQAFAAADAEQADADABAFIAAB9QgBAFgDAEQgDADgFAAQgDAAgEgDg");
	this.shape_68.setTransform(192.4,193);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,255,0.996)").s().p("AA3BHQgEgDAAgFIAAhTQAAgTgHgHQgHgHgNAAIgoAAQgEAHgBAJIAAAXIAABNQAAAFgDACQgDADgFAAIgfAAQgDAAgDgDQgEgDAAgEQAAgEAEgDQADgDADAAIAUAAIAAhDQAAgZAFgOIgNAAQgFAAgDgDQgCgDAAgEQAAgEACgDQADgDAFAAIBLAAQAYAAAMAMQAOAMAAAdIAABTQAAAFgEADQgDADgEAAQgFAAgDgDg");
	this.shape_69.setTransform(179.7,193.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.996)").s().p("AAABAQgGAAgEgDQgEgFAAgFIAAgCQAAgFAEgFQAEgEAGAAIABAAQAGAAAEAEQAEAFAAAFIAAACQAAAFgEAFQgEADgGAAgAAAgiQgGAAgEgEQgEgEAAgGIAAgCQAAgFAEgEQAEgEAGAAIABAAQAGAAAEAEQAEAEAAAFIAAACQAAAGgEAEQgEAEgGAAg");
	this.shape_70.setTransform(168.3,194);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,0,0,0.996)").s().p("ABCBVQgFgEAAgGIAAhjQABgXgJgJQgJgIgOAAIgyAAQgDAJgBALIgBAbIAABdQAAAFgEADQgEAEgFAAIgmAAQgEAAgEgEQgDgDAAgFQAAgFADgEQAEgDAEAAIAYAAIAAhSQAAgdAHgRIgQAAQgFAAgEgEQgEgDAAgFQAAgFAEgEQAEgDAFAAIBbAAQAcAAAPAPQAPAOAAAjIAABjQABAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_71.setTransform(377.1,120.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,0,0,0.996)").s().p("AgJBWQgEgEAAgGIAAiXQAAgGAEgDQAEgFAFAAQAFAAAEAFQAFADAAAGIAACXQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_72.setTransform(363.4,120.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,0,0,0.996)").s().p("AAQBVQgDgEAAgFIAAhcQAAghANgPIhaAAQgFAAgEgEQgDgEAAgEQAAgFADgEQAEgDAFAAICAAAQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAIgNAAQgLAQAAAhIAABbQAAAFgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_73.setTransform(350.4,120.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,0,0,0.996)").s().p("AA2BWQgEgEAAgGIAAhjQAAgRgFgIQgFgJgKgEQgLgDgTgBQgaABgjAGQgFABgFgDQgEgDgBgFQgBgFAEgEQADgEAFgBQAQgDASgCQASgCAOAAQAcAAAQAHQARAGAIAPQAHAOAAAYIAABjQAAAGgEAEQgDAEgGAAQgGAAgEgEgAhABWQgDgEAAgGIAAhPQAAgGADgEQAEgFAGAAQAGAAAEAFQAEAEAAAGIAABPQAAAGgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape_74.setTransform(331.7,120.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,0,0,0.996)").s().p("AhCBhQgDgDgBgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgEACgDQACgDAFgBIApgPIgoiOIAAgDQAAgGAEgDQAEgFAGAAQAEAAAEADQAEADABAEIAmCNIAFgCQATgGAJgUQAHgTABgjIAAg3QAAgGADgEQAEgEAGAAQAGAAAEAEQAEAEAAAGIAAA3QAAAsgOAZQgNAYghALIhCAXIgFABQgEAAgDgCg");
	this.shape_75.setTransform(305,121.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,0,0,0.996)").s().p("AgVBtQgDgCgCgDQgCgDAAgEIABgHIBBiEIhaAAQgHAAgDgDQgDgDAAgHIAAgpQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFIAAAeIBZAAQAHAAAGAFQAEAFAAAIQAAAHgDAGIhCCKQgCADgDACQgDACgEAAQgEAAgCgBg");
	this.shape_76.setTransform(288.9,118.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,0,0,0.996)").s().p("AA2BWQgEgEAAgGIAAhjQAAgRgFgIQgFgJgKgEQgLgDgTgBQgaABgjAGQgFABgFgDQgEgDgBgFQgBgFAEgEQADgEAFgBQAQgDASgCQASgCAOAAQAcAAAQAHQARAGAIAPQAHAOAAAYIAABjQAAAGgEAEQgDAEgGAAQgGAAgEgEgAhABWQgDgEAAgGIAAhPQAAgGADgEQAEgFAGAAQAGAAAEAFQAEAEAAAGIAABPQAAAGgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape_77.setTransform(262.9,120.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,0,0,0.996)").s().p("AA2BWQgEgEAAgGIAAhjQAAgRgFgIQgFgJgKgEQgLgDgTgBQgaABgjAGQgFABgFgDQgEgDgBgFQgBgFAEgEQADgEAFgBQAQgDASgCQASgCAOAAQAcAAAQAHQARAGAIAPQAHAOAAAYIAABjQAAAGgEAEQgDAEgGAAQgGAAgEgEgAhABWQgDgEAAgGIAAhPQAAgGADgEQAEgFAGAAQAGAAAEAFQAEAEAAAGIAABPQAAAGgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape_78.setTransform(243.1,120.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,0,0,0.996)").s().p("AhABxQgEgDAAgHIAAiKQAAgGAEgFQAEgDAGgBQAFABAEADQAEAFAAAGIAACKQAAAHgEADQgDAFgGAAQgGAAgEgFgAgGA6QgFgBgDgDQgDgDAAgFQAAgGAFgDQAEgEAFABIAIACIAKABQAgAAAAgpIAAhZIhsAAQgFABgEgEQgEgEAAgEQAAgFAEgEQAEgDAFAAIB1AAQAIgBAFAFQAGAFAAAGIAABhQAAAigRAPQgQAPgbAAQgLAAgKgCg");
	this.shape_79.setTransform(223.6,123.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,0,0,0.996)").s().p("AhdAHIAAhSQAAgGAEgEQADgEAHAAQAFAAAEAEQAEAEAAAGIAABSQAAAfARAOQARAOAgAAQAiAAAQgOQARgOAAgfIAAhSQAAgGAEgEQAEgEAGAAQAGAAAEAEQADAEAAAGIAABSQAABTheAAQhdAAAAhTgAgJAdQgEgFAAgFIAAheQAAgGAFgEQAEgEAEAAQAGAAAEAEQAEAEAAAGIgBBeQAAAFgDAFQgEADgGABQgEgBgFgDg");
	this.shape_80.setTransform(202.8,120.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,0,0,0.996)").s().p("AhHBZQgFABgEgEQgDgEAAgEQAAgFADgEQAEgDAFAAIBkAAIAAhYQAAgRgDgIQgEgJgKgFQgIgDgPgBQgMAAgMACIghAGQgFABgEgDQgEgDgBgFQgBgFADgEQAEgEAEgBQAhgHAdgBQAYABAPAGQAPAIAGANQAHAOgBAZIAABYIAQAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDAEgFgBg");
	this.shape_81.setTransform(181.9,120.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,0,0,0.996)").s().p("AA2BWQgEgEAAgGIAAhjQAAgRgFgIQgFgJgKgEQgLgDgTgBQgaABgjAGQgFABgFgDQgEgDgBgFQgBgFAEgEQADgEAFgBQAQgDASgCQASgCAOAAQAcAAAQAHQARAGAIAPQAHAOAAAYIAABjQAAAGgEAEQgDAEgGAAQgGAAgEgEgAhABWQgDgEAAgGIAAhPQAAgGADgEQAEgFAGAAQAGAAAEAFQAEAEAAAGIAABPQAAAGgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape_82.setTransform(161.7,120.5);

	this.instance = new lib.Bitmap20();
	this.instance.parent = this;
	this.instance.setTransform(-46,-40,0.519,0.519);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5633).wait(523));

	// rumi
	this.instance_1 = new lib.rumi3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.6,311,1,1,0,0,0,404.3,509.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.rumi2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(174,279.5,0.936,0.936);

	this.instance_3 = new lib.water();
	this.instance_3.parent = this;
	this.instance_3.setTransform(325.5,130.8,0.553,0.553);

	this.instance_4 = new lib.rumi4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(161.7,262.8,0.916,0.892,-9.5,0,0,0.1,0.4);

	this.instance_5 = new lib.heart();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320.3,206.6);

	this.instance_6 = new lib.heart();
	this.instance_6.parent = this;
	this.instance_6.setTransform(320.3,206.6);

	this.instance_7 = new lib.heart();
	this.instance_7.parent = this;
	this.instance_7.setTransform(320.3,206.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},2442).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2,p:{x:174}}]},42).to({state:[{t:this.instance_2,p:{x:174}},{t:this.instance_3}]},428).to({state:[{t:this.instance_2,p:{x:174}}]},53).to({state:[{t:this.instance_2,p:{x:174}},{t:this.instance_4}]},203).to({state:[{t:this.instance_2,p:{x:172.1}}]},423).to({state:[{t:this.instance_1}]},804).to({state:[{t:this.instance_1},{t:this.instance_5,p:{x:320.3,y:206.6}}]},960).to({state:[{t:this.instance_1},{t:this.instance_6,p:{x:320.3,y:206.6}},{t:this.instance_5,p:{x:355.8,y:265.4}}]},10).to({state:[{t:this.instance_1},{t:this.instance_7},{t:this.instance_6,p:{x:355.8,y:265.4}},{t:this.instance_5,p:{x:313.1,y:299.1}}]},5).to({state:[{t:this.instance_1},{t:this.instance_6,p:{x:320.3,y:206.6}},{t:this.instance_5,p:{x:355.8,y:265.4}}]},4).to({state:[{t:this.instance_1},{t:this.instance_5,p:{x:320.3,y:206.6}}]},4).to({state:[{t:this.instance_1}]},6).to({state:[]},222).wait(523));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2442).to({_off:false},0).wait(1).to({regX:307.1,regY:466.4,x:-74.6,y:268},0).wait(1).to({x:-64.5,y:267.9},0).wait(1).to({x:-54.5},0).wait(1).to({x:-44.4,y:267.8},0).wait(1).to({x:-34.4},0).wait(1).to({x:-24.3,y:267.7},0).wait(1).to({x:-14.3,y:267.6},0).wait(1).to({x:-4.2},0).wait(1).to({x:5.8,y:267.5},0).wait(1).to({x:15.9},0).wait(1).to({x:25.9,y:267.4},0).wait(1).to({x:36,y:267.3},0).wait(1).to({x:46},0).wait(1).to({x:56.1,y:267.2},0).wait(1).to({x:66.1},0).wait(1).to({x:76.2,y:267.1},0).wait(1).to({x:86.2,y:267},0).wait(1).to({x:96.3},0).wait(1).to({x:106.3,y:266.9},0).wait(1).to({x:116.4},0).wait(1).to({x:126.4,y:266.8},0).wait(1).to({x:136.5,y:266.7},0).wait(1).to({x:146.5},0).wait(1).to({x:156.6,y:266.6},0).wait(1).to({x:166.6},0).wait(1).to({x:176.6,y:266.5},0).wait(1).to({x:172.6,y:267.4},0).to({_off:true},42).wait(1911).to({_off:false,x:189.3,y:266.5},0).wait(960).to({x:189.9},0).wait(29).to({_off:true},222).wait(523));

	// dog
	this.instance_8 = new lib.dogshirly();
	this.instance_8.parent = this;
	this.instance_8.setTransform(373,115.6,0.42,0.42,0,0,0,85.8,72.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1084).to({_off:false},0).wait(1).to({regX:73.7,regY:72.3,x:361.8,y:119.7},0).wait(1).to({x:355.7,y:123.8},0).wait(1).to({x:349.5,y:128},0).wait(1).to({x:343.4,y:132.2},0).wait(1).to({x:337.2,y:136.3},0).wait(1).to({x:331.1,y:140.5},0).wait(1).to({x:325,y:144.7},0).wait(1).to({x:318.8,y:148.9},0).wait(1).to({x:312.7,y:153},0).wait(1).to({x:306.6,y:157.2},0).wait(1).to({x:300.4,y:161.4},0).wait(1).to({x:294.3,y:165.5},0).wait(1).to({x:288.1,y:169.7},0).wait(1).to({x:282,y:173.9},0).wait(1).to({x:275.9,y:178},0).wait(1).to({x:269.7,y:182.2},0).wait(1).to({x:263.6,y:186.4},0).wait(1).to({x:257.4,y:190.6},0).wait(1).to({x:251.3,y:194.7},0).wait(1).to({x:245.2,y:198.9},0).wait(1).to({x:239,y:203.1},0).wait(1).to({x:232.9,y:207.2},0).wait(1).to({x:226.7,y:211.4},0).wait(1).to({x:220.6,y:215.6},0).wait(1).to({x:214.5,y:219.7},0).wait(1).to({x:208.3,y:223.9},0).wait(1).to({x:202.2,y:228.1},0).wait(1).to({x:196,y:232.2},0).wait(1).to({x:189.9,y:236.4},0).wait(1).to({x:183.8,y:240.6},0).wait(1).to({x:177.6,y:244.8},0).wait(1).to({x:171.5,y:248.9},0).wait(1).to({x:165.3,y:253.1},0).wait(1).to({x:159.2,y:257.3},0).wait(1).to({x:153.1,y:261.4},0).wait(1).to({x:146.9,y:265.6},0).wait(1).to({x:140.8,y:269.8},0).wait(1).to({x:134.6,y:273.9},0).wait(1).to({x:128.5,y:278.1},0).wait(1).to({x:122.4,y:282.3},0).wait(1).to({x:116.2,y:286.4},0).wait(1).to({x:110.1,y:290.6},0).wait(1).to({x:103.9,y:294.8},0).wait(1).to({x:97.8,y:299},0).wait(1).to({x:91.7,y:303.1},0).wait(1).to({x:85.5,y:307.3},0).wait(1).to({x:79.4,y:311.5},0).wait(1).to({x:73.2,y:315.6},0).wait(1).to({x:67.1,y:319.8},0).wait(1).to({x:61,y:324},0).wait(1).to({x:54.8,y:328.1},0).wait(1).to({x:48.7,y:332.3},0).wait(1).to({x:42.5,y:336.5},0).wait(1).to({x:36.4,y:340.7},0).wait(1).to({x:30.3,y:344.8},0).wait(1).to({x:24.2,y:349},0).wait(1).to({x:18,y:353.2},0).wait(1).to({x:11.9,y:357.3},0).wait(1).to({x:5.8,y:361.5},0).wait(1).to({x:-0.4,y:365.7},0).wait(1).to({x:-6.5,y:369.8},0).wait(1).to({x:-12.7,y:374},0).wait(1).to({x:-18.8,y:378.2},0).wait(1).to({x:-25,y:382.3},0).to({_off:true},1).wait(5007));

	// shirly
	this.instance_9 = new lib.shirlybody();
	this.instance_9.parent = this;
	this.instance_9.setTransform(420.7,353.1,1,1,0,0,0,62.1,46.9);

	this.s1 = new lib.shirly();
	this.s1.parent = this;
	this.s1.setTransform(422.1,270.3,1,1,0,0,0,85.5,129.7);

	this.instance_10 = new lib.face1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(439.6,240.7,0.717,0.717,0,0,0,118.7,145.1);

	this.instance_11 = new lib.face2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(424.4,240.1,1,1,0,0,0,91.3,99.5);

	this.instance_12 = new lib.face4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(444.2,207.4,0.652,0.652,0,0,0,139.7,192.2);

	this.instance_13 = new lib.eyesshirly();
	this.instance_13.parent = this;
	this.instance_13.setTransform(428.6,239.6,0.972,0.972,-5.5,0,0,41.6,12.3);

	this.instance_14 = new lib.Symbol();
	this.instance_14.parent = this;
	this.instance_14.setTransform(312.6,228.5,1,1,0,0,0,31.2,48.5);

	this.instance_15 = new lib.Symbol();
	this.instance_15.parent = this;
	this.instance_15.setTransform(199.1,225.5,1,1,0,0,0,31.2,48.5);

	this.instance_16 = new lib.Symbol();
	this.instance_16.parent = this;
	this.instance_16.setTransform(250.2,294,1,1,0,0,0,31.2,48.5);

	this.instance_17 = new lib.face5();
	this.instance_17.parent = this;
	this.instance_17.setTransform(432.1,235.1,0.731,0.731,0,0,0,126,139.6);

	this.instance_18 = new lib.shirly6();
	this.instance_18.parent = this;
	this.instance_18.setTransform(433.2,269.6,1.137,1.137);

	this.instance_19 = new lib.Symbol6();
	this.instance_19.parent = this;
	this.instance_19.setTransform(419.6,275.7,1,1,0,0,0,79.6,124.3);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s1,p:{x:422.1}},{t:this.instance_9,p:{x:420.7,y:353.1}}]}).to({state:[{t:this.s1,p:{x:439.1}},{t:this.instance_10,p:{regX:118.7,regY:145.1,scaleX:0.717,scaleY:0.717,x:439.6,y:240.7,startPosition:0}},{t:this.instance_9,p:{x:438.6,y:354.9}}]},137).to({state:[{t:this.s1,p:{x:451.5}},{t:this.instance_9,p:{x:449.9,y:353.1}}]},201).to({state:[{t:this.instance_11},{t:this.instance_9,p:{x:432.8,y:353.1}}]},153).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.s1,p:{x:434.4}}]},140).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.instance_12}]},129).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.instance_12},{t:this.instance_13}]},15).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.instance_12}]},6).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.s1,p:{x:434.2}}]},62).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.instance_10,p:{regX:118.2,regY:146.9,scaleX:0.718,scaleY:0.718,x:438.2,y:246.7,startPosition:0}}]},177).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.instance_10,p:{regX:118.2,regY:146.9,scaleX:0.718,scaleY:0.718,x:438.2,y:246.7,startPosition:37}}]},64).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.instance_10,p:{regX:118.2,regY:146.9,scaleX:0.718,scaleY:0.718,x:438.2,y:246.7,startPosition:20}}]},65).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.s1,p:{x:435.4}}]},26).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.s1,p:{x:435.4}},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},240).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.s1,p:{x:435.4}}]},63).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.instance_10,p:{regX:118.3,regY:147,scaleX:0.712,scaleY:0.712,x:439.4,y:243.9,startPosition:0}}]},58).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.instance_17}]},40).to({state:[{t:this.instance_9,p:{x:432.8,y:353.1}},{t:this.s1,p:{x:435.9}}]},69).to({state:[{t:this.instance_18}]},268).to({state:[{t:this.instance_9,p:{x:428.9,y:353.1}},{t:this.s1,p:{x:432}}]},347).to({state:[{t:this.instance_19}]},188).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},3173).wait(523));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2448).to({_off:false},0).wait(1).to({regX:79.7,regY:124,x:424.8,y:275.4},0).wait(1).to({x:430},0).wait(1).to({x:435.1},0).wait(1).to({x:440.3},0).wait(1).to({x:445.4},0).wait(1).to({x:450.5},0).wait(1).to({x:455.7},0).wait(1).to({x:460.8},0).wait(1).to({x:466},0).wait(1).to({x:471.1},0).wait(1).to({x:476.3},0).wait(1).to({regX:79.6,regY:124.3,x:473.9,y:275.7},0).to({_off:true},3173).wait(523));

	// background
	this.instance_20 = new lib.Bitmap2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-13,-62,0.57,0.665);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},5633).wait(523));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(262,138,569.8,498.6);
// library properties:
lib.properties = {
	id: '794465FA1931904A835C5B678CB519A4',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/לשירלי_atlas_.png?1529002829431", id:"לשירלי_atlas_"},
		{src:"sounds/rumi.mp3?1529002830260", id:"rumi"},
		{src:"sounds/WhatsAppAudio20180610at202725mp3copy.mp3?1529002830260", id:"WhatsAppAudio20180610at202725mp3copy"}
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
an.compositions['794465FA1931904A835C5B678CB519A4'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;