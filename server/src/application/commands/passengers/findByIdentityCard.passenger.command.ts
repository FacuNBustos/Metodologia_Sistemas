
export class findByIdentityCardPassengerCommand {
  private readonly identityCard: string;

  public constructor(
    identityCard: string,
  ) {

    if (!identityCard) {
      throw new Error('Identity Card is required');
    }
   
    this.identityCard = identityCard;
  }

  getIdentityCard() {
    return this.identityCard;
  }
}
