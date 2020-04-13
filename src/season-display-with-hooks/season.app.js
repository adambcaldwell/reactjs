import React, { useEffect, useState } from 'react';
import SeasonDisplay from './season-display.component';
import Spinner from './spinner.component';
import useLocation from './use-location';

const SeasonAppHooks = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border-red">{content}</div>;
};

export default SeasonAppHooks;
