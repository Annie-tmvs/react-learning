import { ReactNode } from "react";

export interface TableType {
  headerheight?: string;
  headerbackgroud?: string;
  headercolor?: string;
  textalign?: "left" | "center" | "right";
  theader: string[];
  tbody: { [key: string]: any }[];
  actioncell?: string;
  childern?: ReactNode;
  callback: (data: any) => void
}
