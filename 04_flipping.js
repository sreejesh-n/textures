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

  r.DrawCircle(100, 100, 60, r.RED);
  r.DrawCircle(80, 120, 15, r.WHITE);

  r.EndTextureMode();
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.DARKGRAY);

  const normal = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  };

  const hFlip = {
    x: 0,
    y: 0,
    width: -200,
    height: 200,
  };

  const vFlip = {
    x: 0,
    y: 0,
    width: 200,
    height: -200,
  };

  r.DrawTextureRec(world.target.texture, normal, { x: 50, y: 50 }, r.WHITE);
  r.DrawTextureRec(world.target.texture, hFlip, { x: 300, y: 50 }, r.WHITE);
  r.DrawTextureRec(world.target.texture, vFlip, { x: 550, y: 50 }, r.WHITE);

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
  const HEIGHT = 400;
  const title = "Texture Practice 03";
  const FPS = 60;

  const world = setup(WIDTH, HEIGHT, title, FPS);
  loop(world);

  tearDown();
}

main();
