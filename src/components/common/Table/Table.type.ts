export interface TableType {
  headerheight?: string;
  headerbackgroud?: string;
  headercolor?: string;
  textAlign?: "left" | "center" | "right";
  theader: string[];
  tbody: { [key: string]: any }[];
}
