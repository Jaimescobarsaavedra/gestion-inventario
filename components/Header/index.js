import Button from "components/Button";
import Avatar from "components/Avatar";

export default function Header() {
  return (
    <>
      <header>
        <h3>Gestion Inventario</h3>
        <Avatar />
        <Button>Cerrar Sesión</Button>
      </header>
      <style jsx>{`
        header {
          background: #eee;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid black;
          padding: 8px 10px;
          font-size: 16px;
          position: sticky;
          top: 0;
        }
      `}</style>
    </>
  );
}
