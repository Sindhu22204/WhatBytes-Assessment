import { ProjectStatus } from '@prisma/client';

export class CreateProjectDto {
  name: string;
  description: string;
  status: ProjectStatus;
  userId: string;
}

export class UpdateProjectDto {
  name?: string;
  description?: string;
  status?: ProjectStatus;
}
