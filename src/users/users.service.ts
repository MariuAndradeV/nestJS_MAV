import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            'name': 'Mariu Andrade',
            'email': 'mariu@gmail.com',
            'role': 'INTERN',
        },
        {
            "id": 2,
            'name': 'Isabeau Veloz',
            'email': 'isabeau@gmail.com',
            'role': 'ENGINEER',
        },
        {
            "id": 3,
            'name': 'Maria Veloz',
            'email': 'maria@gmail.com',
            'role': 'INTERN',
        },
        {
            "id": 4,
            'name': 'Manuel Andrade',
            'email': 'manuel@gmail.com',
            'role': 'ENGINEER',
        },
        {
            "id": 5,
            'name': 'Sara Veloz',
            'email': 'sara@gmail.com',
            'role': 'ADMIN',
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if(role){
            
            const rolesArrays = this.users.filter(user => user.role === role )

            if(rolesArrays.length === 0)
                throw new NotFoundException('Role not found')
        }

        return this.users
    }


    findOne(id: number){
        const user = this.users.find(user => user.id === id)

        if(!user) throw new NotFoundException('User not found')

        return user
    }

    create(createUserDto: CreateUserDto){
        const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)

        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }

        this.users.push(newUser)
        return newUser
    }


    update(id: number, updateUserDto: UpdateUserDto){
        this.users = this.users.map(user => {
            if( user.id === id){
                return {...user, ...updateUserDto}
            }

            return user
        })
        return this.findOne(id)
    }

    delete(id: number){
        const removeUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)

        return removeUser
    }

}
