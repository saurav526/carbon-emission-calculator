const canvasP=document.getElementById("particleCanvas");
const ctxP=canvasP.getContext("2d");
canvasP.width=canvasP.offsetWidth;
canvasP.height=canvasP.offsetHeight;
let particles=[];

function Particle(x,y){
  this.x=x; this.y=y;
  this.radius=Math.random()*5+3;
  this.color="gold";
  this.speedY=Math.random()*-2-1;
  this.opacity=1;
}

function triggerParticles(){
  for(let i=0;i<30;i++){
    particles.push(new Particle(canvasP.width/2,canvasP.height/2));
  }
  animateParticles();
}

function animateParticles(){
  ctxP.clearRect(0,0,canvasP.width,canvasP.height);
  particles.forEach((p,i)=>{
    p.y+=p.speedY;
    p.opacity-=0.02;
    ctxP.beginPath();
    ctxP.arc(p.x,p.y,p.radius,0,Math.PI*2);
    ctxP.fillStyle=`rgba(255,215,0,${p.opacity})`;
    ctxP.fill();
    if(p.opacity<=0) particles.splice(i,1);
  });
  if(particles.length>0) requestAnimationFrame(animateParticles);
}
