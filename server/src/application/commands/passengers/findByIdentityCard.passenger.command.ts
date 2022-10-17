
export class findByIdentityCardPassengerCommand {
  private readonly identityCard: any;

  public constructor(
    identityCard: any,
  ) {

    if (!identityCard) {
      throw new Error('Identity Card is required');
    }

    if (typeof identityCard !== "string") {
      throw new Error('idcard param must be string');
    }
   
    this.identityCard = identityCard;
  }

  getIdentityCard() {
    return this.identityCard;
  }
}
