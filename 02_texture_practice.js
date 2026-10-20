const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const target = r.LoadRenderTexture(600, 400, r.WHITE);

  const screen = { WIDTH, HEIGHT };

  const transform = {
    angle: 0,
    offSet: 0,
  };

  return { target, screen, transform };
}

function drawWave(origin, amplitude, transform) {
  const angleIncrement = 0.15;
  const xIncrement = 12;

  const x = origin.x + transform.offSet;
  const y = origin.y + Math.sin(transform.angle) * amplitude;

  r.DrawCircle(x, y, 5, r.WHITE);

  if (transform.angle <= 2 * Math.PI) {
    transform.angle += angleIncrement;
    transform.offSet += xIncrement;
  }
}

function drawTexture(world) {
  r.BeginTextureMode(world.target);

  const origin = { x: 50, y: 200 };
  const amplitude = 100;

  drawWave(origin, amplitude, world.transform);

  r.EndTextureMode();
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawTexture(world.target.texture, 10, 10, r.WHITE);

  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    drawTexture(world);
    draw(world);
  }
}

function tearDown() {
  r.CloseWindow();
}

function main() {
  const WIDTH = 1000;
  const HEIGHT = 600;
  const title = "Texture Practice 02";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
