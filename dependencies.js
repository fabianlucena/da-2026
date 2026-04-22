import { addDependency } from './dependency.js';
import { UserService } from './services/user_service.js';
import { UserMockup } from './mockup/user_mockup.js';

addDependency('userService', new UserService());
addDependency('userRepo', new UserMockup());