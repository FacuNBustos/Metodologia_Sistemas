import createAccommodationHandler from "../../../../../src/application/handlers/accommodations/create.accommodation.handler";
import accommodationRepository from "../../../../../src/infraestructure/repositories/accommodation.repository";
import CreateAccommodationCommandMock from "../../../../../src/infraestructure/mocks/application/commands/accomodations/createAccomodationCommand.mock";
import AccommodationMock from "../../../../../src/infraestructure/mocks/domain/entities/Accommodation.mock";

jest.mock("../../../../../src/infraestructure/repositories/accommodation.repository");
jest.mock('uuid', () => ({
    v4: () => "68c33e4d-3e21-4ac9-a450-15a2e04c15f5"
}))

describe ("create accommodation handler test", () =>{
    
    const sut = createAccommodationHandler;
    
    it("Correct saved accomodation to repository", () => {
        sut.execute(CreateAccommodationCommandMock);
        expect(accommodationRepository.save).toHaveBeenCalledWith(AccommodationMock);
    });
})