// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Generator = require("../../builder/modules/Generator.bs.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Generator_Markdown = require("../../builder/views/Generator_Markdown.bs.js");

function requireImage(fileName) {
  return require("./images/" + fileName);
}

function requireTexture(fileName) {
  return require("./textures/" + fileName);
}

var id = "minecraft-wither";

var name = "Minecraft Wither";

var history = ["01 Aug 2021 Hannibanni - Created."];

var thumbnail = {
  url: require("./images/thumbnail.jpeg")
};

var witherTexture = require("./instructions/wither.png");

var instructions = "\n## How to use the Wither generator\n\n### Option 1: Use an existing Wither skin\n\n* Select one of the Wither skins from the generator.\n* Download and print your Wither papercraft.\n\n### Option 2: Create your own texture\n\n* Download a sample Wither texture (right click and save):\n  ![Wither Texture](" + witherTexture + ")\n* Edit this texture in your favourite graphics program.\n* Select this file in the generator.\n* Download and print your Wither papercraft.\n";

var images = [
  {
    id: "Background",
    url: require("./images/Background.png")
  },
  {
    id: "Folds",
    url: require("./images/Folds.png")
  }
];

var witherSkinId = "Wither Skin";

var textures = [
  {
    id: "Minecraft Wither",
    url: require("./textures/wither.png"),
    standardWidth: 64,
    standardHeight: 64
  },
  {
    id: witherSkinId,
    url: require("./textures/wither.png"),
    standardWidth: 64,
    standardHeight: 64
  }
];

