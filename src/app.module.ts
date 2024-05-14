import { Module } from '@nestjs/common';
import { GraphQLModule} from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { ProfessionModule } from './profession/profession.module';
import { Profession } from './profession/entities/profession.entity';
import {  ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PruebaModule } from './prueba/prueba.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'olafkeashe1',
      username: 'postgres',
      entities: [User,Profession],
      database: 'proyectoqlo',
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    AuthModule,
    ProfessionModule,
    PruebaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}