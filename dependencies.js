import { addDependency } from './dependency.js';
import { UserService } from './services/user_service.js';
import { LoginService } from './services/login_service.js';
import { SessionService } from './services/session_service.js';
import userMongo from './mongo-db/users_mongo.js';
import sessionMongo from './mongo-db/sessions_mongo.js';

addDependency('userRepo', userMongo);
addDependency('sessionRepo', sessionMongo);

addDependency('userService', new UserService());
addDependency('loginService', new LoginService());
addDependency('sessionService', new SessionService());
