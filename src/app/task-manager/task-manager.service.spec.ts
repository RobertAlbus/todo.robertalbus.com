import { TestBed } from '@angular/core/testing';

import { TaskManagerService } from '../services/task-manager.service';

describe('TaskManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskManagerService = TestBed.get(TaskManagerService);
    expect(service).toBeTruthy();
  });
});
