import { useEffect, useState, useRef } from "react";
import {
  getAllProducts,
  getMyOwnId,
  suscribeAllEvents,
} from "../services/supabase";

export const useProduct = () => {
  const [productos, setProductos] = useState([]);
  const [id, setId] = useState();
  const [flag, setFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const productosCopy = useRef([]);

  useEffect(() => {
    suscribeAllEvents(setFlag);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getAllProducts().then((v) => {
      setProductos(v);
      productosCopy.current = v;
      setIsLoading(false);
    });
    getMyOwnId().then(setId);
  }, [flag]);

  return { productos, isLoading, productosCopy, setProductos };
};
