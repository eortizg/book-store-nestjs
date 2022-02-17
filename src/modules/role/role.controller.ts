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
import { CreateRoleDto, ReadRoleDto, UpdateRoleDto } from './dtos';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Get(':roleId')
  async getRole(
    @Param('roleId', ParseIntPipe) id: number,
  ): Promise<ReadRoleDto> {
    const user = await this._roleService.get(id);
    return user;
  }

  @Get()
  async getRoles(): Promise<ReadRoleDto[]> {
    const users = await this._roleService.getAll();
    return users;
  }

  /*@Post()
  async createUser(@Body() role: Partial<CreateRoleDto>): Promise<ReadRoleDto> {
    const createdUser = await this._roleService.create(role);
    return createdUser;
  }*/

  @Post()
  createRole(@Body() role: Partial<CreateRoleDto>): Promise<ReadRoleDto> {
    return this._roleService.create(role);
  }

  @Patch(':roleId')
  updateRole(
    @Param('roleId', ParseIntPipe) id: number,
    @Body() role: Partial<UpdateRoleDto>,
  ): Promise<ReadRoleDto> {
    return this._roleService.update(id, role);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this._roleService.delete(id);
  }
}
