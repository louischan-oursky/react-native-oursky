// @flow
import type { SeparatorsObj } from "react-native/Libraries/Lists/FlatList";

export type ListRenderItemInfo<itemT> = {
  index: number,
  item: itemT,
  separators: SeparatorsObj,
};
