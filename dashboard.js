document.addEventListener("DOMContentLoaded", function() {
  let email = localStorage.getItem("currentUser");
  if(!email) location.href="index.html";

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u=>u.email===email);
  document.getElementById("userEmail").innerText=email;

  // --- Daily Challenge ---
  const challenges = [
    "🚜 Use manual tools instead of vehicles",
    "💧 Save 10% water today",
    "🌞 Switch to solar power",
    "🌱 Compost organic waste",
    "🚲 Avoid unnecessary transport"
  ];
  document.getElementById("challengeText").innerText = challenges[Math.floor(Math.random()*challenges.length)];

  // --- Badges ---
  function addBadgeInteractive(name){
    let badge = document.createElement("span");
    badge.className="badge";
    badge.innerText = name;
    badge.title = `Badge: ${name} - Earned for reducing carbon`;
    badge.onclick = ()=> alert(`🎖 ${badge.title}`);
    document.getElementById("badges").appendChild(badge);
  }
  if(!document.getElementById("badges").hasChildNodes()){ addBadgeInteractive("🌱 Starter Badge"); }

  // --- Tips ---
  const tipsArray = [
    "Use public transport whenever possible.",
    "Turn off lights when not needed.",
    "Plant trees near your home.",
    "Use energy-efficient appliances.",
    "Recycle and compost waste."
  ];
  document.getElementById("tipBtn").addEventListener("click", ()=>{
    let tip = tipsArray[Math.floor(Math.random()*tipsArray.length)];
    document.getElementById("tipMessage").innerText = tip;
  });

  // --- Mini-Game ---
  const canvas = document.getElementById("treeGame");
  const ctx = canvas.getContext("2d");
  let points=0; let trees=[];

  function drawTrees(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    trees.forEach(t=>{
      ctx.fillStyle="green";
      ctx.fillRect(t.x-5,t.y-5,t.size,t.size);
      t.size += 0.5;
    });
  }

  canvas.addEventListener("click", function(e){
    let rect=canvas.getBoundingClientRect();
    let x=e.clientX-rect.left;
    let y=e.clientY-rect.top;
    trees.push({x:x,y:y,size:10});
    points+=5;
    document.getElementById("gamePoints").innerText=points;
    drawTrees();
  });

  document.getElementById("resetGameBtn").addEventListener("click", function(){
    trees=[]; points=0;
    document.getElementById("gamePoints").innerText=points;
    ctx.clearRect(0,0,canvas.width,canvas.height);
  });

  // --- Carbon Calculator ---
  function calculate(){
    let e=Number(document.getElementById("electricity").value||0)*0.5;
    let t=Number(document.getElementById("transport").value||0)*0.2;
    let f=Number(document.getElementById("fuel").value||0)*2.3;
    let total=e+t+f;
    document.getElementById("result").innerText=`Emission: ${total.toFixed(2)} kg CO₂`;

    // Meter
    let perc=Math.min(100,total/100*100);
    document.getElementById("meterFill").style.width=perc+"%";

    // Reward
    if(total<50){
      user.credits=(user.credits||0)+10;
      showPopup();
      addBadgeInteractive("🌱 Carbon Saver Badge");
      triggerParticles();
    }

    localStorage.setItem("users",JSON.stringify(users));
    loadLeaderboard();
    updateChart(total);
  }

  document.getElementById("calcBtn").addEventListener("click", calculate);
  document.getElementById("calcBtnBottom").addEventListener("click", calculate);

  // --- Leaderboard ---
  function loadLeaderboard(){
    let lb=document.getElementById("leaderboard");
    lb.innerHTML="";
    users.sort((a,b)=>(b.credits||0)-(a.credits||0)).forEach(u=>{
      let li=document.createElement("li");
      li.innerText=`${u.email} - ${u.credits||0} Credits`;
      lb.appendChild(li);
    });
  }
  loadLeaderboard();

  // --- CO2 Graph ---
  const ctxChart=document.getElementById("co2Chart");
  const chart=new Chart(ctxChart,{
    type:'line',
    data:{labels:["Today"],datasets:[{label:"CO₂ Emission",data:[0],borderColor:'#2e7d32',fill:false}]}
  });
  function updateChart(val){ chart.data.datasets[0].data[0]=val; chart.update(); }

  // --- Popup ---
  window.showPopup=function(){document.getElementById("rewardPopup").style.display="flex";}
  window.closePopup=function(){document.getElementById("rewardPopup").style.display="none";}

});
