export interface ItemProduct {
  id: number;
  user_id: number;
  nombre: string;
  fecha: string;
  product: string;
  description?: string;
  uds: number;
  supermarket: (typeof supermercadosValue)[0];
  created_at: Date;
  updated_at: Date;
  importancy: number;
}
// TODO Cambiar tipo string a Date en fecha
// TODO Hacer que el usuario gestione sus propios supermercados
// TODO arreflar esto

export const supermercadosValue = [
  "Cualquiera",
  "Dia",
  "Carrefour",
  "Expósito",
  "Lidl",
  "Mercadona",
  "Jaén Plaza",
  "ElcorteInglés",
  "Farmacia",
];

export const importanciaValue = [
  "No lo necesitamos pero por si lo ves",
  "Para un futuro",
  "Cuando se acabe el que tenemos",
  "Necesitaríamos para este mes",
  "Necesitaríamos para esta semana",
  "No hay y necesitamos",
];

export interface FetchUserRoom {
  user: [
    id: string,
    name: string,
    description: string,
    created_at: Date | null,
    updated_at: Date | null,
    pivot: {
      user_id: number;
      room_id: string;
    }
  ];
}
