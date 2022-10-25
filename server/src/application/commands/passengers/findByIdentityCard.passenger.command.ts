import Joi from "joi";

export class findByIdentityCardPassengerCommand {
  private readonly identityCard: string;

  public constructor(
    identityCard: string,
  ) {

    const validIdentityCard = Joi.string().max(15).required();
    
    validIdentityCard.validate(identityCard);

    this.identityCard = identityCard;
  }

  getIdentityCard() {
    return this.identityCard;
  }
}
