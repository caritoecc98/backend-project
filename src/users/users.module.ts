import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserResolver } from './resolver/user.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  imports: [TypeOrmModule.forFeature([User]), PrismaModule],
  providers: [UsersService,UserResolver],
  exports: [UsersService],
  
})
export class UsersModule {}
