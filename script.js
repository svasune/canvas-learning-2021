
window.onload = () => {
    const canvas = document.getElementById("rect");
    const ctx = canvas.getContext("2d");

     const size = 30;
     const startX = 5;
     const startY = 5;
     const red = 216;
     const green = 146;
     const blue = 112;
     const alpha = 0.6;
		
		for (let i=0; i<5; i++) {
		for (let j=0; j<5; j++) {
				ctx.fillStyle = `rgba(${red+i*20}, ${green-j*20}, ${blue-i*20}, ${alpha-0.1*i})`;
		ctx.fillRect(startX+size*i*2, startY+size*j*2, size, size);		}
		}
		
};

