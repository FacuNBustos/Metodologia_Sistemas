import { Passenger } from "../../../../domain/entities/passenger.entity";

const PassengerMock = Passenger.fromPrimitives({
    id: "310019b0-a496-486b-b347-a3726b26ba00",
    fullName: "Facundo Bustos",
    email: "admin@hotmail.com",
    identityCard: "42788474"
});

export default PassengerMock;
