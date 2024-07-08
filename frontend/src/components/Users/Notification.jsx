import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io(import.meta.env.VITE_BACKEND_BASEURL);

const MAX_INITIAL_DISPLAY = 5; // Maximum number of notifications to display initially

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [fetchingNotifications, setFetchingNotifications] = useState(true);
  const [visibleNotifications, setVisibleNotifications] = useState(MAX_INITIAL_DISPLAY);

  useEffect(() => {
    const fetchInitialNotifications = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/event`
        );
        setNotifications(response.data); // Set initial notifications
        setFetchingNotifications(false); // Update fetching state
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    if (fetchingNotifications) {
      fetchInitialNotifications();
    }

    socket.on("newEvent", (event) => {
      // Prepend new events to the notifications array
      setNotifications(prevNotifications => [event, ...prevNotifications]);
    });

    return () => {
      socket.off("newEvent");
    };
  }, [fetchingNotifications]); // Remove notifications from dependencies

  const handleClearNotifications = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/clear-notifications`
      );
      setNotifications([]);
      setFetchingNotifications(true);
    } catch (error) {
      console.error("Error clearing notifications:", error);
    }
  };

  const handleViewMore = () => {
    setVisibleNotifications(prevVisible => prevVisible + MAX_INITIAL_DISPLAY);
  };

  return (
    <div className="absolute z-50 top-16 right-0 bg-white shadow-lg rounded-lg p-4 w-72">
      {notifications.length > 0 && (
        <button
          onClick={handleClearNotifications}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Clear Notifications
        </button>
      )}
      <div className="flex flex-col space-y-2">
        {notifications.length === 0 ? (
          <p className="text-gray-600 text-xs">No new notifications present</p>
        ) : (
          notifications.slice(0, visibleNotifications).map((notification, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-lg shadow-sm">
              <div className="flex justify-between mb-1">
                <h4 className="text-sm font-semibold">{notification.instructor}</h4>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
              <p className="text-gray-600 text-xs mb-1">{notification.title}</p>
            </div>
          ))
        )}
        {notifications.length > visibleNotifications && (
          <button
            onClick={handleViewMore}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default Notification;
