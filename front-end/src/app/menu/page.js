import MenuItems from '@/features/menu/MenuItems';
import { getPizza } from '@/services/apiServices';

const Menu = async () => {
  const menus = await getPizza();

  return (
    <>
      {menus.data.map((order) => (
        <MenuItems key={order.id} pizza={order} />
      ))}
    </>
  );
};

export default Menu;
