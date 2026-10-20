"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const formatETB = (value) =>
  new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 0,
  }).format(value);

export default function RevenueChart({ data }) {
  return (
    <div
      role="img"
      aria-label="Bar chart showing revenue by neighbourhood in Ethiopian birr"
      className="w-full"
    >
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="area" />
            <YAxis
              width={100}
              tickFormatter={(value) =>
                new Intl.NumberFormat("en-ET").format(value)
              }
            />
            <Tooltip
              formatter={(value) => [formatETB(value), "Revenue"]}
            />
            <Bar dataKey="revenue" name="Revenue" fill="#1B4D8E" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-2 text-sm text-gray-600">
        Exact values are available in the revenue summary table below.
      </p>
    </div>
  );
}