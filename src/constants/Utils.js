import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

export const TimeAgo = ({ customDate }) => {
  const [timeAgo, setTimeAgo] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const formattedTimeAgo = formatDistanceToNow(new Date(customDate), {
        addSuffix: true,
      });
      setTimeAgo(formattedTimeAgo);
    }, 1000);

    return () => clearInterval(interval);
  }, [customDate]);

  return <span>{timeAgo}</span>;
};

export const ReadingTime = ({ description }) => {
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
      const wordsPerMinute = 200;
      const wordCount =
      description?.split(/\s+/).length;
      const estimatedTime = Math.ceil(wordCount / wordsPerMinute);
      setReadingTime(estimatedTime);
    }, [description]);;
  
    return <span>{readingTime}</span>;
  };