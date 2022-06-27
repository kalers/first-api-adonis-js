/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/api/firstresponse', async () => {
  return { api: 'yves' }
})



  Route.post('posts', 'PostsController.index')
  Route.get('getUser', 'PostsController.get')
  Route.put('put/:id', 'PostsController.put')
  Route.delete('delete/:id', 'PostsController.delete')
  Route.get('getup/:id', 'PostsController.getup')