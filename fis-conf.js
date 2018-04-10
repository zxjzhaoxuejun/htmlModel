fis.hook('relative');

fis.match('**', {
    relative: true
})

fis.match('*', {
    release: false
});

fis.match('**/(*.less)', {
    rExt: '.css',
    parser: fis.plugin('less-2.x'),
    release: 'css/$1'
});

fis.match('/src/pug/(*.pug)', {
    rExt: '.html',
    parser: fis.plugin('pug'),
    release: '$1'
});

fis.match('/src/js/(*.js)', {
    release: 'js/$1'
});