function script(param) {
  Generator.defineTextureInput(witherSkinId, {
        standardWidth: 64,
        standardHeight: 64,
        choices: ["Minecraft Wither"]
      });
  Generator.drawImage("Background", [
        0,
        0
      ]);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 8,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 110,
        y: 90,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 16,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 174,
        y: 90,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 24,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 238,
        y: 90,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 0,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 46,
        y: 90,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 8,
        y: 0,
        w: 8,
        h: 8
      }, {
        x: 110,
        y: 26,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 16,
        y: 0,
        w: 8,
        h: 8
      }, {
        x: 110,
        y: 154,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 38,
        y: 6,
        w: 6,
        h: 6
      }, {
        x: 477,
        y: 76,
        w: 48,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 6,
        w: 6,
        h: 4
      }, {
        x: 525,
        y: 76,
        w: 48,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 10,
        w: 3,
        h: 2
      }, {
        x: 525,
        y: 108,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 32,
        y: 6,
        w: 6,
        h: 6
      }, {
        x: 429,
        y: 76,
        w: 48,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 50,
        y: 6,
        w: 6,
        h: 4
      }, {
        x: 381,
        y: 76,
        w: 48,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 53,
        y: 10,
        w: 3,
        h: 2
      }, {
        x: 397,
        y: 108,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 38,
        y: 0,
        w: 6,
        h: 6
      }, {
        x: 477,
        y: 28,
        w: 48,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 0,
        w: 6,
        h: 4
      }, {
        x: 477,
        y: 124,
        w: 48,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 4,
        w: 3,
        h: 2
      }, {
        x: 477,
        y: 156,
        w: 24,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 38,
        y: 0,
        w: 6,
        h: 6
      }, {
        x: 431,
        y: 333,
        w: 48,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 6,
        w: 6,
        h: 4
      }, {
        x: 527,
        y: 381,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 10,
        w: 3,
        h: 2
      }, {
        x: 559,
        y: 381,
        w: 16,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 38,
        y: 6,
        w: 6,
        h: 6
      }, {
        x: 431,
        y: 381,
        w: 48,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 50,
        y: 6,
        w: 6,
        h: 4
      }, {
        x: 399,
        y: 381,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 38,
        y: 0,
        w: 6,
        h: 6
      }, {
        x: 477,
        y: 28,
        w: 48,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 0,
        w: 6,
        h: 4
      }, {
        x: 477,
        y: 124,
        w: 48,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 4,
        w: 4,
        h: 6
      }, {
        x: 383,
        y: 381,
        w: 16,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 4,
        w: 4,
        h: 6
      }, {
        x: 383,
        y: 381,
        w: 16,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 6,
        w: 6,
        h: 6
      }, {
        x: 479,
        y: 381,
        w: 48,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 47,
        y: 4,
        w: 3,
        h: 2
      }, {
        x: 455,
        y: 461,
        w: 24,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 44,
        y: 0,
        w: 6,
        h: 4
      }, {
        x: 431,
        y: 429,
        w: 48,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 32,
        y: 6,
        w: 6,
        h: 4
      }, {
        x: 383,
        y: 381,
        w: 48,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 34,
        y: 10,
        w: 4,
        h: 2
      }, {
        x: 399,
        y: 413,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 50,
        y: 6,
        w: 6,
        h: 4
      }, {
        x: 527,
        y: 381,
        w: 48,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 50,
        y: 10,
        w: 3,
        h: 2
      }, {
        x: 527,
        y: 413,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 3,
        y: 25,
        w: 3,
        h: 10
      }, {
        x: 397,
        y: 177,
        w: 24,
        h: 80
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 0,
        y: 25,
        w: 3,
        h: 10
      }, {
        x: 397,
        y: 153,
        w: 24,
        h: 80
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 6,
        y: 25,
        w: 3,
        h: 10
      }, {
        x: 397,
        y: 201,
        w: 24,
        h: 80
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 9,
        y: 25,
        w: 3,
        h: 10
      }, {
        x: 397,
        y: 225,
        w: 24,
        h: 80
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 3,
        y: 22,
        w: 3,
        h: 3
      }, {
        x: 293,
        y: 177,
        w: 24,
        h: 24
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 3,
        y: 22,
        w: 3,
        h: 3
      }, {
        x: 397,
        y: 177,
        w: 24,
        h: 24
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 160,
        y: 359,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 37,
        y: 22,
        w: 4,
        h: 2
      }, {
        x: 160,
        y: 375,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 22,
        w: 4,
        h: 2
      }, {
        x: 160,
        y: 343,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 240,
        y: 375,
        w: 32,
        h: 16
      }, undefined, 180.0, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 24,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 144,
        y: 359,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 24,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 192,
        y: 359,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 160,
        y: 424,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 37,
        y: 22,
        w: 4,
        h: 2
      }, {
        x: 160,
        y: 440,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 22,
        w: 4,
        h: 2
      }, {
        x: 160,
        y: 408,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 240,
        y: 440,
        w: 32,
        h: 16
      }, undefined, 180.0, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 24,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 144,
        y: 424,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 24,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 192,
        y: 424,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 160,
        y: 493,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 37,
        y: 22,
        w: 4,
        h: 2
      }, {
        x: 160,
        y: 509,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 22,
        w: 4,
        h: 2
      }, {
        x: 160,
        y: 478,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 240,
        y: 509,
        w: 32,
        h: 16
      }, undefined, 180.0, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 24,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 144,
        y: 493,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 24,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 192,
        y: 493,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 319,
        y: 358,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 37,
        y: 22,
        w: 4,
        h: 2
      }, {
        x: 319,
        y: 373,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 319,
        y: 342,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 303,
        y: 374,
        w: 32,
        h: 16
      }, undefined, 180.0, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 303,
        y: 358,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 351,
        y: 358,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 319,
        y: 426,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 37,
        y: 22,
        w: 4,
        h: 2
      }, {
        x: 319,
        y: 441,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 319,
        y: 410,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 303,
        y: 442,
        w: 32,
        h: 16
      }, undefined, 180.0, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 303,
        y: 426,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 351,
        y: 426,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 319,
        y: 497,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 37,
        y: 22,
        w: 4,
        h: 2
      }, {
        x: 319,
        y: 512,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 319,
        y: 481,
        w: 32,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 4,
        h: 2
      }, {
        x: 303,
        y: 513,
        w: 32,
        h: 16
      }, undefined, 180.0, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 303,
        y: 497,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 24,
        w: 2,
        h: 2
      }, {
        x: 351,
        y: 497,
        w: 16,
        h: 16
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 3,
        y: 19,
        w: 20,
        h: 3
      }, {
        x: 46,
        y: 277,
        w: 160,
        h: 24
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 3,
        y: 16,
        w: 20,
        h: 3
      }, {
        x: 46,
        y: 253,
        w: 160,
        h: 24
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 23,
        y: 16,
        w: 20,
        h: 3
      }, {
        x: 46,
        y: 301,
        w: 160,
        h: 24
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 26,
        y: 19,
        w: 20,
        h: 3
      }, {
        x: 230,
        y: 277,
        w: 160,
        h: 24
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 0,
        y: 19,
        w: 3,
        h: 3
      }, {
        x: 206,
        y: 277,
        w: 24,
        h: 24
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 23,
        y: 19,
        w: 3,
        h: 3
      }, {
        x: 22,
        y: 277,
        w: 24,
        h: 24
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 15,
        y: 25,
        w: 3,
        h: 6
      }, {
        x: 49,
        y: 393,
        w: 24,
        h: 47
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 21,
        y: 25,
        w: 3,
        h: 6
      }, {
        x: 97,
        y: 404,
        w: 24,
        h: 36
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 18,
        y: 25,
        w: 3,
        h: 6
      }, {
        x: 25,
        y: 391,
        w: 24,
        h: 49
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 18,
        y: 25,
        w: 3,
        h: 6
      }, {
        x: 73,
        y: 391,
        w: 24,
        h: 49
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 18,
        y: 25,
        w: 3,
        h: 6
      }, {
        x: 49,
        y: 368,
        w: 24,
        h: 25
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy(witherSkinId, {
        x: 18,
        y: 25,
        w: 3,
        h: 6
      }, {
        x: 49,
        y: 440,
        w: 24,
        h: 24
      }, undefined, undefined, undefined, undefined);
  Generator.drawImage("Folds", [
        0,
        0
      ]);
}

var generator_thumbnail = thumbnail;

var generator_instructions = Caml_option.some(React.createElement(Generator_Markdown.make, {
          children: instructions
        }));

var generator = {
  id: id,
  name: name,
  history: history,
  thumbnail: generator_thumbnail,
  video: undefined,
  instructions: generator_instructions,
  images: images,
  textures: textures,
  script: script
};

exports.requireImage = requireImage;
exports.requireTexture = requireTexture;
exports.id = id;
exports.name = name;
exports.history = history;
exports.thumbnail = thumbnail;
exports.instructions = instructions;
exports.images = images;
exports.witherSkinId = witherSkinId;
exports.textures = textures;
exports.script = script;
exports.generator = generator;
/* thumbnail Not a pure module */
