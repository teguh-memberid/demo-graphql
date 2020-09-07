import { Test, TestingModule } from '@nestjs/testing';
import { TierResolver } from './tier.resolver';

describe('TierResolver', () => {
  let resolver: TierResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TierResolver],
    }).compile();

    resolver = module.get<TierResolver>(TierResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
