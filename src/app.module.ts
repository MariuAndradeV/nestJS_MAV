import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PeriodoLaboralesController } from './periodo-laborales/periodo-laborales.controller';
import { PeriodoLaboralesService } from './periodo-laborales/periodo-laborales.service';
import { PeriodoLaboralesModule } from './periodo-laborales/periodo-laborales.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule, 
    PeriodoLaboralesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: false,
    }),

  ],
  controllers: [AppController, PeriodoLaboralesController],
  providers: [AppService, PeriodoLaboralesService],
})
export class AppModule {}
