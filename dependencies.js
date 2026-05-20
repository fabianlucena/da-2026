import { addDependency } from './dependency.js';
import { UserService } from './services/user_service.js';
import userMongo from './mongo-db/users_mongo.js';

addDependency('userRepo', userMongo);
addDependency('userService', new UserService());
