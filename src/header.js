//litegl.js by Javi Agenjo 2014 @tamat (tamats.com)
//forked from lightgl.js by Evan Wallace (madebyevan.com)
"use strict";

(function(global){

/**
* The static module that contains all the features
* @module GL
* @namespace GL
* @class GL
*/
var GL = global.GL = {};


//polyfill
global.requestAnimationFrame = global.requestAnimationFrame || global.mozRequestAnimationFrame || global.webkitRequestAnimationFrame || function(callback) { setTimeout(callback, 1000 / 60); };

GL.blockable_keys = {"Up":true,"Down":true,"Left":true,"Right":true};

//some consts
GL.LEFT_MOUSE_BUTTON = 1;
GL.MIDDLE_MOUSE_BUTTON = 2;
GL.RIGHT_MOUSE_BUTTON = 3;
GL.last_context_id = 0;


//Define WEBGL ENUMS as statics (more to come in WebGL 2)
//sometimes we need some gl enums before having the gl context, solution: define them globally because the specs says they are constant)

GL.COLOR_BUFFER_BIT = 16384;
GL.DEPTH_BUFFER_BIT = 256;
GL.STENCIL_BUFFER_BIT = 1024;

GL.TEXTURE_2D = 3553;
GL.TEXTURE_CUBE_MAP = 34067;

GL.BYTE = 5120;
GL.UNSIGNED_BYTE = 5121;
GL.SHORT = 5122;
GL.UNSIGNED_SHORT = 5123;
GL.INT = 5124;
GL.UNSIGNED_INT = 5125;
GL.FLOAT = 5126;
GL.HALF_FLOAT_OES = 36193;
GL.DEPTH_COMPONENT16 = 33189;

GL.FLOAT_VEC2 = 35664;
GL.FLOAT_VEC3 = 35665;
GL.FLOAT_VEC4 = 35666;
GL.INT_VEC2 = 35667;
GL.INT_VEC3 = 35668;
GL.INT_VEC4 = 35669;
GL.BOOL = 35670;
GL.BOOL_VEC2 = 35671;
GL.BOOL_VEC3 = 35672;
GL.BOOL_VEC4 = 35673;
GL.FLOAT_MAT2 = 35674;
GL.FLOAT_MAT3 = 35675;
GL.FLOAT_MAT4 = 35676;

GL.DEPTH_COMPONENT = 6402;
GL.ALPHA = 6406;
GL.RGB = 6407;
GL.RGBA = 6408;
GL.LUMINANCE = 6409;
GL.LUMINANCE_ALPHA = 6410;
GL.DEPTH_STENCIL = 34041;
GL.UNSIGNED_INT_24_8_WEBGL = 34042;

GL.NEAREST = 9728;
GL.LINEAR = 9729;
GL.NEAREST_MIPMAP_NEAREST = 9984;
GL.LINEAR_MIPMAP_NEAREST = 9985;
GL.NEAREST_MIPMAP_LINEAR = 9986;
GL.LINEAR_MIPMAP_LINEAR = 9987;

GL.REPEAT = 10497;
GL.CLAMP_TO_EDGE = 33071;
GL.MIRRORED_REPEAT = 33648;

GL.ZERO = 0;
GL.ONE = 1;
GL.SRC_COLOR = 768;
GL.ONE_MINUS_SRC_COLOR = 769;
GL.SRC_ALPHA = 770;
GL.ONE_MINUS_SRC_ALPHA = 771;
GL.DST_ALPHA = 772;
GL.ONE_MINUS_DST_ALPHA = 773;
GL.DST_COLOR = 774;
GL.ONE_MINUS_DST_COLOR = 775;
GL.SRC_ALPHA_SATURATE = 776;
GL.CONSTANT_COLOR = 32769;
GL.ONE_MINUS_CONSTANT_COLOR = 32770;
GL.CONSTANT_ALPHA = 32771;
GL.ONE_MINUS_CONSTANT_ALPHA = 32772;

GL.VERTEX_SHADER = 35633;
GL.FRAGMENT_SHADER = 35632;

GL.FRONT = 1028;
GL.BACK = 1029;
GL.FRONT_AND_BACK = 1032;

GL.NEVER = 512;
GL.LESS = 513;
GL.EQUAL = 514;
GL.LEQUAL = 515;
GL.GREATER = 516;
GL.NOTEQUAL = 517;
GL.GEQUAL = 518;
GL.ALWAYS = 519;

GL.KEEP = 7680;
GL.REPLACE = 7681;
GL.INCR = 7682;
GL.DECR = 7683;
GL.INCR_WRAP = 34055;
GL.DECR_WRAP = 34056;
GL.INVERT = 5386;

GL.STREAM_DRAW = 35040;
GL.STATIC_DRAW = 35044;
GL.DYNAMIC_DRAW = 35048;

GL.CW = 2304;
GL.CCW = 2305;

GL.CULL_FACE = 2884;
GL.DEPTH_TEST = 2929;
GL.BLEND = 3042;

GL.temp_vec3 = vec3.create();
GL.temp2_vec3 = vec3.create();
GL.temp_vec4 = vec4.create();
GL.temp_quat = quat.create();
GL.temp_mat3 = mat3.create();
GL.temp_mat4 = mat4.create();
