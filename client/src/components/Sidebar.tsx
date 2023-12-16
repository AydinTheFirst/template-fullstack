import { Sidebar } from "flowbite-react";
import { AvatarBox } from "./Avatar";
import { pages, socials } from "../utils/Contants";

export const SideComponent = (props: { isOpen?: boolean }) => {
  const { isOpen } = props;

  const style: React.CSSProperties = {
    marginRight: isOpen ? "0" : "-280px",
    transition: "margin-right 0.35s ease-in-out",
    marginTop: document.body.style.paddingTop,
    height: "calc(100vh - " + document.body.style.paddingTop + ")",
    zIndex: 999,
  };

  return (
    <div>
      <Sidebar className="fixed top-0 right-0" style={style}>
        <Sidebar.Items className="relative h-full">
          <Sidebar.ItemGroup>
            {pages.map((p) => {
              return (
                <Sidebar.Item key={p.name} href={p.href} icon={p.icon}>
                  {p.name}
                </Sidebar.Item>
              );
            })}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            {socials.map((p) => {
              return (
                <Sidebar.Item key={p.name} href={p.href} icon={p.icon}>
                  {p.name}
                </Sidebar.Item>
              );
            })}
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup className="absolute w-full bottom-0">
            <AvatarBox />
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
