import { users } from './../../db/schema';
import { DrizzleService } from './../../Services/DrizzleService';
import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  constructor(private db: DrizzleService) {}
  @Get("/")
  async get() {
    console.log(await this.db.db.select().from(users))
    return "hello";
  }
}
