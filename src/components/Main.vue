<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
		<FileUpload v-on:childToParent="passImgToCanvas" />
    <canvas id="uploadedImage" v-on:click="getCurrentColor"></canvas>
    <p>Current color: {{hex}}</p>
  </div>
</template>

<script>
import FileUpload from './FileUpload'

export default {
  name: 'Main',
  data: function () {
    return {
      hex: 0
		}
	},
	components: {
    FileUpload
	},
  props: {
    msg: String
	},
  methods: {
		passImgToCanvas: function (e) {
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
			let pos = this.findPos(canvas);
			let x = e.pageX - pos.x;
			let y = e.pageY - pos.y;
			let c = canvas.getContext('2d');
			let p = c.getImageData(x, y, 1, 1).data; 
			let hex = "#" + ("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
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
<style scoped lang="scss">
  .main {
    canvas {
      width: 20px;
    }
  }
</style>
