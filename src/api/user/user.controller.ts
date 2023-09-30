import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User } from "src/database/entity/user";
import { BaseController } from "../base/base.controller";
import { UserService } from "./user.service";

@ApiTags('Usuário')
@Controller('usuarios')
export class UserController extends BaseController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}