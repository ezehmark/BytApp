const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const ICON_INPUT = "assets/icon.png";      // 512×512 recommended
const SPLASH_INPUT = "assets/splash.png";  // 1280×1920 recommended
const OUTPUT_DIR = "res";

const mipmapSizes = {
  "mdpi": 48,
  "hdpi": 72,
  "xhdpi": 96,
  "xxhdpi": 144,
  "xxxhdpi": 192
};

const splashScales = {
  "mdpi": 1,
  "hdpi": 1.5,
  "xhdpi": 2,
  "xxhdpi": 3,
  "xxxhdpi": 4
};

const baseSplashSize = [320, 480]; // base splash size

async function generateIconAssets() {
  for (const [dpi, size] of Object.entries(mipmapSizes)) {
    const dir = path.join(OUTPUT_DIR, `mipmap-${dpi}`);
    await fs.ensureDir(dir);
    await sharp(ICON_INPUT)
      .resize(size, size)
      .toFile(path.join(dir, "ic_launcher.png"));
  }
}

async function generateSplashAssets() {
  for (const [dpi, scale] of Object.entries(splashScales)) {
    const dir = path.join(OUTPUT_DIR, `drawable-${dpi}`);
    await fs.ensureDir(dir);
    await sharp(SPLASH_INPUT)
      .resize(
        Math.round(baseSplashSize[0] * scale),
        Math.round(baseSplashSize[1] * scale)
      )
      .toFile(path.join(dir, "splash.png"));
  }
}

(async () => {
  try {
    console.log("🛠️ Generating icon and splash assets...");
    await generateIconAssets();
    await generateSplashAssets();
    console.log(`✅ Done! Check the '${OUTPUT_DIR}/' directory.`);
  } catch (err) {
    console.error("❌ Error generating assets:", err);
  }
})();
