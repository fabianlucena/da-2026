import { getDependency } from '../dependency.js';

export function configureUserRouter(router) {
  const userService = getDependency('userService');

  console.log('Configurando rutas de usuario');
  router.get('/users', async (req, res) => {
    const users = await userService.getList();
    res.json(users.map(user => ({
      username: user.username,
      displayName: user.displayName,
      email: user.email,
      role: user.role,
    })));
  });

  router.post('/users', async (req, res) => {
    const user = req.body;
    const newUser = await userService.add(user);
    res.json(newUser);
  });
}