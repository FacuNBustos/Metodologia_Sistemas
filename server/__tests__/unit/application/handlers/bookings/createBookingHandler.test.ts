import CreateBookingHandler from "../../../../../src/application/handlers/bookings/create.booking.handler";
import toMemoryBookingRepository from "../../../../../src/infraestructure/repositories/toMemoryBooking.repository";
import PassengerMock from "../../../../../src/infraestructure/mocks/domain/entities/Passenger.mock";
import PassengerPaoloMock from "../../../../../src/infraestructure/mocks/domain/entities/PassengerPaolo.mock";
import BookingMock from "../../../../../src/infraestructure/mocks/domain/entities/Booking.mock";
import CreateBookingCommandMock from "../../../../../src/infraestructure/mocks/application/commands/bookings/createBookingCommand.mock"
import { CreateBookingCommand } from "../../../../../src/application/commands/bookings/create.booking.command";
import AccommodationMock from "../../../../../src/infraestructure/mocks/domain/entities/Accommodation.mock";
import { findByIdPassengerCommand } from "../../../../../src/application/commands/passengers/findById.passenger.command";
import { findOneByIdAccommodationCommand } from "../../../../../src/application/commands/accommodations/findOneById.accommodation.command";

jest.mock("../../../../../src/infraestructure/repositories/toMemoryBooking.repository");

jest.mock("uuid", () => ({
    v4: () => BookingMock.getId()
}));

jest.mock("../../../../../src/infraestructure/repositories/passenger.repository", () => ({
    findOneById: (command: findByIdPassengerCommand) => {
        const savedPassengers = [PassengerMock, PassengerPaoloMock];
        for (const passenger of savedPassengers) {
            if (command.getId() === passenger.getId()) {
                return passenger;
            }
        }

        return null;
    }
}));

jest.mock("../../../../../src/infraestructure/repositories/accommodation.repository", () => ({
    findOneById: (command: findOneByIdAccommodationCommand) => AccommodationMock
}));

describe("Create Booking Handler Test", () => {
    const sut = CreateBookingHandler;

    it("creates and saves a booking for 2 passengers", async () => {
        await sut.execute(CreateBookingCommandMock);
        expect(toMemoryBookingRepository.save).toHaveBeenCalledWith(BookingMock);
    });

    it("creates a booking with non-existent owner", async () => {
        const nonExistingOwner = "03fee395-259c-4b37-8b54-f85f282ee600";

        const passengers = CreateBookingCommandMock.getPassengers();
        passengers.push(nonExistingOwner);

        const invalidCreateBookingCommand = new CreateBookingCommand(
            nonExistingOwner,
            passengers,
            CreateBookingCommandMock.getAccommodation(),
            "2022-7-31",
            "2022-8-30"
        );

        await expect(async () => {
            await sut.execute(invalidCreateBookingCommand);
        }).rejects.toThrow();
    });
});
