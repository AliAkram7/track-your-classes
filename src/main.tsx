import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { Capacitor } from "@capacitor/core";
import {
  CapacitorSQLite,
  SQLiteConnection,
} from "@capacitor-community/sqlite";
import { JeepSqlite } from "jeep-sqlite/dist/components/jeep-sqlite";
import { GlobalContextProvider, useGlobalContext } from "./context/globalContext";
import { SplashScreen } from "@capacitor/splash-screen";



window.addEventListener("DOMContentLoaded", async () => {
  try {
    const platform = Capacitor.getPlatform();

    // WEB SPECIFIC FUNCTIONALITY
    if (platform === "web") {

      const sqlite = new SQLiteConnection(CapacitorSQLite);
      // Create the 'jeep-sqlite' Stencil component

      customElements.define("jeep-sqlite", JeepSqlite);

      const jeepSqliteEl = document.createElement("jeep-sqlite");

      document.body.appendChild(jeepSqliteEl);

      await customElements.whenDefined("jeep-sqlite");

      // Initialize the Web store
      await sqlite.initWebStore();
    }

 







    const container = document.getElementById("root");
    const root = createRoot(container!);
    root.render(
      <React.StrictMode>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </React.StrictMode>
    );
  } catch (e) {
    console.log(e);
  }
});
