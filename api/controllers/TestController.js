/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

      

    formulario:function(req,res){
        res.view('general/formadd');
    }, 

    guardar: function(req,res) {
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var email = req.body.email;
        var contraseña = req.body.contraseña;
    
        
        Test.create({nombre:nombre, apellido:apellido, email:email, contraseña:contraseña}).exec(function(err) {
           if(err) {
            res.send(500,{error:'error en la base de datos'});
            
           }
           res.redirect('/general/formadd')
            
        });
    },

    mostrar: function(req,res) {
        Test.find({}).exec(function(err,test) {
            if(err) {
            res.send(500,{error:'error en la base de datos'});    
           }
           res.view('general/datos',{test:test});
        });

    },

    editar: function(req,res) {
        // var id = req.body.id;
        Test.findOne({id:'id'});
        return res.view('general/formedit');
    },

    actualizar: function(req,res) {
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var email = req.body.email;
        var contraseña = req.body.contraseña;
    
        
        Test.update({id:req.params.id},{nombre:nombre, apellido:apellido, email:email, contraseña:contraseña}).exec(function(err) {
           if(err) {
            res.send(500,{error:'error en la base de datos'});
           }
           res.redirect('/general/datos');
            
        });
        return false;
    },

   borrar: function(req,res) {
       Test.destroy({id:req.params.id}).exec(function(err){
            if(err) {
            res.send(500,{error:'error en la base de datos'});
           } 
           res.redirect('/general/datos');   
       });

   }



};

