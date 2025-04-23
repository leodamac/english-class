import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import MensajeDeCarga from "./components/MensajeDeCarga/MensajeDeCarga";

// Tipar modules con el tipo adecuado para lazy loading
const modules = import.meta.glob<{ default: React.ComponentType }>(
  "./pages/**/[A-Za-z]*.tsx"
);

const grouped: Record<string, { path: string; file: string }[]> = {};

// Agrupar archivos por carpeta
Object.keys(modules).forEach((path) => {
  const match = path.match(/\.\/pages\/(.+?)\/([^.]+)\.tsx$/);
  if (!match) return;

  const folder = match[1];
  const file = match[2];

  if (!grouped[folder]) grouped[folder] = [];
  grouped[folder].push({ path, file });
});

// Construir rutas automáticas
const autoRoutes = Object.values(grouped).flatMap((files) => {
  if (files.length === 1) {
    const { path } = files[0];
    const name = path.match(/\.\/pages\/(.+?)\//)?.[1] || "";
    const Component = lazy(modules[path]);
    return {
      path: `/${name.toLowerCase()}`,
      element: <Component />,
    };
  } else {
    return files.map(({ path, file }) => {
      const folder = path.match(/\.\/pages\/(.+?)\//)?.[1] || "";
      const Component = lazy(modules[path]);
      const isIndex = file.toLowerCase() === "index";
      return {
        path: isIndex
          ? `/${folder.toLowerCase()}`
          : `/${folder.toLowerCase()}/${file.toLowerCase()}`,
        element: <Component />,
      };
    });
  }
});

// Rutas manuales (si es necesario)
const Main = lazy(() => import("./pages/Main"));

const manualRoutes = [
  {
    path: "*",
    element: <Main />,
  },
];

// Combinar rutas
const routes = [...autoRoutes, ...manualRoutes];

// AppRoutes
export const AppRoutes = () => {
  return (
    <Suspense fallback={<MensajeDeCarga mensaje="Loading..." />}>
      {useRoutes(routes)}
    </Suspense>
  );
};
