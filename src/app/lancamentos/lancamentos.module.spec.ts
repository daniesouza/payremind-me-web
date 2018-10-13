import { LancamentosModule } from './lancamentos.module';

describe('LancamentosModule', () => {
  let lancamentosModule: LancamentosModule;

  beforeEach(() => {
    lancamentosModule = new LancamentosModule();
  });

  it('should create an instance', () => {
    expect(lancamentosModule).toBeTruthy();
  });
});
