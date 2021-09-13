const mix = require('laravel-mix');

mix.setPublicPath('public')
mix.setResourceRoot('../');

mix
    .js('resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/app.scss', 'public/css')

    //Versionamento
    .version();