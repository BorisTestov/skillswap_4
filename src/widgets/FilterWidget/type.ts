import { CardPersonInfo } from "@/shared/lib/db/users/types";
import { Dispatch, SetStateAction } from "react";

export type FilterWidgetProps = {
  setFilteredUsers: Dispatch<SetStateAction<CardPersonInfo[]>>;
  setIsFilterLoading: Dispatch<SetStateAction<boolean>>;
  setIsCatalogLoading: Dispatch<SetStateAction<boolean>>;
}