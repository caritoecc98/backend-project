import { PartialType, InputType } from '@nestjs/graphql';
import { CreateProfessionDto } from './create-profession.dto';

@InputType()
export class UpdateProfessionDto extends PartialType(CreateProfessionDto) {}