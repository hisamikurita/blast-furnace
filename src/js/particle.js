export class Particle {
  /**
   * コンストラクター
   * @param {Number} x
   * @param {Number} y
   * @param {Number} radius
   * @param {Number} angle
   * @param {Number} distance
   */
  constructor(canvas, radius, angle, distance, color) {
    this.canvas = canvas;
    this.radius = radius;
    this.angle = angle;
    this.distance = distance;
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.speed = 1;
  }
  update() {
    this.distance += -this.speed;
    this.angle += .01;
    this.x = this.canvas.width / 2 + Math.cos(this.angle) * this.distance;
    this.y = this.canvas.height / 2 + Math.sin(this.angle) * this.distance;
    if (this.x > this.canvas.width) {
      this.distance *= -1;
    }
    if (this.x < 0) {
      this.distance *= -1;
    }
    if (this.y > this.canvas.height) {
      this.distance *= -1;
    }
    if (this.y < 0) {
      this.distance *= -1;
    }
  }
}