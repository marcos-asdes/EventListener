/* key motion capture ~ addEventListener -> keydown -> event.key */
let positionX = 0;
let positionY = 0;

document.addEventListener("keydown", function(event){
    const obj = document.getElementById("div");
    let keyPressed = event.key;
    if (keyPressed == "ArrowLeft"){
        positionX -= 10;
        obj.style.left = positionX + "px";
    } else if (keyPressed == "ArrowRight"){
        positionX += 10;
        obj.style.left = positionX + "px";
    } else if (keyPressed == "ArrowUp"){
        positionY -= 10;
        obj.style.top = positionY + "px";
    } else if (keyPressed == "ArrowDown"){
        positionY += 10;
        obj.style.top = positionY + "px";
    }
})

/* besides event.key, we can also use event.code */
/* for twin keys, as in the case of keyboards with two shifts, we identify the pressed key with the key.location */

/* the event.which, its numeric encoding and the .keycode command are deprecated */