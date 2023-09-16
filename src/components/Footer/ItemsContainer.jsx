import Item from "./Item";
import { OUSSAMA, ZOHIR, LAID, HADIA, SARAH } from "@/pages/Menus";
const ItemsContainer = () => {
  return (
    <div className=" text-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-6 py-16">
      <Item Links={OUSSAMA} title="OUSSAMA BARKA" />
      <Item Links={ZOHIR} title="ZOHIR KIOUKIOU" />
      <Item Links={LAID} title="LAID BENGLIA" />
      <Item Links={HADIA} title="HADIA DJADALLAH" />
      <Item Links={SARAH} title="SARAH BEGHACHE" />
    </div>
  );
};

export default ItemsContainer;
