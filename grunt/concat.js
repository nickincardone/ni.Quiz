module.exports = {
  dev: {
    options: {
      process: function(src, filepath) {
        return '\n// ' + filepath + '\n' + src;
      }
    },
    src: [
      '<%= jsPath %>/quiz/quiz_module.js',
      '<%= jsPath %>/quiz/*.js',
      '<%= jsPath %>/states/states_module.js',
      '<%= jsPath %>/states/*.js',
      '<%= jsPath %>/templates_module.js',
      '<%= jsPath %>/main_module.js',
      '<%= jsPath %>/**/*.js'
    ],
    dest: '<%= distPath %>/<%= appName %>.js'
  }
};
