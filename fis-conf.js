fis.hook("relative");

fis.match("**", {
  relative: true
});

fis.match("*", {
  release: false
});

fis.match("/src/scss/(*.scss)", {
  rExt: ".css",
  preprocessor: fis.plugin("autoprefixer", {
    browsers: ["Chrome < 29"]
  }),
  parser: fis.plugin("node-sass", {
    outputStyle: "expanded"
  }),
  release: "css/$1"
});

fis.match("/src/pug/(*.pug)", {
  rExt: ".html",
  parser: fis.plugin("pug"),
  release: "/$1"
});

fis.match("/src/(lib/**)", {
  release: "js/$1"
});

fis.match("/src/(js/**)", {
  parser: fis.plugin("babel-6.x", {
    presets: "env",
    sourceMaps: true
  }),
  release: "$1"
});

fis.match("/src/(img/*)", {
  release: "$1"
});
