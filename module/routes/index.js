const express=require('express')
const router=express.Router()
const eventosController=require('../controllers/eventosController')

module.exports=()=>{
    //llamado get de eventos
    router.get('/eventos',eventosController.list)
    
    //llamado post de eventos
    router.post('/eventos',eventosController.add)

    //llamado put de eventos
    router.put('/eventos/:id',eventosController.update)

    //llamado delete de eventos
    router.delete('/eventos/:id',eventosController.delete)

    //llamado eventos por deportes
    router.get('/eventosdeporte/:id',eventosController.listbysport)
    

    //llamado put de marcador
    router.put('/actualizarmarcador/:id',eventosController.updatescore)

    return router
}
