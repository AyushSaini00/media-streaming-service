import { useCallback, useState } from "react";

const useSidebar = (defaultIsOpen = false, options = {}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(defaultIsOpen);
  const { prefix = "" } = options;

  const openSidebar = useCallback(() => {
    setIsSidebarOpen(true);
  }, []);
  const dismissSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return {
    [`is${prefix}SidebarOpen`]: isSidebarOpen,
    [`open${prefix}Sidebar`]: openSidebar,
    [`dismiss${prefix}Sidebar`]: dismissSidebar,
  };
};

export default useSidebar;
