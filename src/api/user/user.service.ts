import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/database/entity/user";
import { Repository } from "typeorm";
import { BaseService } from "../base/base.service";

@Injectable()
export class UserService extends BaseService<User>{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {
        super(userRepository);
    }
}