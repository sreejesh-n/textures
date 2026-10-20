const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const screen = { WIDTH, HEIGHT };
  const target = r.LoadRenderTexture(200, 200);
  drawTexture(target);

  return { target, screen };
}

function drawTexture(target) {
  r.BeginTextureMode(target);
  r.ClearBackground(r.BLACK);

  r.EndTextureMode();
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.DARKGRAY);

  r.DrawTexture(world.target.texture, 10, 10, r.WHITE);

  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}

function tearDown() {
  r.CloseWindow();
}

function main() {
  const WIDTH = 800;
  const HEIGHT = 600;
  const title = "Texture Practice 03";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
