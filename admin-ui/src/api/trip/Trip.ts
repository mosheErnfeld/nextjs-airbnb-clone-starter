import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  listing?: Listing;
  tripInfo: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
