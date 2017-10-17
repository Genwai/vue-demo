// import './add-blue.svg';

const context = require.context('./', true, /\.svg$/);
context.keys().forEach(context);
