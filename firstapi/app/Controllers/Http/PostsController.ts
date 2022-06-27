

    // import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

    import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
    import User from 'App/Models/User';
    const user = new User()

    
    export default class PostsController {
        public async index({request, response }: HttpContextContract) {
            
            // Assign username and email
            user.name = request.input('name'),
            user.email = request.input('email'),
            user.password = request.input('password'),
            user.phone = request.input('phone')
           
            
            // Insert to the database
            await user.save()
            return response.status(201).json(user)
          }

          public async get({ }: HttpContextContract) {
            const user = await User.all()


            return user;
          }
          
            public async put({params, request, response }: HttpContextContract) {
                const userput = await User.findOrFail(params.id)

                // Assign username and email
                userput.name = request.input('name'),
                userput.email = request.input('email'),
                userput.password = request.input('password'),
                userput.phone = request.input('phone')
                
                
                // Insert to the database
                await userput.save()
                return response.status(201).json(userput)
              }

              public async delete({ params, request, response }: HttpContextContract) {
                const userdelete = await  User.findOrFail(params.id)
                await userdelete.delete()

        
                
                
                // Insert to the database
                
                return response.status(201).json(userdelete)
              }

              public async  getup({params, request, response }: HttpContextContract): Promise<void> {
            
                const user = await User.find(params.id)
               
                
                // Insert to the database
                
                return response.status(201).json(user)
              }

    

    }