<template>
  <div class="main">
		<div class="body-items">
      <md-card-header>
        <div class="md-headline">Want to know what colors would look best on you?</div>
        <div class="md-subheading">Try our color analysis tool. Upload a picture of your face</div>
      </md-card-header>
      <div class="image-processing">
        <div class="image-upload">
          <FileUpload v-on:childToParent="passImgToCanvas" />
          <canvas id="uploadedImage" v-on:click="getCurrentColor"></canvas>
          <md-button class="md-raised md-accent2 btn analyze">Analyze</md-button>
          <p class="test-color">Current color: {{hex}}</p>
        </div>
        <div class="face-colors">
          <div class="select-color-wrapper">
            <div v-bind:style="{ backgroundColor: colorEyes }" id="eyes" class="select-color"></div>
              <span>Eyes color: </span>
            </div>
            <div class="select-color-wrapper">
              <div v-bind:style="{ backgroundColor: colorHair }" id="hair" class="select-color"></div>
              <span>Hair color: </span>
            </div>
            <div class="select-color-wrapper">
            <div v-bind:style="{ backgroundColor: colorSkin }" id="skin" class="select-color"></div>
            <span>Skin color: </span>
          </div>
        </div>
        <Palette />
      </div>
      <Grid/>
		</div>
  </div>
</template>

<script>
import FileUpload from './FileUpload'
import Palette from './Palette'
import Grid from './Grid'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'Main',
  data: function () {
    return {
      hex: 0,
      currentClick: 0
		}
  },
  computed: {
    ...mapState(['colorEyes', 'colorHair', 'colorSkin']),
  },
  components: {
    FileUpload,
    Palette,
    Grid
	},
  props: {
    msg: String
	},
  methods: {
		passImgToCanvas: function (e) {
			let canvas = document.getElementById('uploadedImage');
      let ctx = canvas.getContext("2d");
			let reader = new FileReader();
			reader.onload = function (event) {
				let img = new Image();
				img.onload = function () {
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
      switch (this.currentClick) {
        case 0:
          this.setEyesColor(hex)
          break;

        case 1:
          this.setHairColor(hex)
          break;

        case 2:
          this.setSkinColor(hex)
          break;
      
        default:
          break;
      }
      this.currentClick++;
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
    },
    ...mapActions({
      setNewEyesColor ({ commit }, value) {
        commit('setEyesColor', value)
      },
      setNewHairColor ({ commit }, value) {
        commit('setHairColor', value)
      },
      setNewSkinColor ({ commit }, value) {
        commit('setSkinColor', value)
      }
    }),
    ...mapMutations({
      setEyesColor (colorEyes, value) {
        // console.log(value)
        colorEyes.value = value
      },
      setHairColor (colorHair, value) {
        // console.log(value)
        colorHair.value = value
      },
      setSkinColor (colorSkin, value) {
        // console.log(value)
        colorSkin.value = value
      }
    }),
    setEyesColor: function (hex) {
      this.$store.dispatch('setNewEyesColor', hex)
    },
    setHairColor: function (hex) {
      this.$store.dispatch('setNewHairColor', hex)
    },
    setSkinColor: function (hex) {
      this.$store.dispatch('setNewSkinColor', hex)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .main {
    .image-processing {
      display: flex;
      margin-top: 24px;
      justify-content: center;
      align-items: center;
    }
    .md-progress-bar {
      margin: 24px;
    }
    .image-upload,
    .face-colors {
      flex: 1;
      margin-left: 5%;
      width: 25%;    
    }
    .md-raised.md-accent2.btn.analyze {
      margin-left: 0;
      background-color: #ffb3b3;
      color: white;
      width: 100%;
    }
    .select-color-wrapper {
      display: flex;
      margin-bottom: 16px;
      align-items: center;
                    
      > span {
        margin-left: 4px;
      }
    }
      .select-color {
        height: 40px;
        width: 40px;
        background-color: #bebebe;
        border-radius: 50%;
      }
	}
	.image {
		margin-left: 50px;
	}
	.btn {
		width: 200px;
		margin-left: 70px;
	}
	.body-items {
    margin: 20px auto;
    max-width: 1440px;
		background-color: white;
		border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 36px 28px rgba(0,0,0,0.1);
	}
	.test-color {
		margin: 10px;
	}
	.loader {
		width: 40%;
	}
</style>
