"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/color-name/index.js
var require_color_name = __commonJS({
  "../../node_modules/color-name/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// ../../node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "../../node_modules/color-convert/conversions.js"(exports, module2) {
    "use strict";
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// ../../node_modules/color-convert/route.js
var require_route = __commonJS({
  "../../node_modules/color-convert/route.js"(exports, module2) {
    "use strict";
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// ../../node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "../../node_modules/color-convert/index.js"(exports, module2) {
    "use strict";
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// ../../node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "../../node_modules/ansi-styles/index.js"(exports, module2) {
    "use strict";
    var wrapAnsi16 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
      setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// ../../node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "../../node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// ../../node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "../../node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// ../../node_modules/chalk/source/util.js
var require_util = __commonJS({
  "../../node_modules/chalk/source/util.js"(exports, module2) {
    "use strict";
    var stringReplaceAll = (string, substring, replacer) => {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    module2.exports = {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    };
  }
});

// ../../node_modules/chalk/source/templates.js
var require_templates = __commonJS({
  "../../node_modules/chalk/source/templates.js"(exports, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk2, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk2;
      for (const [styleName, styles2] of Object.entries(enabled)) {
        if (!Array.isArray(styles2)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
      }
      return current;
    }
    module2.exports = (chalk2, temporary) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape(escapeCharacter));
        } else if (style) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? string : buildStyle(chalk2, styles)(string));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk2, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMessage);
      }
      return chunks.join("");
    };
  }
});

// ../../node_modules/chalk/source/index.js
var require_source = __commonJS({
  "../../node_modules/chalk/source/index.js"(exports, module2) {
    "use strict";
    var ansiStyles = require_ansi_styles();
    var { stdout: stdoutColor, stderr: stderrColor } = require_supports_color();
    var {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    } = require_util();
    var { isArray } = Array;
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = (object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    };
    var ChalkClass = class {
      constructor(options) {
        return chalkFactory(options);
      }
    };
    var chalkFactory = (options) => {
      const chalk3 = {};
      applyOptions(chalk3, options);
      chalk3.template = (...arguments_) => chalkTag(chalk3.template, ...arguments_);
      Object.setPrototypeOf(chalk3, Chalk.prototype);
      Object.setPrototypeOf(chalk3.template, chalk3);
      chalk3.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk3.template.Instance = ChalkClass;
      return chalk3.template;
    };
    function Chalk(options) {
      return chalkFactory(options);
    }
    for (const [styleName, style] of Object.entries(ansiStyles)) {
      styles[styleName] = {
        get() {
          const builder2 = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, { value: builder2 });
          return builder2;
        }
      };
    }
    styles.visible = {
      get() {
        const builder2 = createBuilder(this, this._styler, true);
        Object.defineProperty(this, "visible", { value: builder2 });
        return builder2;
      }
    };
    var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, {
      ...styles,
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    });
    var createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder = (self, _styler, _isEmpty) => {
      const builder2 = (...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle(builder2, chalkTag(builder2, ...arguments_));
        }
        return applyStyle(builder2, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      };
      Object.setPrototypeOf(builder2, proto);
      builder2._generator = self;
      builder2._styler = _styler;
      builder2._isEmpty = _isEmpty;
      return builder2;
    };
    var applyStyle = (self, string) => {
      if (self.level <= 0 || !string) {
        return self._isEmpty ? "" : string;
      }
      let styler = self._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    var template;
    var chalkTag = (chalk3, ...strings) => {
      const [firstString] = strings;
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [firstString.raw[0]];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(
          String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"),
          String(firstString.raw[i])
        );
      }
      if (template === void 0) {
        template = require_templates();
      }
      return template(chalk3, parts.join(""));
    };
    Object.defineProperties(Chalk.prototype, styles);
    var chalk2 = Chalk();
    chalk2.supportsColor = stdoutColor;
    chalk2.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 });
    chalk2.stderr.supportsColor = stderrColor;
    module2.exports = chalk2;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  builder: () => builder,
  default: () => src_default,
  generateQuery: () => generateQuery,
  generateQueryHeader: () => generateQueryHeader,
  getReactQueryDependencies: () => getReactQueryDependencies,
  getSvelteQueryDependencies: () => getSvelteQueryDependencies,
  getVueQueryDependencies: () => getVueQueryDependencies
});
module.exports = __toCommonJS(src_exports);
var import_core2 = require("@orval/core");
var import_lodash = __toESM(require("lodash.omitby"));

// src/utils.ts
var import_core = require("@orval/core");
var import_chalk = __toESM(require_source());
var normalizeQueryOptions = (queryOptions = {}, outputWorkspace) => {
  return {
    ...queryOptions.usePrefetch ? { usePrefetch: true } : {},
    ...queryOptions.useQuery ? { useQuery: true } : {},
    ...queryOptions.useInfinite ? { useInfinite: true } : {},
    ...queryOptions.useInfiniteQueryParam ? { useInfiniteQueryParam: queryOptions.useInfiniteQueryParam } : {},
    ...queryOptions.options ? { options: queryOptions.options } : {},
    ...(queryOptions == null ? void 0 : queryOptions.queryKey) ? {
      queryKey: normalizeMutator(outputWorkspace, queryOptions == null ? void 0 : queryOptions.queryKey)
    } : {},
    ...(queryOptions == null ? void 0 : queryOptions.queryOptions) ? {
      queryOptions: normalizeMutator(
        outputWorkspace,
        queryOptions == null ? void 0 : queryOptions.queryOptions
      )
    } : {},
    ...(queryOptions == null ? void 0 : queryOptions.mutationOptions) ? {
      mutationOptions: normalizeMutator(
        outputWorkspace,
        queryOptions == null ? void 0 : queryOptions.mutationOptions
      )
    } : {},
    ...queryOptions.signal ? { signal: true } : {}
  };
};
var normalizeMutator = (workspace, mutator) => {
  var _a;
  if ((0, import_core.isObject)(mutator)) {
    if (!mutator.path) {
      (0, import_core.createLogger)().error(import_chalk.default.red(`Mutator need a path`));
      process.exit(1);
    }
    return {
      ...mutator,
      path: import_core.upath.resolve(workspace, mutator.path),
      default: (_a = mutator.default || !mutator.name) != null ? _a : false
    };
  }
  if ((0, import_core.isString)(mutator)) {
    return {
      path: import_core.upath.resolve(workspace, mutator),
      default: true
    };
  }
  return mutator;
};
function vueWrapTypeWithMaybeRef(props) {
  return props.map((prop) => {
    const [paramName, paramType] = prop.implementation.split(":");
    if (!paramType)
      return prop;
    const name = prop.type === import_core.GetterPropType.NAMED_PATH_PARAMS ? prop.name : `${paramName}`;
    const [type, defaultValue] = paramType.split("=");
    return {
      ...prop,
      implementation: `${name}: MaybeRef<${type.trim()}>${defaultValue ? ` = ${defaultValue}` : ""}`
    };
  });
}
var vueUnRefParams = (props) => {
  return props.map((prop) => {
    if (prop.type === import_core.GetterPropType.NAMED_PATH_PARAMS) {
      return `const ${prop.destructured} = unref(${prop.name});`;
    }
    return `${prop.name} = unref(${prop.name});`;
  }).join("\n");
};
var wrapRouteParameters = (route, prepend, append) => route.replaceAll(/\${(.+?)}/g, `\${${prepend}$1${append}}`);
var makeRouteSafe = (route) => wrapRouteParameters(route, "encodeURIComponent(String(", "))");
var isVue = (client) => import_core.OutputClient.VUE_QUERY === client;

