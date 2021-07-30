import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import SimpleBarReact from "simplebar-react";
import Ripple from "react-waves-effect/lib";

const navigation_buttons = [
  {
    to: "/dashboard",
    icon: (<path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />),
    title: "Dashboard"
  },
  {
    to: "/jurisdictions",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    ),
    title: "Jurisdictions"
  },
  {
    to: "/modules",
    icon: (<path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
    />),
    title: "Modules"
  },
  {
    to: "/souls",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    ),
    title: "Souls"
  },
  {
    to: "/profile",
    icon: (<path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />),
    title: "Profile"
  },
  {
    to: "/myDesocs",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    title: "My Desocs"
  }
]

const Sidebar = () => {
  const location = useLocation();
  const [hoveredsidebar, setHoveredsidebar] = useState(false);
  const [width, setwidth] = useState("275px");

  const navigate = useNavigate();
  return (
    <div className=" relative h-screen">
      <div
        className={`flex h-full mt-0 z-40 transition-all duration-200 bg-[#171717]`}
        onMouseEnter={() => (hoveredsidebar ? setwidth("275px") : null)}
        onMouseLeave={() => (hoveredsidebar ? setwidth("75px") : null)}
      >
        <div className="flex flex-col w-full overflow-y-hidden h-full">
          <div className="py-7 w-full flex justify-center space-x-3 items-center z-50">
            <div className=" cursor-pointer" onClick={() => {
              navigate({
                pathname: '/'
              })
            }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/tilata-icon.png`}
                alt="logo"
                className={`${hoveredsidebar && width !== "275px"
                  ? "hidden"
                  : "inline-block"
                  } w-5`}
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/tilata-icon.png`}
                alt="logo"
                className={`${hoveredsidebar && width !== "275px"
                  ? "inline-block"
                  : "hidden"
                  } w-5`}
              />
            </div>
            <span className=" text-base text-white font-semibold">Tilata</span>
          </div>
          <div className="flex justify-center w-full mb-7 mt-4">
            <Ripple radius="999px" pointer onClick={() =>{}}>
              <div className=" rounded-full px-10 py-4 bg-[#58CEA1] text-white">Connect Wallet</div>
            </Ripple>
          </div>
          <div className="flex flex-col overflow-x-hidden ">
            <div className="flex flex-col w-full">
              {navigation_buttons.map((v, i) => (
                <Link
                  key={i}
                  to={v.to}
                  className={`text-white border flex items-center py-2 px-10 my-1 mx-3 rounded-xl transition-all duration-200 cursor-pointer${location.pathname === v.to
                    ? " bg-opacity-30 border-[#7AEDC1]"
                    : " hover:bg-white hover:bg-opacity-20  border-[#171717]"
                    }`}
                >
                  <span className=" inline-block w-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      {v.icon}
                    </svg>
                  </span>
                  <span
                    className={`${hoveredsidebar && width !== "275px"
                      ? "hidden"
                      : "inline-block"
                      } font-normal text-xs transition-all duration-500`}
                  >
                    {v.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Sidebar;
 