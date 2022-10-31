import CreatePassengerCommand from "../../../../../application/commands/passengers/create.passenger.command";

const CreatePassengerCommandMock = new CreatePassengerCommand(
    "Facundo Bustos",
    "admin@hotmail.com",
    "42788474"
);

export default CreatePassengerCommandMock;