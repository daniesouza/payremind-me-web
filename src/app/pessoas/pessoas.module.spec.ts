import { PessoasModule } from './pessoas.module';

describe('PessoasModule', () => {
  let pessoasModule: PessoasModule;

  beforeEach(() => {
    pessoasModule = new PessoasModule();
  });

  it('should create an instance', () => {
    expect(pessoasModule).toBeTruthy();
  });
});
