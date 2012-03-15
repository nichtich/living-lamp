// general utility functions

// color of a given lumen value (0..255)
function color(c) {
    c = Math.floor( c );
	var r = c < 16 ? '0'+c.toString(16) : c.toString(16);

	c = Math.floor(c / 2);
	var g = c < 16 ? '0'+c.toString(16) : c.toString(16);

	c = Math.floor(c / 2);
	var b = c < 16 ? '0'+c.toString(16) : c.toString(16);
	
	return '#'+r+g+b;
}

function randomColor() {
    return (16*Math.random()*0x0F<<0);
}




