import { TaskCompleteDirective } from './task-complete.directive';

describe('TaskCompleteDirective', () => {
  it('should create an instance', () => {
    let arg1: any;
    let arg2: any;
    const directive = new TaskCompleteDirective(arg1, arg2);
    expect(directive).toBeTruthy();
  });
});
