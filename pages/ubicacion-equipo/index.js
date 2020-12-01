import { useEffect, useState } from "react";
import Equipo from "components/Equipo";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import useUser from "hooks/useUser";

import { obtenerEquipos } from "firebase/client";
import Head from "next/head";

export default function UbicacionEquipo() {
  const [equipos, setEquipos] = useState();
  const [perifericos, setPerifericos] = useState();
  const [proveedores, setProveedores] = useState();

  const user = useUser();

  // console.log(equipos, perifericos);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      obtenerEquipos(setEquipos, setPerifericos, setProveedores);
    }

    return () => unsubscribe && unsubscribe();
  }, [user]);

  return (
    <>
      <Head>
        <title>Ubicación Equipos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <Sidebar />
        <section>
          <h1>Ubicación Equipos</h1>
          <div className="table">
            <Equipo
              equipos={equipos}
              perifericos={perifericos}
              boton={"ver detalle"}
            />
          </div>
        </section>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          height: 100%;
        }
        section {
          border: 1px solid #eee;
          width: 100%;
          height: 100%;
          padding: 4px 0 4px 16px;
          overflow: hidden;
        }
        h1 {
          color: red;
          text-align: center;
        }
      `}</style>
    </>
  );
}
