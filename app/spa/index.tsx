import {
  matchRoutes,
  Navigate,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "@remix-run/react";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

const ExamplePage = () => {
  return (
    <div>
      <h1>Example Page</h1>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <HomePage />,
    index: true,
  },
  {
    path: "/example",
    element: <ExamplePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default function MigratedSPA() {
  // case one - this is broken and will route to "/"
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );

  //-----------------------------------
  // case two - this is broken and will route to "/"
  // const element = useRoutes(routes);
  // return element;

  //-----------------------------------
  // case three - this is the only one that works
  // const location = useLocation();
  // const matchedRoute = matchRoutes(routes, location.pathname);

  // if (!matchedRoute || matchedRoute.length === 0) {
  //   return <Navigate to="/404" />;
  // }

  // return matchedRoute[0].route.element;
}
