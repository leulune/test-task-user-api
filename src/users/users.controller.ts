import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUsersQueryDto } from './dto/get-users.query.dto';

@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

  @Get()
  getMany(@Query() q: GetUsersQueryDto) {
    return this.users.findAll(
      q.page ?? 1,
      q.limit ?? 20,
      q.username,
      q.isActive,
    );
  }

  @Get(':id')
  getOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.users.findById(id);
  }
}
