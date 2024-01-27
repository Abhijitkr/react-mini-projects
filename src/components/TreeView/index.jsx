import MenuList from "./menu-list";
import "./style.css";

export default function TreeView({ menus = [] }) {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Tree View Project</h1>
      <div className="tree-view">
        {menus && menus.length ? <MenuList list={menus} /> : null}
      </div>
    </div>
  );
}
