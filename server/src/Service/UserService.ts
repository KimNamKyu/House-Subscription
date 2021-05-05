import { Inject, Service } from "typedi";

@Service()
export default class UserService {
    constructor (
        @Inject('user') private user,
    ) {}

    
}