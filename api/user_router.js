import { getDependency } from '../dependency.js';

export function configureUserRouter(router) {
  console.log('Configurando rutas de usuario');
  router.get('/users', (req, res) => {
    const userService = getDependency('userService');
    const users = userService.getList();
    res.json(users.map(user => ({ name: user.name })));
  });
}