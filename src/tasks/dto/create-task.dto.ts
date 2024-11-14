import { TaskStatus } from '@prisma/client';

export class CreateTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
  projectId: string;
  assignedUserId: string;
}
export class UpdateTaskDto {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