// src/index.ts
var AXIOS_DEPENDENCIES = [
  {
    exports: [
      {
        name: "axios",
        default: true,
        values: true,
        syntheticDefaultImport: true
      },
      { name: "AxiosRequestConfig" },
      { name: "AxiosResponse" },
      { name: "AxiosError" }
    ],
    dependency: "axios"
  }
];
var PARAMS_SERIALIZER_DEPENDENCIES = [
  {
    exports: [
      {
        name: "qs",
        default: true,
        values: true,
        syntheticDefaultImport: true
      }
    ],
    dependency: "qs"
  }
];
var SVELTE_QUERY_DEPENDENCIES_V3 = [
  {
    exports: [
      { name: "useQuery", values: true },
      { name: "useInfiniteQuery", values: true },
      { name: "useMutation", values: true },
      { name: "UseQueryOptions" },
      {
        name: "UseInfiniteQueryOptions"
      },
      { name: "UseMutationOptions" },
      { name: "QueryFunction" },
      { name: "MutationFunction" },
      { name: "UseQueryStoreResult" },
      { name: "UseInfiniteQueryStoreResult" },
      { name: "QueryKey" }
    ],
    dependency: "@sveltestack/svelte-query"
  }
];
var SVELTE_QUERY_DEPENDENCIES = [
  {
    exports: [
      { name: "createQuery", values: true },
      { name: "createInfiniteQuery", values: true },
      { name: "createMutation", values: true },
      { name: "CreateQueryOptions" },
      {
        name: "CreateInfiniteQueryOptions"
      },
      { name: "CreateMutationOptions" },
      { name: "QueryFunction" },
      { name: "MutationFunction" },
      { name: "CreateQueryResult" },
      { name: "CreateInfiniteQueryResult" },
      { name: "QueryKey" },
      { name: "InfiniteData" }
    ],
    dependency: "@tanstack/svelte-query"
  }
];
var isSvelteQueryV3 = (packageJson) => {
  var _a, _b, _c, _d, _e, _f;
  const hasVueQuery = (_c = (_a = packageJson == null ? void 0 : packageJson.dependencies) == null ? void 0 : _a["@sveltestack/svelte-query"]) != null ? _c : (_b = packageJson == null ? void 0 : packageJson.devDependencies) == null ? void 0 : _b["@sveltestack/svelte-query"];
  const hasVueQueryV4 = (_f = (_d = packageJson == null ? void 0 : packageJson.dependencies) == null ? void 0 : _d["@tanstack/svelte-query"]) != null ? _f : (_e = packageJson == null ? void 0 : packageJson.devDependencies) == null ? void 0 : _e["@tanstack/svelte-query"];
  return !!hasVueQuery && !hasVueQueryV4;
};
var getSvelteQueryDependencies = (hasGlobalMutator, hasParamsSerializerOptions, packageJson) => {
  const hasSvelteQueryV3 = isSvelteQueryV3(packageJson);
  return [
    ...!hasGlobalMutator ? AXIOS_DEPENDENCIES : [],
    ...hasParamsSerializerOptions ? PARAMS_SERIALIZER_DEPENDENCIES : [],
    ...hasSvelteQueryV3 ? SVELTE_QUERY_DEPENDENCIES_V3 : SVELTE_QUERY_DEPENDENCIES
  ];
};
var REACT_QUERY_DEPENDENCIES_V3 = [
  {
    exports: [
      { name: "useQuery", values: true },
      { name: "useInfiniteQuery", values: true },
      { name: "useMutation", values: true },
      { name: "UseQueryOptions" },
      { name: "UseInfiniteQueryOptions" },
      { name: "UseMutationOptions" },
      { name: "QueryFunction" },
      { name: "MutationFunction" },
      { name: "UseQueryResult" },
      { name: "UseInfiniteQueryResult" },
      { name: "QueryKey" },
      { name: "QueryClient" }
    ],
    dependency: "react-query"
  }
];
var REACT_QUERY_DEPENDENCIES = [
  {
    exports: [
      { name: "useQuery", values: true },
      { name: "useSuspenseQuery", values: true },
      { name: "useInfiniteQuery", values: true },
      { name: "useSuspenseInfiniteQuery", values: true },
      { name: "useMutation", values: true },
      { name: "UseQueryOptions" },
      { name: "UseSuspenseQueryOptions" },
      { name: "UseInfiniteQueryOptions" },
      { name: "UseSuspenseInfiniteQueryOptions" },
      { name: "UseMutationOptions" },
      { name: "QueryFunction" },
      { name: "MutationFunction" },
      { name: "UseQueryResult" },
      { name: "UseSuspenseQueryResult" },
      { name: "UseInfiniteQueryResult" },
      { name: "UseSuspenseInfiniteQueryResult" },
      { name: "QueryKey" },
      { name: "QueryClient" },
      { name: "InfiniteData" }
    ],
    dependency: "@tanstack/react-query"
  }
];
var getReactQueryDependencies = (hasGlobalMutator, hasParamsSerializerOptions, packageJson) => {
  var _a, _b, _c, _d, _e, _f;
  const hasReactQuery = (_c = (_a = packageJson == null ? void 0 : packageJson.dependencies) == null ? void 0 : _a["react-query"]) != null ? _c : (_b = packageJson == null ? void 0 : packageJson.devDependencies) == null ? void 0 : _b["react-query"];
  const hasReactQueryV4 = (_f = (_d = packageJson == null ? void 0 : packageJson.dependencies) == null ? void 0 : _d["@tanstack/react-query"]) != null ? _f : (_e = packageJson == null ? void 0 : packageJson.devDependencies) == null ? void 0 : _e["@tanstack/react-query"];
  return [
    ...!hasGlobalMutator ? AXIOS_DEPENDENCIES : [],
    ...hasParamsSerializerOptions ? PARAMS_SERIALIZER_DEPENDENCIES : [],
    ...hasReactQuery && !hasReactQueryV4 ? REACT_QUERY_DEPENDENCIES_V3 : REACT_QUERY_DEPENDENCIES
  ];
};
var VUE_QUERY_DEPENDENCIES_V3 = [
  {
    exports: [
      { name: "useQuery", values: true },
      { name: "useInfiniteQuery", values: true },
      { name: "useMutation", values: true }
    ],
    dependency: "vue-query"
  },
  {
    exports: [
      { name: "UseQueryOptions" },
      { name: "UseInfiniteQueryOptions" },
      { name: "UseMutationOptions" },
      { name: "QueryFunction" },
      { name: "MutationFunction" },
      { name: "UseQueryResult" },
      { name: "UseInfiniteQueryResult" },
      { name: "QueryKey" }
    ],
    dependency: "vue-query/types"
  },
  {
    exports: [
      { name: "unref", values: true },
      { name: "computed", values: true }
    ],
    dependency: "vue"
  },
  {
    exports: [{ name: "UseQueryReturnType" }],
    dependency: "vue-query/lib/vue/useBaseQuery"
  }
];
var VUE_QUERY_DEPENDENCIES = [
  {
    exports: [
      { name: "useQuery", values: true },
      { name: "useInfiniteQuery", values: true },
      { name: "useMutation", values: true },
      { name: "UseQueryOptions" },
      { name: "UseInfiniteQueryOptions" },
      { name: "UseMutationOptions" },
      { name: "QueryFunction" },
      { name: "MutationFunction" },
      { name: "QueryKey" },
      { name: "UseQueryReturnType" },
      { name: "UseInfiniteQueryReturnType" },
      { name: "InfiniteData" }
    ],
    dependency: "@tanstack/vue-query"
  },
  {
    exports: [
      { name: "unref", values: true },
      { name: "MaybeRef" },
      { name: "computed", values: true }
    ],
    dependency: "vue"
  }
];
var isVueQueryV3 = (packageJson) => {
  var _a, _b, _c, _d, _e, _f;
  const hasVueQuery = (_c = (_a = packageJson == null ? void 0 : packageJson.dependencies) == null ? void 0 : _a["vue-query"]) != null ? _c : (_b = packageJson == null ? void 0 : packageJson.devDependencies) == null ? void 0 : _b["vue-query"];
  const hasVueQueryV4 = (_f = (_d = packageJson == null ? void 0 : packageJson.dependencies) == null ? void 0 : _d["@tanstack/vue-query"]) != null ? _f : (_e = packageJson == null ? void 0 : packageJson.devDependencies) == null ? void 0 : _e["@tanstack/vue-query"];
  return !!hasVueQuery && !hasVueQueryV4;
};
var getVueQueryDependencies = (hasGlobalMutator, hasParamsSerializerOptions, packageJson) => {
  const hasVueQueryV3 = isVueQueryV3(packageJson);
  return [
    ...!hasGlobalMutator ? AXIOS_DEPENDENCIES : [],
    ...hasParamsSerializerOptions ? PARAMS_SERIALIZER_DEPENDENCIES : [],
    ...hasVueQueryV3 ? VUE_QUERY_DEPENDENCIES_V3 : VUE_QUERY_DEPENDENCIES
  ];
};
var isQueryV5 = (packageJson, queryClient) => {
  const version = getPackageByQueryClient(packageJson, queryClient);
  if (!version) {
    return false;
  }
  const withoutRc = version.split("-")[0];
  return (0, import_core2.compareVersions)(withoutRc, "5.0.0");
};
var getPackageByQueryClient = (packageJson, queryClient) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  switch (queryClient) {
    case "react-query": {
      return (_c = (_a = packageJson == null ? void 0 : packageJson.dependencies) == null ? void 0 : _a["@tanstack/react-query"]) != null ? _c : (_b = packageJson == null ? void 0 : packageJson.devDependencies) == null ? void 0 : _b["@tanstack/react-query"];
    }
    case "svelte-query": {
      return (_f = (_d = packageJson == null ? void 0 : packageJson.dependencies) == null ? void 0 : _d["@tanstack/svelte-query"]) != null ? _f : (_e = packageJson == null ? void 0 : packageJson.devDependencies) == null ? void 0 : _e["@tanstack/svelte-query"];
    }
    case "vue-query": {
      return (_i = (_g = packageJson == null ? void 0 : packageJson.dependencies) == null ? void 0 : _g["@tanstack/vue-query"]) != null ? _i : (_h = packageJson == null ? void 0 : packageJson.devDependencies) == null ? void 0 : _h["@tanstack/vue-query"];
    }
  }
};
var generateRequestOptionsArguments = ({
  isRequestOptions,
  hasSignal
}) => {
  if (isRequestOptions) {
    return "options?: AxiosRequestConfig\n";
  }
  return hasSignal ? "signal?: AbortSignal\n" : "";
};
var generateQueryRequestFunction = ({
  headers,
  queryParams,
  operationName,
  response,
  mutator,
  body,
  props: _props,
  verb,
  formData,
  formUrlEncoded,
  paramsSerializer,
  override
}, { route: _route, context }, outputClient, output) => {
  var _a, _b;
  let props = _props;
  let route = _route;
  if (isVue(outputClient)) {
    props = vueWrapTypeWithMaybeRef(_props);
  }
  if (output == null ? void 0 : output.urlEncodeParameters) {
    route = makeRouteSafe(route);
  }
  const isRequestOptions = override.requestOptions !== false;
  const isFormData = override.formData !== false;
  const isFormUrlEncoded = override.formUrlEncoded !== false;
  const hasSignal = !!override.query.signal;
  const isSyntheticDefaultImportsAllowed = (0, import_core2.isSyntheticDefaultImportsAllow)(
    context.tsconfig
  );
  const isExactOptionalPropertyTypes = !!((_b = (_a = context.tsconfig) == null ? void 0 : _a.compilerOptions) == null ? void 0 : _b.exactOptionalPropertyTypes);
  const isBodyVerb = import_core2.VERBS_WITH_BODY.includes(verb);
  const bodyForm = (0, import_core2.generateFormDataAndUrlEncodedFunction)({
    formData,
    formUrlEncoded,
    body,
    isFormData,
    isFormUrlEncoded
  });
  if (mutator) {
    const mutatorConfig = (0, import_core2.generateMutatorConfig)({
      route,
      body,
      headers,
      queryParams,
      response,
      verb,
      isFormData,
      isFormUrlEncoded,
      isBodyVerb,
      hasSignal,
      isExactOptionalPropertyTypes,
      isVue: isVue(outputClient)
    });
    let bodyDefinition = body.definition.replace("[]", "\\[\\]");
    let propsImplementation = (mutator == null ? void 0 : mutator.bodyTypeName) && body.definition ? (0, import_core2.toObjectString)(props, "implementation").replace(
      new RegExp(`(\\w*):\\s?${bodyDefinition}`),
      `$1: ${mutator.bodyTypeName}<${body.definition}>`
    ) : (0, import_core2.toObjectString)(props, "implementation");
    const requestOptions = isRequestOptions ? (0, import_core2.generateMutatorRequestOptions)(
      override.requestOptions,
      mutator.hasSecondArg
    ) : "";
    if (mutator.isHook) {
      return `export const use${(0, import_core2.pascal)(operationName)}Hook = () => {
        const ${operationName} = ${mutator.name}<${response.definition.success || "unknown"}>();

        return (
    ${propsImplementation}
 ${isRequestOptions && mutator.hasSecondArg ? `options?: SecondParameter<ReturnType<typeof ${mutator.name}>>,` : ""}${!isBodyVerb && hasSignal ? "signal?: AbortSignal\n" : ""}) => {${bodyForm}
        return ${operationName}(
          ${mutatorConfig},
          ${requestOptions});
        }
      }
    `;
    }
    return `export const ${operationName} = (
    ${propsImplementation}
 ${isRequestOptions && mutator.hasSecondArg ? `options?: SecondParameter<typeof ${mutator.name}>,` : ""}${!isBodyVerb && hasSignal ? "signal?: AbortSignal\n" : ""}) => {
      ${isVue(outputClient) ? vueUnRefParams(props) : ""}
      ${bodyForm}
      return ${mutator.name}<${response.definition.success || "unknown"}>(
      ${mutatorConfig},
      ${requestOptions});
    }
  `;
  }
  const options = (0, import_core2.generateOptions)({
    route,
    body,
    headers,
    queryParams,
    response,
    verb,
    requestOptions: override == null ? void 0 : override.requestOptions,
    isFormData,
    isFormUrlEncoded,
    paramsSerializer,
    paramsSerializerOptions: override == null ? void 0 : override.paramsSerializerOptions,
    isExactOptionalPropertyTypes,
    hasSignal,
    isVue: isVue(outputClient)
  });
  const optionsArgs = generateRequestOptionsArguments({
    isRequestOptions,
    hasSignal
  });
  const queryProps = (0, import_core2.toObjectString)(props, "implementation");
  return `export const ${operationName} = (
    ${queryProps} ${optionsArgs} ): Promise<AxiosResponse<${response.definition.success || "unknown"}>> => {${bodyForm}
    ${isVue(outputClient) ? vueUnRefParams(props) : ""}
    return axios${!isSyntheticDefaultImportsAllowed ? ".default" : ""}.${verb}(${options});
  }
`;
};
var QueryType = {
  INFINITE: "infiniteQuery",
  QUERY: "query",
  SUSPENSE_QUERY: "suspenseQuery",
  SUSPENSE_INFINITE: "suspenseInfiniteQuery"
};
var INFINITE_QUERY_PROPERTIES = ["getNextPageParam", "getPreviousPageParam"];
var generateQueryOptions = ({
  params,
  options,
  type,
  outputClient
}) => {
  var _a;
  if (options === false) {
    return "";
  }
  const queryConfig = (0, import_core2.isObject)(options) ? ` ${(_a = (0, import_core2.stringify)(
    (0, import_lodash.default)(
      options,
      (_, key) => (type !== QueryType.INFINITE || type !== QueryType.SUSPENSE_INFINITE) && INFINITE_QUERY_PROPERTIES.includes(key)
    )
  )) == null ? void 0 : _a.slice(1, -1)}` : "";
  if (!params.length) {
    if (options) {
      return `${queryConfig} ...queryOptions`;
    }
    return "...queryOptions";
  }
  return `${!(0, import_core2.isObject)(options) || !options.hasOwnProperty("enabled") ? isVue(outputClient) ? `enabled: computed(() => !!(${params.map(({ name }) => `unref(${name})`).join(" && ")})),` : `enabled: !!(${params.map(({ name }) => name).join(" && ")}),` : ""}${queryConfig} ...queryOptions`;
};
var getQueryArgumentsRequestType = (mutator) => {
  if (!mutator) {
    return `axios?: AxiosRequestConfig`;
  }
  if (mutator.hasSecondArg && !mutator.isHook) {
    return `request?: SecondParameter<typeof ${mutator.name}>`;
  }
  if (mutator.hasSecondArg && mutator.isHook) {
    return `request?: SecondParameter<ReturnType<typeof ${mutator.name}>>`;
  }
  return "";
};
var getQueryOptionsDefinition = ({
  operationName,
  definitions,
  mutator,
  type,
  hasSvelteQueryV4,
  hasQueryV5,
  queryParams,
  queryParam,
  isReturnType
}) => {
  const isMutatorHook = mutator == null ? void 0 : mutator.isHook;
  const prefix = !hasSvelteQueryV4 ? "Use" : "Create";
  const partialOptions = !isReturnType && hasQueryV5;
  if (type) {
    const funcReturnType = `Awaited<ReturnType<${isMutatorHook ? `ReturnType<typeof use${(0, import_core2.pascal)(operationName)}Hook>` : `typeof ${operationName}`}>>`;
    return `${partialOptions ? "Partial<" : ""}${prefix}${(0, import_core2.pascal)(
      type
    )}Options<${funcReturnType}, TError, TData${hasQueryV5 && (type === QueryType.INFINITE || type === QueryType.SUSPENSE_INFINITE) && queryParam && queryParams ? `, ${funcReturnType}, QueryKey, ${queryParams == null ? void 0 : queryParams.schema.name}['${queryParam}']` : ""}>${partialOptions ? ">" : ""}`;
  }
  return `${prefix}MutationOptions<Awaited<ReturnType<${isMutatorHook ? `ReturnType<typeof use${(0, import_core2.pascal)(operationName)}Hook>` : `typeof ${operationName}`}>>, TError,${definitions ? `{${definitions}}` : "void"}, TContext>`;
};
var generateQueryArguments = ({
  operationName,
  definitions,
  mutator,
  isRequestOptions,
  type,
  hasSvelteQueryV4,
  hasQueryV5,
  queryParams,
  queryParam
}) => {
  const definition = getQueryOptionsDefinition({
    operationName,
    definitions,
    mutator,
    type,
    hasSvelteQueryV4,
    hasQueryV5,
    queryParams,
    queryParam,
    isReturnType: false
  });
  if (!isRequestOptions) {
    return `${type ? "queryOptions" : "mutationOptions"}?: ${definition}`;
  }
  const requestType = getQueryArgumentsRequestType(mutator);
  return `options?: { ${type ? "query" : "mutation"}?:${definition}, ${requestType}}
`;
};
var generateQueryReturnType = ({
  outputClient,
  type,
  isMutatorHook,
  operationName,
  hasVueQueryV4,
  hasSvelteQueryV4
}) => {
  switch (outputClient) {
    case import_core2.OutputClient.SVELTE_QUERY: {
      if (!hasSvelteQueryV4) {
        return `Use${(0, import_core2.pascal)(type)}StoreResult<Awaited<ReturnType<${isMutatorHook ? `ReturnType<typeof use${(0, import_core2.pascal)(operationName)}Hook>` : `typeof ${operationName}`}>>, TError, TData, QueryKey> & { queryKey: QueryKey }`;
      }
      return `Create${(0, import_core2.pascal)(
        type
      )}Result<TData, TError> & { queryKey: QueryKey }`;
    }
    case import_core2.OutputClient.VUE_QUERY: {
      if (!hasVueQueryV4) {
        return ` UseQueryReturnType<TData, TError, Use${(0, import_core2.pascal)(
          type
        )}Result<TData, TError>> & { queryKey: QueryKey }`;
      }
      if (type !== QueryType.INFINITE && type !== QueryType.SUSPENSE_INFINITE) {
        return `UseQueryReturnType<TData, TError> & { queryKey: QueryKey }`;
      }
      return `UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey }`;
    }
    case import_core2.OutputClient.REACT_QUERY:
    default: {
      return ` Use${(0, import_core2.pascal)(
        type
      )}Result<TData, TError> & { queryKey: QueryKey }`;
    }
  }
};
var getQueryOptions = ({
  isRequestOptions,
  mutator,
  isExactOptionalPropertyTypes,
  hasSignal
}) => {
  if (!mutator && isRequestOptions) {
    if (!hasSignal) {
      return "axiosOptions";
    }
    return `{ ${isExactOptionalPropertyTypes ? "...(signal ? { signal } : {})" : "signal"}, ...axiosOptions }`;
  }
  if ((mutator == null ? void 0 : mutator.hasSecondArg) && isRequestOptions) {
    if (!hasSignal) {
      return "requestOptions";
    }
    return "requestOptions, signal";
  }
  if (hasSignal) {
    return "signal";
  }
  return "";
};
var getHookOptions = ({
  isRequestOptions,
  mutator
}) => {
  if (!isRequestOptions) {
    return "";
  }
  let value = "const {query: queryOptions";
  if (!mutator) {
    value += ", axios: axiosOptions";
  }
  if (mutator == null ? void 0 : mutator.hasSecondArg) {
    value += ", request: requestOptions";
  }
  value += "} = options ?? {};";
  return value;
};
var getQueryFnArguments = ({
  hasQueryParam,
  hasSignal
}) => {
  if (!hasQueryParam && !hasSignal) {
    return "";
  }
  if (hasQueryParam) {
    if (hasSignal) {
      return "{ signal, pageParam }";
    }
    return "{ pageParam }";
  }
  return "{ signal }";
};
var generateQueryImplementation = ({
  queryOption: { name, queryParam, options, type },
  operationName,
  queryKeyFnName,
  queryProperties,
  queryKeyProperties,
  queryParams,
  params,
  props,
  mutator,
  queryOptionsMutator,
  queryKeyMutator,
  isRequestOptions,
  response,
  outputClient,
  isExactOptionalPropertyTypes,
  hasSignal,
  route,
  hasVueQueryV4,
  hasSvelteQueryV4,
  hasQueryV5,
  doc,
  usePrefetch
}) => {
  const queryProps = (0, import_core2.toObjectString)(props, "implementation");
  const hasInfiniteQueryParam = queryParam && (queryParams == null ? void 0 : queryParams.schema.name);
  const httpFunctionProps = queryParam ? props.map((param) => {
    if (param.type === import_core2.GetterPropType.NAMED_PATH_PARAMS && !isVue(outputClient))
      return param.destructured;
    return param.name === "params" ? `{...params, ${queryParam}: pageParam || ${isVue(outputClient) ? `unref(params)?.['${queryParam}']` : `params?.['${queryParam}']`}}` : param.name;
  }).join(",") : queryProperties;
  const returnType = generateQueryReturnType({
    outputClient,
    type,
    isMutatorHook: mutator == null ? void 0 : mutator.isHook,
    operationName,
    hasVueQueryV4,
    hasSvelteQueryV4
  });
  let errorType = `AxiosError<${response.definition.errors || "unknown"}>`;
  if (mutator) {
    errorType = mutator.hasErrorType ? `${mutator.default ? (0, import_core2.pascal)(operationName) : ""}ErrorType<${response.definition.errors || "unknown"}>` : response.definition.errors || "unknown";
  }
  const dataType = (mutator == null ? void 0 : mutator.isHook) ? `ReturnType<typeof use${(0, import_core2.pascal)(operationName)}Hook>` : `typeof ${operationName}`;
  const queryArguments = generateQueryArguments({
    operationName,
    definitions: "",
    mutator,
    isRequestOptions,
    type,
    hasSvelteQueryV4,
    hasQueryV5,
    queryParams,
    queryParam
  });
  const queryOptions = getQueryOptions({
    isRequestOptions,
    isExactOptionalPropertyTypes,
    mutator,
    hasSignal
  });
  const hookOptions = getHookOptions({
    isRequestOptions,
    mutator
  });
  const queryFnArguments = getQueryFnArguments({
    hasQueryParam: !!queryParam && props.some(({ type: type2 }) => type2 === "queryParam"),
    hasSignal
  });
  const queryOptionFnReturnType = getQueryOptionsDefinition({
    operationName,
    definitions: "",
    mutator,
    type,
    hasSvelteQueryV4,
    hasQueryV5,
    queryParams,
    queryParam,
    isReturnType: true
  });
  const queryOptionsImp = generateQueryOptions({
    params,
    options,
    type,
    outputClient
  });
  const queryOptionsFnName = (0, import_core2.camel)(
    queryKeyMutator || queryOptionsMutator || (mutator == null ? void 0 : mutator.isHook) ? `use-${name}-queryOptions` : `get-${name}-queryOptions`
  );
  const queryOptionsVarName = isRequestOptions ? "queryOptions" : "options";
  const infiniteParam = queryParams && queryParam ? `, ${queryParams == null ? void 0 : queryParams.schema.name}['${queryParam}']` : "";
  const TData = hasQueryV5 && (type === QueryType.INFINITE || type === QueryType.SUSPENSE_INFINITE) ? `InfiniteData<Awaited<ReturnType<${dataType}>>${infiniteParam}>` : `Awaited<ReturnType<${dataType}>>`;
  const queryOptionsFn = `export const ${queryOptionsFnName} = <TData = ${TData}, TError = ${errorType}>(${queryProps} ${queryArguments}) => {

${hookOptions}

  const queryKey =  ${!queryKeyMutator ? `${!hasVueQueryV4 ? "queryOptions?.queryKey ?? " : ""}${queryKeyFnName}(${queryKeyProperties});` : `${queryKeyMutator.name}({ ${queryProperties} }${queryKeyMutator.hasSecondArg ? `, { url: \`${route}\`, queryOptions }` : ""});`}

  ${(mutator == null ? void 0 : mutator.isHook) ? `const ${operationName} =  use${(0, import_core2.pascal)(operationName)}Hook();` : ""}

    const queryFn: QueryFunction<Awaited<ReturnType<${(mutator == null ? void 0 : mutator.isHook) ? `ReturnType<typeof use${(0, import_core2.pascal)(operationName)}Hook>` : `typeof ${operationName}`}>>${hasQueryV5 && hasInfiniteQueryParam ? `, QueryKey, ${queryParams == null ? void 0 : queryParams.schema.name}['${queryParam}']` : ""}> = (${queryFnArguments}) => ${operationName}(${httpFunctionProps}${httpFunctionProps ? ", " : ""}${queryOptions});

      ${isVue(outputClient) ? vueUnRefParams(
    props.filter(
      (prop) => prop.type === import_core2.GetterPropType.NAMED_PATH_PARAMS
    )
  ) : ""}

      ${queryOptionsMutator ? `const customOptions = ${queryOptionsMutator.name}({...queryOptions, queryKey, queryFn}${queryOptionsMutator.hasSecondArg ? `, { ${queryProperties} }` : ""}${queryOptionsMutator.hasThirdArg ? `, { url: \`${route}\` }` : ""});` : ""}

   return  ${!queryOptionsMutator ? `{ queryKey, queryFn, ${queryOptionsImp}}` : "customOptions"} as ${queryOptionFnReturnType} ${isVue(outputClient) ? "" : "& { queryKey: QueryKey }"}
}`;
  const operationPrefix = hasSvelteQueryV4 ? "create" : "use";
  return `
${queryOptionsFn}

export type ${(0, import_core2.pascal)(
    name
  )}QueryResult = NonNullable<Awaited<ReturnType<${dataType}>>>
export type ${(0, import_core2.pascal)(name)}QueryError = ${errorType}

${doc}export const ${(0, import_core2.camel)(
    `${operationPrefix}-${name}`
  )} = <TData = ${TData}, TError = ${errorType}>(
 ${queryProps} ${queryArguments}
  ): ${returnType} => {

  const ${queryOptionsVarName} = ${queryOptionsFnName}(${queryProperties}${queryProperties ? "," : ""}${isRequestOptions ? "options" : "queryOptions"})

  const query = ${(0, import_core2.camel)(
    `${operationPrefix}-${type}`
  )}(${queryOptionsVarName}) as ${returnType};

  query.queryKey = ${queryOptionsVarName}.queryKey ${isVue(outputClient) ? "as QueryKey" : ""};

  return query;
}

${usePrefetch ? `${doc}export const ${(0, import_core2.camel)(
    `prefetch-${name}`
  )} = async <TData = Awaited<ReturnType<${dataType}>>, TError = ${errorType}>(
 queryClient: QueryClient, ${queryProps} ${queryArguments}
  ): Promise<QueryClient> => {

  const ${queryOptionsVarName} = ${queryOptionsFnName}(${queryProperties}${queryProperties ? "," : ""}${isRequestOptions ? "options" : "queryOptions"})

  await queryClient.${(0, import_core2.camel)(`prefetch-${type}`)}(${queryOptionsVarName});

  return queryClient;
}
` : ""}
`;
};
var generateQueryHook = async ({
  queryParams,
  operationName,
  body,
  props: _props,
  verb,
  params,
  override,
  mutator,
  response,
  operationId,
  summary,
  deprecated
}, { route, override: { operations = {} }, context, output }, outputClient) => {
  var _a, _b, _c;
  let props = _props;
  if (isVue(outputClient)) {
    props = vueWrapTypeWithMaybeRef(_props);
  }
  const query = override == null ? void 0 : override.query;
  const isRequestOptions = (override == null ? void 0 : override.requestOptions) !== false;
  const operationQueryOptions = (_a = operations[operationId]) == null ? void 0 : _a.query;
  const isExactOptionalPropertyTypes = !!((_c = (_b = context.tsconfig) == null ? void 0 : _b.compilerOptions) == null ? void 0 : _c.exactOptionalPropertyTypes);
  const hasVueQueryV4 = import_core2.OutputClient.VUE_QUERY === outputClient && (!isVueQueryV3(context.packageJson) || query.version === 4);
  const hasSvelteQueryV4 = import_core2.OutputClient.SVELTE_QUERY === outputClient && (!isSvelteQueryV3(context.packageJson) || query.version === 4);
  const hasQueryV5 = query.version === 5 || isQueryV5(
    context.packageJson,
    outputClient
  );
  const doc = (0, import_core2.jsDoc)({ summary, deprecated });
  let implementation = "";
  let mutators = void 0;
  const isQuery = import_core2.Verbs.GET === verb && (override.query.useQuery || override.query.useSuspenseQuery || override.query.useInfinite || override.query.useSuspenseInfiniteQuery) || (operationQueryOptions == null ? void 0 : operationQueryOptions.useInfinite) || (operationQueryOptions == null ? void 0 : operationQueryOptions.useSuspenseInfiniteQuery) || (operationQueryOptions == null ? void 0 : operationQueryOptions.useQuery) || (operationQueryOptions == null ? void 0 : operationQueryOptions.useSuspenseQuery);
  if (isQuery) {
    const queryKeyMutator = query.queryKey ? await (0, import_core2.generateMutator)({
      output,
      mutator: query.queryKey,
      name: `${operationName}QueryKey`,
      workspace: context.workspace,
      tsconfig: context.tsconfig
    }) : void 0;
    const queryOptionsMutator = query.queryOptions ? await (0, import_core2.generateMutator)({
      output,
      mutator: query.queryOptions,
      name: `${operationName}QueryOptions`,
      workspace: context.workspace,
      tsconfig: context.tsconfig
    }) : void 0;
    const queryProperties = props.map((param) => {
      if (param.type === import_core2.GetterPropType.NAMED_PATH_PARAMS && !isVue(outputClient))
        return param.destructured;
      return param.type === import_core2.GetterPropType.BODY ? body.implementation : param.name;
    }).join(",");
    const queryKeyProperties = props.filter((prop) => prop.type !== import_core2.GetterPropType.HEADER).map((param) => {
      if (param.type === import_core2.GetterPropType.NAMED_PATH_PARAMS && !isVue(outputClient))
        return param.destructured;
      return param.type === import_core2.GetterPropType.BODY ? body.implementation : param.name;
    }).join(",");
    const queries = [
      ...(query == null ? void 0 : query.useInfinite) ? [
        {
          name: (0, import_core2.camel)(`${operationName}-infinite`),
          options: query == null ? void 0 : query.options,
          type: QueryType.INFINITE,
          queryParam: query == null ? void 0 : query.useInfiniteQueryParam
        }
      ] : [],
      ...(query == null ? void 0 : query.useQuery) ? [
        {
          name: operationName,
          options: query == null ? void 0 : query.options,
          type: QueryType.QUERY
        }
      ] : [],
      ...(query == null ? void 0 : query.useSuspenseQuery) ? [
        {
          name: (0, import_core2.camel)(`${operationName}-suspense`),
          options: query == null ? void 0 : query.options,
          type: QueryType.SUSPENSE_QUERY
        }
      ] : [],
      ...(query == null ? void 0 : query.useSuspenseInfiniteQuery) ? [
        {
          name: (0, import_core2.camel)(`${operationName}-suspense-infinite`),
          options: query == null ? void 0 : query.options,
          type: QueryType.SUSPENSE_INFINITE,
          queryParam: query == null ? void 0 : query.useInfiniteQueryParam
        }
      ] : []
    ];
    const queryKeyFnName = (0, import_core2.camel)(`get-${operationName}-queryKey`);
    let queryKeyProps = (0, import_core2.toObjectString)(
      props.filter((prop) => prop.type !== import_core2.GetterPropType.HEADER),
      "implementation"
    );
    const routeString = isVue(outputClient) ? (0, import_core2.getRouteAsArray)(route) : `\`${route}\``;
    const queryKeyFn = `export const ${queryKeyFnName} = (${queryKeyProps}) => {
    return [${routeString}${queryParams ? ", ...(params ? [params]: [])" : ""}${body.implementation ? `, ${body.implementation}` : ""}] as const;
    }`;
    implementation += `${!queryKeyMutator ? queryKeyFn : ""}

    ${queries.reduce(
      (acc, queryOption) => acc + generateQueryImplementation({
        queryOption,
        operationName,
        queryKeyFnName,
        queryProperties,
        queryKeyProperties,
        params,
        props,
        mutator,
        isRequestOptions,
        queryParams,
        response,
        outputClient,
        isExactOptionalPropertyTypes,
        hasSignal: !!query.signal,
        queryOptionsMutator,
        queryKeyMutator,
        route,
        hasVueQueryV4,
        hasSvelteQueryV4,
        hasQueryV5,
        doc,
        usePrefetch: query.usePrefetch
      }),
      ""
    )}
`;
    mutators = queryOptionsMutator || queryKeyMutator ? [
      ...queryOptionsMutator ? [queryOptionsMutator] : [],
      ...queryKeyMutator ? [queryKeyMutator] : []
    ] : void 0;
  }
  const isMutation = verb !== import_core2.Verbs.GET && override.query.useMutation || (operationQueryOptions == null ? void 0 : operationQueryOptions.useMutation);
  if (isMutation) {
    const mutationOptionsMutator = query.mutationOptions ? await (0, import_core2.generateMutator)({
      output,
      mutator: query.mutationOptions,
      name: `${operationName}MutationOptions`,
      workspace: context.workspace,
      tsconfig: context.tsconfig
    }) : void 0;
    const definitions = props.map(
      ({ definition, type }) => type === import_core2.GetterPropType.BODY ? (mutator == null ? void 0 : mutator.bodyTypeName) ? `data: ${mutator.bodyTypeName}<${body.definition}>` : `data: ${body.definition}` : definition
    ).join(";");
    const properties = props.map(({ name, type }) => type === import_core2.GetterPropType.BODY ? "data" : name).join(",");
    let errorType = `AxiosError<${response.definition.errors || "unknown"}>`;
    if (mutator) {
      errorType = mutator.hasErrorType ? `${mutator.default ? (0, import_core2.pascal)(operationName) : ""}ErrorType<${response.definition.errors || "unknown"}>` : response.definition.errors || "unknown";
    }
    const dataType = (mutator == null ? void 0 : mutator.isHook) ? `ReturnType<typeof use${(0, import_core2.pascal)(operationName)}Hook>` : `typeof ${operationName}`;
    const mutationOptionFnReturnType = getQueryOptionsDefinition({
      operationName,
      definitions,
      mutator,
      hasSvelteQueryV4,
      hasQueryV5,
      isReturnType: true
    });
    const mutationArguments = generateQueryArguments({
      operationName,
      definitions,
      mutator,
      isRequestOptions,
      hasSvelteQueryV4,
      hasQueryV5
    });
    const mutationOptionsFnName = (0, import_core2.camel)(
      mutationOptionsMutator || (mutator == null ? void 0 : mutator.isHook) ? `use-${operationName}-mutationOptions` : `get-${operationName}-mutationOptions`
    );
    const mutationOptionsVarName = isRequestOptions ? "mutationOptions" : "options";
    const mutationOptionsFn = `export const ${mutationOptionsFnName} = <TError = ${errorType},
    TContext = unknown>(${mutationArguments}): ${mutationOptionFnReturnType} => {
 ${isRequestOptions ? `const {mutation: mutationOptions${!mutator ? `, axios: axiosOptions` : (mutator == null ? void 0 : mutator.hasSecondArg) ? ", request: requestOptions" : ""}} = options ?? {};` : ""}

      ${(mutator == null ? void 0 : mutator.isHook) ? `const ${operationName} =  use${(0, import_core2.pascal)(operationName)}Hook()` : ""}


      const mutationFn: MutationFunction<Awaited<ReturnType<${dataType}>>, ${definitions ? `{${definitions}}` : "void"}> = (${properties ? "props" : ""}) => {
          ${properties ? `const {${properties}} = props ?? {};` : ""}

          return  ${operationName}(${properties}${properties ? "," : ""}${isRequestOptions ? !mutator ? `axiosOptions` : (mutator == null ? void 0 : mutator.hasSecondArg) ? "requestOptions" : "" : ""})
        }

        ${mutationOptionsMutator ? `const customOptions = ${mutationOptionsMutator.name}({...mutationOptions, mutationFn}${mutationOptionsMutator.hasThirdArg ? `, { url: \`${route}\` }` : ""});` : ""}


   return  ${!mutationOptionsMutator ? "{ mutationFn, ...mutationOptions }" : "customOptions"}}`;
    const operationPrefix = hasSvelteQueryV4 ? "create" : "use";
    implementation += `
${mutationOptionsFn}

    export type ${(0, import_core2.pascal)(
      operationName
    )}MutationResult = NonNullable<Awaited<ReturnType<${dataType}>>>
    ${body.definition ? `export type ${(0, import_core2.pascal)(operationName)}MutationBody = ${(mutator == null ? void 0 : mutator.bodyTypeName) ? `${mutator.bodyTypeName}<${body.definition}>` : body.definition}` : ""}
    export type ${(0, import_core2.pascal)(operationName)}MutationError = ${errorType}

    ${doc}export const ${(0, import_core2.camel)(
      `${operationPrefix}-${operationName}`
    )} = <TError = ${errorType},
    TContext = unknown>(${mutationArguments}) => {

      const ${mutationOptionsVarName} = ${mutationOptionsFnName}(${isRequestOptions ? "options" : "mutationOptions"});

      return ${operationPrefix}Mutation(${mutationOptionsVarName});
    }
    `;
    mutators = mutationOptionsMutator ? [...mutators != null ? mutators : [], mutationOptionsMutator] : mutators;
  }
  return {
    implementation,
    mutators
  };
};
var generateQueryHeader = ({
  isRequestOptions,
  isMutator,
  hasAwaitedType
}) => {
  return `${!hasAwaitedType ? `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

` : ""}
${isRequestOptions && isMutator ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

` : ""}
`;
};
var generateQuery = async (verbOptions, options, outputClient, output) => {
  const imports = (0, import_core2.generateVerbImports)(verbOptions);
  const functionImplementation = generateQueryRequestFunction(
    verbOptions,
    options,
    outputClient,
    output
  );
  const { implementation: hookImplementation, mutators } = await generateQueryHook(verbOptions, options, outputClient);
  return {
    implementation: `${functionImplementation}

