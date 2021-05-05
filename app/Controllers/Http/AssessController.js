'use strict'
const Database = use('Database')

class AssessController {

    async listAll ({ request, response }) {
        console.log('AssessController.listAll()')
        return await Database.table('assesses')
        
    }

    async listByUser ({ request, response, params }) {
        console.log('AssessController.listByUser()')
        return await Database.table('assesses').where('user_id', params.user_id)
        
    }

    async listById ({ request, response, params }) {
        console.log('AssessController.listById()')
        return await Database.table('assesses').where('id', params.id)
        
    }

    async listByPlace ({ request, response, params }) {
        console.log('AssessController.listByPlace()')
        return await Database.table('assesses').where('id', params.place_id)
        
    }

    async insert ({ request, response }) {
        console.log('PlaceController.insert')
        return await Database.table('assesses').insert({
            'user_id': request.input('user_id'),
            'place_id': request.input('place_id'),
            'rating': request.input('rating'),
            'description': request.input('description')
        })
        
    }

    async deleteById({ request, response, params }) {
        console.log('AssessController.deleteById()')
        return await Database.table('assesses').where('id', params.id).delete()
        
    }
    
    async deleteAll({ request, response }) {
        console.log('AssessController.deleteAll()')
        return await Database.table('assesses').delete()
        
    }

}

module.exports = AssessController