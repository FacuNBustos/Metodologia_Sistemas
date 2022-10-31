import {Passenger} from "../../../../../src/domain/entities/passenger.entity";
import passengerRepository from "../../../../../src/infraestructure/repositories/passenger.repository";
import findPassengerHandler
  from '../../../../../src/application/handlers/passengers/findByIdentityCard.passenger.handler'
import {
  findByIdentityCardPassengerCommand as FindByIdentityCardCommand
} from '../../../../../src/application/commands/passengers/findByIdentityCard.passenger.command';

describe('Find Passenger Handler', () => {

  it('should be find passenger', async () => {
    const passengerMock = Passenger.create('Pepito perez', 'pepitoperez@yopmail.com', '12345678');
    passengerRepository.findOneByIdentityCard = jest.fn().mockResolvedValue(passengerMock);

    const result = await findPassengerHandler.execute(new FindByIdentityCardCommand('12345678'));

    expect(result).toStrictEqual(passengerMock);
  });

  it('should be thrown an error when passenger not found', async () => {
    passengerRepository.findOneByIdentityCard = jest.fn().mockResolvedValue(null);

    const command = new FindByIdentityCardCommand('12345678');

    await expect(findPassengerHandler.execute(command)).rejects.toStrictEqual(new Error('Passenger not found'));
  })
})
