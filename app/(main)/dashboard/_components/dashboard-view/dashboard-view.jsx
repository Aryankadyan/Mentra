" use client";

import React from 'react'

const DashboardView = ({insights}) => {
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min/ 1000,
    max: range.max / 1000,
    median: range.median / 1000,
  }))

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()){
      case "high":
        return "bg-green-500";
        case 'medium':
          return "bg-yellow-500";
        case 'low':
          return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  }

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()){
      case "positive":
        return { icon : TrendingUp, color: "text-green-500"};
      case 'neutral':
        return { icon : LineChart, color: "text-yellow-500"};
      case 'negative':
        return { icon : TrendingDown, color: "text-red-500"};
      default:
        return { icon : LineChart, color: "text-gray-500" }
    }
  }


  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  const lastUpdatedDate = format(new Date(insights, lastUpdated), "dd/MM/YY");
  return <div>DashboardView</div>
}

export default DashboardView
