import Button from "components/Button";
import Volver from "components/icons/Volver";
import useEquipos from "hooks/useEquipos";
import Link from "next/link";

export default function ReporteEquipos() {
  const { equipos } = useEquipos();

  return (
    <>
      <Link href="/ubicacion-equipo">
        <a>
          <Button>
            <Volver width={24} height={24} fill="#fff" />
            Volver
          </Button>
        </a>
      </Link>
      <div>
        <h1>Reporte de Equipos con su Ubicación</h1>
        <table>
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Fecha Alta</th>
              <th>Ubicación</th>
              <th>Creado Por</th>
              <th>Garantía</th>
            </tr>
          </thead>
          {equipos &&
            equipos.map((equipo) => (
              <tr>
                <td>{equipo.descripcion}</td>
                <td>{equipo.fecha}</td>
                <td>{equipo.ubicacion}</td>
                <td>{equipo.user}</td>
                <td>{equipo.garantia}</td>
              </tr>
            ))}
        </table>
      </div>
      <style jsx>{`
        div {
          margin: 16px 32px 16px 32px;
          border: 1px solid #bbb;
          height: 100%;
        }
        h1 {
          text-align: center;
          color: #00405c;
          text-decoration: underline;
        }
        table {
          background-color: white;
          text-align: left;
          border-collapse: collapse;
          width: 100%;
        }
        th {
          padding: 20px;
          text-align: center;
        }
        thead {
          background-color: #246355;
          border-bottom: solid 5px #0f362d;
          color: white;
        }
        tr:nth-child(even) {
          background-color: #ddd;
        }

        tr:hover td {
          background-color: #369681;
          color: white;
        }
        td {
          padding: 10px;
          text-align: center;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}