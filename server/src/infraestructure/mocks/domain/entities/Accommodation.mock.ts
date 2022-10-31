import { Accommodation } from "../../../../domain/entities/accommodation.entity";

const AccommodationMock = Accommodation.fromPrimitives({
    id: "68c33e4d-3e21-4ac9-a450-15a2e04c15f5",
    name: "Hotel Menfis",
    pricePerNight: 2500
});

export default AccommodationMock;