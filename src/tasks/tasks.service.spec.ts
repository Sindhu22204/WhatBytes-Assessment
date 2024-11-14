import { Test, TestingModule } from '@nestjs/testing';
import { TaskStatus } from '@prisma/client'; // Adjust the import path based on your project structure
import { PrismaService } from '../prisma/prisma.service';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const mockPrismaService = {
      task: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: PrismaService, useValue: mockPrismaService }, // Mocked PrismaService
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Example test for the `create` method
  it('should create a task', async () => {
    const createTaskDto = {
      title: 'Test Task',
      description: 'Test Task Description',
      status: TaskStatus.TODO, // Use a valid TaskStatus value
      projectId: '1', // Add missing fields here
      assignedUserId: '123', // Add missing fields here
    };

    const task = { id: '1', ...createTaskDto };

    // Mocking the resolved value for the create method
    (prismaService.task.create as jest.Mock).mockResolvedValue(task);

    const result = await service.create(createTaskDto);
    expect(result).toEqual(task);
  });
});
