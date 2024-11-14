// src/users/dto/create-user.dto.ts
export class CreateUserDto {
  name: string;
  email: string;
  password: string;
}

// src/users/dto/update-user.dto.ts
export class UpdateUserDto {
  name?: string;
  email?: string;
  password?: string;
}
