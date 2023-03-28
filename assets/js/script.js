var imagens = ["assets/images/cel.png","assets/images/cel2.png","assets/images/cel3.png"];
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 3;
document.querySelector('.cel img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 2500);