const r = require("raylib");

function setup(WIDTH, HEIGHT, title, FPS) {
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const target = r.LoadRenderTexture(200, 200, r.WHITE);
  drawTexture(target);

  const screen = { WIDTH, HEIGHT };

  return { target, screen };
}

function drawTexture(target) {
  r.BeginTextureMode(target);
  r.ClearBackground(r.BLACK);

  r.DrawCircle(100, 100, 60, r.RED);
  r.DrawCircle(80, 80, 15, r.WHITE);

  r.EndTextureMode();
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.DARKGRAY);

  r.DrawTexture(world.target.texture, 50, 50, r.WHITE);
  r.DrawTexture(world.target.texture, 300, 50, r.WHITE);
  r.DrawTexture(world.target.texture, 550, 50, r.WHITE);

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
  const WIDTH = 1000;
  const HEIGHT = 600;
  const title = "Texture Practice";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
