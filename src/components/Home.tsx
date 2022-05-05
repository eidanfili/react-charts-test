import * as React from "react";
import DeviceChart from "./DeviceChart";
import Layout from "./Layout";
import { name } from "../utils/generators";
import RadialChart from "./RadialGradientChart";

export default function Home() {
  return (
    <Layout>
      <h2>{name("Eidan", "Ledezma")}</h2>
      <DeviceChart
        options={{
          colors: ["#574899", "#305085", "#f5a623"],
          labels: ["Desktop", "Mobile", "Tablet"],
        }}
      />

      <DeviceChart
        options={{
          colors: ["#c00", "#3469a7", "#c1b01e"],
          labels: ["Smartphones", "laptops", "ipads"],
        }}
      />
      <RadialChart />
    </Layout>
  );
}
