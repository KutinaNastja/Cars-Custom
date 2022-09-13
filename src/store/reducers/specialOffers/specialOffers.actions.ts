import { createAction } from "typesafe-actions";

export const specialOffersActions = {
  open: createAction("@SPECIALOFFERS.open.COMMIT")(),
  close: createAction("@SPECIALOFFERS.close.COMMIT")(),
};
