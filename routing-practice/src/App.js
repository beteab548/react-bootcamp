// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import EventsList, { Loader as eventsLoader } from "./components/EventsList";
import EventItem, {
  eventDeleteAction,
  eventLoader,
} from "./components/EventItem";
import EventForm, { createEvent } from "./components/EventForm";
import EventsNavigation from "./components/EventsNavigation";
import ErrorDisplay from "./components/errorcomponent";
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
              element: <EventsList />,
              loader: eventsLoader,
            },
            {
              path: ":eventID",
              id: "event-loader",
              loader: eventLoader,
              action: eventDeleteAction,
              children: [
                { path: "", element: <EventItem /> },
                { path: "edit", element: <EventForm /> },
              ],
            },
            { path: "new", element: <EventForm />, action: createEvent },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
