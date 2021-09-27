export enum Status {
  Processing = 'This bill is currently in processing, it can take approx. 1-2 hours depending on the time of day',
  Schedule = "This bill is scheduled to be paid and will be paid on the due date, you're in good hands!",
  UnableToPay = 'This bill can be split into many sub-payments',
  Paid = 'Your bill has been paid',
}

export type StatusValues = keyof typeof Status;

export interface Bill {
  /**
   * unique id for the bill
   */
  id: string;
  /**
   * a thumbnail of the bill image
   */
  thumbnailUrl: string;
  /**
   * A full image for the bill
   */
  url: string;
  /**
   * Amount of the bill in AUD
   */
  amount: number;
  /**
   * Date the bill was generated in ISO format
   */
  date: Date;
  /**
   * Status of the bill
   */
  status: StatusValues;
  /**
   * Custom extra data to show on opening popup of the bill
   */
  extra: {
    statusDescription: string;
    name: string;
    paid: boolean;
  };
}

// export interface BillCollection {
//   [id: string]: Bill;
// }

/**
 * API Response error object
 */
export class ResponseError extends Error {
  public readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }

  toString() {
    return `${this.status}: ${this.message}`;
  }
}
