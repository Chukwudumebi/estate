import { Root, Trigger, Portal, Content, CheckboxItem, ItemIndicator, Arrow } from '@radix-ui/react-dropdown-menu';
import { FaCheck } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useStoreItems } from '../../context/storeItemsContext';
import { useItems } from '../../context/ItemsContext';

function DropdownMenu({ itemId }) {
  const { storeItems, dispatch } = useStoreItems();
  const item = storeItems.find((item) => item.id === itemId);
  const { dispatch: itemDispatch } = useItems();

  const toggleOnSale = () => {
    item.selected = false;
    if (item.isOnSale) {
      itemDispatch({
        type: 'DELETE_ITEM',
        payload: itemId,
      });
    } else {
      itemDispatch({
        type: 'CREATE_ITEM',
        payload: item,
      });
    }
    dispatch({
      type: 'EDIT_ITEM',
      payload: {
        id: itemId,
        isOnSale: !item.isOnSale,
      },
    });
  };

  return (
    <Root>
      <Trigger asChild>
        <button
          type="button"
          className="flex h-fit w-fit self-center rounded-md bg-sky-600 px-2 py-2"
          aria-label="item actions"
        >
          Actions
        </button>
      </Trigger>
      <Portal>
        <Content className="rounded-md bg-white p-2 font-grotesk text-sm shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
          {/* <CheckboxItem
            className="data-[disabled]:text-mauve8 group relative flex select-none items-center rounded-md py-2 px-[5px] pl-[25px] leading-none text-neutral-900 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-sky-600 data-[highlighted]:text-white"
            // checked={bookmarksChecked}
            // onCheckedChange={setBookmarksChecked}
          >
            <ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
              <FaCheck />
            </ItemIndicator>
            Add to Mailing List
          </CheckboxItem> */}
          <CheckboxItem
            className="data-[disabled]:text-mauve8 relative flex select-none items-center rounded-md py-2 px-[5px] pl-[25px] leading-none text-neutral-900 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-sky-600 data-[highlighted]:text-white"
            checked={item.isOnSale}
            onCheckedChange={toggleOnSale}
          >
            <ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
              <FaCheck />
            </ItemIndicator>
            Place Property on sale
          </CheckboxItem>
          <Arrow className="fill-white" />
        </Content>
      </Portal>
    </Root>
  );
}

DropdownMenu.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default DropdownMenu;
