import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // type of our database
      host: 'localhost', // database host
      port: 3306, // database host
      username: 'root', // username
      password: 'sample', // user password
      database: 'coffee', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
