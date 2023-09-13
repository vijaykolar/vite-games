import { Button, Menu, MenuButton, MenuItem, MenuList } from "./chakra-ui";
import { FaChevronDown } from "react-icons/fa";

const sortOrders = [
  {
    value: "",
    label: "Relevance",
  },
  {
    value: "-added",
    label: "Date added",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "-release",
    label: "Release date",
  },
  {
    value: "-metacitric",
    label: "Popularity",
  },
  {
    value: "-rating",
    label: "Average rating",
  },
];

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sortOrder.value)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
