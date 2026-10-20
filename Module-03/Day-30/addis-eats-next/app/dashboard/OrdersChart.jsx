"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function OrdersChart({ data }) {
  return (
    <div
      role="img"
      aria-label="Line chart showing the number of orders per day"
      className="w-full"
    >
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="day"
              tickFormatter={(day) => day.slice(5)}
            />

            <YAxis
              allowDecimals={false}
              domain={[0, "auto"]}
              width={40}
            />

            <Tooltip
              labelFormatter={(day) => `Date: ${day}`}
              formatter={(value) => [value, "Orders"]}
            />

            <Line
              type="monotone"
              dataKey="orders"
              name="Orders"
              stroke="#1B4D8E"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-2 text-sm text-gray-600">
        Daily order counts are also available in the dashboard's accessible
        data summaries.
      </p>
    </div>
  );
}