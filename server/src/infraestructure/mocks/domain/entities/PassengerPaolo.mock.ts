import { Passenger } from "../../../../domain/entities/passenger.entity";

const PassengerPaoloMock = Passenger.fromPrimitives({
    id: "38056152-d06e-4ea2-89bc-d3af827906a9",
    fullName: "Paolo Gamarra",
    email: "paologamarra@gmail.com",
    identityCard: "30150780"
});

export default PassengerPaoloMock;