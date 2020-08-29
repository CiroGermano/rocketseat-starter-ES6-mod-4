module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],  // nosso arquivo principal js
    output: {  // local que devemos enviar o arquivo gerado com código compatível pré ES6 (que nem o babel fazia com o bundle)
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: { // o dev server embute o bundle.js na nossa aplicação, então não consiguiremos vê-lo fisicamente. Para isso devemos alterar nosso script de execução. EX: "webpack --mode=production" o script do modo de desenvolvimento que já imbute é: "webpack-dev-server --mode=development"
        contentBase: __dirname + '/public', // caminho para onde ele deve abrir o servidor da nossa aplicação
    },
    module: {
        rules: [ // como o webpack deve se comportar quando o usuário tentar importar novos arquivos js
            {
                test:  /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }    
            }
        ]
    }
}



// webpack dev server -> ele monitora e dá um auto refresh na página sempre que há modificações no projeto.
// entry: polyfill vai adicionar funcinalidades ao babel ajudando a fornecer funcionalidades modernas em navegadores mais antigos.