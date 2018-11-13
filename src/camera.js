import * as matrix from "./matrix.js";

export class Camera
{
	constructor(display)
	{
		this.display = display;
		this.pos = [0, 0, 0];
		this.hangle = 0;
		this.vangle = 0;
		this.proj = matrix.identity();
		this.view = matrix.identity();
	}
	
	getProjection()
	{
		matrix.perspective(90 * Math.PI / 180, this.display.aspect, 0.1, 100, this.proj);
		
		return this.proj;
	}
	
	getView()
	{
		matrix.identity(this.view);
		matrix.rotateX(this.view, this.vangle, this.view);
		matrix.rotateY(this.view, this.hangle, this.view);
		matrix.translate(this.view, -this.pos[0], -this.pos[1], -this.pos[2], this.view);
		
		return this.view;
	}
	
	moveForward(speed)
	{
		this.pos[2] += speed;
	}
	
	moveBackward(speed)
	{
		this.pos[2] -= speed;
	}
	
	moveLeft(speed)
	{
		this.pos[0] -= speed;
	}
	
	moveRight(speed)
	{
		this.pos[0] += speed;
	}
	
	turnHori(angle)
	{
		this.hangle += angle;
	}
	
	turnVert(angle)
	{
		this.vangle += angle;
	}
}
