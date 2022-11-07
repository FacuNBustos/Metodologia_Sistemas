import { Booking } from "../../../../domain/entities/booking.entity";
import { Passenger } from "../../../../domain/entities/passenger.entity";
import PassengerMock from "./Passenger.mock";
import PassengerPaoloMock from "./PassengerPaolo.mock";
import AccommodationMock from "./Accommodation.mock";
import { BOOKING_STATES } from "../../../../domain/enum/Enum.state";

const BookingMock = Booking.fromPrimitives({
    id: "32959b98-9671-4b39-a1a8-3335a93672ff",
    owner: PassengerMock,
    passenger: [PassengerMock, PassengerPaoloMock],
    accommodation: AccommodationMock,
    from: new Date(new Date(Date.now()).getFullYear(), 7, 31),
    to: new Date(new Date(Date.now()).getFullYear(), 8, 30),
    status: BOOKING_STATES.PENDING
});

export default BookingMock;