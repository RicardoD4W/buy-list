export const useCardDates = ({ created_at }) => {
  const horas = new Date(created_at).getHours();
  const minutos = new Date(created_at).getMinutes();
  const segundos = new Date(created_at).getSeconds();
  const hora = `${horas.toString().length == 1 ? `0${horas}` : horas}:${
    minutos.toString().length == 1 ? `0${minutos}` : minutos
  }:${segundos.toString().length == 1 ? `0${segundos}` : segundos}`;

  const dia = new Date(created_at).getDate();
  const mes = new Date(created_at).getMonth() + 1;
  const año = new Date(created_at).getFullYear();
  const fecha = `${dia.toString().length == 1 ? `0${dia}` : dia}/${
    mes.toString().length == 1 ? `0${mes}` : mes
  }/${año}`;

  return { hora, fecha };
};
