import { CreateBookingCommand } from "../../../../../application/commands/bookings/create.booking.command";
import PassengerMock from "../../../domain/entities/Passenger.mock";
import PassengerPaoloMock from "../../../domain/entities/PassengerPaolo.mock";
import AccommodationMock from "../../../domain/entities/Accommodation.mock";

const CreateBookingCommandMock = new CreateBookingCommand(
    PassengerMock.getId(),
    [PassengerMock.getId(), PassengerPaoloMock.getId()],
    AccommodationMock.getId(),
    "2022-7-31",
    "2022-8-30",
)

export default CreateBookingCommandMock;
