import {Navigate, RouteObject} from "react-router-dom";
import App from "../../../App";

enum AppRoutes {
  MAIN = 'main',
  POSTS = 'posts',
  POST = 'post',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRoutePosts = () => '/posts';
export const getRoutePost = (id: string) => `/posts/${id}`;

const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <Navigate to={AppRoutes.POSTS} replace/>
  },
  [AppRoutes.POSTS]: {
    path: getRoutePosts(),
    element: <PostsPage/>,
  },
  [AppRoutes.POST]: {
    path: getRoutePost(':id'),
    element: <PostPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  }
}

export const newRouteConfig: RouteObject[] = [
  {
    element: <App />,
    children: Object.values(routeConfig)
  }
]