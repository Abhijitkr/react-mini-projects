import MenuList from "./menu-list";
import "./style.css";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view">
      {menus && menus.length ? <MenuList list={menus} /> : null}
    </div>
  );
}
