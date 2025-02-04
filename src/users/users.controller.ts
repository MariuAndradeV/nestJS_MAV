import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import {UsersService} from './users.service'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';   

//parseintpipe Convierte un valor string a entero

@Controller('users') //decorador,   mi dominio es
export class UsersController {
    constructor(private readonly userService: UsersService){} 

    /*
    EL ORDEN IMPORTA !!!!!!!!!!!!!!
    ESTATICO, LUEGO DINAMICO 


    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get() //GET /users or /users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        return this.userService.findAll(role)
    } //la logica de esto se maneja en services, y luego se inyecta en controller
   
    @Get('interns') // GET /users/interns
    findAllInterns(){
        return []
    } 

    @Get(':id') // GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number){  
        return this.userService.findOne(id)
    } 

    @Post() //POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    }
    
    @Patch(':id') // PATCH /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
        return this.userService.update(id, updateUserDto)
    } 

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id', ParseIntPipe) id: number){
        return this.userService.delete(id)
    }
}
