class Rope
{
constructor(bodyA,bodyB,offsetX,offsetY)
{
    this.offsetX = offsetX;
    this.offsetY = offsetY;
var options = {
bodyA : bodyA,
bodyB : bodyB,
pointB :{x : this.offsetX, y : this.offsetY},
length: 10



}
    this.rope = Constraint.create(options)
   // World.add(world,this.rope);






}




display()
{
    var PointA = this.rope.bodyA.position;
    var PointB = this.rope.bodyB.position;
    strokeWeight(4)
    stroke("pink")
    line(PointA.x,PointA.y,PointB.x,PointB.y);









}















}