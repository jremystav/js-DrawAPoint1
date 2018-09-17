//DrawPoint1.js
//Vertex Shader program
var VSHADER_SOURCE =
    'void main(){\n' +
    '   gl_Position = vec4(0.0, 0.5, 0.0, 1.0);\n' + //coordinates
    '   gl_PointSize = 10.0;\n' + //sets point size
    '}\n';

//fragment shader
var FSHADER_SOURCE =
    'void main() {\n' +
    '   gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n' +
    '}\n';

function main() {
    //retrieve canvas
    var canvas = document.getElementById('webgl');

    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('did not work, lacks rendering context');
        return;
    }

    //initialize shaders
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failes to initialize shaders')
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}