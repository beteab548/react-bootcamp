import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import EventItem, {
  eventDeleteAction,
  eventLoader,
} from "./components/EventItem";
import EventForm, { EventSubmission } from "./components/EventForm";
import EventsNavigation from "./components/EventsNavigation";
import ErrorDisplay from "./components/errorcomponent";
import NewsletterPage, {
  action as newsletterAction,
} from "./components/pages/newsLettes";
import EventLists, {
  Loader as eventsLoader,
} from "./components/pages/eventLists";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      errorElement: <ErrorDisplay />,
      children: [
        {
          path: "/events",
          element: <EventsNavigation />,
          children: [
            {
              path: "",
              element: <EventLists />,
              loader: eventsLoader,
            },
            {
              path: ":eventID",
              id: "event-loader",
              loader: eventLoader,
              action: eventDeleteAction,
              children: [
                { path: "", element: <EventItem /> },
                {
                  path: "edit",
                  element: <EventForm method={"PATCH"} />,
                  action: EventSubmission,
                },
              ],
            },
            {
              path: "new",
              element: <EventForm method={"POST"} />,
              action: EventSubmission,
            },
          ],
        },
        {
          path: "/newsletter",
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
