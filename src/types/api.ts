export interface ItemProduct {
  id: number;
  userId: number;
  nombre: string;
  fecha: string;
  producto: string;
  cantidad: number;
  supermercado: Supermercado;
  hora: `${string}:${string}:${string}`;
  importancia: number;
}
// TODO Cambiar tipo string a Date en fecha
// TODO Hacer que el usuario gestione sus propios supermercados
type Supermercado =
  | "Cualquiera"
  | "Dia"
  | "Carrefour"
  | "Expósito"
  | "Lidl"
  | "Mercadona"
  | "Jaén Plaza"
  | "ElcorteInglés"
  | "Farmacia";
