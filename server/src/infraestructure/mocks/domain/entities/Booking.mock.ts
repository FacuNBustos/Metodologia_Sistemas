import { Booking } from "../../../../domain/entities/booking.entity";
import { Passenger } from "../../../../domain/entities/passenger.entity";
import PassengerMock from "./Passenger.mock";
import AccommodationMock from "./Accommodation.mock";
import { BOOKING_STATES } from "../../../../domain/enum/Enum.state";

const SecondPassengerMock = Passenger.fromPrimitives({
    id: "38056152-d06e-4ea2-89bc-d3af827906a9",
    fullname: "Paolo Gamarra",
    email: "paologamarra@gmail.com",
    identityCard: "30150780"
});

const BookingMock = Booking.fromPrimitives({
    id: "32959b98-9671-4b39-a1a8-3335a93672ff",
    owner: PassengerMock,
    passenger: [PassengerMock, SecondPassengerMock],
    accommodation: AccommodationMock,
    from: new Date(new Date(Date.now()).getFullYear(), 7, 31),
    to: new Date(new Date(Date.now()).getFullYear(), 8, 30),
    status: BOOKING_STATES.PENDING
});

export default BookingMock;