import createPassengerHandler from "../../../../../src/application/handlers/passengers/create.passenger.handler";
import passengerRepository from "../../../../../src/infraestructure/repositories/passenger.repository";
import CreatePassengerCommandMock from "../../../../../src/infraestructure/mocks/application/commands/passengers/createPassengerCommand.mock";
import PassengerMock from "../../../../../src/infraestructure/mocks/domain/entities/Passenger.mock";

jest.mock("../../../../../src/infraestructure/repositories/passenger.repository");
jest.mock('uuid', () => ({
    v4: () => "310019b0-a496-486b-b347-a3726b26ba00"
}))

describe("Create Passenger Handler test", () => {

    const sut = createPassengerHandler;

    it("Correct saved passenger to repository", () => {
        sut.execute(CreatePassengerCommandMock);
        expect(passengerRepository.save).toHaveBeenCalledWith(PassengerMock);
    });
})