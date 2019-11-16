<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Upload image</h3>
    <input type="file" v-on:change="handleImage" />
		<canvas id="uploadedImage" v-on:mousemove="getCurrentColor"></canvas>
		<p>Current color: {{hex}}</p>
  </div>
</template>

<script>
export default {
	name: 'Main',
	data: function () {
    return {
			hex: 0
		}
	},
  props: {
		msg: String
	},
  methods: {
		handleImage: function (e) {
			let canvas = document.getElementById('uploadedImage');
			let ctx = canvas.getContext("2d");
			let reader = new FileReader();
			reader.onload = function(event){
					let img = new Image();
					img.onload = function(){
							canvas.style.width = '100%';
							canvas.width = img.width;
							canvas.height = img.height;
							ctx.drawImage(img,0,0);
					}
					img.src = event.target.result;
			}
			reader.readAsDataURL(e.target.files[0]);		
		},
		getCurrentColor: function (e) {
			let canvas = document.getElementById('uploadedImage');

			var pos = this.findPos(canvas);
			var x = e.pageX - pos.x;
			var y = e.pageY - pos.y;
			var c = canvas.getContext('2d');
			var p = c.getImageData(x, y, 1, 1).data; 
			var hex = "#" + ("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
			this.hex = hex
		},
		findPos: function (obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
						curtop += obj.offsetTop;
						obj = obj.offsetParent;
        } while (obj);
        return { x: curleft, y: curtop };
    }
    return undefined;
		},
		rgbToHex: function (r, g, b) {
			if (r > 255 || g > 255 || b > 255)
					throw "Invalid color component";
				return ((r << 16) | (g << 8) | b).toString(16);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
