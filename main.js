canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


random_number = Math.floor(Math.random() * 4);
console.log(random_number);
car_width = 100;
car_height = 150;


car_x = 10;
car_y = 320;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = "parkingLot.jpg";   // load image

    car_imgTag = new Image(); //defining a variable with a new image
    car_imgTag.onload = uploadcar; // setting a function, onloading this variable
    car_imgTag.src = "car2.png";   // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
}

function up()
{
    if(car_y >=0)
    {
        car_y = car_y - 10;
        
         uploadBackground();
         uploadcar();
    }
}
function down()
{
    if(car_y <=500)
    {
        car_y =car_y+ 10;
        
        uploadBackground();
		uploadcar();
    }
}
function left() 
{
    if(car_x >= 0)
    {
        car_x =car_x - 10;
        
        uploadBackground();
         uploadcar();
    }
}
function right()
{
    if(car_x <= 700)
    {
        car_x =car_x + 10;
        
        uploadBackground();
        uploadcar();
   }
}


























function backup(){
//Create a reference for canvas 

//Give specific height and width to the car image
carHeight = 5

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);



function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
}
