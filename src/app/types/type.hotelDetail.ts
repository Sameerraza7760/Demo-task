import { Moment } from "moment";

export interface hoteLDetail {
  owner: string;
  BookedDate: Moment | string;
  noOfrooms: number;
  noOfGuests: number;
  hotelImage: string | undefined;
  hotelId?: string | undefined;
}
