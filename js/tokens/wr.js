define (["js/tokens/token.js"],function(Token) {
	return class WR extends Token {
		constructor(tile) {
			super();
			this.elementId = "wr";
			this.elementHTML = "<div id='wr' class='token wr'>WR</div>";
			this.element = null;
			this.currentTile = tile
			this.lCurlRoute = [{x:5,y:2},{x:4,y:2},{x:3,y:2},{x:3,y:1}];
			this.lGoRoute = [{x:5,y:2},{x:4,y:2},{x:3,y:2},{x:2,y:2},{x:1,y:2}];
			this.lCrossingRoute = [{x:5,y:2},{x:4,y:2},{x:3,y:2},{x:3,y:1},{x:3,y:0}];
			this.lDragRoute = [{x:5,y:2},{x:5,y:1},{x:5,y:0}];
			this.lDoubleRoute = [{x:5,y:2},{x:4,y:2},{x:3,y:1},{x:2,y:2}];
			this.lSlantRoute = [{x:5,y:2},{x:4,y:1},{x:3,y:0}];
			this.lComebackRoute = [{x:5,y:2},{x:4,y:2},{x:3,y:2},{x:2,y:1},{x:2,y:2},{x:3,y:2}];
			this.rCurlRoute = [{x:5,y:0},{x:4,y:0},{x:3,y:0},{x:3,y:1}];
			this.rGoRoute = [{x:5,y:0},{x:4,y:0},{x:3,y:0},{x:2,y:0},{x:1,y:0}];
			this.rCrossingRoute = [{x:5,y:0},{x:4,y:0},{x:3,y:0},{x:3,y:1},{x:3,y:2}];
			this.rDragRoute = [{x:5,y:0},{x:5,y:1},{x:5,y:2}];
			this.rDoubleRoute = [{x:5,y:2},{x:4,y:2},{x:3,y:1},{x:2,y:2}];
			this.rSlantRoute = [{x:5,y:0},{x:4,y:1},{x:3,y:2}];
			this.rComebackRoute = [{x:5,y:0},{x:4,y:0},{x:3,y:0},{x:2,y:1},{x:2,y:0},{x:3,y:0}];
			this.routes = [{nodes:this.lCurlRoute,name:"Left Curl"}, {nodes:this.lGoRoute,name:"Streak Left"}, {nodes:this.lCrossingRoute,name:"Left Deep Cross"}, {nodes:this.lDragRoute,name:"Left Drag"}, {nodes:this.lDoubleRoute,name:"Left Double Move"}, {nodes:this.lSlantRoute,name:"Slant Left"}, {nodes:this.lComebackRoute,name:"Comeback Left"}{nodes:this.rCurlRoute,name:"Right Curl"}, {nodes:this.rGoRoute,name:"Streak Right"}, {nodes:this.rCrossingRoute,name:"Right Deep Cross"}, {nodes:this.rDragRoute,name:"Right Drag"}, {nodes:this.rDoubleRoute,name:"Right Drag"}, {nodes:this.rSlantRoute,name:"Slant Right"}];
			this.halt = false;
			this.currentRoute = null;
			this.selectRandomRoute();

		}

		stopRoute() {
			this.removeElement(this.element);
			this.halt = true;
			$("#currentPlay").text("");
		}

		selectRandomRoute() {
			var tempInt = Math.floor(Math.random() * 8)
			this.currentRoute = this.routes[tempInt];
			$("#currentPlay").text(this.currentRoute.name);
		}
	}
});
