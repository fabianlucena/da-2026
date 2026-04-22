import { getDependency } from '../dependency.js';

export class UserService {
  constructor() {
  }

  getList() {
    const userRepo = getDependency('userRepo');
    return userRepo.getList();
  }
}