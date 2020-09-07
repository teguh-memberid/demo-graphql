import { Test, TestingModule } from '@nestjs/testing';
import { TierService } from './tier.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { TierEntity } from './entities/tier.entity'

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
  create: jest.fn(),
});

describe('TierService', () => {
  let service: TierService;
  let tierRepository: MockRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TierService,
        { provide: Connection, useValue: {} },
        {
          provide: getRepositoryToken(TierEntity),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    service = module.get<TierService>(TierService);
    tierRepository = module.get<MockRepository>(getRepositoryToken(TierEntity))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    describe('When Tier With Id Exist', () => {
      it('It Should Return Object', async () => {
        const tierId = 1;
        const expectedTier = {};

        tierRepository.findOne.mockReturnValue(expectedTier)
        const tierData = await service.findOne(tierId)
        expect(tierData).toEqual(expectedTier);
      })
    })

    describe('otherwise', ()=>{
      it('should throw the "NotFoundException"', async () => {
        const tierId = 1;
        tierRepository.findOne.mockReturnValue(undefined);

        try {
          await service.findOne(tierId);
        } catch (err) {
          expect(err).toBeInstanceOf(NotFoundException);
          expect(err.message).toEqual(`Tier #${tierId} not found`);
        }
      });
    })
  })
});
