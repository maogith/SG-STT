let rutas = require('express').Router();;
rutas.get('/',function(req,res){
	res.json({
		status: 'api funcionando',
		message: 'bienvenido al tutorial'
	});
});

var controladorUsuario = require('../controladores/usuario');

rutas.route('/usuario')
.get(controladorUsuario.index)
.post(controladorUsuario.new);

rutas.route('/usuario/:usuario_id')
    .get(controladorUsuario.view)
    .patch(controladorUsuario.update)
    .put(controladorUsuario.update)
    .delete(controladorUsuario.delete);// Export API routes


module.exports = rutas;