${hookImplementation}`,
    imports,
    mutators
  };
};
var dependenciesBuilder = {
  "react-query": getReactQueryDependencies,
  "vue-query": getVueQueryDependencies,
  "svelte-query": getSvelteQueryDependencies
};
var builder = ({
  type = "react-query",
  options: queryOptions,
  output
} = {}) => () => {
  const client = (verbOptions, options, outputClient) => {
    if (options.override.useNamedParameters && (type === "vue-query" || outputClient === "vue-query")) {
      throw new Error(
        `vue-query client does not support named parameters, and had broken reactivity previously, please set useNamedParameters to false; See for context: https://github.com/anymaniax/orval/pull/931#issuecomment-1752355686`
      );
    }
    if (queryOptions) {
      const normalizedQueryOptions = normalizeQueryOptions(
        queryOptions,
        options.context.workspace
      );
      verbOptions.override.query = (0, import_core2.mergeDeep)(
        normalizedQueryOptions,
        verbOptions.override.query
      );
      options.override.query = (0, import_core2.mergeDeep)(
        normalizedQueryOptions,
        verbOptions.override.query
      );
    }
    return generateQuery(verbOptions, options, outputClient, output);
  };
  return {
    client,
    header: generateQueryHeader,
    dependencies: dependenciesBuilder[type]
  };
};
var src_default = builder;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  builder,
  generateQuery,
  generateQueryHeader,
  getReactQueryDependencies,
  getSvelteQueryDependencies,
  getVueQueryDependencies
});
