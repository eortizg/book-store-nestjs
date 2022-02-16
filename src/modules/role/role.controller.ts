import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Get(':id')
  async getRole(@Param('id', ParseIntPipe) id: number) {
    const user = await this._roleService.get(id);
    return user;
  }

  @Get()
  async getUsers() {
    const users = await this._roleService.getAll();
    return users;
  }

  @Post()
  async createUser(@Body() role: Role): Promise<Role> {
    const createdUser = await this._roleService.create(role);
    return createdUser;
  }

  @Patch()
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() role: Role) {
    await this._roleService.update(id, role);
    return true;
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    await this._roleService.delete(id);
    return true;
  }
}
