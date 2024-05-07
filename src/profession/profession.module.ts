import { Module } from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver,ApolloDriverConfig } from '@nestjs/apollo';
import { Profession } from './entities/profession.entity';
import { ProfessionController } from './profession.controller';
import { ProfessionResolver } from './resolver/profession.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profession]),
  ],
  providers: [ProfessionService, ProfessionResolver],
  controllers: [ProfessionController], 
  exports: [ProfessionService],
})
export class ProfessionModule {}