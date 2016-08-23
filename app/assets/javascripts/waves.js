// $(function soundWaves () {
//   var waves = new SineWaves({
//     el: document.getElementById('waves'),

//     speed: 1,

//     width: function() {
//       var width = $(window).width();
//       return width * 0.7;
//     },

//     height: function() {
//       var height = $(window).height();
//       return height * 0.65;
//     },

//     wavesWidth: '95%',

//     ease: 'SineInOut',

//     waves: [
//       {
//         timeModifier: 1,
//         lineWidth: 3,
//         amplitude: 150,
//         wavelength: 200,
//         segmentLength: 20,
//       },
//       {
//         timeModifier: 1,
//         lineWidth: 2,
//         amplitude: 150,
//         wavelength: 100,
//       },
//       {
//         timeModifier: 1,
//         lineWidth: 1,
//         amplitude: -150,
//         wavelength: 50,
//         segmentLength: 10,
//       },
//       {
//         timeModifier: 1,
//         lineWidth: 0.5,
//         amplitude: -100,
//         wavelength: 100,
//         segmentLength: 10,
//       }
//     ],

//     initialize: function () {

//     },

//     resizeEvent: function() {
//       var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
//       gradient.addColorStop(0,"rgba(33, 64, 154, 0)");
//       gradient.addColorStop(0.5,"rgba(33, 64, 154, 1)");
//       gradient.addColorStop(1,"rgba(33, 64, 154, 0)");

//       var index = -1;
//       var length = this.waves.length;
//         while(++index < length){
//         this.waves[index].strokeStyle = gradient;
//       }

//       // Clean Up
//       index = void 0;
//       length = void 0;
//       gradient = void 0;
//     }
//   });
// });